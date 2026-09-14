"use client";

import { useState } from "react";
import { UploadCloud, FileSpreadsheet, FileText, CheckCircle2, AlertCircle } from "lucide-react";
import { IMPORT_EXPORT_ENTITIES } from "../data_management_types/super_admin_data_import_export.types";

export default function SuperAdminImportCard() {
  const [selectedEntity, setSelectedEntity] = useState<string>("Students");

  return (
    <div className="bg-card border border-border rounded-lg p-6 shadow-sm flex flex-col gap-6">
      
      {/* Explicit 'Import' section header */}
      <div className="border-b border-border pb-3 flex justify-between items-center">
        <h2 className="text-base font-bold text-text-primary uppercase tracking-wider flex items-center gap-2">
          <UploadCloud size={20} className="text-primary" /> Import
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Left Side: Entities & Templates */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <label className="text-sm font-bold text-text-primary uppercase">Select Module to Import</label>
            <div className="flex flex-wrap gap-2">
              {/* Explicitly rendering every checklist entity so none are hidden in a dropdown */}
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
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-bold text-text-secondary uppercase">Download Templates</h3>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-success-bg text-success text-xs font-bold border border-success/20 rounded-md hover:bg-success hover:text-white transition-colors">
                <FileSpreadsheet size={14} /> Excel template
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-info-bg text-info text-xs font-bold border border-info/20 rounded-md hover:bg-info hover:text-white transition-colors">
                <FileText size={14} /> CSV
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-4 border-t border-border">
            <label className="text-sm font-bold text-text-primary">Upload File</label>
            <div className="border-2 border-dashed border-border rounded-lg p-6 flex flex-col items-center justify-center text-center hover:bg-bg-page transition-colors cursor-pointer">
              <UploadCloud size={24} className="text-text-secondary mb-2" />
              <span className="text-sm font-medium text-text-primary">Click to select or drag and drop</span>
              <span className="text-xs text-text-secondary mt-1">Supports .xlsx and .csv files</span>
            </div>
            <button className="w-full mt-2 py-2.5 bg-primary text-white text-sm font-bold rounded-md hover:bg-primary-hover transition-colors shadow-sm">
              Upload & Process
            </button>
          </div>
        </div>

        {/* Right Side: Exact Import Features List */}
        <div className="flex flex-col gap-4 bg-bg-page p-5 rounded-lg border border-border">
          <h3 className="text-sm font-bold text-text-primary border-l-4 border-primary pl-2 uppercase tracking-wider">Import Features</h3>
          <p className="text-xs text-text-secondary mb-2">The system automatically applies these safety features during import:</p>
          
          <div className="flex flex-col gap-3">
            <div className="flex items-start gap-2">
              <CheckCircle2 size={16} className="text-success shrink-0 mt-0.5" />
              <div className="flex flex-col">
                <span className="text-sm font-bold text-text-primary">Validation</span>
                <span className="text-[11px] text-text-secondary">Checks data types and required fields before importing.</span>
              </div>
            </div>
            
            <div className="flex items-start gap-2">
              <CheckCircle2 size={16} className="text-success shrink-0 mt-0.5" />
              <div className="flex flex-col">
                <span className="text-sm font-bold text-text-primary">Duplicate detection</span>
                <span className="text-[11px] text-text-secondary">Prevents entry of existing records based on unique keys.</span>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <AlertCircle size={16} className="text-warning shrink-0 mt-0.5" />
              <div className="flex flex-col">
                <span className="text-sm font-bold text-text-primary">Error report</span>
                <span className="text-[11px] text-text-secondary">Generates a downloadable row-by-row failure log.</span>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <CheckCircle2 size={16} className="text-success shrink-0 mt-0.5" />
              <div className="flex flex-col">
                <span className="text-sm font-bold text-text-primary">Preview before import</span>
                <span className="text-[11px] text-text-secondary">Review mapped columns and data sample prior to execution.</span>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <CheckCircle2 size={16} className="text-success shrink-0 mt-0.5" />
              <div className="flex flex-col">
                <span className="text-sm font-bold text-text-primary">Rollback failed import</span>
                <span className="text-[11px] text-text-secondary">Atomic transaction guarantees 100% rollback on critical failures.</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
