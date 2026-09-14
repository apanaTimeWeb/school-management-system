import React from "react";
import AccountantBankMetrics from "./AccountantBankMetrics";
import AccountantBankFilters from "./AccountantBankFilters";
import AccountantBankTable from "./AccountantBankTable";
import AccountantBankModals from "./AccountantBankModals";

export default function AccountantBankMain() {
  return (
    <div className="p-4 md:p-6 lg:p-8 max-w-[1400px] mx-auto space-y-6 fade-in h-full flex flex-col">
      
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-2 shrink-0">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Bank & Transaction Records</h1>
          <p className="text-sm text-text-secondary mt-1">Track cheques, update clearance statuses, and perform bank reconciliation.</p>
        </div>
      </div>

      <AccountantBankMetrics />
      
      <AccountantBankFilters />
      
      <div className="flex-1 min-h-0">
        <AccountantBankTable />
      </div>

      <AccountantBankModals />
      
    </div>
  );
}
