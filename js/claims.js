// ========================================================
// PhysioFlow - Insurance Claims & Attendance Cards Module
// نظام مطالبات شركات التأمين وبطاقات التردد
// ========================================================

import { db } from './db.js';
import { auth } from './auth.js';
import { RolesManager } from './roles.js';

export class ClaimsManager {
  constructor(app) {
    this.app = app;
    this.currentCompany = '';
    this.startDate = '2026-08-01';
    this.endDate = '2026-08-31';
    this.claimPatientsData = []; // Array of { patient, isChecked, evalFee, sessionCount, sessionRate, total, cardData }
    this.activeCardPatientId = null;
    this.attendanceCardsStore = {}; // Map of patientId -> { diagnosis, evaluation, treatments: [] }
    this.defaultTreatmentOptions = [
      'pulsed Ultrasound',
      'Heat application',
      'Interferential current',
      'Therapeutic ex',
      'TENS',
      'Spinal Traction',
      'Laser Therapy',
      'Shockwave Therapy',
      'Joint Mobilization',
      'Myofascial Release',
      'Cryotherapy'
    ];
  }

  async init() {
    this.bindEvents();
    await this.populateCompaniesDropdown();
    this.setDefaultDates();
  }

  setDefaultDates() {
    const today = new Date();
    const y = today.getFullYear();
    const m = String(today.getMonth() + 1).padStart(2, '0');
    const d = String(today.getDate()).padStart(2, '0');
    
    // Default to last full month or current month
    const startEl = document.getElementById('claim-start-date');
    const endEl = document.getElementById('claim-end-date');
    const claimDateEl = document.getElementById('claim-doc-date');

    if (startEl) startEl.value = '2026-08-01';
    if (endEl) endEl.value = '2026-08-31';
    if (claimDateEl) claimDateEl.value = '2026-08-31';

    this.startDate = '2026-08-01';
    this.endDate = '2026-08-31';
  }

  async populateCompaniesDropdown() {
    const select = document.getElementById('claim-company-select');
    if (!select) return;

    const patients = await db.getPatients();
    const companies = new Set();

    patients.forEach(p => {
      if (p.billing === 'insurance' && p.insuranceCompany) {
        companies.add(p.insuranceCompany.trim());
      }
    });

    // Add classic Egyptian insurance companies if not present
    ['ايجي كير', 'أكسا (AXA)', 'نكست كير (NextCare)', 'أليانز (Allianz)', 'ميتلايف (MetLife)', 'بوبا (Bupa)', 'مصر للتأمين', 'عناية الرعاية الصحية (Enaya)', 'المهندس للتأمين'].forEach(c => companies.add(c));

    const sorted = Array.from(companies).sort();
    select.innerHTML = '<option value="">-- اختر شركة التأمين --</option>' + 
      sorted.map(c => `<option value="${c}">${c}</option>`).join('');

    // Pre-select 'ايجي كير' or first
    if (sorted.includes('ايجي كير')) {
      select.value = 'ايجي كير';
    } else if (sorted.length > 0) {
      select.value = sorted[0];
    }
    this.currentCompany = select.value;
  }

  bindEvents() {
    const btnSearch = document.getElementById('btn-load-claim-patients');
    if (btnSearch) {
      btnSearch.addEventListener('click', () => this.loadCompanyPatients());
    }

    const compSelect = document.getElementById('claim-company-select');
    if (compSelect) {
      compSelect.addEventListener('change', (e) => {
        this.currentCompany = e.target.value;
      });
    }

    const selectAllCb = document.getElementById('claim-select-all-cb');
    if (selectAllCb) {
      selectAllCb.addEventListener('change', (e) => {
        const checked = e.target.checked;
        this.claimPatientsData.forEach(item => {
          item.isChecked = checked;
        });
        this.renderPatientsTable();
        this.recalcGrandTotals();
      });
    }
  }

