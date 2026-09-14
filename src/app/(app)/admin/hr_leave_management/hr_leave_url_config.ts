export const AdminHrLeaveUrlConfig = {
    endpoints: {
        getApplications: '/api/admin/hr/leave/applications',
        getBalances: '/api/admin/hr/leave/balances',
        getTypes: '/api/admin/hr/leave/types',
        getHolidays: '/api/admin/hr/leave/holidays',
        updateApplicationStatus: (id: string) => `/api/admin/hr/leave/applications/${id}/status`,
    },
    routes: {
        main: '/admin/hr_leave_management',
    }
};
