"use client";
import React, { useState } from 'react';
import { X, Save, RotateCcw, FileText, CheckCircle2 } from 'lucide-react';
import { useTeacherHomeworkStore } from '../homework_store/useTeacherHomeworkStore';

export default function TeacherReviewSubmissionModal() {
  const { isReviewModalOpen, closeReviewModal, selectedSubmissionForReview, selectedHomework } = useTeacherHomeworkStore();
  
  const [marks, setMarks] = useState(selectedSubmissionForReview?.grade === 'Pending Review' ? '' : selectedSubmissionForReview?.grade || '');
  const [feedback, setFeedback] = useState('Good effort, but please check question 3 again.');
  const [isResubmissionRequested, setIsResubmissionRequested] = useState(false);

  if (!isReviewModalOpen || !selectedSubmissionForReview) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const action = isResubmissionRequested ? 'Resubmission requested.' : 'Marks and feedback saved successfully.';
    window.dispatchEvent(new CustomEvent('open-teacher-coming-soon', { detail: action }));
    closeReviewModal();
  };

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/60 backdrop-blur-sm transition-opacity p-4">
      <div className="w-full max-w-2xl bg-bg-main shadow-2xl rounded-2xl border border-border overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="px-6 py-5 border-b border-border flex items-center justify-between bg-card">
          <div>
            <h2 className="text-[18px] font-bold text-text-primary">
              Review Submission: {selectedSubmissionForReview.name}
            </h2>
            <p className="text-[13px] text-text-secondary mt-1">{selectedHomework?.title}</p>
          </div>
          <button onClick={closeReviewModal} className="p-1.5 rounded-full bg-page hover:bg-white/10 text-text-secondary hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6 flex flex-col h-full max-h-[80vh] overflow-y-auto custom-scrollbar">
          
          {/* Submission Preview Mock */}
          <div className="bg-page border border-border rounded-xl p-4">
             <div className="flex items-center justify-between mb-4 border-b border-border pb-2">
                <h3 className="text-[14px] font-bold text-text-primary flex items-center gap-2"><FileText size={16}/> Student Uploads</h3>
                <span className="text-[12px] text-text-secondary">Submitted: {selectedSubmissionForReview.submittedOn}</span>
             </div>
             <div className="flex items-center gap-4">
                <div className="p-3 border border-border rounded-lg bg-card flex flex-col items-center justify-center cursor-pointer hover:border-info/50 transition-colors">
                  <FileText size={24} className="text-info mb-1" />
                  <span className="text-[11px] font-bold">assignment_v1.pdf</span>
                </div>
                <div className="p-3 border border-border rounded-lg bg-card flex flex-col items-center justify-center cursor-pointer hover:border-info/50 transition-colors">
                  <FileText size={24} className="text-info mb-1" />
                  <span className="text-[11px] font-bold">page_2_notes.jpg</span>
                </div>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-[12px] font-bold text-text-secondary uppercase mb-2">Assign Marks / Grade</label>
              <input 
                type="text" 
                value={marks} 
                onChange={e => setMarks(e.target.value)} 
                placeholder="e.g. 18/20 or A+"
                className="w-full bg-input border border-border rounded-lg px-4 py-2.5 text-[14px] text-text-primary focus:border-primary focus:outline-none" 
                required={!isResubmissionRequested}
                disabled={isResubmissionRequested}
              />
            </div>
            <div className="flex items-end pb-1">
               <label className="flex items-center gap-3 cursor-pointer p-2 rounded-lg hover:bg-white/5 border border-transparent transition-colors">
                 <input 
                   type="checkbox" 
                   checked={isResubmissionRequested} 
                   onChange={e => setIsResubmissionRequested(e.target.checked)} 
                   className="w-4 h-4 rounded bg-input border-border text-warning focus:ring-warning" 
                 />
                 <span className={`text-[14px] font-bold ${isResubmissionRequested ? 'text-warning' : 'text-text-primary'}`}>
                   Request Resubmission
                 </span>
               </label>
            </div>
          </div>

          <div>
            <label className="block text-[12px] font-bold text-text-secondary uppercase mb-2">Teacher Feedback</label>
            <textarea 
              value={feedback} 
              onChange={e => setFeedback(e.target.value)} 
              placeholder="Provide constructive feedback..."
              className="w-full h-32 bg-input border border-border rounded-lg px-4 py-3 text-[14px] text-text-primary focus:border-primary focus:outline-none resize-none" 
              required
            ></textarea>
          </div>

          <div className="pt-4 border-t border-border flex justify-end gap-3">
            <button type="button" onClick={closeReviewModal} className="px-5 py-2.5 bg-page border border-border text-text-primary font-bold text-[14px] rounded-lg hover:bg-white/5 transition-colors">
              Cancel
            </button>
            <button type="submit" className={`px-5 py-2.5 text-black font-bold text-[14px] rounded-lg transition-colors flex items-center gap-2 ${
              isResubmissionRequested ? 'bg-warning hover:bg-warning/90' : 'bg-success hover:bg-success/90'
            }`}>
              {isResubmissionRequested ? <><RotateCcw size={18} /> Request Resubmission</> : <><CheckCircle2 size={18} /> Save Evaluation</>}
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}
