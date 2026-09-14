"use client";

import { DoorOpen, History } from "lucide-react";

interface HrExitTabsProps {
  activeTab: 'Pipeline' | 'History';
  setActiveTab: (tab: 'Pipeline' | 'History') => void;
}

export default function HrExitTabs({ activeTab, setActiveTab }: HrExitTabsProps) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-border mb-6 gap-4">
      <div className="flex overflow-x-auto scrollbar-hide w-full md:w-auto">
        <button 
          onClick={() => setActiveTab('Pipeline')} 
          className={`flex items-center gap-2 px-6 py-4 font-bold transition-colors relative whitespace-nowrap ${activeTab === 'Pipeline' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
        >
          <DoorOpen size={16} /> Offboarding Pipeline
          {activeTab === 'Pipeline' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary motion-safe:animate-in motion-safe:fade-in"></div>}
        </button>
        <button 
          onClick={() => setActiveTab('History')} 
          className={`flex items-center gap-2 px-6 py-4 font-bold transition-colors relative whitespace-nowrap ${activeTab === 'History' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
        >
          <History size={16} /> Exited Employees
          {activeTab === 'History' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary motion-safe:animate-in motion-safe:fade-in"></div>}
        </button>
      </div>
    </div>
  );
}

