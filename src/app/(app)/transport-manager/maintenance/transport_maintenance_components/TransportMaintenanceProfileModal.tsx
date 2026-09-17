"use client";

import React, { useEffect } from 'react';
import { X, Wrench, Bus, Calendar, DollarSign, Settings, FileText, User } from 'lucide-react';
import type { TransportMaintenance } from '../transport_maintenance_types/transport_maintenance.types';
import { MAINTENANCE_STATUS_COLORS, MAINTENANCE_TYPE_COLORS } from '../transport_maintenance_constants/transport_maintenance.constants';

// RESPONSIBILITY: Renders the read-only detailed view modal for a maintenance record

interface TransportMaintenanceProfileModalProps {
  record: TransportMaintenance | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function TransportMaintenanceProfileModal({ record, isOpen, onClose }: TransportMaintenanceProfileModalProps) {
  
  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen || !record) return null;

  const statusConfig = MAINTENANCE_STATUS_COLORS[record.status] || MAINTENANCE_STATUS_COLORS.SCHEDULED;
  const typeConfig = MAINTENANCE_TYPE_COLORS[record.type] || MAINTENANCE_TYPE_COLORS.INSPECTION;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amount);
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
            <div className="w-12 h-12 rounded-full bg-[rgba(250,204,21,0.1)] border border-[rgba(250,204,21,0.2)] flex items-center justify-center text-[var(--primary)] flex-shrink-0">
              <Bus size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-[var(--text-primary)]">{record.vehicleNumber}</h2>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs font-bold text-[var(--primary)] tracking-wide">
                  {record.vehicleId}
                </span>
                <span className="text-[var(--text-secondary)]">•</span>
                <span className="text-xs font-medium text-[var(--text-secondary)]">
                  Maintenance Log: {record.id}
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
          
          {/* Top Status Banner */}
          <div className="flex items-center justify-between bg-[var(--bg-input)] border border-[var(--border)] p-4 rounded-lg">
            <div className="flex flex-col">
              <span className="text-[10px] text-[var(--text-secondary)] uppercase font-semibold mb-1">Service Type</span>
              <span 
                className="inline-flex items-center px-3 py-1 rounded text-sm font-bold tracking-wide w-max border"
                style={{ backgroundColor: typeConfig.bg, color: typeConfig.text, borderColor: typeConfig.text + '40' }}
              >
                {typeConfig.label}
              </span>
            </div>
            <div className="flex flex-col items-end text-right">
              <span className="text-[10px] text-[var(--text-secondary)] uppercase font-semibold mb-1">Status</span>
              <span 
                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-bold tracking-wide w-max"
                style={{ backgroundColor: statusConfig.bg, color: statusConfig.text }}
              >
                {statusConfig.label}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Workshop Details */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-[var(--text-primary)] flex items-center gap-2 border-b border-[var(--border)] pb-2">
                <Wrench size={16} className="text-[var(--primary)]" /> Workshop & Dates
              </h3>
              
              <div className="flex flex-col gap-3 text-sm">
                <div>
                  <span className="text-[var(--text-secondary)] text-xs mb-0.5 block flex items-center gap-1">Workshop Name</span>
                  <span className="font-bold text-[var(--text-primary)]">{record.workshopName}</span>
                </div>
                <div>
                  <span className="text-[var(--text-secondary)] text-xs mb-0.5 block flex items-center gap-1">
                    <User size={12} className="text-[var(--text-secondary)]"/> Assigned Mechanic
                  </span>
                  <span className="font-medium text-[var(--text-primary)]">{record.mechanicName || 'Not specified'}</span>
                </div>
                
                <div className="grid grid-cols-2 gap-2 mt-2">
                  <div className="bg-[rgba(59,130,246,0.05)] border border-[rgba(59,130,246,0.1)] p-2 rounded flex flex-col">
                    <span className="text-[10px] text-[var(--text-secondary)] mb-1 flex items-center gap-1">
                      <Calendar size={10} className="text-blue-500"/> Service Date
                    </span>
                    <span className="font-semibold text-[var(--text-primary)]">{record.serviceDate}</span>
                  </div>
                  <div className="bg-[rgba(16,185,129,0.05)] border border-[rgba(16,185,129,0.1)] p-2 rounded flex flex-col">
                    <span className="text-[10px] text-[var(--text-secondary)] mb-1 flex items-center gap-1">
                      <Calendar size={10} className="text-emerald-500"/> Next Due
                    </span>
                    <span className="font-semibold text-[var(--text-primary)]">{record.nextServiceDate || '--'}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Cost Breakdown */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-[var(--text-primary)] flex items-center gap-2 border-b border-[var(--border)] pb-2">
                <DollarSign size={16} className="text-[var(--primary)]" /> Cost & Billing
              </h3>
              
              <div className="bg-[var(--bg-input)] border border-[var(--border)] rounded-lg overflow-hidden">
                 <div className="p-3 border-b border-[var(--border)] flex justify-between items-center text-sm">
                   <span className="text-[var(--text-secondary)]">Parts Cost</span>
                   <span className="font-medium text-[var(--text-primary)]">{formatCurrency(record.partsCost)}</span>
                 </div>
                 <div className="p-3 border-b border-[var(--border)] flex justify-between items-center text-sm">
                   <span className="text-[var(--text-secondary)]">Labour Cost</span>
                   <span className="font-medium text-[var(--text-primary)]">{formatCurrency(record.labourCost)}</span>
                 </div>
                 <div className="p-3 bg-[rgba(250,204,21,0.05)] flex justify-between items-center">
                   <span className="text-xs uppercase font-bold text-[var(--text-primary)]">Total Cost</span>
                   <span className="text-lg font-bold text-[var(--primary)]">{formatCurrency(record.totalCost)}</span>
                 </div>
              </div>
            </div>
          </div>

          {/* Technical Details Section */}
          <div className="space-y-4 pt-4 border-t border-[var(--border)]">
             <h3 className="text-sm font-semibold text-[var(--text-primary)] flex items-center gap-2">
                <Settings size={16} className="text-[var(--primary)]" /> Technical Notes
             </h3>
             
             {record.partsReplaced && (
               <div>
                  <span className="text-[10px] text-[var(--text-secondary)] block mb-1 uppercase font-semibold">Parts Replaced</span>
                  <div className="flex flex-wrap gap-2">
                    {record.partsReplaced.split(',').map((part, index) => (
                      <span key={index} className="px-2.5 py-1 bg-[var(--bg-input)] border border-[var(--border)] rounded text-xs font-medium text-[var(--text-primary)]">
                        {part.trim()}
                      </span>
                    ))}
                  </div>
               </div>
             )}

             <div className="mt-3">
                <span className="text-[10px] text-[var(--text-secondary)] block mb-1 uppercase font-semibold flex items-center gap-1">
                  <FileText size={10} /> Remarks / Service History
                </span>
                {record.remarks ? (
                  <div className="bg-[var(--bg-input)] border border-[var(--border)] p-3 rounded-lg text-sm text-[var(--text-primary)] leading-relaxed">
                    {record.remarks}
                  </div>
                ) : (
                  <span className="text-[var(--text-secondary)] italic text-sm">No remarks provided for this service.</span>
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
