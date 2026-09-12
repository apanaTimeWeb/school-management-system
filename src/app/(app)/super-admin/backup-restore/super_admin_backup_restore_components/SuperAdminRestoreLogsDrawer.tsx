"use client";

import { X, FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import type { RestoreLogType } from "@/app/(app)/super-admin/backup-restore/super_admin_backup_restore_types/super_admin_backup_restore.types";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SuperAdminRestoreLogsDrawer({ isOpen, onClose }: DrawerProps) {
  
  const mockLogs: RestoreLogType[] = [
    { id: "rl1", timestamp: "2023-10-20 02:15:00 AM", initiatedBy: "Amit Sharma", backupName: "Auto_20231019_DB", status: "Success", details: "Completed full table replacement. 4.2GB data restored." },
    { id: "rl2", timestamp: "2023-08-05 11:30:00 PM", initiatedBy: "Amit Sharma", backupName: "Manual_Aug_PreUpdate", status: "Failed", details: "Constraint violation during academic_years table merge." }
  ];

  return (
    <>
      {isOpen && <div className="fixed inset-0 bg-overlay/50 z-40" onClick={onClose} />}
      <div className={cn(
        "fixed top-0 right-0 h-screen w-full sm:w-[500px] bg-card shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex items-center justify-between p-6 border-b border-border bg-header">
          <div className="flex items-center gap-2">
            <FileText size={20} className="text-primary" />
            <h2 className="text-lg font-bold text-text-primary uppercase tracking-wider">Restore logs</h2>
          </div>
          <button onClick={onClose} className="p-1.5 text-text-secondary hover:text-danger hover:bg-danger-bg rounded-md">
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 custom-scrollbar flex flex-col gap-4">
          {mockLogs.map(log => (
            <div key={log.id} className="p-4 border border-border rounded-lg bg-bg-page flex flex-col gap-2">
              <div className="flex justify-between items-start">
                <span className="text-xs font-bold text-text-primary">{log.timestamp}</span>
                <span className={cn(
                  "px-2 py-0.5 rounded text-[10px] font-bold border",
                  log.status === 'Success' ? 'bg-success-bg text-success border-success/20' : 'bg-danger-bg text-danger border-danger/20'
                )}>
                  {log.status}
                </span>
              </div>
              <div className="text-xs text-text-secondary mt-1">
                <span className="font-semibold text-text-primary">Initiator:</span> {log.initiatedBy}
              </div>
              <div className="text-xs text-text-secondary">
                <span className="font-semibold text-text-primary">Backup Used:</span> {log.backupName}
              </div>
              <div className="mt-2 p-2 bg-input border border-border rounded text-[11px] font-mono text-text-secondary">
                {log.details}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
