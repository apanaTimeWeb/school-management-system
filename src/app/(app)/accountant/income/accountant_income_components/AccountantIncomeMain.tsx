import React from "react";
import AccountantIncomeMetrics from "./AccountantIncomeMetrics";
import AccountantIncomeFilters from "./AccountantIncomeFilters";
import AccountantIncomeTable from "./AccountantIncomeTable";
import AccountantIncomeModals from "./AccountantIncomeModals";

export default function AccountantIncomeMain() {
  return (
    <div className="p-4 md:p-6 lg:p-8 max-w-[1400px] mx-auto space-y-6 fade-in h-full flex flex-col">
      
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-2 shrink-0">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Income & Receipts</h1>
          <p className="text-sm text-text-secondary mt-1">Track fee collections, library fines, and miscellaneous school income.</p>
        </div>
      </div>

      <AccountantIncomeMetrics />
      
      <AccountantIncomeFilters />
      
      <div className="flex-1 min-h-0">
        <AccountantIncomeTable />
      </div>

      <AccountantIncomeModals />
      
    </div>
  );
}
