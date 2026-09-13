"use client";
import React from 'react';
import { HeartPulse, Stethoscope, AlertCircle } from 'lucide-react';
import { usePrincipalHealthStore } from '../health_store/usePrincipalHealthStore';

import PrincipalHealthOverviewTab from './PrincipalHealthOverviewTab';
import PrincipalHealthRecordsTab from './PrincipalHealthRecordsTab';
import PrincipalHealthIncidentsTab from './PrincipalHealthIncidentsTab';
import PrincipalHealthProfileModal from './PrincipalHealthProfileModal';
import PrincipalHealthIncidentModal from './PrincipalHealthIncidentModal';

export default function PrincipalHealthMain() {
  const { activeTab, setActiveTab } = usePrincipalHealthStore();

  const tabs = [
    { id: 'overview', label: 'Health Overview', icon: <HeartPulse size={16} /> },
    { id: 'records', label: 'Health Records', icon: <Stethoscope size={16} /> },
    { id: 'incidents', label: 'Medical Incidents', icon: <AlertCircle size={16} /> }
  ] as const;

  return (
    <div className="w-full h-full flex flex-col min-h-screen">
      <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-[24px] font-bold text-text-primary flex items-center gap-2">
            <HeartPulse className="text-danger" size={24} />
            Health & Medical
          </h1>
          <p className="text-[14px] text-text-secondary mt-1">
            Monitor student health overview, medical records, checkups, and emergency incidents.
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
        {activeTab === 'overview' && <PrincipalHealthOverviewTab />}
        {activeTab === 'records' && <PrincipalHealthRecordsTab />}
        {activeTab === 'incidents' && <PrincipalHealthIncidentsTab />}
      </div>

      <PrincipalHealthProfileModal />
      <PrincipalHealthIncidentModal />
    </div>
  );
}
