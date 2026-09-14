"use client";

import React, { useState } from 'react';
import { History, Activity } from 'lucide-react';
import clsx from 'clsx';

export default function LeaveHistoryBalance() {
  const [activeTab, setActiveTab] = useState('balance');

  return (
    <div className="flex flex-col md:flex-row gap-6 h-full min-h-[500px] fade-in relative">
      <div className="w-full md:w-64 bg-card border border-border rounded-xl shadow-sm flex flex-col p-2 h-fit shrink-0">
        <button onClick={() => setActiveTab('balance')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition mb-1", activeTab === 'balance' ? 'bg-primary/10 text-primary' : 'text-text-secondary hover:bg-bg-page')}>
          <Activity size={18} /> Leave Balance (Staff)
        </button>
        <button onClick={() => setActiveTab('history')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition", activeTab === 'history' ? 'bg-info/10 text-info' : 'text-text-secondary hover:bg-bg-page')}>
          <History size={18} /> Global Leave History
        </button>
      </div>

      <div className="flex-1 bg-card border border-border rounded-xl shadow-sm p-6 overflow-y-auto">
        
        {activeTab === 'balance' && (
          <div className="flex flex-col gap-6 fade-in">
            <h2 className="text-xl font-bold text-text-primary border-b border-border pb-2">Staff Leave Balance Tracking</h2>
            
            <div className="flex gap-4 items-end bg-bg-page border border-border p-4 rounded-lg">
              <div className="flex flex-col gap-1.5 flex-1">
                <label className="text-xs font-semibold text-text-secondary">Search Employee</label>
                <input type="text" placeholder="Emp ID or Name..." className="bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none focus:border-primary" />
              </div>
              <button className="bg-primary text-black px-6 py-1.5 h-[34px] rounded-md text-sm font-bold shadow-sm hover:bg-primary-hover active:scale-95 transition">Search</button>
            </div>

            <div className="bg-card border border-border rounded-lg p-5 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-primary text-black rounded-full flex items-center justify-center font-bold text-2xl">J</div>
                <div>
                  <h3 className="font-bold text-lg text-text-primary">John Doe</h3>
                  <p className="text-xs text-text-secondary font-semibold">EMP001 • Science Dept • Senior Teacher</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-success-bg/30 border border-success/20 p-4 rounded-lg flex flex-col items-center">
                  <span className="text-xs font-bold text-text-secondary uppercase">Sick Leave (SL)</span>
                  <div className="mt-2 text-3xl font-black text-success">8 <span className="text-sm font-medium text-text-secondary">/ 12</span></div>
                  <span className="text-[10px] mt-1 font-bold text-text-secondary">4 Used</span>
                </div>
                <div className="bg-info-bg/30 border border-info/20 p-4 rounded-lg flex flex-col items-center">
                  <span className="text-xs font-bold text-text-secondary uppercase">Casual Leave (CL)</span>
                  <div className="mt-2 text-3xl font-black text-info">9 <span className="text-sm font-medium text-text-secondary">/ 10</span></div>
                  <span className="text-[10px] mt-1 font-bold text-text-secondary">1 Used</span>
                </div>
                <div className="bg-warning-bg/30 border border-warning/20 p-4 rounded-lg flex flex-col items-center">
                  <span className="text-xs font-bold text-text-secondary uppercase">Leave W/O Pay</span>
                  <div className="mt-2 text-3xl font-black text-warning">0</div>
                  <span className="text-[10px] mt-1 font-bold text-text-secondary">Total Taken</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'history' && (
          <div className="flex flex-col gap-6 fade-in h-full justify-center items-center opacity-50">
            <History size={64} className="text-text-secondary mb-4" />
            <h2 className="text-xl font-bold text-text-primary text-center">Historical Records Archive</h2>
            <p className="text-sm text-text-secondary max-w-md text-center">
              A complete, un-editable audit trail of all approved and rejected leaves for both students and staff across academic sessions.
            </p>
          </div>
        )}

      </div>
    </div>
  );
}
