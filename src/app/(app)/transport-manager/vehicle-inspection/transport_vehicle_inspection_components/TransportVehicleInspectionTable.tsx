"use client";

import React from 'react';
import { Edit, ClipboardCheck, Calendar, User, ShieldAlert, CheckCircle2, AlertTriangle, ShieldCheck } from 'lucide-react';
import type { TransportVehicleInspection } from '../transport_vehicle_inspection_types/transport_vehicle_inspection.types';
import { INSPECTION_RESULT_COLORS } from '../transport_vehicle_inspection_constants/transport_vehicle_inspection.constants';

// RESPONSIBILITY: Renders the vehicle inspection records data table

interface TransportVehicleInspectionTableProps {
  records: TransportVehicleInspection[];
  onView: (record: TransportVehicleInspection) => void;
  onEdit: (record: TransportVehicleInspection) => void;
}

export default function TransportVehicleInspectionTable({ records, onView, onEdit }: TransportVehicleInspectionTableProps) {
  
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-[rgba(250,204,21,0.05)] border-b border-[var(--border)]">
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider">Vehicle Details</th>
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider">Inspection Info</th>
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider">Checklist Overview</th>
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider text-center">Result</th>
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {records.length > 0 ? (
            records.map((record) => {
              const statusConfig = INSPECTION_RESULT_COLORS[record.overallResult] || INSPECTION_RESULT_COLORS.NEEDS_ATTENTION;
              
              // Calc checklist metrics
              const totalItems = Object.keys(record.checklist).length;
              const passedItems = Object.values(record.checklist).filter(v => v === 'PASS').length;
              const failedItems = Object.values(record.checklist).filter(v => v === 'FAIL').length;
              const naItems = Object.values(record.checklist).filter(v => v === 'N_A').length;

              return (
                <tr 
                  key={record.id} 
                  onClick={() => onView(record)}
                  className={`border-b border-[var(--border)] hover:bg-[rgba(250,204,21,0.05)] motion-safe:transition-colors cursor-pointer group ${record.overallResult === 'FAILED' ? 'bg-[rgba(239,68,68,0.02)]' : ''}`}
                >
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[rgba(250,204,21,0.1)] border border-[rgba(250,204,21,0.2)] flex items-center justify-center text-[var(--primary)] flex-shrink-0">
                        <ClipboardCheck size={14} />
                      </div>
                      <div className="flex flex-col justify-center min-w-0">
                        <div className="text-sm font-bold text-[var(--text-primary)] truncate">{record.vehicleNumber}</div>
                        <div className="text-[10px] text-[var(--text-secondary)] mt-0.5 truncate">{record.vehicleId}</div>
                      </div>
                    </div>
                  </td>
                  
                  <td className="py-3 px-4">
                    <div className="flex flex-col gap-1.5">
                       <div className="text-xs text-[var(--text-primary)] flex items-center gap-1.5 whitespace-nowrap">
                        <Calendar size={12} className="text-blue-500"/> {record.inspectionDate}
                      </div>
                      <div className="text-xs text-[var(--text-primary)] flex items-center gap-1.5 whitespace-nowrap">
                        <User size={12} className="text-amber-500"/> {record.inspectorName}
                      </div>
                    </div>
                  </td>

                  <td className="py-3 px-4">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        {passedItems > 0 && <span className="text-[10px] font-bold text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded">{passedItems} Pass</span>}
                        {failedItems > 0 && <span className="text-[10px] font-bold text-red-500 bg-red-500/10 px-1.5 py-0.5 rounded">{failedItems} Fail</span>}
                        {naItems > 0 && <span className="text-[10px] font-bold text-[var(--text-secondary)] bg-[var(--bg-input)] px-1.5 py-0.5 rounded">{naItems} N/A</span>}
                      </div>
                      
                      <div className="w-full max-w-[150px] h-1.5 bg-[var(--bg-input)] rounded-full overflow-hidden mt-1 flex">
                         {passedItems > 0 && <div className="h-full bg-emerald-500" style={{ width: `${(passedItems/totalItems)*100}%` }}></div>}
                         {failedItems > 0 && <div className="h-full bg-red-500" style={{ width: `${(failedItems/totalItems)*100}%` }}></div>}
                         {naItems > 0 && <div className="h-full bg-gray-500" style={{ width: `${(naItems/totalItems)*100}%` }}></div>}
                      </div>
                    </div>
                  </td>

                  <td className="py-3 px-4 text-center">
                    <div className="flex flex-col items-center gap-1">
                      <span 
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider whitespace-nowrap"
                        style={{ backgroundColor: statusConfig.bg, color: statusConfig.text, border: `1px solid ${statusConfig.text}40` }}
                      >
                        {record.overallResult === 'PASSED' && <ShieldCheck size={12} />}
                        {record.overallResult === 'FAILED' && <ShieldAlert size={12} />}
                        {record.overallResult === 'NEEDS_ATTENTION' && <AlertTriangle size={12} />}
                        {statusConfig.label}
                      </span>
                    </div>
                  </td>

                  <td className="py-3 px-4 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 motion-safe:transition-opacity">
                      <button 
                        onClick={(e) => { e.stopPropagation(); onEdit(record); }}
                        className="p-1.5 rounded-md hover:bg-[var(--bg-input)] text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors"
                        aria-label="Edit record"
                        title="Edit Record"
                      >
                        <Edit size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={5} className="py-12 text-center">
                <div className="flex flex-col items-center justify-center text-[var(--text-secondary)]">
                  <span className="text-4xl mb-3 opacity-20">📋</span>
                  <p className="text-sm">No inspection records found for this criteria.</p>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
