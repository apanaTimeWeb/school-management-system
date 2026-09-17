"use client";

import React, { useEffect } from 'react';
import { X, Fuel, Calendar, DollarSign, Activity, AlertTriangle, MapPin, Gauge } from 'lucide-react';
import type { TransportFuelLog } from '../transport_fuel_management_types/transport_fuel_management.types';
import { FUEL_TYPE_COLORS } from '../transport_fuel_management_constants/transport_fuel_management.constants';

// RESPONSIBILITY: Renders the read-only detailed view modal for a fuel log (including suspicious mileage alerts)

interface TransportFuelManagementProfileModalProps {
  record: TransportFuelLog | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function TransportFuelManagementProfileModal({ record, isOpen, onClose }: TransportFuelManagementProfileModalProps) {
  
  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen || !record) return null;

  const typeConfig = FUEL_TYPE_COLORS[record.fuelType] || FUEL_TYPE_COLORS.DIESEL;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 2 }).format(amount);
  };

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm motion-safe:transition-opacity">
      <div 
        className="relative w-full max-w-2xl bg-[var(--bg-overlay)] border border-[var(--border)] rounded-xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-[var(--border)] bg-[var(--bg-card)]">
          <div className="flex items-center gap-4">
            <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center flex-shrink-0`} style={{ backgroundColor: typeConfig.bg, borderColor: typeConfig.text + '40', color: typeConfig.text }}>
              <Fuel size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-[var(--text-primary)]">{record.vehicleNumber}</h2>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs font-bold text-[var(--primary)] tracking-wide">
                  {record.vehicleId}
                </span>
                <span className="text-[var(--text-secondary)]">•</span>
                <span className="text-xs font-medium text-[var(--text-secondary)]">
                  Log ID: {record.id}
                </span>
                <span className="text-[var(--text-secondary)]">•</span>
                <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded border" style={{ backgroundColor: typeConfig.bg, color: typeConfig.text, borderColor: typeConfig.text + '40' }}>
                  {typeConfig.label}
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
          
          {/* Suspicious Alert Banner */}
          {record.isSuspicious && (
            <div className="bg-[rgba(239,68,68,0.1)] border border-red-500/30 rounded-lg p-4 flex gap-3 animate-in fade-in slide-in-from-top-2">
              <AlertTriangle size={24} className="text-red-500 flex-shrink-0" />
              <div>
                <h4 className="text-sm font-bold text-red-500 uppercase tracking-wider mb-1">Suspicious Mileage Alert</h4>
                <p className="text-xs text-[var(--text-primary)] font-medium">The system detected a significant drop in mileage ({record.mileageKmpl?.toFixed(2)} km/L) compared to this vehicle's historical average. This could indicate fuel theft, engine issues, or incorrect odometer entry.</p>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Pump Details & Dates */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-[var(--text-primary)] flex items-center gap-2 border-b border-[var(--border)] pb-2">
                <MapPin size={16} className="text-[var(--primary)]" /> Station & Date
              </h3>
              
              <div className="flex flex-col gap-3 text-sm">
                <div>
                  <span className="text-[var(--text-secondary)] text-xs mb-0.5 block">Fuel Station / Pump</span>
                  <span className="font-bold text-[var(--text-primary)]">{record.fuelStation}</span>
                </div>
                
                <div className="bg-[var(--bg-input)] border border-[var(--border)] p-3 rounded flex flex-col w-max pr-8">
                  <span className="text-[10px] text-[var(--text-secondary)] mb-1 flex items-center gap-1 uppercase font-semibold">
                    <Calendar size={10} className="text-blue-500"/> Date of Entry
                  </span>
                  <span className="font-bold text-[var(--text-primary)] text-lg">{record.date}</span>
                </div>
              </div>
            </div>

            {/* Cost Breakdown */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-[var(--text-primary)] flex items-center gap-2 border-b border-[var(--border)] pb-2">
                <DollarSign size={16} className="text-[var(--primary)]" /> Billing Summary
              </h3>
              
              <div className="bg-[var(--bg-input)] border border-[var(--border)] rounded-lg overflow-hidden">
                 <div className="p-3 border-b border-[var(--border)] flex justify-between items-center text-sm">
                   <span className="text-[var(--text-secondary)]">Quantity Filled</span>
                   <span className="font-medium text-[var(--text-primary)]">{record.quantityLiters} <span className="text-xs">Ltrs</span></span>
                 </div>
                 <div className="p-3 border-b border-[var(--border)] flex justify-between items-center text-sm">
                   <span className="text-[var(--text-secondary)]">Rate per Litre</span>
                   <span className="font-medium text-[var(--text-primary)]">{formatCurrency(record.ratePerLiter)}</span>
                 </div>
                 <div className="p-3 bg-[rgba(250,204,21,0.05)] flex justify-between items-center">
                   <span className="text-xs uppercase font-bold text-[var(--text-primary)]">Total Cost</span>
                   <span className="text-lg font-bold text-[var(--primary)]">{formatCurrency(record.totalCost)}</span>
                 </div>
              </div>
            </div>
          </div>

          {/* Telemetry / Mileage Calculation */}
          <div className="space-y-4 pt-4 border-t border-[var(--border)]">
             <h3 className="text-sm font-semibold text-[var(--text-primary)] flex items-center gap-2">
                <Gauge size={16} className="text-[var(--primary)]" /> Odometer & Mileage Calculation
             </h3>
             
             <div className="grid grid-cols-3 gap-3">
               <div className="border border-[var(--border)] bg-[var(--bg-card)] p-3 rounded-lg flex flex-col items-center justify-center text-center">
                  <span className="text-[9px] uppercase font-bold text-[var(--text-secondary)] mb-1 tracking-wider">Previous Odo</span>
                  <span className="text-sm font-medium text-[var(--text-primary)] font-mono">{record.previousOdometer || 'N/A'}</span>
               </div>
               <div className="border border-[var(--border)] bg-[var(--bg-card)] p-3 rounded-lg flex flex-col items-center justify-center text-center shadow-[inset_0_2px_10px_rgba(0,0,0,0.1)]">
                  <span className="text-[9px] uppercase font-bold text-[var(--primary)] mb-1 tracking-wider">Current Odo</span>
                  <span className="text-lg font-bold text-[var(--text-primary)] font-mono">{record.odometerReading}</span>
               </div>
               <div className={`border border-[var(--border)] p-3 rounded-lg flex flex-col items-center justify-center text-center ${record.isSuspicious ? 'bg-red-500/10' : 'bg-emerald-500/10'}`}>
                  <span className={`text-[9px] uppercase font-bold mb-1 tracking-wider ${record.isSuspicious ? 'text-red-500' : 'text-emerald-500'}`}>Calculated Mileage</span>
                  {record.mileageKmpl ? (
                    <span className={`text-lg font-bold ${record.isSuspicious ? 'text-red-500' : 'text-emerald-500'}`}>
                      {record.mileageKmpl.toFixed(2)} <span className="text-[10px]">km/L</span>
                    </span>
                  ) : (
                    <span className="text-sm font-medium text-[var(--text-secondary)]">N/A</span>
                  )}
               </div>
             </div>

             <div className="mt-3">
                <span className="text-[10px] text-[var(--text-secondary)] block mb-1 uppercase font-semibold">Remarks</span>
                {record.remarks ? (
                  <div className="bg-[var(--bg-input)] border border-[var(--border)] p-3 rounded-lg text-sm text-[var(--text-primary)] leading-relaxed">
                    {record.remarks}
                  </div>
                ) : (
                  <span className="text-[var(--text-secondary)] italic text-sm">No remarks provided for this entry.</span>
                )}
             </div>
          </div>

        </div>

        {/* Footer Actions */}
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
