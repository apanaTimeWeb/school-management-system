import React from 'react';
import TransportConductorsMain from './transport_conductors_components/TransportConductorsMain';
import { Metadata } from 'next';

// RESPONSIBILITY: Server component for Transport Conductors Route

export const metadata: Metadata = {
  title: 'Conductors & Staff | Transport Manager',
  description: 'Manage transport staff, conductors, attendants, and their daily assignments.',
};

export default function TransportConductorsPage() {
  return (
    <div className="w-full h-full min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)] p-6">
      <TransportConductorsMain />
    </div>
  );
}
