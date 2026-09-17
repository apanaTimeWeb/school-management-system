"use client";

import React, { useState } from 'react';
import { 
  Bed, DoorOpen, Search, Filter, Edit, 
  MapPin, CheckCircle2, User, Wrench, ShieldAlert,
  CalendarDays, CalendarX2, AlertTriangle, Plus
} from 'lucide-react';
import { MOCK_ROOM_BED_GROUPS } from '../beds_constants/beds.constants';

export default function BedsMain() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredGroups = MOCK_ROOM_BED_GROUPS.map(group => ({
    ...group,
    beds: group.beds.filter(b => 
      b.bedNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.studentName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      group.roomNumber.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(group => group.beds.length > 0);

  const getBedStatusBadge = (status: string) => {
    switch(status) {
      case 'Available': return <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-600 rounded text-[10px] font-bold uppercase tracking-wider flex items-center gap-1"><CheckCircle2 size={10}/> Available</span>;
      case 'Occupied': return <span className="px-2 py-0.5 bg-blue-500/10 text-blue-600 rounded text-[10px] font-bold uppercase tracking-wider flex items-center gap-1"><User size={10}/> Occupied</span>;
      case 'Maintenance': return <span className="px-2 py-0.5 bg-amber-500/10 text-amber-600 rounded text-[10px] font-bold uppercase tracking-wider flex items-center gap-1"><Wrench size={10}/> Maintenance</span>;
      case 'Blocked': return <span className="px-2 py-0.5 bg-slate-500/10 text-slate-600 rounded text-[10px] font-bold uppercase tracking-wider flex items-center gap-1"><ShieldAlert size={10}/> Blocked</span>;
      default: return null;
    }
  };

  const getConditionColor = (condition: string) => {
    switch(condition) {
      case 'Good': return 'text-emerald-500';
      case 'Needs Repair': return 'text-amber-500';
      case 'Damaged': return 'text-rose-500 font-bold';
      default: return 'text-[var(--text-secondary)]';
    }
  };

  return (
    <div className="flex flex-col w-full h-full space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-[var(--bg-card)] p-4 rounded-xl border border-[var(--border)] shrink-0 shadow-sm">
        <div>
          <h1 className="text-[22px] font-bold text-[var(--text-primary)] flex items-center gap-2">
            <Bed className="text-rose-500" size={24} /> Bed Tracking
          </h1>
          <p className="text-[14px] text-[var(--text-secondary)] mt-1">
            Physical bed-level tracking, student assignments, and condition monitoring.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
           <div className="flex gap-2">
              <button className="flex items-center justify-center p-2 border border-[var(--border)] text-[var(--text-secondary)] hover:bg-[var(--bg-input)] rounded-lg transition-colors bg-[var(--bg-card)]" title="Filter Beds">
                 <Filter size={18} />
              </button>
              <div className="relative w-full sm:w-64">
                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]" size={16} />
                 <input 
                    type="text" 
                    placeholder="Search bed, room, student..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-[var(--bg-input)] border border-[var(--border)] rounded-lg pl-9 pr-4 py-2 text-sm focus:border-[var(--primary)] outline-none transition-colors"
                 />
              </div>
           </div>
           <button className="flex items-center justify-center gap-2 px-4 py-2 bg-rose-600 text-white text-sm font-bold rounded-lg shadow-sm hover:bg-rose-700 transition-colors shrink-0">
              <Plus size={16} /> Add Bed
           </button>
        </div>
      </div>

      {/* Bed Groups Container */}
      <div className="flex flex-col gap-6 pb-6">
        {filteredGroups.map(group => (
           <div key={group.roomId} className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl overflow-hidden shadow-sm">
              
              {/* Room Group Header */}
              <div className="p-4 bg-[rgba(244,63,94,0.03)] border-b border-[var(--border)] flex items-center justify-between">
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-600 flex items-center justify-center border border-rose-500/20">
                       <DoorOpen size={20} />
                    </div>
                    <div>
                       <h2 className="font-bold text-[18px] text-[var(--text-primary)] leading-tight">Room {group.roomNumber}</h2>
                       <p className="text-xs text-[var(--text-secondary)] flex items-center gap-1 mt-0.5"><MapPin size={12}/> {group.building}</p>
                    </div>
                 </div>
              </div>

              {/* Beds Grid for this Room */}
              <div className="p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-[var(--bg-card)]">
                 {group.beds.map(bed => (
                    <div key={bed.id} className={`border rounded-xl p-4 flex flex-col relative transition-colors ${
                       bed.bedStatus === 'Available' ? 'border-emerald-500/30 bg-emerald-500/5 hover:border-emerald-500/60' :
                       bed.bedStatus === 'Occupied' ? 'border-blue-500/30 bg-blue-500/5 hover:border-blue-500/60' :
                       bed.bedStatus === 'Maintenance' ? 'border-amber-500/30 bg-amber-500/5 hover:border-amber-500/60' :
                       'border-slate-500/30 bg-slate-500/5 hover:border-slate-500/60'
                    }`}>
                       <div className="absolute top-3 right-3">
                          <button className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors"><Edit size={14}/></button>
                       </div>
                       
                       <div className="flex items-center gap-2 mb-3">
                          <Bed size={18} className={
                             bed.bedStatus === 'Available' ? 'text-emerald-600' :
                             bed.bedStatus === 'Occupied' ? 'text-blue-600' :
                             bed.bedStatus === 'Maintenance' ? 'text-amber-600' : 'text-slate-600'
                          }/>
                          <h3 className="font-bold text-[var(--text-primary)] text-[16px]">{bed.bedNumber}</h3>
                       </div>
                       
                       <div className="mb-3">
                          {getBedStatusBadge(bed.bedStatus)}
                       </div>

                       {bed.studentName ? (
                          <div className="flex items-center gap-2 mb-3 bg-[var(--bg-card)] p-2 rounded-lg border border-[var(--border)] shadow-sm">
                             <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300 flex items-center justify-center font-bold text-xs shrink-0">
                                {bed.studentName.charAt(0)}
                             </div>
                             <div className="flex flex-col min-w-0">
                                <span className="font-bold text-xs text-[var(--text-primary)] truncate" title={bed.studentName}>{bed.studentName}</span>
                                <span className="text-[10px] text-[var(--text-secondary)]">{bed.studentId}</span>
                             </div>
                          </div>
                       ) : (
                          <div className="flex items-center gap-2 mb-3 bg-[var(--bg-card)] p-2 rounded-lg border border-dashed border-[var(--border)] opacity-60 h-[50px]">
                             <span className="text-xs text-[var(--text-secondary)] italic w-full text-center">No student assigned</span>
                          </div>
                       )}

                       <div className="flex flex-col gap-1.5 mt-auto">
                          {bed.assignmentDate && (
                             <div className="flex justify-between items-center text-[11px]">
                                <span className="text-[var(--text-secondary)] flex items-center gap-1"><CalendarDays size={12}/> Assigned</span>
                                <span className="font-semibold text-[var(--text-primary)]">{new Date(bed.assignmentDate).toLocaleDateString('en-GB')}</span>
                             </div>
                          )}
                          {bed.vacatedDate && (
                             <div className="flex justify-between items-center text-[11px]">
                                <span className="text-[var(--text-secondary)] flex items-center gap-1"><CalendarX2 size={12}/> Vacated</span>
                                <span className="font-semibold text-[var(--text-primary)]">{new Date(bed.vacatedDate).toLocaleDateString('en-GB')}</span>
                             </div>
                          )}
                          <div className="flex justify-between items-center text-[11px] pt-1.5 border-t border-[var(--border)] mt-1">
                             <span className="text-[var(--text-secondary)] flex items-center gap-1"><AlertTriangle size={12}/> Condition</span>
                             <span className={`font-semibold ${getConditionColor(bed.bedCondition)}`}>{bed.bedCondition}</span>
                          </div>
                       </div>

                    </div>
                 ))}
              </div>

           </div>
        ))}

        {filteredGroups.length === 0 && (
          <div className="py-12 flex flex-col items-center justify-center text-[var(--text-secondary)] border-2 border-dashed border-[var(--border)] rounded-xl bg-[var(--bg-card)]">
            <Bed size={48} className="opacity-20 mb-4" />
            <p className="font-medium text-lg">No beds found</p>
            <p className="text-sm opacity-70">Try adjusting your search criteria</p>
          </div>
        )}
      </div>

    </div>
  );
}
