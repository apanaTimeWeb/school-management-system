import React from "react";
import AccountantDefaultersAging from "./AccountantDefaultersAging";
import AccountantDefaultersFilters from "./AccountantDefaultersFilters";
import AccountantDefaultersTable from "./AccountantDefaultersTable";
import AccountantDefaultersModals from "./AccountantDefaultersModals";

export default function AccountantDefaultersMain() {
  return (
    <div className="p-4 md:p-6 lg:p-8 max-w-[1400px] mx-auto space-y-6 fade-in h-full flex flex-col">
      
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-2 shrink-0">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Fee Defaulters</h1>
          <p className="text-sm text-text-secondary mt-1">Track outstanding dues, monitor aging, and manage follow-ups.</p>
        </div>
      </div>

      <AccountantDefaultersAging />
      
      <AccountantDefaultersFilters />
      
      <div className="flex-1 min-h-0">
        <AccountantDefaultersTable />
      </div>

      <AccountantDefaultersModals />
      
    </div>
  );
}
