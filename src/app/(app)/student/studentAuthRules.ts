// Student Authorization & Access Rules (As per requirements)

/**
 * Validates if the user has the basic Student role.
 */
export const checkStudentAccess = (role: string) => {
  return role === 'STUDENT' || role === 'ADMIN' || role === 'SUPER_ADMIN';
};

/**
 * EXPLICIT RESTRICTION: Student cannot edit marks under any circumstances.
 */
export const canStudentEditMarks = (role: string) => {
  if (role === 'STUDENT') return false;
  return role === 'TEACHER' || role === 'ADMIN' || role === 'SUPER_ADMIN';
};

/**
 * EXPLICIT RESTRICTION: Student cannot edit attendance under any circumstances.
 */
export const canStudentEditAttendance = (role: string) => {
  if (role === 'STUDENT') return false;
  return role === 'TEACHER' || role === 'ADMIN' || role === 'SUPER_ADMIN';
};

/**
 * EXPLICIT RESTRICTION: Student cannot edit fees under any circumstances.
 */
export const canStudentEditFees = (role: string) => {
  if (role === 'STUDENT') return false;
  return role === 'ACCOUNTANT' || role === 'ADMIN' || role === 'SUPER_ADMIN';
};

/**
 * EXPLICIT RESTRICTION: Student cannot edit results under any circumstances.
 */
export const canStudentEditResults = (role: string) => {
  if (role === 'STUDENT') return false;
  return role === 'TEACHER' || role === 'ADMIN' || role === 'SUPER_ADMIN';
};

/**
 * EXPLICIT RESTRICTION: Student cannot view other students' data.
 * Must only access data bound to their own student ID.
 */
export const canStudentViewOtherStudents = (role: string) => {
  if (role === 'STUDENT') return false;
  // Teachers, Admins, etc. can view other students (based on their own scopes)
  return true; 
};
