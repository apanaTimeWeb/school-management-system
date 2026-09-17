import React from 'react';
import TransportMaintenanceMain from './transport_maintenance_components/TransportMaintenanceMain';
import { Metadata } from 'next';

// RESPONSIBILITY: Server component for Transport Vehicle Maintenance Route

export const metadata: Metadata = {
  title: 'Vehicle Maintenance | Transport Manager',
  description: 'Track service history, workshop repairs, breakdown logs, and billing for the transport fleet.',
};

export default function TransportMaintenancePage() {
  return (
    <div className="w-full h-full min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)] p-6">
      <TransportMaintenanceMain />
    </div>
  );
}
