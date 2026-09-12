"use client";

import React from 'react';
import { History, Search, Download } from 'lucide-react';

export default function HistoryReports() {
  return (
    <div className="flex flex-col gap-6 h-full fade-in">
      <div className="flex-1 bg-card border border-border rounded-xl shadow-sm p-6 overflow-y-auto">
        <div className="flex justify-between items-center border-b border-border pb-4 mb-6">
           <h2 className="text-xl font-bold text-text-primary flex items-center gap-2">
             <History size={20} className="text-primary"/> Complaint & Discipline History
           </h2>
           <button className="bg-card border border-border px-3 py-1.5 rounded-lg text-xs font-bold hover:border-primary flex items-center gap-2 transition">
             <Download size={14}/> Export CSV
           </button>
        </div>

        <div className="flex gap-4 items-center mb-6">
           <div className="flex items-center gap-2 bg-bg-page border border-border px-3 py-2 rounded-lg flex-1">
             <Search size={16} className="text-text-secondary"/>
             <input type="text" placeholder="Search past records by ID, Name, or keywords..." className="bg-transparent border-none outline-none text-sm w-full font-semibold"/>
           </div>
           <select className="bg-bg-page border border-border rounded-lg px-3 py-2 text-sm font-semibold outline-none focus:border-primary">
             <option>All Types</option>
             <option>Discipline Incidents</option>
             <option>Grievances (Resolved)</option>
           </select>
        </div>

        <div className="border border-border rounded-lg overflow-hidden bg-card shadow-sm">
           <table className="w-full text-left">
             <thead className="bg-bg-page text-xs text-text-secondary">
               <tr>
                 <th className="p-3 font-bold border-b border-border">ID / Ref</th>
                 <th className="p-3 font-bold border-b border-border">Type</th>
                 <th className="p-3 font-bold border-b border-border">Title / Context</th>
                 <th className="p-3 font-bold border-b border-border">Status</th>
                 <th className="p-3 font-bold border-b border-border">Date Closed</th>
               </tr>
             </thead>
             <tbody className="text-sm font-semibold">
               <tr>
                 <td className="p-3 border-b border-border text-xs font-black">GR-089</td>
                 <td className="p-3 border-b border-border text-xs"><span className="bg-info-bg text-info px-2 py-0.5 rounded font-bold uppercase">Grievance</span></td>
                 <td className="p-3 border-b border-border">Water cooler not working</td>
                 <td className="p-3 border-b border-border"><span className="bg-success-bg text-success px-2 py-0.5 rounded text-[10px] font-bold uppercase">Resolved</span></td>
                 <td className="p-3 border-b border-border text-xs">28-Sep-2025</td>
               </tr>
               <tr>
                 <td className="p-3 border-b border-border text-xs font-black">INC-2025-04</td>
                 <td className="p-3 border-b border-border text-xs"><span className="bg-danger-bg text-danger px-2 py-0.5 rounded font-bold uppercase">Discipline</span></td>
                 <td className="p-3 border-b border-border">Bullying complaint (Rohan)</td>
                 <td className="p-3 border-b border-border"><span className="bg-warning-bg text-warning px-2 py-0.5 rounded text-[10px] font-bold uppercase">Action Taken</span></td>
                 <td className="p-3 border-b border-border text-xs">15-Aug-2025</td>
               </tr>
             </tbody>
           </table>
        </div>
      </div>
    </div>
  );
}
