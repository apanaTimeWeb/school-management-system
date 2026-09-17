import React from 'react';
import TransportParentViewMain from './transport_parent_view_components/TransportParentViewMain';
import { Metadata } from 'next';

// RESPONSIBILITY: Server component for Parent Transport View Route

export const metadata: Metadata = {
  title: 'Transport Portal | Parent View',
  description: 'Track your child\'s school bus in real-time, view schedules, and receive alerts.',
};

export default function TransportParentViewPage() {
  return (
    <div className="w-full h-full min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)] p-6">
      <TransportParentViewMain />
    </div>
  );
}
