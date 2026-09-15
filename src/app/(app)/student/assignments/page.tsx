import React from 'react';
import StudentAssignmentsMain from './student_assignments_components/StudentAssignmentsMain';

export const metadata = {
  title: "Assignments | Smart Gym 360",
  description: "View, submit, and track your assignments.",
};

export default function StudentAssignmentsPage() {
  return (
    <main className="w-full max-w-[1400px] mx-auto p-4 md:p-6 lg:p-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-text-primary">Assignments</h1>
        <p className="text-sm text-text-secondary mt-1">Submit your work and view teacher feedback.</p>
      </div>
      <StudentAssignmentsMain />
    </main>
  );
}
