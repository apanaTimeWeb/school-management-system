"use client";

import { Database } from "lucide-react";
import SuperAdminImportCard from "./super_admin_data_import_export_components/SuperAdminImportCard";
import SuperAdminExportCard from "./super_admin_data_import_export_components/SuperAdminExportCard";

export default function SuperAdminDataImportExportPage() {
  return (
    <div className="flex flex-col gap-6 max-w-[1000px] mx-auto pb-12">
      
      {/* Explicit 'Data Import / Export' page title */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div>
          <h1 className="text-[22px] font-bold text-text-primary flex items-center gap-2">
            <Database size={24} className="text-primary" /> Data Import / Export
          </h1>
          <p className="text-sm text-text-secondary mt-1">Bulk manage core ERP entities with advanced validation and error handling.</p>
        </div>
      </div>

      <div className="flex flex-col">
        <SuperAdminImportCard />
        <SuperAdminExportCard />
      </div>

    </div>
  );
}
