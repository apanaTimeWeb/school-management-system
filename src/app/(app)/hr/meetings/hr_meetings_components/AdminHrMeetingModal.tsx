"use client";

import { X, Save, Plus, Trash2, CheckSquare, Square, Clock } from "lucide-react";
import { useState, useEffect } from "react";
import type { StaffMeeting, ActionItem, ActionItemStatus, MeetingStatus } from "../hr_meetings_types/AdminHrMeetingsTypes";

interface AdminHrMeetingModalProps {
  meeting: StaffMeeting | null;
  isOpen: boolean;
  close: () => void;
  save: (m: StaffMeeting) => void;
}

export default function AdminHrMeetingModal({ meeting, isOpen, close, save }: AdminHrMeetingModalProps) {
  
  const [local, setLocal] = useState<StaffMeeting | null>(null);

  useEffect(() => {
    if (isOpen && meeting) {
      setLocal(JSON.parse(JSON.stringify(meeting)));
    }
  }, [isOpen, meeting]);

  if (!isOpen || !local) return null;

  const handleSave = () => {
    save(local);
  };

  const addActionItem = () => {
    setLocal(prev => {
      if(!prev) return prev;
      const newItem: ActionItem = { id: `ai-${Date.now()}`, task: "", assignee: "", deadline: "", status: "Open" };
      return { ...prev, actionItems: [...prev.actionItems, newItem] };
    });
  };

  const updateActionItem = (id: string, field: keyof ActionItem, val: any) => {
    setLocal(prev => {
      if(!prev) return prev;
      return { ...prev, actionItems: prev.actionItems.map(a => a.id === id ? { ...a, [field]: val } : a) };
    });
  };

  const removeActionItem = (id: string) => {
    setLocal(prev => {
      if(!prev) return prev;
      return { ...prev, actionItems: prev.actionItems.filter(a => a.id !== id) };
    });
  };

  const toggleActionStatus = (id: string) => {
    setLocal(prev => {
      if(!prev) return prev;
      return { ...prev, actionItems: prev.actionItems.map(a => {
        if(a.id !== id) return a;
        let nextStatus: ActionItemStatus = 'Open';
        if(a.status === 'Open') nextStatus = 'In Progress';
        else if (a.status === 'In Progress') nextStatus = 'Closed';
        return { ...a, status: nextStatus };
      })};
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm motion-safe:transition-opacity">
      <div className="bg-card border border-border rounded-xl w-full max-w-5xl shadow-2xl overflow-hidden motion-safe:animate-in motion-safe:fade-in motion-safe:zoom-in-95 flex flex-col max-h-[95vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border bg-overlay">
          <div className="w-full flex justify-between items-center mr-4">
            <div>
              <h2 className="text-2xl font-bold text-foreground">{local.id ? 'Meeting Details & Minutes' : 'Schedule New Meeting'}</h2>
            </div>
            <select value={local.status} onChange={(e) => setLocal(prev => prev ? { ...prev, status: e.target.value as MeetingStatus } : prev)} className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border outline-none ${local.status === 'Upcoming' ? 'bg-info/10 text-info border-info/20' : local.status === 'Completed' ? 'bg-success/10 text-success border-success/20' : 'bg-danger/10 text-danger border-danger/20'}`}>
              <option value="Upcoming">Upcoming</option>
              <option value="Completed">Completed</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>
          <button onClick={close} className="p-2 hover:bg-input rounded-full text-muted-foreground transition-colors flex-shrink-0">
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 flex flex-col lg:flex-row gap-6">
          
          {/* Left Column: Schedule & Agenda */}
          <div className="flex-1 flex flex-col gap-4">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
              <div className="md:col-span-2">
                <label className="block text-[10px] font-bold text-muted-foreground mb-1 uppercase tracking-wider">Meeting Title</label>
                <input type="text" value={local.title} onChange={(e) => setLocal(prev => prev ? { ...prev, title: e.target.value } : prev)} className="w-full px-3 py-2 bg-input border border-border rounded-md text-sm font-bold text-foreground outline-none focus:border-primary" />
              </div>
              
              <div>
                <label className="block text-[10px] font-bold text-muted-foreground mb-1 uppercase tracking-wider">Date</label>
                <input type="date" value={local.date} onChange={(e) => setLocal(prev => prev ? { ...prev, date: e.target.value } : prev)} className="w-full px-3 py-2 bg-input border border-border rounded-md text-sm font-bold text-foreground outline-none focus:border-primary" />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-muted-foreground mb-1 uppercase tracking-wider">Time</label>
                <input type="time" value={local.time} onChange={(e) => setLocal(prev => prev ? { ...prev, time: e.target.value } : prev)} className="w-full px-3 py-2 bg-input border border-border rounded-md text-sm font-bold text-foreground outline-none focus:border-primary" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-[10px] font-bold text-muted-foreground mb-1 uppercase tracking-wider">Location / Link</label>
                <input type="text" value={local.location} onChange={(e) => setLocal(prev => prev ? { ...prev, location: e.target.value } : prev)} className="w-full px-3 py-2 bg-input border border-border rounded-md text-sm font-bold text-foreground outline-none focus:border-primary" />
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-bold text-muted-foreground mb-1 uppercase tracking-wider">Agenda</label>
              <textarea rows={4} value={local.agenda} onChange={(e) => setLocal(prev => prev ? { ...prev, agenda: e.target.value } : prev)} className="w-full px-3 py-2 bg-input border border-border rounded-md text-sm font-medium text-foreground outline-none focus:border-primary resize-none"></textarea>
            </div>

            <div className="mt-4 p-4 border border-border rounded-lg bg-input/20">
               <h4 className="text-xs font-bold text-foreground mb-3 uppercase tracking-wider">Attendance Tracking</h4>
               <label className="flex items-center gap-2 mb-3 cursor-pointer">
                 <input type="checkbox" checked={local.attendanceRecorded} onChange={(e) => setLocal(prev => prev ? { ...prev, attendanceRecorded: e.target.checked } : prev)} className="w-4 h-4 accent-primary" />
                 <span className="text-sm font-bold text-foreground">Mark Attendance Recorded</span>
               </label>
               {local.attendanceRecorded && (
                 <div className="flex gap-4 items-center">
                   <div className="flex items-center gap-2">
                     <span className="text-xs font-bold text-muted-foreground">Present:</span>
                     <input type="number" min="0" value={local.presentCount} onChange={(e) => setLocal(prev => prev ? { ...prev, presentCount: parseInt(e.target.value)||0 } : prev)} className="w-16 px-2 py-1 bg-card border border-border rounded-md text-sm font-bold text-center outline-none focus:border-primary" />
                   </div>
                   <span className="text-muted-foreground">/</span>
                   <div className="flex items-center gap-2">
                     <span className="text-xs font-bold text-muted-foreground">Total Expected:</span>
                     <input type="number" min="1" value={local.totalCount} onChange={(e) => setLocal(prev => prev ? { ...prev, totalCount: parseInt(e.target.value)||0 } : prev)} className="w-16 px-2 py-1 bg-card border border-border rounded-md text-sm font-bold text-center outline-none focus:border-primary" />
                   </div>
                 </div>
               )}
            </div>

          </div>

          {/* Right Column: Minutes & Action Items */}
          <div className="flex-1 flex flex-col gap-4">
            
            <div className="flex-1 flex flex-col">
              <label className="block text-[10px] font-bold text-muted-foreground mb-1 uppercase tracking-wider">Minutes of Meeting (MOM)</label>
              <textarea rows={6} value={local.minutes} onChange={(e) => setLocal(prev => prev ? { ...prev, minutes: e.target.value } : prev)} placeholder="Record discussions and decisions here..." className="w-full flex-1 min-h-[120px] px-3 py-2 bg-input border border-border rounded-md text-sm font-medium text-foreground outline-none focus:border-primary resize-none"></textarea>
            </div>

            <div className="mt-4">
              <div className="flex justify-between items-center mb-2">
                <label className="block text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Action Items & Follow-ups</label>
                <button onClick={addActionItem} className="text-xs font-bold text-primary hover:text-yellow-500 transition-colors flex items-center gap-1">
                  <Plus size={14}/> Add Task
                </button>
              </div>

              <div className="space-y-2 max-h-[200px] overflow-y-auto pr-1">
                {local.actionItems.map(ai => (
                  <div key={ai.id} className="flex flex-col gap-2 p-3 bg-card border border-border rounded-lg shadow-sm">
                    <div className="flex gap-2">
                      <button onClick={() => toggleActionStatus(ai.id)} title="Click to toggle status" className="mt-1 flex-shrink-0 text-muted-foreground hover:text-primary transition-colors">
                        {ai.status === 'Closed' ? <CheckSquare size={16} className="text-success"/> : ai.status === 'In Progress' ? <Clock size={16} className="text-info"/> : <Square size={16}/>}
                      </button>
                      <input type="text" placeholder="Task description..." value={ai.task} onChange={(e) => updateActionItem(ai.id, 'task', e.target.value)} className={`w-full px-2 py-1 bg-transparent border-b border-border/50 text-sm font-bold outline-none focus:border-primary ${ai.status === 'Closed' ? 'line-through text-muted-foreground' : 'text-foreground'}`} />
                      <button onClick={() => removeActionItem(ai.id)} className="p-1 text-muted-foreground hover:text-danger rounded-md transition-colors">
                        <Trash2 size={14}/>
                      </button>
                    </div>
                    <div className="flex gap-2 pl-6">
                      <input type="text" placeholder="Assignee" value={ai.assignee} onChange={(e) => updateActionItem(ai.id, 'assignee', e.target.value)} className="w-1/2 px-2 py-1 bg-input border border-border rounded text-xs font-medium outline-none focus:border-primary" />
                      <input type="date" value={ai.deadline} onChange={(e) => updateActionItem(ai.id, 'deadline', e.target.value)} className="w-1/2 px-2 py-1 bg-input border border-border rounded text-xs font-medium outline-none focus:border-primary" />
                    </div>
                  </div>
                ))}
                {local.actionItems.length === 0 && (
                  <p className="text-xs text-muted-foreground text-center py-4 bg-input/30 rounded-lg border border-dashed border-border">No action items added yet.</p>
                )}
              </div>
            </div>

          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-border bg-overlay flex justify-end gap-3">
           <button onClick={close} className="px-6 py-2 bg-input text-foreground font-bold text-sm rounded-md hover:bg-border transition-colors">
             Cancel
           </button>
           <button onClick={handleSave} className="px-6 py-2 bg-primary text-card font-bold text-sm rounded-md hover:bg-yellow-500 shadow-lg shadow-primary/20 transition-all active:scale-95 flex items-center gap-2">
             <Save size={16}/> Save Meeting Details
           </button>
        </div>

      </div>
    </div>
  );
}
