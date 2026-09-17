"use client";

import React, { useEffect } from 'react';
import { X, User, MapPin, Clock, Bell, ShieldCheck, AlertCircle, FileText, CheckCircle2 } from 'lucide-react';
import type { TransportAttendance } from '../transport_attendance_types/transport_attendance.types';
import { ATTENDANCE_STATUS_COLORS } from '../transport_attendance_constants/transport_attendance.constants';

// RESPONSIBILITY: Renders the read-only detailed view modal for a single student's attendance log

interface TransportAttendanceProfileModalProps {
  record: TransportAttendance | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function TransportAttendanceProfileModal({ record, isOpen, onClose }: TransportAttendanceProfileModalProps) {
  
  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen || !record) return null;

  const statusConfig = ATTENDANCE_STATUS_COLORS[record.status] || ATTENDANCE_STATUS_COLORS.NOT_BOARDED;

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm motion-safe:transition-opacity">
      <div 
        className="relative w-full max-w-2xl bg-[var(--bg-overlay)] border border-[var(--border)] rounded-xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-[var(--border)] bg-[var(--bg-card)]">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[rgba(59,130,246,0.1)] border border-[rgba(59,130,246,0.2)] flex items-center justify-center text-blue-500 font-bold text-lg uppercase flex-shrink-0">
              {record.studentName.substring(0, 2)}
            </div>
            <div>
              <h2 className="text-xl font-bold text-[var(--text-primary)]">{record.studentName}</h2>
              <div className="flex items-center gap-2 mt-1">
                <p className="text-xs font-medium text-[var(--text-secondary)]">
                  {record.classSection} • {record.studentId}
                </p>
                <span className="text-[var(--text-secondary)]">•</span>
                <span className="text-xs font-bold text-[var(--primary)] tracking-wide">
                  {record.date}
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
          
          {/* Top Status Banner */}
          <div className="flex items-center justify-between bg-[var(--bg-input)] border border-[var(--border)] p-4 rounded-lg">
            <div className="flex flex-col">
              <span className="text-[10px] text-[var(--text-secondary)] uppercase font-semibold mb-1">Boarding Status</span>
              <span 
                className="inline-flex items-center px-3 py-1 rounded text-sm font-bold tracking-wide"
                style={{ backgroundColor: statusConfig.bg, color: statusConfig.text }}
              >
                {statusConfig.label}
              </span>
            </div>
            <div className="flex flex-col items-end text-right">
              <span className="text-[10px] text-[var(--text-secondary)] uppercase font-semibold mb-1">Parent Notification</span>
              {record.notificationSent ? (
                <span className="text-sm font-bold text-emerald-500 flex items-center gap-1.5">
                  <CheckCircle2 size={16} /> Delivered
                </span>
              ) : (
                <span className="text-sm font-bold text-[var(--text-secondary)] flex items-center gap-1.5 opacity-70">
                  <Bell size={16} /> Not Sent
                </span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Route & Timings */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-[var(--text-primary)] flex items-center gap-2 border-b border-[var(--border)] pb-2">
                <MapPin size={16} className="text-[var(--primary)]" /> Stop & Timings
              </h3>
              
              <div className="flex flex-col gap-3 text-sm">
                <div>
                  <span className="text-[var(--text-secondary)] text-xs mb-0.5 block">Route</span>
                  <span className="font-medium text-[var(--text-primary)]">{record.routeName} <span className="text-[10px] opacity-70">({record.tripId})</span></span>
                </div>
                <div>
                  <span className="text-[var(--text-secondary)] text-xs mb-0.5 block">Boarding Stop</span>
                  <span className="font-bold text-[var(--text-primary)]">{record.stopName}</span>
                </div>
                
                <div className="grid grid-cols-2 gap-2 mt-2">
                  <div className="bg-[rgba(16,185,129,0.05)] border border-[rgba(16,185,129,0.1)] p-2 rounded flex flex-col">
                    <span className="text-[10px] text-[var(--text-secondary)] mb-1 flex items-center gap-1">
                      <Clock size={10} className="text-emerald-500"/> Board Time
                    </span>
                    <span className="font-semibold text-[var(--text-primary)]">{record.boardTime || '--:--'}</span>
                  </div>
                  <div className="bg-[rgba(245,158,11,0.05)] border border-[rgba(245,158,11,0.1)] p-2 rounded flex flex-col">
                    <span className="text-[10px] text-[var(--text-secondary)] mb-1 flex items-center gap-1">
                      <Clock size={10} className="text-amber-500"/> Drop Time
                    </span>
                    <span className="font-semibold text-[var(--text-primary)]">{record.dropTime || '--:--'}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Handover & Remarks */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-[var(--text-primary)] flex items-center gap-2 border-b border-[var(--border)] pb-2">
                <ShieldCheck size={16} className="text-[var(--primary)]" /> Handover Details
              </h3>
              
              <div className="flex flex-col gap-3 text-sm">
                <div>
                  <span className="text-[var(--text-secondary)] text-xs mb-0.5 block">Authorized Pickup By</span>
                  <span className="font-medium text-[var(--text-primary)]">
                    {record.authorizedPickupBy || <span className="text-[var(--text-secondary)] italic">Not specified</span>}
                  </span>
                </div>

                <div className="mt-2">
                  <span className="text-[var(--text-secondary)] text-xs mb-1 flex items-center gap-1.5">
                    <FileText size={12} /> Notes & Remarks
                  </span>
                  {record.remarks ? (
                    <div className="bg-[var(--bg-input)] border border-[var(--border)] p-3 rounded text-sm text-[var(--text-primary)] leading-relaxed">
                      {record.remarks}
                    </div>
                  ) : (
                    <span className="text-[var(--text-secondary)] italic text-xs">No additional remarks.</span>
                  )}
                </div>
                
                {record.status === 'MISSED_BUS' && (
                  <div className="flex items-start gap-2 p-2.5 mt-2 rounded-lg bg-[rgba(239,68,68,0.05)] border border-[rgba(239,68,68,0.2)]">
                    <AlertCircle size={14} className="text-red-500 flex-shrink-0 mt-0.5" />
                    <p className="text-[11px] font-medium text-red-500 leading-tight">Student marked as missed bus. Follow up may be required if parent didn't pre-inform.</p>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>

        {/* Footer Actions */}
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
