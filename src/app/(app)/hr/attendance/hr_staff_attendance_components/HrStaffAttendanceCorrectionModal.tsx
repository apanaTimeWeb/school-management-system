"use client";

import { Check, X, AlertTriangle } from "lucide-react";
import { useState } from "react";
import type { AttendanceStatus } from "../hr_staff_attendance_types/HrStaffAttendanceTypes";

interface HrStaffAttendanceCorrectionModalProps {
  isOpen: boolean;
  close: () => void;
  context: { employeeId: string, name: string, day: number } | null;
  onSave: (employeeId: string, day: number, status: AttendanceStatus) => void;
}

export default function HrStaffAttendanceCorrectionModal({ isOpen, close, context, onSave }: HrStaffAttendanceCorrectionModalProps) {
  const [newStatus, setNewStatus] = useState<AttendanceStatus>("Present");
  const [reason, setReason] = useState("");

  if (!isOpen || !context) return null;

  const handleSave = () => {
    onSave(context.employeeId, context.day, newStatus);
    close();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm motion-safe:transition-opacity">
      <div className="bg-card border border-border rounded-xl w-full max-w-md shadow-2xl overflow-hidden motion-safe:animate-in motion-safe:fade-in motion-safe:zoom-in-95">
        
        <div className="flex items-center justify-between p-5 border-b border-border bg-input/30">
          <h3 className="text-lg font-bold flex items-center gap-2 text-warning">
            <AlertTriangle size={20} /> Correct Attendance Record
          </h3>
          <button onClick={close} className="p-1 hover:bg-input rounded-full text-muted-foreground transition-colors">
            <X size={20} />
          </button>
        </div>

        <div className="p-6">
          <div className="mb-4 bg-warning/10 border border-warning/20 p-3 rounded-md">
            <p className="text-sm font-bold text-foreground">Employee: {context.name} ({context.employeeId})</p>
            <p className="text-xs font-bold text-muted-foreground mt-1">Record Day: {context.day} of Current Month</p>
          </div>

          <div className="mb-6">
            <label className="block text-xs font-bold text-muted-foreground uppercase mb-2">New Attendance Status</label>
            <select 
              className="w-full bg-input border border-border rounded-md px-3 py-2 text-sm text-foreground focus:border-primary outline-none"
              value={newStatus}
              onChange={(e) => setNewStatus(e.target.value as AttendanceStatus)}
            >
              <option value="Present">Present</option>
              <option value="Absent">Absent</option>
              <option value="Late">Late</option>
              <option value="Half Day">Half Day</option>
              <option value="Leave">On Leave</option>
              <option value="None">Clear Record</option>
            </select>
          </div>

          <div className="mb-6">
             <label className="block text-xs font-bold text-muted-foreground uppercase mb-2">Reason for Correction</label>
             <textarea 
               value={reason}
               onChange={(e) => setReason(e.target.value)}
               className="w-full bg-input border border-border rounded-md px-3 py-2 text-sm text-foreground focus:border-primary outline-none min-h-[80px]" 
               placeholder="E.g. Forgot to punch in, Biometric machine error..."
             />
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-border">
            <button onClick={close} className="px-4 py-2 text-sm font-bold border border-border text-foreground rounded-md hover:bg-input transition-colors">Cancel</button>
            <button 
              onClick={handleSave} 
              className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-white rounded-md shadow-lg transition-all active:scale-95 bg-warning hover:bg-yellow-500 shadow-warning/20"
            >
              <Check size={16} /> Save Correction
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

