export const HrIdCardsUrlConfig = {
    endpoints: {
        getEmployeesForId: '/api/hr/id-cards/employees',
        printIdCard: (id: string) => `/api/hr/id-cards/${id}/print`,
        bulkPrint: '/api/hr/id-cards/bulk-print',
    },
    routes: {
        main: '/hr/id_cards',
    }
};

