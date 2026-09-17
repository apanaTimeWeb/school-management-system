import React from 'react';
import StudentAllocationMain from './allocation_components/StudentAllocationMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Student Allocation | Hostel Warden',
  description: 'Manage student room assignments, history, and guardian records.',
};

export default function StudentAllocationPage() {
  return (
    <div className="w-full h-full min-h-[calc(100vh-64px)] bg-[var(--bg-page)] text-[var(--text-primary)] p-6">
      <StudentAllocationMain />
    </div>
  );
}
