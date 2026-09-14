"use client";

import { useHrOffice } from "./useHrOffice";
import HrOfficeTabs from "./HrOfficeTabs";
import HrOfficeNotices from "./HrOfficeNotices";
import HrOfficeTasks from "./HrOfficeTasks";
import HrOfficeDocuments from "./HrOfficeDocuments";
import HrOfficeNoticeModal from "./HrOfficeNoticeModal";
import { Loader2 } from "lucide-react";

export default function HrOfficeMain() {
  const {
    activeTab, setActiveTab,
    notices, tasks, documents, isLoading,
    typeFilter, setTypeFilter, searchFilter, setSearchFilter,
    isNoticeModalOpen, selectedNotice, openNoticeModal, closeNoticeModal, saveNotice
  } = useHrOffice();

  return (
    <div className="flex flex-col w-full">
      <HrOfficeTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {isLoading ? (
        <div className="w-full p-20 flex flex-col items-center justify-center bg-card border border-border rounded-lg shadow-sm">
          <Loader2 className="animate-spin text-primary mb-4" size={36} />
          <span className="text-sm text-muted-foreground font-bold">Loading Office Data...</span>
        </div>
      ) : (
        <div className="w-full">
          {activeTab === 'Notices' && (
            <HrOfficeNotices 
              notices={notices}
              typeFilter={typeFilter} setTypeFilter={setTypeFilter}
              searchFilter={searchFilter} setSearchFilter={setSearchFilter}
              openModal={openNoticeModal}
            />
          )}
          
          {activeTab === 'Tasks' && (
            <HrOfficeTasks 
              tasks={tasks}
              typeFilter={typeFilter} setTypeFilter={setTypeFilter}
            />
          )}

          {activeTab === 'Documents' && (
            <HrOfficeDocuments 
              documents={documents}
              typeFilter={typeFilter} setTypeFilter={setTypeFilter}
            />
          )}
        </div>
      )}

      <HrOfficeNoticeModal 
        notice={selectedNotice}
        isOpen={isNoticeModalOpen}
        close={closeNoticeModal}
        save={saveNotice}
      />
    </div>
  );
}

