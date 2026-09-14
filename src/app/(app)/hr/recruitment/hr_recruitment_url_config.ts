export const HrRecruitmentUrlConfig = {
    endpoints: {
        getJobs: '/api/hr/recruitment/jobs',
        getApplications: '/api/hr/recruitment/applications',
        updateApplicationStatus: (id: string) => `/api/hr/recruitment/applications/${id}/status`,
    },
    routes: {
        main: '/hr/recruitment',
    }
};

