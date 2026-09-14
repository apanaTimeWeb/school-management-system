import React from "react";
import AccountantConcessionsMetrics from "./AccountantConcessionsMetrics";
import AccountantConcessionsFilters from "./AccountantConcessionsFilters";
import AccountantConcessionsTable from "./AccountantConcessionsTable";
import AccountantConcessionsModals from "./AccountantConcessionsModals";

export default function AccountantConcessionsMain() {
  return (
    <div className="p-4 md:p-6 lg:p-8 max-w-[1400px] mx-auto space-y-6 fade-in h-full flex flex-col">
      
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-2 shrink-0">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Fee Concessions</h1>
          <p className="text-sm text-text-secondary mt-1">Manage scholarships, discounts, and staff concessions requests.</p>
        </div>
      </div>

      <AccountantConcessionsMetrics />
      
      <AccountantConcessionsFilters />
      
      <div className="flex-1 min-h-0">
        <AccountantConcessionsTable />
      </div>

      <AccountantConcessionsModals />
      
    </div>
  );
}
