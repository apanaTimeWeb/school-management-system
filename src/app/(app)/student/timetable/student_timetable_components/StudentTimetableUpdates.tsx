"use client";

import React from 'react';
import type { TimetableUpdate } from '../student_timetable_types/student_timetable_types';
import { Bell, RefreshCw, AlertTriangle, Info } from 'lucide-react';
import clsx from 'clsx';

interface Props {
  updates: TimetableUpdate[];
}

/**
 * RESPONSIBILITY: Renders recent timetable updates like substitute teachers or room changes.
 */
export default function StudentTimetableUpdates({ updates }: Props) {
  
  const getIcon = (type: string) => {
    switch (type) {
      case 'substitute': return <RefreshCw size={14} className="text-primary" />;
      case 'cancellation': return <AlertTriangle size={14} className="text-danger" />;
      case 'room_change': return <Info size={14} className="text-blue-500" />;
      default: return <Bell size={14} className="text-text-secondary" />;
    }
  };

  const getBg = (type: string) => {
    switch (type) {
      case 'substitute': return 'bg-primary/10';
      case 'cancellation': return 'bg-danger/10';
      case 'room_change': return 'bg-blue-500/10';
      default: return 'bg-border';
    }
  };

  return (
    <div className="bg-card border border-border rounded-xl p-5">
      <h3 className="text-sm font-bold text-text-primary mb-4 flex items-center gap-2 border-b border-border pb-3">
        <Bell size={16} className="text-primary" /> Timetable Updates
      </h3>

      <div className="space-y-3">
        {updates.length === 0 ? (
          <div className="text-center py-6 text-sm text-text-secondary">No recent changes.</div>
        ) : (
          updates.map((upd) => (
            <div key={upd.id} className="p-3 rounded-lg bg-page border border-border flex gap-3 items-start hover:border-primary/30 motion-safe:transition-all">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${getBg(upd.type)}`}>
                {getIcon(upd.type)}
              </div>
              <div className="flex flex-col flex-1">
                <p className="text-xs font-semibold text-text-primary leading-snug">
                  {upd.message}
                </p>
                <span className="text-[10px] font-bold text-text-secondary mt-1">{upd.date}</span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
