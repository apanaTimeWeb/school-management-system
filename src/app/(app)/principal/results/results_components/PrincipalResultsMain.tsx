"use client";
import React from 'react';
import { BarChart3, LineChart, FileText, Medal } from 'lucide-react';
import { usePrincipalResultsStore } from '../results_store/usePrincipalResultsStore';

import PrincipalResultsOverviewTab from './PrincipalResultsOverviewTab';
import PrincipalResultsPerformanceTab from './PrincipalResultsPerformanceTab';
import PrincipalResultsPublishTab from './PrincipalResultsPublishTab';
import PrincipalResultsReportCardModal from './PrincipalResultsReportCardModal';

export default function PrincipalResultsMain() {
  const { activeTab, setActiveTab } = usePrincipalResultsStore();

  const tabs = [
    { id: 'overview', label: 'Overview', icon: <BarChart3 size={16} /> },
    { id: 'performance', label: 'Student Performance', icon: <LineChart size={16} /> },
    { id: 'publish', label: 'Publish & Reports', icon: <FileText size={16} /> },
  ] as const;

  return (
    <div className="w-full h-full flex flex-col min-h-screen">
      {/* Header */}
      <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-[24px] font-bold text-text-primary flex items-center gap-2">
            <Medal className="text-primary" size={24} />
            Academic Performance
          </h1>
          <p className="text-[14px] text-text-secondary mt-1">
            Analyze results, evaluate student grades, and manage report card publishing.
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
        {activeTab === 'overview' && <PrincipalResultsOverviewTab />}
        {activeTab === 'performance' && <PrincipalResultsPerformanceTab />}
        {activeTab === 'publish' && <PrincipalResultsPublishTab />}
      </div>

      {/* Modals */}
      <PrincipalResultsReportCardModal />
    </div>
  );
}
