"use client";

import React, { useState } from 'react';
import { Newspaper, BellRing, Megaphone, CheckCircle } from 'lucide-react';
import clsx from 'clsx';

export default function AnnouncementsManager() {
  const [activeTab, setActiveTab] = useState('notices');
  const [showToast, setShowToast] = useState(false);

  const handlePost = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 h-full min-h-[500px] fade-in relative">
      {showToast && (
        <div className="absolute top-4 right-4 bg-success text-white px-4 py-2 rounded-lg shadow-lg font-bold text-sm flex items-center gap-2 fade-in z-10">
          <CheckCircle size={16} /> Successfully Posted to Public Website!
        </div>
      )}

      <div className="w-full md:w-64 bg-card border border-border rounded-xl shadow-sm flex flex-col p-2 h-fit shrink-0">
        <button onClick={() => setActiveTab('notices')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition mb-1", activeTab === 'notices' ? 'bg-danger/10 text-danger' : 'text-text-secondary hover:bg-bg-page')}>
          <BellRing size={18} /> Public Notices
        </button>
        <button onClick={() => setActiveTab('news')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition mb-1", activeTab === 'news' ? 'bg-primary/10 text-primary' : 'text-text-secondary hover:bg-bg-page')}>
          <Newspaper size={18} /> School News
        </button>
        <button onClick={() => setActiveTab('announcements')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition", activeTab === 'announcements' ? 'bg-warning/10 text-warning' : 'text-text-secondary hover:bg-bg-page')}>
          <Megaphone size={18} /> Flash Announcements
        </button>
      </div>

      <div className="flex-1 bg-card border border-border rounded-xl shadow-sm p-6 overflow-y-auto">
        
        {activeTab === 'notices' && (
          <div className="flex flex-col gap-6 fade-in">
             <h2 className="text-xl font-bold text-danger border-b border-danger/30 pb-2 flex items-center gap-2">
               <BellRing size={20}/> Publish Public Notice (e.g. Holidays, Admissions)
             </h2>
             
             <div className="flex flex-col lg:flex-row gap-6">
               <div className="w-full lg:w-1/2 bg-bg-page border border-border p-5 rounded-lg flex flex-col gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-text-secondary uppercase">Notice Title</label>
                    <input type="text" placeholder="e.g. Admissions Open 2026-27" className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-danger font-bold" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-text-secondary uppercase">Notice Content / Body</label>
                    <textarea rows={5} className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-danger resize-none" placeholder="Enter detailed information..."></textarea>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-text-secondary uppercase">Attach PDF (Optional)</label>
                    <input type="file" className="text-sm file:mr-4 file:py-1 file:px-3 file:rounded file:border-0 file:text-xs file:font-bold file:bg-danger/10 file:text-danger hover:file:bg-danger/20 transition cursor-pointer" />
                  </div>
                  <button onClick={handlePost} className="w-full bg-danger text-white py-2 rounded-lg font-bold shadow-sm hover:bg-danger/90 transition mt-2">
                    Publish Notice
                  </button>
               </div>
               
               <div className="flex-1 flex flex-col gap-4">
                  <h3 className="font-bold text-sm text-text-primary border-b border-border pb-2">Active Notices on Website</h3>
                  <div className="bg-card border border-border p-4 rounded-lg shadow-sm">
                     <div className="flex justify-between items-start mb-2">
                       <h4 className="font-bold text-sm text-danger">Diwali Holidays 2025</h4>
                       <span className="text-[10px] bg-danger-bg text-danger px-2 py-0.5 rounded font-bold uppercase">Active</span>
                     </div>
                     <p className="text-xs font-medium text-text-secondary">School will remain closed from Oct 20 to Oct 25...</p>
                     <button className="text-xs font-bold text-danger mt-3 underline">Unpublish</button>
                  </div>
               </div>
             </div>
          </div>
        )}

        {activeTab === 'news' && (
          <div className="flex flex-col gap-6 fade-in h-full justify-center items-center opacity-70">
             <Newspaper size={64} className="text-primary mb-4" />
             <h3 className="font-bold text-lg">School News Blog</h3>
             <p className="text-sm font-semibold max-w-sm text-center">
               Post regular articles about school activities, student features, and educational content. Functions identically to the Notice board but features rich images.
             </p>
          </div>
        )}

        {activeTab === 'announcements' && (
          <div className="flex flex-col gap-6 fade-in max-w-xl mx-auto">
             <h2 className="text-xl font-bold text-warning border-b border-warning/30 pb-2 text-center flex items-center justify-center gap-2">
               <Megaphone size={20}/> Flash Announcements / Ticker
             </h2>
             <div className="bg-warning-bg/20 border border-warning/30 p-6 rounded-lg flex flex-col gap-4 text-center">
                <p className="text-sm font-semibold text-text-secondary mb-2">Flash announcements scroll across the top of the school website (Ticker tape) for urgent updates.</p>
                <input type="text" placeholder="e.g. Due to heavy rain, school is closed today." className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-warning font-bold text-center" />
                <button onClick={handlePost} className="bg-warning text-white py-2 rounded-lg font-bold shadow-sm hover:bg-warning/90 transition mt-2">
                  Update Flash Ticker
                </button>
             </div>
          </div>
        )}

      </div>
    </div>
  );
}
