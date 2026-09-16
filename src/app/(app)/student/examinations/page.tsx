import React from 'react';
import StudentExaminationsMain from './student_examinations_components/StudentExaminationsMain';

export const metadata = {
  title: "Examinations | School ERP 360",
  description: "View your upcoming and past examination schedules and syllabus.",
};

export default function StudentExaminationsPage() {
  return (
    <main className="w-full max-w-[1400px] mx-auto p-4 md:p-6 lg:p-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-text-primary">Examinations</h1>
        <p className="text-sm text-text-secondary mt-1">Check your exam calendar, timings, and detailed syllabus.</p>
      </div>
      <StudentExaminationsMain />
    </main>
  );
}
