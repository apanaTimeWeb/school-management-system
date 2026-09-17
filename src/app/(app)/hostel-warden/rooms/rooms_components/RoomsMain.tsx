"use client";

import React, { useState } from 'react';
import { 
  DoorOpen, Plus, Search, Filter, Edit, 
  MapPin, Wrench, CheckCircle2, Bed, Maximize2, 
  Users, AlertTriangle, Settings, ShieldAlert
} from 'lucide-react';
import { MOCK_ROOMS } from '../rooms_constants/rooms.constants';

export default function RoomsMain() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredRooms = MOCK_ROOMS.filter(r => 
    r.roomNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
    r.building.toLowerCase().includes(searchTerm.toLowerCase()) ||
    r.floor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getRoomStatusBadge = (status: string) => {
    switch(status) {
      case 'Available': return <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-600 rounded text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 border border-emerald-500/20"><CheckCircle2 size={10}/> Available</span>;
      case 'Partially Occupied': return <span className="px-2 py-0.5 bg-blue-500/10 text-blue-600 rounded text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 border border-blue-500/20"><Users size={10}/> Partially Occ</span>;
      case 'Full': return <span className="px-2 py-0.5 bg-rose-500/10 text-rose-600 rounded text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 border border-rose-500/20"><Maximize2 size={10}/> Full</span>;
      case 'Maintenance': return <span className="px-2 py-0.5 bg-amber-500/10 text-amber-600 rounded text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 border border-amber-500/20"><Wrench size={10}/> Maintenance</span>;
      case 'Blocked': return <span className="px-2 py-0.5 bg-slate-500/10 text-slate-600 rounded text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 border border-slate-500/20"><ShieldAlert size={10}/> Blocked</span>;
      default: return null;
    }
  };

  const getMaintenanceBadge = (status: string) => {
    switch(status) {
      case 'CLEAR': return <span className="w-2 h-2 rounded-full bg-emerald-500" title="Maintenance Clear"></span>;
      case 'PENDING': return <span className="w-2 h-2 rounded-full bg-blue-500" title="Maintenance Pending"></span>;
      case 'URGENT': return <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" title="Urgent Maintenance Required"></span>;
      default: return null;
    }
  };

  return (
    <div className="flex flex-col w-full h-full space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-[var(--bg-card)] p-4 rounded-xl border border-[var(--border)] shrink-0 shadow-sm">
        <div>
          <h1 className="text-[22px] font-bold text-[var(--text-primary)] flex items-center gap-2">
            <DoorOpen className="text-emerald-500" size={24} /> Rooms Management
          </h1>
          <p className="text-[14px] text-[var(--text-secondary)] mt-1">
            Manage individual rooms, bed occupancy, status, and facilities.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
           <div className="flex gap-2">
              <button className="flex items-center justify-center p-2 border border-[var(--border)] text-[var(--text-secondary)] hover:bg-[var(--bg-input)] rounded-lg transition-colors bg-[var(--bg-card)]" title="Filter Rooms">
                 <Filter size={18} />
              </button>
              <div className="relative w-full sm:w-64">
                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]" size={16} />
                 <input 
                    type="text" 
                    placeholder="Search room, building, floor..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-[var(--bg-input)] border border-[var(--border)] rounded-lg pl-9 pr-4 py-2 text-sm focus:border-[var(--primary)] outline-none transition-colors"
                 />
              </div>
           </div>
           <button className="flex items-center justify-center gap-2 px-4 py-2 bg-emerald-600 text-white text-sm font-bold rounded-lg shadow-sm hover:bg-emerald-700 transition-colors shrink-0">
              <Plus size={16} /> Add Room
           </button>
        </div>
      </div>

      {/* Rooms Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 pb-6">
        {filteredRooms.map(room => (
          <div key={room.id} className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:border-emerald-500/30 transition-all group flex flex-col relative">
            
            {/* Status Strip & Maintenance Dot */}
            <div className="absolute top-4 right-4 flex items-center gap-3">
               {getMaintenanceBadge(room.maintenanceStatus)}
               <button className="w-7 h-7 rounded-lg bg-[var(--bg-input)] border border-[var(--border)] text-[var(--text-secondary)] flex items-center justify-center hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-colors" title="Edit Room">
                 <Edit size={12} />
               </button>
            </div>
            
            {/* Room Header */}
            <div className="p-5 border-b border-[var(--border)] bg-[rgba(16,185,129,0.03)]">
               <div className="flex items-center gap-3 mb-2">
                 <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-500/20 font-black text-xl">
                   {room.roomNumber}
                 </div>
                 <div>
                   <div className="flex items-center gap-2 mb-1">
                     <span className="font-bold text-[16px] text-[var(--text-primary)] leading-tight">Room {room.roomNumber}</span>
                     <span className="px-2 py-0.5 bg-stone-100 dark:bg-stone-800 text-[var(--text-secondary)] rounded text-[10px] font-bold uppercase tracking-wider border border-[var(--border)]">
                       {room.roomType}
                     </span>
                   </div>
                   {getRoomStatusBadge(room.roomStatus)}
                 </div>
               </div>
               
               <div className="flex items-center gap-1.5 text-xs text-[var(--text-secondary)] mt-3">
                 <MapPin size={12} className="text-indigo-400 shrink-0" /> 
                 <span className="truncate">{room.building} &bull; {room.floor}</span>
               </div>
            </div>

            {/* Room Capacity & Occupancy */}
            <div className="p-5 flex flex-col gap-4 flex-1">
               <div className="flex items-center justify-between">
                  <div className="flex flex-col items-center flex-1">
                     <span className="text-[10px] uppercase font-bold text-[var(--text-secondary)]">Total Capacity</span>
                     <span className="font-bold text-lg text-[var(--text-primary)]">{room.capacity} <span className="text-xs font-normal">Beds</span></span>
                  </div>
                  <div className="w-px h-8 bg-[var(--border)]"></div>
                  <div className="flex flex-col items-center flex-1">
                     <span className="text-[10px] uppercase font-bold text-rose-500/80">Occupied</span>
                     <span className="font-bold text-lg text-rose-600">{room.occupiedBeds}</span>
                  </div>
                  <div className="w-px h-8 bg-[var(--border)]"></div>
                  <div className="flex flex-col items-center flex-1">
                     <span className="text-[10px] uppercase font-bold text-emerald-500/80">Available</span>
                     <span className="font-bold text-lg text-emerald-600">{room.availableBeds}</span>
                  </div>
               </div>

               {/* Visual Occupancy Bar */}
               <div className="w-full h-2 rounded-full bg-[var(--bg-input)] border border-[var(--border)] overflow-hidden flex">
                  <div className="h-full bg-rose-500" style={{ width: `${(room.occupiedBeds / room.capacity) * 100}%` }}></div>
                  <div className="h-full bg-emerald-500" style={{ width: `${(room.availableBeds / room.capacity) * 100}%` }}></div>
               </div>

               {/* Facilities */}
               <div className="mt-2">
                  <span className="text-[10px] uppercase font-bold text-[var(--text-secondary)] flex items-center gap-1 mb-2"><Settings size={12}/> Room Facilities</span>
                  <div className="flex flex-wrap gap-1.5">
                     {room.facilities.map((fac, i) => (
                        <span key={i} className="px-2 py-1 bg-[var(--bg-input)] text-[var(--text-secondary)] rounded-md text-[10px] font-semibold border border-[var(--border)]">
                           {fac}
                        </span>
                     ))}
                  </div>
               </div>
            </div>

            {/* Quick Actions */}
            <div className="px-5 py-3 border-t border-[var(--border)] bg-[var(--bg-card)] flex gap-2">
               <button className="flex-1 py-1.5 text-xs font-bold text-[var(--text-primary)] border border-[var(--border)] rounded hover:bg-[var(--bg-input)] transition-colors flex items-center justify-center gap-1">
                  <Bed size={12} /> Manage Beds
               </button>
               {room.maintenanceStatus !== 'CLEAR' && (
                  <button className="flex-1 py-1.5 text-xs font-bold text-amber-600 border border-amber-500/30 bg-amber-500/5 rounded hover:bg-amber-500/20 transition-colors flex items-center justify-center gap-1">
                     <Wrench size={12} /> Maintenance Logs
                  </button>
               )}
            </div>

          </div>
        ))}

        {filteredRooms.length === 0 && (
          <div className="col-span-full py-12 flex flex-col items-center justify-center text-[var(--text-secondary)] border-2 border-dashed border-[var(--border)] rounded-xl bg-[var(--bg-card)]">
            <DoorOpen size={48} className="opacity-20 mb-4" />
            <p className="font-medium text-lg">No rooms found</p>
            <p className="text-sm opacity-70">Try adjusting your search criteria</p>
          </div>
        )}
      </div>

    </div>
  );
}
