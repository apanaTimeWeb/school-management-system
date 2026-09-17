"use client";

import React from 'react';
import { Edit, AlertTriangle, Calendar, MapPin, Bus, ShieldAlert } from 'lucide-react';
import type { TransportIncident } from '../transport_safety_types/transport_safety.types';
import { SEVERITY_COLORS, INCIDENT_STATUS_COLORS, INCIDENT_TYPE_LABELS } from '../transport_safety_constants/transport_safety.constants';

// RESPONSIBILITY: Renders the safety & emergency incidents data table

interface TransportSafetyTableProps {
  records: TransportIncident[];
  onView: (record: TransportIncident) => void;
  onEdit: (record: TransportIncident) => void;
}

export default function TransportSafetyTable({ records, onView, onEdit }: TransportSafetyTableProps) {
  
  const formatDate = (isoString: string) => {
    try {
      const date = new Date(isoString);
      return date.toLocaleString('en-IN', {
        month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
      });
    } catch {
      return isoString;
    }
  };

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-[rgba(250,204,21,0.05)] border-b border-[var(--border)]">
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider">Incident Details</th>
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider">Location & Time</th>
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider">Severity</th>
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider text-center">Status</th>
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {records.length > 0 ? (
            records.map((record) => {
              const severityConfig = SEVERITY_COLORS[record.severity] || SEVERITY_COLORS.MEDIUM;
              const statusConfig = INCIDENT_STATUS_COLORS[record.status] || INCIDENT_STATUS_COLORS.REPORTED;
              
              const isCritical = record.severity === 'CRITICAL' || record.severity === 'HIGH';

              return (
                <tr 
                  key={record.id} 
                  onClick={() => onView(record)}
                  className={`border-b border-[var(--border)] hover:bg-[rgba(250,204,21,0.05)] motion-safe:transition-colors cursor-pointer group ${isCritical && record.status !== 'RESOLVED' ? 'bg-[rgba(239,68,68,0.02)]' : ''}`}
                >
                  <td className="py-3 px-4">
                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-center gap-2">
                        {isCritical && <ShieldAlert size={14} className="text-red-500" />}
                        <span className="text-sm font-bold text-[var(--text-primary)]">
                          {INCIDENT_TYPE_LABELS[record.incidentType]}
                        </span>
                      </div>
                      <div className="text-[10px] text-[var(--text-secondary)] flex items-center gap-1.5 whitespace-nowrap">
                        <Bus size={10} /> {record.vehicleNumber || 'No Vehicle'} • {record.id}
                      </div>
                    </div>
                  </td>
                  
                  <td className="py-3 px-4">
                    <div className="flex flex-col gap-1.5">
                       <div className="text-xs text-[var(--text-primary)] flex items-center gap-1.5 whitespace-nowrap">
                        <Calendar size={12} className="text-[var(--primary)]"/> {formatDate(record.dateTime)}
                      </div>
                      <div className="text-[11px] text-[var(--text-secondary)] flex items-center gap-1.5 truncate max-w-[200px]" title={record.location}>
                        <MapPin size={12} className="text-red-500"/> {record.location}
                      </div>
                    </div>
                  </td>

                  <td className="py-3 px-4">
                    <span 
                      className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider"
                      style={{ backgroundColor: severityConfig.bg, color: severityConfig.text, border: `1px solid ${severityConfig.text}30` }}
                    >
                      {severityConfig.label}
                    </span>
                    {record.followUpRequired && (
                      <div className="text-[9px] text-[var(--text-secondary)] mt-1 font-semibold uppercase flex items-center gap-1">
                        <AlertTriangle size={8} /> Follow-up Req
                      </div>
                    )}
                  </td>

                  <td className="py-3 px-4 text-center">
                    <div className="flex flex-col items-center gap-1">
                      <span 
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wide whitespace-nowrap"
                        style={{ backgroundColor: statusConfig.bg, color: statusConfig.text }}
                      >
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
                  <span className="text-4xl mb-3 opacity-20">🚨</span>
                  <p className="text-sm">No safety incidents logged.</p>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
