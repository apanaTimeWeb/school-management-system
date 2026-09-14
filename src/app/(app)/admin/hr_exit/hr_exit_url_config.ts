export const AdminHrExitUrlConfig = {
    endpoints: {
        getExitPipeline: '/api/admin/hr/exit/pipeline',
        getExitHistory: '/api/admin/hr/exit/history',
        updateClearance: (id: string) => `/api/admin/hr/exit/${id}/clearance`,
    },
    routes: {
        main: '/admin/hr_exit',
    }
};
