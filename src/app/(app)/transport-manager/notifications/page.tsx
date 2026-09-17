import React from 'react';
import TransportNotificationsMain from './transport_notifications_components/TransportNotificationsMain';
import { Metadata } from 'next';

// RESPONSIBILITY: Server component for Transport Notifications Route

export const metadata: Metadata = {
  title: 'Notifications | Transport Manager',
  description: 'Manage automatic system alerts and send custom broadcasts to parents and staff regarding the transport fleet.',
};

export default function TransportNotificationsPage() {
  return (
    <div className="w-full h-full min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)] p-6">
      <TransportNotificationsMain />
    </div>
  );
}
