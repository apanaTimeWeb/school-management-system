import React from 'react';
import TransportStopsMain from './transport_stops_components/TransportStopsMain';
import { Metadata } from 'next';

// RESPONSIBILITY: Server component for Transport Stops Route

export const metadata: Metadata = {
  title: 'Route Stops | Transport Manager',
  description: 'Manage sequence, pickup, and drop times for transport route stops.',
};

export default function TransportStopsPage() {
  return (
    <div className="w-full h-full min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)] p-6">
      <TransportStopsMain />
    </div>
  );
}
