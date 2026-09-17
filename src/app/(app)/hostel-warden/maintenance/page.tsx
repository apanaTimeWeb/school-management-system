import React from 'react';
import MaintenanceMain from './maintenance_components/MaintenanceMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maintenance & Repairs | Hostel Warden',
  description: 'Log complaints, assign staff, and track resolution status.',
};

export default function MaintenancePage() {
  return (
    <div className="w-full h-full min-h-[calc(100vh-64px)] bg-[var(--bg-page)] text-[var(--text-primary)] p-6">
      <MaintenanceMain />
    </div>
  );
}
