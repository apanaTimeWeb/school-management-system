"use client";

import React from 'react';
import { IndianRupee } from 'lucide-react';
import type { TransportFeeSummary as TransportFeeSummaryType } from '../transport_dashboard_types/transport_dashboard.types';
import { formatCurrency } from '@/lib/formatters'; // Assuming standard formatters

// RESPONSIBILITY: Renders the fee collection summary for transport

// Fallback formatter if not present in lib
const safeFormatCurrency = (val: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(val);
};

interface TransportFeeSummaryProps {
  data: TransportFeeSummaryType[];
}

export default function TransportFeeSummary({ data }: TransportFeeSummaryProps) {
  // Use the latest month for summary metrics
  const currentMonth = data[data.length - 1];
  const totalCollected = currentMonth?.collected || 0;
  const totalPending = currentMonth?.pending || 0;
  const totalExpected = currentMonth?.total || 0;
  
  const collectionPercentage = totalExpected > 0 ? (totalCollected / totalExpected) * 100 : 0;

  return (
    <div className="flex flex-col bg-[var(--bg-card)] rounded-xl border border-[var(--border)] overflow-hidden h-full">
      <div className="p-4 border-b border-[var(--border)] flex items-center justify-between">
        <h2 className="text-base font-semibold text-[var(--text-primary)] flex items-center gap-2">
          <IndianRupee size={18} className="text-[var(--primary)]" /> 
          Fee Collection ({currentMonth?.month || 'Current'})
        </h2>
      </div>
      
      <div className="p-5 flex flex-col gap-6">
        <div className="flex justify-between items-end">
          <div>
            <p className="text-xs font-medium text-[var(--text-secondary)] uppercase tracking-wider mb-1">Total Collected</p>
            <p className="text-3xl font-bold text-[var(--text-primary)]">{safeFormatCurrency(totalCollected)}</p>
          </div>
          <div className="text-right">
            <p className="text-xs font-medium text-[var(--text-secondary)] uppercase tracking-wider mb-1">Pending</p>
            <p className="text-lg font-semibold text-amber-500">{safeFormatCurrency(totalPending)}</p>
          </div>
        </div>

        <div>
          <div className="flex justify-between text-xs font-medium mb-2">
            <span className="text-[var(--text-secondary)]">Collection Target</span>
            <span className="text-[var(--text-primary)]">{collectionPercentage.toFixed(1)}%</span>
          </div>
          <div className="w-full bg-[var(--bg-page)] rounded-full h-2.5 overflow-hidden border border-[var(--border)]">
            <div 
              className="bg-[var(--primary)] h-2.5 rounded-full" 
              style={{ width: `${collectionPercentage}%` }}
            ></div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mt-2">
          <button className="flex items-center justify-center gap-2 py-2 px-4 rounded-md border border-[var(--border)] bg-[var(--bg-page)] hover:bg-[var(--bg-input)] text-sm font-medium text-[var(--text-primary)] motion-safe:transition-colors">
            View Defaulters
          </button>
          <button className="flex items-center justify-center gap-2 py-2 px-4 rounded-md bg-[var(--primary)] text-white text-sm font-medium hover:bg-[var(--primary-hover)] motion-safe:transition-colors">
            Send Reminders
          </button>
        </div>
      </div>
    </div>
  );
}
