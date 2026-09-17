import React from 'react';
import HostelManagementMain from './management_components/HostelManagementMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hostel Management | Hostel Warden',
  description: 'Manage hostels, capacities, wardens, rules, and facilities.',
};

export default function HostelManagementPage() {
  return (
    <div className="w-full h-full min-h-[calc(100vh-64px)] bg-[var(--bg-page)] text-[var(--text-primary)] p-6">
      <HostelManagementMain />
    </div>
  );
}
