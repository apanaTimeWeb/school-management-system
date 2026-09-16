import React from 'react';
import StudentIdCardMain from './student_id_card_components/StudentIdCardMain';

export const metadata = {
  title: "Digital ID Card | School ERP 360",
  description: "View, download, or print your official Digital Student ID Card.",
};

export default function StudentIdCardPage() {
  return (
    <main className="w-full max-w-[1400px] mx-auto p-4 md:p-6 lg:p-8">
      <div className="mb-6 print:hidden">
        <h1 className="text-2xl font-bold text-text-primary">Digital ID Card</h1>
        <p className="text-sm text-text-secondary mt-1">Your official digital identity card for campus access.</p>
      </div>
      <StudentIdCardMain />
    </main>
  );
}
