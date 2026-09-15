import React from 'react';
import StudentFeesMain from './student_fees_components/StudentFeesMain';

export const metadata = {
  title: "Fee Management | Smart Gym 360",
  description: "View fee structure, payment history, and pay online.",
};

export default function StudentFeesPage() {
  return (
    <main className="w-full max-w-[1400px] mx-auto p-4 md:p-6 lg:p-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-text-primary">Fee Management</h1>
        <p className="text-sm text-text-secondary mt-1">Track your fee summary, upcoming installments, and past transactions.</p>
      </div>
      <StudentFeesMain />
    </main>
  );
}
