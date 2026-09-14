export const HrWorkloadUrlConfig = {
    endpoints: {
        getWorkloadList: '/api/hr/workload/list',
        getWorkloadSummary: '/api/hr/workload/summary',
        updateAssignments: (id: string) => `/api/hr/workload/${id}/assignments`,
    },
    routes: {
        main: '/hr/workload',
    }
};

