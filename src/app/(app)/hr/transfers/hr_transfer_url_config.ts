export const AdminHrTransferUrlConfig = {
    endpoints: {
        getRequests: '/api/admin/hr/transfer/requests',
        getHistory: '/api/admin/hr/transfer/history',
        createRequest: '/api/admin/hr/transfer/create',
        updateStatus: (id: string) => `/api/admin/hr/transfer/${id}/status`,
    },
    routes: {
        main: '/hr/transfer_promotion',
    }
};
