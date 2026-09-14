"use client";
import React, { useState } from 'react';
import { X, Send, Users } from 'lucide-react';
import { useTeacherMeetingsStore } from '../meetings_store/useTeacherMeetingsStore';

export default function TeacherScheduleMeetingModal() {
  const { isScheduleModalOpen, closeScheduleModal, scheduleMeeting } = useTeacherMeetingsStore();
  
  const [formData, setFormData] = useState({
    studentName: '',
    class: '',
    date: '',
    time: '',
    reason: ''
  });
  const [successMessage, setSuccessMessage] = useState('');

  if (!isScheduleModalOpen) return null;

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const newMeeting = {
      id: `MEET-${Date.now()}`,
      studentName: formData.studentName,
      parentName: "Unknown Parent",
      class: formData.class,
      date: formData.date,
      time: formData.time,
      reason: formData.reason,
      status: 'Scheduled' as const,
    };
    scheduleMeeting(newMeeting);
    setSuccessMessage('Meeting invite sent successfully.');
    setTimeout(() => {
      setSuccessMessage('');
      closeScheduleModal();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm transition-opacity p-4">
      <div className="w-full max-w-lg bg-bg-main shadow-2xl rounded-2xl border border-border overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-border flex items-center justify-between bg-card">
          <h2 className="text-[18px] font-bold text-text-primary flex items-center gap-2">
            <Users size={20} className="text-primary"/> Schedule Parent Meeting
          </h2>
          <button onClick={closeScheduleModal} className="p-1.5 rounded-full bg-page hover:bg-white/10 text-text-secondary hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <form onSubmit={handleSend} className="p-6 space-y-5">
           
           <div className="grid grid-cols-2 gap-4">
             <div>
               <label className="block text-[12px] font-bold text-text-secondary uppercase mb-2">Student</label>
               <input 
                 type="text" 
                 value={formData.studentName}
                 onChange={e => setFormData({...formData, studentName: e.target.value})}
                 className="w-full bg-input border border-border rounded-lg px-4 py-2.5 text-[14px] text-text-primary focus:border-primary focus:outline-none" required 
                 placeholder="Search student..."
               />
             </div>
             <div>
               <label className="block text-[12px] font-bold text-text-secondary uppercase mb-2">Class</label>
               <select 
                 value={formData.class}
                 onChange={e => setFormData({...formData, class: e.target.value})}
                 className="w-full bg-input border border-border rounded-lg px-4 py-2.5 text-[14px] text-text-primary focus:border-primary focus:outline-none" required
               >
                 <option value="">Select class...</option>
                 <option value="Class 10 A">Class 10 A</option>
                 <option value="Class 9 B">Class 9 B</option>
               </select>
             </div>
           </div>

           <div className="grid grid-cols-2 gap-4">
             <div>
               <label className="block text-[12px] font-bold text-text-secondary uppercase mb-2">Date</label>
               <input 
                 type="date" 
                 value={formData.date}
                 onChange={e => setFormData({...formData, date: e.target.value})}
                 className="w-full bg-input border border-border rounded-lg px-4 py-2.5 text-[14px] text-text-primary focus:border-primary focus:outline-none" required 
               />
             </div>
             <div>
               <label className="block text-[12px] font-bold text-text-secondary uppercase mb-2">Time</label>
               <input 
                 type="time" 
                 value={formData.time}
                 onChange={e => setFormData({...formData, time: e.target.value})}
                 className="w-full bg-input border border-border rounded-lg px-4 py-2.5 text-[14px] text-text-primary focus:border-primary focus:outline-none" required 
               />
             </div>
           </div>

           <div>
             <label className="block text-[12px] font-bold text-text-secondary uppercase mb-2">Agenda / Reason for Meeting</label>
             <textarea 
               value={formData.reason}
               onChange={e => setFormData({...formData, reason: e.target.value})}
               placeholder="State the purpose of this meeting..."
               className="w-full h-24 bg-input border border-border rounded-lg p-3 text-[14px] text-text-primary focus:outline-none focus:border-primary resize-none custom-scrollbar"
               required
             ></textarea>
           </div>

           <div className="pt-2 flex justify-end gap-3 border-t border-border mt-4 items-center">
             {successMessage ? (
               <div className="flex-1 text-success text-[13px] font-bold animate-in fade-in">
                 {successMessage}
               </div>
             ) : null}
             <button type="button" onClick={closeScheduleModal} className="px-5 py-2.5 bg-transparent border border-border text-text-primary font-bold text-[13px] rounded-lg hover:bg-white/5 transition-colors mr-auto">
               Cancel
             </button>
             <button type="submit" disabled={!!successMessage} className="px-5 py-2.5 bg-primary text-black font-bold text-[13px] rounded-lg hover:bg-primary/90 flex items-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
               <Send size={16} /> Send Invite
             </button>
           </div>
        </form>

      </div>
    </div>
  );
}
