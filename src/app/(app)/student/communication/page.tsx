import React from 'react';
import StudentCommunicationMain from './student_communication_components/StudentCommunicationMain';

export const metadata = {
  title: "Communication | Smart Gym 360",
  description: "View important notices, announcements, and school updates.",
};

export default function StudentCommunicationPage() {
  return (
    <main className="w-full max-w-[1400px] mx-auto p-4 md:p-6 lg:p-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-text-primary">Communication & Notices</h1>
        <p className="text-sm text-text-secondary mt-1">Stay updated with the latest announcements from school and teachers.</p>
      </div>
      <StudentCommunicationMain />
    </main>
  );
}
