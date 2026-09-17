"use client";

import React, { useState } from 'react';
import { 
  UserCheck, Search, Filter, History, MapPin, 
  CalendarDays, Bed, User, Users, ShieldAlert,
  ArrowRight, Download, Eye, FileText
} from 'lucide-react';
import { MOCK_ALLOCATIONS } from '../allocation_constants/allocation.constants';
import type { StudentAllocation } from '../allocation_types/allocation.types';

export default function StudentAllocationMain() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAllocation, setSelectedAllocation] = useState<StudentAllocation | null>(null);

  const filteredAllocations = MOCK_ALLOCATIONS.filter(a => 
    a.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    a.studentId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    a.hostelName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'ACTIVE': return <span className="px-2.5 py-1 bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 rounded-full text-[10px] font-bold uppercase tracking-wider">Active</span>;
      case 'VACATED': return <span className="px-2.5 py-1 bg-slate-500/10 text-slate-600 border border-slate-500/20 rounded-full text-[10px] font-bold uppercase tracking-wider">Vacated</span>;
      case 'SUSPENDED': return <span className="px-2.5 py-1 bg-red-500/10 text-red-600 border border-red-500/20 rounded-full text-[10px] font-bold uppercase tracking-wider">Suspended</span>;
      default: return null;
    }
  };

  return (
    <div className="flex flex-col w-full h-full space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-[var(--bg-card)] p-4 rounded-xl border border-[var(--border)] shrink-0 shadow-sm">
        <div>
          <h1 className="text-[22px] font-bold text-[var(--text-primary)] flex items-center gap-2">
            <UserCheck className="text-teal-500" size={24} /> Student Allocation
          </h1>
          <p className="text-[14px] text-[var(--text-secondary)] mt-1">
            Manage student room assignments, history, and guardian records.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
           <div className="flex gap-2">
              <button className="flex items-center justify-center p-2 border border-[var(--border)] text-[var(--text-secondary)] hover:bg-[var(--bg-input)] rounded-lg transition-colors bg-[var(--bg-card)]" title="Filter Allocations">
                 <Filter size={18} />
              </button>
              <div className="relative w-full sm:w-64">
                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]" size={16} />
                 <input 
                    type="text" 
                    placeholder="Search student, ID, hostel..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-[var(--bg-input)] border border-[var(--border)] rounded-lg pl-9 pr-4 py-2 text-sm focus:border-[var(--primary)] outline-none transition-colors"
                 />
              </div>
           </div>
           <button className="flex items-center justify-center gap-2 px-4 py-2 bg-teal-600 text-white text-sm font-bold rounded-lg shadow-sm hover:bg-teal-700 transition-colors shrink-0">
              <Download size={16} /> Export
           </button>
        </div>
      </div>

      {/* Allocations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 pb-6">
        {filteredAllocations.map(allocation => (
          <div key={allocation.id} className={`bg-[var(--bg-card)] border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all group flex flex-col relative ${
             allocation.status === 'VACATED' ? 'border-[var(--border)] opacity-80 grayscale-[20%]' : 'border-[var(--border)] hover:border-teal-500/30'
          }`}>
            
            {/* Action Buttons */}
            <div className="absolute top-4 right-4 flex items-center gap-2">
               <button onClick={() => setSelectedAllocation(allocation)} className="w-8 h-8 rounded-full bg-[var(--bg-input)] border border-[var(--border)] text-[var(--text-secondary)] flex items-center justify-center hover:bg-teal-500 hover:text-white hover:border-teal-500 transition-colors" title="View History">
                 <History size={14} />
               </button>
               {allocation.status === 'ACTIVE' && (
                 <button className="w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-colors" title="Re-allocate / Move">
                   <ArrowRight size={14} />
                 </button>
               )}
            </div>
            
            {/* Student Profile Header */}
            <div className="p-5 border-b border-[var(--border)] bg-[rgba(20,184,166,0.03)]">
               <div className="flex items-center gap-4 mb-3">
                 <div className="w-14 h-14 rounded-full bg-teal-500/10 text-teal-600 flex items-center justify-center shrink-0 border border-teal-500/20 font-bold text-xl">
                   {allocation.studentName.charAt(0)}
                 </div>
                 <div>
                   <div className="flex items-center gap-2 mb-1">
                     <span className="font-bold text-[18px] text-[var(--text-primary)] leading-tight truncate max-w-[150px]">{allocation.studentName}</span>
                   </div>
                   <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-[var(--text-secondary)]">{allocation.studentId}</span>
                      <span className="text-[10px] bg-[var(--bg-input)] px-2 py-0.5 rounded border border-[var(--border)] text-[var(--text-secondary)]">{allocation.class}</span>
                   </div>
                 </div>
               </div>
               <div className="mt-2">
                 {getStatusBadge(allocation.status)}
               </div>
            </div>

            {/* Allocation Details */}
            <div className="p-5 flex flex-col gap-4 flex-1">
               
               {/* Location Box */}
               <div className="bg-[var(--bg-input)] p-3 rounded-lg border border-[var(--border)] relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-teal-500"></div>
                  <span className="text-[10px] uppercase font-bold text-[var(--text-secondary)] flex items-center gap-1 mb-1.5"><MapPin size={12}/> Current Assignment</span>
                  <p className="font-bold text-sm text-[var(--text-primary)] leading-snug">{allocation.hostelName}</p>
                  <p className="text-xs text-[var(--text-secondary)] mt-0.5">{allocation.building} &bull; {allocation.floor}</p>
                  <div className="flex items-center gap-3 mt-2 pt-2 border-t border-[var(--border)]">
                     <span className="text-xs font-bold text-teal-700 dark:text-teal-400 bg-teal-500/10 px-2 py-1 rounded">Room {allocation.roomNumber}</span>
                     <span className="text-xs font-bold text-teal-700 dark:text-teal-400 bg-teal-500/10 px-2 py-1 rounded">{allocation.bedNumber}</span>
                  </div>
               </div>

               {/* Dates Grid */}
               <div className="grid grid-cols-2 gap-3">
                  <div className="flex flex-col gap-1">
                     <span className="text-[10px] uppercase font-bold text-[var(--text-secondary)] flex items-center gap-1"><CalendarDays size={10}/> Allocated</span>
                     <span className="text-xs font-semibold text-[var(--text-primary)]">{new Date(allocation.allocationDate).toLocaleDateString('en-GB')}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                     <span className="text-[10px] uppercase font-bold text-[var(--text-secondary)] flex items-center gap-1"><UserCheck size={10}/> Joined</span>
                     <span className="text-xs font-semibold text-[var(--text-primary)]">{new Date(allocation.joiningDate).toLocaleDateString('en-GB')}</span>
                  </div>
               </div>

               {/* Guardian Details */}
               <div className="mt-2 flex flex-col gap-1">
                  <span className="text-[10px] uppercase font-bold text-[var(--text-secondary)] flex items-center gap-1"><Users size={10}/> Guardian Contact</span>
                  <div className="flex justify-between items-center text-xs">
                     <span className="font-medium text-[var(--text-primary)]">{allocation.guardianName}</span>
                     <span className="text-[var(--text-secondary)]">{allocation.guardianContact}</span>
                  </div>
               </div>

            </div>

          </div>
        ))}

        {filteredAllocations.length === 0 && (
          <div className="col-span-full py-12 flex flex-col items-center justify-center text-[var(--text-secondary)] border-2 border-dashed border-[var(--border)] rounded-xl bg-[var(--bg-card)]">
            <UserCheck size={48} className="opacity-20 mb-4" />
            <p className="font-medium text-lg">No allocations found</p>
            <p className="text-sm opacity-70">Try adjusting your search criteria</p>
          </div>
        )}
      </div>

      {/* History Modal */}
      {selectedAllocation && (
         <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
            <div className="bg-[var(--bg-card)] w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
               
               {/* Modal Header */}
               <div className="p-5 border-b border-[var(--border)] flex justify-between items-center bg-teal-600 text-white">
                 <div className="flex items-center gap-3">
                    <History size={24} />
                    <h2 className="text-lg font-bold">Allocation History</h2>
                 </div>
                 <button onClick={() => setSelectedAllocation(null)} className="p-2 rounded-full hover:bg-white/20 transition-colors">
                    <X size={20} />
                 </button>
               </div>

               {/* Modal Body */}
               <div className="p-6 overflow-y-auto custom-scrollbar flex-1">
                  <div className="flex items-center gap-4 mb-8 bg-[var(--bg-input)] p-4 rounded-xl border border-[var(--border)]">
                     <div className="w-12 h-12 rounded-full bg-teal-500/10 text-teal-600 flex items-center justify-center font-bold text-lg">
                       {selectedAllocation.studentName.charAt(0)}
                     </div>
                     <div>
                        <h3 className="font-bold text-[var(--text-primary)] text-lg">{selectedAllocation.studentName}</h3>
                        <p className="text-sm text-[var(--text-secondary)]">{selectedAllocation.studentId} &bull; {selectedAllocation.class}</p>
                     </div>
                  </div>

                  <h4 className="text-sm font-bold text-[var(--text-primary)] uppercase tracking-wider mb-6">Timeline</h4>
                  
                  <div className="relative pl-6 space-y-6 before:absolute before:inset-0 before:ml-[11px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-teal-500 before:to-[var(--border)]">
                     {selectedAllocation.history.map((record, index) => (
                        <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                           <div className="flex items-center justify-center w-6 h-6 rounded-full border-4 border-[var(--bg-card)] bg-teal-500 absolute left-[-29px] md:left-1/2 md:-translate-x-1/2 shrink-0"></div>
                           <div className="w-full md:w-[calc(50%-2rem)] p-4 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] shadow-sm hover:border-teal-500/30 transition-colors">
                              <div className="flex items-center justify-between mb-1">
                                 <h5 className="font-bold text-sm text-[var(--text-primary)]">{record.action}</h5>
                                 <span className="text-[10px] font-bold text-[var(--text-secondary)] bg-[var(--bg-input)] px-2 py-1 rounded">{new Date(record.date).toLocaleDateString('en-GB')}</span>
                              </div>
                              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{record.details}</p>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      )}

    </div>
  );
}

// X icon workaround for missing import above (if lucide fails to load X, using basic SVG)
function X(props: any) {
  return <svg xmlns="http://www.w3.org/2000/svg" width={props.size||24} height={props.size||24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>;
}
