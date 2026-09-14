import React from "react";
import AccountantAuditStats from "./AccountantAuditStats";
import AccountantAuditActions from "./AccountantAuditActions";
import AccountantAuditTable from "./AccountantAuditTable";
import AccountantAuditModals from "./AccountantAuditModals";

export default function AccountantAuditMain() {
  return (
    <div className="p-4 md:p-6 lg:p-8 max-w-[1400px] mx-auto space-y-6 fade-in h-full flex flex-col">
      
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-2 shrink-0">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Audit & History</h1>
          <p className="text-sm text-text-secondary mt-1">Immutable ledger tracking who modified what, when, and from which device.</p>
        </div>
      </div>

      <div className="shrink-0">
        <AccountantAuditStats />
      </div>
      
      <div className="shrink-0">
        <AccountantAuditActions />
      </div>

      <div className="flex-1 min-h-0">
        <AccountantAuditTable />
      </div>

      <AccountantAuditModals />
      
    </div>
  );
}
