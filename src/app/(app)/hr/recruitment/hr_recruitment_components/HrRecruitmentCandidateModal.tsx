"use client";

import { X, Calendar, Download, CheckCircle, XCircle, UserCheck, Briefcase } from "lucide-react";
import type { CandidateApplication, PipelineStatus } from "../hr_recruitment_types/HrRecruitmentTypes";

interface HrRecruitmentCandidateModalProps {
  candidate: CandidateApplication | null;
  close: () => void;
  updateStatus: (id: string, newStatus: PipelineStatus, note: string) => void;
}

export default function HrRecruitmentCandidateModal({ candidate, close, updateStatus }: HrRecruitmentCandidateModalProps) {
  if (!candidate) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm motion-safe:transition-opacity">
      <div className="bg-card border border-border rounded-xl w-full max-w-4xl shadow-2xl overflow-hidden motion-safe:animate-in motion-safe:fade-in motion-safe:zoom-in-95 flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border bg-overlay">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center text-primary text-xl font-bold shadow-md shadow-primary/20">
              {candidate.firstName[0]}{candidate.lastName[0]}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground">{candidate.firstName} {candidate.lastName}</h2>
              <p className="text-sm font-bold text-primary flex items-center gap-1.5"><Briefcase size={14}/> Applied: {candidate.jobTitle}</p>
            </div>
          </div>
          <button onClick={close} className="p-2 hover:bg-input rounded-full text-muted-foreground transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 flex flex-col lg:flex-row gap-8 bg-card">
          
          {/* Left Column: Details */}
          <div className="flex-1 space-y-6">
            <div>
              <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3 border-b border-border pb-1">Candidate Info</h3>
              <div className="grid grid-cols-2 gap-4">
                <div><p className="text-xs text-muted-foreground font-bold">Email</p><p className="text-sm font-bold text-foreground">{candidate.email}</p></div>
                <div><p className="text-xs text-muted-foreground font-bold">Phone</p><p className="text-sm font-bold text-foreground">{candidate.phone}</p></div>
                <div><p className="text-xs text-muted-foreground font-bold">Experience</p><p className="text-sm font-bold text-foreground">{candidate.experienceYears} Years</p></div>
                <div><p className="text-xs text-muted-foreground font-bold">Qualification</p><p className="text-sm font-bold text-foreground">{candidate.highestQualification}</p></div>
              </div>
            </div>

            {candidate.interviewDate && (
              <div className="bg-info/10 p-4 rounded-lg border border-info/20">
                <h3 className="text-xs font-bold text-info uppercase tracking-wider mb-2 flex items-center gap-2"><Calendar size={14} /> Interview Details</h3>
                <p className="text-sm font-bold text-foreground">Date: {candidate.interviewDate} | Time: {candidate.interviewTime}</p>
                {candidate.interviewFeedback && (
                   <div className="mt-2 text-sm text-foreground bg-card p-3 rounded-md border border-border shadow-sm">
                     <span className="font-bold">Feedback:</span> {candidate.interviewFeedback}
                   </div>
                )}
              </div>
            )}

            <div>
              <button className="flex items-center gap-2 px-4 py-2 bg-input border border-border text-foreground rounded-md font-bold text-sm hover:border-primary hover:text-primary transition-colors shadow-sm">
                <Download size={16} /> Download Resume / CV
              </button>
            </div>
          </div>

          {/* Right Column: Timeline & Actions */}
          <div className="w-full lg:w-1/3 bg-input/30 p-5 rounded-xl border border-border flex flex-col h-full">
            <h3 className="text-sm font-bold text-foreground mb-4 uppercase tracking-wide flex items-center gap-2">
              Pipeline Status
            </h3>
            
            {/* Timeline */}
            <div className="relative border-l-2 border-border ml-2 space-y-4 mb-6 flex-1">
              {candidate.history.map((h, i) => (
                <div key={i} className="relative pl-4 group">
                  <div className="absolute left-[-9px] top-1 w-4 h-4 rounded-full bg-primary/20 border-2 border-primary group-hover:scale-125 transition-transform"></div>
                  <p className="text-[10px] font-bold text-muted-foreground mb-0.5">{h.date}</p>
                  <h4 className="text-sm font-bold text-foreground">{h.action}</h4>
                  <p className="text-xs text-muted-foreground leading-tight">{h.note}</p>
                </div>
              ))}
            </div>

            {/* Actions Panel */}
            <div className="border-t border-border pt-4 flex flex-col gap-2">
              <p className="text-xs font-bold text-muted-foreground text-center mb-1">Take Action</p>
              
              {candidate.status === 'Applied' && (
                <button onClick={() => updateStatus(candidate.id, 'Shortlisted', 'Candidate shortlisted for interview phase.')} className="w-full py-2 bg-info/10 text-info border border-info/20 font-bold text-sm rounded-md hover:bg-info hover:text-white transition-all shadow-sm">Shortlist Candidate</button>
              )}
              
              {candidate.status === 'Shortlisted' && (
                <button onClick={() => {
                  const date = prompt("Enter interview date (e.g. 2024-07-01):");
                  if (date) updateStatus(candidate.id, 'Interview Scheduled', `Interview scheduled on ${date}.`);
                }} className="w-full py-2 bg-purple-500/10 text-purple-500 border border-purple-500/20 font-bold text-sm rounded-md hover:bg-purple-500 hover:text-white transition-all flex items-center justify-center gap-2 shadow-sm"><Calendar size={16}/> Schedule Interview</button>
              )}

              {candidate.status === 'Interview Scheduled' && (
                <button onClick={() => updateStatus(candidate.id, 'Interviewed', 'Interview conducted successfully.')} className="w-full py-2 bg-primary/10 text-primary border border-primary/20 font-bold text-sm rounded-md hover:bg-primary hover:text-white transition-all shadow-sm">Mark as Interviewed</button>
              )}

              {candidate.status === 'Interviewed' && (
                <div className="flex gap-2">
                  <button onClick={() => updateStatus(candidate.id, 'Selected', 'Candidate Selected. Offer sent.')} className="flex-1 py-2 bg-success/10 text-success border border-success/20 font-bold text-sm rounded-md hover:bg-success hover:text-white transition-all flex items-center justify-center gap-1 shadow-sm"><CheckCircle size={14}/> Select</button>
                  <button onClick={() => updateStatus(candidate.id, 'Rejected', 'Candidate Rejected post-interview.')} className="flex-1 py-2 bg-danger/10 text-danger border border-danger/20 font-bold text-sm rounded-md hover:bg-danger hover:text-white transition-all flex items-center justify-center gap-1 shadow-sm"><XCircle size={14}/> Reject</button>
                </div>
              )}

              {candidate.status === 'Selected' && (
                <button onClick={() => updateStatus(candidate.id, 'Joined', 'Candidate has formally joined.')} className="w-full py-2 bg-success text-white font-bold text-sm rounded-md hover:bg-green-600 shadow-md shadow-success/30 transition-all flex items-center justify-center gap-2"><UserCheck size={16}/> Mark as Joined</button>
              )}

              {candidate.status === 'Rejected' && (
                <div className="w-full py-2 text-center text-danger font-bold text-sm bg-danger/10 rounded-md border border-danger/20">Application Rejected</div>
              )}
              {candidate.status === 'Joined' && (
                <div className="w-full py-2 text-center text-success font-bold text-sm bg-success/10 rounded-md border border-success/20">Employee Onboarded</div>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

