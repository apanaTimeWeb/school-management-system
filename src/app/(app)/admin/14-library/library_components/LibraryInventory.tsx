"use client";

import React, { useState } from 'react';
import { AlertTriangle, BarChart2, PieChart, Activity } from 'lucide-react';
import clsx from 'clsx';

export default function LibraryInventory() {
  const [activeTab, setActiveTab] = useState('lost');

  return (
    <div className="flex flex-col md:flex-row gap-6 h-full min-h-[500px] fade-in relative">
      <div className="w-full md:w-64 bg-card border border-border rounded-xl shadow-sm flex flex-col p-2 h-fit shrink-0">
        <button onClick={() => setActiveTab('lost')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition mb-1", activeTab === 'lost' ? 'bg-danger/10 text-danger' : 'text-text-secondary hover:bg-bg-page')}>
          <AlertTriangle size={18} /> Lost / Damaged
        </button>
        <button onClick={() => setActiveTab('reports')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition", activeTab === 'reports' ? 'bg-primary/10 text-primary' : 'text-text-secondary hover:bg-bg-page')}>
          <BarChart2 size={18} /> Library Reports
        </button>
      </div>

      <div className="flex-1 bg-card border border-border rounded-xl shadow-sm p-6 overflow-y-auto">
        
        {activeTab === 'lost' && (
          <div className="flex flex-col gap-6 fade-in">
            <h2 className="text-xl font-bold text-text-primary border-b border-border pb-2 flex items-center gap-2">
              <AlertTriangle className="text-danger"/> Mark Lost or Damaged
            </h2>
            
            <div className="bg-danger-bg/30 border border-danger/30 p-5 rounded-lg flex flex-col gap-4 max-w-xl">
               <p className="text-xs text-danger font-semibold">Marking a book as lost/damaged will remove it from the available circulation count and can automatically apply a fine to the last borrower.</p>
               
               <div className="flex flex-col gap-1.5">
                 <label className="text-xs font-bold text-text-secondary uppercase">Book Barcode</label>
                 <input type="text" placeholder="Scan Barcode..." className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-danger font-bold" />
               </div>
               
               <div className="flex flex-col gap-1.5">
                 <label className="text-xs font-bold text-text-secondary uppercase">Status</label>
                 <select className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-danger font-bold">
                   <option>Lost by Member</option>
                   <option>Damaged (Needs Repair)</option>
                   <option>Lost (Inventory Audit)</option>
                 </select>
               </div>
               
               <button className="bg-danger text-white py-2 rounded-lg font-bold text-sm shadow-sm hover:bg-danger/90 transition mt-2">
                 Update Inventory Status
               </button>
            </div>
          </div>
        )}

        {activeTab === 'reports' && (
          <div className="flex flex-col gap-6 fade-in">
            <h2 className="text-xl font-bold text-text-primary border-b border-border pb-2">Library Analytics Dashboard</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="bg-bg-page border border-border p-4 rounded-lg flex flex-col items-center text-center">
                <span className="text-xs font-bold text-text-secondary uppercase">Total Books in Catalog</span>
                <span className="text-3xl font-black text-primary mt-2">1,245</span>
              </div>
              <div className="bg-bg-page border border-border p-4 rounded-lg flex flex-col items-center text-center">
                <span className="text-xs font-bold text-text-secondary uppercase">Currently Issued</span>
                <span className="text-3xl font-black text-info mt-2">184</span>
              </div>
              <div className="bg-bg-page border border-border p-4 rounded-lg flex flex-col items-center text-center">
                <span className="text-xs font-bold text-text-secondary uppercase">Overdue Returns</span>
                <span className="text-3xl font-black text-danger mt-2">12</span>
              </div>
            </div>

            <div className="flex gap-4">
               <button className="flex-1 bg-card border border-border p-4 rounded-lg font-bold text-sm hover:border-primary transition flex items-center justify-center gap-2">
                 <Activity size={18}/> Generate Circulation Report
               </button>
               <button className="flex-1 bg-card border border-border p-4 rounded-lg font-bold text-sm hover:border-primary transition flex items-center justify-center gap-2">
                 <PieChart size={18}/> Generate Inventory Audit
               </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
