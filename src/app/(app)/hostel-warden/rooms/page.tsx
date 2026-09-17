import React from 'react';
import RoomsMain from './rooms_components/RoomsMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rooms | Hostel Warden',
  description: 'Manage individual rooms, bed occupancy, status, and facilities.',
};

export default function RoomsPage() {
  return (
    <div className="w-full h-full min-h-[calc(100vh-64px)] bg-[var(--bg-page)] text-[var(--text-primary)] p-6">
      <RoomsMain />
    </div>
  );
}
