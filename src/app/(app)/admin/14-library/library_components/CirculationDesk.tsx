"use client";

import React, { useState } from 'react';
import { ArrowRightLeft, Search, ScanLine, AlertTriangle, IndianRupee, CheckCircle } from 'lucide-react';
import clsx from 'clsx';

export default function CirculationDesk() {
  const [activeTab, setActiveTab] = useState('issue');
  const [barcode, setBarcode] = useState('');
  const [memberId, setMemberId] = useState('');
  const [showToast, setShowToast] = useState(false);

  const handleAction = () => {
    if(!barcode) return;
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
    setBarcode('');
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 h-full min-h-[500px] fade-in relative">
      {showToast && (
        <div className="absolute top-4 right-4 bg-success text-white px-4 py-2 rounded-lg shadow-lg font-bold text-sm flex items-center gap-2 fade-in z-10">
          <CheckCircle size={16} /> Transaction Completed!
        </div>
      )}

      <div className="w-full md:w-64 bg-card border border-border rounded-xl shadow-sm flex flex-col p-2 h-fit shrink-0">
        <button onClick={() => setActiveTab('issue')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition mb-1", activeTab === 'issue' ? 'bg-primary/10 text-primary' : 'text-text-secondary hover:bg-bg-page')}>
          <ArrowRightLeft size={18} /> Issue Book
        </button>
        <button onClick={() => setActiveTab('return')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition mb-1", activeTab === 'return' ? 'bg-success/10 text-success' : 'text-text-secondary hover:bg-bg-page')}>
          <ArrowRightLeft size={18} className="rotate-180" /> Return / Renew
        </button>
        <button onClick={() => setActiveTab('fine')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition", activeTab === 'fine' ? 'bg-danger/10 text-danger' : 'text-text-secondary hover:bg-bg-page')}>
          <IndianRupee size={18} /> Fine Collection
        </button>
      </div>

      <div className="flex-1 bg-card border border-border rounded-xl shadow-sm p-6 overflow-y-auto">
        
        {activeTab === 'issue' && (
          <div className="flex flex-col gap-6 fade-in max-w-2xl mx-auto">
            <h2 className="text-xl font-bold text-text-primary border-b border-border pb-2 text-center">Issue Book (Check-out)</h2>
            
            <div className="flex flex-col gap-6 bg-bg-page border border-border p-6 rounded-lg">
               
               <div className="flex flex-col gap-1.5 relative">
                 <label className="text-xs font-bold text-text-secondary uppercase">1. Scan Member ID Card</label>
                 <div className="relative">
                   <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary"/>
                   <input type="text" value={memberId} onChange={(e)=>setMemberId(e.target.value)} placeholder="Member ID..." className="w-full bg-bg-input border border-border rounded-md pl-9 pr-3 py-3 text-sm outline-none focus:border-primary font-bold" />
                 </div>
               </div>

               {memberId && (
                 <div className="bg-success-bg/30 border border-success/30 p-3 rounded-lg flex items-center gap-4 fade-in">
                   <div className="w-10 h-10 bg-success/20 text-success rounded-full flex items-center justify-center font-bold">A</div>
                   <div>
                     <h4 className="font-bold text-sm">Aarav Sharma</h4>
                     <p className="text-xs text-text-secondary font-semibold">Class 10-A • Max Quota: 2 Books</p>
                   </div>
                 </div>
               )}

               <div className="flex flex-col gap-1.5 relative">
                 <label className="text-xs font-bold text-text-secondary uppercase">2. Scan Book Barcode</label>
                 <div className="relative">
                   <ScanLine size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary"/>
                   <input type="text" value={barcode} onChange={(e)=>setBarcode(e.target.value)} placeholder="Book Barcode..." className="w-full bg-bg-input border border-border rounded-md pl-9 pr-3 py-3 text-sm outline-none focus:border-primary font-bold" />
                 </div>
               </div>

               <button onClick={handleAction} disabled={!barcode || !memberId} className="w-full bg-primary text-black py-3 rounded-lg font-bold shadow-sm hover:bg-primary-hover active:scale-95 transition disabled:opacity-50">
                 Confirm Issue
               </button>
            </div>
          </div>
        )}

        {activeTab === 'return' && (
          <div className="flex flex-col gap-6 fade-in max-w-2xl mx-auto">
            <h2 className="text-xl font-bold text-text-primary border-b border-border pb-2 text-center">Return / Renew (Check-in)</h2>
            
            <div className="flex flex-col gap-6 bg-bg-page border border-border p-6 rounded-lg">
               <div className="flex flex-col gap-1.5 relative">
                 <label className="text-xs font-bold text-text-secondary uppercase">Scan Book Barcode</label>
                 <div className="relative">
                   <ScanLine size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary"/>
                   <input type="text" value={barcode} onChange={(e)=>setBarcode(e.target.value)} placeholder="Book Barcode..." className="w-full bg-bg-input border border-border rounded-md pl-9 pr-3 py-3 text-sm outline-none focus:border-primary font-bold" />
                 </div>
               </div>

               {barcode && (
                 <div className="bg-card border border-border p-4 rounded-lg flex flex-col gap-3 fade-in shadow-sm">
                   <div className="flex justify-between items-start">
                     <div>
                       <h4 className="font-bold text-sm">Advanced Physics (B-00101)</h4>
                       <p className="text-xs text-text-secondary font-semibold mt-1">Issued to: Aarav Sharma (10-A)</p>
                     </div>
                     <span className="bg-danger-bg text-danger px-2 py-1 rounded text-[10px] font-bold uppercase flex items-center gap-1">
                       <AlertTriangle size={12}/> Overdue by 2 Days
                     </span>
                   </div>
                   
                   <div className="flex gap-2 mt-2 pt-3 border-t border-border">
                     <button onClick={handleAction} className="flex-1 bg-success text-white py-2 rounded font-bold text-xs shadow-sm hover:bg-success/90 transition">
                       Process Return
                     </button>
                     <button onClick={handleAction} className="flex-1 bg-info text-white py-2 rounded font-bold text-xs shadow-sm hover:bg-info/90 transition">
                       Renew Book
                     </button>
                   </div>
                 </div>
               )}
            </div>
          </div>
        )}

        {activeTab === 'fine' && (
          <div className="flex flex-col items-center justify-center h-full opacity-60 fade-in gap-4 text-center">
             <IndianRupee size={64} className="text-text-secondary"/>
             <h3 className="font-bold text-lg">Fine Collection Module</h3>
             <p className="text-sm font-semibold max-w-sm">Automatically calculates fines for overdue books based on library rules (e.g., ₹5 per day). Collect fines at the time of return.</p>
          </div>
        )}

      </div>
    </div>
  );
}
