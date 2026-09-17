"use client";

import React, { useState } from 'react';
import { 
  MessageSquare, Search, Filter, MessageCircle, 
  Utensils, Sparkles, AlertOctagon, Info, ShieldCheck,
  CheckCircle2, AlertTriangle, EyeOff, User, Clock, Reply
} from 'lucide-react';
import { MOCK_FEEDBACK } from '../feedback_constants/feedback.constants';
import type { HostelFeedback, FeedbackCategory, FeedbackStatus } from '../feedback_types/feedback.types';

export default function FeedbackMain() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');

  const filteredFeedback = MOCK_FEEDBACK.filter(fb => {
    const matchesSearch = fb.subject.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          fb.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (statusFilter === 'ALL') return matchesSearch;
    return matchesSearch && fb.status === statusFilter;
  });

  const getStatusBadge = (status: FeedbackStatus) => {
    switch(status) {
      case 'NEW': return <span className="px-2.5 py-1 bg-blue-500/10 text-blue-600 border border-blue-500/20 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 w-fit animate-pulse"><AlertTriangle size={10}/> New</span>;
      case 'REVIEWED': return <span className="px-2.5 py-1 bg-amber-500/10 text-amber-600 border border-amber-500/20 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 w-fit"><EyeOff size={10}/> Under Review</span>;
      case 'ACTION_TAKEN': return <span className="px-2.5 py-1 bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 w-fit"><CheckCircle2 size={10}/> Action Taken</span>;
      case 'CLOSED': return <span className="px-2.5 py-1 bg-slate-500/10 text-slate-600 border border-slate-500/20 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 w-fit"><CheckCircle2 size={10}/> Closed</span>;
      default: return null;
    }
  };

  const getCategoryIcon = (category: FeedbackCategory) => {
    switch(category) {
      case 'Food': return <Utensils size={18} className="text-orange-500" />;
      case 'Cleanliness': return <Sparkles size={18} className="text-emerald-500" />;
      case 'Discipline': return <AlertOctagon size={18} className="text-red-500" />;
      case 'Security': return <ShieldCheck size={18} className="text-blue-500" />;
      default: return <Info size={18} className="text-gray-500" />;
    }
  };

  return (
    <div className="flex flex-col w-full h-full space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-[var(--bg-card)] p-4 rounded-xl border border-[var(--border)] shrink-0 shadow-sm">
        <div>
          <h1 className="text-[22px] font-bold text-[var(--text-primary)] flex items-center gap-2">
            <MessageSquare className="text-pink-500" size={24} /> Feedback & Suggestions
          </h1>
          <p className="text-[14px] text-[var(--text-secondary)] mt-1">
            Review and respond to student feedback, complaints, and anonymous suggestions.
          </p>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="flex flex-col sm:flex-row gap-4 bg-[var(--bg-card)] p-4 rounded-xl border border-[var(--border)] shadow-sm">
         <select 
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="bg-[var(--bg-input)] border border-[var(--border)] rounded-lg px-3 py-2 text-sm text-[var(--text-primary)] focus:border-pink-500 outline-none w-full sm:w-48"
         >
            <option value="ALL">All Feedback</option>
            <option value="NEW">New (Unread)</option>
            <option value="REVIEWED">Under Review</option>
            <option value="ACTION_TAKEN">Action Taken</option>
            <option value="CLOSED">Closed</option>
         </select>
         
         <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]" size={16} />
            <input 
               type="text" 
               placeholder="Search by subject or description..." 
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}
               className="w-full bg-[var(--bg-input)] border border-[var(--border)] rounded-lg pl-9 pr-4 py-2 text-sm focus:border-pink-500 outline-none transition-colors"
            />
         </div>
      </div>

      {/* Grid of Feedback */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-6">
         {filteredFeedback.map(fb => (
            <div key={fb.id} className={`bg-[var(--bg-card)] border rounded-xl overflow-hidden shadow-sm flex flex-col hover:shadow-md transition-all ${
               fb.status === 'NEW' ? 'border-blue-500/30 shadow-blue-500/5' : 'border-[var(--border)] hover:border-pink-500/30'
            }`}>
               
               {/* Body */}
               <div className="p-5 flex flex-col sm:flex-row gap-6">
                  
                  <div className="flex-1">
                     <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center gap-3">
                           <div className="w-10 h-10 rounded-xl bg-[var(--bg-input)] border border-[var(--border)] flex items-center justify-center shrink-0">
                              {getCategoryIcon(fb.category)}
                           </div>
                           <div>
                              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-secondary)]">{fb.category}</span>
                              <h3 className="font-bold text-[16px] text-[var(--text-primary)] leading-tight">{fb.subject}</h3>
                           </div>
                        </div>
                     </div>
                     
                     <div className="mb-5">
                        <p className="text-sm text-[var(--text-primary)] leading-relaxed">"{fb.description}"</p>
                     </div>

                     <div className="flex items-center gap-4 text-xs">
                        <div className="flex items-center gap-1.5 text-[var(--text-secondary)]">
                           <Clock size={14} />
                           <span>{new Date(fb.dateSubmitted).toLocaleString('en-GB', {day:'2-digit', month:'short', hour:'2-digit', minute:'2-digit'})}</span>
                        </div>
                        
                        {fb.isAnonymous ? (
                           <div className="flex items-center gap-1.5 font-bold text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700">
                              <EyeOff size={12} /> Anonymous Submission
                           </div>
                        ) : (
                           <div className="flex items-center gap-1.5 font-bold text-indigo-600 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
                              <User size={12} /> {fb.studentName} (Room {fb.roomNumber})
                           </div>
                        )}
                     </div>
                  </div>

                  <div className="sm:w-56 shrink-0 flex flex-col border-t sm:border-t-0 sm:border-l border-[var(--border)] pt-4 sm:pt-0 sm:pl-4">
                     <div className="mb-4">
                        <span className="text-[10px] uppercase font-bold text-[var(--text-secondary)] block mb-1.5">Status</span>
                        {getStatusBadge(fb.status)}
                     </div>

                     {fb.wardenResponse ? (
                        <div className="bg-[var(--bg-input)] p-3 rounded-lg border border-[var(--border)] mt-auto">
                           <span className="text-[10px] uppercase font-bold text-[var(--text-secondary)] flex items-center gap-1 mb-1">
                              <Reply size={10} /> Warden Response
                           </span>
                           <p className="text-xs text-[var(--text-primary)] italic leading-snug">"{fb.wardenResponse}"</p>
                        </div>
                     ) : (
                        <button className="mt-auto w-full py-2 bg-pink-500/10 border border-pink-500/20 text-pink-600 font-bold text-xs rounded-lg hover:bg-pink-500 hover:text-white transition-colors flex items-center justify-center gap-1.5">
                           <MessageCircle size={14} /> Add Response
                        </button>
                     )}
                  </div>

               </div>
            </div>
         ))}

         {filteredFeedback.length === 0 && (
            <div className="col-span-full py-16 flex flex-col items-center justify-center text-[var(--text-secondary)] border-2 border-dashed border-[var(--border)] rounded-xl bg-[var(--bg-card)]">
               <MessageSquare size={48} className="opacity-20 mb-4" />
               <p className="font-medium text-lg">No feedback found</p>
            </div>
         )}
      </div>

    </div>
  );
}
