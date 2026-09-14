export const HrEmployeesUrlConfig = {
    endpoints: {
        getEmployees: '/api/hr/employees',
        getEmployeeById: (id: string) => `/api/hr/employees/${id}`,
        createEmployee: '/api/hr/employees',
        updateEmployee: (id: string) => `/api/hr/employees/${id}`,
        updateEmployeeStatus: (id: string) => `/api/hr/employees/${id}/status`,
        addEmployeeHistory: (id: string) => `/api/hr/employees/${id}/history`,
    },
    routes: {
        list: '/hr/employees',
        add: '/hr/employees/add',
        profile: (id: string) => `/hr/employees/${id}`,
    }
};

