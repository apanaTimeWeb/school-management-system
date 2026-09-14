"use client";

import { useAdminHrOnboarding } from "./useAdminHrOnboarding";
import AdminHrOnboardingList from "./AdminHrOnboardingList";
import AdminHrOnboardingDetailModal from "./AdminHrOnboardingDetailModal";
import { Loader2 } from "lucide-react";

export default function AdminHrOnboardingMain() {
  const {
    candidates, isLoading,
    statusFilter, setStatusFilter,
    searchFilter, setSearchFilter,
    selectedCandidate, openCandidate, closeCandidate,
    toggleChecklist, verifyDocument, grantSystemAccess
  } = useAdminHrOnboarding();

  return (
    <div className="flex flex-col w-full">
      {isLoading ? (
        <div className="w-full p-20 flex flex-col items-center justify-center bg-card border border-border rounded-lg shadow-sm">
          <Loader2 className="animate-spin text-primary mb-4" size={36} />
          <span className="text-sm text-muted-foreground font-bold">Loading Onboarding Pipeline...</span>
        </div>
      ) : (
        <AdminHrOnboardingList 
          candidates={candidates}
          statusFilter={statusFilter} setStatusFilter={setStatusFilter}
          searchFilter={searchFilter} setSearchFilter={setSearchFilter}
          openCandidate={openCandidate}
        />
      )}

      <AdminHrOnboardingDetailModal 
        candidate={selectedCandidate}
        close={closeCandidate}
        toggleChecklist={toggleChecklist}
        verifyDocument={verifyDocument}
        grantSystemAccess={grantSystemAccess}
      />
    </div>
  );
}
