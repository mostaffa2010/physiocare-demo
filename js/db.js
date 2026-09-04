// ========================================================
// PhysioFlow Demo - Isolated Showcase Database Engine
// ========================================================

import { DEMO_PATIENTS, DEMO_SESSIONS, DEMO_EXPENSES, DEMO_USERS } from './demo-data.js';

class DemoDatabaseService {
  constructor() {
    this.initDemoStorage();
  }

  get isCloud() {
    return false; // Demo always runs in isolated sandbox
  }

  initDemoStorage(force = false) {
    if (!localStorage.getItem('pc_demo_v3_september_full') || force) {
      localStorage.setItem('pc_demo_v3_september_full', 'true');
      localStorage.setItem('pc_demo_patients', JSON.stringify(DEMO_PATIENTS));
      localStorage.setItem('pc_demo_sessions', JSON.stringify(DEMO_SESSIONS));
      localStorage.setItem('pc_demo_expenses', JSON.stringify(DEMO_EXPENSES));
      localStorage.setItem('pc_demo_users', JSON.stringify(DEMO_USERS));
      localStorage.setItem('pc_demo_audit', JSON.stringify([
        {
          id: 'log-init',
          userName: 'نظام العرض التجريبي',
          userRole: 'النظام',
          actionType: 'تجهيز العرض التجريبي',
          description: 'تم تحميل 190 مريض و 905 جلسة ومصروفات 3 أشهر كاملة (يوليو، أغسطس، وسبتمبر بالكامل) بنجاح',
          timestamp: new Date().toLocaleString('en-US'),
          timestampRaw: Date.now()
        }
      ]));
    }
  }

  resetDemo() {
    // 1. إعادة ضبط المجموعات الرئيسية بالكامل لنسخ أصلية جديدة
    localStorage.setItem('pc_demo_v3_september_full', 'true');
    localStorage.setItem('pc_demo_patients', JSON.stringify(DEMO_PATIENTS));
    localStorage.setItem('pc_demo_sessions', JSON.stringify(DEMO_SESSIONS));
    localStorage.setItem('pc_demo_expenses', JSON.stringify(DEMO_EXPENSES));
    localStorage.setItem('pc_demo_users', JSON.stringify(DEMO_USERS));

    // 2. تصفير سجل التدقيق وإضافة سجل إعادة ضبط حديث
    localStorage.setItem('pc_demo_audit', JSON.stringify([
      {
        id: 'log-reset-' + Date.now(),
        userName: 'نظام العرض التجريبي',
        userRole: 'النظام',
        actionType: 'إعادة ضبط الـ Demo',
        description: 'تمت استعادة جميع البيانات الأصلية (185 مريض، 635 جلسة، ومصروفات شهرين) بنجاح.',
        timestamp: new Date().toLocaleString('ar-EG-u-nu-latn'),
        timestampRaw: Date.now()
      }
    ]));

    // 3. إعادة ضبط أزرار الشيت الطبي المخصصة (Modalities, Procedures, Exercises) إلى القوائم الافتراضية
    localStorage.removeItem('pc_opt_modality');
    localStorage.removeItem('pc_opt_procedure');
    localStorage.removeItem('pc_opt_exercise');
    localStorage.removeItem('pc_sb_opt_modality');
    localStorage.removeItem('pc_sb_opt_procedure');
    localStorage.removeItem('pc_sb_opt_exercise');

    // 4. إعادة ضبط بنود المطالبات المخصصة
    localStorage.removeItem('pc_claim_treatments');

    // 5. إعادة ضبط الحساب التجريبي النشط إلى مدير المركز
    if (DEMO_USERS && DEMO_USERS.length > 0) {
      localStorage.setItem('pc_demo_active_user', JSON.stringify(DEMO_USERS[0]));
    }

    // 6. مسح أي مفاتيح مؤقتة أخرى خاصة بالنظام مع الإبقاء على تفضيل النافذة التعريفية
    for (let i = localStorage.length - 1; i >= 0; i--) {
      const k = localStorage.key(i);
      if (k && k.startsWith('pc_') && !['pc_demo_v3_september_full', 'pc_demo_patients', 'pc_demo_sessions', 'pc_demo_expenses', 'pc_demo_users', 'pc_demo_audit', 'pc_demo_active_user', 'pc_demo_onboarding_seen'].includes(k)) {
        localStorage.removeItem(k);
      }
    }
  }

