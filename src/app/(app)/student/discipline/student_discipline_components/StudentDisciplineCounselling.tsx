"use client";

import React from 'react';
import type { CounsellingRecord } from '../student_discipline_types/student_discipline_types';
import { Users, Calendar, ArrowRight } from 'lucide-react';

interface Props {
  records: CounsellingRecord[];
}

export default function StudentDisciplineCounselling({ records }: Props) {
  
  if (records.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-10 text-center text-text-secondary bg-card border border-border rounded-xl shadow-sm">
        <Users size={48} className="text-border mb-4" />
        <h3 className="text-lg font-bold text-text-primary">No Records Found</h3>
        <p className="text-sm">You haven't attended any scheduled counselling sessions.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 motion-safe:animate-[fadeIn_0.3s_ease-out]">
      {records.map(record => (
        <div key={record.id} className="bg-card border border-border rounded-xl p-5 shadow-sm flex flex-col md:flex-row gap-5 items-center justify-between">
          
          <div className="flex items-start gap-4 flex-1">
            <div className="w-12 h-12 rounded-full bg-info/10 text-info flex items-center justify-center shrink-0">
              <Users size={24} />
            </div>
            <div>
              <span className="text-[10px] font-bold text-primary uppercase tracking-wider block mb-1">Session Topic</span>
              <h3 className="text-base font-bold text-text-primary mb-1">{record.topic}</h3>
              <p className="text-xs font-semibold text-text-secondary">Counsellor: {record.counsellorName}</p>
            </div>
          </div>

          <div className="flex flex-row md:flex-col items-center md:items-end justify-between w-full md:w-auto gap-2 bg-page md:bg-transparent p-3 md:p-0 rounded-lg border md:border-transparent border-border">
            <div className="flex items-center gap-1.5 text-xs font-bold text-text-secondary">
              <Calendar size={14} /> Attended: {record.date}
            </div>
            {record.nextSessionDate && (
              <div className="flex items-center gap-1.5 text-xs font-bold text-info">
                <ArrowRight size={14} /> Next Session: {record.nextSessionDate}
              </div>
            )}
          </div>

        </div>
      ))}
    </div>
  );
}
