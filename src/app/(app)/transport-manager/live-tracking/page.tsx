import React from 'react';
import TransportLiveTrackingMain from './transport_live_tracking_components/TransportLiveTrackingMain';
import { Metadata } from 'next';

// RESPONSIBILITY: Server component for Live GPS Tracking Route

export const metadata: Metadata = {
  title: 'Live Tracking | Transport Manager',
  description: 'Monitor real-time GPS telemetry, geo-fencing, and live route status for all active vehicles.',
};

export default function TransportLiveTrackingPage() {
  return (
    <div className="w-full h-full min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)] p-6">
      <TransportLiveTrackingMain />
    </div>
  );
}
