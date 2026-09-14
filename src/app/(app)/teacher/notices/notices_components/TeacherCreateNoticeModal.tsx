"use client";
import React, { useState, useEffect } from 'react';
import { X, Send, Save, UploadCloud } from 'lucide-react';
import { useTeacherNoticesStore, NoticeType } from '../notices_store/useTeacherNoticesStore';

export default function TeacherCreateNoticeModal() {
  const { isCreateNoticeOpen, closeCreateNotice, selectedNotice, addNotice, updateNotice } = useTeacherNoticesStore();
  
  const [formData, setFormData] = useState({
    type: 'Class Notice' as NoticeType,
    title: '',
    targetClass: '',
    description: '',
    file: null as File | null
  });
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    if (selectedNotice) {
      setFormData({
        type: selectedNotice.type,
        title: selectedNotice.title,
        targetClass: selectedNotice.targetClass,
        description: selectedNotice.description,
        file: null
      });
    } else {
      setFormData({ type: 'Class Notice', title: '', targetClass: '', description: '', file: null });
    }
  }, [selectedNotice, isCreateNoticeOpen]);

  if (!isCreateNoticeOpen) return null;

  const handleSend = (e: React.FormEvent, isDraft: boolean) => {
    e.preventDefault();
    const newNotice = {
      id: selectedNotice ? selectedNotice.id : `NOTICE-${Date.now()}`,
      type: formData.type,
      title: formData.title,
      description: formData.description,
      targetClass: formData.targetClass,
      dateSent: new Date().toLocaleDateString('en-GB'),
      hasAttachment: !!formData.file,
      status: isDraft ? 'Draft' as const : 'Sent' as const
    };
    
    if (selectedNotice) {
      updateNotice(selectedNotice.id, newNotice);
    } else {
      addNotice(newNotice);
    }
    
    setSuccessMessage(isDraft ? 'Draft saved successfully.' : 'Notice broadcasted successfully.');
    setTimeout(() => {
      setSuccessMessage('');
      closeCreateNotice();
    }, 2500);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({...formData, file: e.target.files[0]});
    }
  };

  const NOTICE_TYPES: NoticeType[] = ['Class Notice', 'Announcement', 'Important Update', 'Homework Reminder', 'Exam Reminder', 'Assignment Reminder'];
  const CLASSES = ['Class 10 A', 'Class 9 B', 'Class 11 Sci', 'All Assigned Classes'];

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm transition-opacity p-4">
      <div className="w-full max-w-2xl bg-bg-main shadow-2xl rounded-2xl border border-border overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-border flex items-center justify-between bg-card">
          <h2 className="text-[18px] font-bold text-text-primary">
            {selectedNotice ? 'Edit Draft' : 'Compose Notice / Reminder'}
          </h2>
          <button onClick={closeCreateNotice} className="p-1.5 rounded-full bg-page hover:bg-white/10 text-text-secondary hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <form onSubmit={(e) => handleSend(e, false)} className="p-6 space-y-5">
           
           <div className="grid grid-cols-2 gap-4">
             <div>
               <label className="block text-[12px] font-bold text-text-secondary uppercase mb-2">Message Type</label>
               <select 
                 value={formData.type}
                 onChange={e => setFormData({...formData, type: e.target.value as NoticeType})}
                 className="w-full bg-input border border-border rounded-lg px-4 py-2.5 text-[14px] text-text-primary focus:border-primary focus:outline-none" required
               >
                 {NOTICE_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
               </select>
             </div>
             <div>
               <label className="block text-[12px] font-bold text-text-secondary uppercase mb-2">Target Class</label>
               <select 
                 value={formData.targetClass}
                 onChange={e => setFormData({...formData, targetClass: e.target.value})}
                 className="w-full bg-input border border-border rounded-lg px-4 py-2.5 text-[14px] text-text-primary focus:border-primary focus:outline-none" required
               >
                 <option value="">Select class...</option>
                 {CLASSES.map(c => <option key={c} value={c}>{c}</option>)}
               </select>
             </div>
           </div>

           <div>
             <label className="block text-[12px] font-bold text-text-secondary uppercase mb-2">Title / Subject</label>
             <input 
               type="text" 
               value={formData.title}
               onChange={e => setFormData({...formData, title: e.target.value})}
               className="w-full bg-input border border-border rounded-lg px-4 py-2.5 text-[14px] text-text-primary focus:border-primary focus:outline-none" 
               placeholder="e.g. Science Project Deadline Extended" required 
             />
           </div>

           <div>
             <label className="block text-[12px] font-bold text-text-secondary uppercase mb-2">Description</label>
             <textarea 
               value={formData.description}
               onChange={e => setFormData({...formData, description: e.target.value})}
               placeholder="Type the detailed message here..."
               className="w-full h-32 bg-input border border-border rounded-lg p-3 text-[14px] text-text-primary focus:outline-none focus:border-primary resize-none custom-scrollbar"
               required
             ></textarea>
           </div>

           <div>
             <label className="block text-[12px] font-bold text-text-secondary uppercase mb-2">Attachment (Optional)</label>
             <div className="relative w-full h-12 bg-input border border-border border-dashed rounded-lg flex items-center justify-center hover:border-primary/50 transition-colors cursor-pointer overflow-hidden">
               <input type="file" onChange={handleFileChange} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
               <div className="flex items-center gap-2 text-[13px] font-bold text-text-secondary">
                 <UploadCloud size={18} />
                 {formData.file ? <span className="text-primary">{formData.file.name}</span> : <span>Click or drag to upload a file</span>}
               </div>
             </div>
           </div>

           <div className="pt-2 flex justify-end gap-3 border-t border-border mt-4 items-center">
             {successMessage ? (
               <div className="flex-1 text-success text-[13px] font-bold animate-in fade-in">
                 {successMessage}
               </div>
             ) : null}
             <button type="button" onClick={closeCreateNotice} className="px-5 py-2 bg-transparent border border-border text-text-primary font-bold text-[13px] rounded-lg hover:bg-white/5 transition-colors mr-auto">
               Cancel
             </button>
             <button type="button" onClick={(e) => handleSend(e, true)} disabled={!!successMessage} className="px-5 py-2 bg-page border border-border text-text-primary font-bold text-[13px] rounded-lg hover:border-primary/50 transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
               <Save size={16} /> Save as Draft
             </button>
             <button type="submit" disabled={!!successMessage} className="px-5 py-2 bg-primary text-white font-bold text-[13px] rounded-lg hover:bg-primary/90 flex items-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
               <Send size={16} /> Broadcast Message
             </button>
           </div>
        </form>

      </div>
    </div>
  );
}
