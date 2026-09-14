"use client";

import React, { useState } from 'react';
import { Share2, CheckSquare, MessageSquare, CheckCircle } from 'lucide-react';
import clsx from 'clsx';

export default function ComplaintResolution() {
  const [showToast, setShowToast] = useState(false);

  const handleAction = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="flex flex-col gap-6 h-full fade-in relative">
      {showToast && (
        <div className="absolute top-4 right-4 bg-success text-white px-4 py-2 rounded-lg shadow-lg font-bold text-sm flex items-center gap-2 fade-in z-10">
          <CheckCircle size={16} /> Update Saved Successfully!
        </div>
      )}

      <div className="flex-1 bg-card border border-border rounded-xl shadow-sm p-6 overflow-y-auto">
        <h2 className="text-xl font-bold text-text-primary border-b border-border pb-4 mb-6 flex items-center gap-2">
          <CheckSquare size={20} className="text-primary"/> Resolution & Assignment Desk
        </h2>
        
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Active Complaint Details */}
          <div className="w-full lg:w-3/5 flex flex-col gap-4">
             <div className="bg-bg-page border border-border p-5 rounded-lg shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-bold text-lg text-danger">GR-101: Food Quality in Canteen</h3>
                    <p className="text-xs font-semibold text-text-secondary mt-1">Reported by Students Union on 12-Oct-2025</p>
                  </div>
                  <span className="bg-danger-bg text-danger px-2 py-1 rounded text-[10px] font-bold uppercase">Unresolved</span>
                </div>
                
                <div className="bg-card border border-border p-4 rounded text-sm font-medium mb-4 italic">
                  "The food served in the canteen during lunch break yesterday was cold and tasteless. We request better quality checks."
                </div>

                <h4 className="font-bold text-sm mb-2 flex items-center gap-2"><Share2 size={16}/> Assign to Staff/Committee</h4>
                <div className="flex gap-2">
                  <select className="flex-1 bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-primary font-bold">
                    <option>Canteen Committee</option>
                    <option>Admin Head</option>
                    <option>Principal</option>
                  </select>
                  <button onClick={handleAction} className="bg-primary text-black px-4 py-2 rounded-md text-sm font-bold shadow-sm hover:bg-primary-hover transition">
                    Assign
                  </button>
                </div>
             </div>
          </div>

          {/* Resolution Panel */}
          <div className="flex-1 flex flex-col gap-4">
             <div className="bg-success-bg/20 border border-success/30 p-5 rounded-lg shadow-sm flex flex-col h-full">
                <h3 className="font-bold text-sm text-success mb-2 flex items-center gap-2"><MessageSquare size={16}/> Post Resolution</h3>
                <p className="text-xs font-semibold text-text-secondary mb-4">Once the issue is fixed, provide the resolution details and close the ticket. This will notify the reporter.</p>
                
                <textarea rows={4} className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-success resize-none mb-4" placeholder="Type resolution remarks... (e.g. Canteen vendor was warned, quality check process implemented)"></textarea>
                
                <button onClick={handleAction} className="w-full bg-success text-white py-3 rounded-lg text-sm font-bold shadow-sm hover:bg-success/90 transition mt-auto flex items-center justify-center gap-2">
                  <CheckSquare size={16}/> Mark as Resolved
                </button>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
}
