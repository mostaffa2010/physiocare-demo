// ========================================================
// PhysioFlow Demo - Weekly Appointments Schedule
// ========================================================
// Fixed recurring weekly template (not tied to calendar dates): a
// booking is (doctor + time slot + patient) only. In real clinic
// life the same patient sees the same doctor at the same time on
// every day that doctor works that week, so one record covers all
// of those days at once. A slot keeps showing the same patient
// every week until someone deletes it and books someone else in
// its place.
//
// This demo has no real staff UIDs, so the doctor's NAME is used
// as the stable identifier throughout (matching how doctors are
// already identified everywhere else in this demo - patients.js,
// sessions.js, etc. all key by doctor name too).

import { escapeHTML } from './utils.js';
import { db } from './db.js';
import { auth } from './auth.js';

export const APPT_SLOTS = [
  { key: '15:30', label: '٣:٣٠' },
  { key: '16:30', label: '٤:٣٠' },
  { key: '17:30', label: '٥:٣٠' },
  { key: '18:30', label: '٦:٣٠' },
  { key: '19:00', label: '٧:٠٠' }
];

// Total treatment beds in the clinic. Exceeding this across ALL
// doctors combined at the same time slot only shows a soft warning
// in the booking modal - it never blocks adding another patient.
const MAX_BEDS_PER_SLOT = 6;

export class AppointmentsManager {
  constructor(app) {
    this.app = app;
    this.appointments = [];
    this.doctors = [];
    this.patients = [];
    this.activeDoctor = null;
    this.pendingDoctorName = null;
    this.pendingTimeSlot = null;
    this.selectedPatientId = null;
    this.selectedPatientName = null;
    this.selectedPatientPhone = null;
  }

  async init() {
    document.getElementById('appt-doctor-tabs')?.addEventListener('click', (e) => {
      const tab = e.target.closest('[data-doctor-tab]');
      if (tab) {
        this.activeDoctor = tab.getAttribute('data-doctor-tab');
        this.renderTabs();
        this.renderTable();
      }
    });

    document.getElementById('appt-table-tbody')?.addEventListener('click', (e) => {
      const removeBtn = e.target.closest('[data-remove-appt]');
      if (removeBtn) {
        this.deleteAppointment(removeBtn.getAttribute('data-remove-appt'));
        return;
      }
      const addBtn = e.target.closest('[data-add-slot]');
      if (addBtn) {
        this.openAddModal(this.activeDoctor, addBtn.getAttribute('data-add-slot'));
      }
    });

    document.getElementById('form-appointment')?.addEventListener('submit', (e) => {
      e.preventDefault();
      this.submitAppointment();
    });

    document.getElementById('appt-picker-trigger')?.addEventListener('click', () => this.openPatientPicker());
    document.getElementById('btn-change-appt-patient')?.addEventListener('click', () => this.openPatientPicker());

    const searchInput = document.getElementById('appt-picker-search-input');
    if (searchInput) searchInput.addEventListener('input', () => this.renderPickerPatients());

    document.getElementById('appt-picker-patients-list')?.addEventListener('click', (e) => {
      const item = e.target.closest('.picker-item');
      if (item) this.selectPatientFromPicker(item.getAttribute('data-patient-id'));
    });
  }

  async loadAll() {
    const [appointments, doctors, patients] = await Promise.all([
      db.getAppointments(),
      db.getDoctors(),
      db.getPatients()
    ]);
    this.appointments = appointments;
    this.doctors = doctors;
    this.patients = patients;
    if (!this.activeDoctor || !this.doctors.includes(this.activeDoctor)) {
      this.activeDoctor = this.doctors[0] || null;
    }
  }

  getSlotTotalCount(timeSlot) {
    return this.appointments.filter((a) => a.timeSlot === timeSlot).length;
  }

  getCellAppointments(doctorName, timeSlot) {
    return this.appointments.filter((a) => a.doctorName === doctorName && a.timeSlot === timeSlot);
  }

