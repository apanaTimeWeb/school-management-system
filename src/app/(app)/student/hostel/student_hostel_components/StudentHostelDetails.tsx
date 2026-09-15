"use client";

import React from 'react';
import type { HostelDetails } from '../student_hostel_types/student_hostel_types';
import { Building2, BedDouble, ShieldCheck, Wallet, Activity } from 'lucide-react';
import clsx from 'clsx';

interface Props {
  details: HostelDetails;
}

export default function StudentHostelDetails({ details }: Props) {
  
  return (
    <div className="flex flex-col gap-6 motion-safe:animate-[fadeIn_0.3s_ease-out]">
      
      <div className="flex items-center gap-4 border-b border-border pb-4">
        <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
          <Building2 size={28} />
        </div>
        <div>
          <h2 className="text-xl font-bold text-text-primary leading-tight">{details.hostelName}</h2>
          <span className="text-sm font-semibold text-text-secondary">Hostel Allocation Details</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* Room Info */}
        <div className="bg-page border border-border rounded-xl p-5 flex items-start gap-4 hover:border-primary/30 transition-colors">
          <div className="w-10 h-10 bg-info/10 text-info rounded-full flex items-center justify-center shrink-0">
            <BedDouble size={20} />
          </div>
          <div>
            <span className="text-[10px] font-bold text-text-secondary uppercase tracking-wider block mb-1">Room & Bed</span>
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold text-text-primary">Room {details.roomNumber}</span>
              <span className="text-sm font-bold text-text-secondary">• Bed {details.bedNumber}</span>
            </div>
          </div>
        </div>

        {/* Warden Info */}
        <div className="bg-page border border-border rounded-xl p-5 flex items-start gap-4 hover:border-primary/30 transition-colors">
          <div className="w-10 h-10 bg-purple-500/10 text-purple-500 rounded-full flex items-center justify-center shrink-0">
            <ShieldCheck size={20} />
          </div>
          <div>
            <span className="text-[10px] font-bold text-text-secondary uppercase tracking-wider block mb-1">Warden</span>
            <span className="text-base font-bold text-text-primary block">{details.wardenName}</span>
            <a href={`tel:${details.wardenPhone}`} className="text-sm font-bold text-primary hover:underline">
              {details.wardenPhone}
            </a>
          </div>
        </div>

        {/* Fee Status */}
        <div className="bg-page border border-border rounded-xl p-5 flex items-start gap-4 hover:border-primary/30 transition-colors">
          <div className="w-10 h-10 bg-amber-500/10 text-amber-500 rounded-full flex items-center justify-center shrink-0">
            <Wallet size={20} />
          </div>
          <div>
            <span className="text-[10px] font-bold text-text-secondary uppercase tracking-wider block mb-1">Hostel Fee</span>
            <span className={clsx(
              "inline-block px-2 py-0.5 rounded text-sm font-bold",
              details.feeStatus === 'Paid' ? "bg-success/10 text-success border border-success/20" : "bg-danger/10 text-danger border border-danger/20"
            )}>
              {details.feeStatus}
            </span>
          </div>
        </div>

        {/* Attendance */}
        <div className="bg-page border border-border rounded-xl p-5 flex items-start gap-4 hover:border-primary/30 transition-colors">
          <div className="w-10 h-10 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center shrink-0">
            <Activity size={20} />
          </div>
          <div className="flex-1">
            <span className="text-[10px] font-bold text-text-secondary uppercase tracking-wider block mb-1">Night Attendance</span>
            <span className="text-xl font-bold text-text-primary block mb-2">{details.attendancePercentage}%</span>
            {/* Progress Bar */}
            <div className="w-full h-2 bg-border rounded-full overflow-hidden">
              <div 
                className="h-full bg-emerald-500 rounded-full" 
                style={{ width: `${details.attendancePercentage}%` }}
              ></div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
