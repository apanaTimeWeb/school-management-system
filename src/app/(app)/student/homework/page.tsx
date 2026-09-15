import React from 'react';
import StudentHomeworkMain from './student_homework_components/StudentHomeworkMain';

export const metadata = {
  title: "Homework & Assignments | Smart Gym 360",
  description: "View and manage your pending and completed homework.",
};

export default function StudentHomeworkPage() {
  return (
    <main className="w-full max-w-[1400px] mx-auto p-4 md:p-6 lg:p-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-text-primary">Homework</h1>
        <p className="text-sm text-text-secondary mt-1">Track, view details, and submit your assignments.</p>
      </div>
      <StudentHomeworkMain />
    </main>
  );
}
