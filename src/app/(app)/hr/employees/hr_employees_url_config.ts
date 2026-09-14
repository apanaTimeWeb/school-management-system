export const AdminHrEmployeesUrlConfig = {
    endpoints: {
        getEmployees: '/api/admin/hr/employees',
        getEmployeeById: (id: string) => `/api/admin/hr/employees/${id}`,
        createEmployee: '/api/admin/hr/employees',
        updateEmployee: (id: string) => `/api/admin/hr/employees/${id}`,
        updateEmployeeStatus: (id: string) => `/api/admin/hr/employees/${id}/status`,
        addEmployeeHistory: (id: string) => `/api/admin/hr/employees/${id}/history`,
    },
    routes: {
        list: '/hr/employees',
        add: '/hr/employees/add',
        profile: (id: string) => `/hr/employees/${id}`,
    }
};
