"use client";
import React, { useState } from 'react';
import { X, UploadCloud, FileText } from 'lucide-react';
import { useTeacherSyllabusStore } from '../syllabus_store/useTeacherSyllabusStore';

export default function TeacherSyllabusUploadModal() {
  const { isUploadModalOpen, closeUploadModal } = useTeacherSyllabusStore();
  const [file, setFile] = useState<File | null>(null);

  const [successMessage, setSuccessMessage] = useState('');

  if (!isUploadModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage('Syllabus uploaded successfully.');
    setTimeout(() => {
      setSuccessMessage('');
      closeUploadModal();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 transition-opacity">
      <div className="w-full max-w-md bg-bg-main shadow-2xl rounded-2xl border border-border overflow-hidden animate-in zoom-in-95 duration-200">
        
        <div className="px-6 py-5 border-b border-border flex items-center justify-between bg-card">
          <h2 className="text-[18px] font-bold text-text-primary">Upload Term-wise Syllabus</h2>
          <button onClick={closeUploadModal} className="p-1.5 rounded-full bg-page hover:bg-white/10 text-text-secondary hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          
          <div>
            <label className="block text-[12px] font-bold text-text-secondary uppercase mb-2">Select Class & Subject</label>
            <div className="grid grid-cols-2 gap-3">
               <select className="bg-input border border-border rounded-lg px-4 py-2.5 text-[14px] text-text-primary focus:border-primary focus:outline-none" required>
                 <option value="">Class</option>
                 <option value="10">Class 10 A</option>
                 <option value="9">Class 9 B</option>
               </select>
               <select className="bg-input border border-border rounded-lg px-4 py-2.5 text-[14px] text-text-primary focus:border-primary focus:outline-none" required>
                 <option value="">Subject</option>
                 <option value="Math">Mathematics</option>
                 <option value="Science">Science</option>
               </select>
            </div>
          </div>

          <div>
             <label className="block text-[12px] font-bold text-text-secondary uppercase mb-2">Term</label>
             <select className="w-full bg-input border border-border rounded-lg px-4 py-2.5 text-[14px] text-text-primary focus:border-primary focus:outline-none" required>
                <option value="term1">Term 1 (Half Yearly)</option>
                <option value="term2">Term 2 (Finals)</option>
                <option value="full">Full Year (Board Pattern)</option>
             </select>
          </div>

          <div>
            <label className="block text-[12px] font-bold text-text-secondary uppercase mb-2">Syllabus PDF Document</label>
            <div className="w-full border-2 border-dashed border-border rounded-lg p-6 flex flex-col items-center justify-center text-text-secondary hover:border-primary/50 hover:bg-primary/5 transition-colors cursor-pointer relative">
               <input 
                 type="file" 
                 accept=".pdf,.doc,.docx" 
                 onChange={(e) => setFile(e.target.files?.[0] || null)}
                 className="absolute inset-0 opacity-0 cursor-pointer" 
                 required 
               />
               {file ? (
                 <>
                   <FileText size={24} className="mb-2 text-primary" />
                   <span className="text-[14px] font-bold text-text-primary">{file.name}</span>
                 </>
               ) : (
                 <>
                   <UploadCloud size={24} className="mb-2 text-text-secondary" />
                   <span className="text-[13px] font-medium">Click or drag PDF to upload</span>
                 </>
               )}
            </div>
          </div>

          <div className="pt-4 border-t border-border flex justify-end gap-3">
            {successMessage ? (
              <div className="flex-1 text-success text-[13px] font-bold self-center animate-in fade-in">
                {successMessage}
              </div>
            ) : null}
            <button type="button" onClick={closeUploadModal} className="px-5 py-2.5 bg-page border border-border text-text-primary font-bold text-[14px] rounded-lg hover:bg-white/5 transition-colors">
              Cancel
            </button>
            <button type="submit" disabled={!!successMessage} className="px-5 py-2.5 bg-primary text-black font-bold text-[14px] rounded-lg hover:bg-primary/90 flex items-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
              <UploadCloud size={18} /> Upload Syllabus
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}
