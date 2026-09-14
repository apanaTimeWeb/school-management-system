"use client";

import { useAdminHrRecruitment } from "./useAdminHrRecruitment";
import AdminHrRecruitmentTabs from "./AdminHrRecruitmentTabs";
import AdminHrRecruitmentJobs from "./AdminHrRecruitmentJobs";
import AdminHrRecruitmentApplications from "./AdminHrRecruitmentApplications";
import AdminHrRecruitmentCandidateModal from "./AdminHrRecruitmentCandidateModal";
import { Loader2 } from "lucide-react";

export default function AdminHrRecruitmentMain() {
  const {
    activeTab, setActiveTab,
    jobs, applications, isLoading,
    jobStatus, setJobStatus,
    appStatus, setAppStatus,
    appJobId, setAppJobId,
    appSearch, setAppSearch,
    selectedCandidate, openCandidateModal, closeCandidateModal,
    updateCandidateStatus
  } = useAdminHrRecruitment();

  return (
    <div className="flex flex-col w-full">
      <AdminHrRecruitmentTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {isLoading ? (
        <div className="w-full p-20 flex flex-col items-center justify-center bg-card border border-border rounded-lg shadow-sm">
          <Loader2 className="animate-spin text-primary mb-4" size={36} />
          <span className="text-sm text-muted-foreground font-bold">Loading Recruitment Data...</span>
        </div>
      ) : (
        <div className="w-full">
          {activeTab === 'Jobs' ? (
            <AdminHrRecruitmentJobs jobs={jobs} jobStatus={jobStatus} setJobStatus={setJobStatus} />
          ) : (
            <AdminHrRecruitmentApplications 
              applications={applications} jobs={jobs}
              appStatus={appStatus} setAppStatus={setAppStatus}
              appJobId={appJobId} setAppJobId={setAppJobId}
              appSearch={appSearch} setAppSearch={setAppSearch}
              openCandidateModal={openCandidateModal}
            />
          )}
        </div>
      )}

      <AdminHrRecruitmentCandidateModal 
        candidate={selectedCandidate}
        close={closeCandidateModal}
        updateStatus={updateCandidateStatus}
      />
    </div>
  );
}
