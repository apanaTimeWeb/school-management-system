export const HrTeachersUrlConfig = {
    endpoints: {
        getTeachers: '/api/hr/teachers',
        getTeacherById: (id: string) => `/api/hr/teachers/${id}`,
        assignClassTeacher: (id: string) => `/api/hr/teachers/${id}/assignment`,
    },
    routes: {
        list: '/hr/teachers',
        profile: (id: string) => `/hr/teachers/${id}`,
    }
};

