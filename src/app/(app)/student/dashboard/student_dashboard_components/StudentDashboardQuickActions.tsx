"use client";

import React from 'react';
import { BookOpen, FileText, CalendarCheck, HelpCircle, DownloadCloud, Landmark } from 'lucide-react';
import Link from 'next/link';
import { StudentDashboardUrls } from '../student_dashboard_url_config';

const ACTIONS = [
  { label: 'Study Material', icon: <DownloadCloud size={20} />, href: StudentDashboardUrls.STUDY_MATERIAL, color: 'text-indigo-500', bg: 'bg-indigo-500/10' },
  { label: 'Homework', icon: <BookOpen size={20} />, href: StudentDashboardUrls.HOMEWORK, color: 'text-amber-500', bg: 'bg-amber-500/10' },
  { label: 'My Attendance', icon: <CalendarCheck size={20} />, href: StudentDashboardUrls.ATTENDANCE, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
  { label: 'Fee Receipts', icon: <Landmark size={20} />, href: StudentDashboardUrls.FEES, color: 'text-rose-500', bg: 'bg-rose-500/10' },
  { label: 'Ask Query', icon: <HelpCircle size={20} />, href: '#', color: 'text-sky-500', bg: 'bg-sky-500/10' },
  { label: 'Exam Results', icon: <FileText size={20} />, href: StudentDashboardUrls.EXAMS, color: 'text-purple-500', bg: 'bg-purple-500/10' },
];

/**
 * RESPONSIBILITY: Renders quick action shortcut buttons.
 */
export default function StudentDashboardQuickActions() {
  return (
    <div className="bg-card border border-border rounded-xl p-5">
      <h3 className="text-sm font-bold text-text-primary mb-4 flex items-center gap-2">
        <span className="w-1 h-4 bg-primary rounded-full"></span> Quick Actions
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {ACTIONS.map((action, idx) => (
          <Link 
            key={idx} 
            href={action.href}
            className="flex flex-col items-center justify-center p-3 rounded-lg bg-page border border-border hover:border-primary/30 hover:bg-primary-subtle motion-safe:transition-all group"
          >
            <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${action.bg} ${action.color} group-hover:scale-110 transition-transform`}>
              {action.icon}
            </div>
            <span className="text-[11px] font-semibold text-text-secondary group-hover:text-primary text-center">
              {action.label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
