"use client";

import { LayoutTemplate, History } from "lucide-react";

interface HrLettersTabsProps {
  activeTab: 'Templates' | 'History';
  setActiveTab: (tab: 'Templates' | 'History') => void;
}

export default function HrLettersTabs({ activeTab, setActiveTab }: HrLettersTabsProps) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-border mb-6 gap-4">
      <div className="flex overflow-x-auto scrollbar-hide w-full md:w-auto">
        <button 
          onClick={() => setActiveTab('Templates')} 
          className={`flex items-center gap-2 px-6 py-4 font-bold transition-colors relative whitespace-nowrap ${activeTab === 'Templates' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
        >
          <LayoutTemplate size={16} /> Letter Templates
          {activeTab === 'Templates' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary motion-safe:animate-in motion-safe:fade-in"></div>}
        </button>
        <button 
          onClick={() => setActiveTab('History')} 
          className={`flex items-center gap-2 px-6 py-4 font-bold transition-colors relative whitespace-nowrap ${activeTab === 'History' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
        >
          <History size={16} /> Generated History
          {activeTab === 'History' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary motion-safe:animate-in motion-safe:fade-in"></div>}
        </button>
      </div>
    </div>
  );
}

