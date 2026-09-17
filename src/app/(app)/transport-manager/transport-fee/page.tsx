import React from 'react';
import TransportFeeMain from './transport_fee_components/TransportFeeMain';
import { Metadata } from 'next';

// RESPONSIBILITY: Server component for Transport Fee Route (Operational View)

export const metadata: Metadata = {
  title: 'Transport Fee | Transport Manager',
  description: 'View student transport fee payments, outstanding balances, and route revenue.',
};

export default function TransportFeePage() {
  return (
    <div className="w-full h-full min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)] p-6">
      <TransportFeeMain />
    </div>
  );
}
