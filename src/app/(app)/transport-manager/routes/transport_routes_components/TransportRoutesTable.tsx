"use client";

import React from 'react';
import { Edit, Trash2, MapPin, Navigation, Bus, Clock, Users } from 'lucide-react';
import type { TransportRoute } from '../transport_routes_types/transport_routes.types';
import { ROUTE_STATUS_COLORS } from '../transport_routes_constants/transport_routes.constants';

// RESPONSIBILITY: Renders the routes data table

interface TransportRoutesTableProps {
  routes: TransportRoute[];
  onView: (route: TransportRoute) => void;
  onEdit: (route: TransportRoute) => void;
  onDelete: (routeId: string) => void;
}

export default function TransportRoutesTable({ routes, onView, onEdit, onDelete }: TransportRoutesTableProps) {
  
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-[rgba(250,204,21,0.05)] border-b border-[var(--border)]">
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider w-48">Route Name / Code</th>
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider">Points</th>
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider">Distance / Time</th>
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider">Metrics</th>
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider">Assigned Vehicle</th>
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider text-center">Status</th>
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {routes.length > 0 ? (
            routes.map((route) => {
              const statusConfig = ROUTE_STATUS_COLORS[route.status] || ROUTE_STATUS_COLORS.INACTIVE;

              return (
                <tr 
                  key={route.id} 
                  onClick={() => onView(route)}
                  className="border-b border-[var(--border)] hover:bg-[rgba(250,204,21,0.05)] motion-safe:transition-colors cursor-pointer group"
                >
                  <td className="py-3 px-4">
                    <div className="text-sm font-semibold text-[var(--text-primary)] truncate max-w-[200px]">{route.routeName}</div>
                    <div className="text-xs font-medium text-[var(--primary)] mt-0.5">{route.routeCode}</div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex flex-col gap-1.5">
                      <div className="text-xs text-[var(--text-primary)] flex items-center gap-1.5 truncate max-w-[150px]">
                        <div className="w-2 h-2 rounded-full border-2 border-emerald-500 bg-[var(--bg-page)]"></div> 
                        {route.startingPoint}
                      </div>
                      <div className="text-xs text-[var(--text-primary)] flex items-center gap-1.5 truncate max-w-[150px]">
                        <div className="w-2 h-2 rounded-full border-2 border-red-500 bg-[var(--bg-page)]"></div> 
                        {route.endingPoint}
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="text-sm text-[var(--text-primary)] font-medium flex items-center gap-1.5">
                      <Navigation size={12} className="text-[var(--text-secondary)]"/> {route.routeDistanceKm} km
                    </div>
                    <div className="text-[11px] text-[var(--text-secondary)] mt-0.5 flex items-center gap-1.5">
                      <Clock size={12}/> ~{route.estimatedDurationMins} mins
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex flex-col gap-1">
                      <div className="text-xs text-[var(--text-primary)] flex items-center gap-1.5">
                        <MapPin size={12} className="text-[var(--text-secondary)]"/> {route.totalStops} Stops
                      </div>
                      <div className="text-xs text-[var(--text-primary)] flex items-center gap-1.5">
                        <Users size={12} className="text-[var(--text-secondary)]"/> {route.studentsAssigned} Students
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    {route.assignedVehicleNumber ? (
                      <div className="flex flex-col gap-1">
                        <div className="text-sm text-[var(--text-primary)] flex items-center gap-1 font-medium">
                          <Bus size={12} className="text-[var(--primary)]"/> {route.assignedVehicleNumber}
                        </div>
                        <div className="text-[11px] text-[var(--text-secondary)] truncate max-w-[150px]">
                          Driver: {route.assignedDriverName || '—'}
                        </div>
                      </div>
                    ) : (
                      <span className="text-sm text-[var(--text-secondary)] italic">Unassigned</span>
                    )}
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
                        onClick={(e) => { e.stopPropagation(); onEdit(route); }}
                        className="p-1.5 rounded-md hover:bg-[var(--bg-input)] text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors"
                        aria-label="Edit route"
                        title="Edit"
                      >
                        <Edit size={16} />
                      </button>
                      <button 
                        onClick={(e) => { e.stopPropagation(); onDelete(route.id); }}
                        className="p-1.5 rounded-md hover:bg-[var(--bg-input)] text-[var(--text-secondary)] hover:text-red-500 transition-colors"
                        aria-label="Delete route"
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
                  <span className="text-4xl mb-3 opacity-20">🗺️</span>
                  <p className="text-sm">No routes found matching the criteria.</p>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
