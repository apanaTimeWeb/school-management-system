"use client";

import React from 'react';
import type { StudentFullProfile } from '../student_profile_types/student_profile_types';
import { User, Download } from 'lucide-react';

interface Props {
  profile: StudentFullProfile;
}

/**
 * RESPONSIBILITY: Renders the top header with student photo, name and quick actions.
 */
export default function StudentProfileHeader({ profile }: Props) {
  return (
    <div className="bg-card border border-border rounded-xl p-6 flex flex-col md:flex-row items-center gap-6 relative overflow-hidden group motion-safe:transition-all">
      
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent -z-10" />

      {/* Profile Photo */}
      <div className="w-24 h-24 rounded-full bg-primary-subtle border-4 border-primary/20 flex items-center justify-center shrink-0 shadow-sm">
        {profile.profilePhotoUrl ? (
          <img src={profile.profilePhotoUrl} alt={profile.studentName} className="w-full h-full rounded-full object-cover" />
        ) : (
          <User className="text-primary w-12 h-12" />
        )}
      </div>

      {/* Name and ID */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left flex-1">
        <h1 className="text-3xl font-bold text-text-primary">{profile.studentName}</h1>
        <div className="flex items-center gap-3 mt-2">
          <span className="text-sm font-semibold text-text-secondary bg-page px-3 py-1 rounded-md border border-border shadow-sm">
            Student ID: <span className="text-primary">{profile.id}</span>
          </span>
          <span className="text-[10px] uppercase font-bold text-success bg-success/10 px-2 py-1 rounded-md tracking-wider">
            Active Student
          </span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3 shrink-0">
        <button 
          className="flex items-center gap-2 bg-page border border-border text-text-primary font-semibold px-4 py-2 rounded-md hover:border-primary/50 hover:bg-primary/5 transition-colors shadow-sm"
          onClick={() => alert("Downloading Digital ID Card...")}
        >
          <Download size={16} className="text-primary" />
          Download ID
        </button>
      </div>

    </div>
  );
}
