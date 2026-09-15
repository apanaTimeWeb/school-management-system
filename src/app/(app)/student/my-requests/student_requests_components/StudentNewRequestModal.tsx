"use client";

import React, { useState } from 'react';
import type { StudentRequest, RequestCategory } from '../student_requests_types/student_requests_types';
import { X, Send, Loader2 } from 'lucide-react';

interface Props {
  onClose: () => void;
  onSubmit: (payload: Partial<StudentRequest>) => Promise<{success: boolean, message: string}>;
}

export default function StudentNewRequestModal({ onClose, onSubmit }: Props) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [category, setCategory] = useState<RequestCategory>('Leave Request');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description) return;
    
    setIsSubmitting(true);
    const res = await onSubmit({ category, title, description });
    setIsSubmitting(false);
    
    if (res.success) {
      alert(res.message);
      onClose();
    }
  };

  const categories: RequestCategory[] = ['Leave Request', 'Certificate Request', 'Bonafide Request', 'Document Request', 'Other'];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm motion-safe:animate-[fadeIn_0.2s_ease-out]">
      <div className="bg-card w-full max-w-lg rounded-2xl shadow-2xl flex flex-col overflow-hidden motion-safe:animate-[slideIn_0.2s_ease-out]">
        
        <div className="flex items-center justify-between p-4 md:p-6 border-b border-border bg-page/50">
          <h2 className="text-lg font-bold text-text-primary">Create New Request</h2>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-border text-text-secondary transition-colors">
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-4 md:p-6 flex flex-col gap-5">
          
          <div>
            <label className="block text-xs font-bold text-text-secondary uppercase mb-2">Category</label>
            <select 
              value={category} onChange={(e) => setCategory(e.target.value as RequestCategory)}
              className="w-full bg-page border border-border text-text-primary text-sm rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary px-3 py-3 outline-none font-semibold"
            >
              {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-text-secondary uppercase mb-2">Subject / Title</label>
            <input 
              type="text" required value={title} onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Sick Leave, Fee Receipt Copy..."
              className="w-full bg-page border border-border text-text-primary text-sm rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary px-3 py-3 outline-none font-semibold"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-text-secondary uppercase mb-2">Detailed Description</label>
            <textarea 
              required rows={4} value={description} onChange={(e) => setDescription(e.target.value)}
              placeholder="Provide all necessary details..."
              className="w-full bg-page border border-border text-text-primary text-sm rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary px-3 py-3 outline-none font-semibold custom-scrollbar"
            />
          </div>

          <div className="flex justify-end gap-3 mt-2">
            <button type="button" onClick={onClose} className="px-5 py-2.5 rounded-lg font-bold text-sm text-text-secondary hover:bg-page border border-transparent hover:border-border transition-colors">
              Cancel
            </button>
            <button type="submit" disabled={isSubmitting || !title || !description} className="flex items-center gap-2 px-6 py-2.5 bg-primary text-white text-sm font-bold rounded-lg shadow-sm hover:bg-primary-hover transition-all disabled:opacity-50">
              {isSubmitting ? <><Loader2 size={16} className="animate-spin" /> Submitting...</> : <><Send size={16} /> Submit Request</>}
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}
