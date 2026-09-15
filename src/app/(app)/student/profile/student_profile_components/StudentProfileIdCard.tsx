"use client";

import React from 'react';
import type { StudentFullProfile } from '../student_profile_types/student_profile_types';
import { QrCode, User } from 'lucide-react';

interface Props {
  profile: StudentFullProfile;
}

/**
 * RESPONSIBILITY: Renders a digital ID card preview.
 */
export default function StudentProfileIdCard({ profile }: Props) {
  return (
    <div className="bg-card border border-border rounded-xl p-5 flex flex-col items-center">
      <h3 className="text-base font-bold text-text-primary mb-6 w-full border-b border-border pb-3">Digital ID Card</h3>
      
      {/* ID Card Wrapper */}
      <div className="w-[280px] bg-gradient-to-b from-primary to-primary-hover rounded-xl p-1 shadow-lg shadow-primary/20 motion-safe:transition-transform hover:scale-105 duration-300">
        <div className="bg-white rounded-lg p-4 flex flex-col items-center relative overflow-hidden">
          
          {/* Header */}
          <div className="w-full text-center border-b-2 border-primary/20 pb-2 mb-4">
            <h4 className="text-[15px] font-bold text-gray-900 leading-tight">SMART GYM 360</h4>
            <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest">Global School</span>
          </div>

          {/* Photo */}
          <div className="w-24 h-24 rounded-md bg-gray-100 border-2 border-primary/30 flex items-center justify-center mb-3">
            {profile.profilePhotoUrl ? (
              <img src={profile.profilePhotoUrl} alt={profile.studentName} className="w-full h-full rounded-md object-cover" />
            ) : (
              <User size={40} className="text-gray-400" />
            )}
          </div>

          {/* Student Info */}
          <h2 className="text-lg font-bold text-gray-900 mb-1">{profile.studentName}</h2>
          <span className="text-xs font-bold text-primary mb-3">{profile.id}</span>

          <div className="w-full grid grid-cols-2 gap-y-1.5 text-[11px] mb-4 bg-gray-50 p-2 rounded-md border border-gray-100">
            <div className="flex flex-col"><span className="text-gray-500 font-semibold">Class</span><span className="font-bold text-gray-800">{profile.className} - {profile.section}</span></div>
            <div className="flex flex-col"><span className="text-gray-500 font-semibold">DOB</span><span className="font-bold text-gray-800">{profile.dateOfBirth}</span></div>
            <div className="flex flex-col"><span className="text-gray-500 font-semibold">Blood</span><span className="font-bold text-red-600">{profile.bloodGroup}</span></div>
            <div className="flex flex-col"><span className="text-gray-500 font-semibold">Roll</span><span className="font-bold text-gray-800">{profile.rollNumber}</span></div>
          </div>

          {/* QR Code Placeholder */}
          <div className="w-16 h-16 bg-white border border-gray-200 p-1 flex items-center justify-center rounded-md mb-2">
            <QrCode size={40} className="text-gray-800" />
          </div>
          <span className="text-[9px] text-gray-400 font-semibold text-center mt-2 leading-tight">
            If found, please return to Smart Gym 360 Global School
          </span>

        </div>
      </div>
    </div>
  );
}
