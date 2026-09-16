import React from 'react';
import StudentAttendanceMain from './student_attendance_components/StudentAttendanceMain';

export const metadata = {
  title: "My Attendance | School ERP 360",
  description: "View daily, monthly, and subject-wise attendance.",
};

export default function StudentAttendancePage() {
  return (
    <main className="w-full max-w-[1400px] mx-auto p-4 md:p-6 lg:p-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-text-primary">My Attendance</h1>
        <p className="text-sm text-text-secondary mt-1">Track your daily and subject-wise attendance records.</p>
      </div>
      <StudentAttendanceMain />
    </main>
  );
}
