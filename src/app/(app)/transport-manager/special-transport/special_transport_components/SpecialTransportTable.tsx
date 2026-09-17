"use client";

import React from 'react';
import { Eye, MapPin, Users, Calendar, Bus, Clock } from 'lucide-react';
import type { SpecialTransportRecord } from '../special_transport_types/special_transport.types';
import { TRIP_TYPE_CONFIGS, TRIP_STATUS_COLORS } from '../special_transport_constants/special_transport.constants';

// RESPONSIBILITY: Renders the table of special/event transport trips

interface SpecialTransportTableProps {
  records: SpecialTransportRecord[];
  onView: (record: SpecialTransportRecord) => void;
}

export default function SpecialTransportTable({ records, onView }: SpecialTransportTableProps) {
  
  const formatDate = (isoDate: string) => {
    return new Date(isoDate).toLocaleDateString('en-IN', {
      day: 'numeric', month: 'short', year: 'numeric'
    });
  };

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-[rgba(250,204,21,0.05)] border-b border-[var(--border)]">
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider">Trip Details</th>
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider">Destination & Time</th>
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider">Logistics</th>
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider text-center">Permissions</th>
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider text-center">Status</th>
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {records.length > 0 ? (
            records.map((record) => {
              const typeConfig = TRIP_TYPE_CONFIGS[record.tripType] || TRIP_TYPE_CONFIGS.SPECIAL_PICKUP_DROP;
              const statusConfig = TRIP_STATUS_COLORS[record.status] || TRIP_STATUS_COLORS.SCHEDULED;

              return (
                <tr 
                  key={record.id} 
                  onClick={() => onView(record)}
                  className="border-b border-[var(--border)] hover:bg-[rgba(250,204,21,0.05)] motion-safe:transition-colors cursor-pointer group"
                >
                  <td className="py-3 px-4 max-w-[250px]">
                    <div className="flex flex-col gap-1.5">
                      <div className="text-sm font-bold text-[var(--text-primary)] truncate" title={record.tripName}>
                        {record.tripName}
                      </div>
                      <div className="flex items-center gap-2">
                        <span 
                          className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded border whitespace-nowrap"
                          style={{ backgroundColor: typeConfig.bg, color: typeConfig.text, borderColor: typeConfig.text + '30' }}
                        >
                          {typeConfig.label}
                        </span>
                        <span className="text-[10px] text-[var(--text-secondary)] font-mono">{record.id}</span>
                      </div>
                    </div>
                  </td>
                  
                  <td className="py-3 px-4 max-w-[200px]">
                    <div className="flex flex-col gap-1.5">
                       <div className="text-xs font-semibold text-[var(--text-primary)] flex items-center gap-1.5 truncate" title={record.destination}>
                        <MapPin size={12} className="text-[var(--primary)] flex-shrink-0"/> {record.destination}
                      </div>
                      <div className="text-[10px] text-[var(--text-secondary)] flex items-center gap-2">
                        <span className="flex items-center gap-1"><Calendar size={10} /> {formatDate(record.scheduleDate)}</span>
                        <span className="flex items-center gap-1"><Clock size={10} /> {record.departureTime}</span>
                      </div>
                    </div>
                  </td>

                  <td className="py-3 px-4">
                    <div className="flex flex-col gap-1">
                      <div className="text-xs text-[var(--text-primary)] flex items-center gap-1.5 whitespace-nowrap">
                        <Bus size={12} className="text-[var(--text-secondary)]"/> {record.assignedVehicle}
                      </div>
                      <span className="text-[10px] text-[var(--text-secondary)] flex items-center gap-1">
                        <Users size={10}/> {record.studentCount} Students • {record.accompanyingStaff.split(',').length} Staff
                      </span>
                    </div>
                  </td>

                  <td className="py-3 px-4 text-center">
                    <div className="flex justify-center">
                       {record.permissionStatus === 'APPROVED' && <span className="text-[10px] font-bold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">APPROVED</span>}
                       {record.permissionStatus === 'PARTIAL' && <span className="text-[10px] font-bold text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">PARTIAL</span>}
                       {record.permissionStatus === 'PENDING' && <span className="text-[10px] font-bold text-gray-500 bg-gray-500/10 px-2 py-0.5 rounded border border-gray-500/20">PENDING</span>}
                    </div>
                  </td>

                  <td className="py-3 px-4 text-center">
                    <div className="flex justify-center">
                      <span 
                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide whitespace-nowrap"
                        style={{ backgroundColor: statusConfig.bg, color: statusConfig.text, border: `1px solid ${statusConfig.text}40` }}
                      >
                        {statusConfig.label}
                      </span>
                    </div>
                  </td>

                  <td className="py-3 px-4 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 motion-safe:transition-opacity">
                      <button 
                        onClick={(e) => { e.stopPropagation(); onView(record); }}
                        className="p-1.5 rounded-md hover:bg-[var(--bg-input)] text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors"
                        title="View Details"
                      >
                        <Eye size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={6} className="py-12 text-center">
                <div className="flex flex-col items-center justify-center text-[var(--text-secondary)]">
                  <span className="text-4xl mb-3 opacity-20">🎫</span>
                  <p className="text-sm">No special or event transport records found.</p>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
