"use client";
import React, { useState, useEffect } from 'react';
import { X, Save, Paperclip, CheckCircle } from 'lucide-react';
import { useTeacherClassworkStore } from '../classwork_store/useTeacherClassworkStore';

export default function TeacherClassworkFormModal() {
  const { isFormModalOpen, closeFormModal, selectedClasswork } = useTeacherClassworkStore();
  
  const [formData, setFormData] = useState({
    date: new Date().toISOString().split('T')[0],
    class: '',
    subject: '',
    chapter: '',
    topic: '',
    description: '',
    notes: '',
    attachment: '',
    isPublished: true,
    isCompleted: true
  });
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    if (selectedClasswork) {
      setFormData({
        date: selectedClasswork.date,
        class: selectedClasswork.class,
        subject: selectedClasswork.subject,
        chapter: selectedClasswork.chapter,
        topic: selectedClasswork.topic,
        description: selectedClasswork.description,
        notes: selectedClasswork.notes,
        attachment: selectedClasswork.attachment || '',
        isPublished: selectedClasswork.isPublished !== false,
        isCompleted: selectedClasswork.isCompleted
      });
    } else {
      setFormData({ 
        date: new Date().toISOString().split('T')[0], 
        class: '', subject: '', chapter: '', topic: '', description: '', notes: '', attachment: '', isPublished: true, isCompleted: true 
      });
    }
  }, [selectedClasswork, isFormModalOpen]);

  if (!isFormModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage(selectedClasswork ? 'Classwork updated successfully.' : 'Classwork logged successfully.');
    setTimeout(() => {
      setSuccessMessage('');
      closeFormModal();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm transition-opacity p-4">
      <div className="w-full max-w-2xl bg-bg-main shadow-2xl rounded-2xl border border-border overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="px-6 py-5 border-b border-border flex items-center justify-between bg-card">
          <h2 className="text-[18px] font-bold text-text-primary">
            {selectedClasswork ? 'Edit Classwork Log' : 'Add Daily Classwork Log'}
          </h2>
          <button onClick={closeFormModal} className="p-1.5 rounded-full bg-page hover:bg-white/10 text-text-secondary hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5 max-h-[80vh] overflow-y-auto custom-scrollbar">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-[12px] font-bold text-text-secondary uppercase mb-2">Date</label>
              <input type="date" value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} className="w-full bg-input border border-border rounded-lg px-4 py-2.5 text-[14px] text-text-primary focus:border-primary focus:outline-none" required />
            </div>
            <div>
              <label className="block text-[12px] font-bold text-text-secondary uppercase mb-2">Class & Section</label>
              <select value={formData.class} onChange={e => setFormData({...formData, class: e.target.value})} className="w-full bg-input border border-border rounded-lg px-4 py-2.5 text-[14px] text-text-primary focus:border-primary focus:outline-none" required>
                <option value="">Select Class</option>
                <option value="Class 10 A">Class 10 A</option>
                <option value="Class 9 B">Class 9 B</option>
                <option value="Class 11 Sci">Class 11 Sci</option>
              </select>
            </div>
            <div>
              <label className="block text-[12px] font-bold text-text-secondary uppercase mb-2">Subject</label>
              <select value={formData.subject} onChange={e => setFormData({...formData, subject: e.target.value})} className="w-full bg-input border border-border rounded-lg px-4 py-2.5 text-[14px] text-text-primary focus:border-primary focus:outline-none" required>
                <option value="">Select Subject</option>
                <option value="Mathematics">Mathematics</option>
                <option value="Physics">Physics</option>
                <option value="Chemistry">Chemistry</option>
              </select>
            </div>
            <div>
              <label className="block text-[12px] font-bold text-text-secondary uppercase mb-2">Status</label>
              <select value={formData.isCompleted ? 'true' : 'false'} onChange={e => setFormData({...formData, isCompleted: e.target.value === 'true'})} className="w-full bg-input border border-border rounded-lg px-4 py-2.5 text-[14px] text-text-primary focus:border-primary focus:outline-none" required>
                <option value="true">Completed</option>
                <option value="false">Pending / Planned</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-[12px] font-bold text-text-secondary uppercase mb-2">Chapter</label>
              <input type="text" value={formData.chapter} onChange={e => setFormData({...formData, chapter: e.target.value})} placeholder="e.g. Chapter 8: Trigonometry" className="w-full bg-input border border-border rounded-lg px-4 py-2.5 text-[14px] text-text-primary focus:border-primary focus:outline-none" required />
            </div>
            <div>
              <label className="block text-[12px] font-bold text-text-secondary uppercase mb-2">Topic</label>
              <input type="text" value={formData.topic} onChange={e => setFormData({...formData, topic: e.target.value})} placeholder="e.g. Basic Ratios" className="w-full bg-input border border-border rounded-lg px-4 py-2.5 text-[14px] text-text-primary focus:border-primary focus:outline-none" required />
            </div>
          </div>

          <div>
            <label className="block text-[12px] font-bold text-text-secondary uppercase mb-2">What was taught? (Description)</label>
            <textarea value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} className="w-full h-20 bg-input border border-border rounded-lg px-4 py-3 text-[14px] text-text-primary focus:border-primary focus:outline-none resize-none" placeholder="Briefly describe the classroom activities and topics covered..." required></textarea>
          </div>

          <div>
            <label className="block text-[12px] font-bold text-text-secondary uppercase mb-2">Teacher's Private Notes (Optional)</label>
            <textarea value={formData.notes} onChange={e => setFormData({...formData, notes: e.target.value})} className="w-full h-16 bg-page border border-border rounded-lg px-4 py-3 text-[13px] text-text-primary focus:border-primary focus:outline-none resize-none" placeholder="Notes for your own reference (e.g. students struggled with X, need to revise Y tomorrow)."></textarea>
          </div>

          <div className="flex items-center gap-4 border-t border-border pt-4">
            <div className="flex-1">
              <label className="block text-[12px] font-bold text-text-secondary uppercase mb-2">Board Photos / Materials</label>
              <div className="w-full border-2 border-dashed border-border rounded-lg p-4 flex flex-col items-center justify-center text-text-secondary hover:border-primary/50 hover:bg-primary/5 transition-colors cursor-pointer">
                 <Paperclip size={20} className="mb-2" />
                 <span className="text-[12px] font-medium">{formData.attachment || 'Click to upload board photos/PDF'}</span>
              </div>
            </div>
            
            <div className="flex items-center gap-3 mt-4 px-4 py-3 bg-page border border-border rounded-lg">
               <span className="text-[13px] font-bold text-text-primary">Publish to Students?</span>
               <label className="relative inline-flex items-center cursor-pointer">
                 <input type="checkbox" checked={formData.isPublished} onChange={e => setFormData({...formData, isPublished: e.target.checked})} className="sr-only peer" />
                 <div className="w-11 h-6 bg-border peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-success"></div>
               </label>
            </div>
          </div>

          <div className="pt-4 border-t border-border flex justify-end gap-3 items-center">
            {successMessage ? (
              <div className="flex-1 text-success text-[13px] font-bold animate-in fade-in">
                {successMessage}
              </div>
            ) : null}
            <button type="button" onClick={closeFormModal} className="px-5 py-2.5 bg-page border border-border text-text-primary font-bold text-[14px] rounded-lg hover:bg-white/5 transition-colors">
              Cancel
            </button>
            <button type="submit" disabled={!!successMessage} className="px-5 py-2.5 bg-primary text-white font-bold text-[14px] rounded-lg hover:bg-primary/90 flex items-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
              <Save size={18} /> {selectedClasswork ? 'Update Classwork' : 'Log Classwork'}
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}
