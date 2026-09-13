"use client";
import React from 'react';
import { PrincipalProfileDetails } from '../profile_types/PrincipalProfile.types';
import { Mail, Phone, MapPin, Award, Calendar, Briefcase, Camera } from 'lucide-react';

export default function PrincipalProfileDetailsTab({ profile }: { profile: PrincipalProfileDetails }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      
      <div className="col-span-1">
        <div className="bg-card border border-border rounded-xl p-6 flex flex-col items-center text-center shadow-sm">
          <div className="relative mb-4 group cursor-pointer">
            <div className="w-24 h-24 rounded-full bg-primary/20 text-primary flex items-center justify-center text-[32px] font-bold border-2 border-primary/50 overflow-hidden">
               {profile.avatarUrl ? (
                 <img src={profile.avatarUrl} alt="Avatar" className="w-full h-full object-cover" />
               ) : (
                 profile.name.charAt(0)
               )}
            </div>
            <div className="absolute inset-0 bg-black/60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
               <Camera className="text-white" size={24}/>
            </div>
          </div>
          
          <h2 className="text-[20px] font-bold text-text-primary mb-1">{profile.name}</h2>
          <p className="text-[14px] text-text-secondary mb-1">{profile.role}</p>
          <span className="text-[11px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/30">ID: {profile.id}</span>
          
          <div className="w-full h-px bg-border my-6"></div>
          
          <div className="w-full space-y-4 text-left">
             <div className="flex items-center gap-3">
               <div className="w-8 h-8 rounded-full bg-page flex items-center justify-center shrink-0 border border-border"><Mail size={14} className="text-text-secondary"/></div>
               <div className="overflow-hidden">
                 <p className="text-[11px] text-text-secondary font-bold">Email Address</p>
                 <p className="text-[13px] text-text-primary truncate">{profile.email}</p>
               </div>
             </div>
             <div className="flex items-center gap-3">
               <div className="w-8 h-8 rounded-full bg-page flex items-center justify-center shrink-0 border border-border"><Phone size={14} className="text-text-secondary"/></div>
               <div>
                 <p className="text-[11px] text-text-secondary font-bold">Phone Number</p>
                 <p className="text-[13px] text-text-primary">{profile.phone}</p>
               </div>
             </div>
          </div>
        </div>
      </div>

      <div className="col-span-1 lg:col-span-2 space-y-6">
        <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
           <h3 className="text-[16px] font-bold text-text-primary mb-5 flex items-center gap-2"><Briefcase className="text-info" size={18}/> Professional Details</h3>
           
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
             <div>
               <p className="text-[12px] text-text-secondary font-bold mb-1 flex items-center gap-1.5"><Calendar size={14}/> Date of Joining</p>
               <p className="text-[15px] font-bold text-text-primary bg-page border border-border px-3 py-2 rounded">{profile.joiningDate}</p>
             </div>
             <div>
               <p className="text-[12px] text-text-secondary font-bold mb-1 flex items-center gap-1.5"><Award size={14}/> Qualification</p>
               <p className="text-[15px] font-bold text-text-primary bg-page border border-border px-3 py-2 rounded">{profile.qualification}</p>
             </div>
             <div className="sm:col-span-2">
               <p className="text-[12px] text-text-secondary font-bold mb-1 flex items-center gap-1.5"><MapPin size={14}/> Residential Address</p>
               <p className="text-[15px] font-bold text-text-primary bg-page border border-border px-3 py-2 rounded">{profile.address}</p>
             </div>
           </div>
           
           <div className="mt-6 flex justify-end">
             <button className="px-6 py-2 bg-primary hover:bg-primary-hover text-black font-bold text-[13px] rounded-md transition-colors">
               Edit Profile
             </button>
           </div>
        </div>
      </div>

    </div>
  );
}
