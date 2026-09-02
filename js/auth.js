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
    
    // Sync dropdown select and button label
    const sel = document.getElementById('demo-role-select');
    if (sel) sel.value = role;
    
    const btn = document.getElementById('btn-select-demo-role-select');
    if (btn) {
      const textSpan = btn.querySelector('.btn-text');
      if (textSpan) textSpan.textContent = prof.label;
    }

    this.hideLoginModal();
    this.updateUI();
    await db.logAudit('تبديل صلاحية العرض', `تم تبديل واجهة العرض لدور: ${RolesManager.getRoleLabel(role)}`, this.currentUser);
    if (this.onUserChanged) this.onUserChanged(this.currentUser);
  }

  async login(email, password) {
    // In demo, any login succeeds as admin
    this.currentUser = {
      id: 'u-demo-admin',
      name: 'مدير المركز (ديمو)',
      email: email || 'admin@physiocare.demo',
      role: 'admin'
    };
        // Update role capsule active buttons
    ['admin', 'doctor', 'receptionist'].forEach(r => {
      const btn = document.getElementById(`r-opt-${r}`);
      if (btn) btn.classList.toggle('active', r === role);
    });

    localStorage.setItem('pc_demo_active_user', JSON.stringify(this.currentUser));
    this.hideLoginModal();
    this.updateUI();
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
