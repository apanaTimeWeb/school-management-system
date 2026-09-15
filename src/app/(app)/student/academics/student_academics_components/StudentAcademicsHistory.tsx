"use client";

import React from 'react';
import type { AcademicHistoryYear } from '../student_academics_types/student_academics_types';
import { History, Award, CheckCircle } from 'lucide-react';
import clsx from 'clsx';

interface Props {
  history: AcademicHistoryYear[];
}

/**
 * RESPONSIBILITY: Renders the academic history/past grades.
 */
export default function StudentAcademicsHistory({ history }: Props) {
  return (
    <div className="bg-card border border-border rounded-xl p-5 h-full">
      <div className="flex justify-between items-center mb-4 border-b border-border pb-3">
        <h3 className="text-base font-bold text-text-primary flex items-center gap-2">
          <History size={18} className="text-primary" /> Academic History
        </h3>
      </div>
      
      <div className="space-y-4">
        {history.map((record, index) => (
          <div key={record.id} className="relative pl-6 pb-4 last:pb-0 group">
            {/* Timeline Line */}
            {index !== history.length - 1 && (
              <div className="absolute left-2.5 top-5 w-[2px] h-full bg-border group-hover:bg-primary/30 transition-colors" />
            )}
            
            {/* Timeline Dot */}
            <div className="absolute left-0 top-1 w-5 h-5 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            </div>

            <div className="bg-page border border-border rounded-lg p-3 hover:border-primary/30 hover:shadow-sm motion-safe:transition-all">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-sm font-bold text-text-primary">Class {record.class}</h4>
                <span className="text-[10px] font-bold text-text-secondary">{record.academicYear}</span>
              </div>
              
              <div className="flex justify-between items-center mt-3 pt-3 border-t border-border">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold text-text-secondary">Grade</span>
                  <span className="text-lg font-bold text-success flex items-center gap-1">
                    <Award size={14} /> {record.overallGrade}
                  </span>
                </div>
                
                <div className="flex flex-col items-center">
                  <span className="text-[10px] uppercase font-bold text-text-secondary">Percent</span>
                  <span className="text-sm font-bold text-text-primary">{record.percentage.toFixed(1)}%</span>
                </div>
                
                <div className="flex flex-col items-end">
                  <span className="text-[10px] uppercase font-bold text-text-secondary">Status</span>
                  <span className={clsx(
                    "text-[10px] font-bold px-2 py-0.5 rounded-md mt-0.5 flex items-center gap-1",
                    record.status === 'Pass' || record.status === 'Promoted' ? "bg-success/10 text-success" : "bg-danger/10 text-danger"
                  )}>
                    <CheckCircle size={10} /> {record.status}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