  // ================= Full Schedule (Admin/Receptionist view) =================
  async render() {
    const tabsEl = document.getElementById('appt-doctor-tabs');
    const tbody = document.getElementById('appt-table-tbody');
    if (!tabsEl || !tbody) return;
    try {
      await this.loadAll();
      this.renderTabs();
      this.renderTable();
    } catch (err) {
      console.error('Appointments render error:', err);
      tbody.innerHTML = this.buildErrorRow(err);
    }
  }

  renderTabs() {
    const tabsEl = document.getElementById('appt-doctor-tabs');
    if (!tabsEl) return;
    if (this.doctors.length === 0) {
      tabsEl.innerHTML = `<span style="color: var(--text-muted); font-size: 0.85rem;">لا يوجد دكاترة مسجلين حالياً.</span>`;
      return;
    }
    tabsEl.innerHTML = this.doctors.map((docName) => {
      const isActive = docName === this.activeDoctor;
      return `
        <button type="button" data-doctor-tab="${escapeHTML(docName)}" class="btn btn-sm ${isActive ? 'btn-primary' : 'btn-outline'}" style="white-space: nowrap;">
          <i class="fa-solid fa-user-doctor"></i> ${escapeHTML(docName)}
        </button>
      `;
    }).join('');
  }

  renderTable() {
    const tbody = document.getElementById('appt-table-tbody');
    if (!tbody) return;
    if (!this.activeDoctor) {
      tbody.innerHTML = `<tr><td colspan="4" style="text-align:center; padding:20px; color:var(--text-muted);">لا يوجد دكاترة مسجلين حالياً.</td></tr>`;
      return;
    }

    const rows = APPT_SLOTS.map((slot) => {
      const cellAppts = this.getCellAppointments(this.activeDoctor, slot.key);
      const totalInSlot = this.getSlotTotalCount(slot.key);
      const overCapacity = totalInSlot > MAX_BEDS_PER_SLOT;

      const existingRows = cellAppts.map((a) => `
        <tr>
          <td style="font-weight: 800; color: var(--primary);">
            ${slot.label}
            ${overCapacity ? `<div style="font-size: 0.68rem; color: var(--danger); font-weight: 700;"><i class="fa-solid fa-triangle-exclamation"></i> ${totalInSlot}/${MAX_BEDS_PER_SLOT}</div>` : ''}
          </td>
          <td>${escapeHTML(a.patientName)}</td>
          <td><bdi dir="ltr">${escapeHTML(a.patientPhone || '-')}</bdi></td>
          <td style="text-align:center;">
            <button type="button" class="btn btn-outline btn-sm" style="color: var(--danger); border-color: var(--danger);" data-remove-appt="${escapeHTML(a.id)}" title="إلغاء الموعد">
              <i class="fa-solid fa-trash"></i>
            </button>
          </td>
        </tr>
      `).join('');

      const addRow = `
        <tr>
          <td style="font-weight: 800; color: var(--primary);">${cellAppts.length === 0 ? slot.label : ''}</td>
          <td colspan="3">
            <button type="button" class="btn btn-outline btn-sm" data-add-slot="${slot.key}" style="width: 100%; border-style: dashed;">
              <i class="fa-solid fa-plus"></i> حجز مريض في هذا الميعاد
            </button>
          </td>
        </tr>
      `;

      return existingRows + addRow;
    }).join('');

    tbody.innerHTML = rows;
  }

  buildErrorRow(err) {
    return `<tr><td colspan="4" style="text-align:center; padding:20px; color:var(--danger);">
      <i class="fa-solid fa-triangle-exclamation"></i> تعذر تحميل جدول المواعيد: ${escapeHTML(err.message || 'خطأ غير معروف')}
    </td></tr>`;
  }

