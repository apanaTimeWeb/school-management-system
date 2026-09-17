"use client";

import React, { useState } from 'react';
import { 
  Users, Search, Filter, LogIn, LogOut, 
  UserPlus, UserCheck, ShieldCheck, MapPin, Clock, IdCard
} from 'lucide-react';
import { MOCK_VISITORS } from '../visitor_constants/visitor.constants';
import type { VisitorRecord, VisitorStatus } from '../visitor_types/visitor.types';

export default function VisitorManagementMain() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');

  const filteredVisitors = MOCK_VISITORS.filter(v => {
    const matchesSearch = v.visitorName.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          v.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          v.id.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (statusFilter === 'ALL') return matchesSearch;
    return matchesSearch && v.status === statusFilter;
  });

  const getStatusBadge = (status: VisitorStatus) => {
    switch(status) {
      case 'CHECKED_IN': return <span className="px-2.5 py-1 bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 w-fit"><LogIn size={10}/> Checked In</span>;
      case 'CHECKED_OUT': return <span className="px-2.5 py-1 bg-slate-500/10 text-slate-600 border border-slate-500/20 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 w-fit"><LogOut size={10}/> Checked Out</span>;
      default: return null;
    }
  };

  return (
    <div className="flex flex-col w-full h-full space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-[var(--bg-card)] p-4 rounded-xl border border-[var(--border)] shrink-0 shadow-sm">
        <div>
          <h1 className="text-[22px] font-bold text-[var(--text-primary)] flex items-center gap-2">
            <Users className="text-teal-500" size={24} /> Visitor Management
          </h1>
          <p className="text-[14px] text-[var(--text-secondary)] mt-1">
            Track hostel visitors, guardian relationships, and manage gate entry/exit.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
           <button className="flex items-center justify-center gap-2 px-4 py-2 bg-teal-600 text-white text-sm font-bold rounded-lg shadow-sm hover:bg-teal-700 transition-colors shrink-0">
              <UserPlus size={16} /> New Visitor Entry
           </button>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="flex flex-col sm:flex-row gap-4 bg-[var(--bg-card)] p-4 rounded-xl border border-[var(--border)] shadow-sm">
         <select 
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="bg-[var(--bg-input)] border border-[var(--border)] rounded-lg px-3 py-2 text-sm text-[var(--text-primary)] focus:border-teal-500 outline-none w-full sm:w-48"
         >
            <option value="ALL">All Visitors</option>
            <option value="CHECKED_IN">Currently Inside</option>
            <option value="CHECKED_OUT">Checked Out</option>
         </select>
         
         <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]" size={16} />
            <input 
               type="text" 
               placeholder="Search by visitor name, student name, or ID..." 
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}
               className="w-full bg-[var(--bg-input)] border border-[var(--border)] rounded-lg pl-9 pr-4 py-2 text-sm focus:border-teal-500 outline-none transition-colors"
            />
         </div>
      </div>

      {/* Grid of Visitors */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pb-6">
         {filteredVisitors.map(visitor => (
            <div key={visitor.id} className={`bg-[var(--bg-card)] border border-[var(--border)] rounded-xl overflow-hidden shadow-sm flex flex-col hover:shadow-md transition-all ${
               visitor.status === 'CHECKED_OUT' ? 'opacity-70 grayscale-[30%]' : 'hover:border-teal-500/30'
            }`}>
               
               {/* Body */}
               <div className="p-5 flex flex-col sm:flex-row gap-6">
                  
                  {/* Visitor Info */}
                  <div className="flex-1">
                     <div className="flex justify-between items-start mb-3">
                        <div className="flex items-center gap-3">
                           <div className="w-12 h-12 rounded-xl bg-[var(--bg-input)] border border-[var(--border)] flex items-center justify-center shrink-0">
                              <Users size={20} className="text-teal-600" />
                           </div>
                           <div>
                              <h3 className="font-bold text-lg text-[var(--text-primary)] leading-tight">{visitor.visitorName}</h3>
                              <p className="text-xs font-semibold text-teal-600 bg-teal-500/10 px-2 py-0.5 rounded border border-teal-500/20 w-fit mt-1">
                                 Relation: {visitor.relation}
                              </p>
                           </div>
                        </div>
                     </div>
                     
                     <div className="bg-[var(--bg-input)] p-3 rounded-lg border border-[var(--border)] mb-4">
                        <span className="text-[10px] uppercase font-bold text-[var(--text-secondary)] block mb-1">Visiting Student</span>
                        <div className="flex items-center justify-between">
                           <div>
                              <p className="font-bold text-sm text-[var(--text-primary)]">{visitor.studentName}</p>
                              <p className="text-xs text-[var(--text-secondary)]">{visitor.studentId}</p>
                           </div>
                           <div className="flex items-center gap-1.5 text-xs text-indigo-600 bg-indigo-500/10 px-2 py-1 rounded-lg border border-indigo-500/20">
                              <MapPin size={12} /> Room {visitor.roomNumber}
                           </div>
                        </div>
                     </div>

                     <div className="mb-4">
                        <span className="text-[10px] uppercase font-bold text-[var(--text-secondary)] block mb-1">Purpose of Visit</span>
                        <p className="text-sm text-[var(--text-primary)] leading-snug italic">"{visitor.purpose}"</p>
                     </div>

                     <div className="flex items-center gap-2 text-xs text-[var(--text-secondary)]">
                        <IdCard size={14} />
                        <span>ID Proof: <span className="font-semibold text-[var(--text-primary)]">{visitor.idProofType} ({visitor.idProofNumber})</span></span>
                     </div>
                  </div>

                  {/* Right Panel: Time & Action */}
                  <div className="sm:w-48 shrink-0 flex flex-col justify-between border-t sm:border-t-0 sm:border-l border-[var(--border)] pt-4 sm:pt-0 sm:pl-4">
                     <div>
                        <div className="mb-4">
                           {getStatusBadge(visitor.status)}
                        </div>
                        <div className="flex flex-col gap-3">
                           <div>
                              <span className="text-[10px] uppercase font-bold text-[var(--text-secondary)] flex items-center gap-1 mb-0.5"><LogIn size={10} /> Check-In</span>
                              <span className="font-semibold text-sm text-[var(--text-primary)]">{new Date(visitor.checkInTime).toLocaleString('en-GB', {day:'2-digit', month:'short', hour:'2-digit', minute:'2-digit'})}</span>
                           </div>
                           {visitor.checkOutTime && (
                              <div>
                                 <span className="text-[10px] uppercase font-bold text-[var(--text-secondary)] flex items-center gap-1 mb-0.5"><LogOut size={10} /> Check-Out</span>
                                 <span className="font-semibold text-sm text-[var(--text-primary)]">{new Date(visitor.checkOutTime).toLocaleString('en-GB', {day:'2-digit', month:'short', hour:'2-digit', minute:'2-digit'})}</span>
                              </div>
                           )}
                        </div>
                     </div>
                     
                     {visitor.status === 'CHECKED_IN' && (
                        <button className="mt-6 w-full py-2 bg-[var(--bg-input)] border border-[var(--border)] text-[var(--text-primary)] font-bold text-xs rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors flex items-center justify-center gap-2">
                           <LogOut size={14} /> Mark Check-Out
                        </button>
                     )}
                  </div>

               </div>
            </div>
         ))}

         {filteredVisitors.length === 0 && (
            <div className="col-span-full py-16 flex flex-col items-center justify-center text-[var(--text-secondary)] border-2 border-dashed border-[var(--border)] rounded-xl bg-[var(--bg-card)]">
               <Users size={48} className="opacity-20 mb-4" />
               <p className="font-medium text-lg">No visitor records found</p>
            </div>
         )}
      </div>

    </div>
  );
}
