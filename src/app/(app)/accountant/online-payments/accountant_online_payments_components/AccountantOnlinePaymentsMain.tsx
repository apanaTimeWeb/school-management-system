import React from "react";
import AccountantOnlinePaymentsMetrics from "./AccountantOnlinePaymentsMetrics";
import AccountantOnlinePaymentsFilters from "./AccountantOnlinePaymentsFilters";
import AccountantOnlinePaymentsTable from "./AccountantOnlinePaymentsTable";
import AccountantOnlinePaymentModals from "./AccountantOnlinePaymentModals";

export default function AccountantOnlinePaymentsMain() {
  return (
    <div className="p-4 md:p-6 lg:p-8 max-w-[1400px] mx-auto space-y-6 fade-in h-full flex flex-col">
      
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-2 shrink-0">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Online Payments</h1>
          <p className="text-sm text-text-secondary mt-1">Monitor, reconcile, and refund gateway transactions.</p>
        </div>
      </div>

      <AccountantOnlinePaymentsMetrics />
      
      <AccountantOnlinePaymentsFilters />
      
      <div className="flex-1 min-h-0">
        <AccountantOnlinePaymentsTable />
      </div>

      <AccountantOnlinePaymentModals />
      
    </div>
  );
}
