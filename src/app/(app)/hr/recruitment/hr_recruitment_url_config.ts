export const AdminHrRecruitmentUrlConfig = {
    endpoints: {
        getJobs: '/api/admin/hr/recruitment/jobs',
        getApplications: '/api/admin/hr/recruitment/applications',
        updateApplicationStatus: (id: string) => `/api/admin/hr/recruitment/applications/${id}/status`,
    },
    routes: {
        main: '/hr/recruitment',
    }
};
