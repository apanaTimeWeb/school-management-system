"use client";

import { DatabaseBackup } from "lucide-react";
import SuperAdminBackupSettings from "./super_admin_backup_restore_components/SuperAdminBackupSettings";
import SuperAdminBackupHistoryTable from "./super_admin_backup_restore_components/SuperAdminBackupHistoryTable";
import SuperAdminRestoreSection from "./super_admin_backup_restore_components/SuperAdminRestoreSection";

export default function SuperAdminBackupRestorePage() {
  return (
    <div className="flex flex-col gap-6 max-w-[1200px] mx-auto pb-12">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div>
          <h1 className="text-[22px] font-bold text-text-primary flex items-center gap-2">
            <DatabaseBackup size={24} className="text-primary" /> Backup & Restore
          </h1>
          <p className="text-sm text-text-secondary mt-1">Manage system snapshots, automated schedules, and perform high-security data restorations.</p>
        </div>
      </div>

      {/* Backup Section */}
      <SuperAdminBackupSettings />

      {/* Backup History Section */}
      <SuperAdminBackupHistoryTable />

      {/* Restore Section */}
      <SuperAdminRestoreSection />

    </div>
  );
}
