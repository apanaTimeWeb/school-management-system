"use client";

import React from 'react';
import { Map, Settings, WifiOff } from 'lucide-react';

// RESPONSIBILITY: Renders the "GPS Disabled" state when integration is off

interface TransportLiveTrackingStatusProps {
  onEnable: () => void;
}

export default function TransportLiveTrackingStatus({ onEnable }: TransportLiveTrackingStatusProps) {
  return (
    <div className="w-full h-[80vh] min-h-[500px] flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-[var(--bg-card)] border border-[var(--border)] rounded-xl shadow-lg p-8 flex flex-col items-center text-center">
        
        <div className="w-24 h-24 rounded-full bg-[rgba(239,68,68,0.1)] flex items-center justify-center text-red-500 mb-6 relative">
          <Map size={40} className="opacity-80" />
          <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-[var(--bg-card)] border-2 border-[var(--border)] rounded-full flex items-center justify-center">
            <WifiOff size={18} />
          </div>
        </div>
        
        <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">Live Tracking Disabled</h2>
        
        <p className="text-sm text-[var(--text-secondary)] mb-8 leading-relaxed">
          The GPS Integration module is currently disabled. Live tracking of vehicles, speed telemetry, and geo-fencing features are suspended. 
          Please ensure your GPS API keys are configured before enabling.
        </p>
        
        <button 
          onClick={onEnable}
          className="flex items-center gap-2 px-6 py-3 rounded-md bg-[var(--primary)] text-white text-sm font-medium hover:bg-[var(--primary-hover)] transition-colors shadow-lg shadow-[var(--primary-subtle)]"
        >
          <Settings size={18} />
          Enable GPS Integration
        </button>
      </div>
    </div>
  );
}
