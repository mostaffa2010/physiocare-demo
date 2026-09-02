// ========================================================
// PhysioCare Demo - Isolated Showcase Database Engine
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
    if (!localStorage.getItem('pc_demo_v1_init') || force) {
      localStorage.setItem('pc_demo_v1_init', 'true');
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
          description: 'تم تحميل 185 مريض و 635 جلسة ومصروفات شهرين كاملين بنجاح',
          timestamp: new Date().toLocaleString('ar-EG'),
          timestampRaw: Date.now()
        }
      ]));
    }
  }

  resetDemo() {
    this.initDemoStorage(true);
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
          lastEditedAt: new Date().toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' })
        };
        res = sessions[idx];
      }
    } else {
      const newSession = {
        ...sessionData,
        id: 'demo-sess-' + Date.now(),
        recordedAt: new Date().toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' }),
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
      time: new Date().toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' }),
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
      timestamp: new Date().toLocaleString('ar-EG'),
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
      center: 'PhysioCare Clinic Management Demo',
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
}

export const db = new DemoDatabaseService();
