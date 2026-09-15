import React from 'react';
import StudentDisciplineMain from './student_discipline_components/StudentDisciplineMain';

export const metadata = {
  title: "Discipline & Behaviour | Smart Gym 360",
  description: "View teacher remarks, official warnings, and counselling records.",
};

export default function StudentDisciplinePage() {
  return (
    <main className="w-full max-w-[1400px] mx-auto p-4 md:p-6 lg:p-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-text-primary">Discipline & Behaviour</h1>
        <p className="text-sm text-text-secondary mt-1">Review your behaviour remarks, official warnings, and counselling history.</p>
      </div>
      <StudentDisciplineMain />
    </main>
  );
}
