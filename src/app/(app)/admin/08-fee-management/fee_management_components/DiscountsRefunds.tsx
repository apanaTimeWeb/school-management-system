"use client";

import React, { useState } from 'react';
import { Gift, RotateCcw, Percent, CheckCircle } from 'lucide-react';
import clsx from 'clsx';

export default function DiscountsRefunds() {
  const [activeTab, setActiveTab] = useState('discount');
  const [showToast, setShowToast] = useState(false);

  const handleApply = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget;
    const oldText = btn.innerText;
    btn.innerText = "Processing...";
    setTimeout(() => {
      btn.innerText = oldText;
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }, 1000);
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 h-full min-h-[500px] fade-in relative">
      {showToast && (
        <div className="absolute top-4 right-4 bg-success text-white px-4 py-2 rounded-lg shadow-lg font-bold text-sm flex items-center gap-2 fade-in z-10">
          <CheckCircle size={16} /> Applied Successfully
        </div>
      )}

      <div className="w-full md:w-64 bg-card border border-border rounded-xl shadow-sm flex flex-col p-2 h-fit shrink-0">
        <button onClick={() => setActiveTab('discount')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition mb-1", activeTab === 'discount' ? 'bg-primary/10 text-primary' : 'text-text-secondary hover:bg-bg-page')}>
          <Percent size={18} /> Concessions & Discounts
        </button>
        <button onClick={() => setActiveTab('scholarship')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition mb-1", activeTab === 'scholarship' ? 'bg-info/10 text-info' : 'text-text-secondary hover:bg-bg-page')}>
          <Gift size={18} /> Scholarships
        </button>
        <button onClick={() => setActiveTab('refund')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition", activeTab === 'refund' ? 'bg-warning/10 text-warning' : 'text-text-secondary hover:bg-bg-page')}>
          <RotateCcw size={18} /> Fee Refunds
        </button>
      </div>

      <div className="flex-1 bg-card border border-border rounded-xl shadow-sm p-6 overflow-y-auto">
        
        {activeTab === 'discount' && (
          <div className="flex flex-col gap-6 fade-in">
            <h2 className="text-xl font-bold text-text-primary border-b border-border pb-2">Sibling & Staff Concessions</h2>
            
            <div className="flex flex-col gap-4 bg-bg-page border border-border p-5 rounded-lg max-w-xl">
              <h3 className="font-bold text-sm text-text-secondary uppercase">Apply Discount to Student</h3>
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-text-secondary">Search Student</label>
                  <input type="text" placeholder="Admission No. or Name..." className="bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none focus:border-primary" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-text-secondary">Discount Type</label>
                  <select className="bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none focus:border-primary">
                    <option>Sibling Concession (20% off Tuition)</option>
                    <option>Staff Child Concession (50% off Tuition)</option>
                    <option>Special Manual Discount</option>
                  </select>
                </div>
                <button onClick={handleApply} className="bg-primary text-black px-4 py-2 rounded-md text-sm font-bold shadow-sm hover:bg-primary-hover active:scale-95 transition w-[160px] mt-2 text-center">Apply Concession</button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'scholarship' && (
          <div className="flex flex-col gap-6 fade-in">
            <h2 className="text-xl font-bold text-text-primary border-b border-border pb-2">Academic & Sports Scholarships</h2>
            
            <div className="flex flex-col gap-4 bg-bg-page border border-border p-5 rounded-lg max-w-xl">
              <h3 className="font-bold text-sm text-text-secondary uppercase">Assign Scholarship</h3>
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-text-secondary">Student Name</label>
                  <input type="text" defaultValue="Aarav Patel (10452)" disabled className="bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none font-bold text-primary disabled:opacity-70" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-text-secondary">Scholarship Criteria</label>
                  <select className="bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none focus:border-primary">
                    <option>Merit Scholarship (100% Tuition Free)</option>
                    <option>Sports Quota (50% Tuition Free)</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-text-secondary">Valid For Academic Year</label>
                  <input type="text" defaultValue="2026-2027" disabled className="bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none disabled:opacity-50" />
                </div>
                <button onClick={handleApply} className="bg-success text-white px-4 py-2 rounded-md text-sm font-bold shadow-sm hover:bg-success/90 active:scale-95 transition w-[160px] mt-2">Grant Scholarship</button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'refund' && (
          <div className="flex flex-col gap-6 fade-in">
            <h2 className="text-xl font-bold text-text-primary border-b border-border pb-2">Fee Refunds & Security Deposits</h2>
            <p className="text-sm text-text-secondary mb-2">Process refunds for students withdrawing from the school or return caution deposits.</p>

            <div className="flex flex-col gap-4 bg-bg-page border border-border p-5 rounded-lg max-w-xl">
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-text-secondary">Student / Alumnus</label>
                  <input type="text" placeholder="Admission No..." className="bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none focus:border-primary" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-text-secondary">Refund Type</label>
                  <select className="bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none focus:border-primary">
                    <option>Security Deposit Return</option>
                    <option>Excess Fee Paid Refund</option>
                    <option>TC/Withdrawal Pro-rata Refund</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-text-secondary">Refund Amount (₹)</label>
                  <input type="number" placeholder="5000" className="bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none focus:border-primary" />
                </div>
                <button onClick={handleApply} className="bg-warning text-white px-4 py-2 rounded-md text-sm font-bold shadow-sm hover:bg-warning/90 active:scale-95 transition w-[160px] mt-2">Process Refund</button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
