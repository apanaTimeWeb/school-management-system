"use client";
import React, { useState } from 'react';
import { X, Download, FileText } from 'lucide-react';
import { useTeacherReportsStore } from '../reports_store/useTeacherReportsStore';

export default function TeacherReportGeneratorModal() {
  const { isGeneratorModalOpen, closeGeneratorModal, selectedReportType } = useTeacherReportsStore();
  
  const [formData, setFormData] = useState({
    class: '',
    subject: '',
    dateRange: 'This Month',
    format: 'PDF'
  });

  const [isGenerating, setIsGenerating] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  if (!isGeneratorModalOpen || !selectedReportType) return null;

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);
    setSuccessMessage('');
    
    // Simulate generation delay
    setTimeout(() => {
      setIsGenerating(false);
      setSuccessMessage(`${selectedReportType} has been successfully generated and saved to your device in ${formData.format} format.`);
      
      // Auto close after showing success message for 3 seconds
      setTimeout(() => {
        closeGeneratorModal();
        setSuccessMessage('');
      }, 3000);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm transition-opacity p-4">
      <div className="w-full max-w-lg bg-bg-main shadow-2xl rounded-2xl border border-border overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-border flex items-center justify-between bg-card">
          <h2 className="text-[18px] font-bold text-text-primary flex items-center gap-2">
            <FileText size={20} className="text-primary"/> Configure Report
          </h2>
          <button onClick={closeGeneratorModal} className="p-1.5 rounded-full bg-page hover:bg-white/10 text-text-secondary hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
           <div className="bg-primary/10 border border-primary/20 p-4 rounded-xl mb-5">
             <p className="text-[12px] text-primary uppercase font-bold tracking-wider mb-1">Selected Report</p>
             <p className="text-[18px] font-bold text-text-primary">{selectedReportType}</p>
           </div>

           <form id="report-form" onSubmit={handleGenerate} className="space-y-4">
             <div className="grid grid-cols-2 gap-4">
               <div>
                 <label className="block text-[12px] font-bold text-text-secondary uppercase mb-2">Class</label>
                 <select 
                   value={formData.class}
                   onChange={e => setFormData({...formData, class: e.target.value})}
                   className="w-full bg-input border border-border rounded-lg px-4 py-2.5 text-[14px] text-text-primary focus:border-primary focus:outline-none" required
                 >
                   <option value="">Select class...</option>
                   <option value="Class 10 A">Class 10 A</option>
                   <option value="Class 9 B">Class 9 B</option>
                 </select>
               </div>
               <div>
                 <label className="block text-[12px] font-bold text-text-secondary uppercase mb-2">Subject (Optional)</label>
                 <select 
                   value={formData.subject}
                   onChange={e => setFormData({...formData, subject: e.target.value})}
                   className="w-full bg-input border border-border rounded-lg px-4 py-2.5 text-[14px] text-text-primary focus:border-primary focus:outline-none"
                 >
                   <option value="">All Subjects</option>
                   <option value="Mathematics">Mathematics</option>
                   <option value="Physics">Physics</option>
                 </select>
               </div>
             </div>

             <div className="grid grid-cols-2 gap-4">
               <div>
                 <label className="block text-[12px] font-bold text-text-secondary uppercase mb-2">Date Range</label>
                 <select 
                   value={formData.dateRange}
                   onChange={e => setFormData({...formData, dateRange: e.target.value})}
                   className="w-full bg-input border border-border rounded-lg px-4 py-2.5 text-[14px] text-text-primary focus:border-primary focus:outline-none" required
                 >
                   <option value="This Week">This Week</option>
                   <option value="This Month">This Month</option>
                   <option value="Last 3 Months">Last 3 Months</option>
                   <option value="Academic Year">Full Academic Year</option>
                 </select>
               </div>
               <div>
                 <label className="block text-[12px] font-bold text-text-secondary uppercase mb-2">Export Format</label>
                 <select 
                   value={formData.format}
                   onChange={e => setFormData({...formData, format: e.target.value})}
                   className="w-full bg-input border border-border rounded-lg px-4 py-2.5 text-[14px] text-text-primary focus:border-primary focus:outline-none" required
                 >
                   <option value="PDF">PDF Document (.pdf)</option>
                   <option value="Excel">Excel Sheet (.xlsx)</option>
                   <option value="CSV">CSV Data (.csv)</option>
                 </select>
               </div>
             </div>
           </form>

           {successMessage && (
             <div className="mt-4 p-3 bg-success/10 border border-success/20 rounded-lg text-success text-[13px] font-bold text-center animate-in fade-in zoom-in duration-300">
               {successMessage}
             </div>
           )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-border bg-card flex justify-end gap-3 shrink-0">
           <button type="button" onClick={() => { closeGeneratorModal(); setSuccessMessage(''); }} className="px-5 py-2 bg-transparent border border-border text-text-primary font-bold text-[13px] rounded-lg hover:bg-white/5 transition-colors">
             Cancel
           </button>
           <button type="submit" form="report-form" disabled={isGenerating || !!successMessage} className="px-5 py-2 bg-primary text-white font-bold text-[13px] rounded-lg hover:bg-primary/90 flex items-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
             {isGenerating ? (
               <span className="flex items-center gap-2"><span className="animate-spin h-4 w-4 border-2 border-black border-t-transparent rounded-full"></span> Generating...</span>
             ) : successMessage ? (
               <>Generated!</>
             ) : (
               <><Download size={16} /> Generate Report</>
             )}
           </button>
        </div>

      </div>
    </div>
  );
}
