"use client";

import { ShieldAlert, AlertTriangle } from "lucide-react";
import type { BackupRecordType } from "../data_management_types/super_admin_backup_restore.types";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedBackup: BackupRecordType | null;
}

export default function SuperAdminRestoreConfirmationModal({ isOpen, onClose, selectedBackup }: ModalProps) {
  if (!isOpen || !selectedBackup) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-overlay/80 backdrop-blur-sm" onClick={onClose} />
      
      {/* Modal */}
      <div className="relative bg-card rounded-lg border border-danger/30 shadow-2xl w-full max-w-md overflow-hidden flex flex-col transform transition-all">
        
        {/* High Security Header */}
        <div className="bg-danger-bg border-b border-danger/20 p-4 flex items-center gap-3">
          <div className="p-2 bg-danger/10 rounded-full">
            <ShieldAlert className="text-danger" size={24} />
          </div>
          <div>
            <h2 className="text-base font-bold text-danger uppercase tracking-wider">Restore confirmation</h2>
            <p className="text-[11px] text-danger/80 mt-0.5 font-medium">HIGH-SECURITY ACTION</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col gap-4">
          <div className="flex flex-col gap-2 p-3 bg-warning-bg border border-warning/30 rounded-md text-warning">
            <div className="flex items-start gap-2">
              <AlertTriangle size={16} className="shrink-0 mt-0.5" />
              <p className="text-xs font-semibold leading-relaxed">
                You are about to overwrite the current live database with the following backup:
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-1 p-3 bg-bg-page border border-border rounded-md font-mono text-xs">
            <div className="flex justify-between">
              <span className="text-text-secondary">Backup Name:</span>
              <span className="text-text-primary font-bold">{selectedBackup.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-secondary">Date & Time:</span>
              <span className="text-text-primary font-bold">{selectedBackup.date} {selectedBackup.time}</span>
            </div>
          </div>

          <div className="flex flex-col gap-1.5 mt-2">
            <label className="text-xs font-bold text-text-primary">Type "RESTORE" to confirm</label>
            <input 
              type="text" 
              placeholder="RESTORE" 
              className="bg-input border border-danger/40 rounded-md px-3 py-2 text-sm text-text-primary focus:border-danger outline-none font-mono uppercase"
            />
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-border bg-header flex items-center justify-end gap-3">
          <button onClick={onClose} className="px-4 py-2 bg-bg-page border border-border text-text-primary rounded-md hover:bg-card text-xs font-bold transition-colors">
            Cancel
          </button>
          <button className="px-6 py-2 bg-danger text-white rounded-md hover:bg-danger/90 text-xs font-bold transition-colors shadow-sm">
            Execute Restore
          </button>
        </div>
      </div>
    </div>
  );
}
