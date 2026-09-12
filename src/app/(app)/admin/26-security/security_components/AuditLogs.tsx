"use client";

import React from 'react';
import { List, Search, Download } from 'lucide-react';

export default function AuditLogs() {
  const logs = [
    { id: 'LOG-092', user: 'Admin (admin@erp)', action: 'Changed Finance Settings', details: 'Updated Late Fee amount from ₹50 to ₹100', time: 'Today, 10:45 AM' },
    { id: 'LOG-091', user: 'Principal (head@erp)', action: 'Approved TC Request', details: 'Approved Transfer Certificate for STU-022', time: 'Yesterday, 02:15 PM' },
    { id: 'LOG-090', user: 'Teacher (ramesh@erp)', action: 'Edited Exam Marks', details: 'Changed Math marks for STU-102 (45 -> 55)', time: '10-Oct-2025, 11:00 AM' },
  ];

  return (
    <div className="flex flex-col gap-6 h-full fade-in">
      <div className="flex-1 bg-card border border-border rounded-xl shadow-sm p-6 overflow-y-auto">
        <div className="flex justify-between items-center border-b border-border pb-4 mb-6">
           <h2 className="text-xl font-bold text-text-primary flex items-center gap-2">
             <List size={20} className="text-primary"/> System Activity Logs
           </h2>
           <button className="bg-card border border-border px-3 py-1.5 rounded-lg text-xs font-bold hover:border-primary flex items-center gap-2 transition">
             <Download size={14}/> Export CSV
           </button>
        </div>

        <p className="text-sm font-semibold text-text-secondary mb-6">The audit log records every significant action taken by admins, teachers, and staff across the ERP. This data is immutable.</p>

        <div className="flex gap-4 items-center mb-6">
           <div className="flex items-center gap-2 bg-bg-page border border-border px-3 py-2 rounded-lg flex-1">
             <Search size={16} className="text-text-secondary"/>
             <input type="text" placeholder="Search logs by User, Action, or Date..." className="bg-transparent border-none outline-none text-sm w-full font-semibold"/>
           </div>
           <select className="bg-bg-page border border-border rounded-lg px-3 py-2 text-sm font-semibold outline-none focus:border-primary">
             <option>All Modules</option>
             <option>Settings Changes</option>
             <option>Approvals</option>
             <option>Data Corrections</option>
           </select>
        </div>

        <div className="border border-border rounded-lg overflow-hidden bg-card shadow-sm">
           <table className="w-full text-left">
             <thead className="bg-bg-page text-xs text-text-secondary">
               <tr>
                 <th className="p-3 font-bold border-b border-border">Log ID</th>
                 <th className="p-3 font-bold border-b border-border">User</th>
                 <th className="p-3 font-bold border-b border-border">Action Taken</th>
                 <th className="p-3 font-bold border-b border-border">Specific Details</th>
                 <th className="p-3 font-bold border-b border-border">Timestamp</th>
               </tr>
             </thead>
             <tbody className="text-sm font-semibold">
                {logs.map((log, i) => (
                   <tr key={i} className="hover:bg-bg-page transition">
                     <td className="p-3 border-b border-border text-[10px] font-black text-text-secondary">{log.id}</td>
                     <td className="p-3 border-b border-border text-xs text-primary">{log.user}</td>
                     <td className="p-3 border-b border-border text-xs font-bold">{log.action}</td>
                     <td className="p-3 border-b border-border text-xs text-text-secondary">{log.details}</td>
                     <td className="p-3 border-b border-border text-[10px]">{log.time}</td>
                   </tr>
                ))}
             </tbody>
           </table>
        </div>

      </div>
    </div>
  );
}
