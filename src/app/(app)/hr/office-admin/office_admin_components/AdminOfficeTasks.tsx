"use client";

import { Book, UserCheck, Calendar } from "lucide-react";
import type { OfficeTask } from "../office_admin_types/AdminOfficeTypes";

interface AdminOfficeTasksProps {
  tasks: OfficeTask[];
  typeFilter: string; setTypeFilter: (s: string) => void;
}

export default function AdminOfficeTasks({ tasks, typeFilter, setTypeFilter }: AdminOfficeTasksProps) {

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'Pending': return 'border-warning/50 bg-warning/5 text-warning';
      case 'In Progress': return 'border-info/50 bg-info/5 text-info';
      case 'Completed': return 'border-success/50 bg-success/5 text-success';
      default: return 'border-border bg-input';
    }
  };

  return (
    <div className="motion-safe:animate-in motion-safe:fade-in duration-300">
      
      <div className="flex justify-end mb-4">
        <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)} className="px-4 py-2 bg-input border border-border rounded-md text-sm text-foreground font-bold focus:border-primary outline-none">
          <option value="All">All Tasks</option>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      {tasks.length === 0 ? (
         <div className="w-full p-12 flex flex-col items-center justify-center bg-card border border-border rounded-lg border-dashed">
           <span className="text-muted-foreground text-sm font-bold">No tasks found.</span>
         </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tasks.map(t => (
            <div key={t.id} className={`border rounded-xl p-5 shadow-sm transition-shadow ${getStatusColor(t.status)}`}>
              <div className="flex justify-between items-start mb-3">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-white/50 backdrop-blur-sm border border-black/10">
                  {t.status}
                </span>
                {t.registerType && (
                  <span className="text-[10px] font-bold text-muted-foreground flex items-center gap-1">
                    <Book size={12}/> {t.registerType}
                  </span>
                )}
              </div>
              <h3 className="text-sm font-bold text-foreground mb-4">{t.taskName}</h3>
              
              <div className="flex flex-col gap-2 pt-3 border-t border-black/5">
                <div className="flex items-center gap-2 text-xs font-semibold text-foreground">
                  <UserCheck size={14} className="text-muted-foreground" /> Assigned: {t.assignedTo}
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-foreground">
                  <Calendar size={14} className="text-muted-foreground" /> Due: {t.dueDate}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