  // Patients
  async getPatients() {
    const raw = localStorage.getItem('pc_demo_patients');
    return raw ? JSON.parse(raw) : DEMO_PATIENTS;
  }

  async savePatient(patientData, currentUser) {
    const patients = await this.getPatients();
    let isEdit = false;

    if (patientData.id) {
      isEdit = true;
      const index = patients.findIndex(p => p.id === patientData.id);
      if (index !== -1) {
        patients[index] = {
          ...patients[index],
          ...patientData,
          lastUpdatedAt: new Date().toISOString(),
          lastUpdatedBy: currentUser?.name || 'طبيب العرض التجريبي'
        };
      }
    } else {
      const newPatient = {
        ...patientData,
        id: 'demo-p-' + Date.now(),
        createdAt: new Date().toISOString(),
        createdBy: currentUser?.name || 'استقبال العرض التجريبي',
        lastUpdatedBy: currentUser?.name || 'استقبال العرض التجريبي'
      };
      patients.unshift(newPatient);
    }

    localStorage.setItem('pc_demo_patients', JSON.stringify(patients));
    return isEdit ? 'updated' : 'created';
  }

  async deletePatient(patientId) {
    let patients = await this.getPatients();
    patients = patients.filter(p => p.id !== patientId);
    localStorage.setItem('pc_demo_patients', JSON.stringify(patients));
    return true;
  }

  // Sessions
  async getSessions(filterDate = null) {
    const raw = localStorage.getItem('pc_demo_sessions');
    let sessions = raw ? JSON.parse(raw) : DEMO_SESSIONS;
    if (filterDate) {
      if (filterDate.length === 7) {
        sessions = sessions.filter(s => s.date && s.date.startsWith(filterDate));
      } else {
        sessions = sessions.filter(s => s.date === filterDate);
      }
    }
    return sessions;
  }

  async saveSession(sessionData, currentUser) {
    const sessions = await this.getSessions();
    let res = null;
    if (sessionData.id) {
      const idx = sessions.findIndex(s => s.id === sessionData.id);
      if (idx !== -1) {
        sessions[idx] = {
          ...sessions[idx],
          ...sessionData,
          lastEditedBy: currentUser?.name || 'مستخدم الديمو',
          lastEditedAt: new Date().toLocaleTimeString('ar-EG-u-nu-latn', { hour: '2-digit', minute: '2-digit' })
        };
        res = sessions[idx];
      }
    } else {
      const newSession = {
        ...sessionData,
        id: 'demo-sess-' + Date.now(),
        recordedAt: new Date().toLocaleTimeString('ar-EG-u-nu-latn', { hour: '2-digit', minute: '2-digit' }),
        recordedBy: currentUser?.name || 'استقبال الديمو'
      };
      sessions.unshift(newSession);
      res = newSession;
    }
    localStorage.setItem('pc_demo_sessions', JSON.stringify(sessions));
    return res;
  }

  async deleteSession(sessionId) {
    let sessions = await this.getSessions();
    sessions = sessions.filter(s => s.id !== sessionId);
    localStorage.setItem('pc_demo_sessions', JSON.stringify(sessions));
    return true;
  }

  // Expenses
  async getExpenses(filterDate = null) {
    const raw = localStorage.getItem('pc_demo_expenses');
    let expenses = raw ? JSON.parse(raw) : DEMO_EXPENSES;
    if (filterDate) {
      if (filterDate.length === 7) {
        expenses = expenses.filter(e => e.date && e.date.startsWith(filterDate));
      } else {
        expenses = expenses.filter(e => e.date === filterDate);
      }
    }
    return expenses;
  }

