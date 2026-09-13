"use client";
import React, { useState } from 'react';
import { X, Send, AlertTriangle } from 'lucide-react';
import { useTeacherDisciplineStore, IncidentSeverity } from '../discipline_store/useTeacherDisciplineStore';

export default function TeacherLogIncidentModal() {
  const { isLogIncidentModalOpen, closeLogIncidentModal } = useTeacherDisciplineStore();
  
  const [formData, setFormData] = useState({
    studentName: '',
    class: '',
    incidentType: '',
    description: '',
    severity: 'Low' as IncidentSeverity,
    actionTaken: '',
    parentNotified: false,
    escalatedToPrincipal: false
  });

  if (!isLogIncidentModalOpen) return null;

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent('open-teacher-coming-soon', { detail: 'Incident logged successfully and respective parties notified.' }));
    closeLogIncidentModal();
  };

  const INCIDENT_TYPES = ['Disruptive Behaviour', 'Late Arrival', 'Cheating', 'Insubordination', 'Property Damage', 'Bullying', 'Other'];

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm transition-opacity p-4">
      <div className="w-full max-w-2xl bg-bg-main shadow-2xl rounded-2xl border border-border overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-border flex items-center justify-between bg-card">
          <h2 className="text-[18px] font-bold text-danger flex items-center gap-2">
            <AlertTriangle size={20} /> Log Disciplinary Incident
          </h2>
          <button onClick={closeLogIncidentModal} className="p-1.5 rounded-full bg-page hover:bg-white/10 text-text-secondary hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <form onSubmit={handleSend} className="p-6 space-y-5 overflow-y-auto custom-scrollbar max-h-[75vh]">
           
           <div className="grid grid-cols-2 gap-4">
             <div>
               <label className="block text-[12px] font-bold text-text-secondary uppercase mb-2">Student Name / Roll No</label>
               <input 
                 type="text" 
                 value={formData.studentName}
                 onChange={e => setFormData({...formData, studentName: e.target.value})}
                 className="w-full bg-input border border-border rounded-lg px-4 py-2.5 text-[14px] text-text-primary focus:border-danger focus:outline-none" required 
                 placeholder="Search student..."
               />
             </div>
             <div>
               <label className="block text-[12px] font-bold text-text-secondary uppercase mb-2">Class</label>
               <select 
                 value={formData.class}
                 onChange={e => setFormData({...formData, class: e.target.value})}
                 className="w-full bg-input border border-border rounded-lg px-4 py-2.5 text-[14px] text-text-primary focus:border-danger focus:outline-none" required
               >
                 <option value="">Select class...</option>
                 <option value="Class 10 A">Class 10 A</option>
                 <option value="Class 11 Sci">Class 11 Sci</option>
               </select>
             </div>
           </div>

           <div className="grid grid-cols-2 gap-4">
             <div>
               <label className="block text-[12px] font-bold text-text-secondary uppercase mb-2">Incident Type</label>
               <select 
                 value={formData.incidentType}
                 onChange={e => setFormData({...formData, incidentType: e.target.value})}
                 className="w-full bg-input border border-border rounded-lg px-4 py-2.5 text-[14px] text-text-primary focus:border-danger focus:outline-none" required
               >
                 <option value="">Select type...</option>
                 {INCIDENT_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
               </select>
             </div>
             <div>
               <label className="block text-[12px] font-bold text-text-secondary uppercase mb-2">Severity Level</label>
               <select 
                 value={formData.severity}
                 onChange={e => setFormData({...formData, severity: e.target.value as IncidentSeverity})}
                 className="w-full bg-input border border-border rounded-lg px-4 py-2.5 text-[14px] text-text-primary focus:border-danger focus:outline-none" required
               >
                 <option value="Low">Low (Warning)</option>
                 <option value="Medium">Medium (Parent Notice)</option>
                 <option value="High">High (Principal Escalate)</option>
               </select>
             </div>
           </div>

           <div>
             <label className="block text-[12px] font-bold text-text-secondary uppercase mb-2">Detailed Description</label>
             <textarea 
               value={formData.description}
               onChange={e => setFormData({...formData, description: e.target.value})}
               placeholder="Describe exactly what happened..."
               className="w-full h-24 bg-input border border-border rounded-lg p-3 text-[14px] text-text-primary focus:outline-none focus:border-danger resize-none custom-scrollbar"
               required
             ></textarea>
           </div>

           <div>
             <label className="block text-[12px] font-bold text-text-secondary uppercase mb-2">Initial Action Taken</label>
             <input 
               type="text" 
               value={formData.actionTaken}
               onChange={e => setFormData({...formData, actionTaken: e.target.value})}
               className="w-full bg-input border border-border rounded-lg px-4 py-2.5 text-[14px] text-text-primary focus:border-danger focus:outline-none" required 
               placeholder="e.g. Verbal warning given, shifted seat."
             />
           </div>

           <div className="bg-page border border-border rounded-lg p-4 flex flex-col gap-3">
             <label className="flex items-center gap-3 cursor-pointer">
               <input 
                 type="checkbox" 
                 checked={formData.parentNotified}
                 onChange={e => setFormData({...formData, parentNotified: e.target.checked})}
                 className="w-4 h-4 rounded border-border text-danger focus:ring-danger bg-input"
               />
               <span className="text-[13px] font-bold text-text-primary">Send Auto-Notification to Parents</span>
             </label>
             <label className="flex items-center gap-3 cursor-pointer">
               <input 
                 type="checkbox" 
                 checked={formData.escalatedToPrincipal}
                 onChange={e => setFormData({...formData, escalatedToPrincipal: e.target.checked})}
                 className="w-4 h-4 rounded border-border text-danger focus:ring-danger bg-input"
               />
               <span className="text-[13px] font-bold text-danger">Escalate directly to Principal for review</span>
             </label>
           </div>

           <div className="pt-2 flex justify-end gap-3 border-t border-border mt-4">
             <button type="button" onClick={closeLogIncidentModal} className="px-5 py-2.5 bg-transparent border border-border text-text-primary font-bold text-[13px] rounded-lg hover:bg-white/5 transition-colors mr-auto">
               Cancel
             </button>
             <button type="submit" className="px-5 py-2.5 bg-danger text-white font-bold text-[13px] rounded-lg hover:bg-danger/90 flex items-center gap-2 transition-colors">
               <Send size={16} /> Save Record
             </button>
           </div>
        </form>

      </div>
    </div>
  );
}
