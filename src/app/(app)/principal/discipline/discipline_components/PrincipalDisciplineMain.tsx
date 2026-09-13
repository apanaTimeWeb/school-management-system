"use client";
import React from 'react';
import { AlertOctagon, Scale, Users2 } from 'lucide-react';
import { usePrincipalDisciplineStore } from '../discipline_store/usePrincipalDisciplineStore';

import PrincipalDisciplineIncidentsTab from './PrincipalDisciplineIncidentsTab';
import PrincipalDisciplineCounsellingTab from './PrincipalDisciplineCounsellingTab';
import PrincipalDisciplineActionModal from './PrincipalDisciplineActionModal';

export default function PrincipalDisciplineMain() {
  const { activeTab, setActiveTab } = usePrincipalDisciplineStore();

  const tabs = [
    { id: 'incidents', label: 'Incidents & Actions', icon: <AlertOctagon size={16} /> },
    { id: 'counselling', label: 'Counselling & Parent Meetings', icon: <Users2 size={16} /> }
  ] as const;

  return (
    <div className="w-full h-full flex flex-col min-h-screen">
      {/* Header */}
      <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-[24px] font-bold text-text-primary flex items-center gap-2">
            <Scale className="text-primary" size={24} />
            Discipline Management
          </h1>
          <p className="text-[14px] text-text-secondary mt-1">
            Track student/staff incidents, disciplinary actions, warnings, and counselling records.
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
        {activeTab === 'incidents' && <PrincipalDisciplineIncidentsTab />}
        {activeTab === 'counselling' && <PrincipalDisciplineCounsellingTab />}
      </div>

      {/* Action Modal */}
      <PrincipalDisciplineActionModal />
    </div>
  );
}
