"use client";

import React, { useState } from 'react';
import { 
  Wrench, Search, Filter, AlertTriangle, 
  CheckCircle2, Clock, MapPin, User, FileText, 
  Zap, Droplets, Hammer, Wifi, Sparkles, AlertOctagon, Plus
} from 'lucide-react';
import { MOCK_COMPLAINTS } from '../maintenance_constants/maintenance.constants';
import type { MaintenanceComplaint, MaintenanceStatus, MaintenancePriority, MaintenanceCategory } from '../maintenance_types/maintenance.types';

export default function MaintenanceMain() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');

  const filteredComplaints = MOCK_COMPLAINTS.filter(c => {
    const matchesSearch = c.description.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          c.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          c.locationDetail.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (statusFilter === 'ALL') return matchesSearch;
    return matchesSearch && c.status === statusFilter;
  });

  const getStatusBadge = (status: MaintenanceStatus) => {
    switch(status) {
      case 'Pending': return <span className="px-2.5 py-1 bg-rose-500/10 text-rose-600 border border-rose-500/20 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 w-fit"><AlertTriangle size={10}/> Pending</span>;
      case 'In Progress': return <span className="px-2.5 py-1 bg-amber-500/10 text-amber-600 border border-amber-500/20 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 w-fit"><Clock size={10}/> In Progress</span>;
      case 'Resolved': return <span className="px-2.5 py-1 bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 w-fit"><CheckCircle2 size={10}/> Resolved</span>;
      default: return null;
    }
  };

  const getPriorityBadge = (priority: MaintenancePriority) => {
    switch(priority) {
      case 'Low': return <span className="text-[10px] font-bold uppercase text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700">Low Priority</span>;
      case 'Medium': return <span className="text-[10px] font-bold uppercase text-blue-600 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">Medium Priority</span>;
      case 'High': return <span className="text-[10px] font-bold uppercase text-orange-600 bg-orange-500/10 px-2 py-0.5 rounded border border-orange-500/20">High Priority</span>;
      case 'Urgent': return <span className="text-[10px] font-bold uppercase text-red-600 bg-red-500/10 px-2 py-0.5 rounded border border-red-500/20 flex items-center gap-1"><AlertOctagon size={10}/> Urgent</span>;
      default: return null;
    }
  };

  const getCategoryIcon = (category: MaintenanceCategory) => {
    switch(category) {
      case 'Electrical': return <Zap size={18} className="text-amber-500" />;
      case 'Plumbing': return <Droplets size={18} className="text-blue-500" />;
      case 'Carpentry': return <Hammer size={18} className="text-orange-500" />;
      case 'IT/Wi-Fi': return <Wifi size={18} className="text-indigo-500" />;
      case 'Cleaning': return <Sparkles size={18} className="text-emerald-500" />;
      default: return <Wrench size={18} className="text-gray-500" />;
    }
  };

  return (
    <div className="flex flex-col w-full h-full space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-[var(--bg-card)] p-4 rounded-xl border border-[var(--border)] shrink-0 shadow-sm">
        <div>
          <h1 className="text-[22px] font-bold text-[var(--text-primary)] flex items-center gap-2">
            <Wrench className="text-rose-500" size={24} /> Maintenance & Repairs
          </h1>
          <p className="text-[14px] text-[var(--text-secondary)] mt-1">
            Log complaints, assign staff, and track resolution status.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
           <button className="flex items-center justify-center gap-2 px-4 py-2 bg-rose-600 text-white text-sm font-bold rounded-lg shadow-sm hover:bg-rose-700 transition-colors shrink-0">
              <Plus size={16} /> Log Complaint
           </button>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="flex flex-col sm:flex-row gap-4 bg-[var(--bg-card)] p-4 rounded-xl border border-[var(--border)] shadow-sm">
         <select 
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="bg-[var(--bg-input)] border border-[var(--border)] rounded-lg px-3 py-2 text-sm text-[var(--text-primary)] focus:border-rose-500 outline-none w-full sm:w-48"
         >
            <option value="ALL">All Statuses</option>
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Resolved">Resolved</option>
         </select>
         
         <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]" size={16} />
            <input 
               type="text" 
               placeholder="Search by issue description, ID, or location..." 
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}
               className="w-full bg-[var(--bg-input)] border border-[var(--border)] rounded-lg pl-9 pr-4 py-2 text-sm focus:border-rose-500 outline-none transition-colors"
            />
         </div>
      </div>

      {/* Grid of Complaints */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pb-6">
         {filteredComplaints.map(complaint => (
            <div key={complaint.id} className={`bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-5 shadow-sm flex flex-col sm:flex-row justify-between gap-6 hover:shadow-md transition-all ${
               complaint.status === 'Resolved' ? 'opacity-80' : 'hover:border-rose-500/30'
            }`}>
               
               {/* Left: Details */}
               <div className="flex-1 flex flex-col justify-between">
                  <div>
                     <div className="flex justify-between items-start mb-3">
                        <div className="flex items-center gap-3">
                           <div className="w-10 h-10 rounded-xl bg-[var(--bg-input)] border border-[var(--border)] flex items-center justify-center shrink-0">
                              {getCategoryIcon(complaint.category)}
                           </div>
                           <div>
                              <div className="flex items-center gap-2 mb-0.5">
                                 <h3 className="font-bold text-[16px] text-[var(--text-primary)] leading-tight">{complaint.category}</h3>
                                 {getPriorityBadge(complaint.priority)}
                              </div>
                              <p className="text-xs font-semibold text-[var(--text-secondary)]">{complaint.id}</p>
                           </div>
                        </div>
                     </div>
                     
                     <div className="flex items-center gap-1.5 text-xs text-[var(--text-primary)] mb-3 bg-[var(--bg-input)] px-2.5 py-1.5 rounded-lg border border-[var(--border)] w-fit">
                        <MapPin size={12} className="text-rose-500" /> 
                        <span className="font-semibold">{complaint.locationDetail}</span>
                        <span className="text-[10px] uppercase text-[var(--text-secondary)] ml-1">({complaint.locationType})</span>
                     </div>
                     
                     <div className="bg-rose-50/50 dark:bg-rose-500/5 p-3 rounded-lg border border-rose-100 dark:border-rose-500/10 mb-4">
                        <p className="text-sm text-rose-900 dark:text-rose-200 leading-snug">"{complaint.description}"</p>
                     </div>
                  </div>

                  {/* Footer Stats */}
                  <div className="flex items-center gap-4 text-xs text-[var(--text-secondary)] mt-auto pt-4 border-t border-[var(--border)]">
                     <div className="flex items-center gap-1.5">
                        <User size={14} />
                        <span>Logged by: <span className="font-bold text-[var(--text-primary)]">{complaint.loggedBy}</span></span>
                     </div>
                     <div className="flex items-center gap-1.5">
                        <Clock size={14} />
                        <span>{new Date(complaint.loggedDate).toLocaleDateString('en-GB')}</span>
                     </div>
                  </div>
               </div>

               {/* Right: Action & Status Panel */}
               <div className="sm:w-56 shrink-0 bg-[var(--bg-input)] p-4 rounded-xl border border-[var(--border)] flex flex-col">
                  <div className="mb-4">
                     <span className="text-[10px] uppercase font-bold text-[var(--text-secondary)] block mb-1.5">Current Status</span>
                     {getStatusBadge(complaint.status)}
                  </div>

                  <div className="mb-auto">
                     <span className="text-[10px] uppercase font-bold text-[var(--text-secondary)] block mb-1">Assigned To</span>
                     {complaint.assignedTo ? (
                        <span className="font-bold text-sm text-[var(--text-primary)]">{complaint.assignedTo}</span>
                     ) : (
                        <span className="text-xs italic text-[var(--text-secondary)]">Not yet assigned</span>
                     )}
                  </div>

                  {complaint.status === 'Resolved' && (
                     <div className="mt-4 pt-3 border-t border-[var(--border)]">
                        <span className="text-[10px] uppercase font-bold text-emerald-600 block mb-1">Resolution</span>
                        <p className="text-xs text-[var(--text-secondary)] mb-1">{new Date(complaint.resolutionDate!).toLocaleDateString('en-GB')}</p>
                        <p className="text-xs italic text-[var(--text-primary)] line-clamp-2">"{complaint.remarks}"</p>
                     </div>
                  )}

                  {complaint.status !== 'Resolved' && (
                     <div className="mt-4 pt-3 border-t border-[var(--border)] flex flex-col gap-2">
                        <button className="w-full py-1.5 text-xs font-bold text-indigo-600 bg-indigo-500/10 hover:bg-indigo-500 hover:text-white border border-indigo-500/20 rounded transition-colors">
                           Assign Staff
                        </button>
                        {complaint.status === 'In Progress' && (
                           <button className="w-full py-1.5 text-xs font-bold text-emerald-600 bg-emerald-500/10 hover:bg-emerald-500 hover:text-white border border-emerald-500/20 rounded transition-colors">
                              Mark Resolved
                           </button>
                        )}
                     </div>
                  )}
               </div>

            </div>
         ))}

         {filteredComplaints.length === 0 && (
            <div className="col-span-full py-16 flex flex-col items-center justify-center text-[var(--text-secondary)] border-2 border-dashed border-[var(--border)] rounded-xl bg-[var(--bg-card)]">
               <Wrench size={48} className="opacity-20 mb-4" />
               <p className="font-medium text-lg">No complaints found</p>
            </div>
         )}
      </div>

    </div>
  );
}
