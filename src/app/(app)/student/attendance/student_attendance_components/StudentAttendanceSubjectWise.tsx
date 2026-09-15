"use client";

import React from 'react';
import type { SubjectAttendance } from '../student_attendance_types/student_attendance_types';
import { BookOpen } from 'lucide-react';
import clsx from 'clsx';

interface Props {
  subjects: SubjectAttendance[];
}

/**
 * RESPONSIBILITY: Renders the subject-wise attendance table.
 */
export default function StudentAttendanceSubjectWise({ subjects }: Props) {
  return (
    <div className="bg-card border border-border rounded-xl p-5 overflow-hidden">
      <h3 className="text-base font-bold text-text-primary mb-4 flex items-center gap-2 border-b border-border pb-3">
        <BookOpen size={18} className="text-primary" /> Subject-wise Attendance
      </h3>
      
      <div className="overflow-x-auto custom-scrollbar">
        <table className="w-full text-left border-collapse min-w-[500px]">
          <thead>
            <tr>
              <th className="p-3 border-b border-border bg-page text-[11px] font-bold text-text-secondary uppercase tracking-wider">Subject</th>
              <th className="p-3 border-b border-border bg-page text-[11px] font-bold text-text-secondary uppercase tracking-wider text-center">Total</th>
              <th className="p-3 border-b border-border bg-page text-[11px] font-bold text-text-secondary uppercase tracking-wider text-center">Attended</th>
              <th className="p-3 border-b border-border bg-page text-[11px] font-bold text-text-secondary uppercase tracking-wider text-right">Percentage</th>
            </tr>
          </thead>
          <tbody>
            {subjects.map((sub) => (
              <tr key={sub.subjectId} className="hover:bg-primary-subtle/30 transition-colors border-b border-border last:border-0">
                <td className="p-3 text-sm font-bold text-text-primary">{sub.subjectName}</td>
                <td className="p-3 text-sm font-semibold text-text-secondary text-center">{sub.totalClasses}</td>
                <td className="p-3 text-sm font-semibold text-text-secondary text-center">{sub.attendedClasses}</td>
                <td className="p-3 text-right">
                  <span className={clsx(
                    "text-xs font-bold px-2 py-1 rounded-md",
                    sub.percentage >= 75 ? "bg-success/10 text-success" : "bg-danger/10 text-danger"
                  )}>
                    {sub.percentage.toFixed(1)}%
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
