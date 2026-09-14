import React from "react";
import AccountantFinesMetrics from "./AccountantFinesMetrics";
import AccountantFinesFilters from "./AccountantFinesFilters";
import AccountantFinesTable from "./AccountantFinesTable";
import AccountantFinesModals from "./AccountantFinesModals";

export default function AccountantFinesMain() {
  return (
    <div className="p-4 md:p-6 lg:p-8 max-w-[1400px] mx-auto space-y-6 fade-in h-full flex flex-col">
      
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-2 shrink-0">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Fine Management</h1>
          <p className="text-sm text-text-secondary mt-1">Track late fees, collect fines, and request waivers globally configured by Admin.</p>
        </div>
      </div>

      <AccountantFinesMetrics />
      
      <AccountantFinesFilters />
      
      <div className="flex-1 min-h-0">
        <AccountantFinesTable />
      </div>

      <AccountantFinesModals />
      
    </div>
  );
}
