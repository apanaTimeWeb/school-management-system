"use client";
import React from 'react';
import { Home, Users, MessageSquareWarning } from 'lucide-react';
import { usePrincipalHostelStore } from '../hostel_store/usePrincipalHostelStore';

import PrincipalHostelOverviewTab from './PrincipalHostelOverviewTab';
import PrincipalHostelStudentsTab from './PrincipalHostelStudentsTab';
import PrincipalHostelIncidentsTab from './PrincipalHostelIncidentsTab';
import PrincipalHostelRoomModal from './PrincipalHostelRoomModal';
import PrincipalHostelIncidentModal from './PrincipalHostelIncidentModal';

export default function PrincipalHostelMain() {
  const { activeTab, setActiveTab } = usePrincipalHostelStore();

  const tabs = [
    { id: 'overview', label: 'Hostel Overview', icon: <Home size={16} /> },
    { id: 'students', label: 'Student Allocation', icon: <Users size={16} /> },
    { id: 'incidents', label: 'Hostel Incidents', icon: <MessageSquareWarning size={16} /> }
  ] as const;

  return (
    <div className="w-full h-full flex flex-col min-h-screen">
      <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-[24px] font-bold text-text-primary flex items-center gap-2">
            <Home className="text-info" size={24} />
            Hostel Monitoring
          </h1>
          <p className="text-[14px] text-text-secondary mt-1">
            Monitor hostel rooms, student allocations, daily attendance, and resolve hostel incidents.
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
        {activeTab === 'overview' && <PrincipalHostelOverviewTab />}
        {activeTab === 'students' && <PrincipalHostelStudentsTab />}
        {activeTab === 'incidents' && <PrincipalHostelIncidentsTab />}
      </div>

      <PrincipalHostelRoomModal />
      <PrincipalHostelIncidentModal />
    </div>
  );
}
