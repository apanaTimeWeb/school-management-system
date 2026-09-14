export const AdminHrWorkloadUrlConfig = {
    endpoints: {
        getWorkloadList: '/api/admin/hr/workload/list',
        getWorkloadSummary: '/api/admin/hr/workload/summary',
        updateAssignments: (id: string) => `/api/admin/hr/workload/${id}/assignments`,
    },
    routes: {
        main: '/hr/workload',
    }
};
