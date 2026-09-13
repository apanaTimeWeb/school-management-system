"use client";
import React from 'react';
import { ListTodo, FileEdit, LineChart, ChevronRight } from 'lucide-react';
import { TEACHER_MOCK_DATA } from '../dashboard_constants/TeacherMockData';

export default function PendingTasksWidget() {
  return (
    <div className="bg-card border border-border rounded-xl flex flex-col h-full overflow-hidden">
      <div className="p-4 border-b border-border bg-black/20 flex items-center justify-between">
        <h3 className="text-[15px] font-bold text-text-primary flex items-center gap-2">
          <ListTodo className="text-primary" size={18} />
          Pending Tasks & Activities
        </h3>
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
        
        {/* Homework */}
        <div className="bg-page border border-border rounded-lg p-4 group cursor-pointer hover:border-primary/50 transition-colors">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center text-primary">
                <FileEdit size={20} />
              </div>
              <div>
                <h4 className="text-[14px] font-bold text-text-primary group-hover:text-primary transition-colors">Evaluate Homework</h4>
                <p className="text-[12px] text-text-secondary mt-0.5">{TEACHER_MOCK_DATA.stats.homeworkPendingReview} submissions pending review</p>
              </div>
            </div>
            <ChevronRight size={16} className="text-text-secondary group-hover:text-primary transition-colors" />
          </div>
        </div>

        {/* Exams */}
        <div className="bg-page border border-border rounded-lg p-4 group cursor-pointer hover:border-warning/50 transition-colors">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-warning/10 flex items-center justify-center text-warning">
                <LineChart size={20} />
              </div>
              <div>
                <h4 className="text-[14px] font-bold text-text-primary group-hover:text-warning transition-colors">Upcoming Exams</h4>
                <p className="text-[12px] text-text-secondary mt-0.5">{TEACHER_MOCK_DATA.upcomingExams.length} scheduled in next 7 days</p>
              </div>
            </div>
            <ChevronRight size={16} className="text-text-secondary group-hover:text-warning transition-colors" />
          </div>
          <div className="mt-3 pl-13 space-y-2">
            {TEACHER_MOCK_DATA.upcomingExams.map(exam => (
              <div key={exam.id} className="flex items-center justify-between text-[12px]">
                <span className="text-text-secondary font-medium">{exam.name} - {exam.class}</span>
                <span className="text-warning font-bold">{exam.date}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Assigned Classes */}
        <div className="bg-page border border-border rounded-lg p-4">
          <h4 className="text-[13px] font-bold text-text-primary mb-3">Your Assigned Classes</h4>
          <div className="space-y-2">
            {TEACHER_MOCK_DATA.assignedClasses.map(cls => (
              <div key={cls.id} className="flex items-center justify-between p-2 rounded bg-black/20 border border-white/5 text-[12px]">
                <span className="font-bold text-text-primary">{cls.name}</span>
                <span className="text-text-secondary">{cls.subject}</span>
                <span className="text-info font-medium">{cls.strength} Students</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
