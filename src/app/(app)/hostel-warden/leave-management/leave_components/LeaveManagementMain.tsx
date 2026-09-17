"use client";

import React, { useState } from 'react';
import { 
  CalendarMinus, Search, Filter, Clock, 
  CheckCircle2, XCircle, Plus, User, FileText, 
  UserCheck, ShieldCheck
} from 'lucide-react';
import { MOCK_LEAVES } from '../leave_constants/leave.constants';
import type { LeaveRequest, LeaveStatus, LeaveRoleContext } from '../leave_types/leave.types';

export default function LeaveManagementMain() {
  const [activeTab, setActiveTab] = useState<LeaveRoleContext>('STAFF_REQUEST');
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');

  const filteredLeaves = MOCK_LEAVES.filter(leave => {
    const matchesTab = leave.context === activeTab;
    const matchesSearch = leave.applicantName.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          leave.applicantRole.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (statusFilter === 'ALL') return matchesTab && matchesSearch;
    return matchesTab && matchesSearch && leave.status === statusFilter;
  });

  const getStatusBadge = (status: LeaveStatus) => {
    switch(status) {
      case 'PENDING': return <span className="px-2.5 py-1 bg-amber-500/10 text-amber-600 border border-amber-500/20 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 w-fit"><Clock size={10}/> Pending</span>;
      case 'APPROVED': return <span className="px-2.5 py-1 bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 w-fit"><CheckCircle2 size={10}/> Approved</span>;
      case 'REJECTED': return <span className="px-2.5 py-1 bg-red-500/10 text-red-600 border border-red-500/20 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 w-fit"><XCircle size={10}/> Rejected</span>;
      default: return null;
    }
  };

  const calculateDays = (start: string, end: string) => {
    const s = new Date(start);
    const e = new Date(end);
    const diffTime = Math.abs(e.getTime() - s.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1; 
    return diffDays;
  };

  return (
    <div className="flex flex-col w-full h-full space-y-6">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-[var(--bg-card)] p-4 rounded-xl border border-[var(--border)] shrink-0 shadow-sm">
        <div>
          <h1 className="text-[22px] font-bold text-[var(--text-primary)] flex items-center gap-2">
            <CalendarMinus className="text-violet-500" size={24} /> Leave Management
          </h1>
          <p className="text-[14px] text-[var(--text-secondary)] mt-1">
            Apply for your own leaves (Warden) and approve/reject staff leaves.
          </p>
        </div>
        
        {/* Navigation Tabs */}
        <div className="flex bg-[var(--bg-input)] p-1 rounded-lg border border-[var(--border)] w-full md:w-auto">
           <button 
              onClick={() => setActiveTab('STAFF_REQUEST')}
              className={`flex-1 md:flex-none px-4 py-2 text-xs font-bold rounded-md transition-colors flex items-center justify-center gap-2 ${activeTab === 'STAFF_REQUEST' ? 'bg-[var(--bg-card)] text-violet-600 shadow-sm' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}`}
           >
              <UserCheck size={14} /> Staff Leave Requests
           </button>
           <button 
              onClick={() => setActiveTab('WARDEN_SELF')}
              className={`flex-1 md:flex-none px-4 py-2 text-xs font-bold rounded-md transition-colors flex items-center justify-center gap-2 ${activeTab === 'WARDEN_SELF' ? 'bg-[var(--bg-card)] text-violet-600 shadow-sm' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}`}
           >
              <ShieldCheck size={14} /> My Leaves (Warden)
           </button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 bg-[var(--bg-card)] p-4 rounded-xl border border-[var(--border)] shadow-sm">
         <select 
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="bg-[var(--bg-input)] border border-[var(--border)] rounded-lg px-3 py-2 text-sm text-[var(--text-primary)] focus:border-violet-500 outline-none w-full sm:w-48"
         >
            <option value="ALL">All Statuses</option>
            <option value="PENDING">Pending</option>
            <option value="APPROVED">Approved</option>
            <option value="REJECTED">Rejected</option>
         </select>
         
         <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]" size={16} />
            <input 
               type="text" 
               placeholder="Search by name..." 
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}
               className="w-full bg-[var(--bg-input)] border border-[var(--border)] rounded-lg pl-9 pr-4 py-2 text-sm focus:border-violet-500 outline-none transition-colors"
            />
         </div>
         
         {activeTab === 'WARDEN_SELF' && (
            <button className="flex items-center justify-center gap-2 px-4 py-2 bg-violet-600 text-white text-sm font-bold rounded-lg shadow-sm hover:bg-violet-700 transition-colors w-full sm:w-auto shrink-0">
               <Plus size={16} /> Apply Leave
            </button>
         )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pb-6">
         {filteredLeaves.map(leave => (
            <div key={leave.id} className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl overflow-hidden shadow-sm flex flex-col hover:border-violet-500/30 transition-all">
               
               <div className="p-5 flex flex-col sm:flex-row gap-6">
                  
                  <div className="flex-1">
                     <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center gap-3">
                           <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold shrink-0 ${
                              activeTab === 'WARDEN_SELF' ? 'bg-violet-500/10 text-violet-600 border border-violet-500/20' : 'bg-slate-500/10 text-[var(--text-primary)] border border-slate-500/20'
                           }`}>
                              {leave.applicantName.charAt(0)}
                           </div>
                           <div>
                              <h3 className="font-bold text-[16px] text-[var(--text-primary)] leading-tight">{leave.applicantName}</h3>
                              <p className="text-xs font-semibold text-[var(--text-secondary)]">{leave.applicantRole}</p>
                           </div>
                        </div>
                     </div>
                     
                     <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs font-bold text-violet-600 bg-violet-500/10 px-2 py-0.5 rounded border border-violet-500/20">
                           {leave.leaveType}
                        </span>
                        <span className="text-[10px] text-[var(--text-secondary)]">
                           Applied: {new Date(leave.appliedOn).toLocaleDateString('en-GB')}
                        </span>
                     </div>

                     <div className="bg-[var(--bg-input)] p-3 rounded-lg border border-[var(--border)] mb-4">
                        <span className="text-[10px] uppercase font-bold text-[var(--text-secondary)] block mb-1">Duration</span>
                        <div className="flex items-center gap-2 text-sm font-bold text-[var(--text-primary)]">
                           <span>{new Date(leave.startDate).toLocaleDateString('en-GB')}</span>
                           <span className="text-[var(--text-secondary)]">→</span>
                           <span>{new Date(leave.endDate).toLocaleDateString('en-GB')}</span>
                           <span className="ml-2 text-xs font-semibold text-violet-600 bg-violet-500/10 px-1.5 py-0.5 rounded">
                              {calculateDays(leave.startDate, leave.endDate)} Day{calculateDays(leave.startDate, leave.endDate) > 1 ? 's' : ''}
                           </span>
                        </div>
                     </div>

                     <div className="mb-4">
                        <span className="text-[10px] uppercase font-bold text-[var(--text-secondary)] block mb-1">Reason</span>
                        <p className="text-sm text-[var(--text-primary)] leading-snug italic">"{leave.reason}"</p>
                     </div>
                  </div>

                  <div className="sm:w-48 shrink-0 flex flex-col justify-between border-t sm:border-t-0 sm:border-l border-[var(--border)] pt-4 sm:pt-0 sm:pl-4">
                     <div>
                        <div className="mb-4">
                           {getStatusBadge(leave.status)}
                        </div>
                        
                        {leave.status !== 'PENDING' && (
                           <div>
                              <span className="text-[10px] uppercase font-bold text-[var(--text-secondary)] block mb-1">Reviewed By</span>
                              <p className="text-sm font-bold text-[var(--text-primary)]">{leave.reviewedBy}</p>
                              {leave.remarks && (
                                 <p className="text-xs text-[var(--text-secondary)] italic mt-1 line-clamp-3">"{leave.remarks}"</p>
                              )}
                           </div>
                        )}
                     </div>
                     
                     {activeTab === 'STAFF_REQUEST' && leave.status === 'PENDING' && (
                        <div className="mt-6 flex flex-col gap-2 w-full">
                           <button className="w-full py-1.5 text-xs font-bold text-emerald-600 bg-emerald-500/10 border border-emerald-500/20 hover:bg-emerald-500 hover:text-white rounded transition-colors">
                              Approve
                           </button>
                           <button className="w-full py-1.5 text-xs font-bold text-red-600 bg-red-500/10 border border-red-500/20 hover:bg-red-500 hover:text-white rounded transition-colors">
                              Reject
                           </button>
                        </div>
                     )}
                     
                     {activeTab === 'WARDEN_SELF' && leave.status === 'PENDING' && (
                        <button className="mt-6 w-full py-1.5 text-xs font-bold text-[var(--text-secondary)] bg-[var(--bg-input)] border border-[var(--border)] hover:bg-rose-500 hover:text-white hover:border-rose-500 rounded transition-colors flex items-center justify-center gap-1">
                           <XCircle size={14}/> Withdraw
                        </button>
                     )}
                  </div>

               </div>
            </div>
         ))}

         {filteredLeaves.length === 0 && (
            <div className="col-span-full py-16 flex flex-col items-center justify-center text-[var(--text-secondary)] border-2 border-dashed border-[var(--border)] rounded-xl bg-[var(--bg-card)]">
               <CalendarMinus size={48} className="opacity-20 mb-4" />
               <p className="font-medium text-lg">No leave records found</p>
            </div>
         )}
      </div>

    </div>
  );
}
