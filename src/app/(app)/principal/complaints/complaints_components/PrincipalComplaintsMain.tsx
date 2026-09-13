"use client";
import React from 'react';
import { MessageSquareWarning, ShieldAlert, History } from 'lucide-react';
import { usePrincipalComplaintsStore } from '../complaints_store/usePrincipalComplaintsStore';

import PrincipalComplaintsListTab from './PrincipalComplaintsListTab';
import PrincipalComplaintsHistoryTab from './PrincipalComplaintsHistoryTab';
import PrincipalComplaintDetailsModal from './PrincipalComplaintDetailsModal';

export default function PrincipalComplaintsMain() {
  const { activeTab, setActiveTab } = usePrincipalComplaintsStore();

  const tabs = [
    { id: 'active', label: 'Active Complaints', icon: <ShieldAlert size={16} /> },
    { id: 'history', label: 'Resolved & History', icon: <History size={16} /> }
  ] as const;

  return (
    <div className="w-full h-full flex flex-col min-h-screen">
      <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-[24px] font-bold text-text-primary flex items-center gap-2">
            <MessageSquareWarning className="text-danger" size={24} />
            Complaints & Grievance
          </h1>
          <p className="text-[14px] text-text-secondary mt-1">
            Review, assign, escalate and resolve complaints from students, parents, and staff.
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
        {activeTab === 'active' && <PrincipalComplaintsListTab />}
        {activeTab === 'history' && <PrincipalComplaintsHistoryTab />}
      </div>

      <PrincipalComplaintDetailsModal />
    </div>
  );
}
