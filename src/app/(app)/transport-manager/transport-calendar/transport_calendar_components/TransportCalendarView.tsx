"use client";

import React from 'react';
import { Calendar as CalendarIcon, Clock, Map, Bus, Edit, Trash2 } from 'lucide-react';
import type { TransportCalendarEvent } from '../transport_calendar_types/transport_calendar.types';
import { CALENDAR_TYPE_CONFIGS } from '../transport_calendar_constants/transport_calendar.constants';

// RESPONSIBILITY: Renders the chronological list/view of calendar events

interface TransportCalendarViewProps {
  events: TransportCalendarEvent[];
  onEdit: (event: TransportCalendarEvent) => void;
  onDelete: (id: string) => void;
}

export default function TransportCalendarView({ events, onEdit, onDelete }: TransportCalendarViewProps) {
  
  // Sort events chronologically by start date
  const sortedEvents = [...events].sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());

  const formatDisplayDate = (start: string, end: string) => {
    const d1 = new Date(start).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' });
    const d2 = new Date(end).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' });
    
    if (start === end) return d1;
    return `${d1} - ${d2}`;
  };

  const getStatusIndicator = (start: string, end: string) => {
    const today = new Date();
    today.setHours(0,0,0,0);
    const startDate = new Date(start);
    startDate.setHours(0,0,0,0);
    const endDate = new Date(end);
    endDate.setHours(23,59,59,999);

    if (today > endDate) return { label: 'Past', color: 'text-gray-500 bg-gray-500/10 border-gray-500/20' };
    if (today >= startDate && today <= endDate) return { label: 'Active Now', color: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20 animate-pulse' };
    
    // Future
    const diffTime = Math.abs(startDate.getTime() - today.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays <= 7) return { label: `In ${diffDays} days`, color: 'text-amber-500 bg-amber-500/10 border-amber-500/20' };
    return { label: 'Upcoming', color: 'text-blue-500 bg-blue-500/10 border-blue-500/20' };
  };

  return (
    <div className="w-full flex flex-col gap-4 p-4">
      {sortedEvents.length > 0 ? (
        sortedEvents.map((event) => {
          const config = CALENDAR_TYPE_CONFIGS[event.type] || CALENDAR_TYPE_CONFIGS.SPECIAL_TRIP;
          const statusInfo = getStatusIndicator(event.startDate, event.endDate);

          return (
            <div 
              key={event.id}
              className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-4 flex flex-col md:flex-row gap-5 hover:border-[var(--primary)] transition-all shadow-sm group"
            >
              
              {/* Date Box (Left side) */}
              <div className="flex-shrink-0 flex flex-col items-center justify-center w-full md:w-32 bg-[var(--bg-input)] rounded-lg p-3 border border-[var(--border)] relative overflow-hidden">
                <div className="absolute top-0 w-full h-1" style={{ backgroundColor: config.text }}></div>
                <CalendarIcon size={20} className="text-[var(--text-secondary)] mb-2" />
                <span className="text-sm font-bold text-[var(--text-primary)] text-center">{formatDisplayDate(event.startDate, event.endDate)}</span>
                
                {(event.startTime || event.endTime) && (
                   <div className="flex items-center gap-1 text-[10px] text-[var(--text-secondary)] font-medium mt-1 bg-[var(--bg-card)] px-2 py-0.5 rounded border border-[var(--border)]">
                     <Clock size={10} /> {event.startTime || '--:--'} to {event.endTime || '--:--'}
                   </div>
                )}
              </div>

              {/* Content Body (Center) */}
              <div className="flex-1 flex flex-col justify-center min-w-0">
                 <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <h3 className="text-base font-bold text-[var(--text-primary)] truncate">{event.title}</h3>
                    <span 
                      className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded"
                      style={{ backgroundColor: config.bg, color: config.text }}
                    >
                      {config.label}
                    </span>
                    <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${statusInfo.color}`}>
                      {statusInfo.label}
                    </span>
                 </div>
                 
                 <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-3 line-clamp-2">
                   {event.description}
                 </p>

                 <div className="flex flex-wrap items-center gap-4 mt-auto">
                    <div className="flex items-center gap-1.5 text-[11px] font-medium text-[var(--text-primary)]">
                       <Map size={12} className="text-[var(--primary)]" /> 
                       Affected Routes: <span className="text-[var(--text-secondary)]">{event.affectedRoutes.join(', ')}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] font-medium text-[var(--text-primary)]">
                       <Bus size={12} className="text-[var(--primary)]" /> 
                       Vehicles: <span className="text-[var(--text-secondary)]">{event.affectedVehicles.join(', ')}</span>
                    </div>
                 </div>
              </div>

              {/* Actions (Right side) */}
              <div className="flex-shrink-0 flex md:flex-col items-center justify-end gap-2 border-t md:border-t-0 md:border-l border-[var(--border)] pt-3 md:pt-0 md:pl-4 mt-2 md:mt-0 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity">
                <button 
                  onClick={() => onEdit(event)}
                  className="p-2 bg-[var(--bg-input)] hover:bg-[var(--primary)] text-[var(--text-secondary)] hover:text-white rounded-md transition-colors"
                  title="Edit Event"
                >
                  <Edit size={16} />
                </button>
                <button 
                  onClick={() => onDelete(event.id)}
                  className="p-2 bg-[var(--bg-input)] hover:bg-red-500 text-[var(--text-secondary)] hover:text-white rounded-md transition-colors"
                  title="Delete Event"
                >
                  <Trash2 size={16} />
                </button>
              </div>
              
            </div>
          );
        })
      ) : (
        <div className="flex flex-col items-center justify-center p-12 text-center text-[var(--text-secondary)] bg-[var(--bg-card)] rounded-xl border border-[var(--border)]">
          <CalendarIcon size={48} className="opacity-20 mb-4" />
          <h3 className="text-base font-semibold text-[var(--text-primary)] mb-1">No Events Scheduled</h3>
          <p className="text-sm">There are no upcoming transport calendar events matching this criteria.</p>
        </div>
      )}
    </div>
  );
}
