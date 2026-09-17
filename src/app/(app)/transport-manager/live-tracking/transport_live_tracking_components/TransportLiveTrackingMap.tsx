"use client";

import React from 'react';
import { Map, MapPin, Navigation, Bus, Clock, User, Phone, ShieldAlert, Activity } from 'lucide-react';
import type { LiveVehicle } from '../transport_live_tracking_types/transport_live_tracking.types';
import { TRACKING_STATUS_COLORS } from '../transport_live_tracking_constants/transport_live_tracking.constants';

// RESPONSIBILITY: Renders the mock map view and detailed HUD for the selected vehicle

interface TransportLiveTrackingMapProps {
  selectedVehicle: LiveVehicle | null;
}

export default function TransportLiveTrackingMap({ selectedVehicle }: TransportLiveTrackingMapProps) {
  
  if (!selectedVehicle) {
    return (
      <div className="flex-1 h-[600px] lg:h-full bg-[var(--bg-page)] relative flex items-center justify-center border-t lg:border-t-0 lg:border-l border-[var(--border)]">
        {/* Mock Map Background Grid */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(var(--text-primary) 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="relative z-10 flex flex-col items-center justify-center text-[var(--text-secondary)] text-center p-6">
          <div className="w-20 h-20 rounded-full bg-[var(--bg-input)] border border-[var(--border)] flex items-center justify-center mb-4">
            <Map size={32} className="opacity-50" />
          </div>
          <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">Select a vehicle to track</h3>
          <p className="text-sm max-w-sm">Choose a vehicle from the fleet list to view its real-time location, speed, and route progress.</p>
        </div>
      </div>
    );
  }

  const statusConfig = TRACKING_STATUS_COLORS[selectedVehicle.trackingStatus] || TRACKING_STATUS_COLORS.OFFLINE;

  return (
    <div className="flex-1 h-[600px] lg:h-full bg-[var(--bg-page)] relative flex flex-col border-t lg:border-t-0 lg:border-l border-[var(--border)] overflow-hidden">
      
      {/* MOCK MAP AREA */}
      <div className="absolute inset-0 bg-[#0f172a] overflow-hidden">
        {/* Map Grid Pattern to simulate map tile texture */}
        <div className="absolute inset-0 opacity-[0.1]" style={{ backgroundImage: 'linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        {/* Simulated Route Line */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30" preserveAspectRatio="none">
          <path d="M 100 500 C 300 400, 400 600, 600 300 S 800 100, 1000 200" fill="none" stroke="var(--primary)" strokeWidth="4" strokeDasharray="10 10" />
        </svg>

        {/* Mock Vehicle Marker */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
          
          {/* Marker Label */}
          <div className="bg-[var(--bg-overlay)] border border-[var(--border)] rounded-md px-3 py-1.5 shadow-xl mb-2 flex items-center gap-2 animate-in fade-in slide-in-from-bottom-4">
            <span className="text-xs font-bold text-[var(--text-primary)]">{selectedVehicle.vehicleNumber}</span>
            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded uppercase" style={{ backgroundColor: statusConfig.bg, color: statusConfig.text }}>
              {selectedVehicle.speedKmh} km/h
            </span>
          </div>
          
          {/* Pulse Effect */}
          <div className="relative">
            {selectedVehicle.trackingStatus !== 'OFFLINE' && selectedVehicle.trackingStatus !== 'STOPPED' && (
              <div className="absolute -inset-4 bg-[var(--primary)] rounded-full opacity-20 animate-ping"></div>
            )}
            <div className="relative w-12 h-12 rounded-full bg-[var(--primary)] border-4 border-white dark:border-[#0f172a] shadow-lg flex items-center justify-center text-white">
              <Bus size={20} />
            </div>
          </div>
        </div>

      </div>

      {/* OVERLAY HUD (Heads Up Display) */}
      <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6 pointer-events-none">
        
        {/* Alerts Panel */}
        {(selectedVehicle.routeDeviationWarning || selectedVehicle.geoFenceViolation) && (
          <div className="mb-4 pointer-events-auto max-w-md w-full animate-in fade-in slide-in-from-bottom-4">
            <div className="bg-[rgba(40,0,0,0.85)] backdrop-blur-md border border-red-500/30 rounded-xl p-4 shadow-2xl">
              <h4 className="text-red-500 font-bold text-sm flex items-center gap-2 mb-2 uppercase tracking-wide">
                <ShieldAlert size={16} /> Critical Alerts
              </h4>
              <ul className="space-y-1 text-xs text-[var(--text-primary)]">
                {selectedVehicle.routeDeviationWarning && (
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-500"></span> Vehicle has deviated from planned route.</li>
                )}
                {selectedVehicle.geoFenceViolation && (
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> Vehicle breached designated geo-fence boundaries.</li>
                )}
              </ul>
            </div>
          </div>
        )}

        {/* Telemetry Card */}
        <div className="pointer-events-auto bg-[var(--bg-overlay)] backdrop-blur-xl border border-[var(--border)] rounded-xl shadow-2xl p-5 flex flex-col lg:flex-row gap-6 w-full animate-in fade-in slide-in-from-bottom-8">
          
          {/* Primary Info */}
          <div className="flex-1 grid grid-cols-2 gap-4 border-b lg:border-b-0 lg:border-r border-[var(--border)] pb-4 lg:pb-0 lg:pr-6">
            <div>
              <span className="text-[10px] text-[var(--text-secondary)] uppercase font-semibold block mb-1">Driver Details</span>
              <div className="text-sm font-bold text-[var(--text-primary)] flex items-center gap-1.5">
                <User size={14} className="text-[var(--primary)]" /> {selectedVehicle.driverName}
              </div>
              <div className="text-xs text-[var(--text-secondary)] flex items-center gap-1.5 mt-1">
                <Phone size={12} /> {selectedVehicle.contactNumber}
              </div>
            </div>
            
            <div>
              <span className="text-[10px] text-[var(--text-secondary)] uppercase font-semibold block mb-1">Current Status</span>
              <div className="text-sm font-bold flex items-center gap-1.5" style={{ color: statusConfig.text }}>
                <Activity size={14} /> {statusConfig.label}
              </div>
              <div className="text-xs text-[var(--text-secondary)] mt-1">
                Last updated: {selectedVehicle.lastUpdatedTime}
              </div>
            </div>
          </div>

          {/* Routing & Arrival */}
          <div className="flex-[1.5] grid grid-cols-2 gap-4">
            <div>
              <span className="text-[10px] text-[var(--text-secondary)] uppercase font-semibold block mb-1">Current/Next Stop</span>
              <div className="text-sm font-bold text-[var(--text-primary)] flex items-start gap-1.5 leading-tight">
                <MapPin size={14} className="text-[var(--primary)] mt-0.5 flex-shrink-0" />
                <span>
                  {selectedVehicle.currentStopName || selectedVehicle.nextStopName || 'N/A'}
                  {selectedVehicle.currentStopName && <span className="block text-[10px] text-[var(--text-secondary)] font-medium mt-0.5">Currently Arrived</span>}
                </span>
              </div>
            </div>
            
            <div>
              <span className="text-[10px] text-[var(--text-secondary)] uppercase font-semibold block mb-1">ETA to Next Stop</span>
              <div className="text-lg font-bold text-[var(--text-primary)] flex items-center gap-2">
                <Clock size={18} className="text-amber-500" />
                {selectedVehicle.estimatedArrivalNextStop || '--'}
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
