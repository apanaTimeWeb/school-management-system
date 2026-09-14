"use client";

import { useState, useEffect } from "react";
import { Save, Upload } from "lucide-react";
import type { UserProfileData } from "../hr_my_profile_types/HrMyProfileTypes";

interface HrProfileTabProps {
  profile: UserProfileData;
  handleSave: (p: UserProfileData) => void;
}

export default function HrProfileTab({ profile, handleSave }: HrProfileTabProps) {
  const [local, setLocal] = useState<UserProfileData>(profile);

  useEffect(() => {
    setLocal(profile);
  }, [profile]);

  return (
    <div className="motion-safe:animate-in motion-safe:fade-in duration-300">
      <div className="bg-card border border-border rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-bold text-foreground mb-6 border-b border-border pb-4">Personal Information</h3>

        <div className="flex flex-col sm:flex-row gap-8 mb-8">
           <div className="flex flex-col items-center gap-4">
             <div className="w-32 h-32 rounded-full border-4 border-input shadow-md overflow-hidden bg-input/50 flex items-center justify-center text-4xl font-black text-primary uppercase">
               {local.avatarUrl ? <img src={local.avatarUrl} alt="Avatar" className="w-full h-full object-cover"/> : local.fullName.charAt(0)}
             </div>
             <button className="flex items-center gap-2 px-4 py-2 bg-input text-foreground text-xs font-bold rounded-md hover:bg-border transition-colors border border-border">
               <Upload size={14}/> Upload New Photo
             </button>
           </div>
           
           <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
             <div>
               <label className="block text-[10px] font-bold text-muted-foreground mb-1 uppercase tracking-wider">Full Name</label>
               <input type="text" value={local.fullName} onChange={e => setLocal({...local, fullName: e.target.value})} className="w-full px-3 py-2 bg-input border border-border rounded-md text-sm font-bold text-foreground outline-none focus:border-primary" />
             </div>
             <div>
               <label className="block text-[10px] font-bold text-muted-foreground mb-1 uppercase tracking-wider">Email Address (Read Only)</label>
               <input type="email" value={local.email} disabled className="w-full px-3 py-2 bg-card border border-border rounded-md text-sm font-bold text-muted-foreground outline-none disabled:opacity-70" />
             </div>
             <div>
               <label className="block text-[10px] font-bold text-muted-foreground mb-1 uppercase tracking-wider">Phone Number</label>
               <input type="text" value={local.phone} onChange={e => setLocal({...local, phone: e.target.value})} className="w-full px-3 py-2 bg-input border border-border rounded-md text-sm font-bold text-foreground outline-none focus:border-primary" />
             </div>
             <div>
               <label className="block text-[10px] font-bold text-muted-foreground mb-1 uppercase tracking-wider">Department (Read Only)</label>
               <input type="text" value={local.department} disabled className="w-full px-3 py-2 bg-card border border-border rounded-md text-sm font-bold text-muted-foreground outline-none disabled:opacity-70" />
             </div>
             <div className="md:col-span-2">
               <label className="block text-[10px] font-bold text-muted-foreground mb-1 uppercase tracking-wider">Bio / Description</label>
               <textarea rows={3} value={local.bio} onChange={e => setLocal({...local, bio: e.target.value})} className="w-full px-3 py-2 bg-input border border-border rounded-md text-sm font-medium text-foreground outline-none focus:border-primary resize-none"></textarea>
             </div>
           </div>
        </div>

        <div className="flex justify-end pt-4 border-t border-border">
          <button onClick={() => handleSave(local)} className="flex items-center gap-2 px-6 py-2 bg-primary text-card text-sm font-bold rounded-md hover:bg-yellow-500 shadow-lg shadow-primary/20 transition-all active:scale-95">
            <Save size={16}/> Save Changes
          </button>
        </div>

      </div>
    </div>
  );
}

