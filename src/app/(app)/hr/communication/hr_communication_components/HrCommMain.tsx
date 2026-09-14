"use client";

import { useHrComm } from "./useHrComm";
import HrCommTabs from "./HrCommTabs";
import HrCommInbox from "./HrCommInbox";
import HrCommChannels from "./HrCommChannels";
import HrCommBroadcastModal from "./HrCommBroadcastModal";
import { Loader2 } from "lucide-react";

export default function HrCommMain() {
  const {
    activeTab, setActiveTab,
    messages, channels, isLoading,
    categoryFilter, setCategoryFilter, searchFilter, setSearchFilter,
    isBroadcastModalOpen, openBroadcastModal, closeBroadcastModal, sendBroadcast, toggleChannelStatus, markAsRead
  } = useHrComm();

  return (
    <div className="flex flex-col w-full">
      <HrCommTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {isLoading ? (
        <div className="w-full p-20 flex flex-col items-center justify-center bg-card border border-border rounded-lg shadow-sm">
          <Loader2 className="animate-spin text-primary mb-4" size={36} />
          <span className="text-sm text-muted-foreground font-bold">Loading Communications...</span>
        </div>
      ) : (
        <div className="w-full">
          {activeTab === 'Inbox' && (
            <HrCommInbox 
              messages={messages}
              categoryFilter={categoryFilter} setCategoryFilter={setCategoryFilter}
              searchFilter={searchFilter} setSearchFilter={setSearchFilter}
              openBroadcast={openBroadcastModal}
              markAsRead={markAsRead}
            />
          )}
          
          {activeTab === 'Channels' && (
            <HrCommChannels 
              channels={channels}
              toggleChannelStatus={toggleChannelStatus}
            />
          )}
        </div>
      )}

      <HrCommBroadcastModal 
        isOpen={isBroadcastModalOpen}
        close={closeBroadcastModal}
        sendBroadcast={sendBroadcast}
      />
    </div>
  );
}

