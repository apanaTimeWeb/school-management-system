"use client";

import React, { useState } from 'react';
import { 
  Building2, Users, Search, Plus, Edit, Trash2, Eye, 
  MapPin, Phone, User, ShieldCheck, X, FileText, Settings, Layers
} from 'lucide-react';
import { MOCK_HOSTELS } from '../management_constants/hostel_management.constants';
import type { Hostel } from '../management_types/hostel_management.types';

export default function HostelManagementMain() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedHostel, setSelectedHostel] = useState<Hostel | null>(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const filteredHostels = MOCK_HOSTELS.filter(h => 
    h.hostelName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    h.wardenName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleView = (hostel: Hostel) => {
    setSelectedHostel(hostel);
    setIsViewModalOpen(true);
  };

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'ACTIVE': return <span className="px-2.5 py-1 bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 rounded-full text-[10px] font-bold uppercase tracking-wider">Active</span>;
      case 'MAINTENANCE': return <span className="px-2.5 py-1 bg-amber-500/10 text-amber-600 border border-amber-500/20 rounded-full text-[10px] font-bold uppercase tracking-wider">Maintenance</span>;
      case 'CLOSED': return <span className="px-2.5 py-1 bg-red-500/10 text-red-600 border border-red-500/20 rounded-full text-[10px] font-bold uppercase tracking-wider">Closed</span>;
      default: return null;
    }
  };

  const getTypeBadge = (type: string) => {
    switch(type) {
      case 'BOYS': return <span className="px-2 py-0.5 bg-blue-500/10 text-blue-600 rounded text-[10px] font-bold uppercase tracking-wider flex items-center gap-1"><User size={10}/> Boys</span>;
      case 'GIRLS': return <span className="px-2 py-0.5 bg-pink-500/10 text-pink-600 rounded text-[10px] font-bold uppercase tracking-wider flex items-center gap-1"><User size={10}/> Girls</span>;
      case 'CO-ED': return <span className="px-2 py-0.5 bg-purple-500/10 text-purple-600 rounded text-[10px] font-bold uppercase tracking-wider flex items-center gap-1"><Users size={10}/> Co-Ed</span>;
      default: return null;
    }
  };

  return (
    <div className="flex flex-col w-full h-full space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-[var(--bg-card)] p-4 rounded-xl border border-[var(--border)] shrink-0 shadow-sm">
        <div>
          <h1 className="text-[22px] font-bold text-[var(--text-primary)] flex items-center gap-2">
            <Building2 className="text-indigo-500" size={24} /> Hostel Management
          </h1>
          <p className="text-[14px] text-[var(--text-secondary)] mt-1">
            Manage hostels, capacities, wardens, rules, and facilities.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
           <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]" size={16} />
              <input 
                 type="text" 
                 placeholder="Search hostel or warden..." 
                 value={searchTerm}
                 onChange={(e) => setSearchTerm(e.target.value)}
                 className="w-full bg-[var(--bg-input)] border border-[var(--border)] rounded-lg pl-9 pr-4 py-2 text-sm focus:border-[var(--primary)] outline-none transition-colors"
              />
           </div>
           <button 
             onClick={() => setIsAddModalOpen(true)}
             className="flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 text-white text-sm font-bold rounded-lg shadow-sm hover:bg-indigo-700 transition-colors shrink-0"
           >
              <Plus size={16} /> Add Hostel
           </button>
        </div>
      </div>

      {/* Hostel Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 pb-6">
        {filteredHostels.map(hostel => (
          <div key={hostel.id} className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col">
            
            {/* Card Header */}
            <div className="p-5 border-b border-[var(--border)] bg-[rgba(99,102,241,0.03)] relative">
               <div className="absolute top-4 right-4 flex gap-2">
                 <button onClick={() => handleView(hostel)} className="w-8 h-8 rounded-full bg-blue-500/10 text-blue-600 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-colors" title="View Details">
                   <Eye size={14} />
                 </button>
                 <button className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-colors" title="Edit Hostel">
                   <Edit size={14} />
                 </button>
               </div>
               
               <div className="flex items-start gap-3 mb-3 pr-16">
                 <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-600 flex items-center justify-center shrink-0 border border-indigo-500/20">
                   <Building2 size={24} />
                 </div>
                 <div>
                   <h3 className="font-bold text-[16px] text-[var(--text-primary)] leading-tight">{hostel.hostelName}</h3>
                   <div className="flex items-center gap-2 mt-1.5">
                     {getTypeBadge(hostel.hostelType)}
                     {getStatusBadge(hostel.status)}
                   </div>
                 </div>
               </div>
               
               <div className="flex items-center gap-1.5 text-xs text-[var(--text-secondary)]">
                 <MapPin size={12} className="text-red-400" /> 
                 <span className="truncate">{hostel.building}</span>
               </div>
            </div>

            {/* Card Body */}
            <div className="p-5 grid grid-cols-2 gap-4 flex-1">
               <div className="flex flex-col gap-1 p-3 bg-[var(--bg-input)] rounded-lg border border-[var(--border)]">
                 <span className="text-[10px] uppercase font-bold text-[var(--text-secondary)] flex items-center gap-1"><Users size={12} className="text-amber-500"/> Capacity</span>
                 <span className="font-bold text-sm text-[var(--text-primary)]">{hostel.capacity} <span className="text-xs font-normal text-[var(--text-secondary)]">Beds</span></span>
               </div>
               
               <div className="flex flex-col gap-1 p-3 bg-[var(--bg-input)] rounded-lg border border-[var(--border)]">
                 <span className="text-[10px] uppercase font-bold text-[var(--text-secondary)] flex items-center gap-1"><Layers size={12} className="text-fuchsia-500"/> Structure</span>
                 <span className="font-bold text-sm text-[var(--text-primary)]">{hostel.floorCount} <span className="text-xs font-normal text-[var(--text-secondary)]">Flrs</span>, {hostel.roomCount} <span className="text-xs font-normal text-[var(--text-secondary)]">Rms</span></span>
               </div>

               <div className="col-span-2 flex flex-col gap-1.5 p-3 border border-blue-500/20 bg-blue-500/5 rounded-lg">
                 <span className="text-[10px] uppercase font-bold text-[var(--text-secondary)] flex items-center gap-1"><ShieldCheck size={12} className="text-blue-500"/> Warden Details</span>
                 <div className="flex justify-between items-center">
                    <span className="font-bold text-sm text-[var(--text-primary)]">{hostel.wardenName}</span>
                    <span className="text-xs text-[var(--text-secondary)] flex items-center gap-1"><Phone size={10}/> {hostel.contact}</span>
                 </div>
               </div>
            </div>

          </div>
        ))}

        {filteredHostels.length === 0 && (
          <div className="col-span-full py-12 flex flex-col items-center justify-center text-[var(--text-secondary)] border-2 border-dashed border-[var(--border)] rounded-xl bg-[var(--bg-card)]">
            <Building2 size={48} className="opacity-20 mb-4" />
            <p className="font-medium text-lg">No hostels found</p>
            <p className="text-sm opacity-70">Try adjusting your search criteria</p>
          </div>
        )}
      </div>

      {/* View Details Modal */}
      {isViewModalOpen && selectedHostel && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
          <div className="bg-[var(--bg-card)] w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            
            {/* Modal Header */}
            <div className="p-5 sm:p-6 border-b border-[var(--border)] flex justify-between items-start bg-indigo-600 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
              
              <div className="relative z-10 flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-sm border border-white/30 shrink-0">
                  <Building2 size={28} className="text-white" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h2 className="text-2xl font-bold">{selectedHostel.hostelName}</h2>
                    <span className="px-2 py-0.5 bg-white/20 text-white rounded text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm border border-white/20">
                      {selectedHostel.hostelType}
                    </span>
                  </div>
                  <p className="text-indigo-100 flex items-center gap-1.5 text-sm">
                    <MapPin size={14} /> {selectedHostel.building}
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setIsViewModalOpen(false)}
                className="relative z-10 p-2 rounded-full hover:bg-white/20 transition-colors text-white/80 hover:text-white"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-y-auto p-5 sm:p-6 custom-scrollbar">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Left Col: Details & Structure */}
                <div className="space-y-6">
                   {/* Key Stats */}
                   <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl bg-blue-50 border border-blue-100 dark:bg-blue-500/10 dark:border-blue-500/20">
                         <span className="text-[11px] uppercase font-bold text-blue-600/70 block mb-1">Total Capacity</span>
                         <span className="text-2xl font-black text-blue-700 dark:text-blue-400">{selectedHostel.capacity} <span className="text-sm font-bold opacity-60">Beds</span></span>
                      </div>
                      <div className="p-4 rounded-xl bg-purple-50 border border-purple-100 dark:bg-purple-500/10 dark:border-purple-500/20">
                         <span className="text-[11px] uppercase font-bold text-purple-600/70 block mb-1">Warden</span>
                         <span className="text-lg font-bold text-purple-700 dark:text-purple-400 leading-tight block">{selectedHostel.wardenName}</span>
                         <span className="text-xs text-purple-600/80 mt-1 block">{selectedHostel.contact}</span>
                      </div>
                   </div>

                   {/* Tree Structure */}
                   <div>
                     <h3 className="text-sm font-bold text-[var(--text-primary)] uppercase tracking-wider flex items-center gap-2 mb-4 border-b border-[var(--border)] pb-2">
                        <Layers size={16} className="text-indigo-500" /> Building Structure
                     </h3>
                     <div className="bg-[var(--bg-input)] rounded-xl border border-[var(--border)] p-4 font-mono text-sm">
                        <div className="flex items-center gap-2 text-indigo-600 font-bold mb-2">
                           <Building2 size={16} /> {selectedHostel.hostelName}
                        </div>
                        <div className="ml-2 border-l-2 border-indigo-200 dark:border-indigo-800 pl-4 space-y-3">
                           {selectedHostel.floors.map((floor, index) => (
                              <div key={floor.id} className="relative">
                                 <div className="absolute w-4 h-px bg-indigo-200 dark:border-indigo-800 -left-4 top-3"></div>
                                 <div className="flex items-center justify-between bg-[var(--bg-card)] border border-[var(--border)] px-3 py-2 rounded-lg shadow-sm">
                                    <span className="font-semibold text-[var(--text-primary)] flex items-center gap-2">
                                       {index === selectedHostel.floors.length - 1 ? '└──' : '├──'} {floor.name}
                                    </span>
                                    <span className="text-xs font-bold text-emerald-600 bg-emerald-500/10 px-2 py-1 rounded">
                                       {floor.roomCount} Rooms
                                    </span>
                                 </div>
                              </div>
                           ))}
                        </div>
                     </div>
                   </div>
                </div>

                {/* Right Col: Facilities & Rules */}
                <div className="space-y-6">
                   
                   {/* Facilities */}
                   <div>
                     <h3 className="text-sm font-bold text-[var(--text-primary)] uppercase tracking-wider flex items-center gap-2 mb-4 border-b border-[var(--border)] pb-2">
                        <Settings size={16} className="text-emerald-500" /> Facilities
                     </h3>
                     <div className="flex flex-wrap gap-2">
                        {selectedHostel.facilities.map((fac, i) => (
                           <span key={i} className="px-3 py-1.5 bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 rounded-lg text-xs font-bold shadow-sm">
                             {fac}
                           </span>
                        ))}
                     </div>
                   </div>

                   {/* Rules */}
                   <div>
                     <h3 className="text-sm font-bold text-[var(--text-primary)] uppercase tracking-wider flex items-center gap-2 mb-4 border-b border-[var(--border)] pb-2">
                        <FileText size={16} className="text-rose-500" /> Hostel Rules
                     </h3>
                     <div className="space-y-3 bg-rose-50 dark:bg-rose-500/5 p-4 rounded-xl border border-rose-100 dark:border-rose-500/10">
                        {selectedHostel.rules.map((rule, i) => (
                           <div key={i} className="flex gap-3 items-start">
                              <div className="w-5 h-5 rounded-full bg-rose-200 dark:bg-rose-500/20 text-rose-600 flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                                 {i + 1}
                              </div>
                              <p className="text-sm text-rose-900 dark:text-rose-200 leading-snug">{rule}</p>
                           </div>
                        ))}
                     </div>
                   </div>
                   
                </div>
              </div>
            </div>
            
            {/* Modal Footer */}
            <div className="p-4 sm:p-6 border-t border-[var(--border)] bg-[var(--bg-card)] flex justify-end">
              <button 
                onClick={() => setIsViewModalOpen(false)}
                className="px-6 py-2.5 bg-[var(--bg-input)] text-[var(--text-primary)] font-bold rounded-lg border border-[var(--border)] hover:bg-[var(--border)] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Modal Placeholder */}
      {isAddModalOpen && (
         <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
            <div className="bg-[var(--bg-card)] w-full max-w-md rounded-2xl shadow-2xl overflow-hidden flex flex-col p-6 text-center">
               <div className="w-16 h-16 bg-indigo-500/10 text-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 size={32} />
               </div>
               <h2 className="text-xl font-bold text-[var(--text-primary)] mb-2">Add New Hostel</h2>
               <p className="text-sm text-[var(--text-secondary)] mb-6">This feature would open a comprehensive multi-step form to configure a new hostel, its building, floors, rules, and facilities.</p>
               <button 
                 onClick={() => setIsAddModalOpen(false)}
                 className="w-full py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-colors"
               >
                 Acknowledge & Close
               </button>
            </div>
         </div>
      )}
      
    </div>
  );
}
