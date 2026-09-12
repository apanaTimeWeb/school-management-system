"use client";

import React, { useState } from 'react';
import { IndianRupee, Search, Receipt, CreditCard } from 'lucide-react';

export default function FinanceSearch() {
  const [searchQuery, setSearchQuery] = useState('');

  const results = [
    { id: 'RCPT-8091', ref: 'FEE-2025-10', name: 'Aarav Sharma', amount: '12,500', date: '10-Oct-2025', status: 'Paid', type: 'Receipt' },
    { id: 'FEE-2025-11', ref: 'Installment 2', name: 'Sneha Gupta', amount: '15,000', date: 'Due: 15-Nov-2025', status: 'Unpaid', type: 'Fee Due' },
  ];

  return (
    <div className="flex flex-col gap-6 h-full fade-in relative">
      <div className="flex-1 bg-card border border-border rounded-xl shadow-sm p-6 overflow-y-auto">
        <h2 className="text-xl font-bold text-text-primary border-b border-border pb-4 mb-6 flex items-center gap-2">
          <IndianRupee size={20} className="text-success"/> Financial Search (Fees & Receipts)
        </h2>
        
        <div className="flex flex-col gap-6 max-w-4xl mx-auto w-full">
           <div className="flex flex-col md:flex-row gap-4 items-center bg-bg-page border border-border p-4 rounded-xl shadow-sm">
              <div className="flex-1 relative w-full">
                <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary"/>
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e)=>setSearchQuery(e.target.value)}
                  placeholder="Search Receipt No, Fee Invoice No, or Student Name..." 
                  className="w-full bg-bg-input border border-border rounded-lg pl-12 pr-4 py-3 text-sm outline-none focus:border-success font-bold" 
                />
              </div>
              <div className="flex gap-2 w-full md:w-auto">
                <label className="flex items-center gap-2 text-sm font-bold bg-success-bg/30 text-success px-3 py-2 rounded-lg border border-success/30 cursor-pointer">
                  <input type="checkbox" className="accent-success" defaultChecked/> Receipts
                </label>
                <label className="flex items-center gap-2 text-sm font-bold bg-danger-bg/30 text-danger px-3 py-2 rounded-lg border border-danger/30 cursor-pointer">
                  <input type="checkbox" className="accent-danger" defaultChecked/> Unpaid Fees
                </label>
              </div>
           </div>

           <div className="border border-border rounded-lg overflow-hidden bg-card shadow-sm mt-2">
             <table className="w-full text-left">
               <thead className="bg-bg-page text-xs text-text-secondary">
                 <tr>
                   <th className="p-3 font-bold border-b border-border">ID / Ref</th>
                   <th className="p-3 font-bold border-b border-border">Type</th>
                   <th className="p-3 font-bold border-b border-border">Student Details</th>
                   <th className="p-3 font-bold border-b border-border">Amount</th>
                   <th className="p-3 font-bold border-b border-border">Date</th>
                   <th className="p-3 font-bold border-b border-border text-center">Status</th>
                 </tr>
               </thead>
               <tbody className="text-sm font-semibold">
                 {results.map((res, i) => (
                   <tr key={i} className="hover:bg-bg-page transition cursor-pointer">
                     <td className="p-3 border-b border-border">
                       <div className="flex flex-col">
                         <span className="font-black text-primary">{res.id}</span>
                         <span className="text-[10px] text-text-secondary">{res.ref}</span>
                       </div>
                     </td>
                     <td className="p-3 border-b border-border text-xs flex items-center gap-1">
                       {res.type === 'Receipt' ? <Receipt size={14} className="text-success"/> : <CreditCard size={14} className="text-danger"/>}
                       {res.type}
                     </td>
                     <td className="p-3 border-b border-border text-xs">{res.name}</td>
                     <td className="p-3 border-b border-border font-black">₹{res.amount}</td>
                     <td className="p-3 border-b border-border text-xs">{res.date}</td>
                     <td className="p-3 border-b border-border text-center">
                       <span className={res.status === 'Paid' ? 'bg-success-bg text-success px-2 py-0.5 rounded text-[10px] font-bold uppercase' : 'bg-danger-bg text-danger px-2 py-0.5 rounded text-[10px] font-bold uppercase'}>
                         {res.status}
                       </span>
                     </td>
                   </tr>
                 ))}
               </tbody>
             </table>
           </div>

        </div>
      </div>
    </div>
  );
}
