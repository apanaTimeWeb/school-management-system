import React from "react";
import AccountantReportsGrid from "./AccountantReportsGrid";
import AccountantReportsModals from "./AccountantReportsModals";

export default function AccountantReportsMain() {
  return (
    <div className="p-4 md:p-6 lg:p-8 max-w-[1600px] mx-auto space-y-6 fade-in h-full flex flex-col">
      
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-2 shrink-0">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Financial Reports Center</h1>
          <p className="text-sm text-text-secondary mt-1">Generate, preview, and export 16+ types of comprehensive financial analytics.</p>
        </div>
      </div>

      <div className="flex-1 min-h-0">
        <AccountantReportsGrid />
      </div>

      <AccountantReportsModals />
      
    </div>
  );
}
