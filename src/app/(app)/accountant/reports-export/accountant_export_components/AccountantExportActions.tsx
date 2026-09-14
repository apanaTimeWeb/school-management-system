"use client";
import React from "react";
import { FileText, Table, FileSpreadsheet, Printer, DownloadCloud } from "lucide-react";
import { useAccountantExportStore } from "../accountant_export_store/useAccountantExportStore";

export default function AccountantExportActions() {
  const { startDate, endDate, selectedClasses, selectedFeeTypes, selectedMethods } = useAccountantExportStore();

  const handleExport = (format: string) => {
    // Permission check simulation could happen here
    alert(`Generating ${format} Export with:\n- Dates: ${startDate || 'Any'} to ${endDate || 'Any'}\n- Classes: ${selectedClasses.length}\n- Fees: ${selectedFeeTypes.length}\n- Methods: ${selectedMethods.length}`);
  };

  return (
    <div className="bg-card border border-border rounded-xl shadow-sm p-6 w-full lg:w-80 shrink-0 flex flex-col h-full">
      <div className="flex items-center gap-3 border-b border-border pb-4 mb-6">
        <div className="w-10 h-10 rounded-lg bg-info/10 flex items-center justify-center text-info">
          <DownloadCloud size={20} />
        </div>
        <div>
          <h2 className="text-lg font-bold text-text-primary">Generate File</h2>
          <p className="text-xs text-text-secondary">Export the built dataset.</p>
        </div>
      </div>

      <div className="space-y-4 flex-1">
        <button 
          onClick={() => handleExport("PDF")}
          className="w-full flex items-center justify-between p-4 rounded-xl border border-danger/20 bg-danger/5 hover:bg-danger/10 group transition-all"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-danger/20 flex items-center justify-center text-danger">
              <FileText size={18} />
            </div>
            <span className="font-bold text-text-primary group-hover:text-danger transition-colors">Export as PDF</span>
          </div>
        </button>

        <button 
          onClick={() => handleExport("Excel")}
          className="w-full flex items-center justify-between p-4 rounded-xl border border-success/20 bg-success/5 hover:bg-success/10 group transition-all"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-success/20 flex items-center justify-center text-success">
              <FileSpreadsheet size={18} />
            </div>
            <span className="font-bold text-text-primary group-hover:text-success transition-colors">Export as Excel</span>
          </div>
        </button>

        <button 
          onClick={() => handleExport("CSV")}
          className="w-full flex items-center justify-between p-4 rounded-xl border border-primary/20 bg-primary/5 hover:bg-primary/10 group transition-all"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
              <Table size={18} />
            </div>
            <span className="font-bold text-text-primary group-hover:text-primary transition-colors">Export as CSV</span>
          </div>
        </button>
      </div>

      <div className="pt-6 border-t border-border mt-auto">
        <button 
          onClick={() => handleExport("Print")}
          className="w-full flex items-center justify-center gap-2 p-3 rounded-lg border border-border bg-bg-input hover:bg-card hover:text-primary text-text-secondary font-bold transition-all"
        >
          <Printer size={16} /> Quick Print
        </button>
        <p className="text-[10px] text-text-secondary text-center mt-3 leading-tight">
          Exports are tracked for security. Access is permission-based per role.
        </p>
      </div>

    </div>
  );
}
