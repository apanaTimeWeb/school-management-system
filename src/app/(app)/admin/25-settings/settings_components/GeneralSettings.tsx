"use client";

import React, { useState } from 'react';
import { Building2, Image as ImageIcon, Save, CheckCircle } from 'lucide-react';
import clsx from 'clsx';

export default function GeneralSettings() {
  const [activeTab, setActiveTab] = useState('profile');
  const [showToast, setShowToast] = useState(false);

  const handleSave = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 h-full min-h-[500px] fade-in relative">
      {showToast && (
        <div className="absolute top-4 right-4 bg-success text-white px-4 py-2 rounded-lg shadow-lg font-bold text-sm flex items-center gap-2 fade-in z-10">
          <CheckCircle size={16} /> Settings Saved Successfully!
        </div>
      )}

      <div className="w-full md:w-64 bg-card border border-border rounded-xl shadow-sm flex flex-col p-2 h-fit shrink-0">
        <button onClick={() => setActiveTab('profile')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition mb-1", activeTab === 'profile' ? 'bg-primary/10 text-primary' : 'text-text-secondary hover:bg-bg-page')}>
          <Building2 size={18} /> School Profile
        </button>
        <button onClick={() => setActiveTab('branding')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition", activeTab === 'branding' ? 'bg-info/10 text-info' : 'text-text-secondary hover:bg-bg-page')}>
          <ImageIcon size={18} /> Branding & Logos
        </button>
      </div>

      <div className="flex-1 bg-card border border-border rounded-xl shadow-sm p-6 overflow-y-auto">
        
        {activeTab === 'profile' && (
          <div className="flex flex-col gap-6 fade-in max-w-3xl">
             <h2 className="text-xl font-bold text-text-primary border-b border-border pb-2 flex items-center gap-2">
               <Building2 size={20} className="text-primary"/> Basic School Profile
             </h2>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5 md:col-span-2">
                  <label className="text-xs font-bold text-text-secondary uppercase">School Name (Registered)</label>
                  <input type="text" defaultValue="Delhi Public School" className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-primary font-bold" />
                </div>
                
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-text-secondary uppercase">Registration / Affiliation No.</label>
                  <input type="text" defaultValue="CBSE-123456" className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-primary font-bold" />
                </div>
                
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-text-secondary uppercase">Established Year</label>
                  <input type="text" defaultValue="1995" className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-primary font-bold" />
                </div>

                <div className="flex flex-col gap-1.5 md:col-span-2">
                  <label className="text-xs font-bold text-text-secondary uppercase">Official Address</label>
                  <textarea rows={2} className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-primary resize-none" defaultValue={"Sector 12, RK Puram, New Delhi, 110022"}></textarea>
                </div>
                
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-text-secondary uppercase">Principal's Name</label>
                  <input type="text" defaultValue="Dr. R.K. Sharma" className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-primary font-bold" />
                </div>
             </div>
             
             <button onClick={handleSave} className="bg-primary text-black py-3 rounded-lg font-bold shadow-sm hover:bg-primary-hover transition flex items-center justify-center gap-2 w-48 mt-2">
               <Save size={16}/> Save Profile
             </button>
          </div>
        )}

        {activeTab === 'branding' && (
          <div className="flex flex-col gap-6 fade-in max-w-3xl">
             <h2 className="text-xl font-bold text-info border-b border-info/30 pb-2 flex items-center gap-2">
               <ImageIcon size={20}/> School Branding
             </h2>
             
             <div className="flex flex-col gap-6">
                <div className="bg-bg-page border border-border p-4 rounded-lg flex flex-col gap-3">
                   <h3 className="font-bold text-sm text-text-secondary">Official Logo (For Receipts/Reports)</h3>
                   <div className="flex items-center gap-4">
                     <div className="w-20 h-20 bg-card border border-border rounded flex items-center justify-center text-xs font-bold text-text-secondary">LOGO</div>
                     <input type="file" className="text-sm file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-info/10 file:text-info hover:file:bg-info/20 transition cursor-pointer" />
                   </div>
                </div>

                <div className="bg-bg-page border border-border p-4 rounded-lg flex flex-col gap-3">
                   <h3 className="font-bold text-sm text-text-secondary">School Favicon (Browser Icon)</h3>
                   <div className="flex items-center gap-4">
                     <div className="w-10 h-10 bg-card border border-border rounded flex items-center justify-center text-[10px] font-bold text-text-secondary">FAV</div>
                     <input type="file" className="text-sm file:mr-4 file:py-1 file:px-3 file:rounded file:border-0 file:text-xs file:font-bold file:bg-info/10 file:text-info hover:file:bg-info/20 transition cursor-pointer" />
                   </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-text-secondary uppercase">Brand Color Theme (Hex)</label>
                  <div className="flex gap-2 items-center">
                    <input type="color" defaultValue="#6366f1" className="w-10 h-10 rounded cursor-pointer border-none bg-transparent" />
                    <input type="text" defaultValue="#6366f1" className="flex-1 bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-info font-bold uppercase max-w-[150px]" />
                  </div>
                </div>
             </div>
             
             <button onClick={handleSave} className="bg-info text-white py-3 rounded-lg font-bold shadow-sm hover:bg-info/90 transition flex items-center justify-center gap-2 w-48 mt-2">
               <Save size={16}/> Save Branding
             </button>
          </div>
        )}

      </div>
    </div>
  );
}
