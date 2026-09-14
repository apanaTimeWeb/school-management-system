"use client";

import { useAdminHrExit } from "./useAdminHrExit";
import AdminHrExitTabs from "./AdminHrExitTabs";
import AdminHrExitList from "./AdminHrExitList";
import AdminHrExitHistory from "./AdminHrExitHistory";
import AdminHrExitDetailModal from "./AdminHrExitDetailModal";
import { Loader2 } from "lucide-react";

export default function AdminHrExitMain() {
  const {
    activeTab, setActiveTab,
    pipeline, history, isLoading,
    statusFilter, setStatusFilter,
    searchFilter, setSearchFilter,
    selectedExit, openExit, closeExit,
    toggleClearance, markRelieved
  } = useAdminHrExit();

  return (
    <div className="flex flex-col w-full">
      <AdminHrExitTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {isLoading ? (
        <div className="w-full p-20 flex flex-col items-center justify-center bg-card border border-border rounded-lg shadow-sm">
          <Loader2 className="animate-spin text-primary mb-4" size={36} />
          <span className="text-sm text-muted-foreground font-bold">Loading Offboarding Pipeline...</span>
        </div>
      ) : (
        <div className="w-full">
          {activeTab === 'Pipeline' ? (
            <AdminHrExitList 
              pipeline={pipeline}
              statusFilter={statusFilter} setStatusFilter={setStatusFilter}
              searchFilter={searchFilter} setSearchFilter={setSearchFilter}
              openExit={openExit}
            />
          ) : (
            <AdminHrExitHistory 
              history={history}
              searchFilter={searchFilter} setSearchFilter={setSearchFilter}
            />
          )}
        </div>
      )}

      <AdminHrExitDetailModal 
        exitRecord={selectedExit}
        close={closeExit}
        toggleClearance={toggleClearance}
        markRelieved={markRelieved}
      />
    </div>
  );
}
