"use client";

import React, { useEffect } from 'react';
import { X, MapPin, Route as RouteIcon, Users, Clock, Navigation, Hash } from 'lucide-react';
import type { TransportStop } from '../transport_stops_types/transport_stops.types';
import { STOP_STATUS_COLORS } from '../transport_stops_constants/transport_stops.constants';

// RESPONSIBILITY: Renders the read-only profile view modal for a single stop

interface TransportStopsProfileModalProps {
  stop: TransportStop | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function TransportStopsProfileModal({ stop, isOpen, onClose }: TransportStopsProfileModalProps) {
  
  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen || !stop) return null;

  const statusConfig = STOP_STATUS_COLORS[stop.status] || STOP_STATUS_COLORS.INACTIVE;

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm motion-safe:transition-opacity">
      <div 
        className="relative w-full max-w-lg bg-[var(--bg-overlay)] border border-[var(--border)] rounded-xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-[var(--border)] bg-[var(--bg-card)]">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[rgba(250,204,21,0.1)] border border-[rgba(250,204,21,0.2)] flex items-center justify-center text-[var(--primary)]">
              <span className="text-sm font-bold flex items-center"><Hash size={14}/>{stop.sequence}</span>
            </div>
            <div>
              <h2 className="text-xl font-bold text-[var(--text-primary)]">{stop.stopName}</h2>
              <div className="flex items-center gap-2 mt-1">
                <p className="text-xs font-medium text-[var(--text-secondary)] flex items-center gap-1">
                  <RouteIcon size={12} /> {stop.routeName}
                </p>
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
        <div className="flex-1 p-5 space-y-6">
          
          <div className="flex items-center justify-between p-3 rounded-lg bg-[var(--bg-input)] border border-[var(--border)]">
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider mb-1">Stop Status</span>
              <span 
                className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold tracking-wide"
                style={{ backgroundColor: statusConfig.bg, color: statusConfig.text }}
              >
                {statusConfig.label}
              </span>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider mb-1">Students Loading</span>
              <span className="text-sm font-bold text-[var(--text-primary)] flex items-center gap-1.5">
                <Users size={16} className="text-[var(--primary)]" /> {stop.assignedStudents}
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex flex-col border-b border-[var(--border)] pb-3">
              <span className="text-[var(--text-secondary)] text-sm flex items-center gap-1.5 mb-1">
                <MapPin size={14}/> Detailed Location
              </span>
              <span className="font-medium text-[var(--text-primary)] text-base">{stop.location || 'No detailed location provided.'}</span>
            </div>
            
            <div className="grid grid-cols-2 gap-4 border-b border-[var(--border)] pb-3">
              <div className="flex flex-col bg-[rgba(34,197,94,0.05)] p-3 rounded-lg border border-[rgba(34,197,94,0.1)]">
                <span className="text-[var(--text-secondary)] text-xs mb-1 uppercase font-semibold">Morning Pickup</span>
                <span className="font-bold text-[var(--text-primary)] flex items-center gap-1.5 text-lg">
                  <Clock size={16} className="text-emerald-500"/> {stop.pickupTime}
                </span>
              </div>
              <div className="flex flex-col bg-[rgba(245,158,11,0.05)] p-3 rounded-lg border border-[rgba(245,158,11,0.1)]">
                <span className="text-[var(--text-secondary)] text-xs mb-1 uppercase font-semibold">Evening Drop</span>
                <span className="font-bold text-[var(--text-primary)] flex items-center gap-1.5 text-lg">
                  <Clock size={16} className="text-amber-500"/> {stop.dropTime}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="text-sm text-[var(--text-secondary)]">Navigate to location</span>
              <button className="flex items-center gap-2 py-1.5 px-3 rounded-md bg-[var(--primary)] text-white text-xs font-medium hover:bg-[var(--primary-hover)] transition-colors">
                <Navigation size={14} /> Open Maps
              </button>
            </div>
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
