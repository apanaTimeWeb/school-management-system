"use client";

import React, { useState } from 'react';
import { Medal, Award, CheckCircle } from 'lucide-react';
import clsx from 'clsx';

export default function EventResults() {
  const [activeTab, setActiveTab] = useState('results');
  const [showToast, setShowToast] = useState(false);

  const handleSave = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 h-full min-h-[500px] fade-in relative">
      {showToast && (
        <div className="absolute top-4 right-4 bg-success text-white px-4 py-2 rounded-lg shadow-lg font-bold text-sm flex items-center gap-2 fade-in z-10">
          <CheckCircle size={16} /> Saved & Published Successfully!
        </div>
      )}

      <div className="w-full md:w-64 bg-card border border-border rounded-xl shadow-sm flex flex-col p-2 h-fit shrink-0">
        <button onClick={() => setActiveTab('results')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition mb-1", activeTab === 'results' ? 'bg-primary/10 text-primary' : 'text-text-secondary hover:bg-bg-page')}>
          <Medal size={18} /> Declare Results
        </button>
        <button onClick={() => setActiveTab('certificates')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition", activeTab === 'certificates' ? 'bg-info/10 text-info' : 'text-text-secondary hover:bg-bg-page')}>
          <Award size={18} /> Digital Certificates
        </button>
      </div>

      <div className="flex-1 bg-card border border-border rounded-xl shadow-sm p-6 overflow-y-auto">
        
        {activeTab === 'results' && (
          <div className="flex flex-col gap-6 fade-in max-w-xl mx-auto">
             <h2 className="text-xl font-bold text-text-primary border-b border-border pb-2 text-center">Post Competition Results</h2>
             
             <div className="bg-bg-page border border-border p-6 rounded-lg flex flex-col gap-4">
               <div className="flex flex-col gap-1.5">
                 <label className="text-xs font-bold text-text-secondary uppercase">Select Completed Event</label>
                 <select className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-primary font-bold">
                   <option>Inter-School Debate</option>
                   <option>Annual Sports Meet 2026 - 100m Sprint</option>
                 </select>
               </div>
               
               <div className="flex flex-col gap-3 mt-2">
                 <h3 className="font-bold text-sm text-text-secondary">Announce Winners</h3>
                 <div className="flex gap-2">
                    <span className="bg-warning-bg text-warning font-bold text-xs px-3 py-2 rounded flex items-center justify-center w-12">1st</span>
                    <input type="text" placeholder="Student ID / Name" className="flex-1 bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none focus:border-warning" />
                 </div>
                 <div className="flex gap-2">
                    <span className="bg-border text-text-secondary font-bold text-xs px-3 py-2 rounded flex items-center justify-center w-12">2nd</span>
                    <input type="text" placeholder="Student ID / Name" className="flex-1 bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none focus:border-text-secondary" />
                 </div>
                 <div className="flex gap-2">
                    <span className="bg-danger-bg/50 text-danger font-bold text-xs px-3 py-2 rounded flex items-center justify-center w-12">3rd</span>
                    <input type="text" placeholder="Student ID / Name" className="flex-1 bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none focus:border-danger" />
                 </div>
               </div>
               
               <button onClick={handleSave} className="w-full bg-primary text-white py-3 rounded-lg font-bold shadow-sm hover:bg-primary-hover transition mt-4">
                 Publish Results
               </button>
             </div>
          </div>
        )}

        {activeTab === 'certificates' && (
          <div className="flex flex-col gap-6 fade-in h-full justify-center items-center opacity-70">
             <Award size={64} className="text-info mb-4" />
             <h3 className="font-bold text-lg">Digital Certificate Generator</h3>
             <p className="text-sm font-semibold max-w-sm text-center">
               Generate and email digital PDF certificates for winners and participants.
             </p>
             <button className="bg-info text-white px-6 py-2 rounded-lg text-sm font-bold shadow-sm mt-4">
               Generate Batch Certificates
             </button>
          </div>
        )}
      </div>
    </div>
  );
}
