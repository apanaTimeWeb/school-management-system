import React from 'react';
import TransportDocumentsMain from './transport_documents_components/TransportDocumentsMain';
import { Metadata } from 'next';

// RESPONSIBILITY: Server component for Transport Documents Vault Route

export const metadata: Metadata = {
  title: 'Document Vault | Transport Manager',
  description: 'Securely manage and track expiry dates for vehicle insurance, permits, fitness certificates, and driver licenses.',
};

export default function TransportDocumentsPage() {
  return (
    <div className="w-full h-full min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)] p-6">
      <TransportDocumentsMain />
    </div>
  );
}
