"use client";
import React, { useState } from 'react';
import { X, Send, MessageSquare } from 'lucide-react';
import { useTeacherRemarksStore, RemarkCategory, RemarkSentiment } from '../remarks_store/useTeacherRemarksStore';

export default function TeacherAddRemarkModal() {
  const { isAddRemarkModalOpen, closeAddRemarkModal, addRemark } = useTeacherRemarksStore();
  
  const [formData, setFormData] = useState({
    studentName: '',
    class: '',
    category: 'Academic' as RemarkCategory,
    sentiment: 'Positive' as RemarkSentiment,
    description: '',
    sharedWithParents: false
  });
  const [successMessage, setSuccessMessage] = useState('');

  if (!isAddRemarkModalOpen) return null;

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    
    addRemark({
      id: `REM-${Date.now()}`,
      studentName: formData.studentName,
      rollNo: "TBD", // Normally fetched based on selected student
      class: formData.class,
      category: formData.category,
      sentiment: formData.sentiment,
      description: formData.description,
      date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
      sharedWithParents: formData.sharedWithParents
    });

    setSuccessMessage('Remark added successfully to student profile.');
    setTimeout(() => {
      setSuccessMessage('');
      closeAddRemarkModal();
      setFormData({
        studentName: '',
        class: '',
        category: 'Academic' as RemarkCategory,
        sentiment: 'Neutral' as RemarkSentiment,
        description: '',
        sharedWithParents: false
      });
    }, 2500);
  };

  const REMARK_CATEGORIES: RemarkCategory[] = ['Academic', 'Homework', 'Behaviour', 'Attendance', 'Progress', 'Parent Meeting'];
  const SENTIMENTS: RemarkSentiment[] = ['Positive', 'Neutral', 'Needs Improvement'];

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm transition-opacity p-4">
      <div className="w-full max-w-lg bg-bg-main shadow-2xl rounded-2xl border border-border overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-border flex items-center justify-between bg-card">
          <h2 className="text-[18px] font-bold text-text-primary flex items-center gap-2">
            <MessageSquare size={20} className="text-primary"/> Add Student Remark
          </h2>
          <button onClick={closeAddRemarkModal} className="p-1.5 rounded-full bg-page hover:bg-white/10 text-text-secondary hover:text-white transition-colors">
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
               <label className="block text-[12px] font-bold text-text-secondary uppercase mb-2">Remark Category</label>
               <select 
                 value={formData.category}
                 onChange={e => setFormData({...formData, category: e.target.value as RemarkCategory})}
                 className="w-full bg-input border border-border rounded-lg px-4 py-2.5 text-[14px] text-text-primary focus:border-primary focus:outline-none" required
               >
                 {REMARK_CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
               </select>
             </div>
             <div>
               <label className="block text-[12px] font-bold text-text-secondary uppercase mb-2">Sentiment (Tone)</label>
               <select 
                 value={formData.sentiment}
                 onChange={e => setFormData({...formData, sentiment: e.target.value as RemarkSentiment})}
                 className="w-full bg-input border border-border rounded-lg px-4 py-2.5 text-[14px] text-text-primary focus:border-primary focus:outline-none" required
               >
                 {SENTIMENTS.map(s => <option key={s} value={s}>{s}</option>)}
               </select>
             </div>
           </div>

           <div>
             <label className="block text-[12px] font-bold text-text-secondary uppercase mb-2">Feedback Description</label>
             <textarea 
               value={formData.description}
               onChange={e => setFormData({...formData, description: e.target.value})}
               placeholder="Write your constructive feedback here..."
               className="w-full h-24 bg-input border border-border rounded-lg p-3 text-[14px] text-text-primary focus:outline-none focus:border-primary resize-none custom-scrollbar"
               required
             ></textarea>
           </div>

           <div className="bg-page border border-border rounded-lg p-4">
             <label className="flex items-center gap-3 cursor-pointer">
               <input 
                 type="checkbox" 
                 checked={formData.sharedWithParents}
                 onChange={e => setFormData({...formData, sharedWithParents: e.target.checked})}
                 className="w-4 h-4 rounded border-border text-primary focus:ring-primary bg-input"
               />
               <div className="flex flex-col">
                 <span className="text-[13px] font-bold text-text-primary">Share with Parents</span>
                 <span className="text-[11px] text-text-secondary">If checked, parents will see this remark on their app.</span>
               </div>
             </label>
           </div>

           <div className="pt-2 flex justify-end gap-3 border-t border-border mt-4 items-center">
             {successMessage ? (
               <div className="flex-1 text-success text-[13px] font-bold animate-in fade-in">
                 {successMessage}
               </div>
             ) : null}
             <button type="button" onClick={closeAddRemarkModal} className="px-5 py-2.5 bg-transparent border border-border text-text-primary font-bold text-[13px] rounded-lg hover:bg-white/5 transition-colors mr-auto">
               Cancel
             </button>
             <button type="submit" disabled={!!successMessage} className="px-5 py-2.5 bg-primary text-white font-bold text-[13px] rounded-lg hover:bg-primary/90 flex items-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
               <Send size={16} /> Save Remark
             </button>
           </div>
        </form>

      </div>
    </div>
  );
}
