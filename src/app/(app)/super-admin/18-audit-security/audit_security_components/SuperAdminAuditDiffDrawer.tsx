"use client";

import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  oldValue: string | null;
  newValue: string | null;
}

export default function SuperAdminAuditDiffDrawer({ isOpen, onClose, oldValue, newValue }: DrawerProps) {
  return (
    <>
      {isOpen && <div className="fixed inset-0 bg-overlay/50 z-40" onClick={onClose} />}
      <div className={cn(
        "fixed top-0 right-0 h-screen w-full sm:w-[600px] bg-card shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex items-center justify-between p-6 border-b border-border bg-header">
          <h2 className="text-lg font-bold text-text-primary">Record Changes Diff</h2>
          <button onClick={onClose} className="p-1.5 text-text-secondary hover:text-danger hover:bg-danger-bg rounded-md">
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 custom-scrollbar flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-bold text-danger bg-danger-bg p-2 rounded border border-danger/20">Old value</h3>
            <pre className="bg-input border border-border rounded p-4 text-xs font-mono text-text-secondary overflow-x-auto whitespace-pre-wrap">
              {oldValue || "No previous data (New creation)"}
            </pre>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-bold text-success bg-success-bg p-2 rounded border border-success/20">New value</h3>
            <pre className="bg-input border border-border rounded p-4 text-xs font-mono text-text-primary overflow-x-auto whitespace-pre-wrap">
              {newValue || "Data removed (Deletion)"}
            </pre>
          </div>
        </div>

        <div className="p-6 border-t border-border bg-header flex items-center justify-end">
          <button onClick={onClose} className="px-6 py-2 bg-primary text-black rounded-md hover:bg-primary-hover text-sm font-medium">Close</button>
        </div>
      </div>
    </>
  );
}
