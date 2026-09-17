import React from 'react';
import TransportDriversMain from './transport_drivers_components/TransportDriversMain';
import { Metadata } from 'next';

// RESPONSIBILITY: Server component for Transport Drivers Route

export const metadata: Metadata = {
  title: 'Driver Management | Transport Manager',
  description: 'Manage transport staff, driver details, licenses, and route assignments.',
};

export default function TransportDriversPage() {
  return (
    <div className="w-full h-full min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)] p-6">
      <TransportDriversMain />
    </div>
  );
}
