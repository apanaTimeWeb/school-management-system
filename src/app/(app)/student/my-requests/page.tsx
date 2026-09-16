import React from 'react';
import StudentRequestsMain from './student_requests_components/StudentRequestsMain';

export const metadata = {
  title: "My Requests | School ERP 360",
  description: "Track and manage all your school requests in one place.",
};

export default function StudentRequestsPage() {
  return (
    <main className="w-full max-w-[1400px] mx-auto p-4 md:p-6 lg:p-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-text-primary">My Requests</h1>
        <p className="text-sm text-text-secondary mt-1">Submit and track all your applications, certificates, and general requests.</p>
      </div>
      <StudentRequestsMain />
    </main>
  );
}
