"use client";

import React, { useEffect } from 'react';
import { X, User, Phone, Map, ShieldAlert, Bus, Briefcase, Calendar, Info, HeartPulse, Clock, UserCheck } from 'lucide-react';
import type { TransportConductor } from '../transport_conductors_types/transport_conductors.types';
import { CONDUCTOR_STATUS_COLORS, ATTENDANCE_COLORS } from '../transport_conductors_constants/transport_conductors.constants';

// RESPONSIBILITY: Renders the read-only profile view modal for a single conductor

interface TransportConductorsProfileModalProps {
  conductor: TransportConductor | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function TransportConductorsProfileModal({ conductor, isOpen, onClose }: TransportConductorsProfileModalProps) {
  
  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen || !conductor) return null;

  const statusConfig = CONDUCTOR_STATUS_COLORS[conductor.status] || CONDUCTOR_STATUS_COLORS.INACTIVE;

  const renderAttendanceBadge = () => {
    if (!conductor.todaysAttendance) return <span className="text-sm font-medium text-[var(--text-secondary)] italic">Not Marked</span>;
    const config = ATTENDANCE_COLORS[conductor.todaysAttendance];
    return (
      <span className="flex items-center gap-1.5 text-sm font-semibold" style={{ color: config.text }}>
        <UserCheck size={16} className={config.iconColor} /> {config.label}
      </span>
    );
  };

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm motion-safe:transition-opacity">
      <div 
        className="relative w-full max-w-2xl bg-[var(--bg-overlay)] border border-[var(--border)] rounded-xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-[var(--border)] bg-[var(--bg-card)]">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-[rgba(59,130,246,0.1)] border border-[rgba(59,130,246,0.2)] flex items-center justify-center text-blue-500 font-bold text-xl uppercase">
              {conductor.name.substring(0, 2)}
            </div>
            <div>
              <h2 className="text-xl font-bold text-[var(--text-primary)]">{conductor.name}</h2>
              <div className="flex items-center gap-2 mt-1">
                <p className="text-xs font-medium text-[var(--text-secondary)] bg-[var(--bg-input)] px-2 py-0.5 rounded border border-[var(--border)]">
                  {conductor.employeeId}
                </p>
                <span 
                  className="px-2 py-0.5 text-[10px] font-bold rounded uppercase tracking-wider"
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
                <Phone size={16} className="text-[var(--primary)]" /> Contact Details
              </h3>
              
              <div className="flex flex-col gap-3 text-sm">
                <div>
                  <span className="text-[var(--text-secondary)] text-xs mb-0.5 block">Mobile Number</span>
                  <span className="font-medium text-[var(--text-primary)] flex items-center gap-1.5">
                    {conductor.contact}
                  </span>
                </div>
                <div>
                  <span className="text-[var(--text-secondary)] text-xs mb-0.5 block flex items-center gap-1">
                    <HeartPulse size={12} className="text-red-500" /> Emergency Contact
                  </span>
                  <span className="font-medium text-[var(--text-primary)]">{conductor.emergencyContact}</span>
                </div>
              </div>
            </div>

            {/* Shift & Attendance */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-[var(--text-primary)] flex items-center gap-2 border-b border-[var(--border)] pb-2">
                <Clock size={16} className="text-[var(--primary)]" /> Duty & Attendance
              </h3>
              
              <div className="flex flex-col gap-3 text-sm">
                <div>
                  <span className="text-[var(--text-secondary)] text-xs mb-0.5 block">Duty Shift</span>
                  <span className="font-medium text-[var(--text-primary)] flex items-center gap-1.5">
                    {conductor.shift} SHIFT
                  </span>
                </div>
                <div>
                  <span className="text-[var(--text-secondary)] text-xs mb-0.5 block">Today's Attendance</span>
                  {renderAttendanceBadge()}
                </div>
              </div>
            </div>
          </div>

          {/* Assignments */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-[var(--text-primary)] flex items-center gap-2 border-b border-[var(--border)] pb-2">
              <Map size={16} className="text-[var(--primary)]" /> Current Assignments
            </h3>
            
            {conductor.assignedVehicleNumber ? (
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 bg-[rgba(250,204,21,0.05)] p-4 rounded-lg border border-[var(--border)]">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[var(--bg-page)] border border-[var(--border)] flex items-center justify-center text-[var(--primary)]">
                    <Bus size={14} />
                  </div>
                  <div>
                    <p className="text-xs text-[var(--text-secondary)]">Assigned Vehicle</p>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">{conductor.assignedVehicleNumber}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[var(--bg-page)] border border-[var(--border)] flex items-center justify-center text-[var(--primary)]">
                    <Map size={14} />
                  </div>
                  <div>
                    <p className="text-xs text-[var(--text-secondary)]">Assigned Route</p>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">{conductor.assignedRouteName || 'No route assigned'}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)] p-4 rounded-lg bg-[var(--bg-input)] border border-[var(--border)]">
                <Info size={16} /> Staff is not currently assigned to any vehicle.
              </div>
            )}
          </div>

          {/* Document Verification */}
          <div className="flex items-center justify-between p-4 rounded-lg border border-[var(--border)] bg-[var(--bg-card)]">
            <div className="flex items-center gap-3">
              <ShieldAlert size={20} className={conductor.documentsComplete ? 'text-emerald-500' : 'text-amber-500'} />
              <div>
                <p className="text-sm font-semibold text-[var(--text-primary)]">Document Verification</p>
                <p className="text-xs text-[var(--text-secondary)]">
                  {conductor.documentsComplete ? 'All KYC and ID documents verified.' : 'Pending document uploads or verification.'}
                </p>
              </div>
            </div>
            <button className="text-sm font-medium text-[var(--primary)] hover:underline">
              View KYC
            </button>
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
