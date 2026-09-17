import React from 'react';
import AuditHistoryMain from './audit_history_components/AuditHistoryMain';
import { Metadata } from 'next';

// RESPONSIBILITY: Server component for Audit & History Route

export const metadata: Metadata = {
  title: 'Audit & History | Transport Manager',
  description: 'Immutable ledger of all critical actions, assignments, adjustments, and state changes within the transport module.',
};

export default function AuditHistoryPage() {
  return (
    <div className="w-full h-full min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)] p-6 flex flex-col">
      <AuditHistoryMain />
    </div>
  );
}
