"use client";

import React, { useState } from 'react';
import { ToggleRight, ToggleLeft } from 'lucide-react';
import TransportLiveTrackingSidebar from './TransportLiveTrackingSidebar';
import TransportLiveTrackingMap from './TransportLiveTrackingMap';
import TransportLiveTrackingStatus from './TransportLiveTrackingStatus';
import { MOCK_LIVE_VEHICLES } from '../transport_live_tracking_constants/transport_live_tracking.constants';
import type { LiveVehicle } from '../transport_live_tracking_types/transport_live_tracking.types';

// RESPONSIBILITY: Main orchestrator for Live Tracking module

export default function TransportLiveTrackingMain() {
  const [isGpsEnabled, setIsGpsEnabled] = useState(true); // Toggle state for conditional rendering
  
  const [vehicles] = useState<LiveVehicle[]>(MOCK_LIVE_VEHICLES);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedVehicleId, setSelectedVehicleId] = useState<string | null>(vehicles.length > 0 ? vehicles[0].id : null);

  // Filter
  const filteredVehicles = vehicles.filter(v => {
    return v.vehicleNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
           v.routeName.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const selectedVehicle = vehicles.find(v => v.id === selectedVehicleId) || null;

  // Toggle Action
  const toggleGps = () => setIsGpsEnabled(!isGpsEnabled);

  return (
    <div className="flex flex-col w-full h-[calc(100vh-2rem)] min-h-[700px] space-y-4">
      
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-[var(--bg-card)] p-4 rounded-xl border border-[var(--border)] shrink-0">
        <div>
          <h1 className="text-[22px] font-bold text-[var(--text-primary)] flex items-center gap-2">
            <span className="text-2xl">🛰️</span> Live GPS Tracking
          </h1>
          <p className="text-[14px] text-[var(--text-secondary)] mt-1">
            Real-time telemetry, geo-fencing, and live route status for all active vehicles.
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold text-[var(--text-secondary)]">
            Integration Status:
          </span>
          <button 
            onClick={toggleGps}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full border transition-colors ${
              isGpsEnabled 
                ? 'bg-[rgba(34,197,94,0.1)] border-emerald-500/50 text-emerald-500' 
                : 'bg-[rgba(239,68,68,0.1)] border-red-500/50 text-red-500'
            }`}
          >
            {isGpsEnabled ? (
              <><ToggleRight size={20} /> <span className="text-sm font-bold tracking-wide">ENABLED</span></>
            ) : (
              <><ToggleLeft size={20} /> <span className="text-sm font-bold tracking-wide">DISABLED</span></>
            )}
          </button>
        </div>
      </div>

      {/* Conditional Rendering Area */}
      {!isGpsEnabled ? (
        <TransportLiveTrackingStatus onEnable={() => setIsGpsEnabled(true)} />
      ) : (
        <div className="flex flex-col lg:flex-row flex-1 bg-[var(--bg-card)] rounded-xl border border-[var(--border)] overflow-hidden min-h-0">
          <TransportLiveTrackingSidebar 
            vehicles={filteredVehicles}
            selectedVehicleId={selectedVehicleId}
            onSelectVehicle={setSelectedVehicleId}
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
          />
          <TransportLiveTrackingMap 
            selectedVehicle={selectedVehicle}
          />
        </div>
      )}
      
    </div>
  );
}
