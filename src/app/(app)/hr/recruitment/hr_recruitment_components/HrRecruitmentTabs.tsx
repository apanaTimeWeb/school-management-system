"use client";

import { Briefcase, Users, Plus } from "lucide-react";

interface HrRecruitmentTabsProps {
  activeTab: 'Jobs' | 'Applications';
  setActiveTab: (tab: 'Jobs' | 'Applications') => void;
}

export default function HrRecruitmentTabs({ activeTab, setActiveTab }: HrRecruitmentTabsProps) {
  
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-border mb-6 gap-4">
      <div className="flex overflow-x-auto scrollbar-hide w-full md:w-auto">
        <button 
          onClick={() => setActiveTab('Jobs')} 
          className={`flex items-center gap-2 px-6 py-4 font-bold transition-colors relative whitespace-nowrap ${activeTab === 'Jobs' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
        >
          <Briefcase size={16} /> Job Positions
          {activeTab === 'Jobs' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary motion-safe:animate-in motion-safe:fade-in"></div>}
        </button>
        <button 
          onClick={() => setActiveTab('Applications')} 
          className={`flex items-center gap-2 px-6 py-4 font-bold transition-colors relative whitespace-nowrap ${activeTab === 'Applications' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
        >
          <Users size={16} /> Job Applications
          {activeTab === 'Applications' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary motion-safe:animate-in motion-safe:fade-in"></div>}
        </button>
      </div>
      
      {activeTab === 'Jobs' && (
        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-card font-bold rounded-md hover:bg-yellow-500 shadow-lg shadow-primary/20 transition-all active:scale-95 text-sm mb-2 md:mb-0">
          <Plus size={16} /> Post New Job
        </button>
      )}
    </div>
  );
}

