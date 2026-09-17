"use client";

import React from 'react';
import { Edit, Trash2, User, Bus, MapPin, Calendar, SunMoon } from 'lucide-react';
import type { TransportAllocation } from '../transport_allocations_types/transport_allocations.types';
import { ALLOCATION_STATUS_COLORS, SHIFT_PREF_COLORS } from '../transport_allocations_constants/transport_allocations.constants';

// RESPONSIBILITY: Renders the student allocations data table

interface TransportAllocationsTableProps {
  allocations: TransportAllocation[];
  onView: (allocation: TransportAllocation) => void;
  onEdit: (allocation: TransportAllocation) => void;
  onDelete: (allocationId: string) => void;
}

export default function TransportAllocationsTable({ allocations, onView, onEdit, onDelete }: TransportAllocationsTableProps) {
  
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-[rgba(250,204,21,0.05)] border-b border-[var(--border)]">
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider w-56">Student Details</th>
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider">Route & Vehicle</th>
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider">Boarding Point</th>
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider">Shift</th>
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider">Period</th>
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider text-center">Status</th>
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {allocations.length > 0 ? (
            allocations.map((allocation) => {
              const statusConfig = ALLOCATION_STATUS_COLORS[allocation.status] || ALLOCATION_STATUS_COLORS.INACTIVE;
              const shiftConfig = SHIFT_PREF_COLORS[allocation.shiftPreference] || SHIFT_PREF_COLORS.BOTH;

              return (
                <tr 
                  key={allocation.id} 
                  onClick={() => onView(allocation)}
                  className="border-b border-[var(--border)] hover:bg-[rgba(250,204,21,0.05)] motion-safe:transition-colors cursor-pointer group"
                >
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-[rgba(59,130,246,0.1)] border border-[rgba(59,130,246,0.2)] flex items-center justify-center text-blue-500 font-bold text-xs uppercase flex-shrink-0">
                        {allocation.studentName.substring(0, 2)}
                      </div>
                      <div className="min-w-0 flex flex-col justify-center">
                        <div className="text-sm font-semibold text-[var(--text-primary)] truncate" title={allocation.studentName}>{allocation.studentName}</div>
                        <div className="text-[11px] text-[var(--text-secondary)] mt-0.5 truncate">{allocation.classSection} • {allocation.studentId}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="text-sm font-semibold text-[var(--text-primary)] truncate max-w-[150px]" title={allocation.routeName}>
                      {allocation.routeName}
                    </div>
                    <div className="text-[11px] text-[var(--text-secondary)] mt-0.5 flex items-center gap-1 font-medium">
                      <Bus size={12} className="text-[var(--primary)]"/> {allocation.vehicleNumber}
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex flex-col gap-1">
                      <div className="text-xs font-medium text-[var(--text-primary)] flex items-center gap-1.5 truncate max-w-[150px]" title={allocation.stopName}>
                        <MapPin size={12} className="text-[var(--text-secondary)] flex-shrink-0"/> {allocation.stopName}
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="text-xs font-semibold flex items-center gap-1.5 whitespace-nowrap" style={{ color: shiftConfig.text }}>
                      <SunMoon size={14} /> {shiftConfig.label}
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="text-xs font-medium text-[var(--text-primary)] flex items-center gap-1.5 whitespace-nowrap">
                      <Calendar size={12} className="text-[var(--text-secondary)]" /> {allocation.startDate}
                    </div>
                    <div className="text-[10px] text-[var(--text-secondary)] mt-0.5 ml-4">
                      to {allocation.endDate}
                    </div>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <span 
                      className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide whitespace-nowrap"
                      style={{ backgroundColor: statusConfig.bg, color: statusConfig.text }}
                    >
                      {statusConfig.label}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 motion-safe:transition-opacity">
                      <button 
                        onClick={(e) => { e.stopPropagation(); onEdit(allocation); }}
                        className="p-1.5 rounded-md hover:bg-[var(--bg-input)] text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors"
                        aria-label="Edit allocation"
                        title="Edit"
                      >
                        <Edit size={16} />
                      </button>
                      <button 
                        onClick={(e) => { e.stopPropagation(); onDelete(allocation.id); }}
                        className="p-1.5 rounded-md hover:bg-[var(--bg-input)] text-[var(--text-secondary)] hover:text-red-500 transition-colors"
                        aria-label="Delete allocation"
                        title="Delete"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={7} className="py-12 text-center">
                <div className="flex flex-col items-center justify-center text-[var(--text-secondary)]">
                  <span className="text-4xl mb-3 opacity-20">🚌</span>
                  <p className="text-sm">No student transport assignments found.</p>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
