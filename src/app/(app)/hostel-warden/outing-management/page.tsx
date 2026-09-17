import React from 'react';
import OutingManagementMain from './outing_components/OutingManagementMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Outing Management | Hostel Warden',
  description: 'Manage student movement, gate passes, and late returns.',
};

export default function OutingManagementPage() {
  return (
    <div className="w-full h-full min-h-[calc(100vh-64px)] bg-[var(--bg-page)] text-[var(--text-primary)] p-6">
      <OutingManagementMain />
    </div>
  );
}
