"use client";

import { Search, Plus, Megaphone, Edit3 } from "lucide-react";
import type { OfficeNotice } from "../office_admin_types/HrOfficeTypes";

interface HrOfficeNoticesProps {
  notices: OfficeNotice[];
  typeFilter: string; setTypeFilter: (s: string) => void;
  searchFilter: string; setSearchFilter: (s: string) => void;
  openModal: (notice?: OfficeNotice) => void;
}

export default function HrOfficeNotices({
  notices, typeFilter, setTypeFilter, searchFilter, setSearchFilter, openModal
}: HrOfficeNoticesProps) {

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'Urgent': return <span className="bg-danger/10 text-danger border border-danger/20 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">{priority}</span>;
      case 'High': return <span className="bg-warning/10 text-warning border border-warning/20 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">{priority}</span>;
      default: return <span className="bg-success/10 text-success border border-success/20 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">{priority}</span>;
    }
  };

  return (
    <div className="motion-safe:animate-in motion-safe:fade-in duration-300">
      
      {/* Top Actions & Filters */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 p-4 bg-card border border-border rounded-lg shadow-sm">
        
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <div className="relative w-full sm:w-64">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input type="text" placeholder="Search notices..." value={searchFilter} onChange={(e) => setSearchFilter(e.target.value)} className="pl-9 pr-4 py-2 bg-input border border-border rounded-md text-sm text-foreground font-bold focus:border-primary outline-none w-full" />
          </div>
          <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)} className="px-4 py-2 bg-input border border-border rounded-md text-sm text-foreground font-bold focus:border-primary outline-none">
            <option value="All">All Types</option>
            <option value="Notice">Notice</option>
            <option value="Circular">Circular</option>
          </select>
        </div>

        <button onClick={() => openModal()} className="flex items-center gap-2 px-6 py-2 bg-primary text-card rounded-md font-bold text-sm shadow-lg shadow-primary/20 hover:bg-yellow-500 transition-all active:scale-95">
          <Plus size={16} /> Publish Notice
        </button>
      </div>

      {/* Grid List */}
      {notices.length === 0 ? (
         <div className="w-full p-12 flex flex-col items-center justify-center bg-card border border-border rounded-lg border-dashed">
           <span className="text-muted-foreground text-sm font-bold">No notices or circulars found.</span>
         </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {notices.map(n => (
            <div key={n.id} className="bg-card border border-border rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full relative group">
               <div className="flex justify-between items-start mb-3">
                 <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-input/50 flex items-center justify-center text-muted-foreground">
                      <Megaphone size={14} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-muted-foreground uppercase">{n.type}</p>
                      <p className="text-[10px] font-semibold text-muted-foreground">{n.datePublished}</p>
                    </div>
                 </div>
                 {getPriorityBadge(n.priority)}
               </div>
               
               <h3 className="text-sm font-bold text-foreground mb-2 line-clamp-2">{n.title}</h3>
               <p className="text-xs text-muted-foreground mb-4 line-clamp-3">{n.content}</p>
               
               <div className="mt-auto flex justify-between items-center pt-4 border-t border-border">
                 <span className="text-[10px] font-bold bg-input px-2 py-1 rounded text-foreground">For: {n.targetAudience}</span>
                 
                 <button onClick={() => openModal(n)} className="opacity-0 group-hover:opacity-100 text-muted-foreground hover:text-primary transition-all p-1">
                   <Edit3 size={16} />
                 </button>
               </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

