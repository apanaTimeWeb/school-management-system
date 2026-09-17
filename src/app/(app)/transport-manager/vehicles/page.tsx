import React from 'react';
import TransportVehiclesMain from './transport_vehicles_components/TransportVehiclesMain';
import { Metadata } from 'next';

// RESPONSIBILITY: Server component for Transport Vehicles Route

export const metadata: Metadata = {
  title: 'Vehicles | Transport Manager',
  description: 'Manage school vehicles, their assignments and statuses.',
};

export default function TransportVehiclesPage() {
  return (
    <div className="w-full h-full min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)] p-6">
      <TransportVehiclesMain />
    </div>
  );
}
