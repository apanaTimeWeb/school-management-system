"use client";

import React from 'react';
import type { ExamInfo, RecentResult } from '../student_dashboard_types/student_dashboard_types';
import { CalendarDays, Trophy, Award } from 'lucide-react';

interface Props {
  upcomingExams: ExamInfo[];
  recentResults: RecentResult[];
}

/**
 * RESPONSIBILITY: Renders upcoming exams and recent test results.
 */
export default function StudentDashboardExams({ upcomingExams, recentResults }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      
      {/* Upcoming Exams */}
      <div className="bg-card border border-border rounded-xl p-5">
        <h3 className="text-sm font-bold text-text-primary mb-4 flex items-center gap-2">
          <span className="w-1 h-4 bg-purple-500 rounded-full"></span> Upcoming Exams
        </h3>
        <div className="space-y-3">
          {upcomingExams.length === 0 ? (
            <div className="text-center py-4 text-xs text-text-secondary">No upcoming exams.</div>
          ) : (
            upcomingExams.map((exam) => (
              <div key={exam.id} className="flex items-center gap-3 p-3 rounded-lg bg-page border border-border hover:border-purple-500/30 transition-colors">
                <div className="w-10 h-10 rounded-md bg-purple-500/10 flex flex-col items-center justify-center shrink-0">
                  <CalendarDays size={14} className="text-purple-500 mb-0.5" />
                  <span className="text-[10px] font-bold text-purple-600">{exam.daysLeft}d</span>
                </div>
                <div className="flex flex-col">
                  <h4 className="text-sm font-bold text-text-primary line-clamp-1">{exam.title}</h4>
                  <span className="text-xs text-text-secondary mt-0.5">{exam.date}</span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Recent Results */}
      <div className="bg-card border border-border rounded-xl p-5">
        <h3 className="text-sm font-bold text-text-primary mb-4 flex items-center gap-2">
          <span className="w-1 h-4 bg-emerald-500 rounded-full"></span> Recent Results
        </h3>
        <div className="space-y-3">
          {recentResults.length === 0 ? (
            <div className="text-center py-4 text-xs text-text-secondary">No recent results.</div>
          ) : (
            recentResults.map((result) => (
              <div key={result.id} className="flex items-center gap-3 p-3 rounded-lg bg-page border border-border hover:border-emerald-500/30 transition-colors">
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                  <Trophy size={16} className="text-emerald-500" />
                </div>
                <div className="flex flex-col flex-1">
                  <h4 className="text-sm font-bold text-text-primary line-clamp-1">{result.subject}</h4>
                  <span className="text-[10px] font-semibold text-text-secondary uppercase">{result.examName}</span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-sm font-bold text-emerald-500">{result.marksObtained}/{result.totalMarks}</span>
                  <span className="text-[10px] font-bold text-text-secondary flex items-center gap-1 mt-0.5">
                    <Award size={10} /> Grade {result.grade}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

    </div>
  );
}
