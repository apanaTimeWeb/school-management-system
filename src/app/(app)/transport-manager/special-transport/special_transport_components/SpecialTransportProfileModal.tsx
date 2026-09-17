"use client";

import React, { useEffect } from 'react';
import { X, MapPin, Users, Calendar, Bus, Clock, Phone, ShieldCheck, Map, User, CheckCircle2, Navigation } from 'lucide-react';
import type { SpecialTransportRecord } from '../special_transport_types/special_transport.types';
import { TRIP_TYPE_CONFIGS, TRIP_STATUS_COLORS } from '../special_transport_constants/special_transport.constants';

// RESPONSIBILITY: Renders the detailed view modal for a special transport trip

interface SpecialTransportProfileModalProps {
  record: SpecialTransportRecord | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function SpecialTransportProfileModal({ record, isOpen, onClose }: SpecialTransportProfileModalProps) {
  
  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen || !record) return null;

  const typeConfig = TRIP_TYPE_CONFIGS[record.tripType] || TRIP_TYPE_CONFIGS.PICNIC;
  const statusConfig = TRIP_STATUS_COLORS[record.status] || TRIP_STATUS_COLORS.SCHEDULED;

  const formatDate = (isoDate: string) => {
    return new Date(isoDate).toLocaleDateString('en-IN', {
      weekday: 'short', day: 'numeric', month: 'short', year: 'numeric'
    });
  };

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm motion-safe:transition-opacity">
      <div 
        className="relative w-full max-w-3xl bg-[var(--bg-overlay)] border border-[var(--border)] rounded-xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-[var(--border)] bg-[var(--bg-card)]">
          <div className="flex items-center gap-4">
            <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center flex-shrink-0`} style={{ backgroundColor: typeConfig.bg, borderColor: typeConfig.text + '40', color: typeConfig.text }}>
              <Bus size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-[var(--text-primary)]">
                {record.tripName}
              </h2>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs font-bold text-[var(--primary)] tracking-wide">
                  ID: {record.id}
                </span>
                <span className="text-[var(--text-secondary)]">•</span>
                <span 
                  className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded border"
                  style={{ backgroundColor: typeConfig.bg, color: typeConfig.text, borderColor: typeConfig.text + '30' }}
                >
                  {typeConfig.label}
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
          
          {/* Top Info Ribbon */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-[var(--bg-input)] border border-[var(--border)] p-4 rounded-lg">
             <div className="flex flex-col border-r border-[var(--border)]">
               <span className="text-[10px] text-[var(--text-secondary)] uppercase font-semibold mb-1 flex items-center gap-1"><Calendar size={12}/> Date</span>
               <span className="text-sm font-bold text-[var(--text-primary)]">{formatDate(record.scheduleDate)}</span>
             </div>
             <div className="flex flex-col md:border-r border-[var(--border)] pl-2">
               <span className="text-[10px] text-[var(--text-secondary)] uppercase font-semibold mb-1 flex items-center gap-1"><Clock size={12}/> Timings</span>
               <span className="text-sm font-bold text-[var(--text-primary)]">{record.departureTime} - {record.returnTime}</span>
             </div>
             <div className="flex flex-col border-r border-[var(--border)] pl-2">
               <span className="text-[10px] text-[var(--text-secondary)] uppercase font-semibold mb-1 flex items-center gap-1"><ShieldCheck size={12}/> Permissions</span>
               <span className={`text-sm font-bold ${record.permissionStatus === 'APPROVED' ? 'text-emerald-500' : record.permissionStatus === 'PARTIAL' ? 'text-amber-500' : 'text-[var(--text-secondary)]'}`}>
                 {record.permissionStatus}
               </span>
             </div>
             <div className="flex flex-col pl-2">
               <span className="text-[10px] uppercase font-semibold mb-1 flex items-center gap-1" style={{ color: statusConfig.text }}><Navigation size={12}/> Status</span>
               <span className="text-sm font-bold" style={{ color: statusConfig.text }}>{statusConfig.label}</span>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Left Column: Itinerary */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-[var(--text-primary)] flex items-center gap-2 border-b border-[var(--border)] pb-2">
                <Map size={16} className="text-[var(--primary)]" /> Itinerary & Route
              </h3>
              
              <div className="flex flex-col gap-4 text-sm">
                <div>
                  <span className="text-[var(--text-secondary)] text-xs mb-1 block">Destination</span>
                  <span className="font-bold text-[var(--text-primary)] flex items-start gap-2">
                     <MapPin size={16} className="text-[var(--primary)] flex-shrink-0 mt-0.5"/> 
                     {record.destination}
                  </span>
                </div>
                
                <div>
                  <span className="text-[var(--text-secondary)] text-xs mb-1 block">Route Instructions</span>
                  <div className="bg-[var(--bg-input)] border border-[var(--border)] p-3 rounded-lg text-[var(--text-primary)] font-medium leading-relaxed">
                    {record.routeDetails || 'No specific route instructions provided.'}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Logistics */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-[var(--text-primary)] flex items-center gap-2 border-b border-[var(--border)] pb-2">
                <Bus size={16} className="text-[var(--primary)]" /> Transport Logistics
              </h3>
              
              <div className="bg-[var(--bg-input)] border border-[var(--border)] rounded-lg p-4 space-y-4">
                 
                 <div className="flex flex-col gap-1 border-b border-[var(--border)] pb-3">
                   <span className="text-[10px] text-[var(--text-secondary)] uppercase font-semibold">Assigned Fleet</span>
                   <span className="font-bold text-[var(--text-primary)] flex items-center gap-2"><Bus size={14} className="text-[var(--text-secondary)]"/> {record.assignedVehicle}</span>
                 </div>

                 <div className="grid grid-cols-2 gap-3 border-b border-[var(--border)] pb-3">
                   <div className="flex flex-col gap-1">
                     <span className="text-[10px] text-[var(--text-secondary)] uppercase font-semibold">Driver</span>
                     <span className="font-medium text-[var(--text-primary)] flex items-center gap-2"><User size={14} className="text-[var(--text-secondary)]"/> {record.assignedDriver}</span>
                   </div>
                   <div className="flex flex-col gap-1">
                     <span className="text-[10px] text-[var(--text-secondary)] uppercase font-semibold">Conductor</span>
                     <span className="font-medium text-[var(--text-primary)]">{record.assignedConductor || 'N/A'}</span>
                   </div>
                 </div>

                 <div className="grid grid-cols-2 gap-3">
                   <div className="flex flex-col gap-1">
                     <span className="text-[10px] text-[var(--text-secondary)] uppercase font-semibold">Total Students</span>
                     <span className="font-bold text-[var(--primary)] text-lg flex items-center gap-1.5"><Users size={18}/> {record.studentCount}</span>
                   </div>
                   <div className="flex flex-col gap-1">
                     <span className="text-[10px] text-[var(--text-secondary)] uppercase font-semibold">Accompanying Staff</span>
                     <span className="font-medium text-[var(--text-primary)]">{record.accompanyingStaff}</span>
                   </div>
                 </div>

              </div>
            </div>

          </div>

          {/* Bottom Alert/Emergency Contact */}
          <div className="bg-[rgba(239,68,68,0.05)] border border-red-500/20 rounded-lg p-4 flex items-center justify-between mt-4">
             <div className="flex items-center gap-3">
                <div className="bg-red-500/10 p-2 rounded-full">
                  <Phone size={20} className="text-red-500" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-red-500 uppercase tracking-wider mb-0.5">Emergency Contact for this Trip</h4>
                  <p className="text-lg font-bold text-[var(--text-primary)]">{record.emergencyContact}</p>
                </div>
             </div>
             
             {record.status === 'COMPLETED' && (
               <div className="flex items-center gap-2 text-emerald-500 font-bold bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/20">
                 <CheckCircle2 size={16} /> Trip Closed Safely
               </div>
             )}
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-[var(--border)] bg-[var(--bg-page)] flex justify-end">
          <button 
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium rounded-md bg-[var(--primary)] text-white hover:bg-[var(--primary-hover)] transition-colors shadow-lg shadow-[var(--primary-subtle)]"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