  // ================= Doctor's Own Schedule (Doctor Dashboard) =================
  async renderForDoctor(doctorName) {
    const grid = document.getElementById('my-appointments-grid');
    if (!grid) return;
    try {
      await this.loadAll();
      const cellsHtml = APPT_SLOTS.map((slot) => {
        const appts = this.getCellAppointments(doctorName, slot.key);
        if (appts.length === 0) return '';
        const names = appts.map((a) => escapeHTML(a.patientName)).join('، ');
        return `
          <div style="display:flex; justify-content:space-between; align-items:center; padding:8px 10px; border-bottom:1px solid var(--border-color);">
            <span style="font-weight:800; color:var(--primary);">${slot.label}</span>
            <span style="color: var(--text-main);">${names}</span>
          </div>
        `;
      }).join('');
      grid.innerHTML = cellsHtml || `<div style="padding:16px; text-align:center; color:var(--text-muted); font-size:0.85rem;">لا يوجد مواعيد ثابتة مسجلة لك حالياً.</div>`;
    } catch (err) {
      console.error('Appointments (doctor) render error:', err);
      grid.innerHTML = `<div style="padding:16px; text-align:center; color:var(--danger); font-size:0.85rem;">تعذر تحميل الجدول: ${escapeHTML(err.message || 'خطأ غير معروف')}</div>`;
    }
  }

  // ================= Add Appointment Modal =================
  openAddModal(doctorName, timeSlot) {
    this.pendingDoctorName = doctorName;
    this.pendingTimeSlot = timeSlot;
    this.selectedPatientId = null;
    this.selectedPatientName = null;
    this.selectedPatientPhone = null;

    const slotLabel = APPT_SLOTS.find((s) => s.key === timeSlot)?.label || timeSlot;
    document.getElementById('appt-info-doctor').textContent = doctorName;
    document.getElementById('appt-info-slot').textContent = slotLabel;

    const totalInSlot = this.getSlotTotalCount(timeSlot);
    const warningBox = document.getElementById('appt-slot-warning');
    if (warningBox) {
      if (totalInSlot >= MAX_BEDS_PER_SLOT) {
        document.getElementById('appt-slot-occupied-count').textContent = totalInSlot;
        warningBox.style.display = 'block';
      } else {
        warningBox.style.display = 'none';
      }
    }

    const placeholder = document.getElementById('appt-picker-placeholder');
    if (placeholder) placeholder.textContent = 'اضغط هنا للبحث واختيار المريض...';
    document.getElementById('appt-picker-trigger').style.display = 'flex';
    document.getElementById('appt-selected-patient-box').style.display = 'none';

    this.app.openModal('modal-appointment');
  }

  async openPatientPicker() {
    const searchInput = document.getElementById('appt-picker-search-input');
    if (searchInput) searchInput.value = '';
    await this.renderPickerPatients();
    this.app.openModal('modal-appt-patient-picker');
    if (searchInput) setTimeout(() => searchInput.focus(), 250);
  }

  normalizeArabic(text) {
    if (!text) return '';
    return text.toString().trim().toLowerCase()
      .replace(/[أإآٱ]/g, 'ا')
      .replace(/ة/g, 'ه')
      .replace(/ى/g, 'ي')
      .replace(/[\u064B-\u065F\u0670]/g, '');
  }

  getPatientSearchScore(p, rawQuery) {
    const q = this.normalizeArabic(rawQuery);
    if (!q) return 1;
    const name = this.normalizeArabic(p.name);
    const words = name.split(/\s+/);
    if (words[0] && words[0].startsWith(q)) return 10000 - words[0].length;
    if (words[1] && words[1].startsWith(q)) return 5000 - words[1].length;
    for (let i = 2; i < words.length; i++) {
      if (words[i].startsWith(q)) return 2000 - (i * 10);
    }
    if (name.includes(q)) return 500;
    const phone = (p.phone || '').replace(/[^0-9]/g, '');
    const cleanDigits = rawQuery.replace(/[^0-9]/g, '');
    if (cleanDigits && phone.includes(cleanDigits)) return phone.startsWith(cleanDigits) ? 200 : 100;
    return -1;
  }

