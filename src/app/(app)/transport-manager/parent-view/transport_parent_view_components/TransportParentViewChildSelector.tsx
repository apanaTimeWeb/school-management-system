"use client";

import React from 'react';
import { Users, User } from 'lucide-react';
import type { ParentChildTransportProfile } from '../transport_parent_view_types/transport_parent_view.types';

// RESPONSIBILITY: Renders the tab selector if a parent has multiple children

interface TransportParentViewChildSelectorProps {
  childrenProfiles: ParentChildTransportProfile[];
  selectedChildId: string;
  onSelectChild: (id: string) => void;
}

export default function TransportParentViewChildSelector({ childrenProfiles, selectedChildId, onSelectChild }: TransportParentViewChildSelectorProps) {
  
  if (childrenProfiles.length <= 1) return null; // Only show if multiple children

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-[var(--bg-card)] p-4 rounded-xl border border-[var(--border)] shrink-0 w-full overflow-x-auto hide-scrollbar">
      <div className="flex items-center gap-2 text-[var(--text-secondary)] mr-2 flex-shrink-0">
        <Users size={18} />
        <span className="text-sm font-semibold">Select Child:</span>
      </div>
      
      <div className="flex gap-3">
        {childrenProfiles.map((child) => {
          const isSelected = child.studentId === selectedChildId;
          
          return (
            <button
              key={child.studentId}
              onClick={() => onSelectChild(child.studentId)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all border flex-shrink-0 ${
                isSelected 
                  ? 'bg-[var(--primary)] border-[var(--primary)] text-white shadow-lg shadow-[var(--primary-subtle)]' 
                  : 'bg-[var(--bg-input)] border-[var(--border)] text-[var(--text-primary)] hover:border-[var(--primary)]'
              }`}
            >
              <User size={16} className={isSelected ? 'text-white' : 'text-[var(--text-secondary)]'} />
              <div className="text-left">
                <p className="text-sm font-bold leading-tight">{child.studentName}</p>
                <p className={`text-[10px] ${isSelected ? 'text-white/80' : 'text-[var(--text-secondary)]'} leading-tight`}>{child.classSection}</p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
