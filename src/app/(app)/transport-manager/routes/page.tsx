import React from 'react';
import TransportRoutesMain from './transport_routes_components/TransportRoutesMain';
import { Metadata } from 'next';

// RESPONSIBILITY: Server component for Transport Routes Route

export const metadata: Metadata = {
  title: 'Route Management | Transport Manager',
  description: 'Manage transport routes, distances, stops, and vehicle assignments.',
};

export default function TransportRoutesPage() {
  return (
    <div className="w-full h-full min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)] p-6">
      <TransportRoutesMain />
    </div>
  );
}
