"use client";
import React, { useState, useEffect } from 'react';
import { X, Save, MessageSquare, CheckCircle2 } from 'lucide-react';
import { useTeacherMeetingsStore } from '../meetings_store/useTeacherMeetingsStore';

export default function TeacherMeetingActionModal() {
  const { isActionModalOpen, closeActionModal, selectedMeeting } = useTeacherMeetingsStore();
  
  const [formData, setFormData] = useState({
    notes: '',
    parentFeedback: '',
    teacherRemarks: '',
    followUpDate: ''
  });

  useEffect(() => {
    if (selectedMeeting) {
      setFormData({
        notes: selectedMeeting.notes || '',
        parentFeedback: selectedMeeting.parentFeedback || '',
        teacherRemarks: selectedMeeting.teacherRemarks || '',
        followUpDate: selectedMeeting.followUpDate || ''
      });
    }
  }, [selectedMeeting, isActionModalOpen]);

  if (!isActionModalOpen || !selectedMeeting) return null;

  const isCompleted = selectedMeeting.status === 'Completed';

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent('open-teacher-coming-soon', { detail: 'Meeting marked as completed & notes saved.' }));
    closeActionModal();
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm transition-opacity p-4">
      <div className="w-full max-w-2xl bg-bg-main shadow-2xl rounded-2xl border border-border overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-border flex items-center justify-between bg-card shrink-0">
          <h2 className="text-[18px] font-bold text-text-primary flex items-center gap-2">
            {isCompleted ? <CheckCircle2 size={20} className="text-success"/> : <MessageSquare size={20} className="text-primary"/>} 
            {isCompleted ? 'Meeting Summary' : 'Log Meeting Details'}
          </h2>
          <button onClick={closeActionModal} className="p-1.5 rounded-full bg-page hover:bg-white/10 text-text-secondary hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto custom-scrollbar">
           
           <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 flex flex-col md:flex-row gap-4 justify-between mb-6">
              <div>
                <p className="text-[12px] text-text-secondary uppercase font-bold tracking-wider mb-1">Student & Parent</p>
                <p className="text-[15px] font-bold text-primary">{selectedMeeting.studentName} ({selectedMeeting.parentName})</p>
              </div>
              <div className="md:text-right">
                <p className="text-[12px] text-text-secondary uppercase font-bold tracking-wider mb-1">Schedule</p>
                <p className="text-[14px] font-bold text-text-primary">{selectedMeeting.date} @ {selectedMeeting.time}</p>
              </div>
           </div>

           <form id="meeting-form" onSubmit={handleSave} className="space-y-5">
             
             <div>
               <label className="block text-[12px] font-bold text-text-secondary uppercase mb-2">Meeting Notes / Discussion</label>
               <textarea 
                 value={formData.notes}
                 onChange={e => setFormData({...formData, notes: e.target.value})}
                 readOnly={isCompleted}
                 placeholder="What was discussed in the meeting?"
                 className={`w-full h-24 bg-input border border-border rounded-lg p-3 text-[14px] text-text-primary focus:outline-none focus:border-primary resize-none custom-scrollbar ${isCompleted ? 'opacity-70 cursor-default' : ''}`}
                 required={!isCompleted}
               ></textarea>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
               <div>
                 <label className="block text-[12px] font-bold text-text-secondary uppercase mb-2">Parent's Feedback</label>
                 <textarea 
                   value={formData.parentFeedback}
                   onChange={e => setFormData({...formData, parentFeedback: e.target.value})}
                   readOnly={isCompleted}
                   placeholder="Concerns or feedback from parents..."
                   className={`w-full h-24 bg-input border border-border rounded-lg p-3 text-[14px] text-text-primary focus:outline-none focus:border-primary resize-none custom-scrollbar ${isCompleted ? 'opacity-70 cursor-default' : ''}`}
                 ></textarea>
               </div>
               <div>
                 <label className="block text-[12px] font-bold text-text-secondary uppercase mb-2">Teacher's Remarks / Conclusion</label>
                 <textarea 
                   value={formData.teacherRemarks}
                   onChange={e => setFormData({...formData, teacherRemarks: e.target.value})}
                   readOnly={isCompleted}
                   placeholder="Your final conclusion or advice..."
                   className={`w-full h-24 bg-input border border-border rounded-lg p-3 text-[14px] text-text-primary focus:outline-none focus:border-primary resize-none custom-scrollbar ${isCompleted ? 'opacity-70 cursor-default' : ''}`}
                 ></textarea>
               </div>
             </div>

             <div>
               <label className="block text-[12px] font-bold text-text-secondary uppercase mb-2">Follow-up Date (Optional)</label>
               <input 
                 type="date" 
                 value={formData.followUpDate}
                 onChange={e => setFormData({...formData, followUpDate: e.target.value})}
                 readOnly={isCompleted}
                 className={`w-full md:w-1/2 bg-input border border-border rounded-lg px-4 py-2.5 text-[14px] text-text-primary focus:border-primary focus:outline-none ${isCompleted ? 'opacity-70 cursor-default' : ''}`}
               />
             </div>

           </form>

        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-border bg-card flex justify-end shrink-0">
           {!isCompleted ? (
             <button type="submit" form="meeting-form" className="px-5 py-2 bg-primary text-black font-bold text-[13px] rounded-lg hover:bg-primary/90 flex items-center gap-2 transition-colors">
               <Save size={16} /> Save & Mark as Completed
             </button>
           ) : (
             <button onClick={closeActionModal} className="px-5 py-2 bg-page border border-border text-text-primary font-bold text-[13px] rounded-lg hover:bg-white/5 transition-colors">
               Close Summary
             </button>
           )}
        </div>

      </div>
    </div>
  );
}
