"use client";

import { X, CheckCircle, Circle, FileText, CheckCircle2, LogOut } from "lucide-react";
import type { EmployeeExitRecord } from "../hr_exit_types/HrExitTypes";

interface HrExitDetailModalProps {
  exitRecord: EmployeeExitRecord | null;
  close: () => void;
  toggleClearance: (exitId: string, chkId: string) => void;
  markRelieved: (exitId: string) => void;
}

export default function HrExitDetailModal({ exitRecord, close, toggleClearance, markRelieved }: HrExitDetailModalProps) {
  if (!exitRecord) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm motion-safe:transition-opacity">
      <div className="bg-card border border-border rounded-xl w-full max-w-5xl shadow-2xl overflow-hidden motion-safe:animate-in motion-safe:fade-in motion-safe:zoom-in-95 flex flex-col max-h-[95vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border bg-overlay">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Offboarding: {exitRecord.employeeName}</h2>
            <div className="flex gap-3 mt-1">
              <span className="text-sm font-bold text-primary">{exitRecord.designation} ({exitRecord.department})</span>
              <span className="text-sm font-medium text-muted-foreground border-l border-border pl-3">EMP ID: {exitRecord.employeeId}</span>
            </div>
          </div>
          <button onClick={close} className="p-2 hover:bg-input rounded-full text-muted-foreground transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 bg-card flex flex-col gap-6">
          
          {/* Top Info Bar */}
          <div className="flex flex-wrap gap-4 p-4 border border-border bg-input/20 rounded-xl">
            <div className="flex-1 min-w-[150px]">
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Resignation Date</p>
              <p className="text-sm font-bold text-foreground mt-1">{exitRecord.resignationDate}</p>
            </div>
            <div className="flex-1 min-w-[150px]">
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Notice Period</p>
              <p className="text-sm font-bold text-foreground mt-1">{exitRecord.noticePeriodDays} Days</p>
            </div>
            <div className="flex-1 min-w-[150px]">
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Expected Relieving</p>
              <p className="text-sm font-bold text-danger mt-1">{exitRecord.expectedRelievingDate}</p>
            </div>
            <div className="w-full mt-2 pt-2 border-t border-border/50">
               <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Reason for Exit</p>
               <p className="text-sm font-medium text-foreground mt-1">{exitRecord.reason}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left: Clearance Checklist */}
            <div className="border border-border rounded-xl p-5 bg-input/10">
              <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4 border-b border-border/50 pb-2 flex items-center gap-2"><CheckCircle size={16} className="text-primary"/> Clearance & Dues Tracker</h3>
              <div className="space-y-3">
                {exitRecord.clearanceChecklist.map(chk => (
                  <div key={chk.id} 
                       onClick={() => toggleClearance(exitRecord.id, chk.id)}
                       className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all active:scale-[0.98] ${chk.isCleared ? 'bg-success/10 border-success/30' : 'bg-card border-border hover:border-primary/50'}`}>
                    {chk.isCleared ? <CheckCircle size={18} className="text-success" /> : <Circle size={18} className="text-muted-foreground" />}
                    <span className={`text-sm font-bold flex-1 ${chk.isCleared ? 'text-success line-through opacity-70' : 'text-foreground'}`}>{chk.task}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Docs & Final Status */}
            <div className="flex flex-col gap-6">
              
              {/* Documents */}
              <div className="border border-border rounded-xl p-5 bg-input/10">
                <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4 border-b border-border/50 pb-2 flex items-center gap-2"><FileText size={16} className="text-info"/> Exit Documents</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-card border border-border rounded-lg">
                    <div>
                      <p className="text-sm font-bold text-foreground">Relieving Letter</p>
                      <p className="text-[10px] text-muted-foreground">Standard format issued on last working day.</p>
                    </div>
                    {exitRecord.relievingLetterGenerated ? 
                      <span className="text-xs font-bold text-success flex items-center gap-1 bg-success/10 px-2 py-1 rounded"><CheckCircle2 size={14}/> Generated</span> : 
                      <button className="px-3 py-1.5 text-xs font-bold bg-primary text-card rounded-md hover:bg-yellow-500 transition-colors shadow-sm">Generate</button>
                    }
                  </div>

                  <div className="flex items-center justify-between p-3 bg-card border border-border rounded-lg">
                    <div>
                      <p className="text-sm font-bold text-foreground">Experience Certificate</p>
                      <p className="text-[10px] text-muted-foreground">Issued only if all dues are cleared.</p>
                    </div>
                    {exitRecord.experienceCertificateGenerated ? 
                      <span className="text-xs font-bold text-success flex items-center gap-1 bg-success/10 px-2 py-1 rounded"><CheckCircle2 size={14}/> Generated</span> : 
                      <button className="px-3 py-1.5 text-xs font-bold bg-primary text-card rounded-md hover:bg-yellow-500 transition-colors shadow-sm">Generate</button>
                    }
                  </div>
                </div>
              </div>

              {/* Final Status Control */}
              <div className="border border-danger/20 rounded-xl p-5 bg-danger/5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-2 flex items-center gap-2"><LogOut size={16} className="text-danger"/> Final Separation</h3>
                  <p className="text-xs font-medium text-muted-foreground mb-4">Clicking the button below will permanently mark this employee as Exited and remove them from the active payroll and directories.</p>
                </div>

                {exitRecord.status === 'Relieved' ? (
                  <div className="w-full py-3 bg-success/20 text-success border border-success/30 font-bold text-sm rounded-md text-center flex items-center justify-center gap-2">
                    <CheckCircle size={18} /> Marked as Relieved
                  </div>
                ) : (
                  <button 
                    onClick={() => {
                      markRelieved(exitRecord.id);
                      close();
                    }}
                    className="w-full py-3 bg-danger text-white font-bold text-sm rounded-md hover:bg-danger/80 shadow-lg shadow-danger/20 transition-all active:scale-95 flex items-center justify-center gap-2"
                  >
                    Mark as Relieved / Exited
                  </button>
                )}
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

