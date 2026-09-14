"use client";

import { useState } from "react";
import type { DailyAttendanceRecord, AttendanceStatus } from "../hr_staff_attendance_types/HrStaffAttendanceTypes";

interface HrStaffAttendanceDailyProps {
  records: DailyAttendanceRecord[];
  updateStatus: (id: string, status: AttendanceStatus) => void;
  saveManual: () => void;
}

export default function HrStaffAttendanceDaily({ records, updateStatus, saveManual }: HrStaffAttendanceDailyProps) {
  
  const getStatusColor = (status: AttendanceStatus) => {
    switch (status) {
      case 'Present': return 'bg-success text-white border-success shadow-success/30 shadow-md';
      case 'Absent': return 'bg-danger text-white border-danger shadow-danger/30 shadow-md';
      case 'Late': return 'bg-warning text-white border-warning shadow-warning/30 shadow-md';
      case 'Half Day': return 'bg-info text-white border-info shadow-info/30 shadow-md';
      case 'Leave': return 'bg-purple-500 text-white border-purple-500 shadow-purple-500/30 shadow-md';
      default: return 'bg-input text-muted-foreground border-border hover:border-primary/50';
    }
  };

  const [isSaving, setIsSaving] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    // Simulate API call
    setTimeout(() => {
      saveManual(); // call the parent callback if needed, but hook also has alert, so we might want to remove alert from hook.
      setIsSaving(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    }, 1000);
  };

  return (
    <div className="motion-safe:animate-in motion-safe:fade-in duration-300">
      <div className="w-full overflow-x-auto bg-card border border-border rounded-lg shadow-sm mb-4">
        <table className="w-full text-left border-collapse min-w-[800px]">
          <thead>
            <tr className="border-b border-border bg-input/50">
              <th className="p-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">Employee</th>
              <th className="p-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">Mark Status</th>
              <th className="p-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">Time In/Out</th>
              <th className="p-4 text-xs font-bold text-muted-foreground uppercase tracking-wider text-right">Approval</th>
            </tr>
          </thead>
          <tbody>
            {records.map(record => (
              <tr key={record.employeeId} className="border-b border-border hover:bg-primary/5 transition-colors group">
                <td className="p-4">
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">{record.name}</span>
                    <span className="text-xs font-medium text-muted-foreground">{record.employeeId} • {record.designation}</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex gap-2">
                    {(['Present', 'Absent', 'Late', 'Half Day', 'Leave'] as AttendanceStatus[]).map(s => (
                      <button 
                        key={s} 
                        onClick={() => updateStatus(record.employeeId, s)}
                        className={`px-3 py-1 text-xs font-bold rounded-md border transition-all active:scale-95 ${
                          record.status === s ? getStatusColor(s) : 'bg-input text-muted-foreground border-border hover:border-primary/50'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-foreground">In: {record.inTime || '--'}</span>
                    <span className="text-xs font-bold text-muted-foreground">Out: {record.outTime || '--'}</span>
                  </div>
                </td>
                <td className="p-4 text-right">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                    record.approvalStatus === 'Approved' ? 'bg-success/10 text-success' :
                    record.approvalStatus === 'Auto-Approved' ? 'bg-info/10 text-info' :
                    'bg-warning/10 text-warning'
                  }`}>
                    {record.approvalStatus}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-end items-center gap-4">
        {showSuccess && (
          <span className="text-sm font-bold text-success motion-safe:animate-in motion-safe:fade-in">
            Attendance Saved!
          </span>
        )}
        <button 
          onClick={handleSave} 
          disabled={isSaving}
          className="flex items-center gap-2 px-6 py-2 bg-primary text-card font-bold rounded-md shadow-lg shadow-primary/20 hover:bg-yellow-500 transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none"
        >
          {isSaving ? (
            <>
              <div className="w-4 h-4 border-2 border-card border-t-transparent rounded-full animate-spin"></div>
              Saving...
            </>
          ) : (
            'Save Manual Attendance'
          )}
        </button>
      </div>
    </div>
  );
}

