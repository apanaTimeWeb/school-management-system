"use client";

import { useState } from "react";
import { X, Search, FileText, Download, Printer, Wand2 } from "lucide-react";
import type { LetterTemplate } from "../hr_letters_types/HrLettersTypes";

interface HrLettersGeneratorModalProps {
  template: LetterTemplate | null;
  close: () => void;
  saveLetter: (employeeName: string) => void;
}

export default function HrLettersGeneratorModal({ template, close, saveLetter }: HrLettersGeneratorModalProps) {
  const [empSearch, setEmpSearch] = useState("");
  const [selectedEmpName, setSelectedEmpName] = useState("");

  if (!template) return null;

  // Basic mock autofill behavior
  const handleSelectEmployee = (name: string) => {
    setSelectedEmpName(name);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm motion-safe:transition-opacity">
      <div className="bg-card border border-border rounded-xl w-full max-w-6xl shadow-2xl overflow-hidden motion-safe:animate-in motion-safe:fade-in motion-safe:zoom-in-95 flex flex-col h-[90vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border bg-overlay">
          <div>
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2"><Wand2 size={24} className="text-primary"/> Letter Generator</h2>
            <p className="text-sm font-medium text-muted-foreground mt-1">Template: <span className="text-primary font-bold">{template.title}</span></p>
          </div>
          <button onClick={close} className="p-2 hover:bg-input rounded-full text-muted-foreground transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Workspace */}
        <div className="flex-1 flex flex-col lg:flex-row overflow-hidden bg-card">
          
          {/* Left Panel: Controls */}
          <div className="w-full lg:w-1/3 border-r border-border p-6 flex flex-col overflow-y-auto bg-input/10">
            <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4 border-b border-border/50 pb-2">1. Select Employee</h3>
            
            <div className="relative mb-4">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input 
                type="text" 
                placeholder="Search Employee ID or Name..." 
                value={empSearch} 
                onChange={(e) => setEmpSearch(e.target.value)} 
                className="pl-9 pr-4 py-2 bg-card border border-border rounded-md text-sm text-foreground focus:border-primary outline-none w-full" 
              />
            </div>

            {/* Mock dropdown/list for selection */}
            <div className="space-y-2 mb-8">
               {['Amit Kumar', 'Priya Sharma', 'Suresh Patel'].filter(n => n.toLowerCase().includes(empSearch.toLowerCase())).map(name => (
                 <div key={name} onClick={() => handleSelectEmployee(name)} className={`p-3 rounded-md border cursor-pointer transition-colors ${selectedEmpName === name ? 'bg-primary/10 border-primary text-primary font-bold' : 'bg-card border-border hover:border-primary/50 text-foreground'}`}>
                   {name}
                 </div>
               ))}
            </div>

            <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4 border-b border-border/50 pb-2">2. Adjust Variables</h3>
            <div className="space-y-4 mb-8">
              <div>
                <label className="block text-xs font-bold text-muted-foreground mb-1">Date</label>
                <input type="date" className="w-full px-3 py-2 bg-card border border-border rounded-md text-sm text-foreground focus:border-primary outline-none" defaultValue={new Date().toISOString().split('T')[0]} />
              </div>
              <div>
                <label className="block text-xs font-bold text-muted-foreground mb-1">Designation</label>
                <input type="text" className="w-full px-3 py-2 bg-card border border-border rounded-md text-sm text-foreground focus:border-primary outline-none" placeholder="e.g. Senior Teacher" />
              </div>
            </div>

            <div className="mt-auto pt-4 border-t border-border flex flex-col gap-3">
              <button 
                onClick={() => saveLetter(selectedEmpName)}
                disabled={!selectedEmpName}
                className="w-full py-3 bg-primary text-card font-bold text-sm rounded-md hover:bg-yellow-500 shadow-lg shadow-primary/20 transition-all active:scale-95 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <FileText size={18} /> Save to History
              </button>
              
              <div className="flex gap-3">
                <button 
                  disabled={!selectedEmpName}
                  className="flex-1 py-2 bg-card border border-border text-foreground font-bold text-xs rounded-md hover:text-info hover:border-info transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Download size={14} /> Download PDF
                </button>
                <button 
                  disabled={!selectedEmpName}
                  className="flex-1 py-2 bg-card border border-border text-foreground font-bold text-xs rounded-md hover:text-purple-500 hover:border-purple-500 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Printer size={14} /> Print Now
                </button>
              </div>
            </div>
          </div>

          {/* Right Panel: Live Preview */}
          <div className="flex-1 bg-card p-6 flex flex-col h-full overflow-hidden">
            <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4 border-b border-border/50 pb-2 flex justify-between items-center">
              3. Live Letter Preview
              <span className="text-[10px] bg-success/10 text-success px-2 py-0.5 rounded-full">Auto-updating</span>
            </h3>
            
            {/* The Document Area */}
            <div className="flex-1 bg-white dark:bg-zinc-900 border border-border rounded-lg shadow-inner overflow-y-auto p-8 lg:p-12 text-sm leading-relaxed text-zinc-800 dark:text-zinc-200 whitespace-pre-wrap font-serif">
              {template.defaultContent.replace(/\[Employee_Name\]/g, selectedEmpName || "[Employee_Name]")}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

