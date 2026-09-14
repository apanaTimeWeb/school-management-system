"use client";

import { useAdminHrDocuments } from "./useAdminHrDocuments";
import AdminHrDocumentsTabs from "./AdminHrDocumentsTabs";
import AdminHrDocumentsVault from "./AdminHrDocumentsVault";
import AdminHrDocumentsAlerts from "./AdminHrDocumentsAlerts";
import AdminHrDocumentsEmployeeModal from "./AdminHrDocumentsEmployeeModal";
import { Loader2 } from "lucide-react";

export default function AdminHrDocumentsMain() {
  const {
    activeTab, setActiveTab,
    vaultList, alerts, isLoading,
    deptFilter, setDeptFilter,
    searchFilter, setSearchFilter,
    selectedEmployee, openEmployee, closeEmployee,
    updateDocumentStatus
  } = useAdminHrDocuments();

  return (
    <div className="flex flex-col w-full">
      <AdminHrDocumentsTabs 
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
            <AdminHrDocumentsVault 
              vaultList={vaultList}
              deptFilter={deptFilter} setDeptFilter={setDeptFilter}
              searchFilter={searchFilter} setSearchFilter={setSearchFilter}
              openEmployee={openEmployee}
            />
          ) : (
            <AdminHrDocumentsAlerts alerts={alerts} />
          )}
        </div>
      )}

      <AdminHrDocumentsEmployeeModal 
        employee={selectedEmployee}
        close={closeEmployee}
        updateStatus={updateDocumentStatus}
      />
    </div>
  );
}
