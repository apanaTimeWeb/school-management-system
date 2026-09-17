"use client";

import React from 'react';
import { Edit, Trash2, MapPin, Route as RouteIcon, Users, Clock, Hash } from 'lucide-react';
import type { TransportStop } from '../transport_stops_types/transport_stops.types';
import { STOP_STATUS_COLORS } from '../transport_stops_constants/transport_stops.constants';

// RESPONSIBILITY: Renders the stops data table

interface TransportStopsTableProps {
  stops: TransportStop[];
  onView: (stop: TransportStop) => void;
  onEdit: (stop: TransportStop) => void;
  onDelete: (stopId: string) => void;
}

export default function TransportStopsTable({ stops, onView, onEdit, onDelete }: TransportStopsTableProps) {
  
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-[rgba(250,204,21,0.05)] border-b border-[var(--border)]">
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider w-16 text-center">Seq</th>
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider w-48">Stop Name & Location</th>
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider">Assigned Route</th>
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider">Timings (Pick/Drop)</th>
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider">Students</th>
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider text-center">Status</th>
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {stops.length > 0 ? (
            stops.map((stop) => {
              const statusConfig = STOP_STATUS_COLORS[stop.status] || STOP_STATUS_COLORS.INACTIVE;

              return (
                <tr 
                  key={stop.id} 
                  onClick={() => onView(stop)}
                  className="border-b border-[var(--border)] hover:bg-[rgba(250,204,21,0.05)] motion-safe:transition-colors cursor-pointer group"
                >
                  <td className="py-3 px-4 text-center">
                    <div className="w-7 h-7 mx-auto rounded bg-[var(--bg-input)] border border-[var(--border)] flex items-center justify-center text-xs font-bold text-[var(--text-primary)]">
                      {stop.sequence}
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="text-sm font-semibold text-[var(--text-primary)] flex items-center gap-1.5 truncate max-w-[200px]">
                      <MapPin size={14} className="text-[var(--primary)] flex-shrink-0"/> {stop.stopName}
                    </div>
                    <div className="text-[11px] text-[var(--text-secondary)] mt-0.5 ml-5 truncate max-w-[200px]">{stop.location}</div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="text-sm font-medium text-[var(--text-primary)] flex items-center gap-1.5">
                      <RouteIcon size={14} className="text-[var(--text-secondary)]" /> {stop.routeName}
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex flex-col gap-1">
                      <div className="text-xs text-[var(--text-primary)] flex items-center gap-1.5">
                        <Clock size={12} className="text-emerald-500"/> Pick: {stop.pickupTime}
                      </div>
                      <div className="text-xs text-[var(--text-primary)] flex items-center gap-1.5">
                        <Clock size={12} className="text-amber-500"/> Drop: {stop.dropTime}
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="text-sm text-[var(--text-primary)] font-medium flex items-center gap-1.5">
                      <Users size={14} className="text-[var(--text-secondary)]"/> {stop.assignedStudents}
                    </div>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <span 
                      className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide whitespace-nowrap"
                      style={{ backgroundColor: statusConfig.bg, color: statusConfig.text }}
                    >
                      {statusConfig.label}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 motion-safe:transition-opacity">
                      <button 
                        onClick={(e) => { e.stopPropagation(); onEdit(stop); }}
                        className="p-1.5 rounded-md hover:bg-[var(--bg-input)] text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors"
                        aria-label="Edit stop"
                        title="Edit"
                      >
                        <Edit size={16} />
                      </button>
                      <button 
                        onClick={(e) => { e.stopPropagation(); onDelete(stop.id); }}
                        className="p-1.5 rounded-md hover:bg-[var(--bg-input)] text-[var(--text-secondary)] hover:text-red-500 transition-colors"
                        aria-label="Delete stop"
                        title="Delete"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={7} className="py-12 text-center">
                <div className="flex flex-col items-center justify-center text-[var(--text-secondary)]">
                  <span className="text-4xl mb-3 opacity-20">🚏</span>
                  <p className="text-sm">No stops found matching the criteria.</p>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
