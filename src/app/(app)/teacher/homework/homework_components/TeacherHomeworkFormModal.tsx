"use client";
import React, { useState, useEffect } from 'react';
import { X, Save, Paperclip, Send } from 'lucide-react';
import { useTeacherHomeworkStore } from '../homework_store/useTeacherHomeworkStore';

export default function TeacherHomeworkFormModal() {
  const { isFormModalOpen, closeFormModal, selectedHomework } = useTeacherHomeworkStore();
  
  const [formData, setFormData] = useState({
    title: '',
    subject: '',
    class: '',
    description: '',
    dueDate: '',
    isPublished: true
  });
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    if (selectedHomework) {
      setFormData({
        title: selectedHomework.title,
        subject: selectedHomework.subject,
        class: selectedHomework.class,
        description: selectedHomework.description,
        dueDate: selectedHomework.dueDate,
        isPublished: selectedHomework.isPublished
      });
    } else {
      setFormData({ title: '', subject: '', class: '', description: '', dueDate: '', isPublished: true });
    }
  }, [selectedHomework, isFormModalOpen]);

  if (!isFormModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage(selectedHomework ? 'Homework updated successfully.' : 'New homework created successfully.');
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
            {selectedHomework ? 'Edit Homework' : 'Create New Homework'}
          </h2>
          <button onClick={closeFormModal} className="p-1.5 rounded-full bg-page hover:bg-white/10 text-text-secondary hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-[12px] font-bold text-text-secondary uppercase mb-2">Title</label>
              <input type="text" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} className="w-full bg-input border border-border rounded-lg px-4 py-2.5 text-[14px] text-text-primary focus:border-primary focus:outline-none" required />
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
              <label className="block text-[12px] font-bold text-text-secondary uppercase mb-2">Class & Section</label>
              <select value={formData.class} onChange={e => setFormData({...formData, class: e.target.value})} className="w-full bg-input border border-border rounded-lg px-4 py-2.5 text-[14px] text-text-primary focus:border-primary focus:outline-none" required>
                <option value="">Select Class</option>
                <option value="Class 10 A">Class 10 A</option>
                <option value="Class 9 B">Class 9 B</option>
                <option value="Class 11 Sci">Class 11 Sci</option>
              </select>
            </div>
            <div>
              <label className="block text-[12px] font-bold text-text-secondary uppercase mb-2">Due Date</label>
              <input type="date" value={formData.dueDate} onChange={e => setFormData({...formData, dueDate: e.target.value})} className="w-full bg-input border border-border rounded-lg px-4 py-2.5 text-[14px] text-text-primary focus:border-primary focus:outline-none" required />
            </div>
          </div>

          <div>
            <label className="block text-[12px] font-bold text-text-secondary uppercase mb-2">Description / Instructions</label>
            <textarea value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} className="w-full h-24 bg-input border border-border rounded-lg px-4 py-3 text-[14px] text-text-primary focus:border-primary focus:outline-none resize-none" required></textarea>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex-1">
              <label className="block text-[12px] font-bold text-text-secondary uppercase mb-2">Attachment (Optional)</label>
              <div className="w-full border-2 border-dashed border-border rounded-lg p-4 flex flex-col items-center justify-center text-text-secondary hover:border-primary/50 hover:bg-primary/5 transition-colors cursor-pointer">
                 <Paperclip size={20} className="mb-2" />
                 <span className="text-[12px] font-medium">{selectedHomework?.attachment || 'Click to upload file'}</span>
              </div>
            </div>
            
            <div className="flex items-center gap-3 mt-4 px-4 py-3 bg-page border border-border rounded-lg">
               <span className="text-[13px] font-bold text-text-primary">Publish immediately?</span>
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
            <button type="submit" disabled={!!successMessage} className="px-5 py-2.5 bg-primary text-black font-bold text-[14px] rounded-lg hover:bg-primary/90 flex items-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
              <Save size={18} /> {selectedHomework ? 'Update Homework' : 'Create Homework'}
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}
