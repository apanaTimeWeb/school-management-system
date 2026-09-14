"use client";

import { useHrRecruitment } from "./useHrRecruitment";
import HrRecruitmentTabs from "./HrRecruitmentTabs";
import HrRecruitmentJobs from "./HrRecruitmentJobs";
import HrRecruitmentApplications from "./HrRecruitmentApplications";
import HrRecruitmentCandidateModal from "./HrRecruitmentCandidateModal";
import { Loader2 } from "lucide-react";

export default function HrRecruitmentMain() {
  const {
    activeTab, setActiveTab,
    jobs, applications, isLoading,
    jobStatus, setJobStatus,
    appStatus, setAppStatus,
    appJobId, setAppJobId,
    appSearch, setAppSearch,
    selectedCandidate, openCandidateModal, closeCandidateModal,
    updateCandidateStatus
  } = useHrRecruitment();

  return (
    <div className="flex flex-col w-full">
      <HrRecruitmentTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {isLoading ? (
        <div className="w-full p-20 flex flex-col items-center justify-center bg-card border border-border rounded-lg shadow-sm">
          <Loader2 className="animate-spin text-primary mb-4" size={36} />
          <span className="text-sm text-muted-foreground font-bold">Loading Recruitment Data...</span>
        </div>
      ) : (
        <div className="w-full">
          {activeTab === 'Jobs' ? (
            <HrRecruitmentJobs jobs={jobs} jobStatus={jobStatus} setJobStatus={setJobStatus} />
          ) : (
            <HrRecruitmentApplications 
              applications={applications} jobs={jobs}
              appStatus={appStatus} setAppStatus={setAppStatus}
              appJobId={appJobId} setAppJobId={setAppJobId}
              appSearch={appSearch} setAppSearch={setAppSearch}
              openCandidateModal={openCandidateModal}
            />
          )}
        </div>
      )}

      <HrRecruitmentCandidateModal 
        candidate={selectedCandidate}
        close={closeCandidateModal}
        updateStatus={updateCandidateStatus}
      />
    </div>
  );
}

