export const HrOnboardingUrlConfig = {
    endpoints: {
        getOnboardingList: '/api/hr/onboarding/list',
        updateStatus: (id: string) => `/api/hr/onboarding/${id}/status`,
    },
    routes: {
        main: '/hr/onboarding',
    }
};