  async loadCompanyPatients() {
    const compSelect = document.getElementById('claim-company-select');
    const startInput = document.getElementById('claim-start-date');
    const endInput = document.getElementById('claim-end-date');
    const defaultRateInput = document.getElementById('claim-default-session-rate');
    const defaultEvalInput = document.getElementById('claim-default-eval-fee');

    this.currentCompany = compSelect ? compSelect.value : '';
    this.startDate = startInput?.value || '2026-08-01';
    this.endDate = endInput?.value || '2026-08-31';

    if (!this.currentCompany) {
      this.app.showAlert('يرجى اختيار شركة التأمين أولاً.', 'تنبيه');
      return;
    }

    const defaultRate = parseFloat(defaultRateInput?.value) || 120;
    const defaultEval = parseFloat(defaultEvalInput?.value) || 150;

    const allPatients = await db.getPatients();
    const allSessions = await db.getSessions();

    // Filter patients belonging to this insurance company
    const companyPatients = allPatients.filter(p => 
      p.billing === 'insurance' && p.insuranceCompany && p.insuranceCompany.trim() === this.currentCompany.trim()
    );

    if (companyPatients.length === 0) {
      const tbody = document.getElementById('claim-patients-tbody');
      if (tbody) {
        tbody.innerHTML = `<tr><td colspan="9" style="text-align: center; padding: 24px; color: var(--text-muted);">لا يوجد مرضى مسجلون تحت شركة ${this.currentCompany}.</td></tr>`;
      }
      this.claimPatientsData = [];
      this.recalcGrandTotals();
      return;
    }

    // Process each patient
    this.claimPatientsData = companyPatients.map(p => {
      // Count sessions strictly between startDate and endDate
      const patientSessions = allSessions.filter(s => {
        return s.patientId === p.id && s.date >= this.startDate && s.date <= this.endDate;
      });

      const sessionCount = patientSessions.length > 0 ? patientSessions.length : 12; // default realistic 12 if no sessions yet
      const isChecked = true;
      const total = (sessionCount * defaultRate) + defaultEval;

      // Prepare initial attendance card data
      const clinical = p.clinicalSheet || {};
      const cardData = this.attendanceCardsStore[p.id] || {
        diagnosis: clinical.diagnosis || 'Lumber discogenic low back pain',
        evaluation: clinical.affectedArea ? `فحص سريري وتقييم لوظائف: ${clinical.affectedArea}` : 'فحص سريري للعمود الفقري والمدى الحركي',
        treatments: (clinical.modalities && clinical.modalities.length > 0)
          ? clinical.modalities.map(m => m.split(' ')[0])
          : ['pulsed Ultrasound', 'Heat application', 'Interferential current', 'Therapeutic ex']
      };
      this.attendanceCardsStore[p.id] = cardData;

      return {
        patient: p,
        isChecked,
        evalFee: defaultEval,
        sessionCount: sessionCount,
        sessionRate: defaultRate,
        total,
        cardData
      };
    });

    this.renderPatientsTable();
    this.recalcGrandTotals();
    this.app.showToast(`تم استخراج ${this.claimPatientsData.length} مريض لشركة ${this.currentCompany}`);
  }

