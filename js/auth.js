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
      admin: { name: 'د. مصطفى محمود', role: 'admin' },
      doctor: { name: 'د. أحمد خليل', role: 'doctor' },
      receptionist: { name: 'أ. منار خالد', role: 'receptionist' }
    };

    const prof = roleProfiles[role] || roleProfiles.admin;
    this.currentUser = {
      id: 'u-demo-' + role,
      name: prof.name,
      email: `${role}@physiocare.demo`,
      role: prof.role
    };

    localStorage.setItem('pc_demo_active_user', JSON.stringify(this.currentUser));
    this.hideLoginModal();
    this.updateUI();
    await db.logAudit('تبديل صلاحية العرض', `تم تبديل واجهة العرض لدور: ${RolesManager.getRoleLabel(role)} (${this.currentUser.name})`, this.currentUser);
    
    if (window.app) {
      window.app.showToast(`تم تسجيل الدخول بحساب: ${this.currentUser.name} (${RolesManager.getRoleLabel(role)})`);
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
