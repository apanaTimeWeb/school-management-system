"use client";
import React from 'react';
import { Users, FileEdit, ClipboardCheck, CalendarOff } from 'lucide-react';
import { TEACHER_MOCK_DATA } from '../dashboard_constants/TeacherMockData';

export default function TeacherStatsCards() {
  const { stats } = TEACHER_MOCK_DATA;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      
      {/* Assigned Classes */}
      <div className="bg-card border border-border rounded-xl p-5 flex items-start gap-4 group hover:border-info/50 transition-colors">
        <div className="w-12 h-12 rounded-lg bg-info/10 flex items-center justify-center text-info shrink-0">
          <Users size={24} />
        </div>
        <div>
          <p className="text-[13px] text-text-secondary font-medium mb-1">Assigned Classes</p>
          <div className="flex items-baseline gap-2">
            <h3 className="text-[24px] font-bold text-text-primary leading-none">{stats.assignedClasses}</h3>
            <span className="text-[12px] text-info">({stats.assignedSubjects} Subjects)</span>
          </div>
        </div>
      </div>

      {/* Pending Attendance */}
      <div className="bg-card border border-border rounded-xl p-5 flex items-start gap-4 group hover:border-warning/50 transition-colors">
        <div className="w-12 h-12 rounded-lg bg-warning/10 flex items-center justify-center text-warning shrink-0">
          <ClipboardCheck size={24} />
        </div>
        <div>
          <p className="text-[13px] text-text-secondary font-medium mb-1">Pending Attendance</p>
          <div className="flex items-baseline gap-2">
            <h3 className="text-[24px] font-bold text-text-primary leading-none">{stats.pendingAttendance}</h3>
            <span className="text-[12px] text-warning">Class Left</span>
          </div>
        </div>
      </div>

      {/* Homework & Marks */}
      <div className="bg-card border border-border rounded-xl p-5 flex items-start gap-4 group hover:border-primary/50 transition-colors">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
          <FileEdit size={24} />
        </div>
        <div>
          <p className="text-[13px] text-text-secondary font-medium mb-1">Homework & Marks</p>
          <div className="flex items-baseline gap-2">
            <h3 className="text-[24px] font-bold text-text-primary leading-none">{stats.homeworkPendingReview}</h3>
            <span className="text-[12px] text-primary">To Grade</span>
          </div>
        </div>
      </div>

      {/* Leave Status */}
      <div className="bg-card border border-border rounded-xl p-5 flex items-start gap-4 group hover:border-success/50 transition-colors">
        <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center text-success shrink-0">
          <CalendarOff size={24} />
        </div>
        <div>
          <p className="text-[13px] text-text-secondary font-medium mb-1">Leave Status</p>
          <div className="flex items-baseline gap-2 mt-2">
            <h3 className="text-[14px] font-bold text-success leading-none">{stats.leaveStatus}</h3>
          </div>
        </div>
      </div>

    </div>
  );
}