  async renderPickerPatients() {
    const container = document.getElementById('appt-picker-patients-list');
    if (!container) return;
    const rawSearch = document.getElementById('appt-picker-search-input')?.value.trim() || '';

    let scored = [];
    for (const p of this.patients) {
      if (!rawSearch) {
        scored.push({ patient: p, score: 0 });
      } else {
        const score = this.getPatientSearchScore(p, rawSearch);
        if (score > 0) scored.push({ patient: p, score });
      }
    }
    scored.sort((a, b) => (b.score !== a.score) ? b.score - a.score : a.patient.name.localeCompare(b.patient.name, 'ar'));
    const filtered = scored.map((item) => item.patient);

    if (filtered.length === 0) {
      container.innerHTML = `<div style="text-align: center; padding: 24px; color: var(--text-muted); font-size: 0.9rem;">لا يوجد مريض بهذا الاسم أو الرقم.</div>`;
      return;
    }

    container.innerHTML = filtered.map((p) => `
      <div class="picker-item" data-patient-id="${escapeHTML(p.id)}">
        <div>
          <div style="font-weight: 700; color: var(--text-main); font-size: 0.95rem;">
            <i class="fa-solid fa-user" style="color: var(--primary); margin-left: 6px;"></i> ${escapeHTML(p.name)}
          </div>
          <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 3px;">
            <i class="fa-solid fa-phone" style="font-size: 0.75rem;"></i> ${escapeHTML(p.phone)}
          </div>
        </div>
      </div>
    `).join('');
  }

  selectPatientFromPicker(patientId) {
    const patient = this.patients.find((p) => p.id === patientId);
    if (!patient) return;
    this.selectedPatientId = patient.id;
    this.selectedPatientName = patient.name;
    this.selectedPatientPhone = patient.phone;

    document.getElementById('appt-picker-trigger').style.display = 'none';
    const box = document.getElementById('appt-selected-patient-box');
    document.getElementById('appt-selected-patient-name').textContent = patient.name;
    document.getElementById('appt-selected-patient-sub').textContent = patient.phone || '';
    box.style.display = 'flex';

    this.app.closeModal('modal-appt-patient-picker');
  }

  async submitAppointment() {
    if (!this.selectedPatientId) {
      this.app.showAlert('من فضلك اختر المريض من السجل.', 'بيانات ناقصة', 'warning');
      return;
    }

    try {
      await db.addAppointment({
        doctorName: this.pendingDoctorName,
        timeSlot: this.pendingTimeSlot,
        patientId: this.selectedPatientId,
        patientName: this.selectedPatientName,
        patientPhone: this.selectedPatientPhone || '',
        bookedBy: auth.getCurrentUser()?.name || ''
      });
      this.app.closeModal('modal-appointment');
      this.app.showToast('تم حجز الموعد بنجاح');
      await this.refreshVisibleGrids();
    } catch (err) {
      this.app.showAlert('تعذر حجز الموعد: ' + err.message, 'خطأ', 'danger');
    }
  }

  async deleteAppointment(apptId) {
    const confirmed = await this.app.showConfirm('هل تريد إلغاء هذا الموعد؟', 'تأكيد الإلغاء');
    if (!confirmed) return;
    try {
      await db.deleteAppointment(apptId);
      this.app.showToast('تم إلغاء الموعد');
      await this.refreshVisibleGrids();
    } catch (err) {
      this.app.showAlert('تعذر إلغاء الموعد: ' + err.message, 'خطأ', 'danger');
    }
  }

  async refreshVisibleGrids() {
    if (document.getElementById('appt-doctor-tabs')) await this.render();
    const myGrid = document.getElementById('my-appointments-grid');
    if (myGrid) {
      const name = auth.getCurrentUser()?.name;
      if (name) await this.renderForDoctor(name);
    }
  }
}
