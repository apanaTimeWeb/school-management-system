export const PRINCIPAL_ADMISSIONS_URL_CONFIG = {
  apiRoutes: {
    getAdmissionsStats: '/api/principal/admissions/stats',
    getApplicationsList: '/api/principal/admissions/list',
    getApplicationProfile: (id: string) => `/api/principal/admissions/${id}`,
  },
};
