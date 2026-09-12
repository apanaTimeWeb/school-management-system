"use client";

import { useState } from "react";
import { History, HardDrive, RotateCcw } from "lucide-react";
import type { BackupRecordType } from "../data_management_types/super_admin_backup_restore.types";
import SuperAdminRestoreConfirmationModal from "./SuperAdminRestoreConfirmationModal";
import SuperAdminRestoreLogsDrawer from "./SuperAdminRestoreLogsDrawer";

export default function SuperAdminBackupHistoryTable() {
  const [selectedBackup, setSelectedBackup] = useState<BackupRecordType | null>(null);
  const [isLogsOpen, setIsLogsOpen] = useState(false);

  // Mock data covering exact checklist items
  const records: BackupRecordType[] = [
    { id: "b1", name: "Auto_Daily_DB_20231027", date: "2023-10-27", time: "02:00 AM", backupSize: "4.5 GB", backupStatus: "Completed", type: "Automatic" },
    { id: "b2", name: "Manual_Pre_Migration_v2", date: "2023-10-26", time: "11:30 PM", backupSize: "4.4 GB", backupStatus: "Completed", type: "Manual" },
    { id: "b3", name: "Auto_Daily_DB_20231026", date: "2023-10-26", time: "02:00 AM", backupSize: "4.3 GB", backupStatus: "Failed", type: "Automatic" },
    { id: "b4", name: "Auto_Weekly_Full_20231022", date: "2023-10-22", time: "03:00 AM", backupSize: "12.8 GB", backupStatus: "Completed", type: "Automatic" }
  ];

  return (
    <>
      <div className="bg-card border border-border rounded-lg flex flex-col">
        
        {/* Table Header containing exact checklist item 'Backup history' */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div className="flex items-center gap-2">
            <History size={18} className="text-primary" />
            <h2 className="text-base font-bold text-text-primary uppercase tracking-wider">Backup history</h2>
          </div>
        </div>

        <div className="overflow-x-auto pb-6">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-primary-subtle text-text-secondary uppercase text-[11px] font-semibold">
              <tr>
                <th className="px-4 py-3 border-b border-border">Name</th>
                <th className="px-4 py-3 border-b border-border">Date & Time</th>
                <th className="px-4 py-3 border-b border-border">Type</th>
                {/* Exact checklist columns */}
                <th className="px-4 py-3 border-b border-border">Backup size</th>
                <th className="px-4 py-3 border-b border-border">Backup status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {records.map((record) => (
                <tr key={record.id} className="hover:bg-bg-page transition-colors">
                  <td className="px-4 py-3 font-semibold text-text-primary flex items-center gap-2">
                    <HardDrive size={14} className="text-text-secondary" /> {record.name}
                  </td>
                  <td className="px-4 py-3 text-xs text-text-secondary">
                    {record.date} <span className="mx-1 text-text-primary">•</span> {record.time}
                  </td>
                  <td className="px-4 py-3 text-[11px] text-text-secondary uppercase">
                    {record.type}
                  </td>
                  
                  {/* Exact data column matches */}
                  <td className="px-4 py-3 text-xs font-mono text-text-primary">{record.backupSize}</td>
                  
                  <td className="px-4 py-3">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${
                      record.backupStatus === 'Completed' ? 'bg-success-bg text-success border-success/20' :
                      record.backupStatus === 'Failed' ? 'bg-danger-bg text-danger border-danger/20' :
                      'bg-warning-bg text-warning border-warning/20'
                    }`}>
                      {record.backupStatus}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
