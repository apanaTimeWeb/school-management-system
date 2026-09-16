import React from 'react';
import StudentHostelMain from './student_hostel_components/StudentHostelMain';

export const metadata = {
  title: "Hostel | School ERP 360",
  description: "Manage your hostel accommodation, leaves, and visitor passes.",
};

export default function StudentHostelPage() {
  return (
    <main className="w-full max-w-[1400px] mx-auto p-4 md:p-6 lg:p-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-text-primary">Hostel Management</h1>
        <p className="text-sm text-text-secondary mt-1">Manage your accommodation details, leaves, and visitor pre-registrations.</p>
      </div>
      <StudentHostelMain />
    </main>
  );
}
