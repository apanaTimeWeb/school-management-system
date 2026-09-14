"use client";

import { useHrTransfer } from "./useHrTransfer";
import HrTransferTabs from "./HrTransferTabs";
import HrTransferRequests from "./HrTransferRequests";
import HrTransferHistory from "./HrTransferHistory";
import HrTransferInitiateModal from "./HrTransferInitiateModal";
import { Loader2 } from "lucide-react";

export default function HrTransferMain() {
  const {
    activeTab, setActiveTab,
    requests, history, isLoading,
    reqType, setReqType,
    reqSearch, setReqSearch,
    isInitiateModalOpen, setIsInitiateModalOpen,
    updateRequestStatus, submitNewRequest
  } = useHrTransfer();

  return (
    <div className="flex flex-col w-full">
      <HrTransferTabs 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        openInitiateModal={() => setIsInitiateModalOpen(true)}
      />

      {isLoading ? (
        <div className="w-full p-20 flex flex-col items-center justify-center bg-card border border-border rounded-lg shadow-sm">
          <Loader2 className="animate-spin text-primary mb-4" size={36} />
          <span className="text-sm text-muted-foreground font-bold">Loading Transfer Data...</span>
        </div>
      ) : (
        <div className="w-full">
          {activeTab === 'Requests' ? (
            <HrTransferRequests 
              requests={requests}
              reqType={reqType} setReqType={setReqType}
              reqSearch={reqSearch} setReqSearch={setReqSearch}
              updateStatus={updateRequestStatus}
            />
          ) : (
            <HrTransferHistory 
              history={history}
              reqType={reqType} setReqType={setReqType}
              reqSearch={reqSearch} setReqSearch={setReqSearch}
            />
          )}
        </div>
      )}

      <HrTransferInitiateModal 
        isOpen={isInitiateModalOpen}
        close={() => setIsInitiateModalOpen(false)}
        submit={submitNewRequest}
      />
    </div>
  );
}

