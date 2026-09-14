"use client";
import React, { useState, useEffect } from 'react';
import { X, Save, Send, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { useTeacherExaminationsStore } from '../examinations_store/useTeacherExaminationsStore';
import { TEACHER_STUDENTS_MARKS } from '../examinations_constants/TeacherExaminationsMockData';

export default function TeacherMarksEntryModal() {
  const { isMarksEntryOpen, closeMarksEntry, selectedExam } = useTeacherExaminationsStore();
  
  // Create a local state to hold marks input by the teacher
  const [marksData, setMarksData] = useState(TEACHER_STUDENTS_MARKS.map(s => ({...s})));
  const [successMessage, setSuccessMessage] = useState('');

  // Reset local state if exam changes (to simulate fresh data load)
  useEffect(() => {
    if (isMarksEntryOpen) {
      setMarksData(TEACHER_STUDENTS_MARKS.map(s => ({...s, theory: '', practical: '', internal: ''})));
      setSuccessMessage('');
    }
  }, [isMarksEntryOpen, selectedExam]);

  if (!isMarksEntryOpen || !selectedExam) return null;

  const handleInputChange = (studentId: string, field: 'theory'|'practical'|'internal', value: string) => {
    setMarksData(prev => prev.map(s => s.id === studentId ? { ...s, [field]: value } : s));
  };

  const handleSaveDraft = () => {
    setSuccessMessage('Marks saved as draft. You can continue later.');
    setTimeout(() => {
      setSuccessMessage('');
      closeMarksEntry();
    }, 2500);
  };

  const handleSubmit = () => {
    setSuccessMessage('Marks submitted successfully. Correction requests will be needed for future edits.');
    setTimeout(() => {
      setSuccessMessage('');
      closeMarksEntry();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm transition-opacity p-4">
      <div className="w-full max-w-4xl bg-bg-main shadow-2xl rounded-2xl border border-border overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="px-6 py-5 border-b border-border flex items-center justify-between bg-card shrink-0">
          <div>
            <span className="px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider bg-warning/20 text-warning mb-2 inline-block">Marks Entry Open</span>
            <h2 className="text-[18px] font-bold text-text-primary">
              {selectedExam.name}
            </h2>
            <p className="text-[13px] text-text-secondary mt-1">{selectedExam.class} • {selectedExam.subject}</p>
          </div>
          <button onClick={closeMarksEntry} className="p-1.5 rounded-full bg-page hover:bg-white/10 text-text-secondary hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Info Banner */}
        <div className="bg-primary/10 border-b border-primary/20 p-4 shrink-0 flex items-center gap-3">
          <AlertTriangle size={18} className="text-primary shrink-0" />
          <p className="text-[12px] text-text-primary">
            Please ensure marks are out of: 
            {selectedExam.totalTheory > 0 && <span className="font-bold ml-1">Theory ({selectedExam.totalTheory})</span>}
            {selectedExam.totalPractical > 0 && <span className="font-bold ml-1">Practical ({selectedExam.totalPractical})</span>}
            {selectedExam.totalInternal > 0 && <span className="font-bold ml-1">Internal ({selectedExam.totalInternal})</span>}
          </p>
        </div>

        {/* Body - Students List */}
        <div className="flex-1 overflow-x-auto custom-scrollbar">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-card border-b border-border text-[12px] font-bold text-text-secondary uppercase tracking-wider sticky top-0 z-10">
                <th className="p-4 w-16 text-center border-r border-border">Roll</th>
                <th className="p-4 border-r border-border">Student Name</th>
                {selectedExam.totalTheory > 0 && <th className="p-4 w-32 text-center border-r border-border">Theory</th>}
                {selectedExam.totalPractical > 0 && <th className="p-4 w-32 text-center border-r border-border">Practical</th>}
                {selectedExam.totalInternal > 0 && <th className="p-4 w-32 text-center">Internal</th>}
              </tr>
            </thead>
            <tbody>
              {marksData.map((student) => (
                <tr key={student.id} className="border-b border-border/50 hover:bg-white/5 transition-colors">
                  <td className="p-4 text-[14px] font-bold text-text-secondary text-center border-r border-border/50">{student.rollNo}</td>
                  <td className="p-4 font-bold text-text-primary border-r border-border/50">{student.name}</td>
                  {selectedExam.totalTheory > 0 && (
                    <td className="p-2 border-r border-border/50">
                      <input 
                        type="number" 
                        max={selectedExam.totalTheory}
                        value={student.theory}
                        onChange={(e) => handleInputChange(student.id, 'theory', e.target.value)}
                        className="w-full bg-input border border-border rounded px-3 py-2 text-[14px] text-text-primary font-bold text-center focus:border-primary focus:outline-none"
                        placeholder="-"
                      />
                    </td>
                  )}
                  {selectedExam.totalPractical > 0 && (
                    <td className="p-2 border-r border-border/50">
                      <input 
                        type="number" 
                        max={selectedExam.totalPractical}
                        value={student.practical}
                        onChange={(e) => handleInputChange(student.id, 'practical', e.target.value)}
                        className="w-full bg-input border border-border rounded px-3 py-2 text-[14px] text-text-primary font-bold text-center focus:border-primary focus:outline-none"
                        placeholder="-"
                      />
                    </td>
                  )}
                  {selectedExam.totalInternal > 0 && (
                    <td className="p-2">
                      <input 
                        type="number" 
                        max={selectedExam.totalInternal}
                        value={student.internal}
                        onChange={(e) => handleInputChange(student.id, 'internal', e.target.value)}
                        className="w-full bg-input border border-border rounded px-3 py-2 text-[14px] text-text-primary font-bold text-center focus:border-primary focus:outline-none"
                        placeholder="-"
                      />
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-border flex justify-end gap-3 items-center bg-card shrink-0">
          {successMessage ? (
            <div className="flex-1 text-success text-[13px] font-bold animate-in fade-in flex items-center gap-2">
              <CheckCircle2 size={16} /> {successMessage}
            </div>
          ) : null}
          <button onClick={closeMarksEntry} className="px-5 py-2.5 bg-transparent border border-border text-text-primary font-bold text-[14px] rounded-lg hover:bg-white/5 transition-colors">
            Cancel
          </button>
          <button onClick={handleSaveDraft} disabled={!!successMessage} className="px-5 py-2.5 bg-page border border-border text-text-primary font-bold text-[14px] rounded-lg hover:border-primary/50 transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
            <Save size={18} /> Save as Draft
          </button>
          <button onClick={handleSubmit} disabled={!!successMessage} className="px-5 py-2.5 bg-primary text-white font-bold text-[14px] rounded-lg hover:bg-primary/90 flex items-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
            <Send size={18} /> Submit Marks
          </button>
        </div>

      </div>
    </div>
  );
}
