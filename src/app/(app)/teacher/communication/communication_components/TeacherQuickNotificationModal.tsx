"use client";
import React, { useState, useEffect } from 'react';
import { X, BellRing, FileText, CalendarCheck, MessageSquare, Megaphone } from 'lucide-react';
import { useTeacherCommunicationStore } from '../communication_store/useTeacherCommunicationStore';
import { TEACHER_PARENTS_LIST } from '../communication_constants/TeacherCommunicationMockData';

export default function TeacherQuickNotificationModal() {
  const { isQuickNotificationModalOpen, closeQuickNotification, notificationType } = useTeacherCommunicationStore();
  const [target, setTarget] = useState('');
  const [template, setTemplate] = useState('');

  useEffect(() => {
    if (notificationType === 'Homework') setTemplate('Dear Parent, this is to remind you that your ward has pending homework for [Subject]. Please ensure it is completed by [Date].');
    if (notificationType === 'Attendance') setTemplate('Dear Parent, your ward was absent today from [Class]. If this was expected, please ignore. Otherwise, kindly submit a leave request.');
    if (notificationType === 'Exam') setTemplate('Dear Parent, the results for [Exam Name] have been published. Please check the ERP portal for detailed marks.');
    if (notificationType === 'Announcement') setTemplate('Important Announcement: [Enter Details Here]');
  }, [notificationType]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent('open-teacher-coming-soon', { detail: `${notificationType} Notification sent successfully.` }));
    closeQuickNotification();
  };

  if (!isQuickNotificationModalOpen) return null;

  const renderIcon = () => {
    switch (notificationType) {
      case 'Homework': return <FileText size={20} className="text-info" />;
      case 'Attendance': return <CalendarCheck size={20} className="text-warning" />;
      case 'Exam': return <MessageSquare size={20} className="text-success" />;
      case 'Announcement': return <Megaphone size={20} className="text-primary" />;
      default: return <BellRing size={20} className="text-primary" />;
    }
  };

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/60 backdrop-blur-sm transition-opacity p-4">
      <div className="w-full max-w-md bg-bg-main shadow-2xl rounded-2xl border border-border overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="px-5 py-4 border-b border-border flex items-center justify-between bg-card">
          <h2 className="text-[16px] font-bold text-text-primary flex items-center gap-2">
            {renderIcon()} Send {notificationType} Alert
          </h2>
          <button onClick={closeQuickNotification} className="p-1.5 rounded-full bg-page hover:bg-white/10 text-text-secondary hover:text-white transition-colors">
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <form onSubmit={handleSend} className="p-5 space-y-4">
           <div>
             <label className="block text-[12px] font-bold text-text-secondary uppercase mb-2">Target Audience</label>
             <select 
               value={target}
               onChange={e => setTarget(e.target.value)}
               className="w-full bg-input border border-border rounded-lg px-4 py-2.5 text-[13px] text-text-primary focus:border-primary focus:outline-none" required
             >
               <option value="">Select student or class...</option>
               <optgroup label="Classes">
                 <option value="Class 10 A">Class 10 A (All Parents)</option>
                 <option value="Class 11 Sci">Class 11 Sci (All Parents)</option>
               </optgroup>
               <optgroup label="Individual Students">
                 {TEACHER_PARENTS_LIST.map(p => <option key={p.id} value={p.id}>{p.studentName}</option>)}
               </optgroup>
             </select>
           </div>

           <div>
             <label className="block text-[12px] font-bold text-text-secondary uppercase mb-2">Message Template</label>
             <textarea 
               value={template}
               onChange={e => setTemplate(e.target.value)}
               className="w-full h-28 bg-input border border-border rounded-lg p-3 text-[13px] text-text-primary focus:outline-none focus:border-primary resize-none custom-scrollbar"
               required
             ></textarea>
             <p className="text-[10px] text-text-secondary mt-1">You can edit the template before sending.</p>
           </div>

           <div className="pt-2">
             <button type="submit" className="w-full py-2.5 bg-primary text-black font-bold text-[13px] rounded-lg hover:bg-primary/90 flex items-center justify-center gap-2 transition-colors">
               <BellRing size={16} /> Send Alert Now
             </button>
           </div>
        </form>

      </div>
    </div>
  );
}
