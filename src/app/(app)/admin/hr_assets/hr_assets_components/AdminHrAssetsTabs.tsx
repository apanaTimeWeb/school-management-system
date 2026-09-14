"use client";

import { Monitor, History } from "lucide-react";

interface AdminHrAssetsTabsProps {
  activeTab: 'Active' | 'History';
  setActiveTab: (tab: 'Active' | 'History') => void;
}

export default function AdminHrAssetsTabs({ activeTab, setActiveTab }: AdminHrAssetsTabsProps) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-border mb-6 gap-4">
      <div className="flex overflow-x-auto scrollbar-hide w-full md:w-auto">
        <button 
          onClick={() => setActiveTab('Active')} 
          className={`flex items-center gap-2 px-6 py-4 font-bold transition-colors relative whitespace-nowrap ${activeTab === 'Active' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
        >
          <Monitor size={16} /> Active Asset Allocation
          {activeTab === 'Active' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary motion-safe:animate-in motion-safe:fade-in"></div>}
        </button>
        <button 
          onClick={() => setActiveTab('History')} 
          className={`flex items-center gap-2 px-6 py-4 font-bold transition-colors relative whitespace-nowrap ${activeTab === 'History' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
        >
          <History size={16} /> Asset Tracking History
          {activeTab === 'History' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary motion-safe:animate-in motion-safe:fade-in"></div>}
        </button>
      </div>
    </div>
  );
}
