"use client";

import React from 'react';
import type { SubjectInfo } from '../student_academics_types/student_academics_types';
import { Book, User, BarChart2 } from 'lucide-react';

interface Props {
  subjects: SubjectInfo[];
}

/**
 * RESPONSIBILITY: Renders the list of subjects and their teachers.
 */
export default function StudentAcademicsSubjects({ subjects }: Props) {
  return (
    <div className="bg-card border border-border rounded-xl p-5">
      <h3 className="text-base font-bold text-text-primary mb-4 flex items-center gap-2 border-b border-border pb-3">
        <Book size={18} className="text-primary" /> Enrolled Subjects
      </h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {subjects.map((subject) => {
          const progressPercent = Math.round((subject.completedChapters / subject.totalChapters) * 100) || 0;
          
          return (
            <div key={subject.id} className="border border-border rounded-lg p-4 bg-page hover:border-primary/30 motion-safe:transition-colors group">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-sm font-bold text-text-primary group-hover:text-primary transition-colors">{subject.name}</h4>
                <span className="text-[10px] font-bold text-text-secondary bg-border px-1.5 py-0.5 rounded uppercase">{subject.curriculumCode}</span>
              </div>
              
              <div className="flex items-center gap-2 text-xs text-text-secondary mb-4">
                <User size={14} className="text-info" /> {subject.teacherName}
              </div>
              
              <div>
                <div className="flex justify-between items-end mb-1">
                  <span className="text-[10px] font-bold text-text-secondary flex items-center gap-1">
                    <BarChart2 size={12} /> Progress
                  </span>
                  <span className="text-xs font-bold text-text-primary">{progressPercent}%</span>
                </div>
                <div className="w-full h-1.5 bg-border rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary rounded-full transition-all duration-1000" 
                    style={{ width: `${progressPercent}%` }} 
                  />
                </div>
                <p className="text-[10px] text-text-secondary text-right mt-1">{subject.completedChapters} of {subject.totalChapters} Chapters</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
