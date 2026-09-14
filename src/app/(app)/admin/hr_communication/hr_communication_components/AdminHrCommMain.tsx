"use client";

import { useAdminHrComm } from "./useAdminHrComm";
import AdminHrCommTabs from "./AdminHrCommTabs";
import AdminHrCommInbox from "./AdminHrCommInbox";
import AdminHrCommChannels from "./AdminHrCommChannels";
import AdminHrCommBroadcastModal from "./AdminHrCommBroadcastModal";
import { Loader2 } from "lucide-react";

export default function AdminHrCommMain() {
  const {
    activeTab, setActiveTab,
    messages, channels, isLoading,
    categoryFilter, setCategoryFilter, searchFilter, setSearchFilter,
    isBroadcastModalOpen, openBroadcastModal, closeBroadcastModal, sendBroadcast, toggleChannelStatus, markAsRead
  } = useAdminHrComm();

  return (
    <div className="flex flex-col w-full">
      <AdminHrCommTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {isLoading ? (
        <div className="w-full p-20 flex flex-col items-center justify-center bg-card border border-border rounded-lg shadow-sm">
          <Loader2 className="animate-spin text-primary mb-4" size={36} />
          <span className="text-sm text-muted-foreground font-bold">Loading Communications...</span>
        </div>
      ) : (
        <div className="w-full">
          {activeTab === 'Inbox' && (
            <AdminHrCommInbox 
              messages={messages}
              categoryFilter={categoryFilter} setCategoryFilter={setCategoryFilter}
              searchFilter={searchFilter} setSearchFilter={setSearchFilter}
              openBroadcast={openBroadcastModal}
              markAsRead={markAsRead}
            />
          )}
          
          {activeTab === 'Channels' && (
            <AdminHrCommChannels 
              channels={channels}
              toggleChannelStatus={toggleChannelStatus}
            />
          )}
        </div>
      )}

      <AdminHrCommBroadcastModal 
        isOpen={isBroadcastModalOpen}
        close={closeBroadcastModal}
        sendBroadcast={sendBroadcast}
      />
    </div>
  );
}
