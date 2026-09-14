"use client";

import React, { useState } from 'react';
import { Trophy, CalendarClock, CheckCircle } from 'lucide-react';

export default function PublicEvents() {
  const [showToast, setShowToast] = useState(false);

  const handlePublish = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="flex flex-col gap-6 h-full fade-in relative">
      {showToast && (
        <div className="absolute top-4 right-4 bg-success text-white px-4 py-2 rounded-lg shadow-lg font-bold text-sm flex items-center gap-2 fade-in z-10">
          <CheckCircle size={16} /> Content Published to Website!
        </div>
      )}

      <div className="flex-1 bg-card border border-border rounded-xl shadow-sm p-6 overflow-y-auto">
        <h2 className="text-xl font-bold text-text-primary border-b border-border pb-4 mb-6 flex items-center gap-2">
          <Trophy size={20} className="text-primary"/> Public Events & Achievements
        </h2>
        
        <div className="flex flex-col lg:flex-row gap-8">
          
          <div className="flex-1 bg-bg-page border border-border rounded-lg p-5 flex flex-col gap-4">
             <h3 className="font-bold text-sm flex items-center gap-2">
               <Trophy size={16} className="text-primary"/> Publish Student Achievement
             </h3>
             <p className="text-xs font-medium text-text-secondary mb-2">Showcase your top students' achievements on the website homepage or achievements page.</p>

             <div className="flex flex-col gap-1.5">
               <label className="text-xs font-semibold text-text-secondary">Student Name</label>
               <input type="text" placeholder="e.g. Aarav Sharma" className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-primary font-bold" />
             </div>
             
             <div className="flex flex-col gap-1.5">
               <label className="text-xs font-semibold text-text-secondary">Achievement Title</label>
               <input type="text" placeholder="e.g. 1st Rank in State Math Olympiad" className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-primary font-bold" />
             </div>

             <div className="flex flex-col gap-1.5">
               <label className="text-xs font-semibold text-text-secondary">Description</label>
               <textarea rows={2} className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-primary resize-none"></textarea>
             </div>
             
             <div className="flex flex-col gap-1.5">
               <label className="text-xs font-semibold text-text-secondary">Upload Photo</label>
               <input type="file" className="text-sm file:mr-4 file:py-1 file:px-3 file:rounded file:border-0 file:text-xs file:font-bold file:bg-primary/10 file:text-primary hover:file:bg-primary/20 transition cursor-pointer" />
             </div>
             
             <button onClick={handlePublish} className="bg-primary text-black px-4 py-2.5 rounded-lg text-sm font-bold shadow-sm hover:bg-primary-hover transition flex items-center justify-center gap-2 mt-2">
               Publish Achievement
             </button>
          </div>

          <div className="flex-1 flex flex-col gap-4">
            <h3 className="font-bold text-sm text-text-primary flex items-center gap-2">
               <CalendarClock size={16} /> Sync Public Events
            </h3>
            
            <div className="bg-info-bg/30 border border-info/30 rounded-lg p-5 mb-2">
               <p className="text-xs font-semibold text-info leading-relaxed">
                 The public events calendar on the website automatically syncs with the <strong className="underline">Events & Activities (Module 17)</strong>. 
                 You do not need to re-enter events here. Simply ensure they are marked as "Public" in Module 17.
               </p>
            </div>
            
            <h4 className="font-bold text-xs text-text-secondary uppercase">Currently Visible on Website:</h4>
            <div className="bg-card border border-border rounded-lg overflow-hidden shadow-sm">
               <table className="w-full text-left">
                 <tbody className="text-sm font-semibold">
                   <tr>
                     <td className="p-3 border-b border-border">Annual Sports Meet 2026</td>
                     <td className="p-3 border-b border-border text-right text-xs text-success">Visible</td>
                   </tr>
                   <tr>
                     <td className="p-3 border-b border-border">Diwali Cultural Fest</td>
                     <td className="p-3 border-b border-border text-right text-xs text-success">Visible</td>
                   </tr>
                 </tbody>
               </table>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
