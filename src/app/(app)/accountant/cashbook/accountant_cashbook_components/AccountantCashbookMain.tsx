import React from "react";
import AccountantCashbookMetrics from "./AccountantCashbookMetrics";
import AccountantCashbookActions from "./AccountantCashbookActions";
import AccountantCashbookTable from "./AccountantCashbookTable";
import AccountantCashbookModals from "./AccountantCashbookModals";

export default function AccountantCashbookMain() {
  return (
    <div className="p-4 md:p-6 lg:p-8 max-w-[1400px] mx-auto space-y-6 fade-in h-full flex flex-col">
      
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-2 shrink-0">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Cash Book & Register</h1>
          <p className="text-sm text-text-secondary mt-1">Manage daily cash flow, register closing, and verify physical cash.</p>
        </div>
      </div>

      <AccountantCashbookMetrics />
      
      <AccountantCashbookActions />
      
      <div className="flex-1 min-h-0">
        <AccountantCashbookTable />
      </div>

      <AccountantCashbookModals />
      
    </div>
  );
}
