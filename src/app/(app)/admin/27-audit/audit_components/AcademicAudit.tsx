"use client";

import React, { useState } from 'react';
import { UserCog, FileSignature, ArrowRight, UserPlus, Filter } from 'lucide-react';
import clsx from 'clsx';

export default function AcademicAudit() {
  const [filter, setFilter] = useState('All');

  const logs = [
    { type: 'Student', who: 'Admin (admin@erp)', role: 'Super Admin', what: 'Updated Student Profile (STU-089)', old: 'Phone: 9876543210', new: 'Phone: 9998887776', when: '12-Oct-2025, 10:15 AM', ip: '192.168.1.45 (Win/Chrome)' },
    { type: 'Admission', who: 'Front Desk (desk1)', role: 'Staff', what: 'Changed Admission Status (APP-204)', old: 'Status: Pending', new: 'Status: Approved', when: '11-Oct-2025, 11:30 AM', ip: '10.0.0.12 (Mac/Safari)' },
    { type: 'Document', who: 'Principal (head@erp)', role: 'Principal', what: 'Deleted Document (TC-2024)', old: 'File: tc_rohan.pdf', new: '[DELETED]', when: '10-Oct-2025, 03:45 PM', ip: '117.20.55.2 (iPad/Safari)' },
  ];

  const filteredLogs = filter === 'All' ? logs : logs.filter(l => l.type === filter);

  return (
    <div className="flex flex-col gap-6 h-full fade-in relative">
      <div className="flex-1 bg-card border border-border rounded-xl shadow-sm p-6 overflow-y-auto">
        <h2 className="text-xl font-bold text-text-primary border-b border-border pb-4 mb-6 flex items-center gap-2">
          <UserCog size={20} className="text-primary"/> Academic & Student Records Audit
        </h2>
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
           <p className="text-sm font-semibold text-text-secondary max-w-2xl">
             Immutable ledger tracking all modifications to Student Profiles, Admissions, and uploaded Documents.
           </p>
           
           <div className="flex items-center gap-2 bg-bg-page border border-border rounded-lg p-1">
             <Filter size={16} className="text-text-secondary ml-2"/>
             <select value={filter} onChange={(e)=>setFilter(e.target.value)} className="bg-transparent border-none text-sm font-bold outline-none px-2 py-1 cursor-pointer">
               <option value="All">All Academic Logs</option>
               <option value="Student">Student Changes</option>
               <option value="Admission">Admission Changes</option>
               <option value="Document">Document Changes</option>
             </select>
           </div>
        </div>

        <div className="border border-border rounded-lg overflow-x-auto bg-card shadow-sm">
           <table className="w-full text-left min-w-[800px]">
             <thead className="bg-bg-page text-xs text-text-secondary">
               <tr>
                 <th className="p-3 font-bold border-b border-border">Who (User)</th>
                 <th className="p-3 font-bold border-b border-border">What (Action)</th>
                 <th className="p-3 font-bold border-b border-border min-w-[250px]">Change (Old &rarr; New)</th>
                 <th className="p-3 font-bold border-b border-border">When (Time)</th>
                 <th className="p-3 font-bold border-b border-border">IP / Device</th>
               </tr>
             </thead>
             <tbody className="text-sm">
                {filteredLogs.map((log, i) => (
                   <tr key={i} className="hover:bg-bg-page transition">
                     <td className="p-3 border-b border-border">
                       <div className="flex flex-col">
                         <span className="font-bold text-primary">{log.who}</span>
                         <span className="text-[10px] font-bold text-text-secondary uppercase">{log.role}</span>
                       </div>
                     </td>
                     <td className="p-3 border-b border-border font-bold text-xs">{log.what}</td>
                     <td className="p-3 border-b border-border">
                       <div className="flex flex-col gap-1">
                         <div className="text-xs font-semibold text-danger bg-danger-bg px-2 py-0.5 rounded border border-danger/20 w-fit line-through">{log.old}</div>
                         <div className="text-xs font-semibold text-success bg-success-bg px-2 py-0.5 rounded border border-success/20 w-fit">{log.new}</div>
                       </div>
                     </td>
                     <td className="p-3 border-b border-border text-[11px] font-bold text-text-secondary">{log.when}</td>
                     <td className="p-3 border-b border-border text-[11px] font-mono text-text-secondary">{log.ip}</td>
                   </tr>
                ))}
             </tbody>
           </table>
        </div>
      </div>
    </div>
  );
}
