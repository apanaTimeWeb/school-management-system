"use client";
import React from 'react';
import { CalendarCheck, History, AlertTriangle } from 'lucide-react';
import { useTeacherAttendanceStore } from '../attendance_store/useTeacherAttendanceStore';
import TeacherMarkAttendance from './TeacherMarkAttendance';
import TeacherAttendanceHistory from './TeacherAttendanceHistory';
import TeacherAttendanceCorrectionModal from './TeacherAttendanceCorrectionModal';
import TeacherAttendanceLeaves from './TeacherAttendanceLeaves';
import { LOW_ATTENDANCE_ALERTS } from '../attendance_constants/TeacherAttendanceMockData';

export default function TeacherAttendanceMain() {
  const { activeTab, setActiveTab } = useTeacherAttendanceStore();

  return (
    <div className="flex flex-col h-full w-full max-w-7xl mx-auto">
      <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-[22px] font-bold text-text-primary">Attendance Management</h1>
          <p className="text-[14px] text-text-secondary mt-1">Mark daily and period-wise attendance, view history, and request corrections.</p>
        </div>
        
        {/* Tab Controls */}
        <div className="flex items-center bg-black/20 p-1 rounded-lg border border-white/5">
          <button 
            onClick={() => setActiveTab('mark')}
            className={`flex items-center gap-2 px-4 py-2 text-[13px] font-bold rounded-md transition-colors ${activeTab === 'mark' ? 'bg-primary text-black shadow-sm' : 'text-text-secondary hover:text-text-primary'}`}
          >
            <CalendarCheck size={16} /> Mark Attendance
          </button>
          <button 
            onClick={() => setActiveTab('history')}
            className={`flex items-center gap-2 px-4 py-2 text-[13px] font-bold rounded-md transition-colors ${activeTab === 'history' ? 'bg-primary text-black shadow-sm' : 'text-text-secondary hover:text-text-primary'}`}
          >
            <History size={16} /> History & Summary
          </button>
          <button 
            onClick={() => setActiveTab('leaves')}
            className={`flex items-center gap-2 px-4 py-2 text-[13px] font-bold rounded-md transition-colors ${activeTab === 'leaves' ? 'bg-primary text-black shadow-sm' : 'text-text-secondary hover:text-text-primary'}`}
          >
            <CalendarCheck size={16} /> Leave Applications
          </button>
        </div>
      </div>

      {/* Low Attendance Alerts Banner */}
      {LOW_ATTENDANCE_ALERTS.length > 0 && (
        <div className="mb-6 bg-danger/10 border border-danger/20 rounded-xl p-4">
          <div className="flex items-center gap-2 text-danger mb-2">
            <AlertTriangle size={18} />
            <h3 className="text-[14px] font-bold">Low Attendance Alerts</h3>
          </div>
          <div className="flex flex-wrap gap-4">
            {LOW_ATTENDANCE_ALERTS.map(alert => (
              <div key={alert.studentId} className="flex items-center gap-2 text-[13px] bg-danger/5 px-3 py-1.5 rounded border border-danger/10">
                <span className="font-bold text-text-primary">{alert.name}</span>
                <span className="text-text-secondary">({alert.class})</span>
                <span className="text-danger font-bold">{alert.percentage}%</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <div className="flex-1">
        {activeTab === 'mark' && <TeacherMarkAttendance />}
        {activeTab === 'history' && <TeacherAttendanceHistory />}
        {activeTab === 'leaves' && <TeacherAttendanceLeaves />}
      </div>

      <TeacherAttendanceCorrectionModal />
    </div>
  );
}