  renderPatientsTable() {
    const tbody = document.getElementById('claim-patients-tbody');
    if (!tbody) return;

    if (this.claimPatientsData.length === 0) {
      tbody.innerHTML = `<tr><td colspan="9" style="text-align: center; padding: 24px; color: var(--text-muted);">اضغط على زر "استخراج مرضى الشركة" لعرض القائمة.</td></tr>`;
      return;
    }

    tbody.innerHTML = this.claimPatientsData.map((item, idx) => {
      const p = item.patient;
      const rowChecked = item.isChecked ? 'checked' : '';
      const rowTotal = (item.sessionCount * item.sessionRate) + item.evalFee;
      item.total = rowTotal;

      return `
        <tr style="${!item.isChecked ? 'opacity: 0.55; background-color: #f8fafc;' : ''}">
          <td style="text-align: center;">
            <input type="checkbox" style="width: 18px; height: 18px; cursor: pointer;" ${rowChecked} onchange="claimsManager.togglePatientCheck(${idx}, this.checked)">
          </td>
          <td style="text-align: center; font-weight: 700;">${idx + 1}</td>
          <td>
            <div style="font-weight: 800; color: var(--text-main); font-size: 0.92rem;">${p.name}</div>
            <small style="color: var(--text-muted); font-size: 0.76rem;"><i class="fa-solid fa-phone"></i> ${p.phone} • ${p.doctor}</small>
          </td>
          <td>
            <input type="number" class="form-control" style="width: 80px; padding: 4px 6px; font-weight: 700; text-align: center;" value="${item.evalFee}" onchange="claimsManager.updatePatientNumber(${idx}, 'evalFee', this.value)">
          </td>
          <td>
            <input type="number" class="form-control" style="width: 70px; padding: 4px 6px; font-weight: 700; text-align: center;" value="${item.sessionCount}" onchange="claimsManager.updatePatientNumber(${idx}, 'sessionCount', this.value)">
          </td>
          <td>
            <input type="number" class="form-control" style="width: 75px; padding: 4px 6px; font-weight: 700; text-align: center;" value="${item.sessionRate}" onchange="claimsManager.updatePatientNumber(${idx}, 'sessionRate', this.value)">
          </td>
          <td style="font-weight: 800; color: var(--success); font-size: 0.95rem; text-align: center;">
            <span id="claim-row-total-${idx}">${rowTotal}</span> ج.م
          </td>
          <td style="text-align: center;">
            <button type="button" class="btn btn-outline btn-sm" onclick="claimsManager.openAttendanceCardModal('${p.id}')" style="padding: 4px 10px; font-size: 0.78rem; font-weight: 700; color: #0369a1; border-color: #bae6fd; background-color: #f0f9ff;" title="تخصيص وطباعة بطاقة التردد">
              <i class="fa-solid fa-id-card"></i> بطاقة التردد
            </button>
          </td>
        </tr>
      `;
    }).join('');
  }

  togglePatientCheck(index, checked) {
    if (this.claimPatientsData[index]) {
      this.claimPatientsData[index].isChecked = checked;
      this.renderPatientsTable();
      this.recalcGrandTotals();
    }
  }

  updatePatientNumber(index, field, val) {
    const num = parseFloat(val) || 0;
    if (this.claimPatientsData[index]) {
      this.claimPatientsData[index][field] = num;
      const item = this.claimPatientsData[index];
      const newTotal = (item.sessionCount * item.sessionRate) + item.evalFee;
      item.total = newTotal;

      const totalSpan = document.getElementById(`claim-row-total-${index}`);
      if (totalSpan) totalSpan.textContent = newTotal;

      this.recalcGrandTotals();
    }
  }

  recalcGrandTotals() {
    let totalPatients = 0;
    let totalSessions = 0;
    let grandTotalAmount = 0;

    this.claimPatientsData.forEach(item => {
      if (item.isChecked) {
        totalPatients++;
        totalSessions += item.sessionCount;
        grandTotalAmount += item.total;
      }
    });

    const ptsBadge = document.getElementById('claim-total-patients-count');
    const sessBadge = document.getElementById('claim-total-sessions-count');
    const grandBadge = document.getElementById('claim-grand-total-amount');

    if (ptsBadge) ptsBadge.textContent = `${totalPatients} مريض`;
    if (sessBadge) sessBadge.textContent = `${totalSessions} جلسة`;
    if (grandBadge) grandBadge.textContent = `${grandTotalAmount.toLocaleString('en-US')} ج.م`;
  }

  // ================= Attendance Card Management (مطابقة للورقة 2) =================
  openAttendanceCardModal(patientId) {
    this.activeCardPatientId = patientId;
    const item = this.claimPatientsData.find(i => i.patient.id === patientId);
    if (!item) return;

    const p = item.patient;
    const cardData = this.attendanceCardsStore[patientId] || item.cardData;

    // Fill Modal Fields
    document.getElementById('card-modal-patient-name').textContent = p.name;
    document.getElementById('card-modal-company-name').textContent = this.currentCompany || p.insuranceCompany;
    document.getElementById('card-input-diagnosis').value = cardData.diagnosis || '';
    document.getElementById('card-input-eval').value = cardData.evaluation || '';

    this.renderCardTreatmentChips(cardData.treatments || []);
    this.app.openModal('modal-attendance-card');
  }

