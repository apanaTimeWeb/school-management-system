import React from 'react';
import BedsMain from './beds_components/BedsMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Beds | Hostel Warden',
  description: 'Physical bed-level tracking, student assignments, and condition monitoring.',
};

export default function BedsPage() {
  return (
    <div className="w-full h-full min-h-[calc(100vh-64px)] bg-[var(--bg-page)] text-[var(--text-primary)] p-6">
      <BedsMain />
    </div>
  );
}
