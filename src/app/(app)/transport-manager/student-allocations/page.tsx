import React from 'react';
import TransportAllocationsMain from './transport_allocations_components/TransportAllocationsMain';
import { Metadata } from 'next';

// RESPONSIBILITY: Server component for Student Transport Allocations Route

export const metadata: Metadata = {
  title: 'Student Transport | Transport Manager',
  description: 'Manage student transport assignments, routes, stops, and vehicles.',
};

export default function TransportAllocationsPage() {
  return (
    <div className="w-full h-full min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)] p-6">
      <TransportAllocationsMain />
    </div>
  );
}
