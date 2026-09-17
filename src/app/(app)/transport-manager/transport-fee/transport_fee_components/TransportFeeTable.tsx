"use client";

import React from 'react';
import { Eye, MapPin, User, Receipt, AlertCircle, Calendar } from 'lucide-react';
import type { TransportFeeRecord } from '../transport_fee_types/transport_fee.types';
import { FEE_STATUS_COLORS } from '../transport_fee_constants/transport_fee.constants';

// RESPONSIBILITY: Renders the read-only operational transport fee data table

interface TransportFeeTableProps {
  records: TransportFeeRecord[];
  onView: (record: TransportFeeRecord) => void;
}

export default function TransportFeeTable({ records, onView }: TransportFeeTableProps) {
  
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amount);
  };

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-[rgba(250,204,21,0.05)] border-b border-[var(--border)]">
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider">Student Details</th>
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider">Route Info</th>
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider text-right">Net Payable</th>
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider text-right">Outstanding</th>
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider text-center">Status</th>
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {records.length > 0 ? (
            records.map((record) => {
              const statusConfig = FEE_STATUS_COLORS[record.status] || FEE_STATUS_COLORS.OVERDUE;
              const hasFine = record.fine > 0;

              return (
                <tr 
                  key={record.id} 
                  onClick={() => onView(record)}
                  className={`border-b border-[var(--border)] hover:bg-[rgba(250,204,21,0.05)] motion-safe:transition-colors cursor-pointer group ${record.status === 'OVERDUE' ? 'bg-[rgba(239,68,68,0.02)]' : ''}`}
                >
                  <td className="py-3 px-4">
                    <div className="flex flex-col gap-1.5">
                      <div className="text-sm font-bold text-[var(--text-primary)] flex items-center gap-1.5">
                        <User size={14} className="text-[var(--primary)]" /> {record.studentName}
                      </div>
                      <div className="text-[10px] text-[var(--text-secondary)] flex items-center gap-1.5 whitespace-nowrap">
                        <span className="font-semibold text-[var(--text-primary)]">{record.studentId}</span> • {record.classSection}
                      </div>
                    </div>
                  </td>
                  
                  <td className="py-3 px-4">
                    <div className="flex flex-col gap-1.5">
                       <div className="text-xs font-semibold text-[var(--text-primary)] flex items-center gap-1.5 whitespace-nowrap">
                        <span className="px-1.5 py-0.5 rounded border border-[var(--border)] bg-[var(--bg-input)] text-[10px]">{record.routeId}</span> {record.routeName}
                      </div>
                      <div className="text-[11px] text-[var(--text-secondary)] flex items-center gap-1.5 truncate max-w-[200px]" title={record.pickupPoint}>
                        <MapPin size={12} className="text-[var(--text-secondary)]"/> {record.pickupPoint}
                      </div>
                    </div>
                  </td>

                  <td className="py-3 px-4 text-right">
                    <div className="flex flex-col gap-0.5 items-end">
                       <span className="text-sm font-bold text-[var(--text-primary)]">{formatCurrency(record.netPayable)}</span>
                       {hasFine && (
                         <span className="text-[9px] text-red-500 font-bold bg-red-500/10 px-1 rounded flex items-center gap-0.5">
                            <AlertCircle size={8} /> Includes {formatCurrency(record.fine)} fine
                         </span>
                       )}
                    </div>
                  </td>

                  <td className="py-3 px-4 text-right">
                    <div className="flex flex-col gap-0.5 items-end">
                       <span className={`text-sm font-bold ${record.outstandingAmount > 0 ? 'text-red-500' : 'text-emerald-500'}`}>
                         {formatCurrency(record.outstandingAmount)}
                       </span>
                       {record.outstandingAmount > 0 && record.dueDate && (
                         <span className={`text-[9px] ${record.status === 'OVERDUE' ? 'text-red-500 font-bold' : 'text-[var(--text-secondary)]'} flex items-center gap-0.5`}>
                            <Calendar size={8} /> Due: {record.dueDate}
                         </span>
                       )}
                    </div>
                  </td>

                  <td className="py-3 px-4 text-center">
                    <div className="flex flex-col items-center gap-1">
                      <span 
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wide whitespace-nowrap"
                        style={{ backgroundColor: statusConfig.bg, color: statusConfig.text }}
                      >
                        {statusConfig.label}
                      </span>
                    </div>
                  </td>

                  <td className="py-3 px-4 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 motion-safe:transition-opacity">
                      <button 
                        onClick={(e) => { e.stopPropagation(); onView(record); }}
                        className="p-1.5 rounded-md hover:bg-[var(--bg-input)] text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors"
                        aria-label="View Detailed Receipt"
                        title="View Details"
                      >
                        <Eye size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={6} className="py-12 text-center">
                <div className="flex flex-col items-center justify-center text-[var(--text-secondary)]">
                  <span className="text-4xl mb-3 opacity-20">💳</span>
                  <p className="text-sm">No transport fee records found.</p>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
