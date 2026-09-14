import React from "react";
import AccountantReconMetrics from "./AccountantReconMetrics";
import AccountantReconTabs from "./AccountantReconTabs";
import AccountantReconTable from "./AccountantReconTable";
import AccountantReconModals from "./AccountantReconModals";

export default function AccountantReconMain() {
  return (
    <div className="p-4 md:p-6 lg:p-8 max-w-[1400px] mx-auto space-y-6 fade-in h-full flex flex-col">
      
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-2 shrink-0">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Transaction Reconciliation</h1>
          <p className="text-sm text-text-secondary mt-1">Match ERP records against Payment Gateways, Bank Statements, and Cash.</p>
        </div>
      </div>

      <div className="shrink-0">
        <AccountantReconMetrics />
      </div>
      
      <div className="shrink-0">
        <AccountantReconTabs />
      </div>

      <div className="flex-1 min-h-0">
        <AccountantReconTable />
      </div>

      <AccountantReconModals />
      
    </div>
  );
}
