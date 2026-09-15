import React from 'react';
import StudentDashboardMain from './student_dashboard_components/StudentDashboardMain';

export const metadata = {
  title: "Student Dashboard | Smart Gym 360",
  description: "View your classes, attendance, assignments, and updates.",
};

export default function StudentDashboardPage() {
  return (
    <main className="w-full max-w-[1400px] mx-auto p-4 md:p-6 lg:p-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-text-primary">Student Dashboard</h1>
        <p className="text-sm text-text-secondary mt-1">Track your academic progress, timetable, and school updates.</p>
      </div>
      <StudentDashboardMain />
    </main>
  );
}
