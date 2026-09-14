import React from "react";
import AccountantExportBuilder from "./AccountantExportBuilder";
import AccountantExportActions from "./AccountantExportActions";
import AccountantExportHistory from "./AccountantExportHistory";

export default function AccountantExportMain() {
  return (
    <div className="p-4 md:p-6 lg:p-8 max-w-[1400px] mx-auto space-y-6 fade-in h-full flex flex-col overflow-y-auto">
      
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-2 shrink-0">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Data Export Hub</h1>
          <p className="text-sm text-text-secondary mt-1">Build custom datasets using advanced filters and export to PDF, Excel, or CSV securely.</p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        <AccountantExportBuilder />
        <AccountantExportActions />
      </div>

      <div className="shrink-0">
        <AccountantExportHistory />
      </div>
      
    </div>
  );
}
