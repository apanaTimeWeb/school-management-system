"use client";

import { Wallet, BarChart3 } from "lucide-react";

interface AdminHrPayrollTabsProps {
  activeTab: 'Pipeline' | 'Reports';
  setActiveTab: (tab: 'Pipeline' | 'Reports') => void;
}

export default function AdminHrPayrollTabs({ activeTab, setActiveTab }: AdminHrPayrollTabsProps) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-border mb-6 gap-4">
      <div className="flex overflow-x-auto scrollbar-hide w-full md:w-auto">
        <button 
          onClick={() => setActiveTab('Pipeline')} 
          className={`flex items-center gap-2 px-6 py-4 font-bold transition-colors relative whitespace-nowrap ${activeTab === 'Pipeline' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
        >
          <Wallet size={16} /> Payroll Pipeline
          {activeTab === 'Pipeline' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary motion-safe:animate-in motion-safe:fade-in"></div>}
        </button>
        <button 
          onClick={() => setActiveTab('Reports')} 
          className={`flex items-center gap-2 px-6 py-4 font-bold transition-colors relative whitespace-nowrap ${activeTab === 'Reports' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
        >
          <BarChart3 size={16} /> Payroll Reports
          {activeTab === 'Reports' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary motion-safe:animate-in motion-safe:fade-in"></div>}
        </button>
      </div>
    </div>
  );
}