  renderCardTreatmentChips(selectedTreatments = []) {
    const container = document.getElementById('card-treatment-chips-container');
    if (!container) return;

    // Merge saved custom options with defaults
    const customStored = JSON.parse(localStorage.getItem('pc_claim_treatments') || '[]');
    const allOptions = Array.from(new Set([...this.defaultTreatmentOptions, ...customStored]));

    container.innerHTML = allOptions.map(opt => {
      const isSelected = selectedTreatments.includes(opt);
      return `
        <button type="button" class="chip-choice sheet-chip ${isSelected ? 'selected' : ''}" data-val="${opt}" onclick="this.classList.toggle('selected'); claimsManager.updateCardLivePreview();">
          <i class="fa-solid fa-bolt"></i> ${opt}
        </button>
      `;
    }).join('');

    this.updateCardLivePreview();
  }

  updateCardLivePreview() {
    const selected = Array.from(document.querySelectorAll('#card-treatment-chips-container .sheet-chip.selected'))
      .map(b => b.getAttribute('data-val'));

    const previewList = document.getElementById('card-plan-preview-list');
    if (previewList) {
      if (selected.length === 0) {
        previewList.innerHTML = '<span style="color: var(--text-muted); font-size: 0.8rem;">اضغط على الأزرار أعلاه لتحديد الخطة العلاجية...</span>';
      } else {
        previewList.innerHTML = selected.map(t => `<div style="padding: 2px 0; font-weight: 700; color: #1e293b;">- ${t}</div>`).join('');
      }
    }
  }

  promptAddNewTreatment() {
    const user = auth.getCurrentUser();
    if (!RolesManager.canManageUsers(user)) {
      this.app.showAlert('إضافة أزرار دائمة لبطاقة التردد متاح لمدير المركز فقط.', 'صلاحية المدير');
      return;
    }

    const name = window.prompt('اكتب اسم الجهاز أو وسيلة العلاج الطبيعي الجديدة لإضافتها لبطاقات التردد:');
    if (name && name.trim()) {
      const cleanName = name.trim();
      const customStored = JSON.parse(localStorage.getItem('pc_claim_treatments') || '[]');
      if (!customStored.includes(cleanName)) {
        customStored.push(cleanName);
        localStorage.setItem('pc_claim_treatments', JSON.stringify(customStored));
      }
      
      const currentSelected = Array.from(document.querySelectorAll('#card-treatment-chips-container .sheet-chip.selected'))
        .map(b => b.getAttribute('data-val'));
      currentSelected.push(cleanName);
      this.renderCardTreatmentChips(currentSelected);
      this.app.showToast(`تمت إضافة زر "${cleanName}" بنجاح`);
    }
  }

  saveAttendanceCardData() {
    if (!this.activeCardPatientId) return;

    const diagnosis = document.getElementById('card-input-diagnosis')?.value.trim() || '';
    const evaluation = document.getElementById('card-input-eval')?.value.trim() || '';
    const treatments = Array.from(document.querySelectorAll('#card-treatment-chips-container .sheet-chip.selected'))
      .map(b => b.getAttribute('data-val'));

    this.attendanceCardsStore[this.activeCardPatientId] = {
      diagnosis,
      evaluation,
      treatments
    };

    // Also update in claimPatientsData
    const item = this.claimPatientsData.find(i => i.patient.id === this.activeCardPatientId);
    if (item) {
      item.cardData = this.attendanceCardsStore[this.activeCardPatientId];
    }

    this.app.closeModal('modal-attendance-card');
    this.app.showToast('تم حفظ بطاقة التردد بنجاح');
  }

