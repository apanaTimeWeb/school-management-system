"use client";

import { X, Trash2, AlertTriangle } from "lucide-react";
import type { Employee } from "../hr_employees_types/AdminHrEmployeesTypes";

interface AdminHrEmployeeDeleteModalProps {
  employee: Employee | null;
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (id: string) => void;
}

export default function AdminHrEmployeeDeleteModal({ employee, isOpen, onClose, onConfirm }: AdminHrEmployeeDeleteModalProps) {
  if (!isOpen || !employee) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm motion-safe:animate-in motion-safe:fade-in">
      <div className="bg-card w-full max-w-md rounded-xl shadow-2xl overflow-hidden flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border bg-danger/5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-danger/10 flex items-center justify-center text-danger">
              <AlertTriangle size={24} />
            </div>
            <div>
              <h2 className="text-lg font-bold text-danger">Delete Employee</h2>
              <p className="text-xs text-muted-foreground">This action cannot be undone.</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 text-muted-foreground hover:bg-muted hover:text-foreground rounded-full transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          <p className="text-sm text-foreground mb-4">
            Are you sure you want to permanently delete <strong>{employee.personal.firstName} {employee.personal.lastName}</strong> ({employee.employeeId})?
          </p>
          <p className="text-sm text-muted-foreground">
            All records, documents, and history associated with this employee will be removed from the system. If this employee is leaving the organization, consider marking them as <strong>Exited</strong> instead.
          </p>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-end gap-3 p-6 border-t border-border bg-input/30">
          <button onClick={onClose} className="px-6 py-2.5 text-sm font-bold text-foreground hover:bg-input border border-transparent hover:border-border rounded-lg transition-colors">
            Cancel
          </button>
          <button 
            onClick={() => {
              onConfirm(employee.id);
              onClose();
            }}
            className="flex items-center gap-2 px-6 py-2.5 text-sm font-bold text-white bg-danger rounded-lg shadow-lg hover:shadow-danger/30 transition-all hover:scale-105 active:scale-95"
          >
            <Trash2 size={18} />
            Delete Employee
          </button>
        </div>

      </div>
    </div>
  );
}