  async saveExpense(expenseData, currentUser) {
    const expenses = await this.getExpenses();
    const newExp = {
      ...expenseData,
      id: 'demo-exp-' + Date.now(),
      time: new Date().toLocaleTimeString('ar-EG-u-nu-latn', { hour: '2-digit', minute: '2-digit' }),
      recordedBy: currentUser?.name || 'مدير الديمو'
    };
    expenses.unshift(newExp);
    localStorage.setItem('pc_demo_expenses', JSON.stringify(expenses));
    return newExp;
  }

  async deleteExpense(expenseId) {
    let expenses = await this.getExpenses();
    expenses = expenses.filter(e => e.id !== expenseId);
    localStorage.setItem('pc_demo_expenses', JSON.stringify(expenses));
    return true;
  }

  // Users
  async getUsers() {
    const raw = localStorage.getItem('pc_demo_users');
    return raw ? JSON.parse(raw) : DEMO_USERS;
  }

  async saveUser(userData) {
    const users = await this.getUsers();
    const newUser = { ...userData, id: 'u-demo-' + Date.now() };
    users.push(newUser);
    localStorage.setItem('pc_demo_users', JSON.stringify(users));
    return newUser;
  }

  async deleteUser(userId) {
    let users = await this.getUsers();
    users = users.filter(u => u.id !== userId);
    localStorage.setItem('pc_demo_users', JSON.stringify(users));
    return true;
  }

  async getDoctors() {
    const users = await this.getUsers();
    const docs = users.filter(u => u.role === 'doctor' || u.role === 'admin').map(u => u.name);
    return docs.length > 0 ? Array.from(new Set(docs)) : ['د. مصطفى محمود', 'د. أحمد خليل', 'د. سارة عادل', 'د. كريم إبراهيم'];
  }

  // Audit Logs
  async getAuditLogs() {
    const raw = localStorage.getItem('pc_demo_audit');
    return raw ? JSON.parse(raw) : [];
  }

  async logAudit(actionType, description, user) {
    const logs = await this.getAuditLogs();
    const newLog = {
      id: 'log-' + Date.now(),
      userName: user?.name || 'زائر الديمو',
      userRole: user?.role || 'طبيب',
      actionType,
      description,
      timestamp: new Date().toLocaleString('en-US'),
      timestampRaw: Date.now()
    };
    logs.unshift(newLog);
    if (logs.length > 150) logs.pop();
    localStorage.setItem('pc_demo_audit', JSON.stringify(logs));
  }

  // Backup
  async createFullBackup() {
    return {
      timestamp: new Date().toISOString(),
      center: 'PhysioFlow Clinic Management Demo',
      patients: await this.getPatients(),
      sessions: await this.getSessions(),
      expenses: await this.getExpenses(),
      users: await this.getUsers(),
      auditLogs: await this.getAuditLogs()
    };
  }

