"use client";

import React, { useEffect } from 'react';
import { X, AlertOctagon, Calendar, MapPin, Bus, User, Phone, CheckCircle2, AlertTriangle, ShieldAlert, FileText, History } from 'lucide-react';
import type { TransportIncident } from '../transport_safety_types/transport_safety.types';
import { SEVERITY_COLORS, INCIDENT_STATUS_COLORS, INCIDENT_TYPE_LABELS } from '../transport_safety_constants/transport_safety.constants';

// RESPONSIBILITY: Renders the read-only detailed view modal for an incident, including the audit trail

interface TransportSafetyProfileModalProps {
  record: TransportIncident | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function TransportSafetyProfileModal({ record, isOpen, onClose }: TransportSafetyProfileModalProps) {
  
  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen || !record) return null;

  const severityConfig = SEVERITY_COLORS[record.severity] || SEVERITY_COLORS.MEDIUM;
  const statusConfig = INCIDENT_STATUS_COLORS[record.status] || INCIDENT_STATUS_COLORS.REPORTED;
  
  const isCritical = record.severity === 'CRITICAL' || record.severity === 'HIGH';

  const formatDateTime = (isoString: string) => {
    try {
      const date = new Date(isoString);
      return date.toLocaleString('en-IN', {
        weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
      });
    } catch {
      return isoString;
    }
  };

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm motion-safe:transition-opacity">
      <div 
        className="relative w-full max-w-3xl bg-[var(--bg-overlay)] border border-[var(--border)] rounded-xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className={`flex items-center justify-between p-5 border-b border-[var(--border)] ${isCritical ? 'bg-[rgba(239,68,68,0.1)] border-b-red-500/20' : 'bg-[var(--bg-card)]'}`}>
          <div className="flex items-center gap-4">
            <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center flex-shrink-0`} style={{ backgroundColor: severityConfig.bg, borderColor: severityConfig.text + '40', color: severityConfig.text }}>
              {isCritical ? <ShieldAlert size={24} /> : <AlertOctagon size={24} />}
            </div>
            <div>
              <h2 className={`text-xl font-bold flex items-center gap-2 ${isCritical ? 'text-red-500' : 'text-[var(--text-primary)]'}`}>
                {INCIDENT_TYPE_LABELS[record.incidentType]}
              </h2>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs font-bold text-[var(--primary)] tracking-wide">
                  Log ID: {record.id}
                </span>
                <span className="text-[var(--text-secondary)]">•</span>
                <span 
                  className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded border"
                  style={{ backgroundColor: severityConfig.bg, color: severityConfig.text, borderColor: severityConfig.text + '30' }}
                >
                  {severityConfig.label} Severity
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
          
          {/* Top Banner */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
             <div className="bg-[var(--bg-input)] border border-[var(--border)] p-4 rounded-lg flex flex-col justify-center">
                <span className="text-[10px] text-[var(--text-secondary)] uppercase font-semibold mb-1 flex items-center gap-1"><Calendar size={12}/> Incident Time</span>
                <span className="font-bold text-[var(--text-primary)]">{formatDateTime(record.dateTime)}</span>
             </div>
             <div className="bg-[var(--bg-input)] border border-[var(--border)] p-4 rounded-lg flex flex-col justify-center">
                <span className="text-[10px] text-[var(--text-secondary)] uppercase font-semibold mb-1 flex items-center gap-1"><MapPin size={12}/> Location</span>
                <span className="font-bold text-[var(--text-primary)]">{record.location}</span>
             </div>
             <div className="p-4 rounded-lg flex flex-col justify-center border" style={{ backgroundColor: statusConfig.bg, borderColor: statusConfig.text + '30' }}>
                <span className="text-[10px] uppercase font-semibold mb-1" style={{ color: statusConfig.text }}>Current Status</span>
                <div className="flex items-center gap-2 font-bold text-lg" style={{ color: statusConfig.text }}>
                  {statusConfig.label}
                </div>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Context & Description */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-[var(--text-primary)] flex items-center gap-2 border-b border-[var(--border)] pb-2">
                <FileText size={16} className="text-[var(--primary)]" /> Incident Details
              </h3>
              
              <div className="flex flex-col gap-3 text-sm">
                <div>
                  <span className="text-[var(--text-secondary)] text-xs mb-0.5 block flex items-center gap-1"><Bus size={12}/> Vehicle Involved</span>
                  <span className="font-bold text-[var(--text-primary)]">{record.vehicleNumber || 'N/A'} {record.vehicleId ? `(${record.vehicleId})` : ''}</span>
                </div>
                <div>
                  <span className="text-[var(--text-secondary)] text-xs mb-0.5 block flex items-center gap-1"><User size={12}/> Reported By</span>
                  <span className="font-bold text-[var(--text-primary)]">{record.reportedBy}</span>
                </div>
                
                <div className="bg-[var(--bg-input)] border border-[var(--border)] p-3 rounded flex flex-col">
                  <span className="text-[10px] text-[var(--text-secondary)] mb-1 uppercase font-semibold">
                    Description
                  </span>
                  <p className="font-medium text-[var(--text-primary)] leading-relaxed">{record.description}</p>
                </div>
              </div>
            </div>

            {/* Action Taken & Toggles */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-[var(--text-primary)] flex items-center gap-2 border-b border-[var(--border)] pb-2">
                <ShieldAlert size={16} className="text-[var(--primary)]" /> Action & Follow-up
              </h3>
              
              <div className="flex flex-col gap-3 text-sm">
                <div className="bg-[rgba(16,185,129,0.05)] border border-emerald-500/20 p-3 rounded flex flex-col">
                  <span className="text-[10px] text-emerald-600 mb-1 uppercase font-bold flex items-center gap-1">
                    <CheckCircle2 size={10} /> Immediate Action Taken
                  </span>
                  <p className="font-medium text-[var(--text-primary)] leading-relaxed">{record.actionTaken || 'None recorded yet.'}</p>
                </div>

                <div className="flex flex-col gap-2 mt-2">
                   <div className={`p-2 rounded border flex items-center gap-2 ${record.emergencyContactNotified ? 'bg-[rgba(16,185,129,0.05)] border-[rgba(16,185,129,0.2)]' : 'bg-[var(--bg-input)] border-[var(--border)]'}`}>
                      <Phone size={14} className={record.emergencyContactNotified ? 'text-emerald-500' : 'text-[var(--text-secondary)]'} />
                      <span className={`text-xs font-semibold ${record.emergencyContactNotified ? 'text-emerald-500' : 'text-[var(--text-secondary)]'}`}>
                        {record.emergencyContactNotified ? 'Emergency Contacts Notified' : 'Emergency Contacts NOT Notified'}
                      </span>
                   </div>
                   
                   <div className={`p-2 rounded border flex items-center gap-2 ${record.followUpRequired ? 'bg-[rgba(245,158,11,0.05)] border-[rgba(245,158,11,0.2)]' : 'bg-[var(--bg-input)] border-[var(--border)]'}`}>
                      <AlertTriangle size={14} className={record.followUpRequired ? 'text-amber-500' : 'text-[var(--text-secondary)]'} />
                      <span className={`text-xs font-semibold ${record.followUpRequired ? 'text-amber-500' : 'text-[var(--text-secondary)]'}`}>
                        {record.followUpRequired ? 'Follow-up Action Required' : 'No Follow-up Required'}
                      </span>
                   </div>
                </div>
              </div>
            </div>
          </div>

          {/* Audit Trail */}
          <div className="space-y-4 pt-4 border-t border-[var(--border)]">
             <h3 className="text-sm font-semibold text-[var(--text-primary)] flex items-center gap-2">
                <History size={16} className="text-[var(--primary)]" /> Audit Trail & History
             </h3>
             
             {record.auditTrail && record.auditTrail.length > 0 ? (
               <div className="space-y-3 pl-2 border-l-2 border-[var(--border)] ml-2">
                 {record.auditTrail.map((log, idx) => (
                   <div key={idx} className="relative pl-4">
                     <span className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-[var(--primary)] border-[3px] border-[var(--bg-card)]"></span>
                     <div className="flex flex-col">
                       <span className="text-sm font-medium text-[var(--text-primary)]">{log.action}</span>
                       <div className="flex items-center gap-2 mt-0.5">
                         <span className="text-[10px] font-mono text-[var(--text-secondary)]">{formatDateTime(log.timestamp)}</span>
                         <span className="text-[10px] text-[var(--text-secondary)]">•</span>
                         <span className="text-[10px] font-semibold text-[var(--primary)]">{log.performedBy}</span>
                       </div>
                     </div>
                   </div>
                 ))}
               </div>
             ) : (
               <span className="text-[var(--text-secondary)] italic text-sm">No audit trail available for this incident.</span>
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
