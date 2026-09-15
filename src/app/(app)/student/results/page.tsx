import React from 'react';
import StudentResultsMain from './student_results_components/StudentResultsMain';

export const metadata = {
  title: "Results & Report Card | Smart Gym 360",
  description: "View your examination results, grades, and report cards.",
};

export default function StudentResultsPage() {
  return (
    <main className="w-full max-w-[1400px] mx-auto p-4 md:p-6 lg:p-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-text-primary">Results & Report Card</h1>
        <p className="text-sm text-text-secondary mt-1">Check your academic performance and teacher remarks.</p>
      </div>
      <StudentResultsMain />
    </main>
  );
}
