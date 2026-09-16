import React from 'react';
import StudentNotificationsMain from './student_notifications_components/StudentNotificationsMain';

export const metadata = {
  title: "Notifications | School ERP 360",
  description: "View all your school updates and alerts in one place.",
};

export default function StudentNotificationsPage() {
  return (
    <main className="w-full max-w-[1400px] mx-auto p-4 md:p-6 lg:p-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-text-primary">Notification Center</h1>
        <p className="text-sm text-text-secondary mt-1">Stay updated with assignments, fees, exams, and more.</p>
      </div>
      <StudentNotificationsMain />
    </main>
  );
}
