export const HrDocumentsUrlConfig = {
    endpoints: {
        getVaultList: '/api/hr/documents/vault',
        getAlerts: '/api/hr/documents/alerts',
        verifyDocument: (empId: string, docId: string) => `/api/hr/documents/${empId}/${docId}/verify`,
    },
    routes: {
        main: '/hr/documents',
    }
};

