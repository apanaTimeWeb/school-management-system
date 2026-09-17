"use client";

import React, { useState } from 'react';
import { 
  PackageSearch, Search, Filter, Box, Plus, 
  MapPin, CheckCircle2, AlertTriangle, Hammer, 
  RefreshCw, User, Tv, Plug, Droplets
} from 'lucide-react';
import { MOCK_ASSETS } from '../inventory_constants/inventory.constants';
import type { HostelAsset, AssetStatus } from '../inventory_types/inventory.types';

export default function InventoryAssetsMain() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');

  const filteredAssets = MOCK_ASSETS.filter(a => {
    const matchesSearch = a.assetName.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          a.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          a.locationDetail.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (statusFilter === 'ALL') return matchesSearch;
    return matchesSearch && a.status === statusFilter;
  });

  const getStatusBadge = (status: AssetStatus) => {
    switch(status) {
      case 'Working': return <span className="px-2.5 py-1 bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1"><CheckCircle2 size={10}/> Working</span>;
      case 'Damaged': return <span className="px-2.5 py-1 bg-rose-500/10 text-rose-600 border border-rose-500/20 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1"><AlertTriangle size={10}/> Damaged</span>;
      case 'Sent for Repair': return <span className="px-2.5 py-1 bg-amber-500/10 text-amber-600 border border-amber-500/20 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1"><Hammer size={10}/> In Repair</span>;
      case 'Replaced': return <span className="px-2.5 py-1 bg-blue-500/10 text-blue-600 border border-blue-500/20 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1"><RefreshCw size={10}/> Replaced</span>;
      default: return null;
    }
  };

  const getCategoryIcon = (category: string) => {
    switch(category) {
      case 'Furniture': return <Box size={18} className="text-purple-500" />;
      case 'Electrical': return <Plug size={18} className="text-amber-500" />;
      case 'Plumbing': return <Droplets size={18} className="text-blue-500" />;
      case 'Appliance': return <Tv size={18} className="text-sky-500" />;
      default: return <Box size={18} className="text-gray-500" />;
    }
  };

  return (
    <div className="flex flex-col w-full h-full space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-[var(--bg-card)] p-4 rounded-xl border border-[var(--border)] shrink-0 shadow-sm">
        <div>
          <h1 className="text-[22px] font-bold text-[var(--text-primary)] flex items-center gap-2">
            <PackageSearch className="text-fuchsia-500" size={24} /> Inventory & Assets
          </h1>
          <p className="text-[14px] text-[var(--text-secondary)] mt-1">
            Track room assets, common area equipment, and their working status.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
           <button className="flex items-center justify-center gap-2 px-4 py-2 bg-fuchsia-600 text-white text-sm font-bold rounded-lg shadow-sm hover:bg-fuchsia-700 transition-colors shrink-0">
              <Plus size={16} /> Add New Asset
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
            <option value="Working">Working</option>
            <option value="Damaged">Damaged</option>
            <option value="Sent for Repair">Sent for Repair</option>
         </select>
         
         <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]" size={16} />
            <input 
               type="text" 
               placeholder="Search by asset name, ID, or location..." 
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}
               className="w-full bg-[var(--bg-input)] border border-[var(--border)] rounded-lg pl-9 pr-4 py-2 text-sm focus:border-fuchsia-500 outline-none transition-colors"
            />
         </div>
      </div>

      {/* Assets Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 pb-6">
         {filteredAssets.map(asset => (
            <div key={asset.id} className={`bg-[var(--bg-card)] border rounded-xl p-5 shadow-sm flex flex-col hover:shadow-md transition-all ${
               asset.status === 'Damaged' ? 'border-rose-500/50 hover:border-rose-500' : 
               asset.status === 'Sent for Repair' ? 'border-amber-500/50 hover:border-amber-500' : 'border-[var(--border)] hover:border-fuchsia-500/30'
            }`}>
               
               {/* Asset Header */}
               <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                     <div className="w-10 h-10 rounded-xl bg-[var(--bg-input)] border border-[var(--border)] flex items-center justify-center shrink-0">
                        {getCategoryIcon(asset.category)}
                     </div>
                     <div>
                        <h3 className="font-bold text-[16px] text-[var(--text-primary)] leading-tight">{asset.assetName}</h3>
                        <p className="text-xs text-[var(--text-secondary)] mt-0.5">{asset.id} &bull; {asset.category}</p>
                     </div>
                  </div>
               </div>

               {/* Location & Status */}
               <div className="flex justify-between items-end mb-4">
                  <div className="flex flex-col gap-1.5">
                     <span className="text-[10px] uppercase font-bold text-[var(--text-secondary)] flex items-center gap-1"><MapPin size={10}/> Location</span>
                     <span className="text-sm font-semibold text-[var(--text-primary)]">{asset.locationDetail}</span>
                     <span className="text-[10px] bg-[var(--bg-input)] text-[var(--text-secondary)] border border-[var(--border)] px-1.5 py-0.5 rounded w-fit">{asset.locationType}</span>
                  </div>
                  <div>
                     {getStatusBadge(asset.status)}
                  </div>
               </div>

               {/* Assignment & Notes */}
               <div className="mt-auto pt-4 border-t border-[var(--border)] flex flex-col gap-3">
                  {asset.assignedToStudentName ? (
                     <div className="flex items-center gap-2 bg-blue-500/5 border border-blue-500/20 p-2 rounded-lg">
                        <User size={14} className="text-blue-600" />
                        <span className="text-xs font-semibold text-blue-700 dark:text-blue-400">Assigned: {asset.assignedToStudentName}</span>
                     </div>
                  ) : (
                     <div className="flex items-center gap-2 bg-[var(--bg-input)] border border-dashed border-[var(--border)] p-2 rounded-lg">
                        <User size={14} className="text-[var(--text-secondary)]" />
                        <span className="text-xs font-medium text-[var(--text-secondary)] italic">Common Asset (No specific assignment)</span>
                     </div>
                  )}

                  <div className="text-xs text-[var(--text-secondary)] bg-[var(--bg-input)] p-2.5 rounded-lg border border-[var(--border)] italic">
                     "{asset.notes}"
                  </div>
               </div>
               
            </div>
         ))}

         {filteredAssets.length === 0 && (
            <div className="col-span-full py-16 flex flex-col items-center justify-center text-[var(--text-secondary)] border-2 border-dashed border-[var(--border)] rounded-xl bg-[var(--bg-card)]">
               <PackageSearch size={48} className="opacity-20 mb-4" />
               <p className="font-medium text-lg">No assets found</p>
            </div>
         )}
      </div>

    </div>
  );
}
