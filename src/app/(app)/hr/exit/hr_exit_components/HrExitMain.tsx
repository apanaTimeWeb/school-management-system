"use client";

import { useHrExit } from "./useHrExit";
import HrExitTabs from "./HrExitTabs";
import HrExitList from "./HrExitList";
import HrExitHistory from "./HrExitHistory";
import HrExitDetailModal from "./HrExitDetailModal";
import { Loader2 } from "lucide-react";

export default function HrExitMain() {
  const {
    activeTab, setActiveTab,
    pipeline, history, isLoading,
    statusFilter, setStatusFilter,
    searchFilter, setSearchFilter,
    selectedExit, openExit, closeExit,
    toggleClearance, markRelieved
  } = useHrExit();

  return (
    <div className="flex flex-col w-full">
      <HrExitTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {isLoading ? (
        <div className="w-full p-20 flex flex-col items-center justify-center bg-card border border-border rounded-lg shadow-sm">
          <Loader2 className="animate-spin text-primary mb-4" size={36} />
          <span className="text-sm text-muted-foreground font-bold">Loading Offboarding Pipeline...</span>
        </div>
      ) : (
        <div className="w-full">
          {activeTab === 'Pipeline' ? (
            <HrExitList 
              pipeline={pipeline}
              statusFilter={statusFilter} setStatusFilter={setStatusFilter}
              searchFilter={searchFilter} setSearchFilter={setSearchFilter}
              openExit={openExit}
            />
          ) : (
            <HrExitHistory 
              history={history}
              searchFilter={searchFilter} setSearchFilter={setSearchFilter}
            />
          )}
        </div>
      )}

      <HrExitDetailModal 
        exitRecord={selectedExit}
        close={closeExit}
        toggleClearance={toggleClearance}
        markRelieved={markRelieved}
      />
    </div>
  );
}

