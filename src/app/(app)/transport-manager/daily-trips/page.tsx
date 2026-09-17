import React from 'react';
import TransportDailyTripsMain from './transport_daily_trips_components/TransportDailyTripsMain';
import { Metadata } from 'next';

// RESPONSIBILITY: Server component for Daily Trips Route

export const metadata: Metadata = {
  title: 'Daily Trips | Transport Manager',
  description: 'Manage and monitor daily live transport trips for school vehicles.',
};

export default function TransportDailyTripsPage() {
  return (
    <div className="w-full h-full min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)] p-6">
      <TransportDailyTripsMain />
    </div>
  );
}
