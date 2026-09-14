"use client";

import React, { useState } from 'react';
import { Mail, Bell, FileText, CheckCircle, Save } from 'lucide-react';
import clsx from 'clsx';

export default function CommsConfig() {
  const [activeTab, setActiveTab] = useState('notifications');
  const [showToast, setShowToast] = useState(false);

  const handleSave = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 h-full min-h-[500px] fade-in relative">
      {showToast && (
        <div className="absolute top-4 right-4 bg-success text-white px-4 py-2 rounded-lg shadow-lg font-bold text-sm flex items-center gap-2 fade-in z-10">
          <CheckCircle size={16} /> API Settings Saved!
        </div>
      )}

      <div className="w-full md:w-64 bg-card border border-border rounded-xl shadow-sm flex flex-col p-2 h-fit shrink-0">
        <button onClick={() => setActiveTab('notifications')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition mb-1", activeTab === 'notifications' ? 'bg-primary/10 text-primary' : 'text-text-secondary hover:bg-bg-page')}>
          <Bell size={18} /> Push & Email Alerts
        </button>
        <button onClick={() => setActiveTab('sms')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition mb-1", activeTab === 'sms' ? 'bg-warning/10 text-warning' : 'text-text-secondary hover:bg-bg-page')}>
          <Mail size={18} /> SMS Gateway
        </button>
        <button onClick={() => setActiveTab('docs')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition", activeTab === 'docs' ? 'bg-info/10 text-info' : 'text-text-secondary hover:bg-bg-page')}>
          <FileText size={18} /> Document Prefixing
        </button>
      </div>

      <div className="flex-1 bg-card border border-border rounded-xl shadow-sm p-6 overflow-y-auto">
        
        {activeTab === 'notifications' && (
          <div className="flex flex-col gap-6 fade-in max-w-2xl">
             <h2 className="text-xl font-bold text-text-primary border-b border-border pb-2 flex items-center gap-2">
               <Bell size={20} className="text-primary"/> Auto-Alert Preferences
             </h2>
             <div className="bg-bg-page border border-border p-5 rounded-lg flex flex-col gap-4">
                <p className="text-xs font-semibold text-text-secondary mb-2">Turn on/off automated system emails and push notifications.</p>
                
                <div className="flex items-center justify-between bg-card border border-border p-3 rounded shadow-sm">
                   <div className="flex flex-col">
                     <span className="text-sm font-bold">Daily Attendance Alert (Absentees)</span>
                     <span className="text-[10px] font-semibold text-text-secondary">Sent to Parents at 10:00 AM</span>
                   </div>
                   <input type="checkbox" className="accent-primary w-5 h-5 cursor-pointer" defaultChecked/>
                </div>
                
                <div className="flex items-center justify-between bg-card border border-border p-3 rounded shadow-sm">
                   <div className="flex flex-col">
                     <span className="text-sm font-bold">Fee Reminder Alert</span>
                     <span className="text-[10px] font-semibold text-text-secondary">Sent 5 days before Due Date</span>
                   </div>
                   <input type="checkbox" className="accent-primary w-5 h-5 cursor-pointer" defaultChecked/>
                </div>

                <div className="flex items-center justify-between bg-card border border-border p-3 rounded shadow-sm">
                   <div className="flex flex-col">
                     <span className="text-sm font-bold">Exam Results Declared</span>
                     <span className="text-[10px] font-semibold text-text-secondary">Sent instantly when marks are locked</span>
                   </div>
                   <input type="checkbox" className="accent-primary w-5 h-5 cursor-pointer" defaultChecked/>
                </div>
                
                <button onClick={handleSave} className="bg-primary text-black py-2.5 rounded-lg font-bold shadow-sm hover:bg-primary-hover transition flex items-center justify-center gap-2 w-48 mt-2">
                  <Save size={16}/> Save Preferences
                </button>
             </div>
          </div>
        )}

        {activeTab === 'sms' && (
          <div className="flex flex-col gap-6 fade-in max-w-2xl">
             <h2 className="text-xl font-bold text-warning border-b border-warning/30 pb-2 flex items-center gap-2">
               <Mail size={20}/> SMS Gateway Config (DLT)
             </h2>
             <div className="bg-bg-page border border-border p-5 rounded-lg flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-text-secondary uppercase">SMS Provider</label>
                  <select className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-warning font-bold">
                    <option>Twilio</option>
                    <option>Msg91 (India DLT Compliant)</option>
                    <option>Fast2SMS</option>
                  </select>
                </div>
                
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-text-secondary uppercase">Auth Key / Token</label>
                  <input type="password" defaultValue="token_123456789" className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-warning font-mono" />
                </div>
                
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-text-secondary uppercase">Sender ID (6 Chars)</label>
                  <input type="text" defaultValue="DPSDEL" maxLength={6} className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-warning font-bold tracking-widest" />
                </div>
                
                <button onClick={handleSave} className="bg-warning text-white py-2.5 rounded-lg font-bold shadow-sm hover:bg-warning/90 transition flex items-center justify-center gap-2 w-48 mt-2">
                  <Save size={16}/> Save SMS Config
                </button>
             </div>
          </div>
        )}

        {activeTab === 'docs' && (
          <div className="flex flex-col gap-6 fade-in max-w-2xl">
             <h2 className="text-xl font-bold text-info border-b border-info/30 pb-2 flex items-center gap-2">
               <FileText size={20}/> Serial Numbers & Prefixes
             </h2>
             <div className="bg-bg-page border border-border p-5 rounded-lg flex flex-col gap-4">
                <p className="text-xs font-semibold text-text-secondary mb-2">Define prefixes for auto-generated IDs across the system.</p>
                
                <div className="grid grid-cols-2 gap-4">
                   <div className="flex flex-col gap-1.5">
                     <label className="text-xs font-bold text-text-secondary uppercase">Student ID Prefix</label>
                     <input type="text" defaultValue="STU-" className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-info font-bold" />
                   </div>
                   <div className="flex flex-col gap-1.5">
                     <label className="text-xs font-bold text-text-secondary uppercase">Staff ID Prefix</label>
                     <input type="text" defaultValue="EMP-" className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-info font-bold" />
                   </div>
                   <div className="flex flex-col gap-1.5">
                     <label className="text-xs font-bold text-text-secondary uppercase">Fee Receipt Prefix</label>
                     <input type="text" defaultValue="FEE-2025-" className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-info font-bold" />
                   </div>
                   <div className="flex flex-col gap-1.5">
                     <label className="text-xs font-bold text-text-secondary uppercase">Purchase Order Prefix</label>
                     <input type="text" defaultValue="PO-" className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-info font-bold" />
                   </div>
                </div>
                
                <button onClick={handleSave} className="bg-info text-white py-2.5 rounded-lg font-bold shadow-sm hover:bg-info/90 transition flex items-center justify-center gap-2 w-48 mt-4">
                  <Save size={16}/> Save Prefixes
                </button>
             </div>
          </div>
        )}

      </div>
    </div>
  );
}
