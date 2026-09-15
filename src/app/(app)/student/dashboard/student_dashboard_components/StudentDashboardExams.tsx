"use client";

import React from 'react';
import type { ExamInfo, RecentResult } from '../student_dashboard_types/student_dashboard_types';
import { CalendarDays, Trophy, Award } from 'lucide-react';
import Link from 'next/link';
import { StudentDashboardUrls } from '../student_dashboard_url_config';

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
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-sm font-bold text-text-primary flex items-center gap-2">
            <span className="w-1 h-4 bg-purple-500 rounded-full"></span> Upcoming Exams
          </h3>
          <Link href={StudentDashboardUrls.EXAMS} className="text-xs font-semibold text-primary hover:underline">View Schedule</Link>
        </div>
        <div className="space-y-3">
          {upcomingExams.length === 0 ? (
            <div className="text-center py-6 text-sm text-text-secondary">No upcoming exams.</div>
          ) : (
            upcomingExams.map((exam) => (
              <div key={exam.id} className="p-3 rounded-lg border border-border bg-page flex items-start gap-3 hover:border-purple-500/30 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center shrink-0">
                  <CalendarDays size={18} className="text-purple-500" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-text-primary">{exam.subject} ({exam.type})</h4>
                  <p className="text-[11px] font-semibold text-text-secondary mt-1">{exam.date} • {exam.time}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Recent Results */}
      <div className="bg-card border border-border rounded-xl p-5">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-sm font-bold text-text-primary flex items-center gap-2">
            <span className="w-1 h-4 bg-emerald-500 rounded-full"></span> Recent Results
          </h3>
          <Link href="/student/results" className="text-xs font-semibold text-primary hover:underline">View All</Link>
        </div>
        <div className="space-y-3">
          {recentResults.length === 0 ? (
            <div className="text-center py-6 text-sm text-text-secondary">No recent results published.</div>
          ) : (
            recentResults.map((result) => (
              <div key={result.id} className="p-3 rounded-lg border border-border bg-page flex items-center justify-between hover:border-emerald-500/30 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0">
                    <Trophy size={18} className="text-emerald-500" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-text-primary">{result.subject}</h4>
                    <p className="text-[11px] font-semibold text-text-secondary mt-1">{result.type}</p>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-sm font-bold text-emerald-600">{result.marksObtained}/{result.totalMarks}</span>
                  <span className="text-[10px] font-bold text-text-secondary">Grade: {result.grade}</span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

    </div>
  );
}
