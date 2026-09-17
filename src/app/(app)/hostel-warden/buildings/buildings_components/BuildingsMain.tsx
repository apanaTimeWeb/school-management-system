"use client";

import React, { useState } from 'react';
import { 
  Building2, Plus, Search, ChevronDown, ChevronRight, 
  Settings, AlertTriangle, CheckCircle2, Eye, Edit, 
  MapPin, Wrench
} from 'lucide-react';
import { MOCK_BUILDINGS, MOCK_FLOORS } from '../buildings_constants/buildings.constants';

export default function BuildingsMain() {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedBuildings, setExpandedBuildings] = useState<string[]>(MOCK_BUILDINGS.map(b => b.id));

  const toggleBuilding = (id: string) => {
    setExpandedBuildings(prev => 
      prev.includes(id) ? prev.filter(bId => bId !== id) : [...prev, id]
    );
  };

  const filteredBuildings = MOCK_BUILDINGS.filter(b => 
    b.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    b.hostelName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'ACTIVE': return <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-600 rounded text-[10px] font-bold uppercase flex items-center gap-1"><CheckCircle2 size={12}/> Active</span>;
      case 'MAINTENANCE': return <span className="px-2 py-0.5 bg-amber-500/10 text-amber-600 rounded text-[10px] font-bold uppercase flex items-center gap-1"><Wrench size={12}/> Maintenance</span>;
      case 'CLOSED': return <span className="px-2 py-0.5 bg-red-500/10 text-red-600 rounded text-[10px] font-bold uppercase flex items-center gap-1"><AlertTriangle size={12}/> Closed</span>;
      default: return null;
    }
  };

  const getMaintenanceBadge = (status: string) => {
    switch(status) {
      case 'CLEAR': return <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-600 rounded text-[10px] font-bold uppercase tracking-wider">Clear</span>;
      case 'PENDING': return <span className="px-2 py-0.5 bg-blue-500/10 text-blue-600 rounded text-[10px] font-bold uppercase tracking-wider">Pending Tasks</span>;
      case 'URGENT': return <span className="px-2 py-0.5 bg-red-500/10 text-red-600 rounded text-[10px] font-bold uppercase tracking-wider animate-pulse">Urgent Repair</span>;
      default: return null;
    }
  };

  return (
    <div className="flex flex-col w-full h-full space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-[var(--bg-card)] p-4 rounded-xl border border-[var(--border)] shrink-0 shadow-sm">
        <div>
          <h1 className="text-[22px] font-bold text-[var(--text-primary)] flex items-center gap-2">
            <Building2 className="text-purple-500" size={24} /> Buildings & Floors
          </h1>
          <p className="text-[14px] text-[var(--text-secondary)] mt-1">
            Manage physical infrastructure, floor capacities, and maintenance status.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
           <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]" size={16} />
              <input 
                 type="text" 
                 placeholder="Search building..." 
                 value={searchTerm}
                 onChange={(e) => setSearchTerm(e.target.value)}
                 className="w-full bg-[var(--bg-input)] border border-[var(--border)] rounded-lg pl-9 pr-4 py-2 text-sm focus:border-[var(--primary)] outline-none transition-colors"
              />
           </div>
           <button className="flex items-center justify-center gap-2 px-4 py-2 bg-purple-600 text-white text-sm font-bold rounded-lg shadow-sm hover:bg-purple-700 transition-colors shrink-0">
              <Plus size={16} /> Add Building
           </button>
        </div>
      </div>

      {/* Buildings List */}
      <div className="flex flex-col gap-4 pb-6">
        {filteredBuildings.map(building => {
          const isExpanded = expandedBuildings.includes(building.id);
          const buildingFloors = MOCK_FLOORS.filter(f => f.buildingId === building.id);
          
          return (
            <div key={building.id} className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl overflow-hidden shadow-sm transition-shadow">
              
              {/* Building Header (Clickable) */}
              <div 
                className={`p-4 md:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer transition-colors hover:bg-[var(--bg-input)] ${isExpanded ? 'bg-[var(--bg-input)] border-b border-[var(--border)]' : ''}`}
                onClick={() => toggleBuilding(building.id)}
              >
                 <div className="flex items-center gap-4">
                    <button className="w-8 h-8 rounded-full bg-purple-500/10 text-purple-600 flex items-center justify-center hover:bg-purple-500 hover:text-white transition-colors shrink-0">
                       {isExpanded ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                    </button>
                    <div>
                       <h3 className="font-bold text-lg text-[var(--text-primary)] leading-tight">{building.name}</h3>
                       <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs text-[var(--text-secondary)] flex items-center gap-1 bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded">
                            <MapPin size={10} /> {building.hostelName}
                          </span>
                          {getStatusBadge(building.status)}
                       </div>
                    </div>
                 </div>

                 <div className="flex items-center gap-6 md:gap-8 overflow-x-auto pl-12 md:pl-0 hide-scrollbar">
                    <div className="flex flex-col">
                       <span className="text-[10px] uppercase font-bold text-[var(--text-secondary)]">Floors</span>
                       <span className="font-bold text-[var(--text-primary)]">{building.totalFloors}</span>
                    </div>
                    <div className="flex flex-col">
                       <span className="text-[10px] uppercase font-bold text-[var(--text-secondary)]">Rooms</span>
                       <span className="font-bold text-[var(--text-primary)]">{building.totalRooms}</span>
                    </div>
                    <div className="flex flex-col">
                       <span className="text-[10px] uppercase font-bold text-[var(--text-secondary)]">Capacity</span>
                       <span className="font-bold text-[var(--text-primary)]">{building.totalCapacity} <span className="text-xs font-normal">Beds</span></span>
                    </div>
                    <div className="flex gap-2 shrink-0">
                       <button onClick={(e) => {e.stopPropagation();}} className="p-2 rounded-lg bg-blue-500/10 text-blue-600 hover:bg-blue-500 hover:text-white transition-colors" title="Edit Building">
                         <Edit size={16} />
                       </button>
                       <button onClick={(e) => {e.stopPropagation();}} className="p-2 rounded-lg bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500 hover:text-white transition-colors flex items-center gap-1 text-xs font-bold" title="Add Floor">
                         <Plus size={14} /> Add Floor
                       </button>
                    </div>
                 </div>
              </div>

              {/* Floors Container */}
              {isExpanded && (
                <div className="p-4 md:p-6 bg-[rgba(139,92,246,0.02)]">
                  {buildingFloors.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                      {buildingFloors.map(floor => (
                        <div key={floor.id} className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-4 shadow-sm hover:border-purple-500/30 transition-colors group">
                           <div className="flex justify-between items-start mb-3">
                              <div>
                                 <h4 className="font-bold text-[var(--text-primary)]">{floor.floorName}</h4>
                                 <div className="flex items-center gap-2 mt-1">
                                    {getStatusBadge(floor.status)}
                                    {getMaintenanceBadge(floor.maintenanceStatus)}
                                 </div>
                              </div>
                              <button className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors opacity-0 group-hover:opacity-100">
                                 <Edit size={16} />
                              </button>
                           </div>

                           <div className="grid grid-cols-2 gap-3 mb-4">
                              <div className="bg-[var(--bg-input)] p-2.5 rounded-lg border border-[var(--border)]">
                                <span className="text-[10px] uppercase font-bold text-[var(--text-secondary)] block mb-0.5">Rooms</span>
                                <span className="font-bold text-[14px] text-[var(--text-primary)]">{floor.roomCount}</span>
                              </div>
                              <div className="bg-[var(--bg-input)] p-2.5 rounded-lg border border-[var(--border)]">
                                <span className="text-[10px] uppercase font-bold text-[var(--text-secondary)] block mb-0.5">Capacity</span>
                                <span className="font-bold text-[14px] text-[var(--text-primary)]">{floor.floorCapacity} <span className="text-[10px] font-normal">Beds</span></span>
                              </div>
                           </div>

                           <div>
                              <span className="text-[10px] uppercase font-bold text-[var(--text-secondary)] flex items-center gap-1 mb-2"><Settings size={12}/> Facilities</span>
                              <div className="flex flex-wrap gap-1.5">
                                 {floor.facilities.map((fac, i) => (
                                    <span key={i} className="px-2 py-1 bg-stone-100 dark:bg-stone-800 text-[var(--text-secondary)] rounded-md text-[10px] font-semibold border border-[var(--border)]">
                                       {fac}
                                    </span>
                                 ))}
                              </div>
                           </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8 text-[var(--text-secondary)] border-2 border-dashed border-[var(--border)] rounded-xl bg-[var(--bg-card)]">
                       <p className="font-medium">No floors added to this building yet.</p>
                       <button className="mt-3 text-purple-600 font-bold text-sm hover:underline flex items-center justify-center gap-1 mx-auto">
                          <Plus size={16} /> Add First Floor
                       </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}

        {filteredBuildings.length === 0 && (
          <div className="py-12 flex flex-col items-center justify-center text-[var(--text-secondary)] border-2 border-dashed border-[var(--border)] rounded-xl bg-[var(--bg-card)]">
            <Building2 size={48} className="opacity-20 mb-4" />
            <p className="font-medium text-lg">No buildings found</p>
          </div>
        )}
      </div>

    </div>
  );
}
