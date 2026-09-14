"use client";

import React, { useState } from 'react';
import clsx from 'clsx';
import { CalendarDays, Briefcase, BookOpen, Layers, Calendar, Plus, FastForward, ArrowLeft } from 'lucide-react';

import SuperAdminSessionsTable from './academic_setup_components/SuperAdminSessionsTable';
import SuperAdminFinancialYearsTable from './academic_setup_components/SuperAdminFinancialYearsTable';
import SuperAdminHolidayWorkingDayMasterConfig from './academic_setup_components/SuperAdminHolidayWorkingDayMasterConfig';
import SuperAdminSubjectsTab from './academic_setup_components/SuperAdminSubjectsTab';
import SuperAdminGroupsTab from './academic_setup_components/SuperAdminGroupsTab';

import SuperAdminSessionDrawer from './academic_setup_components/SuperAdminSessionDrawer';
import SuperAdminRolloverDrawer from './academic_setup_components/SuperAdminRolloverDrawer';
import SuperAdminFinancialYearDrawer from './academic_setup_components/SuperAdminFinancialYearDrawer';
import SuperAdminSubjectDrawer from './academic_setup_components/SuperAdminSubjectDrawer';
import SuperAdminGroupDrawer from './academic_setup_components/SuperAdminGroupDrawer';

const TABS = [
  { id: 'sessions', label: 'Academic Sessions', icon: CalendarDays },
  { id: 'financial-years', label: 'Financial Years', icon: Briefcase },
  { id: 'subjects', label: 'Subjects', icon: BookOpen },
  { id: 'groups', label: 'Subject Groups', icon: Layers },
  { id: 'holidays', label: 'Holidays & Working Days', icon: Calendar },
];

export default function AcademicSetupPage() {
  const [activeTab, setActiveTab] = useState('sessions');
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [isRolloverOpen, setIsRolloverOpen] = useState(false);

  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto pb-10">
      <div className="flex justify-between items-center mb-2">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Academic Setup</h1>
          <p className="text-sm text-text-secondary mt-1">Configure academic sessions, financial years, subjects, and calendar.</p>
        </div>
        
        <div className="flex items-center gap-3">
          {activeTab === 'sessions' && (
            <button 
              onClick={() => setIsRolloverOpen(true)}
              className="flex items-center gap-2 px-4 py-2 bg-warning text-white text-sm font-semibold rounded-md hover:bg-warning/90 transition-colors shadow-sm"
            >
              <FastForward size={16} /> Session Rollover
            </button>
          )}

          {activeTab !== 'holidays' && (
            <button 
              onClick={() => setIsAddingNew(!isAddingNew)}
              className="flex items-center gap-2 px-4 py-2 bg-primary text-black text-sm font-semibold rounded-md hover:bg-primary-hover transition-colors shadow-sm"
            >
              {isAddingNew ? (
                <><ArrowLeft size={16} /> Cancel</>
              ) : (
                <><Plus size={16} /> Add New {
                  activeTab === 'sessions' ? 'Session' : 
                  activeTab === 'financial-years' ? 'Financial Year' : 
                  activeTab === 'subjects' ? 'Subject' : 
                  activeTab === 'groups' ? 'Group' : ''
                }</>
              )}
            </button>
          )}
        </div>
      </div>

      {/* Tabs */}
      <div className="flex overflow-x-auto hide-scrollbar border-b border-border">
        <div className="flex gap-2">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setIsAddingNew(false);
              }}
              className={clsx(
                "flex items-center gap-2 px-4 py-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap",
                activeTab === tab.id
                  ? "border-primary text-primary"
                  : "border-transparent text-text-secondary hover:text-primary hover:bg-page"
              )}
            >
              <tab.icon size={16} />
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="mt-4">
        {activeTab === 'sessions' && (
          <>
            <SuperAdminSessionsTable />
            <SuperAdminSessionDrawer isOpen={isAddingNew} onClose={() => setIsAddingNew(false)} />
            <SuperAdminRolloverDrawer isOpen={isRolloverOpen} onClose={() => setIsRolloverOpen(false)} />
          </>
        )}
        
        {activeTab === 'financial-years' && (
          <>
            <SuperAdminFinancialYearsTable />
            <SuperAdminFinancialYearDrawer isOpen={isAddingNew} onClose={() => setIsAddingNew(false)} />
          </>
        )}

        {activeTab === 'subjects' && (
          <>
            <SuperAdminSubjectsTab />
            <SuperAdminSubjectDrawer isOpen={isAddingNew} onClose={() => setIsAddingNew(false)} />
          </>
        )}

        {activeTab === 'groups' && (
          <>
            <SuperAdminGroupsTab />
            <SuperAdminGroupDrawer isOpen={isAddingNew} onClose={() => setIsAddingNew(false)} />
          </>
        )}

        {activeTab === 'holidays' && <SuperAdminHolidayWorkingDayMasterConfig />}
      </div>
    </div>
  );
}
