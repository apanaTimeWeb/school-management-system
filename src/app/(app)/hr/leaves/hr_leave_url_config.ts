export const HrLeaveUrlConfig = {
    endpoints: {
        getApplications: '/api/hr/leave/applications',
        getBalances: '/api/hr/leave/balances',
        getTypes: '/api/hr/leave/types',
        getHolidays: '/api/hr/leave/holidays',
        updateApplicationStatus: (id: string) => `/api/hr/leave/applications/${id}/status`,
    },
    routes: {
        main: '/hr/leave_management',
    }
};

