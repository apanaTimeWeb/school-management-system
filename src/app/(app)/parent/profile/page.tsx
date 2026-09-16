"use client";

import React, { useState } from 'react';
import { 
  UserCircle, Phone, Mail, MapPin, AlertCircle, Briefcase, 
  MessageSquare, ShieldCheck, Edit3, Camera, CheckCircle2 
} from 'lucide-react';
import clsx from 'clsx';

export default function ParentProfilePage() {
  const [isEditing, setIsEditing] = useState(false);

  // Mock Parent Data
  const [profile, setProfile] = useState({
    name: "Ramesh Kumar",
    relationship: "Father",
    contactNumber: "+91 98765 43210",
    email: "ramesh.kumar@example.com",
    address: "123, Sunrise Apartments, Main Road, New Delhi, 110001",
    emergencyContact: "+91 91234 56789 (Wife)",
    occupation: "Software Engineer",
    communicationPreference: "Email & SMS",
    accountStatus: "Active"
  });

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-6">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 rounded-2xl border border-border shadow-sm">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-text-primary tracking-tight">My Profile</h1>
          <p className="text-text-secondary text-sm mt-1">Manage your personal information and preferences.</p>
        </div>
        <button 
          onClick={() => setIsEditing(!isEditing)}
          className={clsx(
            "flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-sm transition-all shadow-md transform hover:-translate-y-0.5",
            isEditing 
              ? "bg-gradient-to-r from-emerald-500 to-emerald-400 text-white shadow-emerald-500/30 hover:shadow-emerald-500/50" 
              : "bg-gradient-to-r from-pink-600 to-pink-500 text-white shadow-pink-500/30 hover:shadow-pink-500/50"
          )}
        >
          {isEditing ? <><CheckCircle2 size={16} /> Save Changes</> : <><Edit3 size={16} /> Edit Profile</>}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column: Avatar & Quick Info */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white rounded-2xl border border-border p-6 shadow-sm flex flex-col items-center text-center relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-pink-500 to-purple-500 opacity-20"></div>
            
            <div className="relative w-32 h-32 rounded-full border-4 border-white shadow-xl overflow-hidden mt-8 mb-4 bg-pink-100 flex items-center justify-center">
               <UserCircle className="text-pink-500" size={64} />
               {isEditing && (
                 <button className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white transition-opacity">
                   <Camera size={24} />
                   <span className="text-[10px] font-bold mt-1">Change</span>
                 </button>
               )}
            </div>
            
            <h2 className="text-xl font-bold text-text-primary">{profile.name}</h2>
            <p className="text-pink-600 font-semibold text-sm mb-4 px-3 py-1 bg-pink-50 rounded-full inline-block mt-2">
              {profile.relationship}
            </p>
            
            <div className="w-full flex items-center justify-center gap-2 mt-2 pt-4 border-t border-border">
              <ShieldCheck className="text-emerald-500" size={18} />
              <span className="text-sm font-semibold text-text-primary">Account Status: <span className="text-emerald-500">{profile.accountStatus}</span></span>
            </div>
          </div>
        </div>

        {/* Right Column: Detailed Info */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Contact Information */}
          <div className="bg-white rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="px-6 py-4 border-b border-border bg-page/50 flex items-center gap-2">
              <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                <Phone size={18} />
              </div>
              <h3 className="text-lg font-bold text-text-primary">Contact Information</h3>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-text-tertiary uppercase tracking-wider">Contact Number</label>
                {isEditing ? (
                  <input type="text" value={profile.contactNumber} onChange={(e) => setProfile({...profile, contactNumber: e.target.value})} className="w-full p-2.5 border border-border rounded-xl text-sm font-medium focus:ring-2 focus:ring-pink-500/50 outline-none transition-all" />
                ) : (
                  <div className="flex items-center gap-2 text-text-primary font-semibold text-sm">
                    {profile.contactNumber}
                  </div>
                )}
              </div>
              
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-text-tertiary uppercase tracking-wider">Email Address</label>
                {isEditing ? (
                  <input type="email" value={profile.email} onChange={(e) => setProfile({...profile, email: e.target.value})} className="w-full p-2.5 border border-border rounded-xl text-sm font-medium focus:ring-2 focus:ring-pink-500/50 outline-none transition-all" />
                ) : (
                  <div className="flex items-center gap-2 text-text-primary font-semibold text-sm">
                    {profile.email}
                  </div>
                )}
              </div>

              <div className="space-y-1.5 md:col-span-2">
                <label className="text-xs font-bold text-text-tertiary uppercase tracking-wider">Residential Address</label>
                {isEditing ? (
                  <textarea value={profile.address} onChange={(e) => setProfile({...profile, address: e.target.value})} className="w-full p-2.5 border border-border rounded-xl text-sm font-medium focus:ring-2 focus:ring-pink-500/50 outline-none transition-all resize-none" rows={2} />
                ) : (
                  <div className="flex items-start gap-2 text-text-primary font-semibold text-sm">
                    {profile.address}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="bg-white rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="px-6 py-4 border-b border-border bg-page/50 flex items-center gap-2">
              <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
                <AlertCircle size={18} />
              </div>
              <h3 className="text-lg font-bold text-text-primary">Additional Details</h3>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-text-tertiary uppercase tracking-wider">Emergency Contact</label>
                {isEditing ? (
                  <input type="text" value={profile.emergencyContact} onChange={(e) => setProfile({...profile, emergencyContact: e.target.value})} className="w-full p-2.5 border border-border rounded-xl text-sm font-medium focus:ring-2 focus:ring-pink-500/50 outline-none transition-all" />
                ) : (
                  <div className="flex items-center gap-2 text-text-primary font-semibold text-sm">
                    {profile.emergencyContact}
                  </div>
                )}
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-text-tertiary uppercase tracking-wider">Occupation</label>
                {isEditing ? (
                  <input type="text" value={profile.occupation} onChange={(e) => setProfile({...profile, occupation: e.target.value})} className="w-full p-2.5 border border-border rounded-xl text-sm font-medium focus:ring-2 focus:ring-pink-500/50 outline-none transition-all" />
                ) : (
                  <div className="flex items-center gap-2 text-text-primary font-semibold text-sm">
                    {profile.occupation}
                  </div>
                )}
              </div>

              <div className="space-y-1.5 md:col-span-2">
                <label className="text-xs font-bold text-text-tertiary uppercase tracking-wider">Communication Preferences</label>
                {isEditing ? (
                  <select 
                    value={profile.communicationPreference} 
                    onChange={(e) => setProfile({...profile, communicationPreference: e.target.value})}
                    className="w-full p-2.5 border border-border rounded-xl text-sm font-medium focus:ring-2 focus:ring-pink-500/50 outline-none transition-all bg-white"
                  >
                    <option value="Email Only">Email Only</option>
                    <option value="SMS Only">SMS Only</option>
                    <option value="Email & SMS">Email & SMS</option>
                    <option value="WhatsApp">WhatsApp</option>
                  </select>
                ) : (
                  <div className="flex items-center gap-2 text-text-primary font-semibold text-sm">
                    <MessageSquare size={16} className="text-text-tertiary" />
                    {profile.communicationPreference}
                  </div>
                )}
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
