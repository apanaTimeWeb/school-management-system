"use client";

import React, { useEffect } from 'react';
import { X, User, Phone, MapPin, Bus, Calendar, Route as RouteIcon, Info, Map } from 'lucide-react';
import type { TransportAllocation } from '../transport_allocations_types/transport_allocations.types';
import { ALLOCATION_STATUS_COLORS, SHIFT_PREF_COLORS } from '../transport_allocations_constants/transport_allocations.constants';

// RESPONSIBILITY: Renders the read-only profile view modal for a single student's allocation

interface TransportAllocationsProfileModalProps {
  allocation: TransportAllocation | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function TransportAllocationsProfileModal({ allocation, isOpen, onClose }: TransportAllocationsProfileModalProps) {
  
  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen || !allocation) return null;

  const statusConfig = ALLOCATION_STATUS_COLORS[allocation.status] || ALLOCATION_STATUS_COLORS.INACTIVE;
  const shiftConfig = SHIFT_PREF_COLORS[allocation.shiftPreference] || SHIFT_PREF_COLORS.BOTH;

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm motion-safe:transition-opacity">
      <div 
        className="relative w-full max-w-2xl bg-[var(--bg-overlay)] border border-[var(--border)] rounded-xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-[var(--border)] bg-[var(--bg-card)]">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-[rgba(59,130,246,0.1)] border border-[rgba(59,130,246,0.2)] flex items-center justify-center text-blue-500 font-bold text-xl uppercase flex-shrink-0">
              {allocation.studentName.substring(0, 2)}
            </div>
            <div>
              <h2 className="text-xl font-bold text-[var(--text-primary)]">{allocation.studentName}</h2>
              <div className="flex items-center gap-2 mt-1">
                <p className="text-xs font-medium text-[var(--text-secondary)] bg-[var(--bg-input)] px-2 py-0.5 rounded border border-[var(--border)]">
                  {allocation.studentId}
                </p>
                <p className="text-xs font-bold text-[var(--primary)] px-1">
                  {allocation.classSection}
                </p>
                <span 
                  className="px-2 py-0.5 text-[10px] font-bold rounded uppercase tracking-wider ml-1"
                  style={{ backgroundColor: statusConfig.bg, color: statusConfig.text }}
                >
                  {statusConfig.label}
                </span>
              </div>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-input)] rounded-md transition-colors self-start"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Contact Details */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-[var(--text-primary)] flex items-center gap-2 border-b border-[var(--border)] pb-2">
                <User size={16} className="text-[var(--primary)]" /> Guardian Details
              </h3>
              
              <div className="flex flex-col gap-3 text-sm">
                <div>
                  <span className="text-[var(--text-secondary)] text-xs mb-0.5 block">Guardian Name</span>
                  <span className="font-medium text-[var(--text-primary)]">
                    {allocation.guardianName}
                  </span>
                </div>
                <div>
                  <span className="text-[var(--text-secondary)] text-xs mb-0.5 block flex items-center gap-1">
                    <Phone size={12} className="text-amber-500" /> Contact Number
                  </span>
                  <span className="font-medium text-[var(--text-primary)]">{allocation.guardianContact}</span>
                </div>
              </div>
            </div>

            {/* Transport Contract */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-[var(--text-primary)] flex items-center gap-2 border-b border-[var(--border)] pb-2">
                <Calendar size={16} className="text-[var(--primary)]" /> Transport Contract
              </h3>
              
              <div className="flex flex-col gap-3 text-sm">
                <div>
                  <span className="text-[var(--text-secondary)] text-xs mb-0.5 block">Validity Period</span>
                  <span className="font-medium text-[var(--text-primary)] flex items-center gap-1.5">
                    {allocation.startDate} <span className="text-[var(--text-secondary)] text-xs mx-1">to</span> {allocation.endDate}
                  </span>
                </div>
                <div>
                  <span className="text-[var(--text-secondary)] text-xs mb-0.5 block">Shift Priority</span>
                  <span className="font-medium flex items-center gap-1" style={{ color: shiftConfig.text }}>
                    {shiftConfig.label}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Assignments */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-[var(--text-primary)] flex items-center gap-2 border-b border-[var(--border)] pb-2">
              <Map size={16} className="text-[var(--primary)]" /> Routing Details
            </h3>
            
            <div className="flex flex-col gap-4 bg-[rgba(250,204,21,0.05)] p-4 rounded-lg border border-[var(--border)]">
              
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 border-b border-[var(--border)] pb-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[var(--bg-page)] border border-[var(--border)] flex items-center justify-center text-[var(--primary)] flex-shrink-0">
                    <Bus size={14} />
                  </div>
                  <div>
                    <p className="text-xs text-[var(--text-secondary)]">Assigned Vehicle</p>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">{allocation.vehicleNumber}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[var(--bg-page)] border border-[var(--border)] flex items-center justify-center text-[var(--primary)] flex-shrink-0">
                    <RouteIcon size={14} />
                  </div>
                  <div>
                    <p className="text-xs text-[var(--text-secondary)]">Assigned Route</p>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">{allocation.routeName}</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-semibold text-[var(--text-secondary)] mb-1 uppercase tracking-wider flex items-center gap-1"><MapPin size={12} className="text-emerald-500" /> Exact Pickup Point</p>
                  <p className="text-sm font-medium text-[var(--text-primary)]">{allocation.pickupPoint}</p>
                  <p className="text-[10px] text-[var(--text-secondary)] mt-0.5">Linked Stop: {allocation.stopName}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-[var(--text-secondary)] mb-1 uppercase tracking-wider flex items-center gap-1"><MapPin size={12} className="text-amber-500" /> Exact Drop Point</p>
                  <p className="text-sm font-medium text-[var(--text-primary)]">{allocation.dropPoint}</p>
                  <p className="text-[10px] text-[var(--text-secondary)] mt-0.5">Linked Stop: {allocation.stopName}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Fee & Invoicing Notice (mock) */}
          <div className="flex items-center gap-3 p-4 rounded-lg bg-[rgba(59,130,246,0.05)] border border-[rgba(59,130,246,0.2)]">
            <Info size={20} className="text-blue-500 flex-shrink-0" />
            <p className="text-xs text-[var(--text-secondary)]">
              Transport fees for this assignment are automatically added to the student's primary ledger according to the route's distance slabs. Any modifications here will reflect in the next invoice cycle.
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 border-t border-[var(--border)] bg-[var(--bg-page)] flex justify-end">
          <button 
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium rounded-md border border-[var(--border)] text-[var(--text-primary)] hover:bg-[var(--bg-input)] transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
