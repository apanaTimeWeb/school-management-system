export const AdminHrStaffAttendanceUrlConfig = {
    endpoints: {
        getDailyAttendance: (date: string) => `/api/admin/hr/attendance/daily?date=${date}`,
        getMonthlyAttendance: (month: string, year: string) => `/api/admin/hr/attendance/monthly?month=${month}&year=${year}`,
        markAttendance: '/api/admin/hr/attendance/mark',
        syncBiometric: '/api/admin/hr/attendance/sync-biometric',
        correctAttendance: '/api/admin/hr/attendance/correct',
    },
    routes: {
        main: '/hr/staff_attendance',
    }
};
