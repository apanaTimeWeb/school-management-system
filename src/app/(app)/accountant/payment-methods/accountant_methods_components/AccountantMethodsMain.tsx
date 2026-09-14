import React from "react";
import AccountantMethodsMetrics from "./AccountantMethodsMetrics";
import AccountantMethodsHeader from "./AccountantMethodsHeader";
import AccountantMethodsGrid from "./AccountantMethodsGrid";
import AccountantMethodsModals from "./AccountantMethodsModals";

export default function AccountantMethodsMain() {
  return (
    <div className="p-4 md:p-6 lg:p-8 max-w-[1400px] mx-auto space-y-6 fade-in h-full flex flex-col">
      
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-2 shrink-0">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Payment Methods Config</h1>
          <p className="text-sm text-text-secondary mt-1">Manage active offline and online payment methods for fee collection.</p>
        </div>
      </div>

      <AccountantMethodsMetrics />
      
      <AccountantMethodsHeader />
      
      <div className="flex-1 min-h-0">
        <AccountantMethodsGrid />
      </div>

      <AccountantMethodsModals />
      
    </div>
  );
}
