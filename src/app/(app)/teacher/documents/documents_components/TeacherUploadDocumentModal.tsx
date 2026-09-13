"use client";
import React, { useState } from 'react';
import { X, UploadCloud, FileText } from 'lucide-react';
import { useTeacherDocumentsStore, DocumentCategory } from '../documents_store/useTeacherDocumentsStore';

export default function TeacherUploadDocumentModal() {
  const { isUploadModalOpen, closeUploadModal, addDocument } = useTeacherDocumentsStore();
  
  const [formData, setFormData] = useState({
    title: '',
    category: 'Lesson Plan' as DocumentCategory,
    class: '',
    subject: '',
    file: null as File | null
  });

  if (!isUploadModalOpen) return null;

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.file) {
      alert("Please select a file to upload.");
      return;
    }
    
    // Simulate file type extraction from filename
    let fType: 'PDF' | 'DOCX' | 'PPTX' | 'XLSX' | 'ZIP' = 'PDF';
    const ext = formData.file.name.split('.').pop()?.toUpperCase();
    if (ext && ['PDF', 'DOCX', 'PPTX', 'XLSX', 'ZIP'].includes(ext)) {
      fType = ext as 'PDF' | 'DOCX' | 'PPTX' | 'XLSX' | 'ZIP';
    }

    const newDoc = {
      id: `DOC-${Date.now()}`,
      title: formData.title,
      category: formData.category,
      class: formData.class,
      subject: formData.subject,
      uploadDate: new Date().toLocaleDateString('en-GB'),
      fileSize: `${(formData.file.size / 1024 / 1024).toFixed(1)} MB`,
      fileType: fType,
    };
    
    addDocument(newDoc);
    closeUploadModal();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({...formData, file: e.target.files[0]});
    }
  };

  const CATEGORIES: DocumentCategory[] = ['Lesson Plan', 'Notes', 'Study Material'];

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm transition-opacity p-4">
      <div className="w-full max-w-lg bg-bg-main shadow-2xl rounded-2xl border border-border overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-border flex items-center justify-between bg-card">
          <h2 className="text-[18px] font-bold text-text-primary flex items-center gap-2">
            <UploadCloud size={20} className="text-primary"/> Upload Document
          </h2>
          <button onClick={closeUploadModal} className="p-1.5 rounded-full bg-page hover:bg-white/10 text-text-secondary hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <form onSubmit={handleSend} className="p-6 space-y-5">
           
           <div>
             <label className="block text-[12px] font-bold text-text-secondary uppercase mb-2">Document Title</label>
             <input 
               type="text" 
               value={formData.title}
               onChange={e => setFormData({...formData, title: e.target.value})}
               className="w-full bg-input border border-border rounded-lg px-4 py-2.5 text-[14px] text-text-primary focus:border-primary focus:outline-none" required 
               placeholder="e.g. Physics Chapter 5 Notes"
             />
           </div>

           <div className="grid grid-cols-2 gap-4">
             <div>
               <label className="block text-[12px] font-bold text-text-secondary uppercase mb-2">Category</label>
               <select 
                 value={formData.category}
                 onChange={e => setFormData({...formData, category: e.target.value as DocumentCategory})}
                 className="w-full bg-input border border-border rounded-lg px-4 py-2.5 text-[14px] text-text-primary focus:border-primary focus:outline-none" required
               >
                 {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
               </select>
             </div>
             <div>
               <label className="block text-[12px] font-bold text-text-secondary uppercase mb-2">Target Class</label>
               <select 
                 value={formData.class}
                 onChange={e => setFormData({...formData, class: e.target.value})}
                 className="w-full bg-input border border-border rounded-lg px-4 py-2.5 text-[14px] text-text-primary focus:border-primary focus:outline-none" required
               >
                 <option value="">Select class...</option>
                 <option value="Class 10 A">Class 10 A</option>
                 <option value="Class 9 B">Class 9 B</option>
                 <option value="All Classes">All Assigned Classes</option>
               </select>
             </div>
           </div>

           <div>
             <label className="block text-[12px] font-bold text-text-secondary uppercase mb-2">Subject</label>
             <input 
               type="text" 
               value={formData.subject}
               onChange={e => setFormData({...formData, subject: e.target.value})}
               className="w-full bg-input border border-border rounded-lg px-4 py-2.5 text-[14px] text-text-primary focus:border-primary focus:outline-none" required 
               placeholder="e.g. Physics"
             />
           </div>

           <div>
             <label className="block text-[12px] font-bold text-text-secondary uppercase mb-2">Select File</label>
             <div className="relative w-full h-24 bg-input border border-border border-dashed rounded-lg flex flex-col items-center justify-center hover:border-primary/50 transition-colors cursor-pointer overflow-hidden group">
               <input type="file" onChange={handleFileChange} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" required />
               <div className="flex flex-col items-center gap-2 text-[13px] font-bold text-text-secondary group-hover:text-primary transition-colors">
                 <FileText size={24} />
                 {formData.file ? <span className="text-primary truncate max-w-[200px]">{formData.file.name}</span> : <span>Click or drag to upload a file (PDF, DOCX, PPTX)</span>}
               </div>
             </div>
           </div>

           <div className="pt-2 flex justify-end gap-3 border-t border-border mt-4">
             <button type="button" onClick={closeUploadModal} className="px-5 py-2.5 bg-transparent border border-border text-text-primary font-bold text-[13px] rounded-lg hover:bg-white/5 transition-colors mr-auto">
               Cancel
             </button>
             <button type="submit" className="px-5 py-2.5 bg-primary text-black font-bold text-[13px] rounded-lg hover:bg-primary/90 flex items-center gap-2 transition-colors">
               <UploadCloud size={16} /> Upload Now
             </button>
           </div>
        </form>

      </div>
    </div>
  );
}