  async restoreFromBackup(backupData) {
    if (!backupData || !Array.isArray(backupData.patients)) {
      throw new Error('الملف غير صالح');
    }
    localStorage.setItem('pc_demo_patients', JSON.stringify(backupData.patients || []));
    localStorage.setItem('pc_demo_sessions', JSON.stringify(backupData.sessions || []));
    localStorage.setItem('pc_demo_expenses', JSON.stringify(backupData.expenses || []));
    return true;
  }

// ================= Dynamic Clinical Options (Modalities, Procedures, Exercises) =================
  getClinicalOptions(category) {
    const key = (this.isTraining ? 'pc_sb_opt_' : 'pc_opt_') + category;
    const raw = localStorage.getItem(key);
    if (raw) return JSON.parse(raw);

    const defaults = {
      modality: [
        'TENS (كهرباء تسكينية)',
        'Ultrasound (موجات صوتية)',
        'كمادات ساخنة (Hot Pack)',
        'كمادات باردة / ثلج (Cryotherapy)',
        'الشد الفقري (Traction)',
        'ليزر علاجي (Laser Therapy)',
        'موجات تصادمية (Shockwave)',
        'أشعة تحت الحمراء (Infrared)',
        'كؤوس هواء (Cupping)'
      ],
      procedure: [
        'تحريك المفاصل (Joint Mobilization)',
        'تحرير اللفافة العضلية (Myofascial Release)',
        'تدليك علاجي عميق (Deep Tissue Massage)',
        'إطالات عضلية (Muscle Stretching)',
        'الإبر الجافة (Dry Needling)',
        'الأشرطة اللاصقة الحركية (Kinesio Taping)'
      ],
      exercise: [
        'تمارين التقوية العضلية (Strengthening)',
        'تمارين المدى الحركي (Range of Motion)',
        'تمارين التوازن والاتزان الحركي (Balance & Proprioception)',
        'تمارين عضلات الجذع (Core Stability)',
        'تمارين تصحيح القوام (Postural Correction)',
        'برنامج التمارين المنزلية (Home Exercise Program)'
      ]
    };
    const list = defaults[category] || [];
    localStorage.setItem(key, JSON.stringify(list));
    return list;
  }

  async addClinicalOption(category, name) {
    const list = this.getClinicalOptions(category);
    if (!list.includes(name)) {
      list.push(name);
      const key = (this.isTraining ? 'pc_sb_opt_' : 'pc_opt_') + category;
      localStorage.setItem(key, JSON.stringify(list));
    }
    return list;
  }

  async deleteClinicalOption(category, name) {
    let list = this.getClinicalOptions(category);
    list = list.filter(item => item !== name);
    const key = (this.isTraining ? 'pc_sb_opt_' : 'pc_opt_') + category;
    localStorage.setItem(key, JSON.stringify(list));
    return list;
  }

  // ================= Insurance Companies Registry =================
  getInsuranceCompanies(contractType = 'direct') {
    const key = (this.isTraining ? 'pc_sb_ins_' : 'pc_ins_') + contractType;
    const raw = localStorage.getItem(key);
    if (raw) return JSON.parse(raw);

    const defaults = {
      direct: ['أكسا (AXA)', 'أليانز (Allianz)', 'ميتلايف (MetLife)', 'بوبا (Bupa)', 'عناية الرعاية الصحية (Enaya)'],
      indirect: ['نكست كير (NextCare)', 'مصر للتأمين', 'ايجي كير', 'المهندس للتأمين']
    };
    const list = defaults[contractType] || [];
    localStorage.setItem(key, JSON.stringify(list));
    return list;
  }

  getAllInsuranceCompaniesWithTypes() {
    const direct = this.getInsuranceCompanies('direct');
    const indirect = this.getInsuranceCompanies('indirect');
    const res = [];
    direct.forEach(name => res.push({ name, contractType: 'direct', label: `${name} (تعاقد مباشر)` }));
    indirect.forEach(name => res.push({ name, contractType: 'indirect', label: `${name} (تعاقد غير مباشر)` }));
    return res;
  }

  async addInsuranceCompany(contractType, name) {
    const list = this.getInsuranceCompanies(contractType);
    if (!list.includes(name.trim())) {
      list.push(name.trim());
      const key = (this.isTraining ? 'pc_sb_ins_' : 'pc_ins_') + contractType;
      localStorage.setItem(key, JSON.stringify(list));
    }
    return list;
  }

  async deleteInsuranceCompany(contractType, name) {
    let list = this.getInsuranceCompanies(contractType);
    list = list.filter(item => item !== name.trim());
    const key = (this.isTraining ? 'pc_sb_ins_' : 'pc_ins_') + contractType;
    localStorage.setItem(key, JSON.stringify(list));
    return list;
  }

}

export const db = new DemoDatabaseService();
