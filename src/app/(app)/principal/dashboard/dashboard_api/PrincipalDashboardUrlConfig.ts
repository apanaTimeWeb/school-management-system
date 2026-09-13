export const PRINCIPAL_DASHBOARD_URL_CONFIG = {
  internalRoutes: {
    dashboard: '/principal/dashboard',
    allStudents: '/principal/students',
    allStaff: '/principal/staff',
    attendance: '/principal/attendance',
    feeCollection: '/principal/fees',
    notices: '/principal/notices',
    settings: '/principal/settings',
  },
  apiRoutes: {
    getKPIs: '/api/principal/dashboard/kpis',
    getAbsentees: '/api/principal/dashboard/absentees',
    getFinancials: '/api/principal/dashboard/financials',
    getAcademics: '/api/principal/dashboard/academics',
    getExams: '/api/principal/dashboard/exams',
    getEvents: '/api/principal/dashboard/events',
    getLeaves: '/api/principal/dashboard/leaves',
    getAlerts: '/api/principal/dashboard/alerts',
    getNotices: '/api/principal/dashboard/notices',
    getActivities: '/api/principal/dashboard/activities',
  },
};
