import React from 'react';
import TransportDashboardMain from './transport_dashboard_components/TransportDashboardMain';
import { Metadata } from 'next';

// RESPONSIBILITY: Server component for Transport Dashboard Route

export const metadata: Metadata = {
  title: 'Transport Dashboard | Smart Gym 360',
  description: 'Manage and monitor all school transport operations.',
};

export default function TransportDashboardPage() {
  return (
    <div className="w-full h-full min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)] p-6">
      <TransportDashboardMain />
    </div>
  );
}
