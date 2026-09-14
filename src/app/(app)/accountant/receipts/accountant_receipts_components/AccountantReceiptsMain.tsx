import React from "react";
import AccountantReceiptsSearch from "./AccountantReceiptsSearch";
import AccountantReceiptsTable from "./AccountantReceiptsTable";
import AccountantReceiptsModals from "./AccountantReceiptsModals";

// RESPONSIBILITY: Root layout for the Receipts module.

export default function AccountantReceiptsMain() {
  return (
    <div className="p-4 md:p-6 lg:p-8 max-w-[1400px] mx-auto space-y-6 fade-in h-full flex flex-col">
      
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-2 shrink-0">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Receipts Management</h1>
          <p className="text-sm text-text-secondary mt-1">Search, reprint, verify, and void fee receipts.</p>
        </div>
      </div>

      <AccountantReceiptsSearch />
      
      <div className="flex-1 min-h-0">
        <AccountantReceiptsTable />
      </div>

      <AccountantReceiptsModals />
      
    </div>
  );
}
