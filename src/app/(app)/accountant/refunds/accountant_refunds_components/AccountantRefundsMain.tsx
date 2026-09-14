import React from "react";
import AccountantRefundsMetrics from "./AccountantRefundsMetrics";
import AccountantRefundsFilters from "./AccountantRefundsFilters";
import AccountantRefundsTable from "./AccountantRefundsTable";
import AccountantRefundsModals from "./AccountantRefundsModals";

export default function AccountantRefundsMain() {
  return (
    <div className="p-4 md:p-6 lg:p-8 max-w-[1400px] mx-auto space-y-6 fade-in h-full flex flex-col">
      
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-2 shrink-0">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Refund Management</h1>
          <p className="text-sm text-text-secondary mt-1">Initiate refund requests, track approval status, and process payments.</p>
        </div>
      </div>

      <AccountantRefundsMetrics />
      
      <AccountantRefundsFilters />
      
      <div className="flex-1 min-h-0">
        <AccountantRefundsTable />
      </div>

      <AccountantRefundsModals />
      
    </div>
  );
}
