export const AdminHrLettersUrlConfig = {
    endpoints: {
        getTemplates: '/api/admin/hr/letters/templates',
        getHistory: '/api/admin/hr/letters/history',
        generateLetter: '/api/admin/hr/letters/generate',
    },
    routes: {
        main: '/admin/hr_letters',
    }
};
