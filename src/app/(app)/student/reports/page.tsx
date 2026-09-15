import React from 'react';
import StudentReportsMain from './student_reports_components/StudentReportsMain';

export const metadata = {
  title: "Reports & Analytics | Smart Gym 360",
  description: "View and download comprehensive analytical reports for your academic journey.",
};

export default function StudentReportsPage() {
  return (
    <main className="w-full max-w-[1400px] mx-auto p-4 md:p-6 lg:p-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-text-primary">Reports & Analytics</h1>
        <p className="text-sm text-text-secondary mt-1">Access comprehensive statements for your attendance, academics, fees, and more.</p>
      </div>
      <StudentReportsMain />
    </main>
  );
}
