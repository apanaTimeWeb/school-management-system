export const AdminHrPayrollUrlConfig = {
    endpoints: {
        getPayrollRecords: '/api/admin/hr/payroll/records',
        getReports: '/api/admin/hr/payroll/reports',
        processPayroll: (id: string) => `/api/admin/hr/payroll/${id}/process`,
    },
    routes: {
        main: '/hr/payroll',
    }
};
