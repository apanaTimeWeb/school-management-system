"use client";

import React from 'react';
import type { DisciplineWarning } from '../student_discipline_types/student_discipline_types';
import { AlertTriangle, ShieldAlert, CheckCircle, Clock } from 'lucide-react';
import clsx from 'clsx';

interface Props {
  warnings: DisciplineWarning[];
}

export default function StudentDisciplineWarnings({ warnings }: Props) {
  
  if (warnings.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-10 text-center text-text-secondary bg-card border border-border rounded-xl shadow-sm">
        <ShieldAlert size={48} className="text-success/50 mb-4" />
        <h3 className="text-lg font-bold text-text-primary">Clean Record</h3>
        <p className="text-sm">Excellent! There are no official warnings or disciplinary actions on your record.</p>
      </div>
    );
  }

  const getStatusBadge = (status: string) => {
    if (status === 'Active') return <span className="flex items-center gap-1 text-[10px] font-bold bg-danger/10 text-danger border border-danger/20 px-2 py-0.5 rounded uppercase"><AlertTriangle size={10} /> Active</span>;
    if (status === 'Resolved') return <span className="flex items-center gap-1 text-[10px] font-bold bg-success/10 text-success border border-success/20 px-2 py-0.5 rounded uppercase"><CheckCircle size={10} /> Resolved</span>;
    return <span className="flex items-center gap-1 text-[10px] font-bold bg-page text-text-secondary border border-border px-2 py-0.5 rounded uppercase"><Clock size={10} /> Closed</span>;
  };

  return (
    <div className="flex flex-col gap-4 motion-safe:animate-[fadeIn_0.3s_ease-out]">
      {warnings.map(warning => (
        <div key={warning.id} className={clsx(
          "bg-card border rounded-xl p-5 shadow-sm transition-colors flex flex-col md:flex-row gap-5 items-start",
          warning.status === 'Active' ? "border-danger/40" : "border-border"
        )}>
          
          <div className={clsx(
            "w-12 h-12 rounded-full flex items-center justify-center shrink-0 border-4",
            warning.status === 'Active' ? "bg-danger/10 text-danger border-danger/20" : "bg-page text-text-secondary border-border"
          )}>
            <AlertTriangle size={20} />
          </div>

          <div className="flex-1">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <h3 className="text-lg font-bold text-text-primary">{warning.incidentType}</h3>
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold text-text-secondary">{warning.date}</span>
                {getStatusBadge(warning.status)}
              </div>
            </div>
            
            <p className="text-sm font-medium text-text-primary mb-4 leading-relaxed">
              {warning.description}
            </p>

            <div className="bg-page border border-border rounded-lg p-3">
              <span className="text-[10px] font-bold text-text-secondary uppercase tracking-wider block mb-1">Action Taken</span>
              <span className="text-sm font-bold text-primary">{warning.actionTaken}</span>
            </div>
          </div>

        </div>
      ))}
    </div>
  );
}
