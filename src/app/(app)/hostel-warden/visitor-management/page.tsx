import React from 'react';
import VisitorManagementMain from './visitor_components/VisitorManagementMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Visitor Management | Hostel Warden',
  description: 'Track hostel visitors, guardian relationships, and manage gate entry/exit.',
};

export default function VisitorManagementPage() {
  return (
    <div className="w-full h-full min-h-[calc(100vh-64px)] bg-[var(--bg-page)] text-[var(--text-primary)] p-6">
      <VisitorManagementMain />
    </div>
  );
}
