"use client";

import React, { useEffect } from 'react';
import { X, Navigation, Bus, User, Clock, Activity, AlertCircle, Sunrise, Sunset, MapPin } from 'lucide-react';
import type { DailyTrip } from '../transport_daily_trips_types/transport_daily_trips.types';
import { TRIP_STATUS_COLORS, TRIP_TYPE_LABELS } from '../transport_daily_trips_constants/transport_daily_trips.constants';

// RESPONSIBILITY: Renders the read-only profile view modal for a single daily trip

interface TransportDailyTripsProfileModalProps {
  trip: DailyTrip | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function TransportDailyTripsProfileModal({ trip, isOpen, onClose }: TransportDailyTripsProfileModalProps) {
  
  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen || !trip) return null;

  const statusConfig = TRIP_STATUS_COLORS[trip.status] || TRIP_STATUS_COLORS.SCHEDULED;

  const getTripIcon = (type: string) => {
    switch(type) {
      case 'MORNING_PICKUP': return <Sunrise size={24} className="text-amber-500" />;
      case 'AFTERNOON_DROP': return <Sunset size={24} className="text-orange-500" />;
      default: return <Bus size={24} className="text-blue-500" />;
    }
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
            <div className="w-12 h-12 rounded-full bg-[rgba(250,204,21,0.1)] border border-[rgba(250,204,21,0.2)] flex items-center justify-center text-[var(--primary)]">
              {getTripIcon(trip.tripType)}
            </div>
            <div>
              <h2 className="text-xl font-bold text-[var(--text-primary)]">{TRIP_TYPE_LABELS[trip.tripType]}</h2>
              <div className="flex items-center gap-2 mt-1">
                <p className="text-xs font-bold text-[var(--primary)] tracking-wide">
                  {trip.id}
                </p>
                <span className="text-[var(--text-secondary)]">•</span>
                <span className="text-xs font-medium text-[var(--text-secondary)]">
                  {trip.tripDate}
                </span>
                <span className="text-[var(--text-secondary)]">•</span>
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
            
            {/* Route & Crew */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-[var(--text-primary)] flex items-center gap-2 border-b border-[var(--border)] pb-2">
                <Navigation size={16} className="text-[var(--primary)]" /> Route & Crew
              </h3>
              
              <div className="flex flex-col gap-3 text-sm">
                <div>
                  <span className="text-[var(--text-secondary)] text-xs mb-0.5 block">Assigned Route</span>
                  <span className="font-bold text-[var(--text-primary)]">{trip.routeName}</span>
                </div>
                <div>
                  <span className="text-[var(--text-secondary)] text-xs mb-0.5 block flex items-center gap-1">
                    <Bus size={12} className="text-[var(--primary)]" /> Vehicle
                  </span>
                  <span className="font-medium text-[var(--text-primary)]">{trip.vehicleNumber}</span>
                </div>
                <div>
                  <span className="text-[var(--text-secondary)] text-xs mb-0.5 block flex items-center gap-1">
                    <User size={12} /> Driver & Attendant
                  </span>
                  <span className="font-medium text-[var(--text-primary)]">
                    {trip.driverName} {trip.conductorName ? ` / ${trip.conductorName}` : ''}
                  </span>
                </div>
              </div>
            </div>

            {/* Time Metrics */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-[var(--text-primary)] flex items-center gap-2 border-b border-[var(--border)] pb-2">
                <Clock size={16} className="text-[var(--primary)]" /> Time Metrics
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1 bg-[var(--bg-input)] p-3 rounded-lg border border-[var(--border)]">
                  <span className="text-[10px] text-[var(--text-secondary)] uppercase font-semibold">Planned Time</span>
                  <span className="text-sm font-semibold text-[var(--text-primary)]">{trip.plannedStartTime}</span>
                  <span className="text-xs text-[var(--text-secondary)]">to {trip.plannedEndTime}</span>
                </div>
                
                <div className={`flex flex-col gap-1 p-3 rounded-lg border ${trip.actualStartTime ? 'bg-[rgba(34,197,94,0.05)] border-[rgba(34,197,94,0.2)]' : 'bg-[var(--bg-input)] border-[var(--border)]'}`}>
                  <span className="text-[10px] text-[var(--text-secondary)] uppercase font-semibold flex items-center gap-1">
                    <Activity size={10} className={trip.actualStartTime ? 'text-emerald-500' : ''}/> Actual Time
                  </span>
                  <span className={`text-sm font-semibold ${trip.actualStartTime ? 'text-[var(--text-primary)]' : 'text-[var(--text-secondary)]'}`}>
                    {trip.actualStartTime || '--:--'}
                  </span>
                  <span className="text-xs text-[var(--text-secondary)]">
                    to {trip.actualEndTime || '--:--'}
                  </span>
                </div>
              </div>

              {trip.status === 'DELAYED' && (
                <div className="flex items-start gap-2 p-3 mt-2 rounded-lg bg-[rgba(239,68,68,0.05)] border border-[rgba(239,68,68,0.2)]">
                  <AlertCircle size={16} className="text-red-500 flex-shrink-0 mt-0.5" />
                  <p className="text-xs font-medium text-red-500">Trip is currently marked as delayed. Admins are monitoring the situation.</p>
                </div>
              )}
            </div>
          </div>

          {/* Current Status Board */}
          <div className="bg-[rgba(250,204,21,0.05)] border border-[var(--border)] rounded-lg p-5">
            <h3 className="text-sm font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
              <MapPin size={16} className="text-[var(--primary)]" /> Live Status
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <span className="text-xs text-[var(--text-secondary)] block mb-1">Current Location</span>
                <span className="text-sm font-semibold text-[var(--text-primary)]">
                  {trip.currentLocation || (trip.status === 'COMPLETED' ? 'Trip Ended' : 'Not Tracking')}
                </span>
              </div>
              
              <div className="sm:col-span-2">
                <span className="text-xs text-[var(--text-secondary)] block mb-2 flex justify-between">
                  <span>Student Boarding Capacity</span>
                  <span className="font-bold">{trip.studentsBoarded} / {trip.totalCapacity}</span>
                </span>
                <div className="w-full bg-[var(--bg-page)] rounded-full h-2.5 border border-[var(--border)] overflow-hidden">
                  <div 
                    className="bg-[var(--primary)] h-full rounded-full transition-all duration-500" 
                    style={{ width: `${Math.min((trip.studentsBoarded / trip.totalCapacity) * 100, 100)}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-[var(--border)] bg-[var(--bg-page)] flex justify-end gap-3">
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
