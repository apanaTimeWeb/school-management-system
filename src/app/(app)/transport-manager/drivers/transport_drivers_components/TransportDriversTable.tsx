"use client";

import React from 'react';
import { Edit, Trash2, ShieldAlert, Phone, Bus, Map } from 'lucide-react';
import type { TransportDriver } from '../transport_drivers_types/transport_drivers.types';
import { DRIVER_STATUS_COLORS } from '../transport_drivers_constants/transport_drivers.constants';

// RESPONSIBILITY: Renders the drivers data table

interface TransportDriversTableProps {
  drivers: TransportDriver[];
  onView: (driver: TransportDriver) => void;
  onEdit: (driver: TransportDriver) => void;
  onDelete: (driverId: string) => void;
}

export default function TransportDriversTable({ drivers, onView, onEdit, onDelete }: TransportDriversTableProps) {
  
  const isLicenseExpired = (expiryDate: string) => {
    return new Date(expiryDate) < new Date();
  };

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-[rgba(250,204,21,0.05)] border-b border-[var(--border)]">
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider w-48">Driver Name</th>
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider">Contact</th>
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider">License & Exp</th>
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider">Assignment</th>
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider">Docs</th>
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider text-center">Status</th>
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {drivers.length > 0 ? (
            drivers.map((driver) => {
              const statusConfig = DRIVER_STATUS_COLORS[driver.status] || DRIVER_STATUS_COLORS.INACTIVE;
              const expired = isLicenseExpired(driver.licenseExpiry);

              return (
                <tr 
                  key={driver.id} 
                  onClick={() => onView(driver)}
                  className="border-b border-[var(--border)] hover:bg-[rgba(250,204,21,0.05)] motion-safe:transition-colors cursor-pointer group"
                >
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[rgba(250,204,21,0.1)] border border-[rgba(250,204,21,0.2)] flex items-center justify-center text-[var(--primary)] font-bold text-xs uppercase flex-shrink-0">
                        {driver.name.substring(0, 2)}
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-semibold text-[var(--text-primary)] truncate">{driver.name}</div>
                        <div className="text-xs text-[var(--text-secondary)] mt-0.5 truncate">{driver.employeeId}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="text-sm text-[var(--text-primary)] flex items-center gap-1.5 font-medium">
                      <Phone size={12} className="text-[var(--text-secondary)]"/> {driver.contact}
                    </div>
                    <div className="text-[11px] text-[var(--text-secondary)] mt-0.5">Emg: {driver.emergencyContact}</div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="text-sm text-[var(--text-primary)] font-medium">
                      {driver.licenseNumber} <span className="text-xs text-[var(--text-secondary)] font-normal">({driver.licenseType})</span>
                    </div>
                    <div className={`text-xs mt-0.5 font-medium ${expired ? 'text-red-500' : 'text-[var(--text-secondary)]'}`}>
                      Exp: {driver.licenseExpiry} {expired && '(EXPIRED)'}
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    {driver.assignedVehicleNumber ? (
                      <div className="flex flex-col gap-1">
                        <div className="text-sm text-[var(--text-primary)] flex items-center gap-1 truncate max-w-[150px]">
                          <Bus size={12} className="text-[var(--text-secondary)]"/> {driver.assignedVehicleNumber}
                        </div>
                        <div className="text-[11px] text-[var(--text-secondary)] flex items-center gap-1 truncate max-w-[150px]">
                          <Map size={12}/> {driver.assignedRouteName}
                        </div>
                      </div>
                    ) : (
                      <span className="text-sm text-[var(--text-secondary)] italic">Unassigned</span>
                    )}
                  </td>
                  <td className="py-3 px-4">
                    {driver.documentsComplete ? (
                      <span className="text-emerald-500 flex items-center gap-1 text-xs font-medium"><ShieldAlert size={14} className="opacity-0"/> OK</span>
                    ) : (
                      <span className="text-amber-500 flex items-center gap-1 text-xs font-medium"><ShieldAlert size={14}/> Pending</span>
                    )}
                  </td>
                  <td className="py-3 px-4 text-center">
                    <span 
                      className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide"
                      style={{ backgroundColor: statusConfig.bg, color: statusConfig.text }}
                    >
                      {statusConfig.label}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 motion-safe:transition-opacity">
                      <button 
                        onClick={(e) => { e.stopPropagation(); onEdit(driver); }}
                        className="p-1.5 rounded-md hover:bg-[var(--bg-input)] text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors"
                        aria-label="Edit driver"
                        title="Edit"
                      >
                        <Edit size={16} />
                      </button>
                      <button 
                        onClick={(e) => { e.stopPropagation(); onDelete(driver.id); }}
                        className="p-1.5 rounded-md hover:bg-[var(--bg-input)] text-[var(--text-secondary)] hover:text-red-500 transition-colors"
                        aria-label="Delete driver"
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
                  <span className="text-4xl mb-3 opacity-20">👨‍✈️</span>
                  <p className="text-sm">No drivers found matching the criteria.</p>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
