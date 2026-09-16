import React from 'react';
import StudentEventsMain from './student_events_components/StudentEventsMain';

export const metadata = {
  title: "Events & Activities | School ERP 360",
  description: "Register for school events, track participations, and download certificates.",
};

export default function StudentEventsPage() {
  return (
    <main className="w-full max-w-[1400px] mx-auto p-4 md:p-6 lg:p-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-text-primary">Events & Activities</h1>
        <p className="text-sm text-text-secondary mt-1">Discover upcoming school events, register, and track your co-curricular achievements.</p>
      </div>
      <StudentEventsMain />
    </main>
  );
}
