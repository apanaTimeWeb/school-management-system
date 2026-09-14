"use client";

import { useHrDocuments } from "./useHrDocuments";
import HrDocumentsTabs from "./HrDocumentsTabs";
import HrDocumentsVault from "./HrDocumentsVault";
import HrDocumentsAlerts from "./HrDocumentsAlerts";
import HrDocumentsEmployeeModal from "./HrDocumentsEmployeeModal";
import { Loader2 } from "lucide-react";

export default function HrDocumentsMain() {
  const {
    activeTab, setActiveTab,
    vaultList, alerts, isLoading,
    deptFilter, setDeptFilter,
    searchFilter, setSearchFilter,
    selectedEmployee, openEmployee, closeEmployee,
    updateDocumentStatus
  } = useHrDocuments();

  return (
    <div className="flex flex-col w-full">
      <HrDocumentsTabs 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        alertCount={alerts.length}
      />

      {isLoading ? (
        <div className="w-full p-20 flex flex-col items-center justify-center bg-card border border-border rounded-lg shadow-sm">
          <Loader2 className="animate-spin text-primary mb-4" size={36} />
          <span className="text-sm text-muted-foreground font-bold">Loading Document Data...</span>
        </div>
      ) : (
        <div className="w-full">
          {activeTab === 'Vault' ? (
            <HrDocumentsVault 
              vaultList={vaultList}
              deptFilter={deptFilter} setDeptFilter={setDeptFilter}
              searchFilter={searchFilter} setSearchFilter={setSearchFilter}
              openEmployee={openEmployee}
            />
          ) : (
            <HrDocumentsAlerts alerts={alerts} />
          )}
        </div>
      )}

      <HrDocumentsEmployeeModal 
        employee={selectedEmployee}
        close={closeEmployee}
        updateStatus={updateDocumentStatus}
      />
    </div>
  );
}

