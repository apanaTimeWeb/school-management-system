"use client";

import React, { useState } from 'react';
import { 
  Gavel, Search, Filter, AlertOctagon, 
  Clock, ShieldAlert, PhoneForwarded, IndianRupee,
  CheckCircle2, Plus, UserX, MessageSquareWarning
} from 'lucide-react';
import { MOCK_DISCIPLINARY } from '../disciplinary_constants/disciplinary.constants';
import type { DisciplinaryRecord, DisciplinaryCategory, DisciplinaryAction } from '../disciplinary_types/disciplinary.types';

export default function DisciplinaryMain() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');

  const filteredRecords = MOCK_DISCIPLINARY.filter(record => {
    const matchesSearch = record.studentName.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          record.studentId.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          record.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (statusFilter === 'ALL') return matchesSearch;
    return matchesSearch && record.status === statusFilter;
  });

  const getCategoryBadge = (category: DisciplinaryCategory) => {
    switch(category) {
      case 'Ragging': return <span className="text-[10px] font-bold uppercase tracking-wider bg-red-500/10 text-red-600 border border-red-500/20 px-2 py-0.5 rounded flex items-center gap-1 w-fit"><AlertOctagon size={10} /> {category}</span>;
      case 'Late Entry': return <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-500/10 text-amber-600 border border-amber-500/20 px-2 py-0.5 rounded flex items-center gap-1 w-fit"><Clock size={10} /> {category}</span>;
      case 'Property Damage': return <span className="text-[10px] font-bold uppercase tracking-wider bg-orange-500/10 text-orange-600 border border-orange-500/20 px-2 py-0.5 rounded flex items-center gap-1 w-fit"><ShieldAlert size={10} /> {category}</span>;
      case 'Substance Abuse': return <span className="text-[10px] font-bold uppercase tracking-wider bg-purple-500/10 text-purple-600 border border-purple-500/20 px-2 py-0.5 rounded flex items-center gap-1 w-fit"><UserX size={10} /> {category}</span>;
      case 'Misbehavior': return <span className="text-[10px] font-bold uppercase tracking-wider bg-blue-500/10 text-blue-600 border border-blue-500/20 px-2 py-0.5 rounded flex items-center gap-1 w-fit"><MessageSquareWarning size={10} /> {category}</span>;
      default: return <span className="text-[10px] font-bold uppercase tracking-wider bg-gray-500/10 text-gray-600 border border-gray-500/20 px-2 py-0.5 rounded w-fit">{category}</span>;
    }
  };

  const getActionColor = (action: DisciplinaryAction) => {
    switch(action) {
      case 'Warning': return 'text-amber-600 bg-amber-500/10 border-amber-500/20';
      case 'Fine': return 'text-orange-600 bg-orange-500/10 border-orange-500/20';
      case 'Suspension': return 'text-rose-600 bg-rose-500/10 border-rose-500/20';
      case 'Expulsion': return 'text-red-700 bg-red-500/10 border-red-500/30 font-black';
      case 'Pending Decision': return 'text-slate-600 bg-slate-500/10 border-slate-500/20';
      default: return 'text-gray-600 bg-gray-500/10 border-gray-500/20';
    }
  };

  return (
    <div className="flex flex-col w-full h-full space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-[var(--bg-card)] p-4 rounded-xl border border-[var(--border)] shrink-0 shadow-sm">
        <div>
          <h1 className="text-[22px] font-bold text-[var(--text-primary)] flex items-center gap-2">
            <Gavel className="text-red-500" size={24} /> Disciplinary Actions
          </h1>
          <p className="text-[14px] text-[var(--text-secondary)] mt-1">
            Log incidents, track disciplinary measures, fines, and parent notifications.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
           <button className="flex items-center justify-center gap-2 px-4 py-2 bg-red-600 text-white text-sm font-bold rounded-lg shadow-sm hover:bg-red-700 transition-colors shrink-0">
              <Plus size={16} /> Log Incident
           </button>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="flex flex-col sm:flex-row gap-4 bg-[var(--bg-card)] p-4 rounded-xl border border-[var(--border)] shadow-sm">
         <select 
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="bg-[var(--bg-input)] border border-[var(--border)] rounded-lg px-3 py-2 text-sm text-[var(--text-primary)] focus:border-red-500 outline-none w-full sm:w-48"
         >
            <option value="ALL">All Cases</option>
            <option value="OPEN">Open / Pending</option>
            <option value="CLOSED">Closed Cases</option>
         </select>
         
         <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]" size={16} />
            <input 
               type="text" 
               placeholder="Search by student name, ID, or category..." 
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}
               className="w-full bg-[var(--bg-input)] border border-[var(--border)] rounded-lg pl-9 pr-4 py-2 text-sm focus:border-red-500 outline-none transition-colors"
            />
         </div>
      </div>

      {/* Grid of Incidents */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pb-6">
         {filteredRecords.map(record => (
            <div key={record.id} className={`bg-[var(--bg-card)] border rounded-xl overflow-hidden shadow-sm flex flex-col hover:shadow-md transition-all ${
               record.status === 'CLOSED' ? 'border-[var(--border)] opacity-90' : 'border-red-500/30 shadow-red-500/5'
            }`}>
               
               {/* Card Header */}
               <div className={`p-4 border-b border-[var(--border)] flex justify-between items-start ${
                  record.status === 'OPEN' ? 'bg-red-500/5' : 'bg-[var(--bg-input)]'
               }`}>
                  <div className="flex items-center gap-3">
                     <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ${
                        record.status === 'OPEN' ? 'bg-red-500/10 text-red-600 border-red-500/20' : 'bg-[var(--bg-card)] text-[var(--text-primary)] border-[var(--border)]'
                     }`}>
                        <Gavel size={18} />
                     </div>
                     <div>
                        <h3 className="font-bold text-[16px] text-[var(--text-primary)] leading-tight">{record.studentName}</h3>
                        <p className="text-xs text-[var(--text-secondary)] mt-0.5">{record.studentId} &bull; Room {record.roomNumber}</p>
                     </div>
                  </div>
                  <div className="text-right">
                     <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded border ${
                        record.status === 'OPEN' ? 'bg-red-500/10 text-red-600 border-red-500/20' : 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20'
                     }`}>
                        {record.status}
                     </span>
                     <p className="text-[10px] text-[var(--text-secondary)] mt-1">{new Date(record.incidentDate).toLocaleDateString('en-GB')}</p>
                  </div>
               </div>

               {/* Card Body */}
               <div className="p-5 flex flex-col gap-4 flex-1">
                  
                  {/* Category & Description */}
                  <div>
                     <div className="mb-2">{getCategoryBadge(record.category)}</div>
                     <p className="text-sm text-[var(--text-primary)] leading-snug">"{record.description}"</p>
                  </div>

                  {/* Action Taken */}
                  <div className="bg-[var(--bg-input)] p-3 rounded-lg border border-[var(--border)] mt-auto">
                     <span className="text-[10px] uppercase font-bold text-[var(--text-secondary)] block mb-1">Action Taken</span>
                     <div className="flex items-center gap-3">
                        <span className={`text-xs font-bold uppercase tracking-wider px-2 py-1 rounded border ${getActionColor(record.actionTaken)}`}>
                           {record.actionTaken}
                        </span>
                        {record.fineAmount && (
                           <span className="text-xs font-bold text-orange-600 bg-orange-500/10 px-2 py-1 rounded border border-orange-500/20 flex items-center gap-0.5">
                              <IndianRupee size={12}/> {record.fineAmount} Fine
                           </span>
                        )}
                     </div>
                     <div className="mt-2 pt-2 border-t border-[var(--border)]">
                        <span className="text-[10px] uppercase font-bold text-[var(--text-secondary)] block mb-1">Warden's Remarks</span>
                        <p className="text-xs text-[var(--text-secondary)] italic">"{record.wardenRemarks}"</p>
                     </div>
                  </div>
               </div>

               {/* Footer */}
               <div className="px-5 py-3 border-t border-[var(--border)] bg-[var(--bg-card)] flex justify-between items-center">
                  <div className="flex items-center gap-2">
                     <span className="text-xs font-bold text-[var(--text-secondary)]">Parent Notified:</span>
                     {record.parentNotified ? (
                        <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-600 uppercase bg-emerald-500/10 px-2 py-0.5 rounded">
                           <CheckCircle2 size={10} /> Yes
                        </span>
                     ) : (
                        <button className="flex items-center gap-1 text-[10px] font-bold text-red-600 uppercase bg-red-500/10 border border-red-500/30 hover:bg-red-500 hover:text-white px-2 py-0.5 rounded transition-colors">
                           <PhoneForwarded size={10} /> Notify Now
                        </button>
                     )}
                  </div>
                  
                  {record.status === 'OPEN' && (
                     <button className="text-xs font-bold text-indigo-600 hover:underline">
                        Update Case
                     </button>
                  )}
               </div>

            </div>
         ))}

         {filteredRecords.length === 0 && (
            <div className="col-span-full py-16 flex flex-col items-center justify-center text-[var(--text-secondary)] border-2 border-dashed border-[var(--border)] rounded-xl bg-[var(--bg-card)]">
               <Gavel size={48} className="opacity-20 mb-4" />
               <p className="font-medium text-lg">No disciplinary records found</p>
            </div>
         )}
      </div>

    </div>
  );
}
