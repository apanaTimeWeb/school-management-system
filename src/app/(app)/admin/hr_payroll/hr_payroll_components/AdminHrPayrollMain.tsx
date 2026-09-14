"use client";

import { useAdminHrPayroll } from "./useAdminHrPayroll";
import AdminHrPayrollTabs from "./AdminHrPayrollTabs";
import AdminHrPayrollList from "./AdminHrPayrollList";
import AdminHrPayrollReports from "./AdminHrPayrollReports";
import AdminHrPayrollDetailModal from "./AdminHrPayrollDetailModal";
import { Loader2 } from "lucide-react";

export default function AdminHrPayrollMain() {
  const {
    activeTab, setActiveTab,
    records, isLoading,
    periodFilter, setPeriodFilter,
    statusFilter, setStatusFilter,
    searchFilter, setSearchFilter,
    selectedRecord, openRecord, closeRecord,
    updatePayrollStatus
  } = useAdminHrPayroll();

  return (
    <div className="flex flex-col w-full">
      <AdminHrPayrollTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {isLoading ? (
        <div className="w-full p-20 flex flex-col items-center justify-center bg-card border border-border rounded-lg shadow-sm">
          <Loader2 className="animate-spin text-primary mb-4" size={36} />
          <span className="text-sm text-muted-foreground font-bold">Loading Payroll Records...</span>
        </div>
      ) : (
        <div className="w-full">
          {activeTab === 'Pipeline' ? (
            <AdminHrPayrollList 
              records={records}
              periodFilter={periodFilter} setPeriodFilter={setPeriodFilter}
              statusFilter={statusFilter} setStatusFilter={setStatusFilter}
              searchFilter={searchFilter} setSearchFilter={setSearchFilter}
              openRecord={openRecord}
            />
          ) : (
            <AdminHrPayrollReports />
          )}
        </div>
      )}

      <AdminHrPayrollDetailModal 
        record={selectedRecord}
        close={closeRecord}
        updateStatus={updatePayrollStatus}
      />
    </div>
  );
}
