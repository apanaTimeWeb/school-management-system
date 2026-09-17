import React from 'react';
import TransportCommunicationMain from './transport_communication_components/TransportCommunicationMain';
import { Metadata } from 'next';

// RESPONSIBILITY: Server component for Transport Communication Hub Route

export const metadata: Metadata = {
  title: 'Communication Hub | Transport Manager',
  description: 'Broadcast notices, parent updates, route announcements, and emergency alerts across multiple channels.',
};

export default function TransportCommunicationPage() {
  return (
    <div className="w-full h-full min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)] p-6">
      <TransportCommunicationMain />
    </div>
  );
}
