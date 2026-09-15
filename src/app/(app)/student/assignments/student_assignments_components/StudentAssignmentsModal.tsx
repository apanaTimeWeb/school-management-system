"use client";

import React, { useEffect, useState } from 'react';
import type { AssignmentItem } from '../student_assignments_types/student_assignments_types';
import { X, PenTool, Calendar, Paperclip, UploadCloud, CheckCircle2, History, AlertCircle } from 'lucide-react';
import clsx from 'clsx';

interface Props {
  assignment: AssignmentItem;
  onClose: () => void;
}

/**
 * RESPONSIBILITY: Renders the modal with details and submission tools.
 */
export default function StudentAssignmentsModal({ assignment, onClose }: Props) {
  const [activeTab, setActiveTab] = useState<'details' | 'submission'>('details');

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  const canSubmit = (assignment.status === 'Pending' || assignment.status === 'Overdue') || 
                    (assignment.status !== 'Graded' && assignment.allowResubmission);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-overlay/80 backdrop-blur-sm motion-safe:animate-[fadeIn_0.2s_ease-out]">
      
      {/* Modal Container */}
      <div className="bg-popover border border-border rounded-xl w-full max-w-3xl max-h-[90vh] flex flex-col shadow-2xl relative motion-safe:animate-[slideIn_0.3s_ease-out]">
        
        {/* Header */}
        <div className="flex items-start justify-between p-5 border-b border-border bg-page rounded-t-xl">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center">
              <PenTool size={24} className="text-purple-500" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-text-secondary uppercase tracking-wider">{assignment.subject}</span>
              <h2 className="text-xl font-bold text-text-primary leading-tight">{assignment.title}</h2>
              <div className="flex gap-2 mt-1">
                <span className={clsx(
                  "text-[10px] font-bold px-2 py-0.5 rounded border",
                  assignment.status === 'Graded' ? "bg-success/10 text-success border-success/20" :
                  assignment.status === 'Overdue' ? "bg-danger/10 text-danger border-danger/20" :
                  "bg-amber-500/10 text-amber-600 border-amber-500/20"
                )}>
                  {assignment.status}
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded border bg-page text-text-secondary">
                  Due: {assignment.dueDate}
                </span>
              </div>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-card border border-border flex items-center justify-center text-text-secondary hover:bg-danger/10 hover:text-danger hover:border-danger/30 transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-border bg-card px-5">
          <button 
            onClick={() => setActiveTab('details')}
            className={clsx(
              "px-4 py-3 text-sm font-bold border-b-2 transition-colors",
              activeTab === 'details' ? "border-primary text-primary" : "border-transparent text-text-secondary hover:text-text-primary"
            )}
          >
            Instructions & Details
          </button>
          <button 
            onClick={() => setActiveTab('submission')}
            className={clsx(
              "px-4 py-3 text-sm font-bold border-b-2 transition-colors",
              activeTab === 'submission' ? "border-primary text-primary" : "border-transparent text-text-secondary hover:text-text-primary"
            )}
          >
            Submission & History
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto custom-scrollbar p-5 bg-card">
          
          {activeTab === 'details' ? (
            <div className="animate-[fadeIn_0.2s_ease-out]">
              <h4 className="text-sm font-bold text-text-primary mb-2">Instructions</h4>
              <div className="bg-page border border-border rounded-lg p-4 text-sm text-text-secondary leading-relaxed mb-6">
                {assignment.instructions}
              </div>

              {assignment.attachments.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-text-primary mb-2 flex items-center gap-2">
                    <Paperclip size={16} className="text-info" /> Reference Materials
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {assignment.attachments.map(att => (
                      <a key={att.id} href={att.url} className="flex items-center gap-2 p-3 rounded-lg border border-border bg-page hover:border-info/30 transition-colors">
                        <div className="w-8 h-8 rounded bg-info/10 flex items-center justify-center text-info">
                          <Paperclip size={14} />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs font-bold text-text-primary">{att.fileName}</span>
                          <span className="text-[10px] text-text-secondary">{att.fileSize}</span>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Feedback Section */}
              {assignment.status === 'Graded' && (
                <div className="bg-success/5 border border-success/20 rounded-lg p-5">
                  <div className="flex items-center justify-between border-b border-success/20 pb-3 mb-3">
                    <h4 className="text-sm font-bold text-success flex items-center gap-2">
                      <CheckCircle2 size={16} /> Teacher Feedback
                    </h4>
                    <span className="text-xl font-bold text-success bg-white px-3 py-1 rounded-md shadow-sm">
                      {assignment.marks}
                    </span>
                  </div>
                  <p className="text-sm text-text-secondary">{assignment.teacherFeedback}</p>
                </div>
              )}
            </div>
          ) : (
            <div className="animate-[fadeIn_0.2s_ease-out]">
              
              {/* Upload Form */}
              {canSubmit ? (
                <div className="bg-page border-2 border-dashed border-primary/30 rounded-xl p-8 flex flex-col items-center justify-center text-center hover:bg-primary/5 hover:border-primary/50 transition-all cursor-pointer mb-6">
                  <UploadCloud size={40} className="text-primary/70 mb-3" />
                  <h4 className="text-sm font-bold text-text-primary">Click or drag file to upload your answer</h4>
                  <p className="text-xs text-text-secondary mt-1">Supports PDF, DOCX, JPG (Max 10MB)</p>
                  <button className="mt-4 px-4 py-2 bg-primary text-white rounded-md text-sm font-bold shadow-sm">Select File</button>
                </div>
              ) : (
                <div className="bg-page border border-border rounded-xl p-6 text-center mb-6">
                  <AlertCircle size={32} className="text-text-secondary mx-auto mb-3" />
                  <h4 className="text-sm font-bold text-text-primary">Submission Closed</h4>
                  <p className="text-xs text-text-secondary mt-1">
                    {assignment.status === 'Graded' ? "This assignment has been graded." : "Resubmission is not allowed for this assignment."}
                  </p>
                </div>
              )}

              {/* History Timeline */}
              {assignment.submissionHistory.length > 0 && (
                <div>
                  <h4 className="text-sm font-bold text-text-primary mb-4 flex items-center gap-2">
                    <History size={16} className="text-text-secondary" /> Submission History
                  </h4>
                  <div className="space-y-4">
                    {assignment.submissionHistory.map((sub, index) => (
                      <div key={sub.id} className="relative pl-6 pb-4 last:pb-0 group">
                        {index !== assignment.submissionHistory.length - 1 && (
                          <div className="absolute left-2.5 top-5 w-[2px] h-full bg-border" />
                        )}
                        <div className="absolute left-0 top-1.5 w-5 h-5 rounded-full bg-page border-2 border-primary flex items-center justify-center z-10">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        </div>

                        <div className="bg-page border border-border rounded-lg p-4">
                          <div className="flex justify-between items-start mb-2">
                            <div className="flex items-center gap-2">
                              <Paperclip size={14} className="text-text-secondary" />
                              <a href={sub.fileUrl} className="text-sm font-bold text-primary hover:underline">{sub.fileName}</a>
                            </div>
                            <span className={clsx(
                              "text-[10px] font-bold px-2 py-0.5 rounded-md",
                              sub.status === 'Accepted' ? "bg-success/10 text-success" : 
                              sub.status === 'Rejected' ? "bg-danger/10 text-danger" : "bg-amber-500/10 text-amber-600"
                            )}>
                              {sub.status}
                            </span>
                          </div>
                          <span className="text-[10px] font-semibold text-text-secondary block mb-2">{sub.submittedAt}</span>
                          
                          {sub.teacherComment && (
                            <div className="mt-2 p-2 rounded bg-danger/5 border border-danger/20 text-xs text-danger/90">
                              <strong>Note from teacher:</strong> {sub.teacherComment}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          )}

        </div>
      </div>
    </div>
  );
}
