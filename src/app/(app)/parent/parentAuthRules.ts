// Parent Authorization & Access Rules (As per requirements)

/**
 * Validates if the user has the basic Parent role.
 */
export const checkParentAccess = (role: string) => {
  return role === 'PARENT' || role === 'ADMIN' || role === 'SUPER_ADMIN';
};

/**
 * EXPLICIT RESTRICTION: Parent can ONLY view data for their linked child/children.
 * They cannot view data for any other student.
 * @param parentLinkedStudentIds Array of student IDs linked to this parent
 * @param requestedStudentId The student ID being accessed
 */
export const canParentViewStudentData = (role: string, parentLinkedStudentIds: string[], requestedStudentId: string) => {
  if (role === 'PARENT') {
    return parentLinkedStudentIds.includes(requestedStudentId);
  }
  // Teachers, Admins, etc. can view other students based on their own scopes
  return true; 
};

/**
 * EXPLICIT RESTRICTION: Parent cannot edit any academic, attendance, or fee records.
 * They have read-only access to their child's data (except for forms they submit, like Leave Requests or Feedback).
 */
export const canParentEditRecords = (role: string) => {
  if (role === 'PARENT') return false;
  return true; // Other roles have specific permissions checked elsewhere
};
