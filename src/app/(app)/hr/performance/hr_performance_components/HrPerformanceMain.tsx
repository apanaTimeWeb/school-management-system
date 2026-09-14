"use client";

import { useHrPerformance } from "./useHrPerformance";
import HrPerformanceTabs from "./HrPerformanceTabs";
import HrPerformanceList from "./HrPerformanceList";
import HrPerformanceHistory from "./HrPerformanceHistory";
import HrPerformanceModal from "./HrPerformanceModal";
import { Loader2 } from "lucide-react";

export default function HrPerformanceMain() {
  const {
    activeTab, setActiveTab,
    appraisals, history, isLoading,
    statusFilter, setStatusFilter,
    searchFilter, setSearchFilter,
    selectedRecord, openRecord, closeRecord,
    updateGoalAchievement, submitAppraisal
  } = useHrPerformance();

  return (
    <div className="flex flex-col w-full">
      <HrPerformanceTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {isLoading ? (
        <div className="w-full p-20 flex flex-col items-center justify-center bg-card border border-border rounded-lg shadow-sm">
          <Loader2 className="animate-spin text-primary mb-4" size={36} />
          <span className="text-sm text-muted-foreground font-bold">Loading Performance Records...</span>
        </div>
      ) : (
        <div className="w-full">
          {activeTab === 'Appraisal' ? (
            <HrPerformanceList 
              appraisals={appraisals}
              statusFilter={statusFilter} setStatusFilter={setStatusFilter}
              searchFilter={searchFilter} setSearchFilter={setSearchFilter}
              openRecord={openRecord}
            />
          ) : (
            <HrPerformanceHistory 
              history={history}
              searchFilter={searchFilter} setSearchFilter={setSearchFilter}
            />
          )}
        </div>
      )}

      <HrPerformanceModal 
        record={selectedRecord}
        close={closeRecord}
        updateGoal={updateGoalAchievement}
        submitAppraisal={submitAppraisal}
      />
    </div>
  );
}

