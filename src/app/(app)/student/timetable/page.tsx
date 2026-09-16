import React from 'react';
import StudentTimetableMain from './student_timetable_components/StudentTimetableMain';

export const metadata = {
  title: "My Timetable | School ERP 360",
  description: "View daily and weekly class schedules.",
};

export default function StudentTimetablePage() {
  return (
    <main className="w-full max-w-[1400px] mx-auto p-4 md:p-6 lg:p-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-text-primary">My Timetable</h1>
        <p className="text-sm text-text-secondary mt-1">Manage your daily classes and view weekly schedule.</p>
      </div>
      <StudentTimetableMain />
    </main>
  );
}
