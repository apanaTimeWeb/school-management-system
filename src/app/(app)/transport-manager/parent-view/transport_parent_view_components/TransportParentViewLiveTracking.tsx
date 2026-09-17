"use client";

import React from 'react';
import { Map, MapPin, Activity, Navigation2, CheckCircle2, AlertCircle } from 'lucide-react';
import type { ParentChildTransportProfile } from '../transport_parent_view_types/transport_parent_view.types';
import { TRIP_STATUS_LABELS } from '../transport_parent_view_constants/transport_parent_view.constants';

// RESPONSIBILITY: Renders the Today's Trip progress and conditional Live Tracking Map

interface TransportParentViewLiveTrackingProps {
  child: ParentChildTransportProfile;
}

export default function TransportParentViewLiveTracking({ child }: TransportParentViewLiveTrackingProps) {
  
  if (!child.hasTripToday) {
    return (
      <div className="bg-[var(--bg-card)] rounded-xl border border-[var(--border)] p-6 flex flex-col items-center justify-center text-center h-full min-h-[300px]">
        <MapPin size={40} className="text-[var(--text-secondary)] opacity-30 mb-4" />
        <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">No active trip today</h3>
        <p className="text-sm text-[var(--text-secondary)]">Your child is not scheduled for transport today, or the trip has not been initiated by the school.</p>
      </div>
    );
  }

  // Progress Bar Logic
  const getProgressPercentage = () => {
    switch (child.tripStatus) {
      case 'NOT_STARTED': return 0;
      case 'EN_ROUTE_PICKUP': return 25;
      case 'AT_SCHOOL': return 50;
      case 'EN_ROUTE_DROP': return 75;
      case 'COMPLETED': return 100;
      default: return 0;
    }
  };

  return (
    <div className="bg-[var(--bg-card)] rounded-xl border border-[var(--border)] overflow-hidden flex flex-col h-full">
      
      {/* Trip Status Header */}
      <div className="p-5 border-b border-[var(--border)]">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-sm font-bold text-[var(--text-primary)] flex items-center gap-2">
            <Activity size={18} className="text-[var(--primary)]" /> Today's Trip Status
          </h3>
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-[rgba(250,204,21,0.1)] text-[var(--primary)] border border-[rgba(250,204,21,0.2)]">
            {TRIP_STATUS_LABELS[child.tripStatus]}
          </span>
        </div>

        {/* Status Stepper */}
        <div className="relative pt-2 pb-4">
          <div className="absolute top-4 left-4 right-4 h-1 bg-[var(--bg-input)] rounded-full -z-10">
            <div 
              className="h-full bg-[var(--primary)] rounded-full transition-all duration-1000"
              style={{ width: `${getProgressPercentage()}%` }}
            ></div>
          </div>
          
          <div className="flex justify-between relative z-0">
            <div className={`flex flex-col items-center gap-1.5 ${getProgressPercentage() >= 0 ? 'text-[var(--text-primary)]' : 'text-[var(--text-secondary)] opacity-50'}`}>
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center bg-[var(--bg-card)] ${getProgressPercentage() >= 0 ? 'border-[var(--primary)] text-[var(--primary)]' : 'border-[var(--border)]'}`}>
                {getProgressPercentage() > 0 && <CheckCircle2 size={12} />}
              </div>
              <span className="text-[9px] uppercase font-semibold">Start</span>
            </div>
            
            <div className={`flex flex-col items-center gap-1.5 ${getProgressPercentage() >= 25 ? 'text-[var(--text-primary)]' : 'text-[var(--text-secondary)] opacity-50'}`}>
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center bg-[var(--bg-card)] ${getProgressPercentage() >= 25 ? 'border-[var(--primary)] text-[var(--primary)]' : 'border-[var(--border)]'}`}>
                {getProgressPercentage() > 25 && <CheckCircle2 size={12} />}
              </div>
              <span className="text-[9px] uppercase font-semibold">Pickup</span>
            </div>

            <div className={`flex flex-col items-center gap-1.5 ${getProgressPercentage() >= 50 ? 'text-[var(--text-primary)]' : 'text-[var(--text-secondary)] opacity-50'}`}>
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center bg-[var(--bg-card)] ${getProgressPercentage() >= 50 ? 'border-[var(--primary)] text-[var(--primary)]' : 'border-[var(--border)]'}`}>
                {getProgressPercentage() > 50 && <CheckCircle2 size={12} />}
              </div>
              <span className="text-[9px] uppercase font-semibold">School</span>
            </div>

            <div className={`flex flex-col items-center gap-1.5 ${getProgressPercentage() >= 75 ? 'text-[var(--text-primary)]' : 'text-[var(--text-secondary)] opacity-50'}`}>
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center bg-[var(--bg-card)] ${getProgressPercentage() >= 75 ? 'border-[var(--primary)] text-[var(--primary)]' : 'border-[var(--border)]'}`}>
                {getProgressPercentage() > 75 && <CheckCircle2 size={12} />}
              </div>
              <span className="text-[9px] uppercase font-semibold">Drop</span>
            </div>

            <div className={`flex flex-col items-center gap-1.5 ${getProgressPercentage() >= 100 ? 'text-[var(--text-primary)]' : 'text-[var(--text-secondary)] opacity-50'}`}>
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center bg-[var(--bg-card)] ${getProgressPercentage() >= 100 ? 'border-[var(--primary)] text-[var(--primary)]' : 'border-[var(--border)]'}`}>
                {getProgressPercentage() >= 100 && <CheckCircle2 size={12} />}
              </div>
              <span className="text-[9px] uppercase font-semibold">End</span>
            </div>
          </div>
        </div>
      </div>

      {/* Map Area */}
      <div className="flex-1 min-h-[300px] relative bg-[#0f172a] flex flex-col items-center justify-center">
        
        {child.isLiveTrackingEnabled ? (
          <>
            {/* Map Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: 'linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
            
            {/* Route Line */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40" preserveAspectRatio="none">
               <path d="M 50 150 Q 200 50, 400 200 T 800 100" fill="none" stroke="var(--primary)" strokeWidth="3" strokeDasharray="5 5" />
            </svg>

            {/* Vehicle Pin */}
            <div className="absolute z-10 flex flex-col items-center" style={{ top: '40%', left: '45%' }}>
              <div className="bg-[rgba(15,23,42,0.8)] backdrop-blur-sm border border-[var(--border)] rounded px-2 py-1 mb-1.5 shadow-lg whitespace-nowrap animate-in fade-in slide-in-from-bottom-2">
                <span className="text-[10px] font-bold text-white tracking-wider uppercase">{child.currentLocationStr}</span>
              </div>
              <div className="relative">
                <div className="absolute -inset-2 bg-emerald-500 rounded-full opacity-30 animate-ping"></div>
                <div className="w-8 h-8 rounded-full bg-emerald-500 border-2 border-white shadow-lg flex items-center justify-center text-white relative z-10">
                  <Navigation2 size={14} className="transform rotate-45" />
                </div>
              </div>
            </div>

            {/* HUD Overlay */}
            <div className="absolute bottom-4 left-4 right-4 bg-[rgba(15,23,42,0.85)] backdrop-blur-md border border-[var(--border)] rounded-lg p-3 flex justify-between items-center shadow-2xl">
              <div>
                <p className="text-[10px] uppercase font-semibold text-emerald-500 tracking-wider">Live Speed</p>
                <p className="text-lg font-bold text-white leading-none">{child.speedKmh} <span className="text-xs font-medium opacity-70">km/h</span></p>
              </div>
              <div className="text-right">
                <p className="text-[10px] uppercase font-semibold text-[var(--primary)] tracking-wider">ETA to Stop</p>
                <p className="text-lg font-bold text-white leading-none">{child.tripEta || '--'}</p>
              </div>
            </div>
          </>
        ) : (
          <div className="text-center p-6 flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] flex items-center justify-center text-[var(--text-secondary)] mb-4">
              <Map size={24} />
            </div>
            <h4 className="text-base font-bold text-white mb-2">Live Tracking Unavailable</h4>
            <p className="text-sm text-[var(--text-secondary)] max-w-xs leading-relaxed">
              GPS integration is currently disabled for this vehicle or the live tracking service is inactive.
            </p>
          </div>
        )}
      </div>

    </div>
  );
}
