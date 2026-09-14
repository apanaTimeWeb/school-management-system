"use client";

import { useAdminOffice } from "./useAdminOffice";
import AdminOfficeTabs from "./AdminOfficeTabs";
import AdminOfficeNotices from "./AdminOfficeNotices";
import AdminOfficeTasks from "./AdminOfficeTasks";
import AdminOfficeDocuments from "./AdminOfficeDocuments";
import AdminOfficeNoticeModal from "./AdminOfficeNoticeModal";
import { Loader2 } from "lucide-react";

export default function AdminOfficeMain() {
  const {
    activeTab, setActiveTab,
    notices, tasks, documents, isLoading,
    typeFilter, setTypeFilter, searchFilter, setSearchFilter,
    isNoticeModalOpen, selectedNotice, openNoticeModal, closeNoticeModal, saveNotice
  } = useAdminOffice();

  return (
    <div className="flex flex-col w-full">
      <AdminOfficeTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {isLoading ? (
        <div className="w-full p-20 flex flex-col items-center justify-center bg-card border border-border rounded-lg shadow-sm">
          <Loader2 className="animate-spin text-primary mb-4" size={36} />
          <span className="text-sm text-muted-foreground font-bold">Loading Office Data...</span>
        </div>
      ) : (
        <div className="w-full">
          {activeTab === 'Notices' && (
            <AdminOfficeNotices 
              notices={notices}
              typeFilter={typeFilter} setTypeFilter={setTypeFilter}
              searchFilter={searchFilter} setSearchFilter={setSearchFilter}
              openModal={openNoticeModal}
            />
          )}
          
          {activeTab === 'Tasks' && (
            <AdminOfficeTasks 
              tasks={tasks}
              typeFilter={typeFilter} setTypeFilter={setTypeFilter}
            />
          )}

          {activeTab === 'Documents' && (
            <AdminOfficeDocuments 
              documents={documents}
              typeFilter={typeFilter} setTypeFilter={setTypeFilter}
            />
          )}
        </div>
      )}

      <AdminOfficeNoticeModal 
        notice={selectedNotice}
        isOpen={isNoticeModalOpen}
        close={closeNoticeModal}
        save={saveNotice}
      />
    </div>
  );
}
