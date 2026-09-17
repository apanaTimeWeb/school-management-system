"use client";

import React from 'react';
import { Edit, Trash2, ShieldAlert, Phone, Bus, Map, Clock, UserCheck } from 'lucide-react';
import type { TransportConductor } from '../transport_conductors_types/transport_conductors.types';
import { CONDUCTOR_STATUS_COLORS, ATTENDANCE_COLORS } from '../transport_conductors_constants/transport_conductors.constants';

// RESPONSIBILITY: Renders the conductors data table

interface TransportConductorsTableProps {
  conductors: TransportConductor[];
  onView: (conductor: TransportConductor) => void;
  onEdit: (conductor: TransportConductor) => void;
  onDelete: (conductorId: string) => void;
}

export default function TransportConductorsTable({ conductors, onView, onEdit, onDelete }: TransportConductorsTableProps) {
  
  const getAttendanceDisplay = (status: TransportConductor['todaysAttendance']) => {
    if (!status) return <span className="text-xs text-[var(--text-secondary)] italic">Not Marked</span>;
    const config = ATTENDANCE_COLORS[status];
    return (
      <span className="flex items-center gap-1.5 text-xs font-semibold" style={{ color: config.text }}>
        <UserCheck size={14} className={config.iconColor} /> {config.label}
      </span>
    );
  };

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-[rgba(250,204,21,0.05)] border-b border-[var(--border)]">
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider w-48">Staff Name</th>
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider">Contact</th>
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider">Shift</th>
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider">Assignment</th>
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider">Today's Att.</th>
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider text-center">Status</th>
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {conductors.length > 0 ? (
            conductors.map((conductor) => {
              const statusConfig = CONDUCTOR_STATUS_COLORS[conductor.status] || CONDUCTOR_STATUS_COLORS.INACTIVE;

              return (
                <tr 
                  key={conductor.id} 
                  onClick={() => onView(conductor)}
                  className="border-b border-[var(--border)] hover:bg-[rgba(250,204,21,0.05)] motion-safe:transition-colors cursor-pointer group"
                >
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[rgba(59,130,246,0.1)] border border-[rgba(59,130,246,0.2)] flex items-center justify-center text-blue-500 font-bold text-xs uppercase flex-shrink-0">
                        {conductor.name.substring(0, 2)}
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-semibold text-[var(--text-primary)] truncate">{conductor.name}</div>
                        <div className="text-xs text-[var(--text-secondary)] mt-0.5 truncate">{conductor.employeeId}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="text-sm text-[var(--text-primary)] flex items-center gap-1.5 font-medium">
                      <Phone size={12} className="text-[var(--text-secondary)]"/> {conductor.contact}
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="text-sm text-[var(--text-primary)] font-medium flex items-center gap-1.5">
                      <Clock size={12} className="text-[var(--text-secondary)]"/> {conductor.shift}
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    {conductor.assignedVehicleNumber ? (
                      <div className="flex flex-col gap-1">
                        <div className="text-sm text-[var(--text-primary)] flex items-center gap-1 truncate max-w-[150px]">
                          <Bus size={12} className="text-[var(--text-secondary)]"/> {conductor.assignedVehicleNumber}
                        </div>
                        <div className="text-[11px] text-[var(--text-secondary)] flex items-center gap-1 truncate max-w-[150px]">
                          <Map size={12}/> {conductor.assignedRouteName}
                        </div>
                      </div>
                    ) : (
                      <span className="text-sm text-[var(--text-secondary)] italic">Unassigned</span>
                    )}
                  </td>
                  <td className="py-3 px-4">
                    {getAttendanceDisplay(conductor.todaysAttendance)}
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
                        onClick={(e) => { e.stopPropagation(); onEdit(conductor); }}
                        className="p-1.5 rounded-md hover:bg-[var(--bg-input)] text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors"
                        aria-label="Edit conductor"
                        title="Edit"
                      >
                        <Edit size={16} />
                      </button>
                      <button 
                        onClick={(e) => { e.stopPropagation(); onDelete(conductor.id); }}
                        className="p-1.5 rounded-md hover:bg-[var(--bg-input)] text-[var(--text-secondary)] hover:text-red-500 transition-colors"
                        aria-label="Delete conductor"
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
                  <span className="text-4xl mb-3 opacity-20">🎫</span>
                  <p className="text-sm">No transport staff found matching the criteria.</p>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
