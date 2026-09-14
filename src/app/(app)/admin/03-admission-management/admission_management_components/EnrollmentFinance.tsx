"use client";

import React, { useState } from 'react';
import { IndianRupee, Hash, CheckCircle } from 'lucide-react';
import clsx from 'clsx';

export default function EnrollmentFinance() {
  const [activeTab, setActiveTab] = useState('fee');

  return (
    <div className="flex flex-col md:flex-row gap-6 h-full min-h-[500px] fade-in">
      <div className="w-full md:w-64 bg-card border border-border rounded-xl shadow-sm flex flex-col p-2 h-fit shrink-0">
        <button onClick={() => setActiveTab('fee')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition mb-1", activeTab === 'fee' ? 'bg-primary/10 text-primary' : 'text-text-secondary hover:bg-bg-page')}>
          <IndianRupee size={18} /> Admission Fee
        </button>
        <button onClick={() => setActiveTab('numbering')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition mb-1", activeTab === 'numbering' ? 'bg-primary/10 text-primary' : 'text-text-secondary hover:bg-bg-page')}>
          <Hash size={18} /> Admission No. Gen.
        </button>
        <button onClick={() => setActiveTab('enrollment')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition", activeTab === 'enrollment' ? 'bg-primary/10 text-primary' : 'text-text-secondary hover:bg-bg-page')}>
          <CheckCircle size={18} /> Final Enrollment
        </button>
      </div>

      <div className="flex-1 bg-card border border-border rounded-xl shadow-sm p-6 overflow-y-auto">
        {activeTab === 'fee' && (
          <div className="flex flex-col gap-4 fade-in">
            <h2 className="text-xl font-bold text-text-primary border-b border-border pb-2">Admission Fee Collection</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5 md:col-span-2">
                <label className="text-sm font-semibold text-text-secondary">Select Approved Student</label>
                <select className="bg-bg-input border border-border rounded-md px-4 py-2 text-sm outline-none focus:border-primary"><option>Rohan Sharma (Approved)</option></select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-text-secondary">Fee Amount Due</label>
                <input type="text" disabled value="₹ 25,000" className="bg-bg-page border border-border rounded-md px-4 py-2 text-sm font-bold text-text-primary" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-text-secondary">Payment Method</label>
                <select className="bg-bg-input border border-border rounded-md px-4 py-2 text-sm outline-none focus:border-primary">
                  <option>Cash</option>
                  <option>Bank Transfer / NEFT</option>
                  <option>Cheque</option>
                </select>
              </div>
              <div className="md:col-span-2 flex justify-end">
                 <button className="px-6 py-2 bg-success text-white rounded-md text-sm font-bold shadow-sm">Collect Payment</button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'numbering' && (
          <div className="flex flex-col gap-4 fade-in">
            <h2 className="text-xl font-bold text-text-primary border-b border-border pb-2">Admission Number Generation</h2>
            <p className="text-sm text-text-secondary mb-2">Automatically assign the next sequential admission number to fee-paid students.</p>
            <div className="bg-bg-page border border-border p-4 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-bold text-text-primary text-sm">Rohan Sharma</h4>
                <p className="text-xs text-success font-semibold mt-1">Fee Paid ✓</p>
              </div>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <input type="text" value="10453" disabled className="w-24 bg-card border border-border rounded px-2 py-1.5 text-sm font-bold text-center" />
                <button className="px-4 py-1.5 bg-primary text-black text-sm font-bold rounded shadow-sm whitespace-nowrap">Generate & Assign</button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'enrollment' && (
          <div className="flex flex-col gap-4 fade-in items-center justify-center py-10">
            <div className="w-20 h-20 bg-success-bg text-success rounded-full flex items-center justify-center mb-4">
              <CheckCircle size={40} />
            </div>
            <h2 className="text-2xl font-bold text-text-primary text-center">Ready for Enrollment</h2>
            <p className="text-sm text-text-secondary text-center max-w-md">
              Rohan Sharma has completed all stages (Approved, Fee Paid, Admn No: 10453). Click below to permanently enroll them into the Student Database.
            </p>
            <button className="mt-4 px-8 py-3 bg-primary text-black rounded-lg font-bold shadow-md hover:bg-primary-hover transition">
              Enroll Student to Directory
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
