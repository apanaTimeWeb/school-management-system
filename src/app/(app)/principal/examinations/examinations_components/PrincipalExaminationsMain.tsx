"use client";
import React from 'react';
import { CalendarDays, FileCheck, FlaskConical, GraduationCap } from 'lucide-react';
import { usePrincipalExaminationsStore } from '../examinations_store/usePrincipalExaminationsStore';

import PrincipalExaminationsCalendarTab from './PrincipalExaminationsCalendarTab';
import PrincipalExaminationsApprovalTab from './PrincipalExaminationsApprovalTab';
import PrincipalExaminationsInternalsTab from './PrincipalExaminationsInternalsTab';
import PrincipalExaminationsApproveModal from './PrincipalExaminationsApproveModal';

export default function PrincipalExaminationsMain() {
  const { activeTab, setActiveTab } = usePrincipalExaminationsStore();

  const tabs = [
    { id: 'calendar', label: 'Exam Calendar', icon: <CalendarDays size={16} /> },
    { id: 'approval', label: 'Marks Approval', icon: <FileCheck size={16} /> },
    { id: 'internals', label: 'Internals & Practicals', icon: <FlaskConical size={16} /> },
  ] as const;

  return (
    <div className="w-full h-full flex flex-col min-h-screen">
      {/* Header */}
      <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-[24px] font-bold text-text-primary flex items-center gap-2">
            <GraduationCap className="text-primary" size={24} />
            Examination Management
          </h1>
          <p className="text-[14px] text-text-secondary mt-1">
            Oversee examination schedules, verify marks, and monitor assessments.
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
        {activeTab === 'calendar' && <PrincipalExaminationsCalendarTab />}
        {activeTab === 'approval' && <PrincipalExaminationsApprovalTab />}
        {activeTab === 'internals' && <PrincipalExaminationsInternalsTab />}
      </div>

      {/* Modals */}
      <PrincipalExaminationsApproveModal />
    </div>
  );
}
