"use client";

import React from 'react';
import { Bus, Navigation, Clock, Activity, ShieldAlert, Navigation2, Search, MapPin } from 'lucide-react';
import type { LiveVehicle } from '../transport_live_tracking_types/transport_live_tracking.types';
import { TRACKING_STATUS_COLORS } from '../transport_live_tracking_constants/transport_live_tracking.constants';

// RESPONSIBILITY: Renders the sidebar list of vehicles and their live mini-stats

interface TransportLiveTrackingSidebarProps {
  vehicles: LiveVehicle[];
  selectedVehicleId: string | null;
  onSelectVehicle: (id: string) => void;
  searchTerm: string;
  onSearchChange: (val: string) => void;
}

export default function TransportLiveTrackingSidebar({ vehicles, selectedVehicleId, onSelectVehicle, searchTerm, onSearchChange }: TransportLiveTrackingSidebarProps) {
  
  return (
    <div className="w-full lg:w-96 flex-shrink-0 bg-[var(--bg-card)] border-r border-[var(--border)] flex flex-col h-[600px] lg:h-full z-10">
      
      {/* Search Header */}
      <div className="p-4 border-b border-[var(--border)]">
        <h2 className="text-lg font-bold text-[var(--text-primary)] flex items-center gap-2 mb-4">
          <Navigation2 size={20} className="text-[var(--primary)]" />
          Active Fleet
        </h2>
        <div className="relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]" />
          <input
            type="text"
            placeholder="Search vehicle or route..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full bg-[var(--bg-input)] border border-[var(--border)] rounded-md py-2 pl-9 pr-3 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
          />
        </div>
      </div>

      {/* Vehicle List */}
      <div className="flex-1 overflow-y-auto p-2 space-y-2">
        {vehicles.length > 0 ? (
          vehicles.map((vehicle) => {
            const isSelected = vehicle.id === selectedVehicleId;
            const statusConfig = TRACKING_STATUS_COLORS[vehicle.trackingStatus] || TRACKING_STATUS_COLORS.OFFLINE;

            return (
              <div 
                key={vehicle.id}
                onClick={() => onSelectVehicle(vehicle.id)}
                className={`p-3 rounded-lg border cursor-pointer transition-all ${
                  isSelected 
                    ? 'bg-[rgba(250,204,21,0.1)] border-[var(--primary)] shadow-md' 
                    : 'bg-[var(--bg-card)] border-[var(--border)] hover:bg-[var(--bg-input)]'
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-2">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${isSelected ? 'bg-[var(--primary)] text-white' : 'bg-[var(--bg-input)] text-[var(--text-primary)] border border-[var(--border)]'}`}>
                      <Bus size={14} />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[var(--text-primary)]">{vehicle.vehicleNumber}</h3>
                      <p className="text-[10px] text-[var(--text-secondary)] truncate max-w-[120px]">{vehicle.routeName}</p>
                    </div>
                  </div>
                  <span 
                    className="px-2 py-0.5 text-[9px] font-bold rounded uppercase tracking-wider"
                    style={{ backgroundColor: statusConfig.bg, color: statusConfig.text }}
                  >
                    {statusConfig.label}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 mt-3">
                  <div className="flex items-center gap-1.5 text-xs">
                    <Activity size={12} className={vehicle.speedKmh > 0 ? 'text-emerald-500' : 'text-[var(--text-secondary)]'} />
                    <span className="text-[var(--text-primary)]">{vehicle.speedKmh} km/h</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs">
                    <Clock size={12} className="text-amber-500" />
                    <span className="text-[var(--text-primary)] truncate" title={vehicle.estimatedArrivalNextStop || 'N/A'}>
                      {vehicle.estimatedArrivalNextStop || '--'}
                    </span>
                  </div>
                </div>

                {/* Warnings */}
                {(vehicle.routeDeviationWarning || vehicle.geoFenceViolation) && (
                  <div className="mt-3 pt-2 border-t border-[var(--border)] flex flex-wrap gap-2">
                    {vehicle.routeDeviationWarning && (
                      <span className="inline-flex items-center gap-1 text-[10px] text-red-500 bg-[rgba(239,68,68,0.1)] px-1.5 py-0.5 rounded">
                        <ShieldAlert size={10} /> Route Deviated
                      </span>
                    )}
                    {vehicle.geoFenceViolation && (
                      <span className="inline-flex items-center gap-1 text-[10px] text-orange-500 bg-[rgba(249,115,22,0.1)] px-1.5 py-0.5 rounded">
                        <MapPin size={10} /> Geo-Fence Breach
                      </span>
                    )}
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="flex flex-col items-center justify-center h-40 text-[var(--text-secondary)] text-center p-4">
            <Bus size={32} className="mb-2 opacity-20" />
            <p className="text-sm">No vehicles found matching criteria.</p>
          </div>
        )}
      </div>

    </div>
  );
}
