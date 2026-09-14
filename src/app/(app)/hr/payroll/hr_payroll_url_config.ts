export const HrPayrollUrlConfig = {
    endpoints: {
        getPayrollRecords: '/api/hr/payroll/records',
        getReports: '/api/hr/payroll/reports',
        processPayroll: (id: string) => `/api/hr/payroll/${id}/process`,
    },
    routes: {
        main: '/hr/payroll',
    }
};

