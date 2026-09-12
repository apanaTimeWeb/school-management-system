"use client";

import { useState } from "react";
import { RotateCcw, AlertTriangle, FileText } from "lucide-react";
import SuperAdminRestoreConfirmationModal from "./SuperAdminRestoreConfirmationModal";
import SuperAdminRestoreLogsDrawer from "./SuperAdminRestoreLogsDrawer";
import type { BackupRecordType } from "../data_management_types/super_admin_backup_restore.types";

export default function SuperAdminRestoreSection() {
  const [selectedBackupId, setSelectedBackupId] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogsOpen, setIsLogsOpen] = useState(false);

  // Mock available backups
  const backups: BackupRecordType[] = [
    { id: "b1", name: "Auto_Daily_DB_20231027", date: "2023-10-27", time: "02:00 AM", backupSize: "4.5 GB", backupStatus: "Completed", type: "Automatic" },
    { id: "b2", name: "Manual_Pre_Migration_v2", date: "2023-10-26", time: "11:30 PM", backupSize: "4.4 GB", backupStatus: "Completed", type: "Manual" }
  ];

  const handleRestoreClick = () => {
    if (selectedBackupId) {
      setIsModalOpen(true);
    }
  };

  const selectedBackupRecord = backups.find(b => b.id === selectedBackupId) || null;

  return (
    <>
      <div className="bg-card border border-border rounded-lg p-6 shadow-sm flex flex-col gap-6">
        
        {/* Exact header 'Restore' */}
        <div className="border-b border-border pb-3 flex justify-between items-center">
          <h2 className="text-base font-bold text-text-primary uppercase tracking-wider">Restore</h2>
          
          {/* Exact link 'Restore logs' */}
          <button 
            onClick={() => setIsLogsOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-bg-page border border-border rounded-md text-xs font-bold text-text-secondary hover:text-primary transition-colors"
          >
            <FileText size={14} /> Restore logs
          </button>
        </div>

        {/* Exact text box 'Important: Restore को high-security confirmation के साथ रखना चाहिए।' */}
        <div className="flex items-start gap-3 p-3 bg-danger-bg/50 border border-danger/30 rounded-md text-danger">
          <AlertTriangle size={18} className="shrink-0 mt-0.5" />
          <p className="text-xs font-bold">Important: Restore को high-security confirmation के साथ रखना चाहिए।</p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 items-end">
          
          {/* Exact label 'Select backup' */}
          <div className="flex flex-col gap-2 flex-1 w-full">
            <label className="text-sm font-bold text-text-primary">Select backup</label>
            <select 
              value={selectedBackupId}
              onChange={(e) => setSelectedBackupId(e.target.value)}
              className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none w-full"
            >
              <option value="" disabled>Choose a backup to restore...</option>
              {backups.map(b => (
                <option key={b.id} value={b.id}>{b.name} ({b.date} {b.time})</option>
              ))}
            </select>
          </div>

          {/* Exact button 'Restore' */}
          <button 
            onClick={handleRestoreClick}
            disabled={!selectedBackupId}
            className="flex items-center gap-2 px-6 py-2 bg-danger text-white text-sm font-bold rounded-md hover:bg-danger/90 transition-all shadow-sm disabled:opacity-50 h-[38px] shrink-0"
          >
            <RotateCcw size={16} /> Restore
          </button>
        </div>

      </div>

      {/* The explicitly requested 'Restore confirmation' Modal */}
      <SuperAdminRestoreConfirmationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        selectedBackup={selectedBackupRecord} 
      />

      <SuperAdminRestoreLogsDrawer
        isOpen={isLogsOpen}
        onClose={() => setIsLogsOpen(false)}
      />
    </>
  );
}
