"use client";

import React from 'react';
import type { AssignmentItem } from '../student_assignments_types/student_assignments_types';
import { PenTool, Calendar, Clock, CheckCircle, AlertCircle, FileText, ChevronRight } from 'lucide-react';
import clsx from 'clsx';

interface Props {
  assignments: AssignmentItem[];
  onViewDetails: (asn: AssignmentItem) => void;
}

/**
 * RESPONSIBILITY: Renders the grid of assignment cards.
 */
export default function StudentAssignmentsList({ assignments, onViewDetails }: Props) {
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Graded': return 'bg-success/10 text-success border-success/20';
      case 'Submitted': return 'bg-blue-500/10 text-blue-600 border-blue-500/20';
      case 'Pending': return 'bg-amber-500/10 text-amber-600 border-amber-500/20';
      case 'Overdue': return 'bg-danger/10 text-danger border-danger/20';
      default: return 'bg-border text-text-secondary border-border';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Graded': return <CheckCircle size={14} className="text-success" />;
      case 'Submitted': return <FileText size={14} className="text-blue-500" />;
      case 'Pending': return <Clock size={14} className="text-amber-500" />;
      case 'Overdue': return <AlertCircle size={14} className="text-danger" />;
      default: return null;
    }
  };

  if (assignments.length === 0) {
    return (
      <div className="bg-card border border-border rounded-xl p-10 flex flex-col items-center justify-center text-center">
        <CheckCircle size={48} className="text-success/50 mb-4" />
        <h3 className="text-lg font-bold text-text-primary">No Assignments</h3>
        <p className="text-sm text-text-secondary mt-1">Nothing found for the selected filter.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {assignments.map((asn) => (
        <div 
          key={asn.id} 
          onClick={() => onViewDetails(asn)}
          className="bg-card border border-border rounded-xl p-5 flex flex-col hover:shadow-lg hover:-translate-y-1 hover:border-primary/30 motion-safe:transition-all cursor-pointer group relative overflow-hidden"
        >
          {asn.status === 'Overdue' && (
            <div className="absolute top-0 right-0 w-16 h-16 bg-danger/5 rounded-bl-full -z-10" />
          )}

          <div className="flex justify-between items-start mb-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-md bg-purple-500/10 flex items-center justify-center">
                <PenTool size={16} className="text-purple-500" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-text-secondary">{asn.subject}</span>
            </div>
            <span className={clsx("text-[10px] font-bold px-2 py-1 rounded-md border flex items-center gap-1.5", getStatusColor(asn.status))}>
              {getStatusIcon(asn.status)} {asn.status}
            </span>
          </div>

          <h3 className="text-base font-bold text-text-primary group-hover:text-purple-500 transition-colors line-clamp-1 mb-2">
            {asn.title}
          </h3>

          <p className="text-xs text-text-secondary line-clamp-2 mb-4 flex-1">
            {asn.instructions}
          </p>

          <div className="flex flex-col gap-2 mt-auto border-t border-border pt-4">
            <div className="flex items-center justify-between">
              <span className={clsx(
                "text-xs font-bold flex items-center gap-1.5",
                asn.status === 'Overdue' ? "text-danger" : "text-text-primary"
              )}>
                <Calendar size={14} className="text-amber-500" /> Due: {asn.dueDate}
              </span>
              <ChevronRight size={16} className="text-text-secondary group-hover:text-purple-500 transition-colors" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
