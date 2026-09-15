"use client";

import React from 'react';
import type { ParticipationRecord } from '../student_events_types/student_events_types';
import { Ticket, Calendar, CheckCircle } from 'lucide-react';
import clsx from 'clsx';

interface Props {
  participations: ParticipationRecord[];
}

export default function StudentEventsMyParticipations({ participations }: Props) {
  
  if (participations.length === 0) {
    return (
      <div className="bg-card border border-border rounded-xl p-10 flex flex-col items-center justify-center text-center">
        <Ticket size={48} className="text-text-secondary/30 mb-4" />
        <h3 className="text-lg font-bold text-text-primary">No Registrations Yet</h3>
        <p className="text-sm text-text-secondary mt-1">You haven't registered for any upcoming events.</p>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-page border-b border-border">
              <th className="p-4 text-xs font-bold text-text-secondary uppercase tracking-wider">Event Details</th>
              <th className="p-4 text-xs font-bold text-text-secondary uppercase tracking-wider">Category</th>
              <th className="p-4 text-xs font-bold text-text-secondary uppercase tracking-wider">Event Date</th>
              <th className="p-4 text-xs font-bold text-text-secondary uppercase tracking-wider text-right">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {participations.map((part) => (
              <tr key={part.id} className="hover:bg-page/50 transition-colors">
                <td className="p-4">
                  <span className="text-sm font-bold text-text-primary">{part.eventTitle}</span>
                </td>
                <td className="p-4">
                  <span className="text-[10px] font-bold px-2 py-1 bg-primary/10 text-primary border border-primary/20 rounded uppercase">
                    {part.category}
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-1.5 text-sm font-medium text-text-secondary">
                    <Calendar size={14} className="text-text-secondary" /> {part.date}
                  </div>
                </td>
                <td className="p-4 text-right">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-success/10 text-success border border-success/20">
                    <CheckCircle size={12} /> {part.status}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
