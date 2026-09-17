"use client";

import React, { useState } from 'react';
import { 
  LogOut, Search, Filter, Clock, ShieldCheck, 
  MapPin, CheckCircle2, XCircle, AlertTriangle, 
  UserCheck, ShieldAlert, ArrowRightCircle, Moon
} from 'lucide-react';
import { MOCK_GATE_PASSES } from '../outing_constants/outing.constants';
import type { GatePassRequest, GatePassStatus } from '../outing_types/outing.types';

export default function OutingManagementMain() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('ALL');

  const filteredPasses = MOCK_GATE_PASSES.filter(p => {
    const matchesSearch = p.studentName.toLowerCase().includes(searchTerm.toLowerCase()) || p.id.toLowerCase().includes(searchTerm.toLowerCase());
    if (selectedFilter === 'ALL') return matchesSearch;
    if (selectedFilter === 'ACTIVE') return matchesSearch && p.status === 'ACTIVE_OUT';
    if (selectedFilter === 'PENDING') return matchesSearch && (p.status === 'PENDING_WARDEN' || p.status === 'PENDING_GUARDIAN');
    if (selectedFilter === 'LATE') return matchesSearch && p.status === 'LATE';
    return matchesSearch;
  });

  const getStatusBadge = (status: GatePassStatus) => {
    switch(status) {
      case 'PENDING_WARDEN': return <span className="px-2.5 py-1 bg-amber-500/10 text-amber-600 border border-amber-500/20 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1"><ShieldCheck size={10}/> Warden Approval</span>;
      case 'PENDING_GUARDIAN': return <span className="px-2.5 py-1 bg-purple-500/10 text-purple-600 border border-purple-500/20 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1"><UserCheck size={10}/> Parent Approval</span>;
      case 'APPROVED': return <span className="px-2.5 py-1 bg-blue-500/10 text-blue-600 border border-blue-500/20 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1"><CheckCircle2 size={10}/> Approved</span>;
      case 'REJECTED': return <span className="px-2.5 py-1 bg-red-500/10 text-red-600 border border-red-500/20 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1"><XCircle size={10}/> Rejected</span>;
      case 'ACTIVE_OUT': return <span className="px-2.5 py-1 bg-teal-500/10 text-teal-600 border border-teal-500/20 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1"><ArrowRightCircle size={10}/> Currently Out</span>;
      case 'RETURNED': return <span className="px-2.5 py-1 bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1"><CheckCircle2 size={10}/> Returned</span>;
      case 'LATE': return <span className="px-2.5 py-1 bg-rose-500/10 text-rose-600 border border-rose-500/20 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1"><AlertTriangle size={10}/> Late Return</span>;
      default: return null;
    }
  };

  return (
    <div className="flex flex-col w-full h-full space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-[var(--bg-card)] p-4 rounded-xl border border-[var(--border)] shrink-0 shadow-sm">
        <div>
          <h1 className="text-[22px] font-bold text-[var(--text-primary)] flex items-center gap-2">
            <LogOut className="text-indigo-500" size={24} /> Outing & Gate Pass
          </h1>
          <p className="text-[14px] text-[var(--text-secondary)] mt-1">
            Manage student movement, gate passes, and late returns.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
           <div className="flex gap-2">
              <select 
                 value={selectedFilter}
                 onChange={(e) => setSelectedFilter(e.target.value)}
                 className="bg-[var(--bg-input)] border border-[var(--border)] rounded-lg px-3 py-2 text-sm text-[var(--text-primary)] focus:border-indigo-500 outline-none"
              >
                 <option value="ALL">All Passes</option>
                 <option value="PENDING">Pending Approval</option>
                 <option value="ACTIVE">Currently Out</option>
                 <option value="LATE">Late Returns</option>
              </select>
              <div className="relative w-full sm:w-64">
                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]" size={16} />
                 <input 
                    type="text" 
                    placeholder="Search student or pass ID..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-[var(--bg-input)] border border-[var(--border)] rounded-lg pl-9 pr-4 py-2 text-sm focus:border-indigo-500 outline-none transition-colors"
                 />
              </div>
           </div>
        </div>
      </div>

      {/* Grid of Gate Passes */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 pb-6">
        {filteredPasses.map(pass => (
          <div key={pass.id} className={`bg-[var(--bg-card)] border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all group flex flex-col relative ${
             pass.status === 'LATE' ? 'border-rose-500/50' : 'border-[var(--border)] hover:border-indigo-500/30'
          }`}>
            
            {/* Header Section */}
            <div className={`p-5 border-b border-[var(--border)] ${pass.status === 'LATE' ? 'bg-[rgba(244,63,94,0.05)]' : 'bg-[rgba(99,102,241,0.03)]'}`}>
               <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-3">
                     <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border font-bold text-lg ${
                        pass.status === 'LATE' ? 'bg-rose-500/10 text-rose-600 border-rose-500/20' : 'bg-indigo-500/10 text-indigo-600 border-indigo-500/20'
                     }`}>
                        {pass.studentName.charAt(0)}
                     </div>
                     <div>
                        <h3 className="font-bold text-[16px] text-[var(--text-primary)] leading-tight">{pass.studentName}</h3>
                        <p className="text-xs text-[var(--text-secondary)] mt-0.5">{pass.studentId} &bull; Room {pass.roomNumber}</p>
                     </div>
                  </div>
                  <span className="text-[10px] font-bold text-[var(--text-secondary)] bg-[var(--bg-input)] px-2 py-1 rounded border border-[var(--border)]">
                     {pass.id}
                  </span>
               </div>
               <div className="flex items-center gap-2 justify-between">
                  {getStatusBadge(pass.status)}
                  {pass.isOvernight && (
                     <span className="flex items-center gap-1 text-[10px] font-bold text-purple-600 uppercase bg-purple-500/10 px-2 py-1 rounded">
                        <Moon size={10} /> Overnight
                     </span>
                  )}
               </div>
            </div>

            {/* Details Section */}
            <div className="p-5 flex flex-col gap-4 flex-1">
               
               {/* Outing Type & Reason */}
               <div className="bg-[var(--bg-input)] p-3 rounded-lg border border-[var(--border)]">
                  <div className="flex justify-between items-start mb-1.5">
                     <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400">{pass.outingType}</span>
                     {pass.guardianApprovalRequired && (
                        <span className="flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider text-amber-600">
                           <ShieldAlert size={10}/> Parent Ack Req
                        </span>
                     )}
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-snug italic">"{pass.reason}"</p>
               </div>

               {/* Time Tracking */}
               <div className="grid grid-cols-2 gap-3 relative before:absolute before:left-1/2 before:-translate-x-1/2 before:w-px before:h-full before:bg-[var(--border)]">
                  <div className="flex flex-col gap-2">
                     <div className="flex flex-col">
                        <span className="text-[10px] uppercase font-bold text-[var(--text-secondary)] mb-0.5">Exit Time (Req)</span>
                        <span className="text-xs font-semibold text-[var(--text-primary)]">{new Date(pass.requestedExitTime).toLocaleString('en-GB', {day:'2-digit', month:'short', hour:'2-digit', minute:'2-digit'})}</span>
                     </div>
                     {pass.actualExitTime && (
                        <div className="flex flex-col">
                           <span className="text-[10px] uppercase font-bold text-teal-600/80 mb-0.5">Actual Exit (Gate)</span>
                           <span className="text-xs font-bold text-teal-700 dark:text-teal-400">{new Date(pass.actualExitTime).toLocaleString('en-GB', {day:'2-digit', month:'short', hour:'2-digit', minute:'2-digit'})}</span>
                        </div>
                     )}
                  </div>
                  
                  <div className="flex flex-col gap-2 pl-2">
                     <div className="flex flex-col">
                        <span className="text-[10px] uppercase font-bold text-[var(--text-secondary)] mb-0.5">Return Time (Exp)</span>
                        <span className="text-xs font-semibold text-[var(--text-primary)]">{new Date(pass.expectedReturnTime).toLocaleString('en-GB', {day:'2-digit', month:'short', hour:'2-digit', minute:'2-digit'})}</span>
                     </div>
                     {pass.actualReturnTime && (
                        <div className="flex flex-col">
                           <span className={`text-[10px] uppercase font-bold mb-0.5 ${pass.status === 'LATE' ? 'text-rose-600/80' : 'text-emerald-600/80'}`}>Actual Return (Gate)</span>
                           <span className={`text-xs font-bold ${pass.status === 'LATE' ? 'text-rose-600' : 'text-emerald-700 dark:text-emerald-400'}`}>{new Date(pass.actualReturnTime).toLocaleString('en-GB', {day:'2-digit', month:'short', hour:'2-digit', minute:'2-digit'})}</span>
                        </div>
                     )}
                  </div>
               </div>
            </div>

            {/* Action Bar */}
            <div className="px-5 py-3 border-t border-[var(--border)] bg-[var(--bg-card)] flex flex-wrap gap-2">
               {pass.status === 'PENDING_WARDEN' && (
                  <>
                     <button className="flex-1 py-1.5 text-xs font-bold text-red-600 border border-red-500/30 bg-red-500/5 rounded hover:bg-red-500 hover:text-white transition-colors">Reject</button>
                     <button className="flex-1 py-1.5 text-xs font-bold text-emerald-600 border border-emerald-500/30 bg-emerald-500/5 rounded hover:bg-emerald-500 hover:text-white transition-colors">Approve Pass</button>
                  </>
               )}
               {pass.status === 'ACTIVE_OUT' && (
                  <button className="w-full py-1.5 text-xs font-bold text-amber-600 border border-amber-500/30 bg-amber-500/5 rounded hover:bg-amber-500/10 transition-colors flex items-center justify-center gap-1">
                     <AlertTriangle size={14} /> Send Reminder Alert
                  </button>
               )}
               {pass.status === 'LATE' && (
                  <button className="w-full py-1.5 text-xs font-bold text-rose-600 border border-rose-500/50 bg-rose-500/10 rounded hover:bg-rose-500 hover:text-white transition-colors flex items-center justify-center gap-1">
                     <AlertTriangle size={14} /> Escalate to Guardian
                  </button>
               )}
            </div>

          </div>
        ))}

        {filteredPasses.length === 0 && (
          <div className="col-span-full py-12 flex flex-col items-center justify-center text-[var(--text-secondary)] border-2 border-dashed border-[var(--border)] rounded-xl bg-[var(--bg-card)]">
            <LogOut size={48} className="opacity-20 mb-4" />
            <p className="font-medium text-lg">No gate passes found</p>
            <p className="text-sm opacity-70">Try adjusting your filter or search</p>
          </div>
        )}
      </div>

    </div>
  );
}
