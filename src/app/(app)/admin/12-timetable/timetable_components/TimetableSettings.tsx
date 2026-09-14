"use client";

import React, { useState } from 'react';
import { Clock, Plus, Trash2, CheckCircle } from 'lucide-react';
import clsx from 'clsx';

export default function TimetableSettings() {
  const [periods, setPeriods] = useState([
    { id: 1, name: 'Period 1', start: '08:00 AM', end: '08:45 AM', isBreak: false },
    { id: 2, name: 'Period 2', start: '08:45 AM', end: '09:30 AM', isBreak: false },
    { id: 3, name: 'Period 3', start: '09:30 AM', end: '10:15 AM', isBreak: false },
    { id: 4, name: 'Short Break', start: '10:15 AM', end: '10:30 AM', isBreak: true },
    { id: 5, name: 'Period 4', start: '10:30 AM', end: '11:15 AM', isBreak: false },
  ]);
  const [showToast, setShowToast] = useState(false);

  const handleSave = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const deletePeriod = (id: number) => {
    setPeriods(periods.filter(p => p.id !== id));
  };

  return (
    <div className="flex flex-col gap-6 h-full fade-in relative">
      {showToast && (
        <div className="absolute top-4 right-4 bg-success text-white px-4 py-2 rounded-lg shadow-lg font-bold text-sm flex items-center gap-2 fade-in z-10">
          <CheckCircle size={16} /> Period Configuration Saved!
        </div>
      )}

      <div className="flex-1 bg-card border border-border rounded-xl shadow-sm p-6 overflow-y-auto">
        <h2 className="text-xl font-bold text-text-primary border-b border-border pb-4 mb-6 flex items-center gap-2">
          <Clock size={20} className="text-primary"/> Period Management & Timings
        </h2>

        <div className="flex flex-col lg:flex-row gap-6 items-start">
          
          <div className="w-full lg:w-1/3 bg-bg-page border border-border p-5 rounded-lg flex flex-col gap-4">
             <h3 className="font-bold text-sm">Add New Period / Break</h3>
             
             <div className="flex flex-col gap-1.5">
               <label className="text-xs font-semibold text-text-secondary">Name</label>
               <input type="text" placeholder="e.g. Lunch Break" className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-primary" />
             </div>
             <div className="grid grid-cols-2 gap-3">
               <div className="flex flex-col gap-1.5">
                 <label className="text-xs font-semibold text-text-secondary">Start Time</label>
                 <input type="time" className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-primary" />
               </div>
               <div className="flex flex-col gap-1.5">
                 <label className="text-xs font-semibold text-text-secondary">End Time</label>
                 <input type="time" className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-primary" />
               </div>
             </div>
             <div className="flex items-center gap-2 mt-2">
               <input type="checkbox" className="w-4 h-4 accent-primary" id="isBreak"/>
               <label htmlFor="isBreak" className="text-sm font-semibold">Mark as Break / Lunch</label>
             </div>
             
             <button onClick={handleSave} className="mt-4 bg-primary text-black px-4 py-2.5 rounded-lg text-sm font-bold shadow-sm hover:bg-primary-hover active:scale-95 transition flex items-center justify-center gap-2">
               <Plus size={16}/> Add to Timeline
             </button>
          </div>

          <div className="flex-1 w-full">
            <h3 className="font-bold text-sm mb-3">Daily Timeline Structure</h3>
            <div className="flex flex-col gap-2">
              {periods.map((p, idx) => (
                <div key={p.id} className={clsx("flex items-center justify-between p-3 rounded-lg border", p.isBreak ? "bg-bg-page border-dashed border-border" : "bg-card border-border shadow-sm")}>
                  <div className="flex items-center gap-4">
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">{idx + 1}</span>
                    <div>
                      <h4 className={clsx("font-bold text-sm", p.isBreak ? "text-text-secondary italic" : "text-text-primary")}>{p.name}</h4>
                      <p className="text-xs font-semibold text-primary">{p.start} - {p.end}</p>
                    </div>
                  </div>
                  <button onClick={() => deletePeriod(p.id)} className="text-text-secondary hover:text-danger p-2 transition">
                    <Trash2 size={16}/>
                  </button>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
