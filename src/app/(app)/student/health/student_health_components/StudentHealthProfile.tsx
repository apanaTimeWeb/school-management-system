"use client";

import React from 'react';
import type { HealthProfile, EmergencyContact } from '../student_health_types/student_health_types';
import { Droplet, ActivitySquare, AlertOctagon, Phone, User, Hospital, ShieldAlert } from 'lucide-react';
import clsx from 'clsx';

interface Props {
  profile: HealthProfile;
  emergency: EmergencyContact;
}

export default function StudentHealthProfile({ profile, emergency }: Props) {
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 motion-safe:animate-[fadeIn_0.3s_ease-out]">
      
      {/* Vitals & Basics */}
      <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
        <h3 className="text-sm font-bold text-text-secondary flex items-center gap-2 uppercase tracking-wider mb-6">
          <ActivitySquare size={16} className="text-primary" /> Physical Vitals
        </h3>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-page border border-border rounded-lg p-4 flex flex-col items-center justify-center text-center">
            <Droplet size={24} className="text-danger mb-2" />
            <span className="text-[10px] font-bold text-text-secondary uppercase">Blood Group</span>
            <span className="text-2xl font-black text-text-primary">{profile.bloodGroup}</span>
          </div>
          
          <div className="bg-page border border-border rounded-lg p-4 flex flex-col items-center justify-center text-center">
            <span className="text-[10px] font-bold text-text-secondary uppercase mb-1">BMI</span>
            <span className={clsx(
              "text-2xl font-black mb-1",
              profile.bmi >= 18.5 && profile.bmi <= 24.9 ? "text-success" : "text-amber-500"
            )}>{profile.bmi}</span>
            <span className="text-[10px] font-bold bg-card border border-border px-2 py-0.5 rounded uppercase">
              {profile.bmi >= 18.5 && profile.bmi <= 24.9 ? 'Healthy' : 'Needs Attention'}
            </span>
          </div>

          <div className="bg-page border border-border rounded-lg p-4 flex flex-col items-center justify-center text-center">
            <span className="text-[10px] font-bold text-text-secondary uppercase mb-1">Height</span>
            <span className="text-xl font-bold text-text-primary">{profile.heightCm} <span className="text-sm text-text-secondary font-medium">cm</span></span>
          </div>
          
          <div className="bg-page border border-border rounded-lg p-4 flex flex-col items-center justify-center text-center">
            <span className="text-[10px] font-bold text-text-secondary uppercase mb-1">Weight</span>
            <span className="text-xl font-bold text-text-primary">{profile.weightKg} <span className="text-sm text-text-secondary font-medium">kg</span></span>
          </div>
        </div>
      </div>

      {/* Allergies & Emergency */}
      <div className="flex flex-col gap-6">
        
        <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
          <h3 className="text-sm font-bold text-text-secondary flex items-center gap-2 uppercase tracking-wider mb-4">
            <ShieldAlert size={16} className="text-amber-500" /> Allergies & Conditions
          </h3>
          <div className="mb-4">
            <span className="text-xs font-bold text-text-primary mb-2 block">Known Allergies:</span>
            <div className="flex flex-wrap gap-2">
              {profile.allergies.length > 0 ? profile.allergies.map((allergy, i) => (
                <span key={i} className="px-3 py-1 bg-amber-500/10 text-amber-500 text-xs font-bold rounded-full border border-amber-500/20">
                  {allergy}
                </span>
              )) : (
                <span className="text-sm text-text-secondary">None reported.</span>
              )}
            </div>
          </div>
          <div>
            <span className="text-xs font-bold text-text-primary mb-2 block">Chronic Conditions (If Any):</span>
            <div className="flex flex-wrap gap-2">
              {profile.chronicConditions.map((cond, i) => (
                <span key={i} className="px-3 py-1 bg-page text-text-secondary border border-border text-xs font-bold rounded-full">
                  {cond}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-danger/5 border border-danger/20 rounded-xl p-6 shadow-sm flex-1">
          <h3 className="text-sm font-bold text-danger flex items-center gap-2 uppercase tracking-wider mb-4">
            <AlertOctagon size={16} /> Emergency Contact
          </h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <User size={16} className="text-danger/70" />
              <div>
                <span className="text-[10px] font-bold text-text-secondary uppercase block">Name & Relation</span>
                <span className="text-sm font-bold text-text-primary">{emergency.name} ({emergency.relation})</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={16} className="text-danger/70" />
              <div>
                <span className="text-[10px] font-bold text-text-secondary uppercase block">Contact Number</span>
                <a href={`tel:${emergency.phone}`} className="text-sm font-bold text-primary hover:underline">{emergency.phone}</a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Hospital size={16} className="text-danger/70" />
              <div>
                <span className="text-[10px] font-bold text-text-secondary uppercase block">Preferred Hospital</span>
                <span className="text-sm font-bold text-text-primary">{emergency.preferredHospital}</span>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
