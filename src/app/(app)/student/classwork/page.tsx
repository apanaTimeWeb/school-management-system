import React from 'react';
import StudentClassworkMain from './student_classwork_components/StudentClassworkMain';

export const metadata = {
  title: "Classwork | School ERP 360",
  description: "View daily classwork notes and teacher instructions.",
};

export default function StudentClassworkPage() {
  return (
    <main className="w-full max-w-[1400px] mx-auto p-4 md:p-6 lg:p-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-text-primary">Classwork</h1>
        <p className="text-sm text-text-secondary mt-1">Review what was taught in class today and access past class notes.</p>
      </div>
      <StudentClassworkMain />
    </main>
  );
}
