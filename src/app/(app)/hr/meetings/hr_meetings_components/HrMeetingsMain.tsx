"use client";

import { useHrMeetings } from "./useHrMeetings";
import HrMeetingsTabs from "./HrMeetingsTabs";
import HrMeetingsList from "./HrMeetingsList";
import HrMeetingsActionItems from "./HrMeetingsActionItems";
import HrMeetingModal from "./HrMeetingModal";
import { Loader2 } from "lucide-react";

export default function HrMeetingsMain() {
  const {
    activeTab, setActiveTab,
    meetings, allActionItems, isLoading,
    statusFilter, setStatusFilter, searchFilter, setSearchFilter,
    isMeetingModalOpen, selectedMeeting, openMeetingModal, closeMeetingModal, saveMeeting
  } = useHrMeetings();

  return (
    <div className="flex flex-col w-full">
      <HrMeetingsTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {isLoading ? (
        <div className="w-full p-20 flex flex-col items-center justify-center bg-card border border-border rounded-lg shadow-sm">
          <Loader2 className="animate-spin text-primary mb-4" size={36} />
          <span className="text-sm text-muted-foreground font-bold">Loading Meetings...</span>
        </div>
      ) : (
        <div className="w-full">
          {activeTab === 'Schedule' && (
            <HrMeetingsList 
              meetings={meetings}
              statusFilter={statusFilter} setStatusFilter={setStatusFilter}
              searchFilter={searchFilter} setSearchFilter={setSearchFilter}
              openModal={openMeetingModal}
            />
          )}
          
          {activeTab === 'ActionItems' && (
            <HrMeetingsActionItems 
              actionItems={allActionItems}
            />
          )}
        </div>
      )}

      <HrMeetingModal 
        meeting={selectedMeeting}
        isOpen={isMeetingModalOpen}
        close={closeMeetingModal}
        save={saveMeeting}
      />
    </div>
  );
}

