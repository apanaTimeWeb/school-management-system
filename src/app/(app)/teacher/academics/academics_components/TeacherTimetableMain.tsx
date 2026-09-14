"use client";
import React from 'react';
import { Calendar, LayoutGrid, AlertCircle } from 'lucide-react';
import { useTeacherTimetableStore } from '../academics_store/useTeacherTimetableStore';
import { TEACHER_TIMETABLE_NOTIFICATIONS } from '../academics_constants/TeacherTimetableMockData';
import TeacherDailyTimetable from './TeacherDailyTimetable';
import TeacherWeeklyTimetable from './TeacherWeeklyTimetable';
import TeacherPeriodDetailsModal from './TeacherPeriodDetailsModal';

export default function TeacherTimetableMain() {
  const { activeTab, setActiveTab } = useTeacherTimetableStore();

  return (
    <div className="flex flex-col h-full w-full max-w-7xl mx-auto">
      <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-[22px] font-bold text-text-primary">Academics & Timetable</h1>
          <p className="text-[14px] text-text-secondary mt-1">Manage your daily and weekly schedule.</p>
        </div>
        
        {/* Tab Controls */}
        <div className="flex items-center bg-black/20 p-1 rounded-lg border border-white/5">
          <button 
            onClick={() => setActiveTab('daily')}
            className={`flex items-center gap-2 px-4 py-2 text-[13px] font-bold rounded-md transition-colors ${activeTab === 'daily' ? 'bg-info text-white shadow-sm' : 'text-text-secondary hover:text-text-primary'}`}
          >
            <Calendar size={16} /> Daily View
          </button>
          <button 
            onClick={() => setActiveTab('weekly')}
            className={`flex items-center gap-2 px-4 py-2 text-[13px] font-bold rounded-md transition-colors ${activeTab === 'weekly' ? 'bg-info text-white shadow-sm' : 'text-text-secondary hover:text-text-primary'}`}
          >
            <LayoutGrid size={16} /> Weekly View
          </button>
        </div>
      </div>

      {/* Notifications Banner */}
      {TEACHER_TIMETABLE_NOTIFICATIONS.length > 0 && (
        <div className="mb-6 space-y-2">
          {TEACHER_TIMETABLE_NOTIFICATIONS.map(notif => (
            <div key={notif.id} className={`flex items-center gap-3 p-3 rounded-lg border ${notif.type === 'warning' ? 'bg-warning/10 border-warning/20 text-warning' : 'bg-info/10 border-info/20 text-info'}`}>
              <AlertCircle size={18} />
              <p className="text-[13px] font-semibold">{notif.text}</p>
            </div>
          ))}
        </div>
      )}

      {/* Main Content Area */}
      <div className="flex-1">
        {activeTab === 'daily' ? <TeacherDailyTimetable /> : <TeacherWeeklyTimetable />}
      </div>

      {/* Modals */}
      <TeacherPeriodDetailsModal />
    </div>
  );
}
