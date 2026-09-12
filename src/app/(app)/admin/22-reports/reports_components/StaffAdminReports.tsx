"use client";

import React, { useState } from 'react';
import { Users, Calendar, Filter, CheckCircle, Download } from 'lucide-react';
import clsx from 'clsx';

export default function StaffAdminReports() {
  const [activeTab, setActiveTab] = useState('staff');

  const generateReport = () => {
    alert("Admin Report Exported Successfully!");
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 h-full min-h-[500px] fade-in relative">
      <div className="w-full md:w-64 bg-card border border-border rounded-xl shadow-sm flex flex-col p-2 h-fit shrink-0">
        <button onClick={() => setActiveTab('staff')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition mb-1", activeTab === 'staff' ? 'bg-primary/10 text-primary' : 'text-text-secondary hover:bg-bg-page')}>
          <Users size={18} /> Staff Reports
        </button>
        <button onClick={() => setActiveTab('leave')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition mb-1", activeTab === 'leave' ? 'bg-info/10 text-info' : 'text-text-secondary hover:bg-bg-page')}>
          <Calendar size={18} /> Leave Reports
        </button>
        <button onClick={() => setActiveTab('custom')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition", activeTab === 'custom' ? 'bg-warning/10 text-warning' : 'text-text-secondary hover:bg-bg-page')}>
          <Filter size={18} /> Custom Query Builder
        </button>
      </div>

      <div className="flex-1 bg-card border border-border rounded-xl shadow-sm p-6 overflow-y-auto">
        
        {activeTab === 'staff' && (
          <div className="flex flex-col gap-6 fade-in max-w-xl mx-auto">
             <h2 className="text-xl font-bold text-text-primary border-b border-border pb-2 text-center">Staff & Faculty Demographics</h2>
             
             <div className="bg-bg-page border border-border p-6 rounded-lg flex flex-col gap-4">
               <div className="flex flex-col gap-1.5">
                 <label className="text-xs font-bold text-text-secondary uppercase">Report Type</label>
                 <select className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-primary font-bold">
                   <option>Staff Master List (All Details)</option>
                   <option>Department-wise Headcount</option>
                   <option>Staff Attendance Summary</option>
                 </select>
               </div>
               
               <button onClick={generateReport} className="w-full bg-primary text-white py-3 rounded-lg font-bold shadow-sm hover:bg-primary-hover transition mt-4 flex items-center justify-center gap-2">
                 <Download size={18}/> Export Staff Report
               </button>
             </div>
          </div>
        )}

        {activeTab === 'leave' && (
          <div className="flex flex-col gap-6 fade-in max-w-xl mx-auto">
             <h2 className="text-xl font-bold text-info border-b border-info/30 pb-2 text-center">Leave & Absence Analytics</h2>
             <div className="bg-info-bg/20 border border-info/30 p-6 rounded-lg flex flex-col gap-4">
                <p className="text-xs text-text-secondary font-semibold text-center mb-2">Track leave balances, approved vs rejected leaves, and absentee trends.</p>
                <select className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-info">
                  <option>Staff Leave Balances</option>
                  <option>Student Leave Applications (Monthly)</option>
                </select>
                <button onClick={generateReport} className="w-full bg-info text-white py-2.5 rounded-lg font-bold shadow-sm hover:bg-info/90 transition flex items-center justify-center gap-2">
                  <Download size={16}/> Download Report
                </button>
             </div>
          </div>
        )}

        {activeTab === 'custom' && (
          <div className="flex flex-col gap-6 fade-in h-full justify-center items-center opacity-70">
             <Filter size={64} className="text-warning mb-4" />
             <h3 className="font-bold text-lg">Custom Report Builder</h3>
             <p className="text-sm font-semibold max-w-sm text-center">
               Select specific database columns (e.g., Name, Phone, Blood Group) to generate entirely custom Excel exports dynamically.
             </p>
             <button className="bg-warning text-white px-6 py-2 rounded-lg text-sm font-bold shadow-sm mt-4 cursor-pointer hover:bg-warning/90">
               Launch Custom Builder
             </button>
          </div>
        )}
      </div>
    </div>
  );
}
