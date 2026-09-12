"use client";

import React, { useState } from 'react';
import { PackageOpen, Store, Receipt, Banknote, CheckCircle } from 'lucide-react';
import clsx from 'clsx';

export default function PurchaseEntry() {
  const [activeTab, setActiveTab] = useState('entry');
  const [showToast, setShowToast] = useState(false);

  const handleAction = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 h-full min-h-[500px] fade-in relative">
      {showToast && (
        <div className="absolute top-4 right-4 bg-success text-white px-4 py-2 rounded-lg shadow-lg font-bold text-sm flex items-center gap-2 fade-in z-10">
          <CheckCircle size={16} /> Saved Successfully!
        </div>
      )}

      <div className="w-full md:w-64 bg-card border border-border rounded-xl shadow-sm flex flex-col p-2 h-fit shrink-0">
        <button onClick={() => setActiveTab('entry')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition mb-1", activeTab === 'entry' ? 'bg-primary/10 text-primary' : 'text-text-secondary hover:bg-bg-page')}>
          <PackageOpen size={18} /> Goods Receipt / Entry
        </button>
        <button onClick={() => setActiveTab('bills')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition mb-1", activeTab === 'bills' ? 'bg-info/10 text-info' : 'text-text-secondary hover:bg-bg-page')}>
          <Receipt size={18} /> Vendor Bills
        </button>
        <button onClick={() => setActiveTab('payment')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition", activeTab === 'payment' ? 'bg-success/10 text-success' : 'text-text-secondary hover:bg-bg-page')}>
          <Banknote size={18} /> Payment Status
        </button>
      </div>

      <div className="flex-1 bg-card border border-border rounded-xl shadow-sm p-6 overflow-y-auto">
        
        {activeTab === 'entry' && (
          <div className="flex flex-col gap-6 fade-in">
             <h2 className="text-xl font-bold text-text-primary border-b border-border pb-2">Purchase Entry (Goods Received)</h2>
             
             <div className="bg-bg-page border border-border p-5 rounded-lg flex flex-col gap-4 max-w-xl">
               <div className="flex flex-col gap-1.5">
                 <label className="text-xs font-bold text-text-secondary uppercase">Link to Purchase Order (Optional)</label>
                 <select className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-primary font-bold">
                   <option>PO-2026-042 (Laptops from Tech Solutions)</option>
                   <option>Direct Purchase (No PO)</option>
                 </select>
               </div>
               
               <div className="flex flex-col gap-1.5">
                 <label className="text-xs font-bold text-text-secondary uppercase">Select Vendor</label>
                 <select className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-primary font-bold">
                   <option>Tech Solutions</option>
                 </select>
               </div>
               
               <div className="grid grid-cols-2 gap-4">
                 <div className="flex flex-col gap-1.5">
                   <label className="text-xs font-bold text-text-secondary uppercase">Invoice / Bill No.</label>
                   <input type="text" placeholder="INV-001" className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-primary font-bold" />
                 </div>
                 <div className="flex flex-col gap-1.5">
                   <label className="text-xs font-bold text-text-secondary uppercase">Total Amount</label>
                   <input type="number" placeholder="₹ 0.00" className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-primary font-bold" />
                 </div>
               </div>
               
               <button onClick={handleAction} className="w-full bg-primary text-white py-3 rounded-lg font-bold shadow-sm hover:bg-primary-hover transition mt-2">
                 Save Purchase Entry & Add to Inventory
               </button>
             </div>
          </div>
        )}

        {activeTab === 'bills' && (
          <div className="flex flex-col gap-4 fade-in">
             <h2 className="text-xl font-bold text-info border-b border-info/30 pb-2">Vendor Bills Register</h2>
             
             <div className="border border-border rounded-lg overflow-hidden mt-2">
               <table className="w-full text-left">
                 <thead className="bg-bg-page text-xs text-text-secondary">
                   <tr>
                     <th className="p-3 font-bold border-b border-border">Invoice #</th>
                     <th className="p-3 font-bold border-b border-border">Vendor</th>
                     <th className="p-3 font-bold border-b border-border">Amount</th>
                     <th className="p-3 font-bold border-b border-border text-right">Action</th>
                   </tr>
                 </thead>
                 <tbody className="text-sm font-semibold">
                   <tr>
                     <td className="p-3 border-b border-border text-info">INV-001</td>
                     <td className="p-3 border-b border-border">Tech Solutions</td>
                     <td className="p-3 border-b border-border">₹ 1,10,000</td>
                     <td className="p-3 border-b border-border text-right">
                        <button className="bg-card border border-border px-3 py-1 rounded text-xs hover:border-info">View Bill PDF</button>
                     </td>
                   </tr>
                 </tbody>
               </table>
             </div>
          </div>
        )}

        {activeTab === 'payment' && (
          <div className="flex flex-col gap-4 fade-in">
             <h2 className="text-xl font-bold text-success border-b border-success/30 pb-2">Payment Status tracker</h2>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
               <div className="bg-card border border-border p-5 rounded-lg shadow-sm">
                 <div className="flex justify-between items-start mb-4">
                   <div>
                     <h4 className="font-bold text-sm">Tech Solutions (INV-001)</h4>
                     <p className="text-xs text-text-secondary font-semibold mt-1">Total: ₹ 1,10,000</p>
                   </div>
                   <span className="bg-warning-bg text-warning px-2 py-1 rounded text-[10px] font-bold uppercase">Pending</span>
                 </div>
                 
                 <div className="flex gap-2">
                   <input type="text" placeholder="Transaction ID..." className="flex-1 bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none" />
                   <button onClick={handleAction} className="bg-success text-white px-3 py-1.5 rounded font-bold text-xs hover:bg-success/90">Mark Paid</button>
                 </div>
               </div>
             </div>
          </div>
        )}

      </div>
    </div>
  );
}
