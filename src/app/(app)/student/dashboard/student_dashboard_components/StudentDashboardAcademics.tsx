"use client";

import React from 'react';
import type { AcademicTask } from '../student_dashboard_types/student_dashboard_types';
import { BookOpen, PenTool, Clock, ChevronRight } from 'lucide-react';

interface Props {
  pendingTasks: AcademicTask[];
}

/**
 * RESPONSIBILITY: Renders the pending homework and assignments list.
 */
export default function StudentDashboardAcademics({ pendingTasks }: Props) {
  return (
    <div className="bg-card border border-border rounded-xl p-5">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-sm font-bold text-text-primary flex items-center gap-2">
          <span className="w-1 h-4 bg-amber-500 rounded-full"></span> Pending Tasks
        </h3>
        <button className="text-xs font-semibold text-primary hover:underline">View All</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {pendingTasks.length === 0 ? (
          <div className="col-span-full text-center py-6 text-sm text-text-secondary">No pending tasks! 🎉</div>
        ) : (
          pendingTasks.map((task) => (
            <div key={task.id} className="p-4 rounded-lg bg-page border border-border flex flex-col hover:border-amber-500/30 motion-safe:transition-colors group cursor-pointer">
              <div className="flex items-center gap-2 mb-2">
                {task.type === 'homework' ? (
                  <BookOpen size={14} className="text-amber-500" />
                ) : (
                  <PenTool size={14} className="text-purple-500" />
                )}
                <span className="text-[10px] uppercase font-bold text-text-secondary tracking-wider">
                  {task.type} • {task.subject}
                </span>
              </div>
              <h4 className="text-sm font-bold text-text-primary group-hover:text-amber-500 transition-colors line-clamp-1">{task.title}</h4>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-xs font-semibold text-danger flex items-center gap-1 bg-danger/10 px-2 py-0.5 rounded-md">
                  <Clock size={12} /> Due: {task.dueDate}
                </span>
                <ChevronRight size={16} className="text-text-secondary group-hover:text-amber-500 transition-colors" />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
