"use client";

import React from 'react';
import type { StudentFeesData } from '../student_fees_types/student_fees_types';
import { formatINR } from '../student_fees_utils/student_fees_utils';
import { Wallet, CheckCircle, AlertTriangle, Calendar } from 'lucide-react';
import clsx from 'clsx';

interface Props {
  data: StudentFeesData;
}

export default function StudentFeesSummaryBlocks({ data }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      
      {/* Total Fee */}
      <div className="bg-card border border-border rounded-xl p-5 flex items-center gap-4 shadow-sm hover:-translate-y-1 transition-transform">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
          <Wallet size={24} className="text-primary" />
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-bold text-text-secondary uppercase">Total Fee</span>
          <span className="text-xl font-bold text-text-primary">{formatINR(data.totalFee)}</span>
        </div>
      </div>

      {/* Total Paid */}
      <div className="bg-card border border-border rounded-xl p-5 flex items-center gap-4 shadow-sm hover:-translate-y-1 transition-transform">
        <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center shrink-0">
          <CheckCircle size={24} className="text-success" />
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-bold text-text-secondary uppercase">Total Paid</span>
          <span className="text-xl font-bold text-success">{formatINR(data.totalPaid)}</span>
        </div>
      </div>

      {/* Total Pending */}
      <div className="bg-card border border-border rounded-xl p-5 flex items-center gap-4 shadow-sm hover:-translate-y-1 transition-transform">
        <div className="w-12 h-12 rounded-full bg-danger/10 flex items-center justify-center shrink-0">
          <AlertTriangle size={24} className="text-danger" />
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-bold text-text-secondary uppercase">Total Pending</span>
          <span className="text-xl font-bold text-danger">{formatINR(data.totalPending)}</span>
        </div>
      </div>

      {/* Next Due Date */}
      <div className="bg-card border border-border rounded-xl p-5 flex items-center gap-4 shadow-sm hover:-translate-y-1 transition-transform">
        <div className="w-12 h-12 rounded-full bg-info/10 flex items-center justify-center shrink-0">
          <Calendar size={24} className="text-info" />
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-bold text-text-secondary uppercase">Next Due Date</span>
          <span className="text-base font-bold text-text-primary">{data.nextDueDate || 'No Dues'}</span>
        </div>
      </div>

    </div>
  );
}
