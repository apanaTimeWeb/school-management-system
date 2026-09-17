"use client";

import React from 'react';
import { Edit, Clock, User, Phone, Briefcase, FileText } from 'lucide-react';
import type { TransportStaffAttendance } from '../transport_staff_attendance_types/transport_staff_attendance.types';
import { STAFF_ATTENDANCE_STATUS_COLORS, SHIFT_LABELS } from '../transport_staff_attendance_constants/transport_staff_attendance.constants';

// RESPONSIBILITY: Renders the staff attendance data table

interface TransportStaffAttendanceTableProps {
  records: TransportStaffAttendance[];
  onView: (record: TransportStaffAttendance) => void;
  onEdit: (record: TransportStaffAttendance) => void;
}

export default function TransportStaffAttendanceTable({ records, onView, onEdit }: TransportStaffAttendanceTableProps) {
  
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-[rgba(250,204,21,0.05)] border-b border-[var(--border)]">
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider">Staff Details</th>
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider">Role & Shift</th>
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider">Timings</th>
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider">Assigned Vehicle</th>
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider text-center">Status</th>
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {records.length > 0 ? (
            records.map((record) => {
              const statusConfig = STAFF_ATTENDANCE_STATUS_COLORS[record.status] || STAFF_ATTENDANCE_STATUS_COLORS.ABSENT;

              return (
                <tr 
                  key={record.id} 
                  onClick={() => onView(record)}
                  className="border-b border-[var(--border)] hover:bg-[rgba(250,204,21,0.05)] motion-safe:transition-colors cursor-pointer group"
                >
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full border flex items-center justify-center font-bold text-xs uppercase flex-shrink-0 ${
                        record.role === 'DRIVER' 
                          ? 'bg-[rgba(59,130,246,0.1)] border-[rgba(59,130,246,0.2)] text-blue-500' 
                          : 'bg-[rgba(245,158,11,0.1)] border-[rgba(245,158,11,0.2)] text-amber-500'
                      }`}>
                        {record.staffName.substring(0, 2)}
                      </div>
                      <div className="flex flex-col justify-center min-w-0">
                        <div className="text-sm font-semibold text-[var(--text-primary)] truncate" title={record.staffName}>{record.staffName}</div>
                        <div className="text-[11px] text-[var(--text-secondary)] mt-0.5 flex items-center gap-1">
                          <Briefcase size={10} /> {record.staffId}
                        </div>
                      </div>
                    </div>
                  </td>
                  
                  <td className="py-3 px-4">
                    <div className="flex flex-col gap-1">
                      <span className={`inline-flex items-center text-xs font-semibold w-max ${
                        record.role === 'DRIVER' ? 'text-blue-500' : 'text-amber-500'
                      }`}>
                        {record.role}
                      </span>
                      <span className="text-[10px] text-[var(--text-secondary)] truncate max-w-[150px]" title={SHIFT_LABELS[record.shift]}>
                        {SHIFT_LABELS[record.shift]}
                      </span>
                    </div>
                  </td>

                  <td className="py-3 px-4">
                    <div className="flex flex-col gap-1.5">
                      <div className="text-xs text-[var(--text-primary)] flex items-center gap-1.5 whitespace-nowrap">
                        <span className="text-[10px] text-[var(--text-secondary)] w-10 inline-block text-right">In:</span>
                        <Clock size={12} className="text-emerald-500"/> {record.checkInTime || '--:--'}
                      </div>
                      <div className="text-xs text-[var(--text-primary)] flex items-center gap-1.5 whitespace-nowrap">
                        <span className="text-[10px] text-[var(--text-secondary)] w-10 inline-block text-right">Out:</span>
                        <Clock size={12} className="text-amber-500"/> {record.checkOutTime || '--:--'}
                      </div>
                    </div>
                  </td>

                  <td className="py-3 px-4">
                    {record.assignedVehicle ? (
                      <span className="text-sm font-medium text-[var(--text-primary)]">{record.assignedVehicle}</span>
                    ) : (
                      <span className="text-xs italic text-[var(--text-secondary)]">Unassigned / Reserve</span>
                    )}
                  </td>

                  <td className="py-3 px-4 text-center">
                    <div className="flex flex-col items-center gap-1">
                      <span 
                        className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide whitespace-nowrap"
                        style={{ backgroundColor: statusConfig.bg, color: statusConfig.text }}
                      >
                        {statusConfig.label}
                      </span>
                      {record.status === 'ON_LEAVE' && record.leaveReason && (
                         <span className="text-[10px] text-[var(--text-secondary)] truncate max-w-[100px]" title={record.leaveReason}>
                           {record.leaveReason}
                         </span>
                      )}
                    </div>
                  </td>

                  <td className="py-3 px-4 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 motion-safe:transition-opacity">
                      <button 
                        onClick={(e) => { e.stopPropagation(); onEdit(record); }}
                        className="p-1.5 rounded-md hover:bg-[var(--bg-input)] text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors"
                        aria-label="Edit attendance"
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
              <td colSpan={6} className="py-12 text-center">
                <div className="flex flex-col items-center justify-center text-[var(--text-secondary)]">
                  <span className="text-4xl mb-3 opacity-20">🪪</span>
                  <p className="text-sm">No staff attendance records found for this criteria.</p>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
