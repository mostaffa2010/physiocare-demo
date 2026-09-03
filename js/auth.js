// ========================================================
// PhysioFlow Demo - Instant Showcase Authentication
// ========================================================

import { db } from './db.js';
import { RolesManager } from './roles.js';

class DemoAuthService {
  constructor() {
    this.currentUser = {
      id: 'u-demo-admin',
      name: 'د. مصطفى محمود',
      email: 'admin@physiocare.demo',
      role: 'admin'
    };
  }

  async init(onUserChanged) {
    this.onUserChanged = onUserChanged;
    const saved = localStorage.getItem('pc_demo_active_user');
    if (saved) {
      try {
        this.currentUser = JSON.parse(saved);
      } catch (e) {}
    }
    this.updateUI();
    if (this.onUserChanged) this.onUserChanged(this.currentUser);
  }

  getCurrentUser() {
    return this.currentUser;
  }

  showLoginModal() {
    const modal = document.getElementById('modal-auth');
    if (modal) modal.classList.add('active');
  }

  hideLoginModal() {
    const modal = document.getElementById('modal-auth');
    if (modal) modal.classList.remove('active');
  }

  async switchRole(role) {
    const roleProfiles = {
      admin: { name: 'د. مصطفى محمود', role: 'admin', label: '👑 مدير' },
      doctor: { name: 'د. أحمد خليل', role: 'doctor', label: '🩺 طبيب' },
      receptionist: { name: 'أ. منار خالد', role: 'receptionist', label: '📋 استقبال' }
    };

    const prof = roleProfiles[role] || roleProfiles.admin;
    this.currentUser = {
      id: 'u-demo-' + role,
      name: prof.name,
      email: `${role}@physiocare.demo`,
      role: prof.role
    };

    localStorage.setItem('pc_demo_active_user', JSON.stringify(this.currentUser));
    
    // Sync mobile and desktop dropdown selects and buttons
    ['demo-role-select', 'demo-role-select-desktop'].forEach(selId => {
      const sel = document.getElementById(selId);
      if (sel) sel.value = role;
      
      const btn = document.getElementById(`btn-select-${selId}`);
      if (btn) {
        const textSpan = btn.querySelector('.btn-text');
        if (textSpan) {
          if (selId.includes('desktop')) {
            const deskLabels = {
              admin: '👑 مدير المركز (د. مصطفى)',
              doctor: '🩺 طبيب معالج (د. أحمد)',
              receptionist: '📋 استقبال العيادة (أ. منار)'
            };
            textSpan.textContent = deskLabels[role] || '👑 مدير المركز';
          } else {
            textSpan.textContent = prof.label;
          }
        }
      }
    });

    this.hideLoginModal();
    this.updateUI();
    await db.logAudit('تبديل صلاحية العرض', `تم تبديل واجهة العرض لدور: ${RolesManager.getRoleLabel(role)}`, this.currentUser);
    
    // توجيه واجهة المستخدم بحسب الصلاحية فوراً
    if (window.app) {
      if (role === 'doctor') {
        window.app.switchView('patients');
      } else if (role === 'receptionist') {
        if (window.app.currentView === 'patient-sheet' || window.app.currentView === 'admin') {
          window.app.switchView('patients');
        }
      }
    }

    if (this.onUserChanged) this.onUserChanged(this.currentUser);
  }

  async login(email, password) {
    // التحقق من قائمة المستخدمين المحلية في الديمو
    const users = await db.getUsers();
    const cleanEmail = (email || '').trim().toLowerCase();
    const matchedUser = users.find(u => u.email && u.email.trim().toLowerCase() === cleanEmail);

    if (matchedUser) {
      this.currentUser = {
        id: matchedUser.id,
        name: matchedUser.name,
        email: matchedUser.email,
        role: matchedUser.role
      };
    } else {
      // مستخدم افتراضي كمدير للديمو إذا لم يتطابق الإيميل
      this.currentUser = {
        id: 'u-demo-admin',
        name: 'د. مصطفى محمود',
        email: email || 'admin@physiocare.demo',
        role: 'admin'
      };
    }

    localStorage.setItem('pc_demo_active_user', JSON.stringify(this.currentUser));

    // مزامنة قائمة الأدوار المنسدلة
    const sel = document.getElementById('demo-role-select');
    if (sel) sel.value = this.currentUser.role;

    const btn = document.getElementById('btn-select-demo-role-select');
    if (btn) {
      const textSpan = btn.querySelector('.btn-text');
      const labels = { admin: '👑 مدير', doctor: '🩺 طبيب', receptionist: '📋 استقبال' };
      if (textSpan) textSpan.textContent = labels[this.currentUser.role] || '👑 مدير';
    }

    this.hideLoginModal();
    this.updateUI();
    if (window.app && this.currentUser.role === 'doctor') {
      window.app.switchView('patients');
    }
    await db.logAudit('تسجيل دخول', `تسجيل دخول للمستخدم: ${this.currentUser.name}`, this.currentUser);
    if (this.onUserChanged) this.onUserChanged(this.currentUser);
    return { success: true };
  }

  logout() {
    this.showLoginModal();
  }

  updateUI() {
    const headerDisplay = document.getElementById('header-user-display');
    const sidebarName = document.getElementById('sidebar-user-name');
    const sidebarRole = document.getElementById('sidebar-user-role');

    if (this.currentUser) {
      const roleText = RolesManager.getRoleLabel(this.currentUser.role);
      if (headerDisplay) headerDisplay.textContent = this.currentUser.name;
      if (sidebarName) sidebarName.textContent = this.currentUser.name;
      if (sidebarRole) {
        sidebarRole.textContent = roleText;
        sidebarRole.className = `badge badge-role-${this.currentUser.role}`;
      }
      RolesManager.applyPermissions(this.currentUser);
    }
  }
}

export const auth = new DemoAuthService();
