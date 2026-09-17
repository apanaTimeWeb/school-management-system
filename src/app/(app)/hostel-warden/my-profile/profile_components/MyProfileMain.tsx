"use client";

import React from 'react';
import { 
  UserCircle, Mail, Phone, MapPin, 
  Building, Calendar, ShieldCheck, Edit3
} from 'lucide-react';

export default function MyProfileMain() {
  return (
    <div className="flex flex-col w-full h-full space-y-6 max-w-4xl mx-auto">
      
      {/* Header Profile Card */}
      <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl shadow-sm overflow-hidden">
         {/* Cover Photo Area */}
         <div className="h-32 bg-gradient-to-r from-blue-600 to-indigo-600 relative">
            <button className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-2 transition-colors">
               <Edit3 size={14} /> Edit Cover
            </button>
         </div>
         
         {/* Avatar & Basic Info */}
         <div className="px-8 pb-8 relative">
            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-end -mt-12 mb-6">
               <div className="w-24 h-24 rounded-2xl bg-[var(--bg-card)] p-1 border-4 border-[var(--bg-page)] shadow-lg shrink-0">
                  <div className="w-full h-full rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center font-bold text-3xl">
                     VK
                  </div>
               </div>
               <div className="flex-1">
                  <h1 className="text-2xl font-black text-[var(--text-primary)]">Vikram Kumar</h1>
                  <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mt-1">Chief Hostel Warden</p>
               </div>
               <button className="w-full sm:w-auto px-6 py-2.5 bg-[var(--bg-input)] border border-[var(--border)] text-[var(--text-primary)] font-bold text-sm rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors flex items-center justify-center gap-2">
                  <Edit3 size={16} /> Edit Profile
               </button>
            </div>
            
            <div className="flex flex-wrap gap-x-8 gap-y-4 pt-4 border-t border-[var(--border)]">
               <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                  <ShieldCheck size={16} className="text-emerald-500" />
                  <span>ID: <strong className="text-[var(--text-primary)]">EMP-HW-205</strong></span>
               </div>
               <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                  <Calendar size={16} className="text-amber-500" />
                  <span>Joined: <strong className="text-[var(--text-primary)]">Aug 2021</strong></span>
               </div>
               <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="font-bold text-emerald-600">Active Status</span>
               </div>
            </div>
         </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         {/* Contact Information */}
         <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-6 shadow-sm">
            <h2 className="text-lg font-bold text-[var(--text-primary)] mb-6 flex items-center gap-2">
               <UserCircle className="text-indigo-500" size={20} /> Contact Details
            </h2>
            
            <div className="space-y-5">
               <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-500/10 text-indigo-600 flex items-center justify-center shrink-0">
                     <Mail size={18} />
                  </div>
                  <div>
                     <span className="text-[10px] uppercase font-bold text-[var(--text-secondary)] block mb-0.5">Email Address</span>
                     <p className="font-semibold text-[var(--text-primary)]">vikram.warden@schoolerp.com</p>
                  </div>
               </div>
               <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-500/10 text-indigo-600 flex items-center justify-center shrink-0">
                     <Phone size={18} />
                  </div>
                  <div>
                     <span className="text-[10px] uppercase font-bold text-[var(--text-secondary)] block mb-0.5">Phone Number</span>
                     <p className="font-semibold text-[var(--text-primary)]">+91 9876543210</p>
                  </div>
               </div>
               <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-500/10 text-indigo-600 flex items-center justify-center shrink-0">
                     <MapPin size={18} />
                  </div>
                  <div>
                     <span className="text-[10px] uppercase font-bold text-[var(--text-secondary)] block mb-0.5">Residential Address</span>
                     <p className="font-semibold text-[var(--text-primary)]">Staff Quarters, Q-Block, Room 12<br/>Campus Premises</p>
                  </div>
               </div>
            </div>
         </div>

         {/* Assignment Details */}
         <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-6 shadow-sm">
            <h2 className="text-lg font-bold text-[var(--text-primary)] mb-6 flex items-center gap-2">
               <Building className="text-fuchsia-500" size={20} /> Current Assignment
            </h2>
            
            <div className="space-y-4">
               <div className="bg-[var(--bg-input)] p-4 rounded-xl border border-[var(--border)]">
                  <span className="text-[10px] uppercase font-bold text-[var(--text-secondary)] block mb-2">Primary Responsibility</span>
                  <div className="flex items-center gap-3">
                     <div className="w-10 h-10 rounded-lg bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-600 flex items-center justify-center font-bold text-lg">
                        B
                     </div>
                     <div>
                        <p className="font-bold text-[var(--text-primary)]">Block B (Boys Hostel)</p>
                        <p className="text-xs text-[var(--text-secondary)] mt-0.5">Capacity: 450 Students</p>
                     </div>
                  </div>
               </div>
               
               <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[var(--bg-input)] p-4 rounded-xl border border-[var(--border)]">
                     <span className="text-[10px] uppercase font-bold text-[var(--text-secondary)] block mb-1">Floors Assigned</span>
                     <p className="font-bold text-[var(--text-primary)]">Ground, 1st & 2nd</p>
                  </div>
                  <div className="bg-[var(--bg-input)] p-4 rounded-xl border border-[var(--border)]">
                     <span className="text-[10px] uppercase font-bold text-[var(--text-secondary)] block mb-1">Shift Timings</span>
                     <p className="font-bold text-[var(--text-primary)]">24/7 (Resident)</p>
                  </div>
               </div>
            </div>
         </div>
      </div>

    </div>
  );
}
