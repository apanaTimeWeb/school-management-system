"use client";

import React from 'react';
import { GraduationCap, BookOpen, CalendarCheck } from 'lucide-react';

interface Props {
  class: string;
  section: string;
  session: string;
}

/**
 * RESPONSIBILITY: Renders current class and session header.
 */
export default function StudentAcademicsHeader({ class: className, section, session }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      
      <div className="bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20 rounded-xl p-5 flex items-center gap-4 hover:border-blue-500/50 motion-safe:transition-colors">
        <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white shrink-0 shadow-md shadow-blue-500/20">
          <GraduationCap size={24} />
        </div>
        <div>
          <span className="text-[11px] font-bold text-text-secondary uppercase tracking-wider">Current Class</span>
          <h2 className="text-xl font-bold text-text-primary">{className} <span className="text-blue-500">-</span> {section}</h2>
        </div>
      </div>

      <div className="bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-500/20 rounded-xl p-5 flex items-center gap-4 hover:border-emerald-500/50 motion-safe:transition-colors">
        <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center text-white shrink-0 shadow-md shadow-emerald-500/20">
          <CalendarCheck size={20} />
        </div>
        <div>
          <span className="text-[11px] font-bold text-text-secondary uppercase tracking-wider">Academic Session</span>
          <h2 className="text-xl font-bold text-text-primary">{session}</h2>
        </div>
      </div>

      <div className="bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-xl p-5 flex items-center gap-4 hover:border-primary/50 motion-safe:transition-colors">
        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white shrink-0 shadow-md shadow-primary/20">
          <BookOpen size={20} />
        </div>
        <div>
          <span className="text-[11px] font-bold text-text-secondary uppercase tracking-wider">Curriculum Type</span>
          <h2 className="text-xl font-bold text-text-primary">CBSE (Central)</h2>
        </div>
      </div>

    </div>
  );
}
