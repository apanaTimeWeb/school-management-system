"use client";

import React, { useEffect } from 'react';
import { X, Map, Navigation, MapPin, Bus, Users, Clock, Route as RouteIcon, Info } from 'lucide-react';
import type { TransportRoute } from '../transport_routes_types/transport_routes.types';
import { ROUTE_STATUS_COLORS } from '../transport_routes_constants/transport_routes.constants';

// RESPONSIBILITY: Renders the read-only profile view modal for a single route

interface TransportRoutesProfileModalProps {
  route: TransportRoute | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function TransportRoutesProfileModal({ route, isOpen, onClose }: TransportRoutesProfileModalProps) {
  
  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen || !route) return null;

  const statusConfig = ROUTE_STATUS_COLORS[route.status] || ROUTE_STATUS_COLORS.INACTIVE;

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
              <RouteIcon size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-[var(--text-primary)]">{route.routeName}</h2>
              <div className="flex items-center gap-2 mt-1">
                <p className="text-xs font-bold text-[var(--primary)] tracking-wide">
                  {route.routeCode}
                </p>
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
          
          {/* Journey Overview */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-[var(--text-primary)] flex items-center gap-2 border-b border-[var(--border)] pb-2">
              <Navigation size={16} className="text-[var(--primary)]" /> Journey Overview
            </h3>
            
            <div className="bg-[var(--bg-input)] border border-[var(--border)] rounded-lg p-4 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full border-2 border-emerald-500 bg-[var(--bg-page)]"></div>
                  <div className="w-0.5 h-6 bg-[var(--border)] my-1"></div>
                  <div className="w-3 h-3 rounded-full border-2 border-red-500 bg-[var(--bg-page)]"></div>
                </div>
                <div className="flex flex-col justify-between h-14 w-full">
                  <div className="text-sm font-medium text-[var(--text-primary)]">{route.startingPoint}</div>
                  <div className="text-sm font-medium text-[var(--text-primary)]">{route.endingPoint}</div>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-4 pt-3 border-t border-[var(--border)]">
                <div className="flex flex-col">
                  <span className="text-[10px] text-[var(--text-secondary)] uppercase font-semibold">Distance</span>
                  <span className="text-sm font-bold text-[var(--text-primary)]">{route.routeDistanceKm} km</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-[var(--text-secondary)] uppercase font-semibold">Duration</span>
                  <span className="text-sm font-bold text-[var(--text-primary)]">{route.estimatedDurationMins} mins</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-[var(--text-secondary)] uppercase font-semibold">Total Stops</span>
                  <span className="text-sm font-bold text-[var(--text-primary)]">{route.totalStops}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-[var(--text-secondary)] uppercase font-semibold">Students</span>
                  <span className="text-sm font-bold text-[var(--text-primary)]">{route.studentsAssigned}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Assignments */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-[var(--text-primary)] flex items-center gap-2 border-b border-[var(--border)] pb-2">
              <Bus size={16} className="text-[var(--primary)]" /> Resource Assignments
            </h3>
            
            {route.assignedVehicleNumber ? (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-[rgba(250,204,21,0.05)] p-4 rounded-lg border border-[var(--border)]">
                <div>
                  <p className="text-xs text-[var(--text-secondary)] mb-1">Assigned Vehicle</p>
                  <p className="text-sm font-bold text-[var(--text-primary)]">{route.assignedVehicleNumber}</p>
                </div>
                <div>
                  <p className="text-xs text-[var(--text-secondary)] mb-1">Driver</p>
                  <p className="text-sm font-medium text-[var(--text-primary)]">{route.assignedDriverName || '—'}</p>
                </div>
                <div>
                  <p className="text-xs text-[var(--text-secondary)] mb-1">Conductor / Attendant</p>
                  <p className="text-sm font-medium text-[var(--text-primary)]">{route.assignedConductorName || '—'}</p>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)] p-4 rounded-lg bg-[var(--bg-input)] border border-[var(--border)]">
                <Info size={16} /> Route is not currently assigned to any vehicle.
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between p-4 rounded-lg border border-[var(--border)] bg-[var(--bg-card)] mt-4">
            <div className="flex items-center gap-3">
              <MapPin size={20} className="text-[var(--primary)]" />
              <div>
                <p className="text-sm font-semibold text-[var(--text-primary)]">Route Stops & Timings</p>
                <p className="text-xs text-[var(--text-secondary)]">Manage the individual stops along this route.</p>
              </div>
            </div>
            <button className="text-sm font-medium text-[var(--primary)] hover:underline">
              Manage Stops
            </button>
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
