import React from 'react';
import MessDiningMain from './mess_components/MessDiningMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mess & Dining | Hostel Warden',
  description: 'Manage daily menus, meal scanning, diets, and food wastage tracking.',
};

export default function MessDiningPage() {
  return (
    <div className="w-full h-full min-h-[calc(100vh-64px)] bg-[var(--bg-page)] text-[var(--text-primary)] p-6">
      <MessDiningMain />
    </div>
  );
}
