"use client";

import React from 'react';
import type { StudentFullProfile } from '../student_profile_types/student_profile_types';
import { User, Phone, Mail, Map, Cake, Droplet, Briefcase, Lock } from 'lucide-react';

interface Props {
  profile: StudentFullProfile;
}

/**
 * RESPONSIBILITY: Renders the personal and contact details.
 */
export default function StudentProfilePersonalDetails({ profile }: Props) {
  
  const InfoRow = ({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) => (
    <div className="flex flex-col py-3 border-b border-border last:border-0">
      <span className="text-[11px] font-bold text-text-secondary uppercase tracking-wider mb-1 flex items-center gap-1.5">
        {icon} {label}
      </span>
      <span className="text-sm font-semibold text-text-primary">{value}</span>
    </div>
  );

  return (
    <div className="bg-card border border-border rounded-xl p-5">
      <h3 className="text-base font-bold text-text-primary mb-4 flex items-center gap-2 border-b border-border pb-3">
        <User size={18} className="text-primary" /> Personal & Contact Details
        <span className="ml-auto text-[10px] bg-danger/10 text-danger px-2 py-0.5 rounded-full font-bold uppercase flex items-center gap-1">
          <Lock size={10} /> Sensitive (Read Only)
        </span>
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
        {/* Basic Personal */}
        <div>
          <InfoRow icon={<Cake size={14} className="text-pink-500" />} label="Date of Birth" value={profile.dateOfBirth} />
          <InfoRow icon={<User size={14} className="text-blue-500" />} label="Gender" value={profile.gender} />
          <InfoRow icon={<Droplet size={14} className="text-red-500" />} label="Blood Group" value={profile.bloodGroup} />
        </div>

        {/* Contact Info */}
        <div>
          <InfoRow icon={<Phone size={14} className="text-emerald-500" />} label="Student Phone" value={profile.studentPhone} />
          <InfoRow icon={<Mail size={14} className="text-amber-500" />} label="Email Address" value={profile.studentEmail} />
          <InfoRow icon={<Map size={14} className="text-purple-500" />} label="Address" value={`${profile.addressLine1}, ${profile.addressLine2}, ${profile.city}, ${profile.state} - ${profile.pincode}`} />
        </div>
      </div>

      <h4 className="text-sm font-bold text-text-primary mt-6 mb-3 border-b border-border pb-2">Parent/Guardian Info</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
        <div>
          <InfoRow icon={<User size={14} className="text-indigo-500" />} label="Father's Name" value={profile.parentDetails.fatherName} />
          <InfoRow icon={<Phone size={14} className="text-emerald-500" />} label="Father's Contact" value={profile.parentDetails.fatherContact} />
          <InfoRow icon={<Briefcase size={14} className="text-slate-500" />} label="Father's Occupation" value={profile.parentDetails.fatherOccupation} />
        </div>
        <div>
          <InfoRow icon={<User size={14} className="text-indigo-500" />} label="Mother's Name" value={profile.parentDetails.motherName} />
          <InfoRow icon={<Phone size={14} className="text-emerald-500" />} label="Mother's Contact" value={profile.parentDetails.motherContact} />
          <InfoRow icon={<Briefcase size={14} className="text-slate-500" />} label="Mother's Occupation" value={profile.parentDetails.motherOccupation} />
        </div>
      </div>

    </div>
  );
}
