"use client";
import React, { useState, useEffect } from 'react';
import { X, Save, Paperclip, Send, UploadCloud, Link as LinkIcon } from 'lucide-react';
import { useTeacherMaterialStore } from '../material_store/useTeacherMaterialStore';

export default function TeacherMaterialFormModal() {
  const { isFormModalOpen, closeFormModal, selectedMaterial } = useTeacherMaterialStore();
  
  const [formData, setFormData] = useState({
    title: '',
    type: 'PDF',
    class: '',
    subject: '',
    chapter: '',
    description: '',
    attachment: '',
    isPublished: true
  });

  useEffect(() => {
    if (selectedMaterial) {
      setFormData({
        title: selectedMaterial.title,
        type: selectedMaterial.type,
        class: selectedMaterial.class,
        subject: selectedMaterial.subject,
        chapter: selectedMaterial.chapter,
        description: selectedMaterial.description,
        attachment: selectedMaterial.attachment,
        isPublished: selectedMaterial.isPublished
      });
    } else {
      setFormData({ title: '', type: 'PDF', class: '', subject: '', chapter: '', description: '', attachment: '', isPublished: true });
    }
  }, [selectedMaterial, isFormModalOpen]);

  if (!isFormModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent('open-teacher-coming-soon', { detail: selectedMaterial ? 'Study Material updated successfully.' : 'Study Material published successfully.' }));
    closeFormModal();
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm transition-opacity p-4">
      <div className="w-full max-w-2xl bg-bg-main shadow-2xl rounded-2xl border border-border overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="px-6 py-5 border-b border-border flex items-center justify-between bg-card">
          <h2 className="text-[18px] font-bold text-text-primary">
            {selectedMaterial ? 'Edit Study Material' : 'Upload Study Material'}
          </h2>
          <button onClick={closeFormModal} className="p-1.5 rounded-full bg-page hover:bg-white/10 text-text-secondary hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5 max-h-[80vh] overflow-y-auto custom-scrollbar">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-[12px] font-bold text-text-secondary uppercase mb-2">Material Type</label>
              <select value={formData.type} onChange={e => setFormData({...formData, type: e.target.value})} className="w-full bg-input border border-border rounded-lg px-4 py-2.5 text-[14px] text-text-primary focus:border-primary focus:outline-none" required>
                <option value="PDF">PDF Document</option>
                <option value="Notes">Notes (Doc/Image)</option>
                <option value="Video">Video Recording</option>
                <option value="Link">External Link</option>
              </select>
            </div>
            <div>
              <label className="block text-[12px] font-bold text-text-secondary uppercase mb-2">Title</label>
              <input type="text" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} placeholder="e.g. Chapter 1 Notes" className="w-full bg-input border border-border rounded-lg px-4 py-2.5 text-[14px] text-text-primary focus:border-primary focus:outline-none" required />
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
          </div>

          <div>
            <label className="block text-[12px] font-bold text-text-secondary uppercase mb-2">Chapter / Topic</label>
            <input type="text" value={formData.chapter} onChange={e => setFormData({...formData, chapter: e.target.value})} placeholder="e.g. Chapter 8: Introduction to Trigonometry" className="w-full bg-input border border-border rounded-lg px-4 py-2.5 text-[14px] text-text-primary focus:border-primary focus:outline-none" required />
          </div>

          <div>
            <label className="block text-[12px] font-bold text-text-secondary uppercase mb-2">Description</label>
            <textarea value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} className="w-full h-24 bg-input border border-border rounded-lg px-4 py-3 text-[14px] text-text-primary focus:border-primary focus:outline-none resize-none" required></textarea>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <div className="flex-1 w-full">
              <label className="block text-[12px] font-bold text-text-secondary uppercase mb-2">
                {formData.type === 'Link' || formData.type === 'Video' ? 'Paste URL' : 'Upload File'}
              </label>
              
              {formData.type === 'Link' || formData.type === 'Video' ? (
                 <div className="relative">
                   <LinkIcon className="absolute left-3 top-2.5 text-text-secondary" size={18} />
                   <input type="url" value={formData.attachment} onChange={e => setFormData({...formData, attachment: e.target.value})} placeholder="https://..." className="w-full bg-input border border-border rounded-lg pl-10 pr-4 py-2.5 text-[14px] text-text-primary focus:border-primary focus:outline-none" required />
                 </div>
              ) : (
                <div className="w-full border-2 border-dashed border-border rounded-lg p-6 flex flex-col items-center justify-center text-text-secondary hover:border-primary/50 hover:bg-primary/5 transition-colors cursor-pointer bg-input">
                   <UploadCloud size={28} className="mb-2 text-primary" />
                   <span className="text-[13px] font-bold text-text-primary mb-1">Click to upload or drag and drop</span>
                   <span className="text-[11px]">PDF, DOCX, JPG (Max 25MB)</span>
                </div>
              )}
            </div>
            
            <div className="flex items-center gap-3 mt-4 sm:mt-6 px-5 py-4 bg-page border border-border rounded-lg w-full sm:w-auto">
               <span className="text-[13px] font-bold text-text-primary whitespace-nowrap">Publish Now?</span>
               <label className="relative inline-flex items-center cursor-pointer">
                 <input type="checkbox" checked={formData.isPublished} onChange={e => setFormData({...formData, isPublished: e.target.checked})} className="sr-only peer" />
                 <div className="w-11 h-6 bg-border peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-success"></div>
               </label>
            </div>
          </div>

          <div className="pt-4 border-t border-border flex justify-end gap-3">
            <button type="button" onClick={closeFormModal} className="px-5 py-2.5 bg-page border border-border text-text-primary font-bold text-[14px] rounded-lg hover:bg-white/5 transition-colors">
              Cancel
            </button>
            <button type="submit" className="px-5 py-2.5 bg-primary text-black font-bold text-[14px] rounded-lg hover:bg-primary/90 flex items-center gap-2 transition-colors">
              {formData.isPublished ? <><Send size={18} /> Publish Material</> : <><Save size={18} /> Save as Draft</>}
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}
