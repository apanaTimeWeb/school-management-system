"use client";
import React from 'react';
import { Calendar, Users, ShieldCheck, Clock } from 'lucide-react';
import { usePrincipalTimetableStore } from '../timetable_store/usePrincipalTimetableStore';

import PrincipalTimetableClassTab from './PrincipalTimetableClassTab';
import PrincipalTimetableTeacherTab from './PrincipalTimetableTeacherTab';
import PrincipalTimetableApprovalTab from './PrincipalTimetableApprovalTab';
import PrincipalTimetableSubstituteModal from './PrincipalTimetableSubstituteModal';
import PrincipalTimetableConflictModal from './PrincipalTimetableConflictModal';

export default function PrincipalTimetableMain() {
  const { activeTab, setActiveTab } = usePrincipalTimetableStore();

  const tabs = [
    { id: 'class', label: 'Class Timetable', icon: <Calendar size={16} /> },
    { id: 'teacher', label: 'Teacher Timetable', icon: <Users size={16} /> },
    { id: 'approval', label: 'Approval & Conflicts', icon: <ShieldCheck size={16} /> },
  ] as const;

  return (
    <div className="w-full h-full flex flex-col min-h-screen">
      {/* Header */}
      <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-[24px] font-bold text-text-primary flex items-center gap-2">
            <Clock className="text-primary" size={24} />
            Timetable Management
          </h1>
          <p className="text-[14px] text-text-secondary mt-1">
            Review class and teacher schedules, assign substitutes, and resolve conflicts.
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
        {activeTab === 'class' && <PrincipalTimetableClassTab />}
        {activeTab === 'teacher' && <PrincipalTimetableTeacherTab />}
        {activeTab === 'approval' && <PrincipalTimetableApprovalTab />}
      </div>

      {/* Modals */}
      <PrincipalTimetableSubstituteModal />
      <PrincipalTimetableConflictModal />
    </div>
  );
}
