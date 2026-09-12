"use client";

import React from "react";
import { User, Mail, Phone, MapPin, Edit3 } from "lucide-react";

export default function MyProfilePage() {
  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto pb-10 fade-in h-[calc(100vh-100px)]">
      <div className="flex flex-col gap-4 mb-2">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">My Profile</h1>
          <p className="text-sm text-text-secondary mt-1">Manage your administrative account details.</p>
        </div>
      </div>

      <div className="flex-1 bg-card border border-border rounded-xl shadow-sm p-6 overflow-y-auto">
         
         <div className="flex flex-col md:flex-row gap-8 items-start max-w-4xl mx-auto">
            {/* Avatar Section */}
            <div className="flex flex-col items-center gap-4 bg-bg-page border border-border p-6 rounded-xl w-full md:w-64 shrink-0 shadow-sm">
               <div className="w-32 h-32 rounded-full bg-primary/10 text-primary flex items-center justify-center border-4 border-card shadow-sm">
                 <User size={64} />
               </div>
               <div className="text-center">
                 <h2 className="text-lg font-black text-text-primary">Principal Admin</h2>
                 <p className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full mt-2 inline-block">Super Administrator</p>
               </div>
               <button className="w-full bg-card border border-border py-2 rounded-lg text-sm font-bold shadow-sm hover:border-primary flex justify-center items-center gap-2 mt-2">
                 <Edit3 size={16}/> Edit Avatar
               </button>
            </div>

            {/* Details Section */}
            <div className="flex-1 bg-bg-page border border-border p-6 rounded-xl shadow-sm w-full">
               <div className="flex justify-between items-center border-b border-border pb-3 mb-6">
                 <h3 className="font-bold text-sm">Personal Information</h3>
                 <button className="text-xs font-bold text-primary hover:underline">Edit Info</button>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="flex flex-col gap-1">
                   <label className="text-[10px] font-bold text-text-secondary uppercase flex items-center gap-1"><User size={12}/> Full Name</label>
                   <p className="text-sm font-bold">Dr. R.K. Sharma</p>
                 </div>
                 <div className="flex flex-col gap-1">
                   <label className="text-[10px] font-bold text-text-secondary uppercase flex items-center gap-1"><Mail size={12}/> Email Address</label>
                   <p className="text-sm font-bold">admin@erp360.com</p>
                 </div>
                 <div className="flex flex-col gap-1">
                   <label className="text-[10px] font-bold text-text-secondary uppercase flex items-center gap-1"><Phone size={12}/> Phone Number</label>
                   <p className="text-sm font-bold">+91 9876543210</p>
                 </div>
                 <div className="flex flex-col gap-1">
                   <label className="text-[10px] font-bold text-text-secondary uppercase flex items-center gap-1"><MapPin size={12}/> Location</label>
                   <p className="text-sm font-bold">New Delhi, India</p>
                 </div>
               </div>
               
               <div className="mt-8 border-t border-border pt-6">
                 <h3 className="font-bold text-sm mb-4">Account Security</h3>
                 <div className="flex gap-4">
                   <a href="/admin/26-security" className="bg-card border border-border px-4 py-2 rounded-lg text-sm font-bold shadow-sm hover:border-primary">Change Password</a>
                   <a href="/admin/26-security" className="bg-card border border-border px-4 py-2 rounded-lg text-sm font-bold shadow-sm hover:border-warning">Configure 2FA</a>
                 </div>
               </div>
            </div>
         </div>

      </div>
    </div>
  );
}
