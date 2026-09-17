"use client";

import React from 'react';
import { Edit, User, MapPin, Clock, Bell, UserCheck, ShieldCheck } from 'lucide-react';
import type { TransportAttendance } from '../transport_attendance_types/transport_attendance.types';
import { ATTENDANCE_STATUS_COLORS } from '../transport_attendance_constants/transport_attendance.constants';

// RESPONSIBILITY: Renders the student transport attendance data table

interface TransportAttendanceTableProps {
  records: TransportAttendance[];
  onView: (record: TransportAttendance) => void;
  onEdit: (record: TransportAttendance) => void;
}

export default function TransportAttendanceTable({ records, onView, onEdit }: TransportAttendanceTableProps) {
  
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-[rgba(250,204,21,0.05)] border-b border-[var(--border)]">
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider w-48">Student Info</th>
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider">Route & Stop</th>
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider">Timings</th>
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider">Handover</th>
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider text-center">Status</th>
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {records.length > 0 ? (
            records.map((record) => {
              const statusConfig = ATTENDANCE_STATUS_COLORS[record.status] || ATTENDANCE_STATUS_COLORS.NOT_BOARDED;

              return (
                <tr 
                  key={record.id} 
                  onClick={() => onView(record)}
                  className="border-b border-[var(--border)] hover:bg-[rgba(250,204,21,0.05)] motion-safe:transition-colors cursor-pointer group"
                >
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[rgba(59,130,246,0.1)] border border-[rgba(59,130,246,0.2)] flex items-center justify-center text-blue-500 font-bold text-xs uppercase flex-shrink-0">
                        {record.studentName.substring(0, 2)}
                      </div>
                      <div className="min-w-0 flex flex-col justify-center">
                        <div className="text-sm font-semibold text-[var(--text-primary)] truncate" title={record.studentName}>{record.studentName}</div>
                        <div className="text-[11px] text-[var(--text-secondary)] mt-0.5 truncate">{record.classSection} • {record.studentId}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex flex-col gap-1">
                      <div className="text-sm text-[var(--text-primary)] font-medium flex items-center gap-1.5 truncate max-w-[150px]" title={record.stopName}>
                        <MapPin size={12} className="text-[var(--primary)] flex-shrink-0"/> {record.stopName}
                      </div>
                      <div className="text-[10px] text-[var(--text-secondary)] truncate max-w-[150px]">
                        {record.routeName}
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex flex-col gap-1.5">
                      <div className="text-xs text-[var(--text-primary)] flex items-center gap-1.5 whitespace-nowrap">
                        <span className="text-[10px] text-[var(--text-secondary)] w-10 inline-block">Pickup:</span>
                        <Clock size={12} className="text-emerald-500"/> {record.boardTime || '--:--'}
                      </div>
                      <div className="text-xs text-[var(--text-primary)] flex items-center gap-1.5 whitespace-nowrap">
                        <span className="text-[10px] text-[var(--text-secondary)] w-10 inline-block">Drop:</span>
                        <Clock size={12} className="text-amber-500"/> {record.dropTime || '--:--'}
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex flex-col gap-1 text-xs">
                      {record.authorizedPickupBy ? (
                        <div className="flex items-center gap-1.5 text-[var(--text-primary)]">
                          <ShieldCheck size={14} className="text-blue-500"/>
                          <span className="truncate max-w-[120px]" title={record.authorizedPickupBy}>{record.authorizedPickupBy}</span>
                        </div>
                      ) : (
                        <span className="text-[var(--text-secondary)] italic">Pending</span>
                      )}
                      
                      {record.notificationSent && (
                        <div className="flex items-center gap-1 mt-0.5 text-[10px] text-emerald-500 font-medium">
                          <Bell size={10} /> Parent Notified
                        </div>
                      )}
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
                        onClick={(e) => { e.stopPropagation(); onEdit(record); }}
                        className="p-1.5 rounded-md hover:bg-[var(--bg-input)] text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors"
                        aria-label="Edit record"
                        title="Edit Log"
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
                  <span className="text-4xl mb-3 opacity-20">📝</span>
                  <p className="text-sm">No transport attendance records found for this criteria.</p>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
