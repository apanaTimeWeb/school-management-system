"use client";
import React from 'react';
import { CalendarCheck, Users, UserCheck, ShieldAlert, FileSignature } from 'lucide-react';
import { usePrincipalAttendanceStore } from '../attendance_store/usePrincipalAttendanceStore';

import PrincipalAttendanceOverviewTab from './PrincipalAttendanceOverviewTab';
import PrincipalAttendanceStudentsTab from './PrincipalAttendanceStudentsTab';
import PrincipalAttendanceStaffTab from './PrincipalAttendanceStaffTab';
import PrincipalAttendanceRequestsTab from './PrincipalAttendanceRequestsTab';
import PrincipalAttendanceCorrectionModal from './PrincipalAttendanceCorrectionModal';

export default function PrincipalAttendanceMain() {
  const { activeTab, setActiveTab } = usePrincipalAttendanceStore();

  const tabs = [
    { id: 'overview', label: 'Daily Summary', icon: <CalendarCheck size={16} /> },
    { id: 'students', label: 'Student Attendance', icon: <Users size={16} /> },
    { id: 'staff', label: 'Staff Attendance', icon: <UserCheck size={16} /> },
    { id: 'requests', label: 'Correction Requests', icon: <FileSignature size={16} /> },
  ] as const;

  return (
    <div className="w-full h-full flex flex-col min-h-screen">
      {/* Header */}
      <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-[24px] font-bold text-text-primary flex items-center gap-2">
            <CalendarCheck className="text-primary" size={24} />
            Attendance Management
          </h1>
          <p className="text-[14px] text-text-secondary mt-1">
            Monitor daily attendance, view alerts, and manage correction requests.
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
      <div className="flex-1 bg-bg-main pt-6 overflow-x-hidden">
        {activeTab === 'overview' && <PrincipalAttendanceOverviewTab />}
        {activeTab === 'students' && <PrincipalAttendanceStudentsTab />}
        {activeTab === 'staff' && <PrincipalAttendanceStaffTab />}
        {activeTab === 'requests' && <PrincipalAttendanceRequestsTab />}
      </div>

      {/* Modals */}
      <PrincipalAttendanceCorrectionModal />
    </div>
  );
}
