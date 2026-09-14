"use client";

import { Star, History } from "lucide-react";

interface HrPerformanceTabsProps {
  activeTab: 'Appraisal' | 'History';
  setActiveTab: (tab: 'Appraisal' | 'History') => void;
}

export default function HrPerformanceTabs({ activeTab, setActiveTab }: HrPerformanceTabsProps) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-border mb-6 gap-4">
      <div className="flex overflow-x-auto scrollbar-hide w-full md:w-auto">
        <button 
          onClick={() => setActiveTab('Appraisal')} 
          className={`flex items-center gap-2 px-6 py-4 font-bold transition-colors relative whitespace-nowrap ${activeTab === 'Appraisal' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
        >
          <Star size={16} /> Active Appraisals
          {activeTab === 'Appraisal' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary motion-safe:animate-in motion-safe:fade-in"></div>}
        </button>
        <button 
          onClick={() => setActiveTab('History')} 
          className={`flex items-center gap-2 px-6 py-4 font-bold transition-colors relative whitespace-nowrap ${activeTab === 'History' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
        >
          <History size={16} /> Performance History
          {activeTab === 'History' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary motion-safe:animate-in motion-safe:fade-in"></div>}
        </button>
      </div>
    </div>
  );
}

