"use client";

import React, { useState } from 'react';
import { IndianRupee, CreditCard, Save, CheckCircle } from 'lucide-react';

export default function FinanceConfig() {
  const [showToast, setShowToast] = useState(false);

  const handleSave = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="flex flex-col gap-6 h-full fade-in relative">
      {showToast && (
        <div className="absolute top-4 right-4 bg-success text-white px-4 py-2 rounded-lg shadow-lg font-bold text-sm flex items-center gap-2 fade-in z-10">
          <CheckCircle size={16} /> Finance Rules Saved!
        </div>
      )}

      <div className="flex-1 bg-card border border-border rounded-xl shadow-sm p-6 overflow-y-auto">
        <h2 className="text-xl font-bold text-success border-b border-success/30 pb-4 mb-6 flex items-center gap-2">
          <IndianRupee size={20}/> Finance & Fee Rules
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           
           <div className="flex flex-col gap-6">
              <div className="bg-bg-page border border-border p-5 rounded-lg flex flex-col gap-4 shadow-sm">
                 <h3 className="font-bold text-sm border-b border-border pb-2 text-text-primary">Late Fee & Fines Configuration</h3>
                 
                 <div className="flex items-center gap-2 bg-card border border-border p-3 rounded">
                    <input type="checkbox" id="applyFine" className="accent-success w-4 h-4" defaultChecked/>
                    <label htmlFor="applyFine" className="text-sm font-bold text-text-primary">Apply Automatic Late Fee</label>
                 </div>

                 <div className="flex flex-col gap-1.5">
                   <label className="text-xs font-bold text-text-secondary uppercase">Late Fee Amount (₹)</label>
                   <input type="number" defaultValue="50" className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-success font-bold" />
                 </div>
                 
                 <div className="flex flex-col gap-1.5">
                   <label className="text-xs font-bold text-text-secondary uppercase">Fine Calculation Frequency</label>
                   <select className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-success font-bold">
                     <option>Per Day after due date</option>
                     <option>Per Week after due date</option>
                     <option>Fixed Amount (One-time)</option>
                   </select>
                 </div>
              </div>
           </div>

           <div className="flex flex-col gap-6">
              <div className="bg-bg-page border border-border p-5 rounded-lg flex flex-col gap-4 shadow-sm h-full">
                 <h3 className="font-bold text-sm border-b border-border pb-2 text-text-primary flex items-center gap-2"><CreditCard size={16}/> Payment Gateway Keys</h3>
                 <p className="text-[10px] font-semibold text-text-secondary mb-2">Configure API keys for online fee collection via Parent Portal.</p>
                 
                 <div className="flex flex-col gap-1.5">
                   <label className="text-xs font-bold text-text-secondary uppercase">Gateway Provider</label>
                   <select className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-success font-bold">
                     <option>Razorpay (India)</option>
                     <option>Paytm</option>
                     <option>Stripe (Global)</option>
                   </select>
                 </div>
                 
                 <div className="flex flex-col gap-1.5">
                   <label className="text-xs font-bold text-text-secondary uppercase">API Key ID</label>
                   <input type="password" defaultValue="rzp_live_abc123" className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-success font-mono" />
                 </div>
                 
                 <div className="flex flex-col gap-1.5">
                   <label className="text-xs font-bold text-text-secondary uppercase">API Key Secret</label>
                   <input type="password" defaultValue="**************" className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-success font-mono" />
                 </div>
                 
                 <button onClick={handleSave} className="w-full bg-success text-white py-3 rounded-lg text-sm font-bold shadow-sm hover:bg-success/90 transition flex items-center justify-center gap-2 mt-auto">
                   <Save size={16}/> Save Finance Settings
                 </button>
              </div>
           </div>

        </div>

      </div>
    </div>
  );
}
