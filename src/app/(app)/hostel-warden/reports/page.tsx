import React from 'react';
import ReportsMain from './reports_components/ReportsMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reports & Analytics | Hostel Warden',
  description: 'Generate and view high-level summaries for attendance, mess, fines, and maintenance.',
};

export default function ReportsPage() {
  return (
    <div className="w-full h-full min-h-[calc(100vh-64px)] bg-[var(--bg-page)] text-[var(--text-primary)] p-6">
      <ReportsMain />
    </div>
  );
}
