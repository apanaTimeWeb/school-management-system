"use client";

import React from 'react';
import type { SyllabusChapter, SubjectInfo } from '../student_academics_types/student_academics_types';
import { Layers, CheckCircle2, Circle, Clock } from 'lucide-react';
import clsx from 'clsx';

interface Props {
  syllabus: SyllabusChapter[];
  subjects: SubjectInfo[];
}

/**
 * RESPONSIBILITY: Renders the active syllabus tracker (chapters and progress).
 */
export default function StudentAcademicsSyllabusProgress({ syllabus, subjects }: Props) {
  
  const getSubjectName = (id: string) => subjects.find(s => s.id === id)?.name || "Unknown";

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle2 size={16} className="text-success" />;
      case 'in_progress': return <Clock size={16} className="text-amber-500 animate-pulse" />;
      default: return <Circle size={16} className="text-text-secondary" />;
    }
  };

  const getStatusBg = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-success/5 border-success/20';
      case 'in_progress': return 'bg-amber-500/5 border-amber-500/30 shadow-sm shadow-amber-500/5';
      default: return 'bg-page border-border opacity-70';
    }
  };

  return (
    <div className="bg-card border border-border rounded-xl p-5">
      <div className="flex justify-between items-center mb-4 border-b border-border pb-3">
        <h3 className="text-base font-bold text-text-primary flex items-center gap-2">
          <Layers size={18} className="text-primary" /> Active Syllabus Tracker
        </h3>
        <button className="text-xs font-semibold text-primary hover:underline">View All Chapters</button>
      </div>
      
      <div className="space-y-3">
        {syllabus.map((chapter) => (
          <div key={chapter.id} className={clsx("flex items-start gap-4 p-3 rounded-lg border motion-safe:transition-all hover:-translate-y-0.5", getStatusBg(chapter.status))}>
            <div className="mt-0.5 shrink-0">
              {getStatusIcon(chapter.status)}
            </div>
            
            <div className="flex flex-col flex-1">
              <span className="text-[10px] font-bold uppercase text-primary mb-0.5 tracking-wider">
                {getSubjectName(chapter.subjectId)} • Ch {chapter.chapterNumber}
              </span>
              <h4 className="text-sm font-bold text-text-primary line-clamp-1">{chapter.title}</h4>
            </div>

            <div className="flex flex-col items-end">
              <span className="text-[10px] uppercase font-bold text-text-secondary">
                {chapter.status.replace('_', ' ')}
              </span>
              <span className="text-[9px] text-text-secondary mt-1">{chapter.lastUpdated}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
