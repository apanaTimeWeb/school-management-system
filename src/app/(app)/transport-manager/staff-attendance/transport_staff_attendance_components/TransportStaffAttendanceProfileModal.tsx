"use client";

import React, { useEffect } from 'react';
import { X, Briefcase, Clock, Phone, MapPin, FileText, AlertCircle, User } from 'lucide-react';
import type { TransportStaffAttendance } from '../transport_staff_attendance_types/transport_staff_attendance.types';
import { STAFF_ATTENDANCE_STATUS_COLORS, SHIFT_LABELS } from '../transport_staff_attendance_constants/transport_staff_attendance.constants';

// RESPONSIBILITY: Renders the read-only detailed view modal for a single staff attendance record

interface TransportStaffAttendanceProfileModalProps {
  record: TransportStaffAttendance | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function TransportStaffAttendanceProfileModal({ record, isOpen, onClose }: TransportStaffAttendanceProfileModalProps) {
  
  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen || !record) return null;

  const statusConfig = STAFF_ATTENDANCE_STATUS_COLORS[record.status] || STAFF_ATTENDANCE_STATUS_COLORS.ABSENT;

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm motion-safe:transition-opacity">
      <div 
        className="relative w-full max-w-2xl bg-[var(--bg-overlay)] border border-[var(--border)] rounded-xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-[var(--border)] bg-[var(--bg-card)]">
          <div className="flex items-center gap-4">
            <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center font-bold text-lg uppercase flex-shrink-0 ${
              record.role === 'DRIVER' 
                ? 'bg-[rgba(59,130,246,0.1)] border-blue-500/20 text-blue-500' 
                : 'bg-[rgba(245,158,11,0.1)] border-amber-500/20 text-amber-500'
            }`}>
              {record.staffName.substring(0, 2)}
            </div>
            <div>
              <h2 className="text-xl font-bold text-[var(--text-primary)]">{record.staffName}</h2>
              <div className="flex items-center gap-2 mt-1">
                <span className={`text-[10px] font-bold uppercase tracking-wider ${record.role === 'DRIVER' ? 'text-blue-500' : 'text-amber-500'}`}>
                  {record.role}
                </span>
                <span className="text-[var(--text-secondary)]">•</span>
                <p className="text-xs font-medium text-[var(--text-secondary)]">
                  {record.staffId}
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
              <span className="text-[10px] text-[var(--text-secondary)] uppercase font-semibold mb-1">Today's Status</span>
              <span 
                className="inline-flex items-center px-3 py-1 rounded text-sm font-bold tracking-wide w-max"
                style={{ backgroundColor: statusConfig.bg, color: statusConfig.text }}
              >
                {statusConfig.label}
              </span>
            </div>
            <div className="flex flex-col items-end text-right">
              <span className="text-[10px] text-[var(--text-secondary)] uppercase font-semibold mb-1">Assigned Shift</span>
              <span className="text-sm font-bold text-[var(--text-primary)] flex items-center gap-1.5">
                <Clock size={16} className="text-[var(--primary)]" /> {SHIFT_LABELS[record.shift]}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Contact & Assignment */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-[var(--text-primary)] flex items-center gap-2 border-b border-[var(--border)] pb-2">
                <Briefcase size={16} className="text-[var(--primary)]" /> Assignment & Contact
              </h3>
              
              <div className="flex flex-col gap-3 text-sm">
                <div>
                  <span className="text-[var(--text-secondary)] text-xs mb-0.5 block flex items-center gap-1"><Phone size={12}/> Contact Number</span>
                  <span className="font-medium text-[var(--text-primary)]">{record.contactNumber}</span>
                </div>
                <div>
                  <span className="text-[var(--text-secondary)] text-xs mb-0.5 block">Assigned Vehicle Today</span>
                  {record.assignedVehicle ? (
                    <span className="font-bold text-[var(--text-primary)] bg-[rgba(250,204,21,0.1)] text-[var(--primary)] px-2 py-0.5 rounded text-sm border border-[rgba(250,204,21,0.2)]">
                      {record.assignedVehicle}
                    </span>
                  ) : (
                    <span className="font-medium text-[var(--text-secondary)] italic">Not Assigned / Reserve</span>
                  )}
                </div>
              </div>
            </div>

            {/* Time Logs */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-[var(--text-primary)] flex items-center gap-2 border-b border-[var(--border)] pb-2">
                <Clock size={16} className="text-[var(--primary)]" /> Time Log
              </h3>
              
              <div className="grid grid-cols-2 gap-3 mt-2">
                <div className={`border p-3 rounded flex flex-col ${record.checkInTime ? 'bg-[rgba(16,185,129,0.05)] border-[rgba(16,185,129,0.1)]' : 'bg-[var(--bg-input)] border-[var(--border)]'}`}>
                  <span className="text-[10px] text-[var(--text-secondary)] mb-1 flex items-center gap-1 uppercase font-semibold">
                    <Clock size={10} className={record.checkInTime ? "text-emerald-500" : ""}/> Check-in
                  </span>
                  <span className={`font-bold ${record.checkInTime ? "text-[var(--text-primary)]" : "text-[var(--text-secondary)]"}`}>
                    {record.checkInTime || '--:--'}
                  </span>
                </div>
                <div className={`border p-3 rounded flex flex-col ${record.checkOutTime ? 'bg-[rgba(245,158,11,0.05)] border-[rgba(245,158,11,0.1)]' : 'bg-[var(--bg-input)] border-[var(--border)]'}`}>
                  <span className="text-[10px] text-[var(--text-secondary)] mb-1 flex items-center gap-1 uppercase font-semibold">
                    <Clock size={10} className={record.checkOutTime ? "text-amber-500" : ""}/> Check-out
                  </span>
                  <span className={`font-bold ${record.checkOutTime ? "text-[var(--text-primary)]" : "text-[var(--text-secondary)]"}`}>
                    {record.checkOutTime || '--:--'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Leave & Remarks Section */}
          <div className="mt-4 space-y-4 pt-4 border-t border-[var(--border)]">
             <h3 className="text-sm font-semibold text-[var(--text-primary)] flex items-center gap-2">
                <FileText size={16} className="text-[var(--primary)]" /> Notes & Leave Information
             </h3>
             
             {record.status === 'ON_LEAVE' && (
                <div className="flex items-start gap-2 p-3 rounded-lg bg-[rgba(245,158,11,0.05)] border border-[rgba(245,158,11,0.2)]">
                  <AlertCircle size={16} className="text-amber-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-[var(--text-secondary)] block mb-0.5 uppercase font-semibold">Leave Reason</span>
                    <p className="text-sm font-medium text-amber-500">{record.leaveReason || 'Reason not provided.'}</p>
                  </div>
                </div>
             )}

             {record.status === 'ABSENT' && !record.leaveReason && (
                <div className="flex items-start gap-2 p-3 rounded-lg bg-[rgba(239,68,68,0.05)] border border-[rgba(239,68,68,0.2)]">
                  <AlertCircle size={16} className="text-red-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm font-medium text-red-500">Staff marked as Absent (No Show). No leave application recorded.</p>
                </div>
             )}

             {record.remarks ? (
                <div className="bg-[var(--bg-input)] border border-[var(--border)] p-3 rounded-lg text-sm text-[var(--text-primary)] leading-relaxed">
                  <span className="text-[10px] text-[var(--text-secondary)] block mb-1 uppercase font-semibold">Admin Remarks</span>
                  {record.remarks}
                </div>
             ) : (
                <span className="text-[var(--text-secondary)] italic text-sm">No administrative remarks added for this record.</span>
             )}
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
