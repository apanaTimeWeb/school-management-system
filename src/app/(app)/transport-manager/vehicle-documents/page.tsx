import React from 'react';
import TransportDocumentsMain from './transport_documents_components/TransportDocumentsMain';
import { Metadata } from 'next';

// RESPONSIBILITY: Server component for Transport Documents Route

export const metadata: Metadata = {
  title: 'Vehicle Documents | Transport Manager',
  description: 'Track and manage registration, insurance, permits, and other vehicle documents.',
};

export default function TransportDocumentsPage() {
  return (
    <div className="w-full h-full min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)] p-6">
      <TransportDocumentsMain />
    </div>
  );
}
