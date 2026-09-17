import React from 'react';
import BuildingsMain from './buildings_components/BuildingsMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Buildings & Floors | Hostel Warden',
  description: 'Manage physical infrastructure, floor capacities, and maintenance status.',
};

export default function BuildingsFloorsPage() {
  return (
    <div className="w-full h-full min-h-[calc(100vh-64px)] bg-[var(--bg-page)] text-[var(--text-primary)] p-6">
      <BuildingsMain />
    </div>
  );
}
