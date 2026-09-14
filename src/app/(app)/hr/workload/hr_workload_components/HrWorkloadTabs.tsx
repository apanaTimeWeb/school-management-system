"use client";

import { Users, PieChart } from "lucide-react";

interface HrWorkloadTabsProps {
  activeTab: 'List' | 'Summary';
  setActiveTab: (tab: 'List' | 'Summary') => void;
}

export default function HrWorkloadTabs({ activeTab, setActiveTab }: HrWorkloadTabsProps) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-border mb-6 gap-4">
      <div className="flex overflow-x-auto scrollbar-hide w-full md:w-auto">
        <button 
          onClick={() => setActiveTab('List')} 
          className={`flex items-center gap-2 px-6 py-4 font-bold transition-colors relative whitespace-nowrap ${activeTab === 'List' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
        >
          <Users size={16} /> Teacher Assignments
          {activeTab === 'List' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary motion-safe:animate-in motion-safe:fade-in"></div>}
        </button>
        <button 
          onClick={() => setActiveTab('Summary')} 
          className={`flex items-center gap-2 px-6 py-4 font-bold transition-colors relative whitespace-nowrap ${activeTab === 'Summary' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
        >
          <PieChart size={16} /> Workload Summary
          {activeTab === 'Summary' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary motion-safe:animate-in motion-safe:fade-in"></div>}
        </button>
      </div>
    </div>
  );
}

