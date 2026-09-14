"use client";

import { X, ShieldAlert, CheckCircle } from "lucide-react";
import type { Teacher } from "../hr_teachers_types/AdminHrTeachersTypes";

interface AdminHrTeacherStatusModalProps {
  teacher: Teacher | null;
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (id: string, newStatus: 'Active' | 'Inactive') => void;
}

export default function AdminHrTeacherStatusModal({ teacher, isOpen, onClose, onConfirm }: AdminHrTeacherStatusModalProps) {
  if (!isOpen || !teacher) return null;

  const isCurrentlyActive = teacher.status === 'Active';
  const actionText = isCurrentlyActive ? 'Suspend' : 'Activate';
  const actionColor = isCurrentlyActive ? 'danger' : 'success';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm motion-safe:animate-in motion-safe:fade-in">
      <div className="bg-card w-full max-w-md rounded-xl shadow-2xl overflow-hidden flex flex-col">
        
        {/* Header */}
        <div className={`flex items-center justify-between p-6 border-b border-border bg-${actionColor}/5`}>
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-full bg-${actionColor}/10 flex items-center justify-center text-${actionColor}`}>
              {isCurrentlyActive ? <ShieldAlert size={24} /> : <CheckCircle size={24} />}
            </div>
            <div>
              <h2 className={`text-lg font-bold text-${actionColor}`}>{actionText} Teacher</h2>
              <p className="text-xs text-muted-foreground">Change account status</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 text-muted-foreground hover:bg-muted hover:text-foreground rounded-full transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          <p className="text-sm text-foreground mb-4">
            Are you sure you want to <strong>{actionText.toLowerCase()}</strong> the account for <strong>{teacher.firstName} {teacher.lastName}</strong> ({teacher.teacherId})?
          </p>
          <p className="text-sm text-muted-foreground">
            {isCurrentlyActive 
              ? "Suspending this teacher will revoke their login access and remove them from active class assignments. You can reactivate them later."
              : "Activating this teacher will restore their login access and allow them to be assigned to classes again."}
          </p>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-end gap-3 p-6 border-t border-border bg-input/30">
          <button onClick={onClose} className="px-6 py-2.5 text-sm font-bold text-foreground hover:bg-input border border-transparent hover:border-border rounded-lg transition-colors">
            Cancel
          </button>
          <button 
            onClick={() => {
              onConfirm(teacher.id, isCurrentlyActive ? 'Inactive' : 'Active');
              onClose();
            }}
            className={`flex items-center gap-2 px-6 py-2.5 text-sm font-bold text-white bg-${actionColor} rounded-lg shadow-lg hover:shadow-${actionColor}/30 transition-all hover:scale-105 active:scale-95`}
          >
            {isCurrentlyActive ? <ShieldAlert size={18} /> : <CheckCircle size={18} />}
            Confirm {actionText}
          </button>
        </div>

      </div>
    </div>
  );
}
