import React from 'react';
import HostelDashboardMain from './hostel_dashboard_components/HostelDashboardMain';
import { Metadata } from 'next';

// RESPONSIBILITY: Server component for Hostel Warden Dashboard

export const metadata: Metadata = {
  title: 'Dashboard | Hostel Warden',
  description: 'Overview of hostel operations, student presence, and pending action items.',
};

export default function HostelWardenDashboardPage() {
  return (
    <div className="w-full h-full min-h-[calc(100vh-64px)] bg-[var(--bg-page)] text-[var(--text-primary)] p-6">
      <HostelDashboardMain />
    </div>
  );
}
