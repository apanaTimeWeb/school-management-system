"use client";

import React from 'react';
import { Bus, Navigation, MapPin, Clock, User, Phone } from 'lucide-react';
import type { ParentChildTransportProfile } from '../transport_parent_view_types/transport_parent_view.types';

// RESPONSIBILITY: Renders the static transport assignment info for the parent's child

interface TransportParentViewInfoCardProps {
  child: ParentChildTransportProfile;
}

export default function TransportParentViewInfoCard({ child }: TransportParentViewInfoCardProps) {
  
  return (
    <div className="bg-[var(--bg-card)] rounded-xl border border-[var(--border)] overflow-hidden">
      <div className="p-4 border-b border-[var(--border)] bg-[rgba(59,130,246,0.05)]">
        <h3 className="text-sm font-bold text-[var(--text-primary)] flex items-center gap-2">
          <Bus size={18} className="text-blue-500" />
          Transport Assignment
        </h3>
      </div>
      
      <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Routing Details */}
        <div className="space-y-4">
          <div className="flex gap-3 items-start">
            <div className="w-8 h-8 rounded-full bg-[var(--bg-page)] border border-[var(--border)] flex items-center justify-center flex-shrink-0 text-[var(--primary)]">
              <Navigation size={14} />
            </div>
            <div>
              <p className="text-[10px] uppercase font-semibold text-[var(--text-secondary)] tracking-wider mb-0.5">Assigned Route</p>
              <p className="text-sm font-bold text-[var(--text-primary)]">{child.assignedRoute}</p>
              <p className="text-xs text-[var(--text-secondary)] mt-1">Vehicle: <span className="font-medium text-[var(--text-primary)]">{child.assignedVehicle}</span></p>
            </div>
          </div>
          
          <div className="flex gap-3 items-start">
            <div className="w-8 h-8 rounded-full bg-[var(--bg-page)] border border-[var(--border)] flex items-center justify-center flex-shrink-0 text-[var(--primary)]">
              <MapPin size={14} />
            </div>
            <div>
              <p className="text-[10px] uppercase font-semibold text-[var(--text-secondary)] tracking-wider mb-0.5">Designated Stop</p>
              <p className="text-sm font-bold text-[var(--text-primary)]">{child.assignedStop}</p>
            </div>
          </div>
        </div>

        {/* Timing & Crew */}
        <div className="space-y-4 md:border-l md:border-[var(--border)] md:pl-6">
          
          <div className="flex gap-3 items-start">
            <div className="w-8 h-8 rounded-full bg-[var(--bg-page)] border border-[var(--border)] flex items-center justify-center flex-shrink-0 text-emerald-500">
              <Clock size={14} />
            </div>
            <div className="flex-1 grid grid-cols-2 gap-2">
              <div>
                <p className="text-[10px] uppercase font-semibold text-[var(--text-secondary)] tracking-wider mb-0.5">Pickup Time</p>
                <p className="text-sm font-bold text-[var(--text-primary)]">{child.pickupTime}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase font-semibold text-[var(--text-secondary)] tracking-wider mb-0.5">Drop Time</p>
                <p className="text-sm font-bold text-[var(--text-primary)]">{child.dropTime}</p>
              </div>
            </div>
          </div>

          <div className="flex gap-3 items-start">
            <div className="w-8 h-8 rounded-full bg-[var(--bg-page)] border border-[var(--border)] flex items-center justify-center flex-shrink-0 text-amber-500">
              <User size={14} />
            </div>
            <div className="flex-1 grid grid-cols-2 gap-2">
              <div>
                <p className="text-[10px] uppercase font-semibold text-[var(--text-secondary)] tracking-wider mb-0.5">Driver</p>
                <p className="text-sm font-medium text-[var(--text-primary)]">{child.driverName}</p>
                <p className="text-[10px] text-[var(--text-secondary)] flex items-center gap-1 mt-0.5"><Phone size={10}/> {child.driverContact}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase font-semibold text-[var(--text-secondary)] tracking-wider mb-0.5">Conductor</p>
                <p className="text-sm font-medium text-[var(--text-primary)]">{child.conductorName || 'N/A'}</p>
                {child.conductorContact && <p className="text-[10px] text-[var(--text-secondary)] flex items-center gap-1 mt-0.5"><Phone size={10}/> {child.conductorContact}</p>}
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
