"use client";

import { useAdminHrAudit } from "./useAdminHrAudit";
import AdminHrAuditFilters from "./AdminHrAuditFilters";
import AdminHrAuditList from "./AdminHrAuditList";
import AdminHrAuditDiffModal from "./AdminHrAuditDiffModal";

export default function AdminHrAuditMain() {
  const {
    filters, setFilters, clearFilters,
    logs, isLoading,
    isDiffModalOpen, selectedLog, openDiffModal, closeDiffModal
  } = useAdminHrAudit();

  return (
    <div className="flex flex-col w-full">
      
      <AdminHrAuditFilters 
        filters={filters}
        setFilters={setFilters}
        clearFilters={clearFilters}
      />

      <AdminHrAuditList 
        logs={logs}
        isLoading={isLoading}
        openDiffModal={openDiffModal}
      />

      <AdminHrAuditDiffModal 
        log={selectedLog}
        isOpen={isDiffModalOpen}
        close={closeDiffModal}
      />

    </div>
  );
}
