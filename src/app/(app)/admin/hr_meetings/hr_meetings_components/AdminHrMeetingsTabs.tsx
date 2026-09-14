"use client";

import { Calendar, ListChecks } from "lucide-react";

interface AdminHrMeetingsTabsProps {
  activeTab: 'Schedule' | 'ActionItems';
  setActiveTab: (tab: 'Schedule' | 'ActionItems') => void;
}

export default function AdminHrMeetingsTabs({ activeTab, setActiveTab }: AdminHrMeetingsTabsProps) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-border mb-6 gap-4">
      <div className="flex overflow-x-auto scrollbar-hide w-full md:w-auto">
        <button 
          onClick={() => setActiveTab('Schedule')} 
          className={`flex items-center gap-2 px-6 py-4 font-bold transition-colors relative whitespace-nowrap ${activeTab === 'Schedule' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
        >
          <Calendar size={16} /> Meeting Schedule
          {activeTab === 'Schedule' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary motion-safe:animate-in motion-safe:fade-in"></div>}
        </button>
        <button 
          onClick={() => setActiveTab('ActionItems')} 
          className={`flex items-center gap-2 px-6 py-4 font-bold transition-colors relative whitespace-nowrap ${activeTab === 'ActionItems' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
        >
          <ListChecks size={16} /> Follow-up & Action Items
          {activeTab === 'ActionItems' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary motion-safe:animate-in motion-safe:fade-in"></div>}
        </button>
      </div>
    </div>
  );
}
