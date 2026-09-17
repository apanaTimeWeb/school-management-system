import React from 'react';
import TransportReportsMain from './transport_reports_components/TransportReportsMain';
import { Metadata } from 'next';

// RESPONSIBILITY: Server component for Transport Reports Route

export const metadata: Metadata = {
  title: 'Reports & Analytics | Transport Manager',
  description: 'Generate, view, and export transport metrics covering vehicles, students, staff, finances, and safety audits.',
};

export default function TransportReportsPage() {
  return (
    <div className="w-full h-full min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)] p-6">
      <TransportReportsMain />
    </div>
  );
}
