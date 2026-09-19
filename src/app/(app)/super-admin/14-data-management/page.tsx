"use client";

import React, { useState } from 'react';
import clsx from 'clsx';
import { DatabaseBackup, DownloadCloud } from 'lucide-react';

import SuperAdminBackupHistoryTable from './data_management_components/SuperAdminBackupHistoryTable';
import SuperAdminBackupSettings from './data_management_components/SuperAdminBackupSettings';
import SuperAdminExportCard from './data_management_components/SuperAdminExportCard';
import SuperAdminImportCard from './data_management_components/SuperAdminImportCard';
import SuperAdminRestoreSection from './data_management_components/SuperAdminRestoreSection';
import MissingFeaturesUI from './MissingFeaturesUI';

const TABS = [
  { id: 'backup', label: 'Backup & Restore', icon: DatabaseBackup },
  { id: 'import-export', label: 'Data Import / Export', icon: DownloadCloud },
];

export default function DataManagementPage() {
  const [activeTab, setActiveTab] = useState('backup');

  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto pb-10">
      
      {/* Header Area */}
      <div className="flex justify-between items-center mb-2">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Data Management</h1>
          <p className="text-sm text-text-secondary mt-1">Manage system backups, restorations, and bulk data imports/exports.</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex overflow-x-auto hide-scrollbar border-b border-border">
        <div className="flex gap-2">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={clsx(
                "flex items-center gap-2 px-4 py-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap",
                activeTab === tab.id
                  ? "border-primary text-primary"
                  : "border-transparent text-text-secondary hover:text-primary hover:bg-page"
              )}
            >
              <tab.icon size={16} />
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="mt-4">
        {activeTab === 'backup' && (
          <div className="flex flex-col gap-6">
            <SuperAdminBackupSettings />
            <SuperAdminRestoreSection />
            <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
               <div className="border-b border-border pb-3 flex justify-between items-center mb-6">
                 <h2 className="text-base font-bold text-text-primary uppercase tracking-wider">Backup History</h2>
               </div>
               <SuperAdminBackupHistoryTable />
            </div>
          </div>
        )}

        {activeTab === 'import-export' && (
          <div className="flex flex-col gap-6">
            <SuperAdminImportCard />
            <SuperAdminExportCard />
          </div>
        )}
      </div>
          <MissingFeaturesUI />
    </div>
  );
}
