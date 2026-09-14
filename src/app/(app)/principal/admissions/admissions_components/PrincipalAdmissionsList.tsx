import React from 'react';
import { PrincipalAdmissionApplication } from '../admissions_types/PrincipalAdmissions.types';
import { Eye, FileText } from 'lucide-react';
import { usePrincipalAdmissionsStore } from '../admissions_store/usePrincipalAdmissionsStore';

interface PrincipalAdmissionsListProps {
  applications: PrincipalAdmissionApplication[];
  loading: boolean;
}

export default function PrincipalAdmissionsList({ applications, loading }: PrincipalAdmissionsListProps) {
  const { openReviewModal } = usePrincipalAdmissionsStore();

  const getStageColor = (stage: string) => {
    switch(stage) {
      case 'Approved': return 'bg-success/20 text-success border-success/30';
      case 'Rejected': return 'bg-danger/20 text-danger border-danger/30';
      case 'Waitlisted': return 'bg-warning/20 text-warning border-warning/30';
      case 'Selected': return 'bg-primary/20 text-primary border-primary/30';
      case 'Enquiry': return 'bg-page text-text-secondary border-border';
      default: return 'bg-info/20 text-info border-info/30';
    }
  };

  if (loading) {
    return (
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="animate-pulse space-y-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-12 bg-skeleton-base rounded w-full" />
          ))}
        </div>
      </div>
    );
  }

  if (applications.length === 0) {
    return (
      <div className="bg-card border border-border rounded-lg p-12 flex flex-col items-center justify-center text-center">
        <FileText size={48} className="text-border mb-4" />
        <h3 className="text-[16px] font-bold text-text-primary mb-1">No applications found</h3>
        <p className="text-[13px] text-text-secondary">Try adjusting your search or filters.</p>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-primary/5 border-b border-border text-[12px] font-semibold text-text-secondary uppercase tracking-wider">
              <th className="p-4 w-32">App No.</th>
              <th className="p-4">Applicant Name</th>
              <th className="p-4 w-32">Class</th>
              <th className="p-4 w-32">Date</th>
              <th className="p-4 w-40">Current Stage</th>
              <th className="p-4 w-16 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app) => (
              <tr 
                key={app.id} 
                onClick={() => openReviewModal(app.id)}
                className="border-b border-border/50 hover:bg-white/5 transition-colors cursor-pointer group"
              >
                <td className="p-4 text-[13px] font-bold text-text-primary">{app.applicationNo}</td>
                <td className="p-4">
                  <p className="text-[14px] font-bold text-text-primary mb-0.5">{app.applicantName}</p>
                  <p className="text-[11px] text-text-secondary">P: {app.fatherName} | Ph: {app.contactNo}</p>
                </td>
                <td className="p-4 text-[13px] font-medium text-text-primary">Class {app.appliedClass}</td>
                <td className="p-4 text-[13px] text-text-secondary">{app.dateApplied}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded text-[11px] font-bold border ${getStageColor(app.stage)}`}>
                    {app.stage}
                  </span>
                </td>
                <td className="p-4 text-center">
                  <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.dispatchEvent(new CustomEvent('open-coming-soon', { detail: 'Action completed successfully!' })); }} className="p-2 bg-primary/10 border border-primary/30 rounded-md text-primary hover:bg-primary hover:text-white hover:border-primary transition-colors shadow-sm">
                    <Eye size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
