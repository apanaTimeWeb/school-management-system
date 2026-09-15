"use client";

import React from 'react';
import type { DailyClasswork, ClassworkSubjectRecord } from '../student_classwork_types/student_classwork_types';
import { BookOpen, User, Hash, Info, Maximize2, Coffee } from 'lucide-react';
import clsx from 'clsx';

interface Props {
  dayData: DailyClasswork;
  onViewDetails: (rec: ClassworkSubjectRecord) => void;
}

/**
 * RESPONSIBILITY: Renders the list of classwork records for a specific day.
 */
export default function StudentClassworkDayView({ dayData, onViewDetails }: Props) {
  
  return (
    <div className="flex flex-col gap-6">
      
      {/* Day Header */}
      <div className="bg-card border border-border rounded-xl p-5 flex items-center justify-between shadow-sm">
        <div>
          <h2 className="text-xl font-bold text-text-primary">{dayData.date}</h2>
          <p className="text-sm text-text-secondary mt-1">{dayData.dayOfWeek} • {dayData.records.length} subjects recorded</p>
        </div>
      </div>

      {dayData.records.length === 0 ? (
        <div className="bg-card border border-border rounded-xl p-10 flex flex-col items-center justify-center text-center">
          <Coffee size={48} className="text-text-secondary/30 mb-4" />
          <h3 className="text-lg font-bold text-text-primary">No Classwork Found</h3>
          <p className="text-sm text-text-secondary mt-1">There are no records for this date. It might be a holiday or records haven't been updated yet.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {dayData.records.map((rec) => (
            <div 
              key={rec.id} 
              className="bg-card border border-border rounded-xl p-5 hover:border-primary/30 motion-safe:transition-all hover:shadow-md relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-primary/20 group-hover:bg-primary transition-colors" />
              
              {/* Header Info */}
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <BookOpen size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-text-primary group-hover:text-primary transition-colors">{rec.subject}</h3>
                    <span className="text-[11px] font-bold text-text-secondary flex items-center gap-1.5 uppercase tracking-wider mt-0.5">
                      <User size={12} className="text-info" /> {rec.teacher}
                    </span>
                  </div>
                </div>
                <button 
                  onClick={() => onViewDetails(rec)}
                  className="w-8 h-8 rounded-full bg-page border border-border flex items-center justify-center text-text-secondary hover:bg-primary hover:text-white hover:border-primary transition-colors"
                  title="View Full Details"
                >
                  <Maximize2 size={14} />
                </button>
              </div>

              {/* Topic & Chapter */}
              <div className="bg-page border border-border rounded-lg p-3 mb-4 flex flex-col gap-1.5">
                <span className="text-[10px] font-bold text-primary uppercase tracking-wider flex items-center gap-1">
                  <Hash size={12} /> {rec.chapter}
                </span>
                <span className="text-sm font-bold text-text-primary">Topic: {rec.topic}</span>
              </div>

              {/* Notes Preview */}
              <div className="mb-4">
                <span className="text-xs font-bold text-text-primary mb-1 block">Class Notes:</span>
                <p className="text-sm text-text-secondary line-clamp-2">{rec.notes}</p>
              </div>

              {/* Teacher Instructions Preview */}
              {rec.teacherInstructions && (
                <div className="flex items-start gap-2 bg-info/5 border border-info/20 p-3 rounded-lg">
                  <Info size={16} className="text-info shrink-0 mt-0.5" />
                  <p className="text-xs text-text-secondary italic line-clamp-1 flex-1">
                    "{rec.teacherInstructions}"
                  </p>
                </div>
              )}

            </div>
          ))}
        </div>
      )}

    </div>
  );
}