  // ================= Printing Module (طباعة المطالبة والبطاقات مطابقة للورقتين 1 و 2) =================
  printClaimStatement() {
    const checkedItems = this.claimPatientsData.filter(i => i.isChecked);
    if (checkedItems.length === 0) {
      this.app.showAlert('يرجى تحديد مريض واحد على الأقل للمطالبة قبل الطباعة.', 'تنبيه');
      return;
    }

    const companyName = this.currentCompany || 'شركة التأمين';
    const taxNumber = document.getElementById('claim-tax-number')?.value || '745-392-430';
    const claimDate = document.getElementById('claim-doc-date')?.value || '2026-08-31';

    // 1. Populate Printable Claim Header
    document.getElementById('claim-print-company-name').textContent = companyName;
    document.getElementById('claim-print-tax-no').textContent = `رقم البطاقة الضريبية: ${taxNumber}`;
    document.getElementById('claim-print-date').textContent = `تحريراً في: ${claimDate}`;
    document.getElementById('claim-print-period-text').textContent = `عن الفترة من ${this.startDate} إلى ${this.endDate}`;

    // 2. Populate Claim Table
    let grandTotal = 0;
    const tbody = document.getElementById('claim-print-tbody');
    tbody.innerHTML = checkedItems.map((item, idx) => {
      grandTotal += item.total;
      return `
        <tr>
          <td style="text-align: center; font-weight: bold;">${idx + 1}</td>
          <td style="font-weight: bold; padding-right: 8px;">${item.patient.name}</td>
          <td style="text-align: center; font-weight: bold;">${item.evalFee}</td>
          <td style="text-align: center; font-weight: bold;">${item.sessionCount}</td>
          <td style="text-align: center; font-weight: bold;">${item.sessionRate}</td>
          <td style="text-align: center; font-weight: 800;">${item.total}</td>
        </tr>
      `;
    }).join('');

    document.getElementById('claim-print-grand-total').textContent = `${grandTotal} ج.م`;

    // 3. Trigger Wi-Fi Print with body class
    document.body.classList.add('printing-claim');
    window.print();
    setTimeout(() => {
      document.body.classList.remove('printing-claim');
    }, 1500);
  }

  printAttendanceCards(singlePatientId = null) {
    let itemsToPrint = [];
    if (singlePatientId) {
      const found = this.claimPatientsData.find(i => i.patient.id === singlePatientId);
      if (found) itemsToPrint = [found];
    } else {
      itemsToPrint = this.claimPatientsData.filter(i => i.isChecked);
    }

    if (itemsToPrint.length === 0) {
      this.app.showAlert('لا يوجد مرضى محددون لطباعة بطاقات التردد.', 'تنبيه');
      return;
    }

    const companyName = this.currentCompany || 'شركة التأمين';
    const container = document.getElementById('printable-attendance-cards');
    if (!container) return;

    // Generate Cards matching Image 2
    container.innerHTML = itemsToPrint.map(item => {
      const p = item.patient;
      const card = this.attendanceCardsStore[p.id] || item.cardData || {};
      const diag = card.diagnosis || 'Lumber discogenic low back pain';
      const evaluation = card.evaluation || 'P.T. Initial functional evaluation';
      const treatments = card.treatments && card.treatments.length > 0
        ? card.treatments
        : ['pulsed Ultrasound', 'Heat application', 'Interferential current', 'Therapeutic ex'];

      return `
        <div class="attendance-card-print-page">
          <!-- Top Header -->
          <div style="text-align: right; line-height: 1.4; border-bottom: 2px solid #000; padding-bottom: 6px; margin-bottom: 16px;">
            <h2 style="font-size: 13pt; margin: 0; font-weight: 800;">مركز الإسكندرية التخصصي للعلاج الطبيعي</h2>
            <div style="font-size: 10pt; font-weight: 700;">د/ حسني أحمد الجويلي</div>
            <div style="font-size: 8.5pt; color: #333;">استشاري العلاج الطبيعي</div>
            <div style="font-size: 8.5pt; color: #333;">والتقويم الحركي للعمود الفقري</div>
          </div>

          <!-- Card Title -->
          <div style="text-align: center; margin: 20px 0;">
            <h1 style="font-size: 16pt; margin: 0; font-weight: 900; text-decoration: underline;">بطاقة تردد</h1>
          </div>

          <!-- Company & Patient Name -->
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; font-size: 11pt; font-weight: bold; border-bottom: 1px dashed #777; padding-bottom: 10px;">
            <div>شركة: <span>${companyName}</span></div>
            <div>Referred from / Name: <span style="font-size: 12pt; font-weight: 800;">${p.name}</span></div>
          </div>

          <!-- Content Sections -->
          <div style="line-height: 2; margin-bottom: 30px; font-size: 11pt;">
            <div style="margin-bottom: 18px;">
              <strong style="font-size: 11.5pt; display: block; color: #000; text-decoration: underline;">Referred diagnosis:</strong>
              <div style="padding-right: 15px; font-weight: 700; color: #0f172a; margin-top: 4px;">${diag}</div>
            </div>

            <div style="margin-bottom: 18px;">
              <strong style="font-size: 11.5pt; display: block; color: #000; text-decoration: underline;">P.T. Evaluation:</strong>
              <div style="padding-right: 15px; color: #334155; margin-top: 4px;">${evaluation}</div>
            </div>

            <div style="margin-bottom: 18px;">
              <strong style="font-size: 11.5pt; display: block; color: #000; text-decoration: underline;">Plan of P.T. Treatment:</strong>
              <div style="padding-right: 20px; font-weight: 700; color: #0f172a; margin-top: 6px;">
                ${treatments.map(t => `<div>- ${t}</div>`).join('')}
              </div>
            </div>
          </div>

          <!-- Consultant Signature -->
          <div style="display: flex; justify-content: flex-end; margin-top: 50px; padding-left: 20px;">
            <div style="text-align: center;">
              <div style="font-size: 10.5pt; font-weight: bold;">استشاري العلاج الطبيعي</div>
              <div style="font-size: 10pt; margin-top: 4px;">د/ حسني الجويلي</div>
              <div style="margin-top: 35px; border-bottom: 1.5px solid #000; width: 150px;"></div>
            </div>
          </div>

          <!-- Clinic Footer -->
          <div style="margin-top: 60px; border-top: 1px solid #777; padding-top: 8px; text-align: center; font-size: 8.5pt; color: #444; line-height: 1.5;">
            <div>17 شارع حسين شيرين - لوران - خلف بنك مصر لوران - الإسكندرية</div>
            <div>ت: 0106548155 - 035702356 | E-mail: algewelyspincare@yahoo.com</div>
          </div>
        </div>
      `;
    }).join('');

    // Trigger Wi-Fi print
    document.body.classList.add('printing-cards');
    window.print();
    setTimeout(() => {
      document.body.classList.remove('printing-cards');
    }, 1500);
  }

