"use client";
import React from 'react';
import TeacherStatsCards from './TeacherStatsCards';
import QuickActionsWidget from './QuickActionsWidget';
import TodayTimetableWidget from './TodayTimetableWidget';
import PendingTasksWidget from './PendingTasksWidget';
import NoticeBoardWidget from './NoticeBoardWidget';

export default function TeacherDashboardMain() {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="mb-6">
        <h1 className="text-[22px] font-bold text-text-primary">Welcome, Mr. R. Kumar! 👋</h1>
        <p className="text-[14px] text-text-secondary mt-1">Here is what is happening with your classes today.</p>
      </div>

      <TeacherStatsCards />
      
      <QuickActionsWidget />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Left Column: Timetable (Taller) */}
        <div className="lg:col-span-1 h-[450px]">
          <TodayTimetableWidget />
        </div>

        {/* Middle Column: Pending Tasks */}
        <div className="lg:col-span-1 h-[450px]">
          <PendingTasksWidget />
        </div>

        {/* Right Column: Notice Board & Alerts */}
        <div className="lg:col-span-1 h-[450px]">
          <NoticeBoardWidget />
        </div>
      </div>
      
    </div>
  );
}
