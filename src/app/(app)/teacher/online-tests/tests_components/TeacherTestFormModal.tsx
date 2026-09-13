"use client";
import React, { useState, useEffect } from 'react';
import { X, Save, Plus, Trash2, Send } from 'lucide-react';
import { useTeacherTestsStore } from '../tests_store/useTeacherTestsStore';

export default function TeacherTestFormModal() {
  const { isFormModalOpen, closeFormModal, selectedTest } = useTeacherTestsStore();
  
  const [formData, setFormData] = useState({
    title: '',
    class: '',
    subject: '',
    scheduleDate: '',
    scheduleTime: '',
    timeLimitMins: 30,
    status: 'Draft'
  });

  const [questions, setQuestions] = useState([
    { type: 'MCQ', text: '', marks: 1 }
  ]);

  useEffect(() => {
    if (selectedTest) {
      setFormData({
        title: selectedTest.title,
        class: selectedTest.class,
        subject: selectedTest.subject,
        scheduleDate: selectedTest.scheduleDate,
        scheduleTime: selectedTest.scheduleTime,
        timeLimitMins: selectedTest.timeLimitMins,
        status: selectedTest.status
      });
    } else {
      setFormData({ title: '', class: '', subject: '', scheduleDate: '', scheduleTime: '', timeLimitMins: 30, status: 'Draft' });
      setQuestions([{ type: 'MCQ', text: '', marks: 1 }]);
    }
  }, [selectedTest, isFormModalOpen]);

  if (!isFormModalOpen) return null;

  const addQuestion = () => setQuestions([...questions, { type: 'MCQ', text: '', marks: 1 }]);
  const removeQuestion = (idx: number) => setQuestions(questions.filter((_, i) => i !== idx));

  const handleSubmit = (e: React.FormEvent, isPublish: boolean) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent('open-teacher-coming-soon', { detail: isPublish ? 'Quiz scheduled and published.' : 'Quiz saved as draft.' }));
    closeFormModal();
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm transition-opacity p-4">
      <div className="w-full max-w-4xl bg-bg-main shadow-2xl rounded-2xl border border-border overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="px-6 py-5 border-b border-border flex items-center justify-between bg-card shrink-0">
          <h2 className="text-[18px] font-bold text-text-primary">
            {selectedTest ? 'Edit Quiz' : 'Create New Quiz'}
          </h2>
          <button onClick={closeFormModal} className="p-1.5 rounded-full bg-page hover:bg-white/10 text-text-secondary hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-6">
          
          {/* Basic Info */}
          <div className="bg-card border border-border p-5 rounded-xl space-y-4">
            <h3 className="text-[14px] font-bold text-text-primary mb-2">Quiz Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <div>
                 <label className="block text-[12px] font-bold text-text-secondary uppercase mb-2">Quiz Title</label>
                 <input type="text" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} className="w-full bg-input border border-border rounded-lg px-4 py-2.5 text-[14px] text-text-primary focus:border-primary focus:outline-none" placeholder="e.g. Weekly Assessment" required />
               </div>
               <div className="grid grid-cols-2 gap-4">
                 <div>
                   <label className="block text-[12px] font-bold text-text-secondary uppercase mb-2">Class</label>
                   <select value={formData.class} onChange={e => setFormData({...formData, class: e.target.value})} className="w-full bg-input border border-border rounded-lg px-4 py-2.5 text-[14px] text-text-primary focus:border-primary focus:outline-none" required>
                     <option value="">Select</option><option value="Class 10 A">10 A</option><option value="Class 9 B">9 B</option>
                   </select>
                 </div>
                 <div>
                   <label className="block text-[12px] font-bold text-text-secondary uppercase mb-2">Subject</label>
                   <select value={formData.subject} onChange={e => setFormData({...formData, subject: e.target.value})} className="w-full bg-input border border-border rounded-lg px-4 py-2.5 text-[14px] text-text-primary focus:border-primary focus:outline-none" required>
                     <option value="">Select</option><option value="Math">Math</option><option value="Physics">Physics</option>
                   </select>
                 </div>
               </div>
               <div className="grid grid-cols-2 gap-4">
                 <div>
                   <label className="block text-[12px] font-bold text-text-secondary uppercase mb-2">Schedule Date</label>
                   <input type="date" value={formData.scheduleDate} onChange={e => setFormData({...formData, scheduleDate: e.target.value})} className="w-full bg-input border border-border rounded-lg px-4 py-2.5 text-[14px] text-text-primary focus:border-primary focus:outline-none" required />
                 </div>
                 <div>
                   <label className="block text-[12px] font-bold text-text-secondary uppercase mb-2">Time</label>
                   <input type="time" value={formData.scheduleTime} onChange={e => setFormData({...formData, scheduleTime: e.target.value})} className="w-full bg-input border border-border rounded-lg px-4 py-2.5 text-[14px] text-text-primary focus:border-primary focus:outline-none" required />
                 </div>
               </div>
               <div>
                 <label className="block text-[12px] font-bold text-text-secondary uppercase mb-2">Time Limit (Minutes)</label>
                 <input type="number" value={formData.timeLimitMins} onChange={e => setFormData({...formData, timeLimitMins: Number(e.target.value)})} className="w-full bg-input border border-border rounded-lg px-4 py-2.5 text-[14px] text-text-primary focus:border-primary focus:outline-none" required />
               </div>
            </div>
          </div>

          {/* Question Builder UI (Mocked Flow) */}
          <div className="bg-card border border-border p-5 rounded-xl">
             <div className="flex items-center justify-between mb-4">
               <h3 className="text-[14px] font-bold text-text-primary">Questions Builder</h3>
               <span className="text-[12px] font-bold text-primary">{questions.length} Questions</span>
             </div>
             
             <div className="space-y-4 mb-4">
               {questions.map((q, idx) => (
                 <div key={idx} className="p-4 bg-page border border-border rounded-lg flex items-start gap-4">
                    <div className="flex-1 space-y-3">
                       <div className="flex items-center gap-3">
                         <select value={q.type} onChange={e => { const n = [...questions]; n[idx].type = e.target.value; setQuestions(n); }} className="bg-input border border-border rounded p-1.5 text-[12px] text-text-primary focus:outline-none focus:border-primary">
                           <option value="MCQ">Multiple Choice</option>
                           <option value="T/F">True/False</option>
                           <option value="Short">Short Answer</option>
                         </select>
                         <input type="number" placeholder="Marks" value={q.marks} onChange={e => { const n = [...questions]; n[idx].marks = Number(e.target.value); setQuestions(n); }} className="w-20 bg-input border border-border rounded p-1.5 text-[12px] text-text-primary text-center focus:outline-none focus:border-primary" />
                       </div>
                       <input type="text" placeholder="Enter your question here..." value={q.text} onChange={e => { const n = [...questions]; n[idx].text = e.target.value; setQuestions(n); }} className="w-full bg-input border border-border rounded px-3 py-2 text-[13px] text-text-primary focus:outline-none focus:border-primary" />
                    </div>
                    {questions.length > 1 && (
                      <button onClick={() => removeQuestion(idx)} className="mt-1 text-text-secondary hover:text-danger transition-colors p-1"><Trash2 size={16}/></button>
                    )}
                 </div>
               ))}
             </div>

             <button onClick={addQuestion} type="button" className="w-full py-2.5 border-2 border-dashed border-border rounded-lg text-[13px] font-bold text-text-secondary hover:text-primary hover:border-primary/50 transition-colors flex items-center justify-center gap-2">
               <Plus size={16}/> Add Another Question
             </button>
          </div>
          
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-border flex justify-end gap-3 bg-card shrink-0">
          <button type="button" onClick={closeFormModal} className="px-5 py-2.5 bg-transparent border border-border text-text-primary font-bold text-[14px] rounded-lg hover:bg-white/5 transition-colors mr-auto">
            Cancel
          </button>
          <button type="button" onClick={(e) => handleSubmit(e, false)} className="px-5 py-2.5 bg-page border border-border text-text-primary font-bold text-[14px] rounded-lg hover:border-primary/50 transition-colors flex items-center gap-2">
            <Save size={18} /> Save as Draft
          </button>
          <button type="button" onClick={(e) => handleSubmit(e, true)} className="px-5 py-2.5 bg-primary text-black font-bold text-[14px] rounded-lg hover:bg-primary/90 flex items-center gap-2 transition-colors">
            <Send size={18} /> Publish Quiz
          </button>
        </div>

      </div>
    </div>
  );
}
