import React from 'react';
import LeaveManagementMain from './leave_components/LeaveManagementMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Leave Management | Hostel Warden',
  description: 'Apply for warden leaves and manage staff leave requests.',
};

export default function LeaveManagementPage() {
  return (
    <div className="w-full h-full min-h-[calc(100vh-64px)] bg-[var(--bg-page)] text-[var(--text-primary)] p-6">
      <LeaveManagementMain />
    </div>
  );
}
