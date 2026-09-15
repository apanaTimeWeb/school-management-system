"use client";

import React from 'react';
import type { CheckupRecord } from '../student_health_types/student_health_types';
import { Stethoscope, Calendar, Eye, Activity, CheckCircle, AlertCircle } from 'lucide-react';
import clsx from 'clsx';

interface Props {
  checkups: CheckupRecord[];
}

export default function StudentHealthCheckups({ checkups }: Props) {
  
  if (checkups.length === 0) {
    return (
      <div className="bg-card border border-border rounded-xl p-10 flex flex-col items-center justify-center text-center">
        <Stethoscope size={48} className="text-text-secondary/30 mb-4" />
        <h3 className="text-lg font-bold text-text-primary">No Records Found</h3>
        <p className="text-sm text-text-secondary mt-1">There are no school medical checkup records available.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 motion-safe:animate-[fadeIn_0.3s_ease-out]">
      {checkups.map(record => (
        <div key={record.id} className={clsx(
          "bg-card border rounded-xl p-5 shadow-sm transition-colors group flex flex-col lg:flex-row gap-6",
          record.status === 'Healthy' ? "border-border hover:border-success/40" : "border-amber-500/30 hover:border-amber-500/60"
        )}>
          
          <div className="flex-[2]">
            <div className="flex items-center gap-2 mb-2">
              <span className={clsx(
                "text-[10px] font-bold px-2 py-0.5 rounded uppercase flex items-center gap-1",
                record.status === 'Healthy' ? "bg-success/10 text-success border border-success/20" : "bg-amber-500/10 text-amber-500 border border-amber-500/20"
              )}>
                {record.status === 'Healthy' ? <CheckCircle size={10} /> : <AlertCircle size={10} />}
                {record.status}
              </span>
              <span className="text-xs font-semibold text-text-secondary flex items-center gap-1">
                <Calendar size={12} /> {record.date}
              </span>
            </div>
            
            <h3 className="text-base font-bold text-text-primary mb-1">General Medical Checkup</h3>
            <p className="text-sm font-semibold text-text-secondary mb-3 flex items-center gap-1.5">
              <Stethoscope size={14} className="text-primary" /> Conducted by: {record.conductedBy}
            </p>
            
            <div className="bg-page border border-border rounded-lg p-3">
              <span className="text-[10px] font-bold text-text-secondary uppercase block mb-1">Doctor's Remarks</span>
              <p className="text-sm text-text-primary leading-relaxed">{record.remarks}</p>
            </div>
          </div>

          <div className="flex-1 grid grid-cols-2 lg:grid-cols-1 gap-3">
            <div className="bg-page border border-border rounded-lg p-3 flex flex-col justify-center">
              <span className="text-[10px] font-bold text-text-secondary uppercase flex items-center gap-1.5 mb-1">
                <Eye size={12} className="text-info" /> Vision Test
              </span>
              <span className="text-sm font-bold text-text-primary">{record.vision}</span>
            </div>
            
            <div className="bg-page border border-border rounded-lg p-3 flex flex-col justify-center">
              <span className="text-[10px] font-bold text-text-secondary uppercase flex items-center gap-1.5 mb-1">
                <Activity size={12} className="text-purple-500" /> Dental Check
              </span>
              <span className="text-sm font-bold text-text-primary">{record.dental}</span>
            </div>
          </div>

        </div>
      ))}
    </div>
  );
}
