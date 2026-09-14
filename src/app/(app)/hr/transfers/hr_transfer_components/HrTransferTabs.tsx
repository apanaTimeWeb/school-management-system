"use client";

import { RefreshCcw, History, Plus } from "lucide-react";

interface HrTransferTabsProps {
  activeTab: 'Requests' | 'History';
  setActiveTab: (tab: 'Requests' | 'History') => void;
  openInitiateModal: () => void;
}

export default function HrTransferTabs({ activeTab, setActiveTab, openInitiateModal }: HrTransferTabsProps) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-border mb-6 gap-4">
      <div className="flex overflow-x-auto scrollbar-hide w-full md:w-auto">
        <button 
          onClick={() => setActiveTab('Requests')} 
          className={`flex items-center gap-2 px-6 py-4 font-bold transition-colors relative whitespace-nowrap ${activeTab === 'Requests' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
        >
          <RefreshCcw size={16} /> Active Requests
          {activeTab === 'Requests' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary motion-safe:animate-in motion-safe:fade-in"></div>}
        </button>
        <button 
          onClick={() => setActiveTab('History')} 
          className={`flex items-center gap-2 px-6 py-4 font-bold transition-colors relative whitespace-nowrap ${activeTab === 'History' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
        >
          <History size={16} /> Past Transfers/Promotions
          {activeTab === 'History' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary motion-safe:animate-in motion-safe:fade-in"></div>}
        </button>
      </div>

      <button 
        onClick={openInitiateModal}
        className="flex items-center gap-2 px-4 py-2 bg-primary text-card font-bold rounded-md hover:bg-yellow-500 shadow-lg shadow-primary/20 transition-all active:scale-95 text-sm mb-2 md:mb-0"
      >
        <Plus size={16} /> Initiate Request
      </button>
    </div>
  );
}

