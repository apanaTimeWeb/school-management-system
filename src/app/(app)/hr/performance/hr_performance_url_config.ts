export const AdminHrPerformanceUrlConfig = {
    endpoints: {
        getActiveAppraisals: '/api/admin/hr/performance/active',
        getPerformanceHistory: '/api/admin/hr/performance/history',
        submitAppraisal: (id: string) => `/api/admin/hr/performance/${id}/submit`,
    },
    routes: {
        main: '/hr/performance',
    }
};
