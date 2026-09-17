"use client";

import React, { useEffect } from 'react';
import { X, ClipboardCheck, Calendar, User, ShieldAlert, CheckCircle2, AlertTriangle, ShieldCheck } from 'lucide-react';
import type { TransportVehicleInspection, ChecklistItemStatus } from '../transport_vehicle_inspection_types/transport_vehicle_inspection.types';
import { INSPECTION_RESULT_COLORS, CHECKLIST_ITEMS } from '../transport_vehicle_inspection_constants/transport_vehicle_inspection.constants';

// RESPONSIBILITY: Renders the read-only detailed view modal for a vehicle inspection report

interface TransportVehicleInspectionProfileModalProps {
  record: TransportVehicleInspection | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function TransportVehicleInspectionProfileModal({ record, isOpen, onClose }: TransportVehicleInspectionProfileModalProps) {
  
  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen || !record) return null;

  const statusConfig = INSPECTION_RESULT_COLORS[record.overallResult] || INSPECTION_RESULT_COLORS.NEEDS_ATTENTION;
  
  // Group checklist items by status
  const passedItems = CHECKLIST_ITEMS.filter(item => record.checklist[item.key as keyof typeof record.checklist] === 'PASS');
  const failedItems = CHECKLIST_ITEMS.filter(item => record.checklist[item.key as keyof typeof record.checklist] === 'FAIL');
  const naItems = CHECKLIST_ITEMS.filter(item => record.checklist[item.key as keyof typeof record.checklist] === 'N_A');

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm motion-safe:transition-opacity">
      <div 
        className="relative w-full max-w-3xl bg-[var(--bg-overlay)] border border-[var(--border)] rounded-xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-[var(--border)] bg-[var(--bg-card)]">
          <div className="flex items-center gap-4">
            <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center flex-shrink-0 bg-[rgba(250,204,21,0.1)] border-[rgba(250,204,21,0.2)] text-[var(--primary)]`}>
              <ClipboardCheck size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-[var(--text-primary)]">{record.vehicleNumber}</h2>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs font-bold text-[var(--primary)] tracking-wide">
                  {record.vehicleId}
                </span>
                <span className="text-[var(--text-secondary)]">•</span>
                <span className="text-xs font-medium text-[var(--text-secondary)]">
                  Report ID: {record.id}
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
          
          {/* Top Banner */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
             <div className="bg-[var(--bg-input)] border border-[var(--border)] p-4 rounded-lg flex flex-col">
                <span className="text-[10px] text-[var(--text-secondary)] uppercase font-semibold mb-1 flex items-center gap-1"><Calendar size={12}/> Inspection Date</span>
                <span className="font-bold text-[var(--text-primary)]">{record.inspectionDate}</span>
             </div>
             <div className="bg-[var(--bg-input)] border border-[var(--border)] p-4 rounded-lg flex flex-col">
                <span className="text-[10px] text-[var(--text-secondary)] uppercase font-semibold mb-1 flex items-center gap-1"><User size={12}/> Inspector</span>
                <span className="font-bold text-[var(--text-primary)]">{record.inspectorName}</span>
             </div>
             <div className="p-4 rounded-lg flex flex-col justify-center border" style={{ backgroundColor: statusConfig.bg, borderColor: statusConfig.text + '30' }}>
                <span className="text-[10px] uppercase font-semibold mb-1" style={{ color: statusConfig.text }}>Overall Result</span>
                <div className="flex items-center gap-2 font-bold text-lg" style={{ color: statusConfig.text }}>
                  {record.overallResult === 'PASSED' && <ShieldCheck size={20} />}
                  {record.overallResult === 'FAILED' && <ShieldAlert size={20} />}
                  {record.overallResult === 'NEEDS_ATTENTION' && <AlertTriangle size={20} />}
                  {statusConfig.label}
                </div>
             </div>
          </div>

          {/* Checklist Breakdown */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-[var(--text-primary)] border-b border-[var(--border)] pb-2">
              Detailed Checklist Breakdown
            </h3>

            {/* FAILED Items (Show first if any) */}
            {failedItems.length > 0 && (
              <div className="bg-[rgba(239,68,68,0.05)] border border-[rgba(239,68,68,0.2)] rounded-lg p-4">
                <h4 className="text-xs font-bold text-red-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <X size={14} /> Failed Items ({failedItems.length})
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {failedItems.map(item => (
                    <div key={item.key} className="text-sm font-semibold text-red-500 flex items-center gap-2">
                       <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                       {item.label}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* PASSED Items */}
            {passedItems.length > 0 && (
              <div className="bg-[rgba(16,185,129,0.05)] border border-[rgba(16,185,129,0.2)] rounded-lg p-4 mt-4">
                <h4 className="text-xs font-bold text-emerald-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <CheckCircle2 size={14} /> Passed Items ({passedItems.length})
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {passedItems.map(item => (
                    <div key={item.key} className="text-sm font-medium text-emerald-600 flex items-center gap-2">
                       <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 opacity-50"></span>
                       {item.label}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* N/A Items */}
            {naItems.length > 0 && (
              <div className="bg-[var(--bg-input)] border border-[var(--border)] rounded-lg p-4 mt-4">
                <h4 className="text-xs font-bold text-[var(--text-secondary)] uppercase tracking-wider mb-3 flex items-center gap-2">
                  Not Applicable ({naItems.length})
                </h4>
                <div className="flex flex-wrap gap-4">
                  {naItems.map(item => (
                    <div key={item.key} className="text-sm font-medium text-[var(--text-secondary)]">
                       {item.label}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Remarks */}
          <div className="space-y-4 pt-4 border-t border-[var(--border)]">
             <h3 className="text-sm font-semibold text-[var(--text-primary)]">Remarks / Required Fixes</h3>
             {record.remarks ? (
               <div className={`p-4 rounded-lg text-sm leading-relaxed border ${
                 record.overallResult === 'FAILED' ? 'bg-[rgba(239,68,68,0.05)] border-red-500/20 text-red-500 font-medium' : 
                 record.overallResult === 'NEEDS_ATTENTION' ? 'bg-[rgba(245,158,11,0.05)] border-amber-500/20 text-amber-500 font-medium' : 
                 'bg-[var(--bg-input)] border-[var(--border)] text-[var(--text-primary)]'
               }`}>
                 {record.remarks}
               </div>
             ) : (
               <span className="text-[var(--text-secondary)] italic text-sm">No remarks provided for this inspection.</span>
             )}
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
