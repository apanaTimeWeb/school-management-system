"use client";

import { useAdminHrWorkload } from "./useAdminHrWorkload";
import AdminHrWorkloadTabs from "./AdminHrWorkloadTabs";
import AdminHrWorkloadList from "./AdminHrWorkloadList";
import AdminHrWorkloadSummary from "./AdminHrWorkloadSummary";
import AdminHrWorkloadModal from "./AdminHrWorkloadModal";
import { Loader2 } from "lucide-react";

export default function AdminHrWorkloadMain() {
  const {
    activeTab, setActiveTab,
    records, isLoading,
    deptFilter, setDeptFilter,
    searchFilter, setSearchFilter,
    selectedRecord, openRecord, closeRecord,
    saveAssignments
  } = useAdminHrWorkload();

  return (
    <div className="flex flex-col w-full">
      <AdminHrWorkloadTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {isLoading ? (
        <div className="w-full p-20 flex flex-col items-center justify-center bg-card border border-border rounded-lg shadow-sm">
          <Loader2 className="animate-spin text-primary mb-4" size={36} />
          <span className="text-sm text-muted-foreground font-bold">Loading Workload Records...</span>
        </div>
      ) : (
        <div className="w-full">
          {activeTab === 'List' ? (
            <AdminHrWorkloadList 
              records={records}
              deptFilter={deptFilter} setDeptFilter={setDeptFilter}
              searchFilter={searchFilter} setSearchFilter={setSearchFilter}
              openRecord={openRecord}
            />
          ) : (
            <AdminHrWorkloadSummary />
          )}
        </div>
      )}

      <AdminHrWorkloadModal 
        record={selectedRecord}
        close={closeRecord}
        save={saveAssignments}
      />
    </div>
  );
}
