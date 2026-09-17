import React from 'react';
import HostelFeesMain from './fees_components/HostelFeesMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hostel Fees | Hostel Warden',
  description: 'View student fee status, room rent, and add damage fines.',
};

export default function HostelFeesPage() {
  return (
    <div className="w-full h-full min-h-[calc(100vh-64px)] bg-[var(--bg-page)] text-[var(--text-primary)] p-6">
      <HostelFeesMain />
    </div>
  );
}
