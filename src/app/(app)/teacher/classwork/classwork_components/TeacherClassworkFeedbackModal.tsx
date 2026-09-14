"use client";
import React, { useState } from 'react';
import { X, Send, MessageSquare } from 'lucide-react';
import { useTeacherClassworkStore } from '../classwork_store/useTeacherClassworkStore';

export default function TeacherClassworkFeedbackModal() {
  const { isFeedbackModalOpen, closeFeedbackModal, selectedClasswork } = useTeacherClassworkStore();
  const [feedback, setFeedback] = useState('');

  if (!isFeedbackModalOpen || !selectedClasswork) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFeedback('');
    closeFeedbackModal();
  };

  const mockFeedbacks = [
    { id: 1, author: 'Principal', text: 'Good coverage of topics today. Ensure all students understood the basic ratios before moving on.', date: 'Oct 15, 2023 - 02:30 PM', role: 'admin' },
    { id: 2, author: 'Me', text: 'Will conduct a quick pop quiz tomorrow to assess understanding.', date: 'Oct 15, 2023 - 03:00 PM', role: 'teacher' }
  ];

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 transition-opacity">
      <div className="w-full max-w-2xl bg-bg-main h-[80vh] shadow-2xl flex flex-col border border-border rounded-2xl animate-in zoom-in-95 duration-200 overflow-hidden">
        
        {/* Header */}
        <div className="px-6 py-5 bg-card border-b border-border flex items-start justify-between">
          <div>
            <span className="px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider bg-primary/20 text-primary mb-2 inline-block flex items-center gap-1 w-max">
               <MessageSquare size={12}/> Classwork Feedback & Remarks
            </span>
            <h2 className="text-[18px] font-bold text-text-primary line-clamp-1">{selectedClasswork.topic}</h2>
            <p className="text-[13px] text-text-secondary mt-1">{selectedClasswork.date} • {selectedClasswork.class}</p>
          </div>
          <button onClick={closeFeedbackModal} className="p-2 rounded-full bg-page hover:bg-white/10 text-text-secondary hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Feedback List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-black/10">
           {mockFeedbacks.map(fb => (
             <div key={fb.id} className={`flex flex-col max-w-[85%] ${fb.role === 'teacher' ? 'ml-auto items-end' : 'mr-auto items-start'}`}>
                <span className="text-[11px] text-text-secondary mb-1 font-bold px-1">{fb.author} • {fb.date}</span>
                <div className={`p-3 rounded-2xl ${fb.role === 'teacher' ? 'bg-primary text-black rounded-tr-sm' : 'bg-card border border-border text-text-primary rounded-tl-sm'}`}>
                  <p className="text-[14px] leading-relaxed">{fb.text}</p>
                </div>
             </div>
           ))}
        </div>

        {/* Input Area */}
        <div className="p-4 bg-card border-t border-border">
          <form onSubmit={handleSubmit} className="flex items-center gap-3">
            <input 
              type="text"
              value={feedback}
              onChange={e => setFeedback(e.target.value)}
              placeholder="Add your remark or reply..."
              className="flex-1 bg-input border border-border rounded-full px-5 py-3 text-[14px] text-text-primary focus:outline-none focus:border-primary transition-colors"
              required
            />
            <button type="submit" className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary/90 transition-colors shrink-0">
              <Send size={18} className="ml-1" />
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
