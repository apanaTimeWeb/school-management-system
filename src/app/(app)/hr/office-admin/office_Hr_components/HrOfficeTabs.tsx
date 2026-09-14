"use client";

import { Bell, ListTodo, FileText } from "lucide-react";

interface HrOfficeTabsProps {
  activeTab: 'Notices' | 'Tasks' | 'Documents';
  setActiveTab: (tab: 'Notices' | 'Tasks' | 'Documents') => void;
}

export default function HrOfficeTabs({ activeTab, setActiveTab }: HrOfficeTabsProps) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-border mb-6 gap-4">
      <div className="flex overflow-x-auto scrollbar-hide w-full md:w-auto">
        <button 
          onClick={() => setActiveTab('Notices')} 
          className={`flex items-center gap-2 px-6 py-4 font-bold transition-colors relative whitespace-nowrap ${activeTab === 'Notices' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
        >
          <Bell size={16} /> Notices & Circulars
          {activeTab === 'Notices' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary motion-safe:animate-in motion-safe:fade-in"></div>}
        </button>
        <button 
          onClick={() => setActiveTab('Tasks')} 
          className={`flex items-center gap-2 px-6 py-4 font-bold transition-colors relative whitespace-nowrap ${activeTab === 'Tasks' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
        >
          <ListTodo size={16} /> Tasks & Registers
          {activeTab === 'Tasks' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary motion-safe:animate-in motion-safe:fade-in"></div>}
        </button>
        <button 
          onClick={() => setActiveTab('Documents')} 
          className={`flex items-center gap-2 px-6 py-4 font-bold transition-colors relative whitespace-nowrap ${activeTab === 'Documents' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
        >
          <FileText size={16} /> Documents & Records
          {activeTab === 'Documents' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary motion-safe:animate-in motion-safe:fade-in"></div>}
        </button>
      </div>
    </div>
  );
}

