import React from 'react';
import StudentLeaveMain from './student_leave_components/StudentLeaveMain';

export const metadata = {
  title: "Leave Application | School ERP 360",
  description: "Apply for leaves and track your leave request status.",
};

export default function StudentLeavePage() {
  return (
    <main className="w-full max-w-[1400px] mx-auto p-4 md:p-6 lg:p-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-text-primary">Leave Application</h1>
        <p className="text-sm text-text-secondary mt-1">Submit new leave requests or view the status of past applications.</p>
      </div>
      <StudentLeaveMain />
    </main>
  );
}
