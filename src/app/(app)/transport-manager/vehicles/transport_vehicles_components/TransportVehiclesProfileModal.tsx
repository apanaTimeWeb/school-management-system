"use client";

import React, { useEffect } from 'react';
import { X, Bus, Map, FileText, Settings, Key, Phone, User, Activity } from 'lucide-react';
import type { TransportVehicle } from '../transport_vehicles_types/transport_vehicles.types';
import { VEHICLE_STATUS_COLORS } from '../transport_vehicles_constants/transport_vehicles.constants';

// RESPONSIBILITY: Renders the read-only view modal for a single vehicle

interface TransportVehiclesProfileModalProps {
  vehicle: TransportVehicle | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function TransportVehiclesProfileModal({ vehicle, isOpen, onClose }: TransportVehiclesProfileModalProps) {
  
  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen || !vehicle) return null;

  const statusConfig = VEHICLE_STATUS_COLORS[vehicle.status] || VEHICLE_STATUS_COLORS.INACTIVE;

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm motion-safe:transition-opacity">
      <div 
        className="relative w-full max-w-2xl bg-[var(--bg-overlay)] border border-[var(--border)] rounded-xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-[var(--border)] bg-[var(--bg-card)]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[rgba(250,204,21,0.1)] border border-[rgba(250,204,21,0.2)] flex items-center justify-center text-[var(--primary)]">
              <Bus size={20} />
            </div>
            <div>
              <h2 className="text-lg font-bold text-[var(--text-primary)]">{vehicle.vehicleNumber}</h2>
              <p className="text-xs text-[var(--text-secondary)]">{vehicle.registrationNumber}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span 
              className="px-3 py-1 text-xs font-bold rounded-full"
              style={{ backgroundColor: statusConfig.bg, color: statusConfig.text }}
            >
              {statusConfig.label}
            </span>
            <button 
              onClick={onClose}
              className="p-1.5 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-input)] rounded-md transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* General Info */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-[var(--text-primary)] flex items-center gap-2 border-b border-[var(--border)] pb-2">
                <Settings size={16} className="text-[var(--primary)]" /> General Details
              </h3>
              
              <div className="grid grid-cols-2 gap-y-3 gap-x-2 text-sm">
                <div className="text-[var(--text-secondary)]">Vehicle Type:</div>
                <div className="font-medium text-[var(--text-primary)]">{vehicle.vehicleType}</div>
                
                <div className="text-[var(--text-secondary)]">Capacity:</div>
                <div className="font-medium text-[var(--text-primary)]">{vehicle.seatingCapacity} Seats</div>
                
                <div className="text-[var(--text-secondary)]">Manufacturer:</div>
                <div className="font-medium text-[var(--text-primary)]">{vehicle.manufacturer}</div>
                
                <div className="text-[var(--text-secondary)]">Model:</div>
                <div className="font-medium text-[var(--text-primary)]">{vehicle.model}</div>
                
                <div className="text-[var(--text-secondary)]">Fuel Type:</div>
                <div className="font-medium text-[var(--text-primary)]">{vehicle.fuelType}</div>
                
                <div className="text-[var(--text-secondary)]">Purchase Date:</div>
                <div className="font-medium text-[var(--text-primary)]">{vehicle.purchaseDate}</div>
              </div>
            </div>

            {/* Assignments */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-[var(--text-primary)] flex items-center gap-2 border-b border-[var(--border)] pb-2">
                <Activity size={16} className="text-[var(--primary)]" /> Assignments & Tech
              </h3>
              
              <div className="grid grid-cols-2 gap-y-3 gap-x-2 text-sm">
                <div className="text-[var(--text-secondary)]">Assigned Route:</div>
                <div className="font-medium text-[var(--text-primary)] flex items-center gap-1">
                  <Map size={14} className="text-[var(--text-secondary)]"/> 
                  {vehicle.assignedRouteName || '—'}
                </div>
                
                <div className="text-[var(--text-secondary)]">Driver:</div>
                <div className="font-medium text-[var(--text-primary)] flex items-center gap-1">
                  <User size={14} className="text-[var(--text-secondary)]"/> 
                  {vehicle.assignedDriverName || '—'}
                </div>
                
                <div className="text-[var(--text-secondary)]">Conductor:</div>
                <div className="font-medium text-[var(--text-primary)]">{vehicle.assignedConductorName || '—'}</div>
                
                <div className="text-[var(--text-secondary)]">GPS Device ID:</div>
                <div className="font-medium text-[var(--text-primary)]">{vehicle.gpsDeviceId || '—'}</div>
                
                <div className="text-[var(--text-secondary)]">Documents:</div>
                <div className="font-medium text-[var(--text-primary)]">
                  {vehicle.documentsComplete ? (
                    <span className="text-emerald-500">Complete & Verified</span>
                  ) : (
                    <span className="text-amber-500">Pending Uploads</span>
                  )}
                </div>
              </div>
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
