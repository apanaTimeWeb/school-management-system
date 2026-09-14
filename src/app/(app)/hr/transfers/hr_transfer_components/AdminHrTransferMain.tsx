"use client";

import { useAdminHrTransfer } from "./useAdminHrTransfer";
import AdminHrTransferTabs from "./AdminHrTransferTabs";
import AdminHrTransferRequests from "./AdminHrTransferRequests";
import AdminHrTransferHistory from "./AdminHrTransferHistory";
import AdminHrTransferInitiateModal from "./AdminHrTransferInitiateModal";
import { Loader2 } from "lucide-react";

export default function AdminHrTransferMain() {
  const {
    activeTab, setActiveTab,
    requests, history, isLoading,
    reqType, setReqType,
    reqSearch, setReqSearch,
    isInitiateModalOpen, setIsInitiateModalOpen,
    updateRequestStatus, submitNewRequest
  } = useAdminHrTransfer();

  return (
    <div className="flex flex-col w-full">
      <AdminHrTransferTabs 
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
            <AdminHrTransferRequests 
              requests={requests}
              reqType={reqType} setReqType={setReqType}
              reqSearch={reqSearch} setReqSearch={setReqSearch}
              updateStatus={updateRequestStatus}
            />
          ) : (
            <AdminHrTransferHistory 
              history={history}
              reqType={reqType} setReqType={setReqType}
              reqSearch={reqSearch} setReqSearch={setReqSearch}
            />
          )}
        </div>
      )}

      <AdminHrTransferInitiateModal 
        isOpen={isInitiateModalOpen}
        close={() => setIsInitiateModalOpen(false)}
        submit={submitNewRequest}
      />
    </div>
  );
}
