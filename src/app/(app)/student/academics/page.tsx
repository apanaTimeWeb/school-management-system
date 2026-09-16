import React from 'react';
import StudentAcademicsMain from './student_academics_components/StudentAcademicsMain';

export const metadata = {
  title: "My Academics | School ERP 360",
  description: "View subjects, syllabus, and academic history.",
};

export default function StudentAcademicsPage() {
  return (
    <main className="w-full max-w-[1400px] mx-auto p-4 md:p-6 lg:p-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-text-primary">My Academics</h1>
        <p className="text-sm text-text-secondary mt-1">Track your subjects, syllabus progress, and academic history.</p>
      </div>
      <StudentAcademicsMain />
    </main>
  );
}
