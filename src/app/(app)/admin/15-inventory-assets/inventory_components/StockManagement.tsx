"use client";

import React, { useState } from 'react';
import { ArrowDownToLine, ArrowUpFromLine, RefreshCcw, ShieldAlert, CheckCircle } from 'lucide-react';
import clsx from 'clsx';

export default function StockManagement() {
  const [activeTab, setActiveTab] = useState('in');
  const [showToast, setShowToast] = useState(false);

  const handleProcess = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 h-full min-h-[500px] fade-in relative">
      {showToast && (
        <div className="absolute top-4 right-4 bg-success text-white px-4 py-2 rounded-lg shadow-lg font-bold text-sm flex items-center gap-2 fade-in z-10">
          <CheckCircle size={16} /> Transaction Recorded Successfully!
        </div>
      )}

      <div className="w-full md:w-64 bg-card border border-border rounded-xl shadow-sm flex flex-col p-2 h-fit shrink-0">
        <button onClick={() => setActiveTab('in')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition mb-1", activeTab === 'in' ? 'bg-success/10 text-success' : 'text-text-secondary hover:bg-bg-page')}>
          <ArrowDownToLine size={18} /> Stock In (Add)
        </button>
        <button onClick={() => setActiveTab('out')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition mb-1", activeTab === 'out' ? 'bg-warning/10 text-warning' : 'text-text-secondary hover:bg-bg-page')}>
          <ArrowUpFromLine size={18} /> Stock Out (Issue)
        </button>
        <button onClick={() => setActiveTab('transfer')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition mb-1", activeTab === 'transfer' ? 'bg-info/10 text-info' : 'text-text-secondary hover:bg-bg-page')}>
          <RefreshCcw size={18} /> Stock Transfer
        </button>
        <button onClick={() => setActiveTab('damaged')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition", activeTab === 'damaged' ? 'bg-danger/10 text-danger' : 'text-text-secondary hover:bg-bg-page')}>
          <ShieldAlert size={18} /> Lost / Damaged
        </button>
      </div>

      <div className="flex-1 bg-card border border-border rounded-xl shadow-sm p-6 overflow-y-auto">
        
        {activeTab === 'in' && (
          <div className="flex flex-col gap-6 fade-in max-w-xl mx-auto">
            <h2 className="text-xl font-bold text-success border-b border-border pb-2 text-center flex items-center justify-center gap-2">
               <ArrowDownToLine size={20}/> Stock In (Receive New Items)
            </h2>
            <div className="bg-bg-page border border-border p-6 rounded-lg flex flex-col gap-4">
               <div className="flex flex-col gap-1.5">
                 <label className="text-xs font-bold text-text-secondary uppercase">Select Item</label>
                 <select className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-success font-bold">
                   <option>A4 Printing Paper (Current: 15 Reams)</option>
                   <option>Basketballs (Current: 5 Pieces)</option>
                 </select>
               </div>
               <div className="grid grid-cols-2 gap-4">
                 <div className="flex flex-col gap-1.5">
                   <label className="text-xs font-bold text-text-secondary uppercase">Quantity Added</label>
                   <input type="number" placeholder="0" className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-success font-bold" />
                 </div>
                 <div className="flex flex-col gap-1.5">
                   <label className="text-xs font-bold text-text-secondary uppercase">Date</label>
                   <input type="date" className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-success font-bold" />
                 </div>
               </div>
               <button onClick={handleProcess} className="w-full bg-success text-white py-3 rounded-lg font-bold shadow-sm hover:bg-success/90 transition mt-2">
                 Update Stock
               </button>
            </div>
          </div>
        )}

        {activeTab === 'out' && (
          <div className="flex flex-col gap-6 fade-in max-w-xl mx-auto">
            <h2 className="text-xl font-bold text-warning border-b border-border pb-2 text-center flex items-center justify-center gap-2">
               <ArrowUpFromLine size={20}/> Stock Out (Issue to Staff/Dept)
            </h2>
            <div className="bg-bg-page border border-border p-6 rounded-lg flex flex-col gap-4">
               <div className="flex flex-col gap-1.5">
                 <label className="text-xs font-bold text-text-secondary uppercase">Select Item</label>
                 <select className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-warning font-bold">
                   <option>Whiteboard Markers (Current: 45 Boxes)</option>
                 </select>
               </div>
               <div className="flex flex-col gap-1.5">
                 <label className="text-xs font-bold text-text-secondary uppercase">Issue To</label>
                 <input type="text" placeholder="Staff Name or Dept..." className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-warning font-bold" />
               </div>
               <div className="grid grid-cols-2 gap-4">
                 <div className="flex flex-col gap-1.5">
                   <label className="text-xs font-bold text-text-secondary uppercase">Quantity Issued</label>
                   <input type="number" placeholder="0" className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-warning font-bold" />
                 </div>
                 <div className="flex flex-col gap-1.5">
                   <label className="text-xs font-bold text-text-secondary uppercase">Date</label>
                   <input type="date" className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-warning font-bold" />
                 </div>
               </div>
               <button onClick={handleProcess} className="w-full bg-warning text-white py-3 rounded-lg font-bold shadow-sm hover:bg-warning/90 transition mt-2">
                 Issue Items
               </button>
            </div>
          </div>
        )}
        
        {(activeTab === 'transfer' || activeTab === 'damaged') && (
           <div className="flex flex-col items-center justify-center h-full opacity-60 fade-in gap-4 text-center">
             {activeTab === 'transfer' ? <RefreshCcw size={48} className="text-info"/> : <ShieldAlert size={48} className="text-danger"/>}
             <p className="text-sm font-semibold max-w-sm">
               {activeTab === 'transfer' 
                 ? "Transfer stock between multiple campus locations or departments." 
                 : "Deduct lost or damaged items from the main inventory counts automatically."}
             </p>
           </div>
        )}
      </div>
    </div>
  );
}
