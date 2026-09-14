import React from "react";
import AccountantCommunicationStats from "./AccountantCommunicationStats";
import AccountantCommunicationActions from "./AccountantCommunicationActions";
import AccountantCommunicationTable from "./AccountantCommunicationTable";
import AccountantCommunicationModals from "./AccountantCommunicationModals";

export default function AccountantCommunicationMain() {
  return (
    <div className="p-4 md:p-6 lg:p-8 max-w-[1400px] mx-auto space-y-6 fade-in h-full flex flex-col">
      
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-2 shrink-0">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Financial Communication</h1>
          <p className="text-sm text-text-secondary mt-1">Trigger Fee Reminders, Payment Confirmations, and Receipts via SMS, Email, or WhatsApp.</p>
        </div>
      </div>

      <div className="shrink-0">
        <AccountantCommunicationStats />
      </div>
      
      <div className="shrink-0">
        <AccountantCommunicationActions />
      </div>

      <div className="flex-1 min-h-0">
        <AccountantCommunicationTable />
      </div>

      <AccountantCommunicationModals />
      
    </div>
  );
}
