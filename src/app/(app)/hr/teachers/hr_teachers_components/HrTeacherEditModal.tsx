"use client";

import { useState, useEffect } from "react";
import { X, Save, BookOpen, GraduationCap } from "lucide-react";
import type { Teacher } from "../hr_teachers_types/HrTeachersTypes";

interface HrTeacherEditModalProps {
  teacher: Teacher | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (updatedTeacher: Teacher) => void;
}

export default function HrTeacherEditModal({ teacher, isOpen, onClose, onSave }: HrTeacherEditModalProps) {
  const [formData, setFormData] = useState<Teacher | null>(null);

  useEffect(() => {
    if (teacher) {
      setFormData(JSON.parse(JSON.stringify(teacher)));
    }
  }, [teacher]);

  if (!isOpen || !formData) return null;

  const handleChange = (field: keyof Teacher, value: any) => {
    setFormData(prev => prev ? { ...prev, [field]: value } : null);
  };

  const handleSubjectsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const subjects = e.target.value.split(',').map(s => s.trim()).filter(Boolean);
    handleChange('subjects', subjects);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm motion-safe:animate-in motion-safe:fade-in">
      <div className="bg-card w-full max-w-2xl rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border bg-input/30">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500">
               <GraduationCap size={20}/>
             </div>
             <div>
               <h2 className="text-xl font-bold text-foreground">Edit Teacher Configuration</h2>
               <p className="text-sm text-muted-foreground">{formData.firstName} {formData.lastName} ({formData.teacherId})</p>
             </div>
          </div>
          <button onClick={onClose} className="p-2 text-muted-foreground hover:bg-muted hover:text-foreground rounded-full transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Form Body */}
        <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
          <form id="edit-teacher-form" onSubmit={handleSubmit} className="space-y-6">
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground">First Name</label>
                  <input type="text" value={formData.firstName} onChange={e => handleChange('firstName', e.target.value)} className="w-full p-2.5 bg-input border border-border rounded-md text-sm text-foreground focus:border-primary outline-none" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground">Last Name</label>
                  <input type="text" value={formData.lastName} onChange={e => handleChange('lastName', e.target.value)} className="w-full p-2.5 bg-input border border-border rounded-md text-sm text-foreground focus:border-primary outline-none" required />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground">Department</label>
                  <select value={formData.department} onChange={e => handleChange('department', e.target.value)} className="w-full p-2.5 bg-input border border-border rounded-md text-sm text-foreground focus:border-primary outline-none">
                    <option value="Mathematics">Mathematics</option>
                    <option value="Science">Science</option>
                    <option value="English">English</option>
                    <option value="Computer Science">Computer Science</option>
                    <option value="Social Studies">Social Studies</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground">Class Teacher (Optional)</label>
                  <input type="text" placeholder="e.g. 10-A" value={formData.classTeacherOf || ''} onChange={e => handleChange('classTeacherOf', e.target.value)} className="w-full p-2.5 bg-input border border-border rounded-md text-sm text-foreground focus:border-primary outline-none" />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-bold text-foreground">Subjects (Comma separated)</label>
                  <input type="text" placeholder="e.g. Physics, Chemistry" value={formData.subjects.join(', ')} onChange={handleSubjectsChange} className="w-full p-2.5 bg-input border border-border rounded-md text-sm text-foreground focus:border-primary outline-none" required />
                </div>
             </div>
             
          </form>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-end gap-3 p-6 border-t border-border bg-input/30">
          <button onClick={onClose} className="px-6 py-2.5 text-sm font-bold text-foreground hover:bg-input border border-transparent hover:border-border rounded-lg transition-colors">
            Cancel
          </button>
          <button type="submit" form="edit-teacher-form" className="flex items-center gap-2 px-6 py-2.5 text-sm font-bold text-white bg-primary rounded-lg shadow-lg hover:shadow-primary/30 transition-all hover:scale-105 active:scale-95">
            <Save size={18} />
            Save Configuration
          </button>
        </div>

      </div>
    </div>
  );
}

