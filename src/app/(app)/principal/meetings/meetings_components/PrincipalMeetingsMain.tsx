"use client";
import React from 'react';
import { Presentation, CalendarRange, CheckSquare } from 'lucide-react';
import { usePrincipalMeetingsStore } from '../meetings_store/usePrincipalMeetingsStore';

import PrincipalMeetingsScheduleTab from './PrincipalMeetingsScheduleTab';
import PrincipalMeetingsMinutesTab from './PrincipalMeetingsMinutesTab';
import PrincipalMeetingDetailsModal from './PrincipalMeetingDetailsModal';
import PrincipalMeetingMinutesModal from './PrincipalMeetingMinutesModal';

export default function PrincipalMeetingsMain() {
  const { activeTab, setActiveTab } = usePrincipalMeetingsStore();

  const tabs = [
    { id: 'schedule', label: 'Meeting Schedule', icon: <CalendarRange size={16} /> },
    { id: 'minutes', label: 'Minutes & Action Items', icon: <CheckSquare size={16} /> }
  ] as const;

  return (
    <div className="w-full h-full flex flex-col min-h-screen">
      <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-[24px] font-bold text-text-primary flex items-center gap-2">
            <Presentation className="text-primary" size={24} />
            Meetings Management
          </h1>
          <p className="text-[14px] text-text-secondary mt-1">
            Track schedules, agendas, attendance, minutes of meetings, and follow-up action items.
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
        {activeTab === 'schedule' && <PrincipalMeetingsScheduleTab />}
        {activeTab === 'minutes' && <PrincipalMeetingsMinutesTab />}
      </div>

      <PrincipalMeetingDetailsModal />
      <PrincipalMeetingMinutesModal />
    </div>
  );
}
