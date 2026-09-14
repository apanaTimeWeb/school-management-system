"use client";

import React, { useState } from 'react';
import { Users, UserCircle, CheckCircle } from 'lucide-react';
import clsx from 'clsx';

export default function AllocationAssignment() {
  const [activeTab, setActiveTab] = useState('driver');
  const [showToast, setShowToast] = useState(false);

  const handleAssign = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 h-full min-h-[500px] fade-in relative">
      {showToast && (
        <div className="absolute top-4 right-4 bg-success text-white px-4 py-2 rounded-lg shadow-lg font-bold text-sm flex items-center gap-2 fade-in z-10">
          <CheckCircle size={16} /> Assignment Saved!
        </div>
      )}

      <div className="w-full md:w-64 bg-card border border-border rounded-xl shadow-sm flex flex-col p-2 h-fit shrink-0">
        <button onClick={() => setActiveTab('driver')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition mb-1", activeTab === 'driver' ? 'bg-primary/10 text-primary' : 'text-text-secondary hover:bg-bg-page')}>
          <UserCircle size={18} /> Driver/Staff Assign
        </button>
        <button onClick={() => setActiveTab('student')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition", activeTab === 'student' ? 'bg-info/10 text-info' : 'text-text-secondary hover:bg-bg-page')}>
          <Users size={18} /> Students Allocation
        </button>
      </div>

      <div className="flex-1 bg-card border border-border rounded-xl shadow-sm p-6 overflow-y-auto">
        
        {activeTab === 'driver' && (
          <div className="flex flex-col gap-6 fade-in">
            <h2 className="text-xl font-bold text-text-primary border-b border-border pb-2">Assign Driver & Assistant to Vehicle</h2>
            
            <div className="bg-bg-page border border-border p-5 rounded-lg flex flex-col gap-4 max-w-lg">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-text-secondary">Select Vehicle</label>
                <select className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-primary">
                  <option>BUS-01 (Route A)</option>
                  <option>VAN-03 (Route B)</option>
                </select>
              </div>
              
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-text-secondary">Assign Driver</label>
                <select className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-primary">
                  <option>Driver Ram Singh (ID: DRV-01)</option>
                  <option>Driver Shyam (ID: DRV-02)</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-text-secondary">Assign Assistant/Helper (Optional)</label>
                <select className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-primary">
                  <option>None</option>
                  <option>Helper Mohan (ID: HLP-01)</option>
                </select>
              </div>
              
              <button onClick={handleAssign} className="bg-primary text-black px-4 py-2 mt-2 rounded-lg text-sm font-bold shadow-sm hover:bg-primary-hover active:scale-95 transition self-start">
                Confirm Assignment
              </button>
            </div>
          </div>
        )}

        {activeTab === 'student' && (
          <div className="flex flex-col gap-6 fade-in">
            <h2 className="text-xl font-bold text-text-primary border-b border-border pb-2">Student Route Allocation</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-4">
                 <h3 className="font-bold text-sm text-text-secondary uppercase">1. Select Route & Stop</h3>
                 <select className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm font-semibold outline-none focus:border-primary">
                    <option>Route A - City Center</option>
                 </select>
                 <select className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm font-semibold outline-none focus:border-primary">
                    <option>Stop: Sector 15</option>
                 </select>
                 
                 <div className="bg-info-bg/50 border border-info/30 p-4 rounded-lg mt-4">
                   <h4 className="text-info font-bold text-sm mb-1">Available Seats in BUS-01</h4>
                   <div className="text-3xl font-black text-info">28 <span className="text-sm text-info/70">/ 40</span></div>
                 </div>
              </div>

              <div className="flex flex-col gap-4 border-l border-border pl-8">
                 <h3 className="font-bold text-sm text-text-secondary uppercase">2. Assign Student</h3>
                 <input type="text" placeholder="Search Student by ID or Name..." className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-primary" />
                 
                 <div className="bg-bg-page border border-border p-3 rounded-md flex items-center justify-between">
                    <div>
                      <span className="font-bold text-sm">Aarav Sharma</span>
                      <p className="text-xs text-text-secondary">Class 10-A • STU2026001</p>
                    </div>
                    <button onClick={handleAssign} className="bg-primary/10 text-primary border border-primary/20 px-3 py-1.5 rounded text-xs font-bold hover:bg-primary hover:text-black transition">
                      Allocate to Stop
                    </button>
                 </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
