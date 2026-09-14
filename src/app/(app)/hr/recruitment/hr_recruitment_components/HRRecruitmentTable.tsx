"use client";
import React from "react";
import { Eye, Mail, Phone, FileText } from "lucide-react";
import { useHRRecruitmentStore } from "../hr_recruitment_store/useHRRecruitmentStore";
import clsx from "clsx";

export default function HRRecruitmentTable() {
  const { candidates, searchQuery, departmentFilter, statusFilter, setActionModalOpen, setSelectedCandidate } = useHRRecruitmentStore();

  const filteredCandidates = candidates.filter(candidate => {
    const matchesSearch = candidate.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          candidate.appliedPosition.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          candidate.email.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesDept = departmentFilter === "All" || candidate.department === departmentFilter;
    const matchesStatus = statusFilter === "All" || candidate.status === statusFilter;
    
    return matchesSearch && matchesDept && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'Offered': return 'text-emerald-700 bg-emerald-50 border-emerald-200';
      case 'Rejected': return 'text-rose-700 bg-rose-50 border-rose-200';
      case 'Interviewed': return 'text-blue-700 bg-blue-50 border-blue-200';
      case 'Screening': return 'text-amber-700 bg-amber-50 border-amber-200';
      default: return 'text-slate-700 bg-slate-50 border-slate-200';
    }
  };

  const handleAction = (candidate: any) => {
    setSelectedCandidate(candidate);
    setActionModalOpen(true);
  };

  return (
    <div className="bg-card border border-border rounded-2xl shadow-sm overflow-hidden">
      <div className="overflow-x-auto custom-scrollbar">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-bg-input border-b border-border">
              <th className="p-4 text-xs font-black text-text-secondary uppercase tracking-wider">Candidate</th>
              <th className="p-4 text-xs font-black text-text-secondary uppercase tracking-wider">Position & Dept</th>
              <th className="p-4 text-xs font-black text-text-secondary uppercase tracking-wider hidden md:table-cell">Contact & Exp.</th>
              <th className="p-4 text-xs font-black text-text-secondary uppercase tracking-wider">Status</th>
              <th className="p-4 text-xs font-black text-text-secondary uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {filteredCandidates.map((candidate) => (
              <tr key={candidate.id} className="hover:bg-bg-page/50 transition-colors group">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 font-bold shrink-0">
                      {candidate.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-text-primary group-hover:text-teal-600 transition-colors">{candidate.name}</p>
                      <p className="text-xs font-semibold text-text-secondary">Applied: {candidate.appliedDate}</p>
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  <p className="text-sm font-bold text-text-primary">{candidate.appliedPosition}</p>
                  <p className="text-xs font-semibold text-text-secondary">{candidate.department}</p>
                </td>
                <td className="p-4 hidden md:table-cell">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-text-secondary mb-1">
                    <Mail size={12} className="text-teal-500" /> {candidate.email}
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-text-secondary">
                    <span>{candidate.experience} Exp</span>
                  </div>
                </td>
                <td className="p-4">
                  <span className={clsx("px-2.5 py-1 rounded-md text-[11px] font-bold border", getStatusColor(candidate.status))}>
                    {candidate.status}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button 
                      className="p-1.5 text-text-secondary hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-colors"
                      title="View Resume"
                    >
                      <FileText size={18} />
                    </button>
                    <button 
                      onClick={() => handleAction(candidate)}
                      className="px-3 py-1.5 text-xs font-bold text-teal-700 bg-teal-50 hover:bg-teal-100 rounded-lg transition-colors border border-teal-200"
                    >
                      Review
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {filteredCandidates.length === 0 && (
              <tr>
                <td colSpan={5} className="p-8 text-center text-text-secondary font-semibold">
                  No candidates found matching your criteria.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
