import React from "react";
import AccountantClosingSummary from "./AccountantClosingSummary";
import AccountantClosingHistory from "./AccountantClosingHistory";
import AccountantClosingModals from "./AccountantClosingModals";

export default function AccountantClosingMain() {
  return (
    <div className="p-4 md:p-6 lg:p-8 max-w-[1400px] mx-auto space-y-6 fade-in h-full flex flex-col">
      
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-2 shrink-0">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Daily Closing & EOD</h1>
          <p className="text-sm text-text-secondary mt-1">End of day settlement combining Cash, Bank, Online Collections, and Deductions.</p>
        </div>
      </div>

      <div className="shrink-0">
        <AccountantClosingSummary />
      </div>
      
      <div className="flex-1 min-h-0">
        <AccountantClosingHistory />
      </div>

      <AccountantClosingModals />
      
    </div>
  );
}
