"use client";

import React, { useState } from 'react';
import { 
  PartyPopper, Search, Filter, CalendarDays, 
  MapPin, Clock, Users, IndianRupee, Plus, 
  CheckCircle2, AlertTriangle, Music, Trophy, Sparkles
} from 'lucide-react';
import { MOCK_EVENTS } from '../events_constants/events.constants';
import type { HostelEvent, EventCategory, EventStatus } from '../events_types/events.types';

export default function EventsMain() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');

  const filteredEvents = MOCK_EVENTS.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          event.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (statusFilter === 'ALL') return matchesSearch;
    return matchesSearch && event.status === statusFilter;
  });

  const getStatusBadge = (status: EventStatus) => {
    switch(status) {
      case 'UPCOMING': return <span className="px-2.5 py-1 bg-blue-500/10 text-blue-600 border border-blue-500/20 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 w-fit"><Clock size={10}/> Upcoming</span>;
      case 'ONGOING': return <span className="px-2.5 py-1 bg-amber-500/10 text-amber-600 border border-amber-500/20 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 w-fit animate-pulse"><Sparkles size={10}/> Ongoing</span>;
      case 'COMPLETED': return <span className="px-2.5 py-1 bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 w-fit"><CheckCircle2 size={10}/> Completed</span>;
      case 'CANCELLED': return <span className="px-2.5 py-1 bg-red-500/10 text-red-600 border border-red-500/20 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 w-fit"><AlertTriangle size={10}/> Cancelled</span>;
      default: return null;
    }
  };

  const getCategoryIcon = (category: EventCategory) => {
    switch(category) {
      case 'Cultural': return <Music size={18} className="text-fuchsia-500" />;
      case 'Sports': return <Trophy size={18} className="text-amber-500" />;
      case 'Festival': return <Sparkles size={18} className="text-orange-500" />;
      default: return <PartyPopper size={18} className="text-blue-500" />;
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amount);
  };

  return (
    <div className="flex flex-col w-full h-full space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-[var(--bg-card)] p-4 rounded-xl border border-[var(--border)] shrink-0 shadow-sm">
        <div>
          <h1 className="text-[22px] font-bold text-[var(--text-primary)] flex items-center gap-2">
            <PartyPopper className="text-fuchsia-500" size={24} /> Events & Activities
          </h1>
          <p className="text-[14px] text-[var(--text-secondary)] mt-1">
            Track hostel events, participant numbers, and budget utilization.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
           <button className="flex items-center justify-center gap-2 px-4 py-2 bg-fuchsia-600 text-white text-sm font-bold rounded-lg shadow-sm hover:bg-fuchsia-700 transition-colors shrink-0">
              <Plus size={16} /> Create Event
           </button>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="flex flex-col sm:flex-row gap-4 bg-[var(--bg-card)] p-4 rounded-xl border border-[var(--border)] shadow-sm">
         <select 
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="bg-[var(--bg-input)] border border-[var(--border)] rounded-lg px-3 py-2 text-sm text-[var(--text-primary)] focus:border-fuchsia-500 outline-none w-full sm:w-48"
         >
            <option value="ALL">All Statuses</option>
            <option value="UPCOMING">Upcoming</option>
            <option value="ONGOING">Ongoing</option>
            <option value="COMPLETED">Completed</option>
         </select>
         
         <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]" size={16} />
            <input 
               type="text" 
               placeholder="Search by event title or category..." 
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}
               className="w-full bg-[var(--bg-input)] border border-[var(--border)] rounded-lg pl-9 pr-4 py-2 text-sm focus:border-fuchsia-500 outline-none transition-colors"
            />
         </div>
      </div>

      {/* Grid of Events */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-6">
         {filteredEvents.map(event => (
            <div key={event.id} className={`bg-[var(--bg-card)] border rounded-xl p-5 shadow-sm flex flex-col hover:shadow-md transition-all ${
               event.status === 'COMPLETED' ? 'border-[var(--border)] opacity-90' : 'border-[var(--border)] hover:border-fuchsia-500/30'
            }`}>
               
               {/* Event Header */}
               <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                     <div className="w-12 h-12 rounded-xl bg-[var(--bg-input)] border border-[var(--border)] flex items-center justify-center shrink-0">
                        {getCategoryIcon(event.category)}
                     </div>
                     <div>
                        <h3 className="font-bold text-[18px] text-[var(--text-primary)] leading-tight">{event.title}</h3>
                        <p className="text-xs font-semibold text-fuchsia-600 bg-fuchsia-500/10 border border-fuchsia-500/20 px-2 py-0.5 rounded w-fit mt-1">
                           {event.category}
                        </p>
                     </div>
                  </div>
                  <div className="shrink-0 ml-2">
                     {getStatusBadge(event.status)}
                  </div>
               </div>

               {/* When & Where */}
               <div className="grid grid-cols-2 gap-3 mb-4 bg-[var(--bg-input)] p-3 rounded-lg border border-[var(--border)]">
                  <div className="flex items-start gap-2">
                     <CalendarDays size={14} className="text-[var(--text-secondary)] mt-0.5" />
                     <div>
                        <span className="text-[10px] uppercase font-bold text-[var(--text-secondary)] block">Date & Time</span>
                        <span className="text-xs font-bold text-[var(--text-primary)]">{new Date(event.date).toLocaleDateString('en-GB')} at {event.time}</span>
                     </div>
                  </div>
                  <div className="flex items-start gap-2">
                     <MapPin size={14} className="text-[var(--text-secondary)] mt-0.5" />
                     <div>
                        <span className="text-[10px] uppercase font-bold text-[var(--text-secondary)] block">Venue</span>
                        <span className="text-xs font-bold text-[var(--text-primary)]">{event.venue}</span>
                     </div>
                  </div>
               </div>

               {/* Description */}
               <div className="mb-5">
                  <p className="text-sm text-[var(--text-primary)] leading-snug">"{event.description}"</p>
               </div>

               {/* Financials & Participants */}
               <div className="mt-auto pt-4 border-t border-[var(--border)] flex flex-wrap gap-x-6 gap-y-3 justify-between items-end">
                  <div className="flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-3 py-1.5 rounded-lg">
                     <Users size={16} className="text-blue-600" />
                     <div>
                        <span className="text-[10px] uppercase font-bold text-blue-600/70 block leading-tight">Participants</span>
                        <span className="text-sm font-black text-blue-700 dark:text-blue-400 leading-tight">{event.totalParticipants}</span>
                     </div>
                  </div>
                  
                  <div className="flex flex-col items-end">
                     <div className="flex items-center gap-3 mb-1">
                        <span className="text-[10px] uppercase font-bold text-[var(--text-secondary)]">Budget:</span>
                        <span className="text-xs font-bold text-[var(--text-primary)]">{formatCurrency(event.budgetAllocated)}</span>
                     </div>
                     <div className="flex items-center gap-3">
                        <span className="text-[10px] uppercase font-bold text-[var(--text-secondary)]">Spent:</span>
                        <span className={`text-xs font-black ${event.budgetSpent > event.budgetAllocated ? 'text-rose-600' : 'text-emerald-600'}`}>
                           {formatCurrency(event.budgetSpent)}
                        </span>
                     </div>
                  </div>
               </div>

            </div>
         ))}

         {filteredEvents.length === 0 && (
            <div className="col-span-full py-16 flex flex-col items-center justify-center text-[var(--text-secondary)] border-2 border-dashed border-[var(--border)] rounded-xl bg-[var(--bg-card)]">
               <PartyPopper size={48} className="opacity-20 mb-4" />
               <p className="font-medium text-lg">No events found</p>
            </div>
         )}
      </div>

    </div>
  );
}
