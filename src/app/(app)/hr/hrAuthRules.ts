// HR/Office Authorization & Access Rules (As per requirements)

export const checkReceptionistAccess = (role: string) => {
  // IMPORTANT RULE: Separate Receptionist / Admission Officer nahi hoga.
  // RBAC ke through HR/Office ya School Admin permissions hi rahenge.
  if (role === 'RECEPTIONIST' || role === 'ADMISSION_OFFICER') {
    // Ye separate roles system mein exist nahi karte.
    // Inki capabilities HR/Office module mein mapped hain.
    return false; 
  }
  return role === 'HR' || role === 'OFFICE' || role === 'ADMIN' || role === 'SUPER_ADMIN';
};

export const checkHRAccess = (role: string) => {
  return role === 'HR' || role === 'ADMIN' || role === 'SUPER_ADMIN';
};
