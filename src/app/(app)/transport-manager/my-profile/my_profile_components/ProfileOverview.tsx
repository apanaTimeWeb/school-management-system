"use client";

import React, { useState } from 'react';
import { Camera, Mail, Phone, Hash, Building2, Calendar, Edit3, Loader2 } from 'lucide-react';
import type { UserProfile } from '../my_profile_types/my_profile.types';

// RESPONSIBILITY: Renders the profile overview (left column)

interface ProfileOverviewProps {
  profile: UserProfile;
}

export default function ProfileOverview({ profile }: ProfileOverviewProps) {
  
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [formData, setFormData] = useState({
    phone: profile.phone,
    email: profile.email
  });

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      setIsEditing(false);
      // In a real app, dispatch to state/API here
    }, 600);
  };

  return (
    <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl overflow-hidden flex flex-col h-full shadow-sm">
       
       {/* Cover & Avatar Header */}
       <div className="h-32 bg-gradient-to-r from-[var(--primary)] to-[var(--primary-hover)] relative">
          <div className="absolute -bottom-12 left-6">
             <div className="relative group cursor-pointer">
                <div className="w-24 h-24 rounded-2xl bg-[var(--bg-page)] border-4 border-[var(--bg-card)] shadow-lg flex items-center justify-center overflow-hidden">
                   {profile.photoUrl ? (
                     <img src={profile.photoUrl} alt={profile.name} className="w-full h-full object-cover" />
                   ) : (
                     <span className="text-3xl font-black text-[var(--primary)] opacity-50">
                       {profile.name.charAt(0)}
                     </span>
                   )}
                </div>
                {/* Upload Overlay */}
                <div className="absolute inset-0 bg-black/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white border-4 border-transparent">
                   <Camera size={24} />
                </div>
             </div>
          </div>
       </div>

       {/* Profile Basic Info */}
       <div className="pt-16 pb-6 px-6 border-b border-[var(--border)]">
          <h2 className="text-xl font-bold text-[var(--text-primary)]">{profile.name}</h2>
          <p className="text-sm font-medium text-[var(--primary)]">{profile.designation}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded bg-[var(--bg-input)] text-[var(--text-secondary)] border border-[var(--border)] flex items-center gap-1.5">
              <Hash size={12}/> {profile.employeeId}
            </span>
            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded bg-[rgba(16,185,129,0.1)] text-emerald-500 border border-emerald-500/20 flex items-center gap-1.5">
               Active
            </span>
          </div>
       </div>

       {/* Contact & Meta Info */}
       <div className="flex-1 p-6 flex flex-col gap-6">
          
          <div className="flex items-center justify-between">
             <h3 className="text-sm font-bold text-[var(--text-primary)] uppercase tracking-wider">Contact Information</h3>
             {!isEditing && (
               <button onClick={() => setIsEditing(true)} className="text-[10px] uppercase font-bold text-[var(--primary)] hover:underline flex items-center gap-1">
                 <Edit3 size={12}/> Edit
               </button>
             )}
          </div>

          <div className="space-y-4">
             {/* Phone */}
             <div className="flex flex-col gap-1.5">
                <span className="text-xs text-[var(--text-secondary)] flex items-center gap-2"><Phone size={14}/> Phone Number</span>
                {isEditing ? (
                  <input 
                    type="text" 
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                    className="bg-[var(--bg-input)] border border-[var(--border)] rounded px-3 py-1.5 text-sm font-medium text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)]"
                  />
                ) : (
                  <span className="text-sm font-semibold text-[var(--text-primary)]">{formData.phone}</span>
                )}
             </div>

             {/* Email */}
             <div className="flex flex-col gap-1.5">
                <span className="text-xs text-[var(--text-secondary)] flex items-center gap-2"><Mail size={14}/> Email Address</span>
                {isEditing ? (
                  <input 
                    type="email" 
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    className="bg-[var(--bg-input)] border border-[var(--border)] rounded px-3 py-1.5 text-sm font-medium text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)]"
                  />
                ) : (
                  <span className="text-sm font-semibold text-[var(--text-primary)]">{formData.email}</span>
                )}
             </div>

             {isEditing && (
                <div className="flex gap-2 pt-2">
                   <button 
                     onClick={() => setIsEditing(false)}
                     disabled={isSaving}
                     className="px-3 py-1.5 text-xs font-medium rounded border border-[var(--border)] text-[var(--text-primary)] hover:bg-[var(--bg-input)] transition-colors disabled:opacity-50"
                   >
                     Cancel
                   </button>
                   <button 
                     onClick={handleSave}
                     disabled={isSaving}
                     className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded bg-[var(--primary)] text-white transition-colors disabled:opacity-50 shadow-sm"
                   >
                     {isSaving ? <Loader2 size={12} className="animate-spin" /> : 'Save Changes'}
                   </button>
                </div>
             )}
          </div>

          <hr className="border-[var(--border)]" />

          {/* Org Info */}
          <div className="space-y-4">
             <h3 className="text-sm font-bold text-[var(--text-primary)] uppercase tracking-wider">Organizational</h3>
             
             <div className="flex flex-col gap-1.5">
                <span className="text-xs text-[var(--text-secondary)] flex items-center gap-2"><Building2 size={14}/> Department</span>
                <span className="text-sm font-semibold text-[var(--text-primary)]">{profile.department}</span>
             </div>

             <div className="flex flex-col gap-1.5">
                <span className="text-xs text-[var(--text-secondary)] flex items-center gap-2"><Calendar size={14}/> Joining Date</span>
                <span className="text-sm font-semibold text-[var(--text-primary)]">
                  {new Date(profile.joiningDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
                </span>
             </div>
          </div>

       </div>
    </div>
  );
}
