import React from 'react';
import StaffManagementMain from './staff_components/StaffManagementMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Staff Management | Hostel Warden',
  description: 'Manage guards, cleaners, electricians, their shifts, and daily attendance.',
};

export default function StaffManagementPage() {
  return (
    <div className="w-full h-full min-h-[calc(100vh-64px)] bg-[var(--bg-page)] text-[var(--text-primary)] p-6">
      <StaffManagementMain />
    </div>
  );
}
