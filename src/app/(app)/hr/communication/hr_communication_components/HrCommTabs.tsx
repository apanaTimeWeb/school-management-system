"use client";

import { Inbox, RadioTower } from "lucide-react";

interface HrCommTabsProps {
  activeTab: 'Inbox' | 'Channels';
  setActiveTab: (tab: 'Inbox' | 'Channels') => void;
}

export default function HrCommTabs({ activeTab, setActiveTab }: HrCommTabsProps) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-border mb-6 gap-4">
      <div className="flex overflow-x-auto scrollbar-hide w-full md:w-auto">
        <button 
          onClick={() => setActiveTab('Inbox')} 
          className={`flex items-center gap-2 px-6 py-4 font-bold transition-colors relative whitespace-nowrap ${activeTab === 'Inbox' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
        >
          <Inbox size={16} /> Notification Inbox
          {activeTab === 'Inbox' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary motion-safe:animate-in motion-safe:fade-in"></div>}
        </button>
        <button 
          onClick={() => setActiveTab('Channels')} 
          className={`flex items-center gap-2 px-6 py-4 font-bold transition-colors relative whitespace-nowrap ${activeTab === 'Channels' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
        >
          <RadioTower size={16} /> Integrations & Channels
          {activeTab === 'Channels' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary motion-safe:animate-in motion-safe:fade-in"></div>}
        </button>
      </div>
    </div>
  );
}

