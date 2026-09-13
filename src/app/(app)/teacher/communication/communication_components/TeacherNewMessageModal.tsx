"use client";
import React, { useState } from 'react';
import { X, Send, Search } from 'lucide-react';
import { useTeacherCommunicationStore } from '../communication_store/useTeacherCommunicationStore';
import { TEACHER_PARENTS_LIST } from '../communication_constants/TeacherCommunicationMockData';

export default function TeacherNewMessageModal() {
  const { isNewMessageModalOpen, closeNewMessageModal } = useTeacherCommunicationStore();
  const [recipientType, setRecipientType] = useState<'Individual' | 'Class'>('Individual');
  const [message, setMessage] = useState('');
  
  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent('open-teacher-coming-soon', { detail: 'Message sent successfully.' }));
    closeNewMessageModal();
  };

  if (!isNewMessageModalOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm transition-opacity p-4">
      <div className="w-full max-w-lg bg-bg-main shadow-2xl rounded-2xl border border-border overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-border flex items-center justify-between bg-card">
          <h2 className="text-[18px] font-bold text-text-primary">New Message</h2>
          <button onClick={closeNewMessageModal} className="p-1.5 rounded-full bg-page hover:bg-white/10 text-text-secondary hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <form onSubmit={handleSend} className="p-6 space-y-5">
           
           <div className="flex bg-page p-1 rounded-lg border border-border">
             <button type="button" onClick={() => setRecipientType('Individual')} className={`flex-1 py-1.5 text-[13px] font-bold rounded ${recipientType === 'Individual' ? 'bg-primary text-black' : 'text-text-secondary'}`}>
               Individual Parent
             </button>
             <button type="button" onClick={() => setRecipientType('Class')} className={`flex-1 py-1.5 text-[13px] font-bold rounded ${recipientType === 'Class' ? 'bg-primary text-black' : 'text-text-secondary'}`}>
               Entire Class
             </button>
           </div>

           <div>
             <label className="block text-[12px] font-bold text-text-secondary uppercase mb-2">Select Recipient(s)</label>
             {recipientType === 'Individual' ? (
               <select className="w-full bg-input border border-border rounded-lg px-4 py-2.5 text-[14px] text-text-primary focus:border-primary focus:outline-none" required>
                 <option value="">Select a student/parent...</option>
                 {TEACHER_PARENTS_LIST.map(p => (
                   <option key={p.id} value={p.id}>{p.studentName} (Parent: {p.parentName})</option>
                 ))}
               </select>
             ) : (
               <select className="w-full bg-input border border-border rounded-lg px-4 py-2.5 text-[14px] text-text-primary focus:border-primary focus:outline-none" required>
                 <option value="">Select a class...</option>
                 <option value="Class 10 A">Class 10 A</option>
                 <option value="Class 11 Sci">Class 11 Sci</option>
                 <option value="Class 9 B">Class 9 B</option>
               </select>
             )}
             <p className="text-[11px] text-info mt-1 flex gap-1"><span className="text-[14px] leading-none">*</span> Personal contact info is hidden for privacy. Replies will come to this portal.</p>
           </div>

           <div>
             <label className="block text-[12px] font-bold text-text-secondary uppercase mb-2">Message</label>
             <textarea 
               value={message}
               onChange={e => setMessage(e.target.value)}
               placeholder="Type your message here..."
               className="w-full h-32 bg-input border border-border rounded-lg p-3 text-[14px] text-text-primary focus:outline-none focus:border-primary resize-none custom-scrollbar"
               required
             ></textarea>
           </div>

           <div className="pt-2 flex justify-end gap-3 border-t border-border mt-4">
             <button type="button" onClick={closeNewMessageModal} className="px-5 py-2 bg-transparent border border-border text-text-primary font-bold text-[13px] rounded-lg hover:bg-white/5 transition-colors">
               Cancel
             </button>
             <button type="submit" className="px-5 py-2 bg-primary text-black font-bold text-[13px] rounded-lg hover:bg-primary/90 flex items-center gap-2 transition-colors">
               <Send size={16} /> Send Message
             </button>
           </div>
        </form>

      </div>
    </div>
  );
}
