"use client";

import { useHrWorkload } from "./useHrWorkload";
import HrWorkloadTabs from "./HrWorkloadTabs";
import HrWorkloadList from "./HrWorkloadList";
import HrWorkloadSummary from "./HrWorkloadSummary";
import HrWorkloadModal from "./HrWorkloadModal";
import { Loader2 } from "lucide-react";

export default function HrWorkloadMain() {
  const {
    activeTab, setActiveTab,
    records, isLoading,
    deptFilter, setDeptFilter,
    searchFilter, setSearchFilter,
    selectedRecord, openRecord, closeRecord,
    saveAssignments
  } = useHrWorkload();

  return (
    <div className="flex flex-col w-full">
      <HrWorkloadTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {isLoading ? (
        <div className="w-full p-20 flex flex-col items-center justify-center bg-card border border-border rounded-lg shadow-sm">
          <Loader2 className="animate-spin text-primary mb-4" size={36} />
          <span className="text-sm text-muted-foreground font-bold">Loading Workload Records...</span>
        </div>
      ) : (
        <div className="w-full">
          {activeTab === 'List' ? (
            <HrWorkloadList 
              records={records}
              deptFilter={deptFilter} setDeptFilter={setDeptFilter}
              searchFilter={searchFilter} setSearchFilter={setSearchFilter}
              openRecord={openRecord}
            />
          ) : (
            <HrWorkloadSummary />
          )}
        </div>
      )}

      <HrWorkloadModal 
        record={selectedRecord}
        close={closeRecord}
        save={saveAssignments}
      />
    </div>
  );
}

