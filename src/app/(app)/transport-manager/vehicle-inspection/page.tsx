import React from 'react';
import TransportVehicleInspectionMain from './transport_vehicle_inspection_components/TransportVehicleInspectionMain';
import { Metadata } from 'next';

// RESPONSIBILITY: Server component for Transport Vehicle Inspection Route

export const metadata: Metadata = {
  title: 'Vehicle Inspection | Transport Manager',
  description: 'Conduct daily and periodic safety checklists for the school transport fleet.',
};

export default function TransportVehicleInspectionPage() {
  return (
    <div className="w-full h-full min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)] p-6">
      <TransportVehicleInspectionMain />
    </div>
  );
}
