"use client";

import React, { useState } from 'react';
import { IndianRupee, Save, CheckCircle } from 'lucide-react';

export default function TransportFee() {
  const [fees, setFees] = useState([
    { id: 1, range: '0 - 5 km', amount: 1500 },
    { id: 2, range: '5 - 10 km', amount: 2500 },
    { id: 3, range: '10 - 20 km', amount: 3500 },
  ]);
  const [showToast, setShowToast] = useState(false);

  const handleSave = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="flex flex-col gap-6 h-full fade-in relative">
      {showToast && (
        <div className="absolute top-4 right-4 bg-success text-white px-4 py-2 rounded-lg shadow-lg font-bold text-sm flex items-center gap-2 fade-in z-10">
          <CheckCircle size={16} /> Fee Slabs Updated!
        </div>
      )}

      <div className="flex-1 bg-card border border-border rounded-xl shadow-sm p-6 overflow-y-auto">
        <h2 className="text-xl font-bold text-text-primary border-b border-border pb-4 mb-6 flex items-center gap-2">
          <IndianRupee size={20} className="text-success"/> Transport Fee Slabs (Distance Based)
        </h2>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 bg-bg-page border border-border rounded-lg p-5">
            <h3 className="font-bold text-sm mb-4">Current Slabs</h3>
            <div className="flex flex-col gap-3">
              {fees.map(f => (
                <div key={f.id} className="flex justify-between items-center bg-card border border-border p-3 rounded-lg shadow-sm">
                  <span className="font-semibold text-sm text-text-secondary">{f.range}</span>
                  <div className="flex items-center gap-1 font-black text-primary">
                    <IndianRupee size={14}/> {f.amount} / month
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/3 flex flex-col gap-4">
             <div className="bg-card border border-border p-5 rounded-lg shadow-sm flex flex-col gap-4">
               <h3 className="font-bold text-sm">Add / Update Slab</h3>
               <div className="flex flex-col gap-1.5">
                 <label className="text-xs font-semibold text-text-secondary">Distance Range</label>
                 <input type="text" placeholder="e.g. 20 - 30 km" className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-primary" />
               </div>
               <div className="flex flex-col gap-1.5">
                 <label className="text-xs font-semibold text-text-secondary">Monthly Amount (₹)</label>
                 <input type="number" placeholder="4500" className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-primary" />
               </div>
               <button onClick={handleSave} className="bg-success text-white px-4 py-2 mt-2 rounded-md text-sm font-bold shadow-sm hover:bg-success/90 transition flex items-center justify-center gap-2">
                 <Save size={16}/> Save Slab
               </button>
             </div>
             
             <p className="text-xs text-text-secondary font-medium p-3 bg-bg-page rounded-lg border border-border">
               Note: Once allocated to a student, the transport fee will automatically link to their master fee structure for invoicing.
             </p>
          </div>
        </div>
      </div>
    </div>
  );
}
