import React from 'react';
import StudentHealthMain from './student_health_components/StudentHealthMain';

export const metadata = {
  title: "Health & Medical | School ERP 360",
  description: "View your school health profile, medical checkups, and advisories.",
};

export default function StudentHealthPage() {
  return (
    <main className="w-full max-w-[1400px] mx-auto p-4 md:p-6 lg:p-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-text-primary">Health & Medical</h1>
        <p className="text-sm text-text-secondary mt-1">Review your physical vitals, school checkup records, and health notices.</p>
      </div>
      <StudentHealthMain />
    </main>
  );
}
