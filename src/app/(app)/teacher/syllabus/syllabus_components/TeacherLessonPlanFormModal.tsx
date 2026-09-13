"use client";
import React, { useState } from 'react';
import { X, Save } from 'lucide-react';
import { useTeacherSyllabusStore } from '../syllabus_store/useTeacherSyllabusStore';

export default function TeacherLessonPlanFormModal() {
  const { isLessonPlanModalOpen, closeLessonPlanModal } = useTeacherSyllabusStore();

  const [successMessage, setSuccessMessage] = useState('');

  if (!isLessonPlanModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage('Lesson Plan submitted successfully for approval.');
    setTimeout(() => {
      setSuccessMessage('');
      closeLessonPlanModal();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 transition-opacity">
      <div className="w-full max-w-2xl bg-bg-main shadow-2xl rounded-2xl border border-border overflow-hidden animate-in zoom-in-95 duration-200">
        
        <div className="px-6 py-5 border-b border-border flex items-center justify-between bg-card">
          <h2 className="text-[18px] font-bold text-text-primary">Create Lesson Plan</h2>
          <button onClick={closeLessonPlanModal} className="p-1.5 rounded-full bg-page hover:bg-white/10 text-text-secondary hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-5 max-h-[75vh] overflow-y-auto custom-scrollbar">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-[12px] font-bold text-text-secondary uppercase mb-2">Class & Section</label>
              <select className="w-full bg-input border border-border rounded-lg px-4 py-2.5 text-[14px] text-text-primary focus:border-primary focus:outline-none" required>
                <option value="">Select Class</option>
                <option value="10">Class 10 A</option>
                <option value="9">Class 9 B</option>
              </select>
            </div>
            <div>
              <label className="block text-[12px] font-bold text-text-secondary uppercase mb-2">Subject</label>
              <select className="w-full bg-input border border-border rounded-lg px-4 py-2.5 text-[14px] text-text-primary focus:border-primary focus:outline-none" required>
                <option value="">Select Subject</option>
                <option value="Math">Mathematics</option>
                <option value="Science">Science</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-[12px] font-bold text-text-secondary uppercase mb-2">Plan Type</label>
              <select className="w-full bg-input border border-border rounded-lg px-4 py-2.5 text-[14px] text-text-primary focus:border-primary focus:outline-none" required>
                <option value="daily">Daily Plan</option>
                <option value="weekly">Weekly Plan</option>
              </select>
            </div>
            <div>
              <label className="block text-[12px] font-bold text-text-secondary uppercase mb-2">Date / Week Range</label>
              <input type="text" placeholder="e.g. Oct 15 - Oct 20" className="w-full bg-input border border-border rounded-lg px-4 py-2.5 text-[14px] text-text-primary focus:border-primary focus:outline-none" required />
            </div>
          </div>

          <div>
             <label className="block text-[12px] font-bold text-text-secondary uppercase mb-2">Topics to Cover</label>
             <input type="text" placeholder="e.g. Basic Proportionality Theorem" className="w-full bg-input border border-border rounded-lg px-4 py-2.5 text-[14px] text-text-primary focus:border-primary focus:outline-none" required />
          </div>

          <div>
            <label className="block text-[12px] font-bold text-text-secondary uppercase mb-2">Teaching Methodology / Activities</label>
            <textarea className="w-full h-24 bg-input border border-border rounded-lg px-4 py-3 text-[14px] text-text-primary focus:border-primary focus:outline-none resize-none custom-scrollbar" placeholder="Describe the method, any smartboard resources needed, experiments, etc." required></textarea>
          </div>

          <div className="pt-4 border-t border-border flex justify-end gap-3">
            {successMessage ? (
              <div className="flex-1 text-success text-[13px] font-bold self-center animate-in fade-in">
                {successMessage}
              </div>
            ) : null}
            <button type="button" onClick={closeLessonPlanModal} className="px-5 py-2.5 bg-page border border-border text-text-primary font-bold text-[14px] rounded-lg hover:bg-white/5 transition-colors">
              Cancel
            </button>
            <button type="submit" disabled={!!successMessage} className="px-5 py-2.5 bg-primary text-black font-bold text-[14px] rounded-lg hover:bg-primary/90 flex items-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
              <Save size={18} /> Submit for Approval
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}
