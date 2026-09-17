"use client";

import React from 'react';
import { MoreVertical, Edit, Trash2, Eye, Map, ShieldAlert } from 'lucide-react';
import type { TransportVehicle } from '../transport_vehicles_types/transport_vehicles.types';
import { VEHICLE_STATUS_COLORS } from '../transport_vehicles_constants/transport_vehicles.constants';

// RESPONSIBILITY: Renders the vehicles data table

interface TransportVehiclesTableProps {
  vehicles: TransportVehicle[];
  onView: (vehicle: TransportVehicle) => void;
  onEdit: (vehicle: TransportVehicle) => void;
  onDelete: (vehicleId: string) => void;
}

export default function TransportVehiclesTable({ vehicles, onView, onEdit, onDelete }: TransportVehiclesTableProps) {

  const renderStatusBadge = (status: string) => {
    const config = VEHICLE_STATUS_COLORS[status] || VEHICLE_STATUS_COLORS.INACTIVE;
    return (
      <span 
        className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide"
        style={{ backgroundColor: config.bg, color: config.text }}
      >
        {config.label}
      </span>
    );
  };

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-[rgba(250,204,21,0.05)] border-b border-[var(--border)]">
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider w-32">Vehicle No.</th>
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider">Type / Capacity</th>
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider">Assigned Route</th>
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider">Driver / Cond.</th>
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider">Docs</th>
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider text-center">Status</th>
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.length > 0 ? (
            vehicles.map((vehicle) => (
              <tr 
                key={vehicle.id} 
                onClick={() => onView(vehicle)}
                className="border-b border-[var(--border)] hover:bg-[rgba(250,204,21,0.05)] motion-safe:transition-colors cursor-pointer group"
              >
                <td className="py-3 px-4">
                  <div className="text-sm font-semibold text-[var(--text-primary)]">{vehicle.vehicleNumber}</div>
                  <div className="text-xs text-[var(--text-secondary)] mt-0.5">{vehicle.registrationNumber}</div>
                </td>
                <td className="py-3 px-4">
                  <div className="text-sm text-[var(--text-primary)]">{vehicle.vehicleType}</div>
                  <div className="text-xs text-[var(--text-secondary)] mt-0.5">{vehicle.seatingCapacity} Seats</div>
                </td>
                <td className="py-3 px-4">
                  <div className="text-sm text-[var(--text-primary)] truncate max-w-[180px]">
                    {vehicle.assignedRouteName || '—'}
                  </div>
                  {vehicle.gpsDeviceId && (
                    <div className="flex items-center gap-1 text-[11px] text-[var(--primary)] mt-1">
                      <Map size={12} /> {vehicle.gpsDeviceId}
                    </div>
                  )}
                </td>
                <td className="py-3 px-4">
                  <div className="text-sm text-[var(--text-primary)]">{vehicle.assignedDriverName || '—'}</div>
                  <div className="text-xs text-[var(--text-secondary)] mt-0.5">{vehicle.assignedConductorName || '—'}</div>
                </td>
                <td className="py-3 px-4">
                  {vehicle.documentsComplete ? (
                    <span className="text-emerald-500 flex items-center gap-1 text-xs font-medium"><ShieldAlert size={14} className="opacity-0"/> OK</span>
                  ) : (
                    <span className="text-amber-500 flex items-center gap-1 text-xs font-medium"><ShieldAlert size={14}/> Pending</span>
                  )}
                </td>
                <td className="py-3 px-4 text-center">
                  {renderStatusBadge(vehicle.status)}
                </td>
                <td className="py-3 px-4 text-right">
                  <div className="flex items-center justify-end gap-2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 motion-safe:transition-opacity">
                    <button 
                      onClick={(e) => { e.stopPropagation(); onEdit(vehicle); }}
                      className="p-1.5 rounded-md hover:bg-[var(--bg-input)] text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors"
                      aria-label="Edit vehicle"
                      title="Edit"
                    >
                      <Edit size={16} />
                    </button>
                    <button 
                      onClick={(e) => { e.stopPropagation(); onDelete(vehicle.id); }}
                      className="p-1.5 rounded-md hover:bg-[var(--bg-input)] text-[var(--text-secondary)] hover:text-red-500 transition-colors"
                      aria-label="Delete vehicle"
                      title="Delete"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7} className="py-12 text-center">
                <div className="flex flex-col items-center justify-center text-[var(--text-secondary)]">
                  <span className="text-4xl mb-3 opacity-20">🚌</span>
                  <p className="text-sm">No vehicles found matching the criteria.</p>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
