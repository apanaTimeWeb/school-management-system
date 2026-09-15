"use client";

import React, { useState } from 'react';
import type { LeaveRequest } from '../student_leave_types/student_leave_types';
import { Calendar, FileText, Paperclip, Send, Loader2, AlertCircle } from 'lucide-react';

interface Props {
  onSubmit: (payload: Partial<LeaveRequest>) => Promise<void>;
}

export default function StudentLeaveForm({ onSubmit }: Props) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    leaveType: 'Sick Leave',
    startDate: '',
    endDate: '',
    reason: '',
    hasAttachment: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.startDate || !formData.endDate || !formData.reason.trim()) {
      alert("Please fill in all required fields.");
      return;
    }
    
    setIsSubmitting(true);
    await onSubmit(formData);
    setIsSubmitting(false);
  };

  return (
    <div className="bg-card border border-border rounded-xl p-6 shadow-sm max-w-3xl">
      <h2 className="text-xl font-bold text-text-primary mb-6 flex items-center gap-2">
        <FileText className="text-primary" size={24} /> New Leave Application
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        
        {/* Leave Type */}
        <div>
          <label className="block text-sm font-bold text-text-secondary mb-1.5 uppercase tracking-wider">Leave Type <span className="text-danger">*</span></label>
          <div className="relative">
            <select
              value={formData.leaveType}
              onChange={(e) => setFormData({...formData, leaveType: e.target.value})}
              className="w-full bg-page border border-border text-text-primary text-sm rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary block p-3 font-semibold appearance-none cursor-pointer"
            >
              <option value="Sick Leave">Sick Leave</option>
              <option value="Casual Leave">Casual Leave</option>
              <option value="Emergency">Emergency</option>
              <option value="Other">Other</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-text-secondary">
               <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
            </div>
          </div>
        </div>

        {/* Dates */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-bold text-text-secondary mb-1.5 uppercase tracking-wider">Start Date <span className="text-danger">*</span></label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Calendar size={16} className="text-text-secondary" />
              </div>
              <input 
                type="date" 
                value={formData.startDate}
                onChange={(e) => setFormData({...formData, startDate: e.target.value})}
                className="bg-page border border-border text-text-primary text-sm rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary block w-full pl-10 p-3 font-semibold" 
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-bold text-text-secondary mb-1.5 uppercase tracking-wider">End Date <span className="text-danger">*</span></label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Calendar size={16} className="text-text-secondary" />
              </div>
              <input 
                type="date" 
                value={formData.endDate}
                onChange={(e) => setFormData({...formData, endDate: e.target.value})}
                className="bg-page border border-border text-text-primary text-sm rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary block w-full pl-10 p-3 font-semibold" 
              />
            </div>
          </div>
        </div>

        {/* Reason */}
        <div>
          <label className="block text-sm font-bold text-text-secondary mb-1.5 uppercase tracking-wider">Reason <span className="text-danger">*</span></label>
          <textarea
            rows={4}
            value={formData.reason}
            onChange={(e) => setFormData({...formData, reason: e.target.value})}
            placeholder="Please explain the reason for your leave clearly..."
            className="w-full bg-page border border-border text-text-primary text-sm rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary block p-3 font-semibold resize-none"
          ></textarea>
        </div>

        {/* Attachment Mock */}
        <div>
          <label className="block text-sm font-bold text-text-secondary mb-1.5 uppercase tracking-wider">Attachment (Optional)</label>
          <div className="w-full border-2 border-dashed border-border rounded-lg p-6 flex flex-col items-center justify-center bg-page hover:bg-page/50 transition-colors cursor-pointer group">
            <Paperclip size={24} className="text-text-secondary group-hover:text-primary transition-colors mb-2" />
            <span className="text-sm font-bold text-text-primary">Click to upload or drag and drop</span>
            <span className="text-xs text-text-secondary mt-1">SVG, PNG, JPG or PDF (MAX. 5MB)</span>
            {/* Hidden actual input would go here */}
          </div>
          <div className="flex items-center gap-2 mt-2">
            <input 
              type="checkbox" 
              id="mock-attach" 
              checked={formData.hasAttachment}
              onChange={(e) => setFormData({...formData, hasAttachment: e.target.checked})}
              className="w-4 h-4 text-primary bg-page border-border rounded focus:ring-primary focus:ring-2" 
            />
            <label htmlFor="mock-attach" className="text-xs text-text-secondary">Mock: Simulate attaching a file</label>
          </div>
        </div>
        
        <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4 flex items-start gap-3 mt-2">
          <AlertCircle size={16} className="text-amber-500 mt-0.5 shrink-0" />
          <p className="text-xs text-text-secondary">
            <strong className="text-amber-600 block mb-1">Approval Workflow</strong>
            Your leave request will be routed to your Class Teacher. Leaves longer than 3 days may require Principal's approval as per school policy.
          </p>
        </div>

        <div className="flex justify-end mt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex items-center gap-2 px-6 py-3 bg-primary text-white text-sm font-bold rounded-lg shadow-sm hover:bg-primary-hover transition-colors disabled:opacity-70"
          >
            {isSubmitting ? <><Loader2 size={18} className="animate-spin" /> Submitting...</> : <><Send size={18} /> Submit Application</>}
          </button>
        </div>

      </form>
    </div>
  );
}
