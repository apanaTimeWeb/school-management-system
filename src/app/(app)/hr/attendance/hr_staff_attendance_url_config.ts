export const HrStaffAttendanceUrlConfig = {
    endpoints: {
        getDailyAttendance: (date: string) => `/api/hr/attendance/daily?date=${date}`,
        getMonthlyAttendance: (month: string, year: string) => `/api/hr/attendance/monthly?month=${month}&year=${year}`,
        markAttendance: '/api/hr/attendance/mark',
        syncBiometric: '/api/hr/attendance/sync-biometric',
        correctAttendance: '/api/hr/attendance/correct',
    },
    routes: {
        main: '/hr/staff_attendance',
    }
};

