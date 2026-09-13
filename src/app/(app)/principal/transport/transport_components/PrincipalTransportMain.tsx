"use client";
import React from 'react';
import { Bus, Map, Users, MessageSquareWarning } from 'lucide-react';
import { usePrincipalTransportStore } from '../transport_store/usePrincipalTransportStore';

import PrincipalTransportOverviewTab from './PrincipalTransportOverviewTab';
import PrincipalTransportAllocationTab from './PrincipalTransportAllocationTab';
import PrincipalTransportComplaintsTab from './PrincipalTransportComplaintsTab';
import PrincipalTransportRouteModal from './PrincipalTransportRouteModal';
import PrincipalTransportComplaintModal from './PrincipalTransportComplaintModal';

export default function PrincipalTransportMain() {
  const { activeTab, setActiveTab } = usePrincipalTransportStore();

  const tabs = [
    { id: 'overview', label: 'Route Overview', icon: <Map size={16} /> },
    { id: 'allocation', label: 'Student Allocation', icon: <Users size={16} /> },
    { id: 'complaints', label: 'Transport Complaints', icon: <MessageSquareWarning size={16} /> }
  ] as const;

  return (
    <div className="w-full h-full flex flex-col min-h-screen">
      <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-[24px] font-bold text-text-primary flex items-center gap-2">
            <Bus className="text-warning" size={24} />
            Transport Monitoring
          </h1>
          <p className="text-[14px] text-text-secondary mt-1">
            Monitor routes, student allocations, vehicle status, and handle transport complaints.
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
        {activeTab === 'overview' && <PrincipalTransportOverviewTab />}
        {activeTab === 'allocation' && <PrincipalTransportAllocationTab />}
        {activeTab === 'complaints' && <PrincipalTransportComplaintsTab />}
      </div>

      <PrincipalTransportRouteModal />
      <PrincipalTransportComplaintModal />
    </div>
  );
}
