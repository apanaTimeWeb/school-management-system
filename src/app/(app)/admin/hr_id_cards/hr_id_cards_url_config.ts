export const AdminHrIdCardsUrlConfig = {
    endpoints: {
        getEmployeesForId: '/api/admin/hr/id-cards/employees',
        printIdCard: (id: string) => `/api/admin/hr/id-cards/${id}/print`,
        bulkPrint: '/api/admin/hr/id-cards/bulk-print',
    },
    routes: {
        main: '/admin/hr_id_cards',
    }
};
