"use client";

import { FolderLock, AlertOctagon } from "lucide-react";

interface HrDocumentsTabsProps {
  activeTab: 'Vault' | 'Alerts';
  setActiveTab: (tab: 'Vault' | 'Alerts') => void;
  alertCount: number;
}

export default function HrDocumentsTabs({ activeTab, setActiveTab, alertCount }: HrDocumentsTabsProps) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-border mb-6 gap-4">
      <div className="flex overflow-x-auto scrollbar-hide w-full md:w-auto">
        <button 
          onClick={() => setActiveTab('Vault')} 
          className={`flex items-center gap-2 px-6 py-4 font-bold transition-colors relative whitespace-nowrap ${activeTab === 'Vault' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
        >
          <FolderLock size={16} /> Document Vault
          {activeTab === 'Vault' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary motion-safe:animate-in motion-safe:fade-in"></div>}
        </button>
        <button 
          onClick={() => setActiveTab('Alerts')} 
          className={`flex items-center gap-2 px-6 py-4 font-bold transition-colors relative whitespace-nowrap ${activeTab === 'Alerts' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
        >
          <AlertOctagon size={16} /> Alerts & Expiries
          {alertCount > 0 && (
            <span className="bg-danger text-white text-[10px] font-bold px-2 py-0.5 rounded-full ml-1">{alertCount}</span>
          )}
          {activeTab === 'Alerts' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary motion-safe:animate-in motion-safe:fade-in"></div>}
        </button>
      </div>
    </div>
  );
}

