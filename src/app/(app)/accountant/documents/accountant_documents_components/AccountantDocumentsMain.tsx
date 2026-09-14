import React from "react";
import AccountantDocumentsStats from "./AccountantDocumentsStats";
import AccountantDocumentsActions from "./AccountantDocumentsActions";
import AccountantDocumentsTable from "./AccountantDocumentsTable";
import AccountantDocumentsModals from "./AccountantDocumentsModals";

export default function AccountantDocumentsMain() {
  return (
    <div className="p-4 md:p-6 lg:p-8 max-w-[1400px] mx-auto space-y-6 fade-in h-full flex flex-col">
      
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-2 shrink-0">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Financial Documents</h1>
          <p className="text-sm text-text-secondary mt-1">Central repository for managing bills, invoices, cheque images, and payment proofs.</p>
        </div>
      </div>

      <div className="shrink-0">
        <AccountantDocumentsStats />
      </div>
      
      <div className="shrink-0">
        <AccountantDocumentsActions />
      </div>

      <div className="flex-1 min-h-0">
        <AccountantDocumentsTable />
      </div>

      <AccountantDocumentsModals />
      
    </div>
  );
}
