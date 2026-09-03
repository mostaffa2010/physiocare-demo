// ========================================================
// PhysioFlow - Roles & Permissions System (RBAC)
// ========================================================

export const ROLES = {
  ADMIN: 'admin',
  DOCTOR: 'doctor',
  RECEPTIONIST: 'receptionist'
};

export const ROLE_LABELS = {
  admin: 'مدير المركز',
  doctor: 'طبيب معالج',
  receptionist: 'سكرتارية / استقبال'
};

export class RolesManager {
  static getRoleLabel(role) {
    return ROLE_LABELS[role] || role;
  }

  static applyPermissions(currentUser) {
    const role = currentUser ? currentUser.role : ROLES.ADMIN;

    // 1. التحكم في أشرطة التنقل (Sidebar & Mobile Bottom Nav)
    // الطبيب المعالج: لا يرى أي تبويب أو بانل سوى "المرضى" فقط
    const navItems = document.querySelectorAll('.nav-link, .b-nav-item');
    navItems.forEach(item => {
      const view = item.getAttribute('data-view');
      if (role === ROLES.DOCTOR) {
        item.style.display = (view === 'patients') ? 'flex' : 'none';
      } else if (role === ROLES.RECEPTIONIST) {
        // السكرتارية ترى الرئيسية، المرضى، الجلسات، الحسابات (وتُحجب لوحة المدير فقط)
        item.style.display = (view === 'admin') ? 'none' : 'flex';
      } else {
        // المدير يرى كل شيء
        item.style.display = 'flex';
      }
    });

    // 2. تحويل الطبيب فوراً لشاشة المرضى إذا كان يقف على شاشة أخرى
    if (role === ROLES.DOCTOR && window.app) {
      if (window.app.currentView !== 'patients' && window.app.currentView !== 'patient-sheet') {
        window.app.switchView('patients');
      }
    }

    // 3. عناصر خاصة بالمدير فقط (Admin Only)
    const adminElements = document.querySelectorAll('.admin-only');
    adminElements.forEach(el => {
      el.style.display = (role === ROLES.ADMIN) ? '' : 'none';
    });

    // 4. طباعة وتصدير الشيت الطبي (محظورة تماماً على الطبيب المعالج، مسموحة للمدير)
    const printSheetBtns = document.querySelectorAll('.btn-print-sheet, #btn-sheet-print, [onclick*="printCurrentSheet"]');
    printSheetBtns.forEach(btn => {
      btn.style.display = (role === ROLES.DOCTOR) ? 'none' : '';
    });

    // 5. زر إضافة مريض جديد (متاح للاستقبال والمدير، مخفي عن الطبيب)
    const addPatientBtn = document.getElementById('btn-open-add-patient');
    if (addPatientBtn) {
      addPatientBtn.style.display = (role === ROLES.DOCTOR) ? 'none' : '';
    }

    // 6. إعادة رسم جدول المرضى لتطبيق الصلاحيات بدقة فورية
    if (window.patientsManager && typeof window.patientsManager.renderPatients === 'function') {
      window.patientsManager.renderPatients();
    }
  }

  // حذف المرضى متاح للمدير والاستقبال (ممنوع على الطبيب المعالج)
  static canDeletePatient(currentUser) {
    return currentUser && (currentUser.role === ROLES.ADMIN || currentUser.role === ROLES.RECEPTIONIST);
  }

  // حذف وتعديل الحسابات والمصروفات متاح للمدير فقط
  static canDeleteFinance(currentUser) {
    return currentUser && currentUser.role === ROLES.ADMIN;
  }

  // الدخول والاطلاع على الشيت الطبي متاح للأطباء والمدير (ممنوع تماماً على الاستقبال)
  static canAccessClinicalSheet(currentUser) {
    return currentUser && (currentUser.role === ROLES.ADMIN || currentUser.role === ROLES.DOCTOR);
  }

  // طباعة وتصدير الشيت الطبي متاح للمدير فقط (ممنوع على الطبيب المعالج)
  static canPrintSheet(currentUser) {
    return currentUser && currentUser.role === ROLES.ADMIN;
  }

  // إدارة المستخدمين والأزرار للمدير فقط
  static canManageUsers(currentUser) {
    return currentUser && currentUser.role === ROLES.ADMIN;
  }
}
