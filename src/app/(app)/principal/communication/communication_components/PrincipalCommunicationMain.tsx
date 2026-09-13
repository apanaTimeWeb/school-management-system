"use client";
import React from 'react';
import { Megaphone, MessageSquarePlus, History, Send } from 'lucide-react';
import { usePrincipalCommunicationStore } from '../communication_store/usePrincipalCommunicationStore';

import PrincipalCommunicationNoticesTab from './PrincipalCommunicationNoticesTab';
import PrincipalCommunicationSendTab from './PrincipalCommunicationSendTab';
import PrincipalCommunicationHistoryTab from './PrincipalCommunicationHistoryTab';
import PrincipalCommunicationNoticeModal from './PrincipalCommunicationNoticeModal';

export default function PrincipalCommunicationMain() {
  const { activeTab, setActiveTab } = usePrincipalCommunicationStore();

  const tabs = [
    { id: 'notices', label: 'Notices & Announcements', icon: <Megaphone size={16} /> },
    { id: 'send', label: 'Send Notification', icon: <MessageSquarePlus size={16} /> },
    { id: 'history', label: 'Communication History', icon: <History size={16} /> }
  ] as const;

  return (
    <div className="w-full h-full flex flex-col min-h-screen">
      <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-[24px] font-bold text-text-primary flex items-center gap-2">
            <Send className="text-primary" size={24} />
            Communication Hub
          </h1>
          <p className="text-[14px] text-text-secondary mt-1">
            Broadcast notices, send multi-channel notifications, and review communication history.
          </p>
        </div>
      </div>

      <div className="flex border-b border-border bg-card rounded-t-lg overflow-x-auto custom-scrollbar">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex items-center gap-2 px-6 py-4 text-[14px] font-bold whitespace-nowrap transition-all border-b-2 ${
              activeTab === tab.id
                ? 'text-primary border-primary bg-primary/10'
                : 'text-text-secondary border-transparent hover:text-text-primary hover:bg-white/5'
            }`}
          >
            <span className={activeTab === tab.id ? 'text-primary' : 'text-text-secondary'}>
              {tab.icon}
            </span>
            {tab.label}
          </button>
        ))}
      </div>

      <div className="flex-1 bg-bg-main pt-6 overflow-x-hidden">
        {activeTab === 'notices' && <PrincipalCommunicationNoticesTab />}
        {activeTab === 'send' && <PrincipalCommunicationSendTab />}
        {activeTab === 'history' && <PrincipalCommunicationHistoryTab />}
      </div>

      <PrincipalCommunicationNoticeModal />
    </div>
  );
}
