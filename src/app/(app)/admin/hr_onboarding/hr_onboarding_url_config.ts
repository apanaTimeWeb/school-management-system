export const AdminHrOnboardingUrlConfig = {
    endpoints: {
        getOnboardingList: '/api/admin/hr/onboarding/list',
        updateStatus: (id: string) => `/api/admin/hr/onboarding/${id}/status`,
    },
    routes: {
        main: '/admin/hr_onboarding',
    }
};
