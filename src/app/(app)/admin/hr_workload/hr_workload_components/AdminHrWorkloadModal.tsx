"use client";

import { X, Save, BookOpen, UserCheck, Plus, Trash2 } from "lucide-react";
import { useState, useEffect } from "react";
import type { TeacherWorkloadRecord, AcademicAssignment, AdditionalResponsibility } from "../hr_workload_types/AdminHrWorkloadTypes";

interface AdminHrWorkloadModalProps {
  record: TeacherWorkloadRecord | null;
  close: () => void;
  save: (record: TeacherWorkloadRecord) => void;
}

export default function AdminHrWorkloadModal({ record, close, save }: AdminHrWorkloadModalProps) {
  
  const [localRecord, setLocalRecord] = useState<TeacherWorkloadRecord | null>(null);

  useEffect(() => {
    if (record) setLocalRecord(JSON.parse(JSON.stringify(record))); 
  }, [record]);

  if (!localRecord || !record) return null;

  const handleSave = () => {
    save(localRecord);
  };

  const addAssignment = () => {
    setLocalRecord(prev => {
      if(!prev) return prev;
      return {
        ...prev,
        assignments: [...prev.assignments, { id: `a-${Date.now()}`, subject: "", classAssigned: "", periodsPerWeek: 1 }]
      };
    });
  };

  const removeAssignment = (id: string) => {
    setLocalRecord(prev => {
      if(!prev) return prev;
      return { ...prev, assignments: prev.assignments.filter(a => a.id !== id) };
    });
  };

  const updateAssignment = (id: string, field: keyof AcademicAssignment, value: any) => {
    setLocalRecord(prev => {
      if(!prev) return prev;
      return { 
        ...prev, 
        assignments: prev.assignments.map(a => a.id === id ? { ...a, [field]: value } : a) 
      };
    });
  };

  const totalPeriods = localRecord.assignments.reduce((acc, curr) => acc + curr.periodsPerWeek, 0);
  const ratio = totalPeriods / localRecord.maxPeriodsAllowed;
  const isOverloaded = ratio > 1;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm motion-safe:transition-opacity">
      <div className="bg-card border border-border rounded-xl w-full max-w-5xl shadow-2xl overflow-hidden motion-safe:animate-in motion-safe:fade-in motion-safe:zoom-in-95 flex flex-col max-h-[95vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border bg-overlay">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Workload Editor: {localRecord.employeeName}</h2>
            <div className="flex gap-3 mt-1">
              <span className="text-sm font-bold text-primary">{localRecord.department}</span>
              <span className="text-sm font-medium text-muted-foreground border-l border-border pl-3">EMP ID: {localRecord.employeeId}</span>
            </div>
          </div>
          <button onClick={close} className="p-2 hover:bg-input rounded-full text-muted-foreground transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 bg-card flex flex-col lg:flex-row gap-6">
          
          {/* Left: Academic Assignments */}
          <div className="flex-1 flex flex-col gap-4">
            
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-sm font-bold text-foreground uppercase tracking-wider flex items-center gap-2"><BookOpen size={16} className="text-info"/> Subject & Class Assignment</h3>
              <button onClick={addAssignment} className="flex items-center gap-1 text-xs font-bold text-primary hover:text-yellow-500 transition-colors">
                <Plus size={14}/> Add Row
              </button>
            </div>

            <div className="space-y-3">
              {localRecord.assignments.map(a => (
                <div key={a.id} className="flex items-center gap-3 bg-input/10 border border-border p-3 rounded-lg">
                  <div className="flex-1">
                    <label className="block text-[10px] font-bold text-muted-foreground mb-1 uppercase">Subject</label>
                    <input type="text" value={a.subject} onChange={(e) => updateAssignment(a.id, 'subject', e.target.value)} className="w-full px-3 py-1.5 bg-card border border-border rounded-md text-sm font-bold outline-none focus:border-primary" />
                  </div>
                  <div className="w-24">
                    <label className="block text-[10px] font-bold text-muted-foreground mb-1 uppercase">Class</label>
                    <input type="text" value={a.classAssigned} onChange={(e) => updateAssignment(a.id, 'classAssigned', e.target.value)} className="w-full px-3 py-1.5 bg-card border border-border rounded-md text-sm font-bold outline-none focus:border-primary uppercase" />
                  </div>
                  <div className="w-24">
                    <label className="block text-[10px] font-bold text-muted-foreground mb-1 uppercase">Periods/Wk</label>
                    <input type="number" min="1" max="15" value={a.periodsPerWeek} onChange={(e) => updateAssignment(a.id, 'periodsPerWeek', parseInt(e.target.value) || 0)} className="w-full px-3 py-1.5 bg-card border border-border rounded-md text-sm font-bold outline-none focus:border-primary text-center" />
                  </div>
                  <button onClick={() => removeAssignment(a.id)} className="mt-5 p-2 text-muted-foreground hover:text-danger hover:bg-danger/10 rounded-md transition-colors">
                    <Trash2 size={16}/>
                  </button>
                </div>
              ))}
            </div>

            {/* Capacity Meter */}
            <div className={`mt-4 p-4 rounded-lg border ${isOverloaded ? 'bg-danger/10 border-danger/30' : 'bg-success/5 border-success/30'}`}>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-bold text-foreground">Total Capacity Meter</span>
                <span className={`text-sm font-bold ${isOverloaded ? 'text-danger' : 'text-success'}`}>{totalPeriods} / {localRecord.maxPeriodsAllowed} Periods</span>
              </div>
              <div className="w-full h-2 bg-card rounded-full overflow-hidden border border-border">
                <div className={`h-full transition-all duration-300 ${isOverloaded ? 'bg-danger' : 'bg-success'}`} style={{width: `${Math.min((totalPeriods/localRecord.maxPeriodsAllowed)*100, 100)}%`}}></div>
              </div>
              {isOverloaded && <p className="text-xs font-bold text-danger mt-2">Warning: Teacher is overloaded beyond max capacity.</p>}
            </div>

          </div>

          {/* Right: Additional Responsibilities */}
          <div className="w-full lg:w-1/3 flex flex-col gap-6">
            
            <div className="border border-border rounded-xl p-5 bg-card shadow-sm flex-1">
              <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4 border-b border-border/50 pb-2 flex items-center gap-2"><UserCheck size={16} className="text-warning"/> Additional Responsibilities</h3>
              
              <div className="space-y-3">
                {localRecord.responsibilities.map(r => (
                  <div key={r.id} className="flex items-center justify-between bg-input/20 border border-border px-3 py-2 rounded-md">
                    <span className="text-sm font-bold text-foreground">{r.role}</span>
                    <button onClick={() => setLocalRecord(prev => prev ? { ...prev, responsibilities: prev.responsibilities.filter(x => x.id !== r.id) } : prev)} className="text-danger hover:scale-110 transition-transform"><X size={14}/></button>
                  </div>
                ))}
              </div>

              <button className="w-full mt-4 py-2 border border-dashed border-border rounded-md text-xs font-bold text-muted-foreground hover:bg-input hover:text-foreground transition-colors flex items-center justify-center gap-2">
                <Plus size={14} /> Add Role (e.g. Class Teacher)
              </button>
            </div>

            {/* Actions */}
            <div className="flex gap-3 mt-auto">
              <button 
                onClick={close} 
                className="flex-1 py-3 bg-input text-foreground font-bold text-sm rounded-md hover:bg-border transition-colors flex items-center justify-center gap-2"
              >
                Discard
              </button>
              <button 
                onClick={handleSave} 
                className="flex-[2] py-3 bg-primary text-card font-bold text-sm rounded-md hover:bg-yellow-500 shadow-lg shadow-primary/20 transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                <Save size={18} /> Save Assignments
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
