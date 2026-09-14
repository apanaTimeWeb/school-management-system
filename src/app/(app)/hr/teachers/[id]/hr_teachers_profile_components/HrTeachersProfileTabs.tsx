"use client";

import type { Teacher } from "../../hr_teachers_types/HrTeachersTypes";
import { Download, Clock, CalendarX, GraduationCap, Building } from "lucide-react";

interface HrTeachersProfileTabsProps {
  teacher: Teacher;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function HrTeachersProfileTabs({ teacher, activeTab, setActiveTab }: HrTeachersProfileTabsProps) {
  
  const tabs = [
    { id: "academic", label: "Academic Info" },
    { id: "workload", label: "Workload & Subjects" },
    { id: "attendance", label: "Attendance & Leaves" },
    { id: "documents", label: "Documents" },
  ];

  return (
    <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden min-h-[400px]">
      <div className="flex border-b border-border bg-input/30 overflow-x-auto scrollbar-hide">
        {tabs.map(tab => (
          <button 
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-4 text-sm font-bold whitespace-nowrap transition-colors relative ${
              activeTab === tab.id ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {tab.label}
            {activeTab === tab.id && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-t-full motion-safe:animate-in motion-safe:fade-in"></div>}
          </button>
        ))}
      </div>

      <div className="p-6">
        {activeTab === 'academic' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 motion-safe:animate-in motion-safe:fade-in duration-300">
            <div>
              <h3 className="text-sm font-bold text-foreground mb-4 uppercase tracking-wide border-b border-border pb-2 flex items-center gap-2">
                <GraduationCap size={16} className="text-purple-500" /> Qualifications & Experience
              </h3>
              <div className="space-y-4">
                <div><p className="text-xs text-muted-foreground uppercase font-bold">Highest Qualification</p><p className="text-sm font-bold text-foreground">{teacher.qualification}</p></div>
                <div><p className="text-xs text-muted-foreground uppercase font-bold">Total Experience</p><p className="text-sm font-bold text-foreground">{teacher.experienceYears} Years</p></div>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold text-foreground mb-4 uppercase tracking-wide border-b border-border pb-2 flex items-center gap-2">
                <Building size={16} className="text-info" /> Department Details
              </h3>
              <div className="space-y-4">
                <div><p className="text-xs text-muted-foreground uppercase font-bold">Primary Department</p><p className="text-sm font-bold text-foreground">{teacher.department}</p></div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'workload' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 motion-safe:animate-in motion-safe:fade-in duration-300">
            <div>
              <h3 className="text-sm font-bold text-foreground mb-4 uppercase tracking-wide border-b border-border pb-2 flex items-center gap-2">
                <BookOpen size={16} className="text-primary" /> Assigned Subjects & Classes
              </h3>
              <div className="space-y-5">
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-bold mb-2">Subjects Taught</p>
                  <div className="flex flex-wrap gap-2">
                    {teacher.subjects.map(s => <span key={s} className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-md text-xs font-bold">{s}</span>)}
                  </div>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-bold mb-2">Classes & Sections</p>
                  <div className="flex flex-wrap gap-2">
                    {teacher.classes.map(c => <span key={c} className="px-3 py-1 bg-input border border-border text-foreground rounded-md text-xs font-bold">{c}</span>)}
                    <span className="px-3 py-1 bg-input border border-border text-foreground rounded-md text-xs font-bold">Sec: {teacher.sections.join(', ')}</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold text-foreground mb-4 uppercase tracking-wide border-b border-border pb-2 flex items-center gap-2">
                <Clock size={16} className="text-warning" /> Weekly Workload
              </h3>
              <div className="bg-input/50 p-5 rounded-lg border border-border flex flex-col items-center justify-center relative overflow-hidden">
                <div className="w-24 h-24 rounded-full border-4 border-warning flex flex-col items-center justify-center mb-2 shadow-lg shadow-warning/20 bg-card z-10">
                  <span className="text-2xl font-bold text-foreground leading-none">{teacher.periodsPerWeek}</span>
                  <span className="text-[10px] text-muted-foreground font-bold uppercase mt-1">Periods</span>
                </div>
                <p className="text-xs font-bold text-muted-foreground z-10">Out of {teacher.maxPeriods} maximum</p>
                
                {/* Progress bar visual */}
                <div className="absolute bottom-0 left-0 h-1 bg-warning" style={{width: `${(teacher.periodsPerWeek / teacher.maxPeriods) * 100}%`}}></div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'attendance' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 motion-safe:animate-in motion-safe:fade-in duration-300">
            <div className="bg-success/5 p-6 rounded-lg border border-success/20 flex flex-col items-center justify-center text-center">
              <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-2">Overall Attendance</h4>
              <p className="text-4xl font-bold text-success mb-2">{teacher.attendancePercentage}%</p>
              <p className="text-xs font-bold text-success bg-success/10 px-3 py-1 rounded-full">Excellent Track Record</p>
            </div>
            
            <div className="bg-danger/5 p-6 rounded-lg border border-danger/20 flex flex-col items-center justify-center text-center relative">
              <CalendarX size={40} className="text-danger/20 absolute right-4 top-4" />
              <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-2">Leave Summary</h4>
              <div className="flex gap-8 w-full justify-center">
                <div>
                  <p className="text-3xl font-bold text-danger">{teacher.leavesTaken}</p>
                  <p className="text-xs font-bold text-muted-foreground mt-1 uppercase">Taken</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-warning">{teacher.leavesPending}</p>
                  <p className="text-xs font-bold text-muted-foreground mt-1 uppercase">Pending</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'documents' && (
          <div className="motion-safe:animate-in motion-safe:fade-in duration-300">
             {teacher.documents.length === 0 ? (
               <p className="text-sm text-muted-foreground font-bold py-8 text-center border-2 border-dashed border-border rounded-lg">No documents uploaded.</p>
             ) : (
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                 {teacher.documents.map(doc => (
                   <div key={doc.id} className="flex items-center justify-between p-4 bg-input border border-border rounded-lg group hover:border-primary hover:shadow-md motion-safe:transition-all cursor-pointer">
                     <div>
                       <p className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">{doc.name}</p>
                       <p className="text-xs font-bold text-muted-foreground mt-1">{doc.type}</p>
                     </div>
                     <button className="p-2 bg-primary/10 rounded-md text-primary hover:bg-primary hover:text-white transition-colors" title="Download Document">
                       <Download size={16} />
                     </button>
                   </div>
                 ))}
               </div>
             )}
          </div>
        )}
      </div>
    </div>
  );
}
// Imported BookOpen locally to fix missing import warning safely if any.
import { BookOpen } from "lucide-react";
