"use client";
import React from "react";
import { Edit } from "lucide-react";
import { useHRAttendanceStore } from "../hr_attendance_store/useHRAttendanceStore";
import clsx from "clsx";

export default function HRAttendanceTable() {
  const { attendanceData, searchQuery, roleFilter, statusFilter, dateFilter } = useHRAttendanceStore();

  const filteredData = attendanceData.filter(record => {
    const matchesSearch = record.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          record.employeeId.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = roleFilter === "All" || record.role === roleFilter;
    const matchesStatus = statusFilter === "All" || record.status === statusFilter;
    
    // For demo purposes, we ignore exact date matching and assume MOCK_HR_ATTENDANCE represents the selected date unless specified.
    // In a real app, `dateFilter` would fetch data from the server.
    
    return matchesSearch && matchesRole && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'Present': return 'text-emerald-700 bg-emerald-50 border-emerald-200';
      case 'Absent': return 'text-rose-700 bg-rose-50 border-rose-200';
      case 'Half Day': return 'text-amber-700 bg-amber-50 border-amber-200';
      case 'Late': return 'text-orange-700 bg-orange-50 border-orange-200';
      default: return 'text-slate-700 bg-slate-50 border-slate-200';
    }
  };

  return (
    <div className="bg-card border border-border rounded-2xl shadow-sm overflow-hidden">
      <div className="overflow-x-auto custom-scrollbar">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-bg-input border-b border-border">
              <th className="p-4 text-xs font-black text-text-secondary uppercase tracking-wider">Employee</th>
              <th className="p-4 text-xs font-black text-text-secondary uppercase tracking-wider">Role & Shift</th>
              <th className="p-4 text-xs font-black text-text-secondary uppercase tracking-wider">Check In</th>
              <th className="p-4 text-xs font-black text-text-secondary uppercase tracking-wider">Check Out</th>
              <th className="p-4 text-xs font-black text-text-secondary uppercase tracking-wider">Status</th>
              <th className="p-4 text-xs font-black text-text-secondary uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {filteredData.map((record) => (
              <tr key={record.id} className="hover:bg-bg-page/50 transition-colors group">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold shrink-0">
                      {record.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-text-primary group-hover:text-emerald-600 transition-colors">{record.name}</p>
                      <p className="text-xs font-semibold text-text-secondary">{record.employeeId}</p>
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  <p className="text-sm font-bold text-text-primary">{record.role}</p>
                  <p className="text-xs font-semibold text-text-secondary">{record.shift}</p>
                </td>
                <td className="p-4">
                  <p className="text-sm font-bold text-text-primary">{record.checkIn}</p>
                </td>
                <td className="p-4">
                  <p className="text-sm font-bold text-text-primary">{record.checkOut}</p>
                </td>
                <td className="p-4">
                  <span className={clsx("px-2.5 py-1 rounded-md text-[11px] font-bold border", getStatusColor(record.status))}>
                    {record.status}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button 
                      className="p-1.5 text-text-secondary hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                      title="Edit Attendance"
                    >
                      <Edit size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {filteredData.length === 0 && (
              <tr>
                <td colSpan={6} className="p-8 text-center text-text-secondary font-semibold">
                  No attendance records found for this date.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
