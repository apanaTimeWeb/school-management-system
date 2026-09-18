// Hostel Warden Authorization & Access Rules

/**
 * Validates if the user has the Hostel Warden role.
 */
export const checkHostelWardenAccess = (role: string) => {
  return role === 'HOSTEL_WARDEN' || role === 'ADMIN' || role === 'SUPER_ADMIN';
};

/**
 * EXPLICIT CONSTRAINT: Separate roles like Mess Manager, Security, Receptionist, etc., 
 * MUST NOT have separate logins. They are just modules/records handled by the Hostel Warden or Admin.
 */
export const canMessManagerLogin = () => false;
export const canSecurityLogin = () => false;
export const canReceptionistLogin = () => false; // Covered via HR/Admin logic as well
