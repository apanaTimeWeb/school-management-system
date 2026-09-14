"use client";

import { useHrOnboarding } from "./useHrOnboarding";
import HrOnboardingList from "./HrOnboardingList";
import HrOnboardingDetailModal from "./HrOnboardingDetailModal";
import { Loader2 } from "lucide-react";

export default function HrOnboardingMain() {
  const {
    candidates, isLoading,
    statusFilter, setStatusFilter,
    searchFilter, setSearchFilter,
    selectedCandidate, openCandidate, closeCandidate,
    toggleChecklist, verifyDocument, grantSystemAccess
  } = useHrOnboarding();

  return (
    <div className="flex flex-col w-full">
      {isLoading ? (
        <div className="w-full p-20 flex flex-col items-center justify-center bg-card border border-border rounded-lg shadow-sm">
          <Loader2 className="animate-spin text-primary mb-4" size={36} />
          <span className="text-sm text-muted-foreground font-bold">Loading Onboarding Pipeline...</span>
        </div>
      ) : (
        <HrOnboardingList 
          candidates={candidates}
          statusFilter={statusFilter} setStatusFilter={setStatusFilter}
          searchFilter={searchFilter} setSearchFilter={setSearchFilter}
          openCandidate={openCandidate}
        />
      )}

      <HrOnboardingDetailModal 
        candidate={selectedCandidate}
        close={closeCandidate}
        toggleChecklist={toggleChecklist}
        verifyDocument={verifyDocument}
        grantSystemAccess={grantSystemAccess}
      />
    </div>
  );
}

