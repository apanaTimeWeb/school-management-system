export const PRINCIPAL_STUDENTS_URL_CONFIG = {
  apiRoutes: {
    getStudentsList: '/api/principal/students/list',
    getStudentProfile: (studentId: string) => `/api/principal/students/${studentId}/profile`,
  },
};
