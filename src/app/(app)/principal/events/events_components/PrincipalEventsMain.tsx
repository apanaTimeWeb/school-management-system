"use client";
import React from 'react';
import { CalendarHeart, CalendarCheck2, UsersRound, Award } from 'lucide-react';
import { usePrincipalEventsStore } from '../events_store/usePrincipalEventsStore';

import PrincipalEventsListTab from './PrincipalEventsListTab';
import PrincipalEventsParticipantsTab from './PrincipalEventsParticipantsTab';
import PrincipalEventsCertificatesTab from './PrincipalEventsCertificatesTab';
import PrincipalEventDetailsModal from './PrincipalEventDetailsModal';

export default function PrincipalEventsMain() {
  const { activeTab, setActiveTab } = usePrincipalEventsStore();

  const tabs = [
    { id: 'events', label: 'School Events & Activities', icon: <CalendarCheck2 size={16} /> },
    { id: 'participants', label: 'Participants & Results', icon: <UsersRound size={16} /> },
    { id: 'certificates', label: 'Event Certificates', icon: <Award size={16} /> }
  ] as const;

  return (
    <div className="w-full h-full flex flex-col min-h-screen">
      <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-[24px] font-bold text-text-primary flex items-center gap-2">
            <CalendarHeart className="text-primary" size={24} />
            Events & Activities Management
          </h1>
          <p className="text-[14px] text-text-secondary mt-1">
            Approve events, track participants, and manage certificates.
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
        {activeTab === 'events' && <PrincipalEventsListTab />}
        {activeTab === 'participants' && <PrincipalEventsParticipantsTab />}
        {activeTab === 'certificates' && <PrincipalEventsCertificatesTab />}
      </div>

      <PrincipalEventDetailsModal />
    </div>
  );
}
