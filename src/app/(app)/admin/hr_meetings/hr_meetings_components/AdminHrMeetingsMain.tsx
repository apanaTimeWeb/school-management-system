"use client";

import { useAdminHrMeetings } from "./useAdminHrMeetings";
import AdminHrMeetingsTabs from "./AdminHrMeetingsTabs";
import AdminHrMeetingsList from "./AdminHrMeetingsList";
import AdminHrMeetingsActionItems from "./AdminHrMeetingsActionItems";
import AdminHrMeetingModal from "./AdminHrMeetingModal";
import { Loader2 } from "lucide-react";

export default function AdminHrMeetingsMain() {
  const {
    activeTab, setActiveTab,
    meetings, allActionItems, isLoading,
    statusFilter, setStatusFilter, searchFilter, setSearchFilter,
    isMeetingModalOpen, selectedMeeting, openMeetingModal, closeMeetingModal, saveMeeting
  } = useAdminHrMeetings();

  return (
    <div className="flex flex-col w-full">
      <AdminHrMeetingsTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {isLoading ? (
        <div className="w-full p-20 flex flex-col items-center justify-center bg-card border border-border rounded-lg shadow-sm">
          <Loader2 className="animate-spin text-primary mb-4" size={36} />
          <span className="text-sm text-muted-foreground font-bold">Loading Meetings...</span>
        </div>
      ) : (
        <div className="w-full">
          {activeTab === 'Schedule' && (
            <AdminHrMeetingsList 
              meetings={meetings}
              statusFilter={statusFilter} setStatusFilter={setStatusFilter}
              searchFilter={searchFilter} setSearchFilter={setSearchFilter}
              openModal={openMeetingModal}
            />
          )}
          
          {activeTab === 'ActionItems' && (
            <AdminHrMeetingsActionItems 
              actionItems={allActionItems}
            />
          )}
        </div>
      )}

      <AdminHrMeetingModal 
        meeting={selectedMeeting}
        isOpen={isMeetingModalOpen}
        close={closeMeetingModal}
        save={saveMeeting}
      />
    </div>
  );
}
