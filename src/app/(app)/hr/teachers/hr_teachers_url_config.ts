export const AdminHrTeachersUrlConfig = {
    endpoints: {
        getTeachers: '/api/admin/hr/teachers',
        getTeacherById: (id: string) => `/api/admin/hr/teachers/${id}`,
        assignClassTeacher: (id: string) => `/api/admin/hr/teachers/${id}/assignment`,
    },
    routes: {
        list: '/hr/teachers',
        profile: (id: string) => `/hr/teachers/${id}`,
    }
};
