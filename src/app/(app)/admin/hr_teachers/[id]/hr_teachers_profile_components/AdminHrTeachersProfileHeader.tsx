"use client";

import { Mail, Phone, BookOpen, Star } from "lucide-react";
import type { Teacher } from "../../hr_teachers_types/AdminHrTeachersTypes";

interface AdminHrTeachersProfileHeaderProps {
  teacher: Teacher;
  openAssignmentModal: () => void;
}

export default function AdminHrTeachersProfileHeader({ teacher, openAssignmentModal }: AdminHrTeachersProfileHeaderProps) {
  
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Active': return <span className="bg-success/10 text-success border border-success/20 px-3 py-1 rounded-full text-xs font-bold uppercase">{status}</span>;
      case 'On Leave': return <span className="bg-warning/10 text-warning border border-warning/20 px-3 py-1 rounded-full text-xs font-bold uppercase">{status}</span>;
      case 'Inactive': return <span className="bg-danger/10 text-danger border border-danger/20 px-3 py-1 rounded-full text-xs font-bold uppercase">{status}</span>;
      default: return <span className="bg-input text-foreground px-3 py-1 rounded-full text-xs font-bold uppercase">{status}</span>;
    }
  };

  return (
    <div className="bg-card border border-border rounded-xl shadow-sm p-6 mb-6">
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
        <div className="flex items-center gap-6">
          <div className="w-24 h-24 rounded-full bg-purple-500/10 border-2 border-purple-500 flex items-center justify-center text-purple-500 text-3xl font-bold shadow-lg shadow-purple-500/20">
            {teacher.firstName[0]}{teacher.lastName[0]}
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-1">
              <h1 className="text-2xl font-bold text-foreground">{teacher.firstName} {teacher.lastName}</h1>
              {getStatusBadge(teacher.status)}
            </div>
            <p className="text-sm font-semibold text-primary mb-3">{teacher.teacherId} • {teacher.department} Department</p>
            
            <div className="flex flex-wrap gap-4 text-xs font-bold text-muted-foreground">
              <span className="flex items-center gap-1.5 hover:text-foreground transition-colors cursor-pointer"><Phone size={14} className="text-info" /> {teacher.phone}</span>
              <span className="flex items-center gap-1.5 hover:text-foreground transition-colors cursor-pointer"><Mail size={14} className="text-danger" /> {teacher.email}</span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col items-end gap-3">
          {teacher.classTeacherOf ? (
            <div className="flex items-center gap-2 px-4 py-2 bg-info/10 border border-info/20 rounded-lg shadow-sm">
              <Star size={18} className="text-info fill-info" />
              <div>
                <p className="text-[10px] font-bold text-muted-foreground uppercase leading-tight">Class Teacher</p>
                <p className="text-sm font-bold text-info leading-tight">Class {teacher.classTeacherOf}</p>
              </div>
            </div>
          ) : (
            <div className="px-4 py-2 bg-input border border-border rounded-lg opacity-60">
              <p className="text-xs font-bold text-muted-foreground">Not a Class Teacher</p>
            </div>
          )}
          
          <button 
            onClick={openAssignmentModal} 
            className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-md text-xs font-bold hover:bg-primary hover:text-white transition-all active:scale-95 shadow-sm"
          >
            <BookOpen size={14} /> Assign Class Teacher
          </button>
        </div>
      </div>
    </div>
  );
}
