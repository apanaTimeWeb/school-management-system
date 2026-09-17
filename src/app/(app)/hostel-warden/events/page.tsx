import React from 'react';
import EventsMain from './events_components/EventsMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Events & Activities | Hostel Warden',
  description: 'Track hostel events, participant numbers, and budget utilization.',
};

export default function EventsPage() {
  return (
    <div className="w-full h-full min-h-[calc(100vh-64px)] bg-[var(--bg-page)] text-[var(--text-primary)] p-6">
      <EventsMain />
    </div>
  );
}
