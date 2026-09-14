"use client";

import React, { useState } from 'react';
import { ShoppingCart, FileText, CheckSquare, Send, CheckCircle } from 'lucide-react';
import clsx from 'clsx';

export default function ProcurementCycle() {
  const [activeTab, setActiveTab] = useState('request');
  const [showToast, setShowToast] = useState(false);
  const [requests, setRequests] = useState([
    { id: 'PR-2026-001', dept: 'Science Lab', items: 'Microscopes (5)', status: 'Pending Approval' },
    { id: 'PR-2026-002', dept: 'IT Dept', items: 'Laptops (2)', status: 'Quotation Received' },
  ]);

  const handleAction = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 h-full min-h-[500px] fade-in relative">
      {showToast && (
        <div className="absolute top-4 right-4 bg-success text-white px-4 py-2 rounded-lg shadow-lg font-bold text-sm flex items-center gap-2 fade-in z-10">
          <CheckCircle size={16} /> Action Processed Successfully!
        </div>
      )}

      <div className="w-full md:w-64 bg-card border border-border rounded-xl shadow-sm flex flex-col p-2 h-fit shrink-0">
        <button onClick={() => setActiveTab('request')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition mb-1", activeTab === 'request' ? 'bg-primary/10 text-primary' : 'text-text-secondary hover:bg-bg-page')}>
          <ShoppingCart size={18} /> Purchase Requests
        </button>
        <button onClick={() => setActiveTab('quotation')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition mb-1", activeTab === 'quotation' ? 'bg-info/10 text-info' : 'text-text-secondary hover:bg-bg-page')}>
          <FileText size={18} /> Quotations
        </button>
        <button onClick={() => setActiveTab('approval')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition mb-1", activeTab === 'approval' ? 'bg-warning/10 text-warning' : 'text-text-secondary hover:bg-bg-page')}>
          <CheckSquare size={18} /> Approvals
        </button>
        <button onClick={() => setActiveTab('order')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition", activeTab === 'order' ? 'bg-success/10 text-success' : 'text-text-secondary hover:bg-bg-page')}>
          <Send size={18} /> Purchase Orders (PO)
        </button>
      </div>

      <div className="flex-1 bg-card border border-border rounded-xl shadow-sm p-6 overflow-y-auto">
        
        {activeTab === 'request' && (
          <div className="flex flex-col gap-6 fade-in">
            <h2 className="text-xl font-bold text-text-primary border-b border-border pb-2">Purchase Requests</h2>
            
            <div className="bg-bg-page border border-border p-4 rounded-lg flex flex-wrap gap-4 items-end max-w-2xl">
               <div className="flex flex-col gap-1.5 flex-1 min-w-[150px]">
                 <label className="text-xs font-semibold text-text-secondary">Department</label>
                 <select className="bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none focus:border-primary">
                   <option>Library</option>
                   <option>Sports</option>
                 </select>
               </div>
               <div className="flex flex-col gap-1.5 flex-1 min-w-[200px]">
                 <label className="text-xs font-semibold text-text-secondary">Items Needed</label>
                 <input type="text" placeholder="e.g. 10x Footballs" className="bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none focus:border-primary" />
               </div>
               <button onClick={handleAction} className="bg-primary text-black px-4 py-1.5 h-[34px] rounded-md text-sm font-bold shadow-sm hover:bg-primary-hover transition flex items-center gap-2">
                 Submit Request
               </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              {requests.map(r => (
                <div key={r.id} className="bg-card border border-border p-4 rounded-lg shadow-sm flex flex-col gap-2">
                   <div className="flex justify-between items-center">
                     <span className="text-xs font-black text-text-secondary">{r.id}</span>
                     <span className={clsx("text-[10px] font-bold px-2 py-0.5 rounded", r.status.includes('Pending') ? "bg-warning-bg text-warning" : "bg-info-bg text-info")}>{r.status}</span>
                   </div>
                   <h3 className="font-bold text-sm text-text-primary">{r.items}</h3>
                   <p className="text-xs text-text-secondary font-semibold">Requested by: {r.dept}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'quotation' && (
          <div className="flex flex-col gap-6 fade-in max-w-2xl mx-auto">
             <h2 className="text-xl font-bold text-info border-b border-info/30 pb-2 text-center flex items-center justify-center gap-2">
               <FileText size={20}/> Compare Quotations
             </h2>
             <div className="bg-bg-page border border-border p-6 rounded-lg flex flex-col gap-4">
               <p className="text-xs font-semibold text-text-secondary text-center mb-2">Upload and compare vendor quotations for PR-2026-002 (Laptops)</p>
               
               <div className="flex justify-between items-center border border-info/50 bg-info-bg/30 p-3 rounded-lg cursor-pointer hover:border-info transition">
                  <div>
                    <h4 className="font-bold text-sm">Vendor A: Tech Solutions</h4>
                    <p className="text-xs font-semibold mt-1">₹ 1,10,000 (Incl. Taxes)</p>
                  </div>
                  <button className="bg-info text-white px-3 py-1 rounded text-xs font-bold">Select</button>
               </div>
               <div className="flex justify-between items-center border border-border bg-card p-3 rounded-lg cursor-pointer hover:border-info transition">
                  <div>
                    <h4 className="font-bold text-sm">Vendor B: Electro World</h4>
                    <p className="text-xs font-semibold mt-1">₹ 1,15,500 (Incl. Taxes)</p>
                  </div>
                  <button className="bg-bg-page border border-border px-3 py-1 rounded text-xs font-bold">Select</button>
               </div>
             </div>
          </div>
        )}

        {activeTab === 'approval' && (
          <div className="flex flex-col gap-6 fade-in max-w-xl mx-auto">
             <h2 className="text-xl font-bold text-warning border-b border-warning/30 pb-2 text-center flex items-center justify-center gap-2">
               <CheckSquare size={20}/> Management Approvals
             </h2>
             <div className="bg-warning-bg/20 border border-warning/30 p-6 rounded-lg flex flex-col gap-4 text-center">
                <h3 className="font-bold">Approve PR-2026-002</h3>
                <p className="text-sm font-semibold">Vendor A selected. Total Cost: ₹ 1,10,000.</p>
                <div className="flex gap-4 justify-center mt-4">
                  <button onClick={handleAction} className="bg-success text-white px-6 py-2 rounded-lg font-bold shadow-sm hover:bg-success/90">Approve</button>
                  <button onClick={handleAction} className="bg-danger text-white px-6 py-2 rounded-lg font-bold shadow-sm hover:bg-danger/90">Reject</button>
                </div>
             </div>
          </div>
        )}

        {activeTab === 'order' && (
          <div className="flex flex-col gap-6 fade-in h-full justify-center items-center opacity-60">
            <Send size={48} className="text-success mb-2" />
            <p className="text-sm font-bold text-text-secondary max-w-sm text-center">Approved requests will automatically generate a Purchase Order (PO) PDF that can be emailed directly to the vendor.</p>
          </div>
        )}

      </div>
    </div>
  );
}
