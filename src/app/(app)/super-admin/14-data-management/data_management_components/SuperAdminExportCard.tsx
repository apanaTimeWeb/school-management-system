"use client";

import { useState } from "react";
import { Download, FileSpreadsheet, FileText, FileJson } from "lucide-react";
import { IMPORT_EXPORT_ENTITIES } from "../data_management_types/super_admin_data_import_export.types";

export default function SuperAdminExportCard() {
  const [selectedEntity, setSelectedEntity] = useState<string>("Students");

  return (
    <div className="bg-card border border-border rounded-lg p-6 shadow-sm flex flex-col gap-6 mt-6">
      
      {/* Explicit 'Export' section header */}
      <div className="border-b border-border pb-3 flex justify-between items-center">
        <h2 className="text-base font-bold text-text-primary uppercase tracking-wider flex items-center gap-2">
          <Download size={20} className="text-primary" /> Export
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        
        <div className="flex flex-col gap-3">
          <label className="text-sm font-bold text-text-primary uppercase">Select Module to Export</label>
          <div className="flex flex-wrap gap-2">
            {IMPORT_EXPORT_ENTITIES.map(entity => (
              <button 
                key={entity}
                onClick={() => setSelectedEntity(entity)}
                className={`px-3 py-1.5 text-[11px] font-bold border rounded-md transition-colors ${
                  selectedEntity === entity 
                    ? 'bg-primary text-black border-primary' 
                    : 'bg-bg-page text-text-secondary border-border hover:bg-card hover:text-primary'
                }`}
              >
                {entity}
              </button>
            ))}
          </div>
          <p className="text-[11px] text-text-secondary mt-1">Select the entity to export its entire dataset.</p>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-xs font-bold text-text-secondary uppercase">Export Format Options</h3>
          
          <div className="flex flex-wrap items-center gap-3">
            {/* Exact checklist export options, explicitly labeled */}
            <button className="flex items-center gap-2 px-6 py-2.5 bg-success-bg text-success text-sm font-bold border border-success/20 rounded-md hover:bg-success hover:text-white transition-colors shadow-sm">
              <FileSpreadsheet size={16} /> Export Excel
            </button>
            <button className="flex items-center gap-2 px-6 py-2.5 bg-info-bg text-info text-sm font-bold border border-info/20 rounded-md hover:bg-info hover:text-white transition-colors shadow-sm">
              <FileText size={16} /> Export CSV
            </button>
            <button className="flex items-center gap-2 px-6 py-2.5 bg-danger-bg text-danger text-sm font-bold border border-danger/20 rounded-md hover:bg-danger hover:text-white transition-colors shadow-sm">
              <FileJson size={16} /> Export PDF
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
