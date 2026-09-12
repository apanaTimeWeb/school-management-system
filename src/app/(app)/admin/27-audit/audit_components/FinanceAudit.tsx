"use client";

import React from 'react';
import { IndianRupee, ArrowRight } from 'lucide-react';

export default function FinanceAudit() {
  const logs = [
    { who: 'Accountant (acc1@erp)', role: 'Accountant', what: 'Modified Fee Receipt (FEE-809)', old: 'Amount: ₹15,000', new: 'Amount: ₹12,000', when: '12-Oct-2025, 09:10 AM', ip: '192.168.1.100 (Win/Firefox)' },
    { who: 'Admin (admin@erp)', role: 'Super Admin', what: 'Deleted Expense Entry (EXP-044)', old: 'Desc: Office Supplies (₹2,500)', new: '[DELETED]', when: '11-Oct-2025, 04:20 PM', ip: '192.168.1.45 (Win/Chrome)' },
    { who: 'Accountant (acc1@erp)', role: 'Accountant', what: 'Applied Fee Concession (STU-001)', old: 'Discount: 0%', new: 'Discount: 10% (Sibling)', when: '10-Oct-2025, 11:45 AM', ip: '192.168.1.100 (Win/Firefox)' },
  ];

  return (
    <div className="flex flex-col gap-6 h-full fade-in relative">
      <div className="flex-1 bg-card border border-border rounded-xl shadow-sm p-6 overflow-y-auto">
        <h2 className="text-xl font-bold text-text-primary border-b border-border pb-4 mb-6 flex items-center gap-2">
          <IndianRupee size={20} className="text-success"/> Financial Changes Audit
        </h2>
        
        <p className="text-sm font-semibold text-text-secondary mb-6 max-w-2xl">
          Track every critical change made to Fee Invoices, Receipts, Concessions, and Expense entries to prevent fraud.
        </p>

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
                {logs.map((log, i) => (
                   <tr key={i} className="hover:bg-bg-page transition">
                     <td className="p-3 border-b border-border">
                       <div className="flex flex-col">
                         <span className="font-bold text-success">{log.who}</span>
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
