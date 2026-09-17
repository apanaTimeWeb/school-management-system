import React from 'react';
import TransportRequestsMain from './transport_requests_components/TransportRequestsMain';
import { Metadata } from 'next';

// RESPONSIBILITY: Server component for Transport Requests Route

export const metadata: Metadata = {
  title: 'Transport Requests | Transport Manager',
  description: 'Manage and approve student transport requests for route changes, new transport, and temporary requests.',
};

export default function TransportRequestsPage() {
  return (
    <div className="w-full h-full min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)] p-6">
      <TransportRequestsMain />
    </div>
  );
}
