import React from "react";
import AccountantInvoicesMetrics from "./AccountantInvoicesMetrics";
import AccountantInvoicesActions from "./AccountantInvoicesActions";
import AccountantInvoicesTable from "./AccountantInvoicesTable";
import AccountantInvoicesModals from "./AccountantInvoicesModals";

export default function AccountantInvoicesMain() {
  return (
    <div className="p-4 md:p-6 lg:p-8 max-w-[1400px] mx-auto space-y-6 fade-in h-full flex flex-col">
      
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-2 shrink-0">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Invoices</h1>
          <p className="text-sm text-text-secondary mt-1">Generate and manage student fee invoices, add taxes, and track dues.</p>
        </div>
      </div>

      <div className="shrink-0">
        <AccountantInvoicesMetrics />
      </div>
      
      <div className="shrink-0">
        <AccountantInvoicesActions />
      </div>

      <div className="flex-1 min-h-0">
        <AccountantInvoicesTable />
      </div>

      <AccountantInvoicesModals />
      
    </div>
  );
}
