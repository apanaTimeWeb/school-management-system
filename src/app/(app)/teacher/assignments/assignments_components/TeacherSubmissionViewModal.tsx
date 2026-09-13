"use client";
import React, { useState } from 'react';
import { X, CheckCircle, Clock, FileText, UserCircle } from 'lucide-react';
import { useTeacherAssignmentsStore } from '../assignments_store/useTeacherAssignmentsStore';
import { TEACHER_SUBMISSIONS_MOCK } from '../assignments_constants/TeacherAssignmentsMockData';

export default function TeacherSubmissionViewModal() {
  const { isSubmissionModalOpen, closeSubmissionModal, selectedHomework } = useTeacherAssignmentsStore();
  const [activeTab, setActiveTab] = useState<'completed' | 'pending'>('completed');

  if (!isSubmissionModalOpen || !selectedHomework) return null;

  return (
    <div className="fixed inset-0 z-[60] flex justify-end bg-black/60 backdrop-blur-sm transition-opacity">
      <div className="w-full max-w-3xl bg-bg-main h-full shadow-2xl flex flex-col border-l border-border animate-in slide-in-from-right duration-300">
        
        {/* Header */}
        <div className="px-6 py-5 bg-card border-b border-border flex items-start justify-between">
          <div>
            <span className="px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider bg-primary/20 text-primary mb-2 inline-block">Submission Status</span>
            <h2 className="text-[20px] font-bold text-text-primary line-clamp-1">{selectedHomework.title}</h2>
            <p className="text-[13px] text-text-secondary mt-1 flex items-center gap-2"><FileText size={14} className="text-text-secondary"/> {selectedHomework.class} • Due: {selectedHomework.dueDate}</p>
          </div>
          <button onClick={closeSubmissionModal} className="p-2 rounded-full bg-page hover:bg-white/10 text-text-secondary hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Overview Cards */}
        <div className="p-6 bg-black/20 border-b border-border flex gap-4">
           <div className="flex-1 bg-page border border-border rounded-xl p-4 text-center">
             <p className="text-[11px] text-text-secondary uppercase mb-1 font-bold">Total Assigned</p>
             <p className="text-[24px] font-bold text-text-primary">{selectedHomework.stats.total}</p>
           </div>
           <div className="flex-1 bg-success/10 border border-success/30 rounded-xl p-4 text-center cursor-pointer" onClick={() => setActiveTab('completed')}>
             <p className="text-[11px] text-success uppercase mb-1 font-bold flex items-center justify-center gap-1"><CheckCircle size={12}/> Completed</p>
             <p className="text-[24px] font-bold text-success">{selectedHomework.stats.completed}</p>
           </div>
           <div className="flex-1 bg-warning/10 border border-warning/30 rounded-xl p-4 text-center cursor-pointer" onClick={() => setActiveTab('pending')}>
             <p className="text-[11px] text-warning uppercase mb-1 font-bold flex items-center justify-center gap-1"><Clock size={12}/> Pending</p>
             <p className="text-[24px] font-bold text-warning">{selectedHomework.stats.pending}</p>
           </div>
        </div>

        {/* List */}
        <div className="flex-1 overflow-y-auto custom-scrollbar p-6">
           <h3 className="text-[16px] font-bold text-text-primary mb-4 border-b border-border pb-2">
             {activeTab === 'completed' ? 'Completed Submissions' : 'Pending Submissions'}
           </h3>

           {activeTab === 'completed' && (
             <div className="space-y-3">
               {TEACHER_SUBMISSIONS_MOCK.completed.map(sub => (
                 <div key={sub.studentId} className="bg-card border border-border rounded-lg p-4 flex items-center justify-between hover:border-success/50 transition-colors">
                   <div className="flex items-center gap-3">
                     <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center text-success"><UserCircle size={20}/></div>
                     <div>
                       <p className="text-[14px] font-bold text-text-primary">{sub.name} <span className="text-text-secondary font-normal text-[12px]">({sub.rollNo})</span></p>
                       <p className="text-[12px] text-text-secondary mt-0.5">Submitted: {sub.submittedOn}</p>
                     </div>
                   </div>
                   <div className="flex items-center gap-4">
                     <div className="text-right">
                       <span className="block text-[10px] text-text-secondary uppercase">Grade</span>
                       <span className={`text-[14px] font-bold ${sub.grade.includes('Pending') ? 'text-warning' : 'text-success'}`}>{sub.grade}</span>
                     </div>
                     <button onClick={() => window.dispatchEvent(new CustomEvent('open-teacher-coming-soon', { detail: 'Evaluate submission module.' }))} className="px-3 py-1.5 bg-success/20 text-success text-[12px] font-bold rounded hover:bg-success hover:text-black transition-colors">Review</button>
                   </div>
                 </div>
               ))}
             </div>
           )}

           {activeTab === 'pending' && (
             <div className="space-y-3">
               {TEACHER_SUBMISSIONS_MOCK.pending.map(sub => (
                 <div key={sub.studentId} className="bg-card border border-border rounded-lg p-4 flex items-center justify-between hover:border-warning/50 transition-colors">
                   <div className="flex items-center gap-3">
                     <div className="w-10 h-10 rounded-full bg-warning/10 flex items-center justify-center text-warning"><UserCircle size={20}/></div>
                     <div>
                       <p className="text-[14px] font-bold text-text-primary">{sub.name} <span className="text-text-secondary font-normal text-[12px]">({sub.rollNo})</span></p>
                       <p className="text-[12px] text-warning mt-0.5">{sub.status}</p>
                     </div>
                   </div>
                   <button onClick={() => window.dispatchEvent(new CustomEvent('open-teacher-coming-soon', { detail: 'Send Reminder notification.' }))} className="px-3 py-1.5 bg-page border border-border text-text-primary text-[12px] font-bold rounded hover:border-warning hover:text-warning transition-colors">Remind</button>
                 </div>
               ))}
             </div>
           )}
        </div>

      </div>
    </div>
  );
}
