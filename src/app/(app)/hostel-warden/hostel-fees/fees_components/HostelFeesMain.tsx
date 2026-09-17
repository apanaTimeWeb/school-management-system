"use client";

import React, { useState } from 'react';
import { 
  IndianRupee, Search, Filter, AlertTriangle, 
  CheckCircle2, Plus, Clock, Info, ShieldAlert, X
} from 'lucide-react';
import { MOCK_FEES } from '../fees_constants/fees.constants';
import type { FeeRecord } from '../fees_types/fees.types';

export default function HostelFeesMain() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('ALL');
  const [isAddFineOpen, setIsAddFineOpen] = useState(false);

  const filteredFees = MOCK_FEES.filter(fee => {
    const matchesSearch = fee.studentName.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          fee.studentId.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (selectedFilter === 'ALL') return matchesSearch;
    if (selectedFilter === 'UNPAID') return matchesSearch && fee.status === 'UNPAID';
    if (selectedFilter === 'PAID') return matchesSearch && fee.status === 'PAID';
    if (selectedFilter === 'PARTIAL') return matchesSearch && fee.status === 'PARTIAL';
    return matchesSearch;
  });

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'PAID': return <span className="px-2.5 py-1 bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 w-fit"><CheckCircle2 size={10}/> Paid</span>;
      case 'PARTIAL': return <span className="px-2.5 py-1 bg-amber-500/10 text-amber-600 border border-amber-500/20 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 w-fit"><Clock size={10}/> Partial</span>;
      case 'UNPAID': return <span className="px-2.5 py-1 bg-red-500/10 text-red-600 border border-red-500/20 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 w-fit"><AlertTriangle size={10}/> Unpaid</span>;
      default: return null;
    }
  };

  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'Room Rent': return 'bg-blue-500/10 text-blue-600 border-blue-500/20';
      case 'Mess Fee': return 'bg-amber-500/10 text-amber-600 border-amber-500/20';
      case 'Laundry': return 'bg-purple-500/10 text-purple-600 border-purple-500/20';
      case 'Damages': return 'bg-rose-500/10 text-rose-600 border-rose-500/20';
      case 'Fine': return 'bg-red-500/10 text-red-600 border-red-500/20';
      default: return 'bg-gray-500/10 text-gray-600 border-gray-500/20';
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amount);
  };

  return (
    <div className="flex flex-col w-full h-full space-y-6 relative">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-[var(--bg-card)] p-4 rounded-xl border border-[var(--border)] shrink-0 shadow-sm">
        <div>
          <h1 className="text-[22px] font-bold text-[var(--text-primary)] flex items-center gap-2">
            <IndianRupee className="text-emerald-500" size={24} /> Hostel Fees & Dues
          </h1>
          <p className="text-[14px] text-[var(--text-secondary)] mt-1 flex items-center gap-1.5">
            <Info size={14} className="text-blue-500" /> Read-only mode for Warden. View status or add damage fines.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
           <button 
             onClick={() => setIsAddFineOpen(true)}
             className="flex items-center justify-center gap-2 px-4 py-2 bg-rose-600 text-white text-sm font-bold rounded-lg shadow-sm hover:bg-rose-700 transition-colors shrink-0"
           >
              <Plus size={16} /> Add Damage / Fine
           </button>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="flex flex-col sm:flex-row gap-4 bg-[var(--bg-card)] p-4 rounded-xl border border-[var(--border)] shadow-sm">
         <select 
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
            className="bg-[var(--bg-input)] border border-[var(--border)] rounded-lg px-3 py-2 text-sm text-[var(--text-primary)] focus:border-emerald-500 outline-none w-full sm:w-48"
         >
            <option value="ALL">All Dues</option>
            <option value="UNPAID">Unpaid Dues</option>
            <option value="PARTIAL">Partially Paid</option>
            <option value="PAID">Fully Paid</option>
         </select>
         
         <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]" size={16} />
            <input 
               type="text" 
               placeholder="Search by student name or ID..." 
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}
               className="w-full bg-[var(--bg-input)] border border-[var(--border)] rounded-lg pl-9 pr-4 py-2 text-sm focus:border-emerald-500 outline-none transition-colors"
            />
         </div>
      </div>

      {/* Grid of Fees */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pb-6">
         {filteredFees.map(fee => (
            <div key={fee.id} className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-5 shadow-sm flex flex-col sm:flex-row justify-between gap-6 hover:border-emerald-500/30 transition-colors">
               
               {/* Left: Student Info & Description */}
               <div className="flex-1 flex flex-col justify-between">
                  <div>
                     <div className="flex items-start gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-[var(--bg-input)] border border-[var(--border)] flex items-center justify-center font-bold text-[var(--text-primary)]">
                           {fee.studentName.charAt(0)}
                        </div>
                        <div>
                           <h3 className="font-bold text-[16px] text-[var(--text-primary)] leading-tight">{fee.studentName}</h3>
                           <p className="text-xs text-[var(--text-secondary)]">{fee.studentId} &bull; Room {fee.roomNumber}</p>
                        </div>
                     </div>
                     <span className={`inline-flex px-2 py-0.5 text-[10px] font-bold uppercase border rounded mb-2 ${getCategoryColor(fee.feeCategory)}`}>
                        {fee.feeCategory}
                     </span>
                     <p className="text-sm text-[var(--text-primary)] leading-snug">"{fee.description}"</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[var(--border)] flex justify-between items-center">
                     <span className="text-[10px] uppercase font-bold text-[var(--text-secondary)] flex items-center gap-1">
                        <Clock size={12} /> Due: {new Date(fee.dueDate).toLocaleDateString('en-GB')}
                     </span>
                     {getStatusBadge(fee.status)}
                  </div>
               </div>

               {/* Right: Financial Breakdown */}
               <div className="sm:w-48 shrink-0 bg-[var(--bg-input)] p-4 rounded-xl border border-[var(--border)] flex flex-col justify-center">
                  <div className="flex justify-between items-center mb-2">
                     <span className="text-xs font-semibold text-[var(--text-secondary)]">Total Due</span>
                     <span className="font-bold text-sm text-[var(--text-primary)]">{formatCurrency(fee.totalDue)}</span>
                  </div>
                  <div className="flex justify-between items-center mb-3">
                     <span className="text-xs font-semibold text-[var(--text-secondary)]">Paid Amount</span>
                     <span className="font-bold text-sm text-emerald-600">{formatCurrency(fee.paidAmount)}</span>
                  </div>
                  <div className="w-full h-px bg-[var(--border)] mb-3"></div>
                  <div className="flex justify-between items-center">
                     <span className="text-xs font-bold text-rose-500 uppercase">Balance</span>
                     <span className={`font-black text-lg ${fee.balance > 0 ? 'text-rose-600' : 'text-emerald-600'}`}>
                        {formatCurrency(fee.balance)}
                     </span>
                  </div>
               </div>

            </div>
         ))}

         {filteredFees.length === 0 && (
            <div className="col-span-full py-16 flex flex-col items-center justify-center text-[var(--text-secondary)] border-2 border-dashed border-[var(--border)] rounded-xl bg-[var(--bg-card)]">
               <IndianRupee size={48} className="opacity-20 mb-4" />
               <p className="font-medium text-lg">No fee records found</p>
            </div>
         )}
      </div>

      {/* Add Fine Modal */}
      {isAddFineOpen && (
         <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
            <div className="bg-[var(--bg-card)] w-full max-w-md rounded-2xl shadow-2xl overflow-hidden flex flex-col">
               <div className="p-5 border-b border-[var(--border)] flex justify-between items-center bg-rose-600 text-white">
                 <div className="flex items-center gap-2">
                    <ShieldAlert size={20} />
                    <h2 className="text-lg font-bold">Add Damage Fine</h2>
                 </div>
                 <button onClick={() => setIsAddFineOpen(false)} className="p-1.5 rounded-full hover:bg-white/20 transition-colors">
                    <X size={18} />
                 </button>
               </div>
               <div className="p-6">
                  <div className="p-3 mb-6 bg-rose-500/10 border border-rose-500/20 rounded-lg flex gap-3 text-sm text-rose-600">
                     <Info size={16} className="shrink-0 mt-0.5" />
                     <p>This fine will be added directly to the student's dues in the main Accounts module.</p>
                  </div>
                  
                  <div className="space-y-4">
                     <div>
                        <label className="block text-xs font-bold text-[var(--text-secondary)] uppercase tracking-wider mb-1.5">Student ID</label>
                        <input type="text" placeholder="e.g. STU-1024" className="w-full bg-[var(--bg-input)] border border-[var(--border)] rounded-lg px-4 py-2 text-sm focus:border-rose-500 outline-none" />
                     </div>
                     <div>
                        <label className="block text-xs font-bold text-[var(--text-secondary)] uppercase tracking-wider mb-1.5">Fine Amount (₹)</label>
                        <input type="number" placeholder="Enter amount..." className="w-full bg-[var(--bg-input)] border border-[var(--border)] rounded-lg px-4 py-2 text-sm focus:border-rose-500 outline-none" />
                     </div>
                     <div>
                        <label className="block text-xs font-bold text-[var(--text-secondary)] uppercase tracking-wider mb-1.5">Description / Reason</label>
                        <textarea placeholder="e.g. Broken chair in Room 101..." className="w-full bg-[var(--bg-input)] border border-[var(--border)] rounded-lg px-4 py-2 text-sm focus:border-rose-500 outline-none resize-none h-24"></textarea>
                     </div>
                  </div>
               </div>
               <div className="p-4 border-t border-[var(--border)] flex justify-end gap-3 bg-[var(--bg-input)]">
                  <button onClick={() => setIsAddFineOpen(false)} className="px-4 py-2 font-bold text-sm text-[var(--text-primary)] hover:bg-[var(--border)] rounded-lg transition-colors">Cancel</button>
                  <button className="px-4 py-2 font-bold text-sm text-white bg-rose-600 hover:bg-rose-700 rounded-lg transition-colors">Submit Fine</button>
               </div>
            </div>
         </div>
      )}

    </div>
  );
}
