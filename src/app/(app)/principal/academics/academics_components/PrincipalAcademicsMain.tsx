"use client";
import React from 'react';
import { BookOpen, Layers, Users, Calendar, Target } from 'lucide-react';
import { usePrincipalAcademicsStore } from '../academics_store/usePrincipalAcademicsStore';

import PrincipalAcademicsClassesTab from './PrincipalAcademicsClassesTab';
import PrincipalAcademicsSubjectsTab from './PrincipalAcademicsSubjectsTab';
import PrincipalAcademicsProgressTab from './PrincipalAcademicsProgressTab';
import PrincipalAcademicsCalendarTab from './PrincipalAcademicsCalendarTab';
import PrincipalAcademicsAssignTeacherModal from './PrincipalAcademicsAssignTeacherModal';
import PrincipalAcademicsHODModal from './PrincipalAcademicsHODModal';

export default function PrincipalAcademicsMain() {
  const { activeTab, setActiveTab } = usePrincipalAcademicsStore();

  const tabs = [
    { id: 'classes', label: 'Classes & Sections', icon: <Layers size={16} /> },
    { id: 'subjects', label: 'Subjects & Curriculum', icon: <BookOpen size={16} /> },
    { id: 'progress', label: 'Academic Progress', icon: <Target size={16} /> },
    { id: 'calendar', label: 'Academic Calendar', icon: <Calendar size={16} /> },
  ] as const;

  return (
    <div className="w-full h-full flex flex-col min-h-screen">
      {/* Header */}
      <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-[24px] font-bold text-text-primary flex items-center gap-2">
            <BookOpen className="text-primary" size={24} />
            Academic Management
          </h1>
          <p className="text-[14px] text-text-secondary mt-1">
            Manage classes, assign teachers and HODs, and monitor syllabus progress.
          </p>
        </div>
      </div>

      {/* Main Tabs */}
      <div className="flex border-b border-border bg-card rounded-t-lg overflow-x-auto custom-scrollbar">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
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
      <div className="flex-1 bg-bg-main pt-6">
        {activeTab === 'classes' && <PrincipalAcademicsClassesTab />}
        {activeTab === 'subjects' && <PrincipalAcademicsSubjectsTab />}
        {activeTab === 'progress' && <PrincipalAcademicsProgressTab />}
        {activeTab === 'calendar' && <PrincipalAcademicsCalendarTab />}
      </div>

      {/* Modals */}
      <PrincipalAcademicsAssignTeacherModal />
      <PrincipalAcademicsHODModal />
    </div>
  );
}
