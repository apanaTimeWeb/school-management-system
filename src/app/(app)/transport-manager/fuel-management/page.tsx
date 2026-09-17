import React from 'react';
import TransportFuelManagementMain from './transport_fuel_management_components/TransportFuelManagementMain';
import { Metadata } from 'next';

// RESPONSIBILITY: Server component for Transport Fuel Management Route

export const metadata: Metadata = {
  title: 'Fuel Management | Transport Manager',
  description: 'Track fuel expenses, consumption rates, and detect suspicious mileage drops for the school fleet.',
};

export default function TransportFuelManagementPage() {
  return (
    <div className="w-full h-full min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)] p-6">
      <TransportFuelManagementMain />
    </div>
  );
}
