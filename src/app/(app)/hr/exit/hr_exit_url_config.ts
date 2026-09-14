export const HrExitUrlConfig = {
    endpoints: {
        getExitPipeline: '/api/hr/exit/pipeline',
        getExitHistory: '/api/hr/exit/history',
        updateClearance: (id: string) => `/api/hr/exit/${id}/clearance`,
    },
    routes: {
        main: '/hr/exit',
    }
};

