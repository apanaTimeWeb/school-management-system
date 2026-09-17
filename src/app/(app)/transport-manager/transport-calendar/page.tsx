import React from 'react';
import TransportCalendarMain from './transport_calendar_components/TransportCalendarMain';
import { Metadata } from 'next';

// RESPONSIBILITY: Server component for Transport Calendar Route

export const metadata: Metadata = {
  title: 'Transport Calendar | Transport Manager',
  description: 'Manage transport holidays, no-transport days, special excursion trips, exam schedules, and route diversions.',
};

export default function TransportCalendarPage() {
  return (
    <div className="w-full h-full min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)] p-6">
      <TransportCalendarMain />
    </div>
  );
}
