"use client";

import { useState } from "react";
import { Check, X, MessageSquareText } from "lucide-react";
import type { LeaveApplication } from "../hr_leave_types/AdminHrLeaveTypes";

interface AdminHrLeaveActionModalProps {
  isOpen: boolean;
  onClose: () => void;
  application: LeaveApplication | null;
  action: 'Approve' | 'Reject' | null;
  onConfirm: (id: string, action: 'Approve' | 'Reject', remarks: string) => void;
}

export default function AdminHrLeaveActionModal({ isOpen, onClose, application, action, onConfirm }: AdminHrLeaveActionModalProps) {
  const [remarks, setRemarks] = useState("");

  if (!isOpen || !application || !action) return null;

  const isApprove = action === 'Approve';
  const actionColor = isApprove ? 'success' : 'danger';
  const Icon = isApprove ? Check : X;

  const handleConfirm = () => {
    onConfirm(application.id, action, remarks);
    setRemarks("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm motion-safe:transition-opacity">
      <div className="bg-card border border-border rounded-xl w-full max-w-md shadow-2xl overflow-hidden motion-safe:animate-in motion-safe:fade-in motion-safe:zoom-in-95">
        
        <div className={`flex items-center justify-between p-5 border-b border-border bg-${actionColor}/5`}>
          <h3 className={`text-lg font-bold flex items-center gap-2 text-${actionColor}`}>
            <Icon size={20} /> {action} Leave Application
          </h3>
          <button onClick={onClose} className="p-1 hover:bg-input rounded-full text-muted-foreground transition-colors">
            <X size={20} />
          </button>
        </div>

        <div className="p-6">
          <div className={`mb-6 bg-${actionColor}/10 border border-${actionColor}/20 p-4 rounded-md`}>
            <p className="text-sm font-bold text-foreground">Employee: {application.employeeName}</p>
            <p className="text-xs font-bold text-muted-foreground mt-1">{application.leaveType} ({application.days} Days)</p>
          </div>

          <div className="mb-6">
             <label className="block text-xs font-bold text-muted-foreground uppercase mb-2 flex items-center gap-2">
                <MessageSquareText size={14} /> Remarks (Optional)
             </label>
             <textarea 
               value={remarks}
               onChange={(e) => setRemarks(e.target.value)}
               className="w-full bg-input border border-border rounded-md px-3 py-2 text-sm text-foreground focus:border-primary outline-none min-h-[100px]" 
               placeholder={`Enter any remarks for ${isApprove ? 'approving' : 'rejecting'} this leave...`}
             />
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-border">
            <button onClick={onClose} className="px-4 py-2 text-sm font-bold border border-border text-foreground rounded-md hover:bg-input transition-colors">Cancel</button>
            <button 
              onClick={handleConfirm} 
              className={`flex items-center gap-2 px-4 py-2 text-sm font-bold text-white rounded-md shadow-lg transition-all active:scale-95 bg-${actionColor} hover:bg-${actionColor}/90 shadow-${actionColor}/20`}
            >
              <Icon size={16} /> Confirm {action}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
