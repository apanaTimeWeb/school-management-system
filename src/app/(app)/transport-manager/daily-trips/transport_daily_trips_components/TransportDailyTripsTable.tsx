"use client";

import React from 'react';
import { Edit, Trash2, Bus, User, Navigation, Clock, Activity, Sunrise, Sunset, Calendar } from 'lucide-react';
import type { DailyTrip } from '../transport_daily_trips_types/transport_daily_trips.types';
import { TRIP_STATUS_COLORS, TRIP_TYPE_LABELS } from '../transport_daily_trips_constants/transport_daily_trips.constants';

// RESPONSIBILITY: Renders the daily trips data table

interface TransportDailyTripsTableProps {
  trips: DailyTrip[];
  onView: (trip: DailyTrip) => void;
  onEdit: (trip: DailyTrip) => void;
  onDelete: (tripId: string) => void;
}

export default function TransportDailyTripsTable({ trips, onView, onEdit, onDelete }: TransportDailyTripsTableProps) {
  
  const getTripIcon = (type: string) => {
    switch(type) {
      case 'MORNING_PICKUP': return <Sunrise size={16} className="text-amber-500" />;
      case 'AFTERNOON_DROP': return <Sunset size={16} className="text-orange-500" />;
      default: return <Bus size={16} className="text-blue-500" />;
    }
  };

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-[rgba(250,204,21,0.05)] border-b border-[var(--border)]">
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider w-48">Trip Type & Route</th>
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider">Crew & Vehicle</th>
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider">Timings</th>
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider">Metrics</th>
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider text-center">Status</th>
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {trips.length > 0 ? (
            trips.map((trip) => {
              const statusConfig = TRIP_STATUS_COLORS[trip.status] || TRIP_STATUS_COLORS.SCHEDULED;

              return (
                <tr 
                  key={trip.id} 
                  onClick={() => onView(trip)}
                  className="border-b border-[var(--border)] hover:bg-[rgba(250,204,21,0.05)] motion-safe:transition-colors cursor-pointer group"
                >
                  <td className="py-3 px-4">
                    <div className="flex flex-col gap-1.5">
                      <div className="text-sm font-semibold text-[var(--text-primary)] flex items-center gap-1.5">
                        {getTripIcon(trip.tripType)}
                        {TRIP_TYPE_LABELS[trip.tripType]}
                      </div>
                      <div className="text-[11px] font-medium text-[var(--text-secondary)] truncate max-w-[180px]" title={trip.routeName}>
                        <Navigation size={10} className="inline mr-1"/> {trip.routeName}
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex flex-col gap-1">
                      <div className="text-sm text-[var(--text-primary)] font-medium flex items-center gap-1.5">
                        <Bus size={12} className="text-[var(--primary)]"/> {trip.vehicleNumber}
                      </div>
                      <div className="text-xs text-[var(--text-secondary)] flex items-center gap-1.5">
                        <User size={12}/> {trip.driverName} {trip.conductorName ? `& ${trip.conductorName}` : ''}
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex flex-col gap-1">
                      <div className="text-xs text-[var(--text-primary)] flex items-center gap-1.5 whitespace-nowrap">
                        <span className="text-[10px] text-[var(--text-secondary)] w-6 inline-block">Plan:</span>
                        <Clock size={12} className="text-[var(--text-secondary)]"/> {trip.plannedStartTime} - {trip.plannedEndTime}
                      </div>
                      <div className="text-xs text-[var(--text-primary)] flex items-center gap-1.5 whitespace-nowrap">
                        <span className="text-[10px] text-[var(--text-secondary)] w-6 inline-block">Real:</span>
                        <Activity size={12} className={trip.actualStartTime ? 'text-emerald-500' : 'text-[var(--text-secondary)] opacity-50'}/> 
                        {trip.actualStartTime || '--:--'} - {trip.actualEndTime || '--:--'}
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex flex-col gap-1.5">
                      <div className="w-full bg-[var(--bg-input)] rounded-full h-1.5 overflow-hidden">
                        <div 
                          className="bg-[var(--primary)] h-full rounded-full" 
                          style={{ width: `${Math.min((trip.studentsBoarded / trip.totalCapacity) * 100, 100)}%` }}
                        ></div>
                      </div>
                      <div className="text-[10px] text-[var(--text-secondary)] text-right">
                        {trip.studentsBoarded} / {trip.totalCapacity} boarded
                      </div>
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
                        onClick={(e) => { e.stopPropagation(); onEdit(trip); }}
                        className="p-1.5 rounded-md hover:bg-[var(--bg-input)] text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors"
                        aria-label="Edit trip"
                        title="Edit"
                      >
                        <Edit size={16} />
                      </button>
                      <button 
                        onClick={(e) => { e.stopPropagation(); onDelete(trip.id); }}
                        className="p-1.5 rounded-md hover:bg-[var(--bg-input)] text-[var(--text-secondary)] hover:text-red-500 transition-colors"
                        aria-label="Delete trip"
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
              <td colSpan={6} className="py-12 text-center">
                <div className="flex flex-col items-center justify-center text-[var(--text-secondary)]">
                  <span className="text-4xl mb-3 opacity-20">🚌</span>
                  <p className="text-sm">No trips scheduled for today matching the criteria.</p>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
