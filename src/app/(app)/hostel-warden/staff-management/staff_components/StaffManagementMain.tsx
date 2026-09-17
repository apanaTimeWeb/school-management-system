"use client";

import React, { useState } from 'react';
import { 
  UsersRound, Search, Filter, Phone, 
  MapPin, CheckCircle2, XCircle, AlertTriangle, 
  Clock, Plus, ShieldCheck, Zap, Droplets, Sparkles, Utensils
} from 'lucide-react';
import { MOCK_STAFF } from '../staff_constants/staff.constants';
import type { HostelStaff, StaffRole, AttendanceStatus } from '../staff_types/staff.types';

export default function StaffManagementMain() {
  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState('ALL');

  const filteredStaff = MOCK_STAFF.filter(staff => {
    const matchesSearch = staff.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          staff.id.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (roleFilter === 'ALL') return matchesSearch;
    return matchesSearch && staff.role === roleFilter;
  });

  const getRoleIcon = (role: StaffRole) => {
    switch(role) {
      case 'Cleaner': return <Sparkles size={18} className="text-emerald-500" />;
      case 'Guard': return <ShieldCheck size={18} className="text-blue-500" />;
      case 'Electrician': return <Zap size={18} className="text-amber-500" />;
      case 'Plumber': return <Droplets size={18} className="text-indigo-500" />;
      case 'Mess Staff': return <Utensils size={18} className="text-orange-500" />;
      default: return <UsersRound size={18} className="text-gray-500" />;
    }
  };

  const getAttendanceBadge = (status: AttendanceStatus) => {
    switch(status) {
      case 'Present': return <span className="text-[10px] uppercase font-bold text-emerald-600 bg-emerald-500/10 px-2 py-1 rounded-full border border-emerald-500/20 flex items-center gap-1 w-fit"><CheckCircle2 size={10} /> Present Today</span>;
      case 'Absent': return <span className="text-[10px] uppercase font-bold text-rose-600 bg-rose-500/10 px-2 py-1 rounded-full border border-rose-500/20 flex items-center gap-1 w-fit"><XCircle size={10} /> Absent Today</span>;
      case 'Leave': return <span className="text-[10px] uppercase font-bold text-amber-600 bg-amber-500/10 px-2 py-1 rounded-full border border-amber-500/20 flex items-center gap-1 w-fit"><Clock size={10} /> On Leave</span>;
      default: return null;
    }
  };

  return (
    <div className="flex flex-col w-full h-full space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-[var(--bg-card)] p-4 rounded-xl border border-[var(--border)] shrink-0 shadow-sm">
        <div>
          <h1 className="text-[22px] font-bold text-[var(--text-primary)] flex items-center gap-2">
            <UsersRound className="text-sky-500" size={24} /> Staff Management
          </h1>
          <p className="text-[14px] text-[var(--text-secondary)] mt-1">
            Manage guards, cleaners, electricians, their shifts, and daily attendance.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
           <button className="flex items-center justify-center gap-2 px-4 py-2 bg-sky-600 text-white text-sm font-bold rounded-lg shadow-sm hover:bg-sky-700 transition-colors shrink-0">
              <Plus size={16} /> Add New Staff
           </button>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="flex flex-col sm:flex-row gap-4 bg-[var(--bg-card)] p-4 rounded-xl border border-[var(--border)] shadow-sm">
         <select 
            value={roleFilter}
            onChange={(e) => setRoleFilter(e.target.value)}
            className="bg-[var(--bg-input)] border border-[var(--border)] rounded-lg px-3 py-2 text-sm text-[var(--text-primary)] focus:border-sky-500 outline-none w-full sm:w-48"
         >
            <option value="ALL">All Roles</option>
            <option value="Cleaner">Cleaners</option>
            <option value="Guard">Guards</option>
            <option value="Electrician">Electricians</option>
            <option value="Plumber">Plumbers</option>
            <option value="Mess Staff">Mess Staff</option>
         </select>
         
         <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]" size={16} />
            <input 
               type="text" 
               placeholder="Search by staff name or ID..." 
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}
               className="w-full bg-[var(--bg-input)] border border-[var(--border)] rounded-lg pl-9 pr-4 py-2 text-sm focus:border-sky-500 outline-none transition-colors"
            />
         </div>
      </div>

      {/* Staff Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-6">
         {filteredStaff.map(staff => (
            <div key={staff.id} className={`bg-[var(--bg-card)] border rounded-xl overflow-hidden shadow-sm flex flex-col hover:shadow-md transition-all ${
               staff.status === 'INACTIVE' ? 'opacity-60 border-[var(--border)] grayscale-[50%]' : 
               staff.complaintsCount > 0 ? 'border-rose-500/30 hover:border-rose-500/60' : 'border-[var(--border)] hover:border-sky-500/30'
            }`}>
               
               {/* Card Body */}
               <div className="p-5 flex flex-col flex-1">
                  
                  <div className="flex justify-between items-start mb-4">
                     <div className="w-12 h-12 rounded-xl bg-[var(--bg-input)] border border-[var(--border)] flex items-center justify-center shrink-0">
                        {getRoleIcon(staff.role)}
                     </div>
                     <span className="text-[10px] font-bold text-[var(--text-secondary)] bg-[var(--bg-input)] px-2 py-1 rounded border border-[var(--border)]">
                        {staff.id}
                     </span>
                  </div>

                  <div className="mb-4">
                     <h3 className="font-bold text-[18px] text-[var(--text-primary)] leading-tight">{staff.name}</h3>
                     <p className="text-sm font-semibold text-sky-600 dark:text-sky-400 mt-0.5">{staff.role}</p>
                  </div>

                  <div className="flex flex-col gap-3 mb-5">
                     <div className="flex items-center gap-2 text-xs text-[var(--text-secondary)]">
                        <Phone size={14} />
                        <span className="font-semibold text-[var(--text-primary)]">{staff.contactNumber}</span>
                     </div>
                     <div className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                        <MapPin size={14} className="shrink-0 mt-0.5" />
                        <span className="font-semibold text-[var(--text-primary)] leading-snug">{staff.assignedArea}</span>
                     </div>
                     <div className="flex items-center gap-2 text-xs text-[var(--text-secondary)]">
                        <Clock size={14} />
                        <span>Shift: <span className="font-semibold text-[var(--text-primary)]">{staff.shift}</span></span>
                     </div>
                  </div>

                  {/* Attendance & Alerts */}
                  <div className="mt-auto flex flex-col gap-3 pt-4 border-t border-[var(--border)]">
                     <div className="flex justify-between items-center">
                        {getAttendanceBadge(staff.todayAttendance)}
                     </div>

                     {staff.complaintsCount > 0 && (
                        <div className="flex items-center gap-2 bg-rose-500/10 border border-rose-500/20 p-2 rounded-lg text-rose-600">
                           <AlertTriangle size={14} className="shrink-0" />
                           <span className="text-[11px] font-bold leading-tight">
                              {staff.complaintsCount} Active Complaint{staff.complaintsCount > 1 ? 's' : ''} against this staff
                           </span>
                        </div>
                     )}
                  </div>

               </div>
               
               {/* Actions */}
               <div className="px-5 py-3 border-t border-[var(--border)] bg-[var(--bg-input)] flex justify-between items-center">
                  <button className="text-xs font-bold text-sky-600 hover:underline">View Profile</button>
                  <button className="text-xs font-bold text-[var(--text-secondary)] hover:text-[var(--text-primary)]">Edit Duty</button>
               </div>

            </div>
         ))}

         {filteredStaff.length === 0 && (
            <div className="col-span-full py-16 flex flex-col items-center justify-center text-[var(--text-secondary)] border-2 border-dashed border-[var(--border)] rounded-xl bg-[var(--bg-card)]">
               <UsersRound size={48} className="opacity-20 mb-4" />
               <p className="font-medium text-lg">No staff records found</p>
            </div>
         )}
      </div>

    </div>
  );
}
