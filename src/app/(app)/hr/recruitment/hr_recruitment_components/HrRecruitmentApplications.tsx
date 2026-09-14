"use client";

import { Search, Eye } from "lucide-react";
import type { CandidateApplication, JobPosition } from "../hr_recruitment_types/HrRecruitmentTypes";

interface HrRecruitmentApplicationsProps {
  applications: CandidateApplication[];
  jobs: JobPosition[];
  appStatus: string; setAppStatus: (s: string) => void;
  appJobId: string; setAppJobId: (s: string) => void;
  appSearch: string; setAppSearch: (s: string) => void;
  openCandidateModal: (candidate: CandidateApplication) => void;
}

export default function HrRecruitmentApplications({
  applications, jobs, appStatus, setAppStatus, appJobId, setAppJobId, appSearch, setAppSearch, openCandidateModal
}: HrRecruitmentApplicationsProps) {

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Applied': return <span className="bg-input text-foreground border border-border px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider">{status}</span>;
      case 'Shortlisted': return <span className="bg-info/10 text-info border border-info/20 px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider">{status}</span>;
      case 'Interview Scheduled': return <span className="bg-purple-500/10 text-purple-500 border border-purple-500/20 px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider">Scheduled</span>;
      case 'Interviewed': return <span className="bg-warning/10 text-warning border border-warning/20 px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider">{status}</span>;
      case 'Selected': return <span className="bg-success/10 text-success border border-success/20 px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider">{status}</span>;
      case 'Joined': return <span className="bg-success text-white border border-success px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider">{status}</span>;
      case 'Rejected': return <span className="bg-danger/10 text-danger border border-danger/20 px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider">{status}</span>;
      default: return <span>{status}</span>;
    }
  };

  return (
    <div className="motion-safe:animate-in motion-safe:fade-in duration-300">
      
      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6 p-4 bg-card border border-border rounded-lg shadow-sm">
        <div className="relative w-full sm:w-64">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input type="text" placeholder="Search candidate..." value={appSearch} onChange={(e) => setAppSearch(e.target.value)} className="pl-9 pr-4 py-2 bg-input border border-border rounded-md text-sm text-foreground font-bold focus:border-primary outline-none w-full" />
        </div>
        <select value={appJobId} onChange={(e) => setAppJobId(e.target.value)} className="px-4 py-2 bg-input border border-border rounded-md text-sm text-foreground font-bold focus:border-primary outline-none w-full sm:w-64 max-w-full">
          <option value="All">All Job Positions</option>
          {jobs.map(j => <option key={j.id} value={j.id}>{j.title}</option>)}
        </select>
        <select value={appStatus} onChange={(e) => setAppStatus(e.target.value)} className="px-4 py-2 bg-input border border-border rounded-md text-sm text-foreground font-bold focus:border-primary outline-none">
          <option value="All">All Statuses</option>
          <option value="Applied">Applied</option>
          <option value="Shortlisted">Shortlisted</option>
          <option value="Interview Scheduled">Interview Scheduled</option>
          <option value="Selected">Selected</option>
          <option value="Rejected">Rejected</option>
        </select>
      </div>

      {/* Table */}
      {applications.length === 0 ? (
         <div className="w-full p-12 flex flex-col items-center justify-center bg-card border border-border rounded-lg border-dashed">
           <span className="text-muted-foreground text-sm font-bold">No candidate applications found.</span>
         </div>
      ) : (
        <div className="w-full overflow-x-auto bg-card border border-border rounded-lg shadow-sm">
          <table className="w-full text-left border-collapse min-w-[1000px]">
            <thead>
              <tr className="border-b border-border bg-input/50">
                <th className="p-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">Candidate Profile</th>
                <th className="p-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">Applied Position</th>
                <th className="p-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">Experience & Edu</th>
                <th className="p-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">Status</th>
                <th className="p-4 text-xs font-bold text-muted-foreground uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {applications.map(app => (
                <tr key={app.id} className="border-b border-border hover:bg-primary/5 transition-colors group cursor-pointer" onClick={() => openCandidateModal(app)}>
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-info/10 flex items-center justify-center text-info font-bold border border-info/20 group-hover:scale-110 transition-transform">
                        {app.firstName[0]}{app.lastName[0]}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">{app.firstName} {app.lastName}</span>
                        <span className="text-xs font-medium text-muted-foreground">{app.email}</span>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-foreground">{app.jobTitle}</span>
                      <span className="text-xs font-medium text-muted-foreground">Applied: {app.appliedDate}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-foreground">{app.experienceYears} Years</span>
                      <span className="text-xs font-medium text-muted-foreground truncate max-w-[200px]" title={app.highestQualification}>{app.highestQualification}</span>
                    </div>
                  </td>
                  <td className="p-4">{getStatusBadge(app.status)}</td>
                  <td className="p-4 text-right">
                    <button 
                      onClick={(e) => { e.stopPropagation(); openCandidateModal(app); }} 
                      className="inline-flex items-center gap-2 px-3 py-1.5 bg-input border border-border text-foreground rounded-md font-bold text-xs hover:border-primary hover:text-primary transition-all active:scale-95 shadow-sm"
                    >
                      <Eye size={14} /> Review
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

