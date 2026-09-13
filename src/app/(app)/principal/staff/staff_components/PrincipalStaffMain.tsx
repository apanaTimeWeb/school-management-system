"use client";
import React from 'react';
import { Users, Briefcase, UserCircle } from 'lucide-react';
import { usePrincipalStaffStore } from '../staff_store/usePrincipalStaffStore';

import PrincipalStaffDirectoryTab from './PrincipalStaffDirectoryTab';
import PrincipalStaffPerformanceTab from './PrincipalStaffPerformanceTab';
import PrincipalStaffProfileModal from './PrincipalStaffProfileModal';

export default function PrincipalStaffMain() {
  const { activeTab, setActiveTab } = usePrincipalStaffStore();

  const tabs = [
    { id: 'directory', label: 'Staff Directory', icon: <Users size={16} /> },
    { id: 'performance', label: 'Performance & Workload', icon: <Briefcase size={16} /> }
  ] as const;

  return (
    <div className="w-full h-full flex flex-col min-h-screen">
      {/* Header */}
      <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-[24px] font-bold text-text-primary flex items-center gap-2">
            <UserCircle className="text-primary" size={24} />
            Teacher & Staff Management
          </h1>
          <p className="text-[14px] text-text-secondary mt-1">
            Manage staff directories, view teacher profiles, track workload, and monitor performance.
          </p>
        </div>
      </div>

      {/* Main Tabs */}
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

      {/* Tab Content */}
      <div className="flex-1 bg-bg-main pt-6 overflow-x-hidden">
        {activeTab === 'directory' && <PrincipalStaffDirectoryTab />}
        {activeTab === 'performance' && <PrincipalStaffPerformanceTab />}
      </div>

      {/* Profile Modal */}
      <PrincipalStaffProfileModal />
    </div>
  );
}
