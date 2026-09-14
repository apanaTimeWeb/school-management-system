"use client";

import { useAdminHrPerformance } from "./useAdminHrPerformance";
import AdminHrPerformanceTabs from "./AdminHrPerformanceTabs";
import AdminHrPerformanceList from "./AdminHrPerformanceList";
import AdminHrPerformanceHistory from "./AdminHrPerformanceHistory";
import AdminHrPerformanceModal from "./AdminHrPerformanceModal";
import { Loader2 } from "lucide-react";

export default function AdminHrPerformanceMain() {
  const {
    activeTab, setActiveTab,
    appraisals, history, isLoading,
    statusFilter, setStatusFilter,
    searchFilter, setSearchFilter,
    selectedRecord, openRecord, closeRecord,
    updateGoalAchievement, submitAppraisal
  } = useAdminHrPerformance();

  return (
    <div className="flex flex-col w-full">
      <AdminHrPerformanceTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {isLoading ? (
        <div className="w-full p-20 flex flex-col items-center justify-center bg-card border border-border rounded-lg shadow-sm">
          <Loader2 className="animate-spin text-primary mb-4" size={36} />
          <span className="text-sm text-muted-foreground font-bold">Loading Performance Records...</span>
        </div>
      ) : (
        <div className="w-full">
          {activeTab === 'Appraisal' ? (
            <AdminHrPerformanceList 
              appraisals={appraisals}
              statusFilter={statusFilter} setStatusFilter={setStatusFilter}
              searchFilter={searchFilter} setSearchFilter={setSearchFilter}
              openRecord={openRecord}
            />
          ) : (
            <AdminHrPerformanceHistory 
              history={history}
              searchFilter={searchFilter} setSearchFilter={setSearchFilter}
            />
          )}
        </div>
      )}

      <AdminHrPerformanceModal 
        record={selectedRecord}
        close={closeRecord}
        updateGoal={updateGoalAchievement}
        submitAppraisal={submitAppraisal}
      />
    </div>
  );
}
