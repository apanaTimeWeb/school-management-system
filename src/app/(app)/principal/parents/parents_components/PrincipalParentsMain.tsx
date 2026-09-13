"use client";
import React from 'react';
import { Users, MessageSquare, CalendarSync, Contact } from 'lucide-react';
import { usePrincipalParentsStore } from '../parents_store/usePrincipalParentsStore';

import PrincipalParentsDirectoryTab from './PrincipalParentsDirectoryTab';
import PrincipalParentsCommunicationTab from './PrincipalParentsCommunicationTab';
import PrincipalParentsMeetingsTab from './PrincipalParentsMeetingsTab';
import PrincipalParentsProfileModal from './PrincipalParentsProfileModal';
import PrincipalParentsMeetingModal from './PrincipalParentsMeetingModal';

export default function PrincipalParentsMain() {
  const { activeTab, setActiveTab } = usePrincipalParentsStore();

  const tabs = [
    { id: 'directory', label: 'Parent Directory', icon: <Contact size={16} /> },
    { id: 'communication', label: 'Communication & Complaints', icon: <MessageSquare size={16} /> },
    { id: 'meetings', label: 'Meetings & Cases', icon: <CalendarSync size={16} /> }
  ] as const;

  return (
    <div className="w-full h-full flex flex-col min-h-screen">
      <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-[24px] font-bold text-text-primary flex items-center gap-2">
            <Users className="text-primary" size={24} />
            Parent & Guardian Management
          </h1>
          <p className="text-[14px] text-text-secondary mt-1">
            Access parent directory, communications, complaints, and meeting histories.
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
        {activeTab === 'directory' && <PrincipalParentsDirectoryTab />}
        {activeTab === 'communication' && <PrincipalParentsCommunicationTab />}
        {activeTab === 'meetings' && <PrincipalParentsMeetingsTab />}
      </div>

      <PrincipalParentsProfileModal />
      <PrincipalParentsMeetingModal />
    </div>
  );
}
