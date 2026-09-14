"use client";

import { useState } from "react";
import { FileText, Scale, Settings, CalendarDays, Download } from "lucide-react";

interface AdminHrLeaveTabsProps {
  activeTab: 'Applications' | 'Balances' | 'Types' | 'Holidays';
  setActiveTab: (tab: 'Applications' | 'Balances' | 'Types' | 'Holidays') => void;
}

export default function AdminHrLeaveTabs({ activeTab, setActiveTab }: AdminHrLeaveTabsProps) {
  const [isExporting, setIsExporting] = useState(false);

  const handleExport = () => {
    setIsExporting(true);
    setTimeout(() => setIsExporting(false), 2000);
  };

  const tabs = [
    { id: 'Applications', icon: <FileText size={16} />, label: "Leave Applications" },
    { id: 'Balances', icon: <Scale size={16} />, label: "Leave Balances" },
    { id: 'Types', icon: <Settings size={16} />, label: "Leave Types" },
    { id: 'Holidays', icon: <CalendarDays size={16} />, label: "Holiday Calendar" },
  ] as const;

  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-border mb-6 gap-4">
      <div className="flex overflow-x-auto scrollbar-hide w-full md:w-auto">
        {tabs.map(tab => (
          <button 
            key={tab.id}
            onClick={() => setActiveTab(tab.id)} 
            className={`flex items-center gap-2 px-6 py-4 font-bold transition-colors relative whitespace-nowrap ${activeTab === tab.id ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
          >
            {tab.icon} {tab.label}
            {activeTab === tab.id && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary motion-safe:animate-in motion-safe:fade-in"></div>}
          </button>
        ))}
      </div>
      <button 
        onClick={handleExport}
        disabled={isExporting}
        className="flex items-center gap-2 px-4 py-2 bg-input border border-border text-foreground font-bold rounded-md hover:border-primary hover:text-primary transition-all active:scale-95 text-sm shadow-sm whitespace-nowrap mb-2 md:mb-0 disabled:opacity-50 disabled:pointer-events-none" 
      >
        {isExporting ? <div className="w-4 h-4 border-2 border-muted-foreground border-t-transparent rounded-full animate-spin"></div> : <Download size={16} />} 
        {isExporting ? 'Exporting...' : 'Export Reports'}
      </button>
    </div>
  );
}
