"use client";

import React from 'react';
import type { StudentProfile } from '../student_dashboard_types/student_dashboard_types';
import { User, Calendar, MapPin, Hash, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface Props {
  profile: StudentProfile;
}

/**
 * RESPONSIBILITY: Renders the welcome banner and student profile summary.
 */
export default function StudentDashboardProfileHeader({ profile }: Props) {
  return (
    <div className="bg-card border border-border rounded-xl p-6 flex flex-col md:flex-row items-center md:items-start gap-6 relative overflow-hidden group motion-safe:transition-all motion-safe:duration-200 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
      
      {/* Decorative Background Gradient */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 group-hover:bg-primary/10 transition-colors" />

      {/* Avatar */}
      <div className="w-20 h-20 rounded-full bg-primary-subtle border-2 border-primary/20 flex items-center justify-center shrink-0">
        {profile.avatarUrl ? (
          <img src={profile.avatarUrl} alt={profile.name} className="w-full h-full rounded-full object-cover" />
        ) : (
          <User className="text-primary w-10 h-10" />
        )}
      </div>

      {/* Info Details */}
      <div className="flex flex-col text-center md:text-left z-10">
        <h1 className="text-2xl font-bold text-text-primary">Welcome back, {profile.name}! 👋</h1>
        <p className="text-text-secondary mt-1 text-sm">Have a great day of learning ahead.</p>

        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-4">
          <div className="flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-md bg-page border border-border text-text-secondary">
            <Hash size={14} className="text-primary" />
            Class {profile.class} - {profile.section}
          </div>
          <div className="flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-md bg-page border border-border text-text-secondary">
            <MapPin size={14} className="text-info" />
            Roll No: {profile.rollNo}
          </div>
          <div className="flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-md bg-page border border-border text-text-secondary">
            <Calendar size={14} className="text-success" />
            Academic Year: {profile.academicYear}
          </div>
        </div>
      </div>
      
      {/* View Profile Button */}
      <Link 
        href="/student/profile" 
        className="shrink-0 self-center md:self-end flex items-center gap-2 px-4 py-2 rounded-lg border border-primary/30 text-primary text-sm font-bold hover:bg-primary hover:text-white transition-all group z-10"
      >
        View Profile <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
}
