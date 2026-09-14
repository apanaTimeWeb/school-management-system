"use client";

import { X, CheckCircle, Circle, ShieldCheck, FileText, UploadCloud, UserPlus } from "lucide-react";
import type { OnboardingCandidate } from "../hr_onboarding_types/HrOnboardingTypes";

interface HrOnboardingDetailModalProps {
  candidate: OnboardingCandidate | null;
  close: () => void;
  toggleChecklist: (cId: string, chkId: string) => void;
  verifyDocument: (cId: string, docId: string) => void;
  grantSystemAccess: (cId: string) => void;
}

export default function HrOnboardingDetailModal({ candidate, close, toggleChecklist, verifyDocument, grantSystemAccess }: HrOnboardingDetailModalProps) {
  if (!candidate) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm motion-safe:transition-opacity">
      <div className="bg-card border border-border rounded-xl w-full max-w-5xl shadow-2xl overflow-hidden motion-safe:animate-in motion-safe:fade-in motion-safe:zoom-in-95 flex flex-col max-h-[95vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border bg-overlay">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Onboarding: {candidate.firstName} {candidate.lastName}</h2>
            <div className="flex gap-3 mt-1">
              <span className="text-sm font-bold text-primary">{candidate.designation} ({candidate.departmentAssignment})</span>
              <span className="text-sm font-medium text-muted-foreground border-l border-border pl-3">Temp ID: {candidate.tempId}</span>
            </div>
          </div>
          <button onClick={close} className="p-2 hover:bg-input rounded-full text-muted-foreground transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-6 bg-card">
          
          {/* Column 1: Joining Checklist */}
          <div className="lg:col-span-1 border border-border rounded-xl p-5 bg-input/20">
            <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4 flex items-center gap-2"><CheckCircle size={16} className="text-primary"/> Joining Checklist</h3>
            <div className="space-y-3">
              {candidate.checklist.map(chk => (
                <div key={chk.id} 
                     onClick={() => toggleChecklist(candidate.id, chk.id)}
                     className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all active:scale-[0.98] ${chk.isCompleted ? 'bg-success/10 border-success/30' : 'bg-card border-border hover:border-primary/50'}`}>
                  {chk.isCompleted ? <CheckCircle size={18} className="text-success" /> : <Circle size={18} className="text-muted-foreground" />}
                  <span className={`text-sm font-bold ${chk.isCompleted ? 'text-success line-through opacity-70' : 'text-foreground'}`}>{chk.task}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Documents Verification */}
          <div className="lg:col-span-1 border border-border rounded-xl p-5 bg-input/20">
            <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4 flex items-center gap-2"><FileText size={16} className="text-info"/> Document Verification</h3>
            <div className="space-y-3">
              {candidate.documents.map(doc => (
                <div key={doc.id} className="flex flex-col p-3 rounded-lg border border-border bg-card">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-bold text-foreground">{doc.name}</span>
                    {doc.isUploaded ? (
                       <span className="text-[10px] font-bold text-info bg-info/10 px-2 py-0.5 rounded-full uppercase tracking-wider">Uploaded</span>
                    ) : (
                       <span className="text-[10px] font-bold text-warning bg-warning/10 px-2 py-0.5 rounded-full uppercase tracking-wider">Pending</span>
                    )}
                  </div>
                  
                  {doc.isUploaded && (
                    <div className="flex gap-2 mt-2 pt-2 border-t border-border">
                      <button className="flex-1 py-1.5 text-xs font-bold text-muted-foreground hover:text-primary transition-colors flex items-center justify-center gap-1 bg-input rounded-md"><UploadCloud size={14}/> View</button>
                      <button 
                        onClick={() => verifyDocument(candidate.id, doc.id)}
                        className={`flex-1 py-1.5 text-xs font-bold rounded-md transition-colors flex items-center justify-center gap-1 ${doc.isVerified ? 'bg-success/20 text-success border border-success/30' : 'bg-input text-foreground hover:bg-success/10 hover:text-success'}`}
                      >
                        <ShieldCheck size={14}/> {doc.isVerified ? 'Verified' : 'Verify'}
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: System Access (Admin Control) */}
          <div className="lg:col-span-1 border border-primary/20 rounded-xl p-5 bg-primary/5 flex flex-col">
            <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4 flex items-center gap-2"><UserPlus size={16} className="text-primary"/> System Access (RBAC)</h3>
            
            <div className="mb-6 bg-card border border-border p-4 rounded-lg shadow-sm">
              <p className="text-xs font-bold text-muted-foreground mb-1">Final Employee ID</p>
              {candidate.finalEmployeeId ? (
                <p className="text-lg font-bold text-success">{candidate.finalEmployeeId}</p>
              ) : (
                <p className="text-sm font-bold text-warning italic">Pending Generation</p>
              )}
            </div>
            
            <div className="mb-6">
              <p className="text-xs font-medium text-muted-foreground leading-relaxed">
                As per RBAC policy, granting system access generates the permanent Employee ID and sends the default credentials to the user's email.
              </p>
            </div>

            <div className="mt-auto">
              {candidate.systemAccessGranted ? (
                <div className="w-full py-3 bg-success/20 text-success border border-success/30 font-bold text-sm rounded-md text-center flex items-center justify-center gap-2">
                  <CheckCircle size={18} /> Account Created Successfully
                </div>
              ) : (
                <button 
                  onClick={() => grantSystemAccess(candidate.id)}
                  className="w-full py-3 bg-primary text-card font-bold text-sm rounded-md hover:bg-yellow-500 shadow-lg shadow-primary/20 transition-all active:scale-95 flex items-center justify-center gap-2"
                >
                  <ShieldCheck size={18} /> Grant System Access
                </button>
              )}
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

