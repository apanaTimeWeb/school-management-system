import React from 'react';
import SettingsMain from './settings_components/SettingsMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Settings | Hostel Warden',
  description: 'Configure gate pass rules, notification preferences, and account security.',
};

export default function SettingsPage() {
  return (
    <div className="w-full h-full min-h-[calc(100vh-64px)] bg-[var(--bg-page)] text-[var(--text-primary)] p-6">
      <SettingsMain />
    </div>
  );
}
