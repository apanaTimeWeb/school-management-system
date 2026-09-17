"use client";

import React from 'react';
import { Edit, Wrench, Bus, Calendar, DollarSign, Settings } from 'lucide-react';
import type { TransportMaintenance } from '../transport_maintenance_types/transport_maintenance.types';
import { MAINTENANCE_STATUS_COLORS, MAINTENANCE_TYPE_COLORS } from '../transport_maintenance_constants/transport_maintenance.constants';

// RESPONSIBILITY: Renders the maintenance records data table

interface TransportMaintenanceTableProps {
  records: TransportMaintenance[];
  onView: (record: TransportMaintenance) => void;
  onEdit: (record: TransportMaintenance) => void;
}

export default function TransportMaintenanceTable({ records, onView, onEdit }: TransportMaintenanceTableProps) {
  
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amount);
  };

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-[rgba(250,204,21,0.05)] border-b border-[var(--border)]">
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider">Vehicle Details</th>
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider">Service Type</th>
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider">Dates</th>
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider text-right">Cost</th>
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider text-center">Status</th>
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {records.length > 0 ? (
            records.map((record) => {
              const statusConfig = MAINTENANCE_STATUS_COLORS[record.status] || MAINTENANCE_STATUS_COLORS.SCHEDULED;
              const typeConfig = MAINTENANCE_TYPE_COLORS[record.type] || MAINTENANCE_TYPE_COLORS.INSPECTION;

              return (
                <tr 
                  key={record.id} 
                  onClick={() => onView(record)}
                  className="border-b border-[var(--border)] hover:bg-[rgba(250,204,21,0.05)] motion-safe:transition-colors cursor-pointer group"
                >
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[rgba(250,204,21,0.1)] border border-[rgba(250,204,21,0.2)] flex items-center justify-center text-[var(--primary)] flex-shrink-0">
                        <Bus size={14} />
                      </div>
                      <div className="flex flex-col justify-center min-w-0">
                        <div className="text-sm font-bold text-[var(--text-primary)] truncate">{record.vehicleNumber}</div>
                        <div className="text-[10px] text-[var(--text-secondary)] mt-0.5 truncate max-w-[150px]" title={record.workshopName}>
                          {record.workshopName}
                        </div>
                      </div>
                    </div>
                  </td>
                  
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-1.5">
                       <span 
                        className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border"
                        style={{ backgroundColor: typeConfig.bg, color: typeConfig.text, borderColor: typeConfig.text + '30' }}
                      >
                        {typeConfig.label}
                      </span>
                    </div>
                    {record.partsReplaced && (
                      <div className="text-[10px] text-[var(--text-secondary)] mt-1 truncate max-w-[150px] flex items-center gap-1" title={record.partsReplaced}>
                        <Settings size={10} /> {record.partsReplaced}
                      </div>
                    )}
                  </td>

                  <td className="py-3 px-4">
                    <div className="flex flex-col gap-1.5">
                      <div className="text-xs text-[var(--text-primary)] flex items-center gap-1.5 whitespace-nowrap">
                        <span className="text-[10px] text-[var(--text-secondary)] w-10 inline-block text-right">Date:</span>
                        <Calendar size={12} className="text-blue-500"/> {record.serviceDate}
                      </div>
                      <div className="text-xs text-[var(--text-primary)] flex items-center gap-1.5 whitespace-nowrap">
                        <span className="text-[10px] text-[var(--text-secondary)] w-10 inline-block text-right">Next:</span>
                        <Calendar size={12} className="text-emerald-500"/> {record.nextServiceDate || '--'}
                      </div>
                    </div>
                  </td>

                  <td className="py-3 px-4 text-right">
                    <div className="flex flex-col gap-0.5 items-end">
                      <span className="text-sm font-bold text-[var(--text-primary)]">{formatCurrency(record.totalCost)}</span>
                      {record.totalCost > 0 && (
                        <span className="text-[9px] text-[var(--text-secondary)]">P: {formatCurrency(record.partsCost)} | L: {formatCurrency(record.labourCost)}</span>
                      )}
                    </div>
                  </td>

                  <td className="py-3 px-4 text-center">
                    <span 
                      className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wide whitespace-nowrap"
                      style={{ backgroundColor: statusConfig.bg, color: statusConfig.text }}
                    >
                      {statusConfig.label}
                    </span>
                  </td>

                  <td className="py-3 px-4 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 motion-safe:transition-opacity">
                      <button 
                        onClick={(e) => { e.stopPropagation(); onEdit(record); }}
                        className="p-1.5 rounded-md hover:bg-[var(--bg-input)] text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors"
                        aria-label="Edit record"
                        title="Edit Record"
                      >
                        <Edit size={16} />
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
                  <span className="text-4xl mb-3 opacity-20">🔧</span>
                  <p className="text-sm">No maintenance records found for this criteria.</p>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
