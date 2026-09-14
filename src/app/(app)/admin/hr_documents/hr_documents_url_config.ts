export const AdminHrDocumentsUrlConfig = {
    endpoints: {
        getVaultList: '/api/admin/hr/documents/vault',
        getAlerts: '/api/admin/hr/documents/alerts',
        verifyDocument: (empId: string, docId: string) => `/api/admin/hr/documents/${empId}/${docId}/verify`,
    },
    routes: {
        main: '/admin/hr_documents',
    }
};
