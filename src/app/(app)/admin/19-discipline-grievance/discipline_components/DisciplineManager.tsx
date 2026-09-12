"use client";

import React, { useState } from 'react';
import { ShieldAlert, AlertTriangle, Hammer, CheckCircle, Search } from 'lucide-react';
import clsx from 'clsx';

export default function DisciplineManager() {
  const [activeTab, setActiveTab] = useState('incidents');
  const [showToast, setShowToast] = useState(false);

  const handleAction = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 h-full min-h-[500px] fade-in relative">
      {showToast && (
        <div className="absolute top-4 right-4 bg-success text-white px-4 py-2 rounded-lg shadow-lg font-bold text-sm flex items-center gap-2 fade-in z-10">
          <CheckCircle size={16} /> Record Saved Successfully!
        </div>
      )}

      <div className="w-full md:w-64 bg-card border border-border rounded-xl shadow-sm flex flex-col p-2 h-fit shrink-0">
        <button onClick={() => setActiveTab('incidents')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition mb-1", activeTab === 'incidents' ? 'bg-danger/10 text-danger' : 'text-text-secondary hover:bg-bg-page')}>
          <ShieldAlert size={18} /> Log Incident
        </button>
        <button onClick={() => setActiveTab('warnings')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition mb-1", activeTab === 'warnings' ? 'bg-warning/10 text-warning' : 'text-text-secondary hover:bg-bg-page')}>
          <AlertTriangle size={18} /> Issue Warning
        </button>
        <button onClick={() => setActiveTab('records')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition", activeTab === 'records' ? 'bg-primary/10 text-primary' : 'text-text-secondary hover:bg-bg-page')}>
          <Hammer size={18} /> Actions & Records
        </button>
      </div>

      <div className="flex-1 bg-card border border-border rounded-xl shadow-sm p-6 overflow-y-auto">
        
        {activeTab === 'incidents' && (
          <div className="flex flex-col gap-6 fade-in max-w-2xl mx-auto">
             <h2 className="text-xl font-bold text-danger border-b border-danger/30 pb-2 text-center flex items-center justify-center gap-2">
               <ShieldAlert size={20}/> Log Misconduct / Incident
             </h2>
             
             <div className="bg-bg-page border border-border p-6 rounded-lg flex flex-col gap-4">
               <div className="flex flex-col gap-1.5">
                 <label className="text-xs font-bold text-text-secondary uppercase">Student ID / Name</label>
                 <div className="relative">
                   <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary"/>
                   <input type="text" placeholder="Search student..." className="w-full bg-bg-input border border-border rounded-md pl-9 pr-3 py-2 text-sm outline-none focus:border-danger font-bold" />
                 </div>
               </div>
               
               <div className="flex flex-col gap-1.5">
                 <label className="text-xs font-bold text-text-secondary uppercase">Incident Type</label>
                 <select className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-danger">
                   <option>Bullying / Fighting</option>
                   <option>Damage to Property</option>
                   <option>Cheating in Exams</option>
                   <option>Inappropriate Behavior</option>
                 </select>
               </div>
               
               <div className="flex flex-col gap-1.5">
                 <label className="text-xs font-bold text-text-secondary uppercase">Description</label>
                 <textarea rows={3} className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-danger resize-none" placeholder="Provide detailed context..."></textarea>
               </div>
               
               <button onClick={handleAction} className="w-full bg-danger text-white py-3 rounded-lg font-bold shadow-sm hover:bg-danger/90 transition mt-2">
                 Submit Incident Report
               </button>
             </div>
          </div>
        )}

        {activeTab === 'warnings' && (
          <div className="flex flex-col gap-6 fade-in max-w-xl mx-auto">
             <h2 className="text-xl font-bold text-warning border-b border-warning/30 pb-2 text-center flex items-center justify-center gap-2">
               <AlertTriangle size={20}/> Issue Formal Warning
             </h2>
             <div className="bg-warning-bg/20 border border-warning/30 p-6 rounded-lg flex flex-col gap-4 text-center">
                <p className="text-sm font-semibold mb-2 text-text-secondary">Send a formal warning letter (email/SMS) to the student and parents regarding recent misconduct.</p>
                <input type="text" placeholder="Student ID..." className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-warning font-bold" />
                <select className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-warning">
                  <option>First Warning (Verbal/Written)</option>
                  <option>Second Warning (Parent Call)</option>
                  <option>Final Warning</option>
                </select>
                <button onClick={handleAction} className="bg-warning text-white py-2 rounded-lg font-bold shadow-sm hover:bg-warning/90 transition mt-2">
                  Issue Warning
                </button>
             </div>
          </div>
        )}

        {activeTab === 'records' && (
          <div className="flex flex-col gap-6 fade-in">
             <h2 className="text-xl font-bold text-text-primary border-b border-border pb-2 flex items-center gap-2">
               <Hammer size={20} className="text-primary"/> Discipline Records & Actions Taken
             </h2>
             
             <div className="border border-border rounded-lg overflow-hidden bg-card shadow-sm">
               <table className="w-full text-left">
                 <thead className="bg-bg-page text-xs text-text-secondary">
                   <tr>
                     <th className="p-3 font-bold border-b border-border">Student</th>
                     <th className="p-3 font-bold border-b border-border">Incident</th>
                     <th className="p-3 font-bold border-b border-border">Action Taken</th>
                     <th className="p-3 font-bold border-b border-border">Date</th>
                   </tr>
                 </thead>
                 <tbody className="text-sm font-semibold">
                   <tr>
                     <td className="p-3 border-b border-border">Rohan Verma (9-B)</td>
                     <td className="p-3 border-b border-border text-danger">Cheating in Exams</td>
                     <td className="p-3 border-b border-border">
                        <span className="bg-warning-bg text-warning px-2 py-0.5 rounded text-[10px] font-bold uppercase">Parents Called</span>
                     </td>
                     <td className="p-3 border-b border-border text-xs">10-Oct-2025</td>
                   </tr>
                   <tr>
                     <td className="p-3 border-b border-border">Kabir Singh (11-A)</td>
                     <td className="p-3 border-b border-border text-danger">Property Damage</td>
                     <td className="p-3 border-b border-border">
                        <span className="bg-danger-bg text-danger px-2 py-0.5 rounded text-[10px] font-bold uppercase">Suspended (3 Days)</span>
                     </td>
                     <td className="p-3 border-b border-border text-xs">05-Oct-2025</td>
                   </tr>
                 </tbody>
               </table>
             </div>
          </div>
        )}

      </div>
    </div>
  );
}
