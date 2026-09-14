export const HrPerformanceUrlConfig = {
    endpoints: {
        getActiveAppraisals: '/api/hr/performance/active',
        getPerformanceHistory: '/api/hr/performance/history',
        submitAppraisal: (id: string) => `/api/hr/performance/${id}/submit`,
    },
    routes: {
        main: '/hr/performance',
    }
};