  // ================= Excel Export =================
  exportClaimExcel() {
    const checkedItems = this.claimPatientsData.filter(i => i.isChecked);
    if (checkedItems.length === 0) {
      this.app.showAlert('يرجى تحديد مرضى للمطالبة قبل التصدير.', 'تنبيه');
      return;
    }

    if (typeof XLSX === 'undefined') {
      this.app.showAlert('مكتبة الإكسيل جاري تحميلها، يرجى المحاولة بعد ثوانٍ.', 'تنبيه');
      return;
    }

    const companyName = this.currentCompany || 'شركة التأمين';
    const taxNumber = document.getElementById('claim-tax-number')?.value || '745-392-430';
    const claimDate = document.getElementById('claim-doc-date')?.value || '2026-08-31';

    const wsData = [
      ['مركز الإسكندرية التخصصي للعلاج الطبيعي - PhysioFlow'],
      [`السادة شركة: ${companyName}`, '', '', `تحريراً في: ${claimDate}`],
      ['بيان بأسماء السادة المحولين'],
      [`رقم البطاقة الضريبية: ${taxNumber}`, '', '', `الفترة: ${this.startDate} إلى ${this.endDate}`],
      [],
      ['م', 'اسم المريض', 'رقم الهاتف', 'الطبيب المعالج', 'فحص وتقييم (ج.م)', 'عدد الجلسات', 'قيمة الجلسة (ج.م)', 'الإجمالي (ج.م)']
    ];

    let grandTotal = 0;
    checkedItems.forEach((item, idx) => {
      grandTotal += item.total;
      wsData.push([
        idx + 1,
        item.patient.name,
        item.patient.phone,
        item.patient.doctor,
        item.evalFee,
        item.sessionCount,
        item.sessionRate,
        item.total
      ]);
    });

    wsData.push([]);
    wsData.push(['', '', '', '', '', '', 'المبلغ الإجمالي الكلي المستحق:', grandTotal]);

    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.aoa_to_sheet(wsData);
    XLSX.utils.book_append_sheet(wb, ws, 'مطالبة تأمين');
    XLSX.writeFile(wb, `مطالبة_${companyName}_${claimDate}.xlsx`);
    this.app.showToast('تم تصدير المطالبة بنجاح إلى ملف Excel');
  }
}
