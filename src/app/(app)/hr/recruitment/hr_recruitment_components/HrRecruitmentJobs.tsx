"use client";

import type { JobPosition } from "../hr_recruitment_types/HrRecruitmentTypes";
import { Users, Building, MapPin, Briefcase } from "lucide-react";

interface HrRecruitmentJobsProps {
  jobs: JobPosition[];
  jobStatus: string;
  setJobStatus: (s: string) => void;
}

export default function HrRecruitmentJobs({ jobs, jobStatus, setJobStatus }: HrRecruitmentJobsProps) {
  return (
    <div className="motion-safe:animate-in motion-safe:fade-in duration-300">
      <div className="flex flex-col sm:flex-row gap-3 mb-6 p-4 bg-card border border-border rounded-lg shadow-sm">
        <select value={jobStatus} onChange={(e) => setJobStatus(e.target.value)} className="px-4 py-2 bg-input border border-border rounded-md text-sm text-foreground font-bold focus:border-primary outline-none">
          <option value="All">All Job Statuses</option>
          <option value="Open">Open (Active)</option>
          <option value="Closed">Closed</option>
          <option value="On Hold">On Hold</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {jobs.map(job => (
          <div key={job.id} className="bg-card border border-border rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden">
            <div className={`absolute top-0 right-0 px-3 py-1 rounded-bl-lg text-xs font-bold text-white ${
              job.status === 'Open' ? 'bg-success' : job.status === 'Closed' ? 'bg-danger' : 'bg-warning'
            }`}>
              {job.status}
            </div>
            
            <h3 className="text-lg font-bold text-foreground mt-2 mb-1 group-hover:text-primary transition-colors">{job.title}</h3>
            
            <div className="flex flex-col gap-2 mb-4 mt-4">
              <span className="flex items-center gap-2 text-xs font-bold text-muted-foreground"><Building size={14} className="text-info"/> {job.department} Department</span>
              <span className="flex items-center gap-2 text-xs font-bold text-muted-foreground"><MapPin size={14} className="text-danger"/> {job.location}</span>
              <span className="flex items-center gap-2 text-xs font-bold text-muted-foreground"><Briefcase size={14} className="text-purple-500"/> {job.type}</span>
            </div>

            <div className="bg-input/50 p-4 rounded-lg flex justify-between items-center border border-border">
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-primary">{job.vacancies}</span>
                <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider">Vacancies</span>
              </div>
              <Users size={24} className="text-muted-foreground/30" />
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-success">{job.filled}</span>
                <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider">Filled</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

