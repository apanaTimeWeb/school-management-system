import React from 'react';
import StudentTransportMain from './student_transport_components/StudentTransportMain';

export const metadata = {
  title: "Transport | School ERP 360",
  description: "View your bus route, track live location, and get transport updates.",
};

export default function StudentTransportPage() {
  return (
    <main className="w-full max-w-[1400px] mx-auto p-4 md:p-6 lg:p-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-text-primary">School Transport</h1>
        <p className="text-sm text-text-secondary mt-1">Track your bus, view route details, and manage transport fees.</p>
      </div>
      <StudentTransportMain />
    </main>
  );
}
