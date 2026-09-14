export const HrTransferUrlConfig = {
    endpoints: {
        getRequests: '/api/hr/transfer/requests',
        getHistory: '/api/hr/transfer/history',
        createRequest: '/api/hr/transfer/create',
        updateStatus: (id: string) => `/api/hr/transfer/${id}/status`,
    },
    routes: {
        main: '/hr/transfer_promotion',
    }
};

