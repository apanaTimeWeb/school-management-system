"use client";

import React, { useState } from 'react';
import { IndianRupee, Layers, Plus, Save } from 'lucide-react';

export default function ExpenseManagement() {
  const [showToast, setShowToast] = useState(false);

  const handleSave = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="flex flex-col gap-6 h-full fade-in relative">
      {showToast && (
        <div className="absolute top-4 right-4 bg-success text-white px-4 py-2 rounded-lg shadow-lg font-bold text-sm flex items-center gap-2 fade-in z-10">
          Expense Recorded Successfully!
        </div>
      )}

      <div className="flex-1 bg-card border border-border rounded-xl shadow-sm p-6 overflow-y-auto">
        <h2 className="text-xl font-bold text-text-primary border-b border-border pb-4 mb-6 flex items-center gap-2">
          <IndianRupee size={20} className="text-primary"/> Daily Expense & Petty Cash Management
        </h2>
        
        <div className="flex flex-col lg:flex-row gap-8">
          
          <div className="w-full lg:w-1/2 bg-bg-page border border-border rounded-lg p-5 flex flex-col gap-4">
             <h3 className="font-bold text-sm flex items-center gap-2">
               <Plus size={16} className="text-primary"/> Record New Expense
             </h3>
             
             <div className="grid grid-cols-2 gap-4">
               <div className="flex flex-col gap-1.5">
                 <label className="text-xs font-semibold text-text-secondary">Expense Category</label>
                 <select className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-primary">
                   <option>Office Refreshments</option>
                   <option>Travel / Fuel</option>
                   <option>Stationery (Minor)</option>
                   <option>Repairs & Maintenance</option>
                 </select>
               </div>
               <div className="flex flex-col gap-1.5">
                 <label className="text-xs font-semibold text-text-secondary">Amount (₹)</label>
                 <input type="number" placeholder="500" className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-primary" />
               </div>
             </div>

             <div className="flex flex-col gap-1.5">
               <label className="text-xs font-semibold text-text-secondary">Description / Particulars</label>
               <input type="text" placeholder="Tea and snacks for guest meeting" className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-primary" />
             </div>

             <div className="flex flex-col gap-1.5">
               <label className="text-xs font-semibold text-text-secondary">Payment Method</label>
               <div className="flex gap-4 mt-1">
                  <label className="flex items-center gap-2 text-sm font-semibold cursor-pointer">
                    <input type="radio" name="payMethod" defaultChecked className="accent-primary w-4 h-4" /> Cash
                  </label>
                  <label className="flex items-center gap-2 text-sm font-semibold cursor-pointer">
                    <input type="radio" name="payMethod" className="accent-primary w-4 h-4" /> UPI / Bank
                  </label>
               </div>
             </div>
             
             <button onClick={handleSave} className="bg-primary text-black px-4 py-2.5 rounded-lg text-sm font-bold shadow-sm hover:bg-primary-hover active:scale-95 transition flex items-center justify-center gap-2 mt-2">
               <Save size={16}/> Record Expense
             </button>
          </div>

          <div className="flex-1 flex flex-col gap-4">
            <h3 className="font-bold text-sm text-text-primary flex items-center gap-2">
               <Layers size={16}/> Expense Categories Master
            </h3>
            
            <div className="grid grid-cols-2 gap-3">
               {['Office Refreshments', 'Travel / Fuel', 'Stationery (Minor)', 'Repairs & Maintenance', 'Cleaning Supplies'].map((cat, i) => (
                 <div key={i} className="bg-card border border-border p-3 rounded-lg shadow-sm text-sm font-semibold flex items-center justify-between group cursor-default">
                    {cat}
                    <span className="text-[10px] text-primary opacity-0 group-hover:opacity-100 transition cursor-pointer">Edit</span>
                 </div>
               ))}
               <div className="bg-bg-page border border-border border-dashed p-3 rounded-lg text-sm font-bold text-text-secondary flex items-center justify-center cursor-pointer hover:text-primary transition">
                 + Add Category
               </div>
            </div>
            
            <div className="mt-4 bg-warning-bg/30 border border-warning/30 p-4 rounded-lg">
               <h4 className="font-bold text-warning text-sm">Petty Cash Balance</h4>
               <p className="text-2xl font-black text-warning mt-1">₹ 4,500</p>
               <p className="text-[10px] font-semibold text-text-secondary mt-1">Last replenished: 2 days ago</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
