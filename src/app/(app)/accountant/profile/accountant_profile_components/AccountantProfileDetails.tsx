"use client";
import React from "react";
import { Mail, Phone, Calendar, Briefcase, Camera } from "lucide-react";
import { MOCK_PROFILE } from "../accountant_profile_utils/AccountantProfileConstants";

export default function AccountantProfileDetails() {
  return (
    <div className="bg-card border border-border rounded-xl shadow-sm p-6 fade-in space-y-8">
      
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row items-center gap-6 pb-6 border-b border-border">
        <div className="relative group cursor-pointer">
          <img src={MOCK_PROFILE.avatarUrl} alt="Avatar" className="w-24 h-24 rounded-full border-4 border-bg-page shadow-md" />
          <div className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <Camera size={24} className="text-white" />
          </div>
        </div>
        <div className="text-center sm:text-left">
          <h2 className="text-2xl font-black text-text-primary">{MOCK_PROFILE.name}</h2>
          <p className="text-sm font-bold text-primary mt-1">{MOCK_PROFILE.role}</p>
          <span className="inline-block mt-2 px-3 py-1 bg-bg-input border border-border rounded-full text-[11px] font-bold text-text-secondary">
            ID: {MOCK_PROFILE.id}
          </span>
        </div>
      </div>

      {/* Details Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-text-secondary uppercase">Full Name</label>
          <div className="relative">
            <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" size={16} />
            <input type="text" defaultValue={MOCK_PROFILE.name} className="w-full bg-bg-input border border-border rounded-lg pl-10 pr-4 py-2.5 text-sm text-text-primary focus:border-primary outline-none transition-colors" />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-bold text-text-secondary uppercase">Email Address</label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" size={16} />
            <input type="email" defaultValue={MOCK_PROFILE.email} className="w-full bg-bg-input border border-border rounded-lg pl-10 pr-4 py-2.5 text-sm text-text-primary focus:border-primary outline-none transition-colors" />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-bold text-text-secondary uppercase">Phone Number</label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" size={16} />
            <input type="text" defaultValue={MOCK_PROFILE.phone} className="w-full bg-bg-input border border-border rounded-lg pl-10 pr-4 py-2.5 text-sm text-text-primary focus:border-primary outline-none transition-colors" />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-bold text-text-secondary uppercase">Date of Joining (Read-only)</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" size={16} />
            <input type="text" defaultValue={MOCK_PROFILE.joiningDate} readOnly className="w-full bg-bg-page border border-border/50 rounded-lg pl-10 pr-4 py-2.5 text-sm text-text-secondary outline-none cursor-not-allowed" />
          </div>
        </div>
      </div>

      <div className="pt-4 flex justify-end">
        <button className="px-6 py-2.5 text-sm font-bold bg-primary text-black rounded-lg hover:bg-primary-hover shadow-md transition-colors">
          Save Changes
        </button>
      </div>
    </div>
  );
}

const UserIcon = ({ className, size }: { className?: string, size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
);
