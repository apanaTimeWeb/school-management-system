"use client";

import React from 'react';
import type { ExamTerm, ExamSubjectSchedule } from '../student_examinations_types/student_examinations_types';
import { Calendar, Clock, MapPin, FileText, Info } from 'lucide-react';
import clsx from 'clsx';

interface Props {
  termData: ExamTerm;
  onViewDetails: (schedule: ExamSubjectSchedule) => void;
}

/**
 * RESPONSIBILITY: Renders the schedule table/list for the selected exam term.
 */
export default function StudentExaminationsSchedule({ termData, onViewDetails }: Props) {
  
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Theory': return 'bg-blue-500/10 text-blue-600 border-blue-500/20';
      case 'Practical': return 'bg-purple-500/10 text-purple-600 border-purple-500/20';
      case 'Internal Assessment': return 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20';
      default: return 'bg-border text-text-secondary';
    }
  };

  return (
    <div className="flex flex-col gap-6">
      
      {/* Term Header & General Instructions */}
      <div className="bg-card border border-border rounded-xl p-5 flex flex-col shadow-sm">
        <h2 className="text-xl font-bold text-text-primary mb-1">{termData.termName}</h2>
        <p className="text-sm font-semibold text-text-secondary flex items-center gap-1.5 mb-4">
          <Calendar size={14} className="text-primary" /> {termData.startDate} to {termData.endDate}
        </p>
        
        {termData.generalInstructions && (
          <div className="bg-info/5 border border-info/20 p-4 rounded-lg flex items-start gap-3">
            <Info size={18} className="text-info shrink-0 mt-0.5" />
            <div className="flex flex-col">
              <span className="text-xs font-bold text-info mb-1 uppercase tracking-wider">General Instructions</span>
              <p className="text-sm text-text-secondary/90 leading-relaxed">{termData.generalInstructions}</p>
            </div>
          </div>
        )}
      </div>

      {/* Schedule List */}
      <div className="bg-card border border-border rounded-xl p-5">
        <h3 className="text-base font-bold text-text-primary mb-4 border-b border-border pb-3">Subject Schedule</h3>
        
        <div className="space-y-4">
          {termData.schedules.map((sch) => (
            <div 
              key={sch.id}
              className="bg-page border border-border rounded-xl p-4 flex flex-col sm:flex-row gap-4 justify-between items-start hover:border-primary/30 hover:shadow-md transition-all group"
            >
              
              {/* Date & Time Block */}
              <div className="flex flex-col items-center sm:items-start min-w-[120px] bg-card border border-border rounded-lg p-3 shrink-0 group-hover:border-primary/20 transition-colors">
                <span className="text-[10px] font-bold text-text-secondary uppercase tracking-wider mb-1 flex items-center gap-1">
                  <Calendar size={12} /> Date
                </span>
                <span className="text-sm font-bold text-text-primary mb-2 text-center sm:text-left">{sch.date}</span>
                <span className="text-[10px] font-bold text-text-secondary uppercase tracking-wider mb-1 flex items-center gap-1 border-t border-border/50 pt-2 w-full justify-center sm:justify-start">
                  <Clock size={12} /> Time
                </span>
                <span className="text-xs font-bold text-primary text-center sm:text-left">
                  {sch.startTime} - {sch.endTime}
                </span>
              </div>

              {/* Subject Details */}
              <div className="flex-1 flex flex-col justify-center">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h4 className="text-lg font-bold text-text-primary group-hover:text-primary transition-colors">{sch.subject}</h4>
                  <span className={clsx("text-[10px] font-bold px-2 py-0.5 rounded border", getTypeColor(sch.type))}>
                    {sch.type}
                  </span>
                </div>
                
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold text-text-secondary flex items-center gap-1 bg-card border border-border px-2 py-1 rounded-md">
                    <MapPin size={12} className="text-danger" /> Room: {sch.room}
                  </span>
                </div>
                
                <p className="text-xs text-text-secondary line-clamp-2">
                  <strong className="text-text-primary">Syllabus:</strong> {sch.syllabus}
                </p>
              </div>

              {/* Action Button */}
              <div className="w-full sm:w-auto mt-2 sm:mt-0 flex justify-end self-center">
                <button
                  onClick={() => onViewDetails(sch)}
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-primary/10 text-primary hover:bg-primary hover:text-white border border-primary/20 hover:border-primary rounded-md text-sm font-bold transition-colors w-full sm:w-auto"
                >
                  <FileText size={16} /> Syllabus & Details
                </button>
              </div>

            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
