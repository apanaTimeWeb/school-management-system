import React from 'react';
import TransportSafetyMain from './transport_safety_components/TransportSafetyMain';
import { Metadata } from 'next';

// RESPONSIBILITY: Server component for Transport Safety & Emergency Route

export const metadata: Metadata = {
  title: 'Safety & Emergency | Transport Manager',
  description: 'Manage breakdowns, accidents, and medical emergencies with a secure audit trail for the school transport fleet.',
};

export default function TransportSafetyPage() {
  return (
    <div className="w-full h-full min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)] p-6">
      <TransportSafetyMain />
    </div>
  );
}
