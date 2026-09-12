import React from 'react';

import SuperAdminBackupHistoryTable from './data_management_components/SuperAdminBackupHistoryTable';
import SuperAdminBackupSettings from './data_management_components/SuperAdminBackupSettings';
import SuperAdminExportCard from './data_management_components/SuperAdminExportCard';
import SuperAdminImportCard from './data_management_components/SuperAdminImportCard';

export default function datamanagementPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">14-DATA-MANAGEMENT</h1>
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 border-b border-border pb-2">BackupHistoryTable</h2>
        <SuperAdminBackupHistoryTable />
      </section>
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 border-b border-border pb-2">BackupSettings</h2>
        <SuperAdminBackupSettings />
      </section>
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 border-b border-border pb-2">ExportCard</h2>
        <SuperAdminExportCard />
      </section>
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 border-b border-border pb-2">ImportCard</h2>
        <SuperAdminImportCard />
      </section>
    </div>
  );
}
