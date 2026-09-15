"use client";

import React from 'react';
import type { StudentFullProfile } from '../student_profile_types/student_profile_types';
import { BookOpen, Hash, MapPin, Calendar, Users, Target } from 'lucide-react';

interface Props {
  profile: StudentFullProfile;
}

/**
 * RESPONSIBILITY: Renders the read-only academic details.
 */
export default function StudentProfileAcademicDetails({ profile }: Props) {
  
  const Item = ({ icon, label, value, colorClass, bgClass }: { icon: React.ReactNode, label: string, value: string, colorClass: string, bgClass: string }) => (
    <div className="flex flex-col gap-1 p-4 rounded-lg border border-border bg-page hover:border-primary/20 hover:shadow-sm motion-safe:transition-all group cursor-default">
      <div className="flex items-center gap-2 mb-1">
        <div className={`w-6 h-6 rounded-md flex items-center justify-center ${bgClass}`}>
          {icon}
        </div>
        <span className="text-[11px] font-bold text-text-secondary uppercase tracking-wider">{label}</span>
      </div>
      <span className={`text-sm font-semibold ${colorClass} pl-8`}>{value}</span>
    </div>
  );

  return (
    <div className="bg-card border border-border rounded-xl p-5">
      <h3 className="text-base font-bold text-text-primary mb-4 flex items-center gap-2 border-b border-border pb-3">
        <BookOpen size={18} className="text-primary" /> Academic Details
        <span className="ml-auto text-[10px] bg-danger/10 text-danger px-2 py-0.5 rounded-full font-bold uppercase">Read Only</span>
      </h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <Item 
          icon={<Hash size={14} className="text-blue-500" />} 
          label="Admission No" 
          value={profile.admissionNumber} 
          colorClass="text-text-primary" 
          bgClass="bg-blue-500/10" 
        />
        <Item 
          icon={<Users size={14} className="text-emerald-500" />} 
          label="Class" 
          value={profile.className} 
          colorClass="text-text-primary" 
          bgClass="bg-emerald-500/10" 
        />
        <Item 
          icon={<Users size={14} className="text-emerald-500" />} 
          label="Section" 
          value={profile.section} 
          colorClass="text-text-primary" 
          bgClass="bg-emerald-500/10" 
        />
        <Item 
          icon={<MapPin size={14} className="text-amber-500" />} 
          label="Roll Number" 
          value={profile.rollNumber} 
          colorClass="text-text-primary" 
          bgClass="bg-amber-500/10" 
        />
        <Item 
          icon={<Calendar size={14} className="text-purple-500" />} 
          label="Academic Session" 
          value={profile.academicSession} 
          colorClass="text-text-primary" 
          bgClass="bg-purple-500/10" 
        />
        <Item 
          icon={<Target size={14} className="text-rose-500" />} 
          label="House" 
          value={profile.house} 
          colorClass="text-text-primary" 
          bgClass="bg-rose-500/10" 
        />
      </div>
    </div>
  );
}
