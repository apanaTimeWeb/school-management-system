"use client";

import { useHrPayroll } from "./useHrPayroll";
import HrPayrollTabs from "./HrPayrollTabs";
import HrPayrollList from "./HrPayrollList";
import HrPayrollReports from "./HrPayrollReports";
import HrPayrollDetailModal from "./HrPayrollDetailModal";
import { Loader2 } from "lucide-react";

export default function HrPayrollMain() {
  const {
    activeTab, setActiveTab,
    records, isLoading,
    periodFilter, setPeriodFilter,
    statusFilter, setStatusFilter,
    searchFilter, setSearchFilter,
    hasPaymentAuthority, setHasPaymentAuthority,
    selectedRecord, openRecord, closeRecord,
    updatePayrollStatus
  } = useHrPayroll();

  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-between items-center mb-4 bg-primary/10 border border-primary/20 p-4 rounded-xl">
        <div>
          <h3 className="text-sm font-bold text-foreground">RBAC Simulation: Payment Authority</h3>
          <p className="text-xs text-muted-foreground">Toggle to simulate whether the current logged-in user has permission to process salary payments.</p>
        </div>
        <button 
          onClick={() => setHasPaymentAuthority(!hasPaymentAuthority)}
          className={`px-4 py-2 rounded-md text-xs font-bold transition-colors ${hasPaymentAuthority ? 'bg-success text-white' : 'bg-input text-muted-foreground'}`}
        >
          {hasPaymentAuthority ? 'Authority Granted' : 'Authority Revoked'}
        </button>
      </div>

      <HrPayrollTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {isLoading ? (
        <div className="w-full p-20 flex flex-col items-center justify-center bg-card border border-border rounded-lg shadow-sm">
          <Loader2 className="animate-spin text-primary mb-4" size={36} />
          <span className="text-sm text-muted-foreground font-bold">Loading Payroll Records...</span>
        </div>
      ) : (
        <div className="w-full">
          {activeTab === 'Pipeline' ? (
            <HrPayrollList 
              records={records}
              periodFilter={periodFilter} setPeriodFilter={setPeriodFilter}
              statusFilter={statusFilter} setStatusFilter={setStatusFilter}
              searchFilter={searchFilter} setSearchFilter={setSearchFilter}
              openRecord={openRecord}
            />
          ) : (
            <HrPayrollReports />
          )}
        </div>
      )}

      <HrPayrollDetailModal 
        record={selectedRecord}
        close={closeRecord}
        updateStatus={updatePayrollStatus}
        hasPaymentAuthority={hasPaymentAuthority}
      />
    </div>
  );
}

