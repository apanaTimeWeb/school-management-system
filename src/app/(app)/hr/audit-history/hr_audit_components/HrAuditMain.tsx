"use client";

import { useHrAudit } from "./useHrAudit";
import HrAuditFilters from "./HrAuditFilters";
import HrAuditList from "./HrAuditList";
import HrAuditDiffModal from "./HrAuditDiffModal";

export default function HrAuditMain() {
  const {
    filters, setFilters, clearFilters,
    logs, isLoading,
    isDiffModalOpen, selectedLog, openDiffModal, closeDiffModal
  } = useHrAudit();

  return (
    <div className="flex flex-col w-full">
      
      <HrAuditFilters 
        filters={filters}
        setFilters={setFilters}
        clearFilters={clearFilters}
      />

      <HrAuditList 
        logs={logs}
        isLoading={isLoading}
        openDiffModal={openDiffModal}
      />

      <HrAuditDiffModal 
        log={selectedLog}
        isOpen={isDiffModalOpen}
        close={closeDiffModal}
      />

    </div>
  );
}

