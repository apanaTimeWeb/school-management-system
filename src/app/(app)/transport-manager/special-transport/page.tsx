import React from 'react';
import SpecialTransportMain from './special_transport_components/SpecialTransportMain';
import { Metadata } from 'next';

// RESPONSIBILITY: Server component for Special Transport Route

export const metadata: Metadata = {
  title: 'Special & Event Transport | Transport Manager',
  description: 'Manage logistics for school picnics, sports events, exam centers, and field trips.',
};

export default function SpecialTransportPage() {
  return (
    <div className="w-full h-full min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)] p-6">
      <SpecialTransportMain />
    </div>
  );
}
