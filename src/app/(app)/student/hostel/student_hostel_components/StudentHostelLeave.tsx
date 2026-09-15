"use client";

import React, { useState } from 'react';
import type { HostelLeave } from '../student_hostel_types/student_hostel_types';
import { CalendarClock, Plus, Loader2, CheckCircle2, XCircle, Clock } from 'lucide-react';
import clsx from 'clsx';

interface Props {
  leaves: HostelLeave[];
  onSubmit: (payload: any) => Promise<{success: boolean, message: string}>;
}

export default function StudentHostelLeave({ leaves, onSubmit }: Props) {
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Form State
  const [leaveType, setLeaveType] = useState('Night Out');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [reason, setReason] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!startDate || !endDate || !reason) return;
    
    setIsSubmitting(true);
    const res = await onSubmit({ leaveType, startDate, endDate, reason });
    setIsSubmitting(false);
    
    if (res.success) {
      setShowForm(false);
      setLeaveType('Night Out');
      setStartDate('');
      setEndDate('');
      setReason('');
      alert(res.message);
    }
  };

  const getStatusIcon = (status: string) => {
    if (status === 'Approved') return <CheckCircle2 size={14} className="text-success" />;
    if (status === 'Rejected') return <XCircle size={14} className="text-danger" />;
    return <Clock size={14} className="text-amber-500" />;
  };

  const getStatusColor = (status: string) => {
    if (status === 'Approved') return "bg-success/10 text-success border-success/20";
    if (status === 'Rejected') return "bg-danger/10 text-danger border-danger/20";
    return "bg-amber-500/10 text-amber-500 border-amber-500/20";
  };

  return (
    <div className="flex flex-col motion-safe:animate-[fadeIn_0.3s_ease-out]">
      
      <div className="flex items-center justify-between border-b border-border pb-4 mb-6">
        <h2 className="text-lg font-bold text-text-primary flex items-center gap-2">
          <CalendarClock size={20} className="text-primary" /> Leave Requests
        </h2>
        <button 
          onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-white text-sm font-bold rounded-lg shadow-sm hover:bg-primary-hover transition-colors"
        >
          <Plus size={16} /> {showForm ? "Cancel" : "Apply Leave"}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="bg-page border border-border rounded-xl p-5 mb-6 shadow-sm motion-safe:animate-[slideIn_0.2s_ease-out]">
          <h3 className="text-base font-bold text-text-primary mb-4">New Leave Application</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-xs font-bold text-text-secondary uppercase mb-1">Leave Type</label>
              <select 
                value={leaveType} onChange={(e) => setLeaveType(e.target.value)}
                className="w-full bg-card border border-border text-text-primary text-sm rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary px-3 py-2 outline-none font-semibold"
              >
                <option value="Night Out">Night Out</option>
                <option value="Going Home">Going Home</option>
                <option value="Emergency">Emergency</option>
              </select>
            </div>
            <div></div> {/* Empty column for layout */}
            
            <div>
              <label className="block text-xs font-bold text-text-secondary uppercase mb-1">Start Date</label>
              <input 
                type="date" required value={startDate} onChange={(e) => setStartDate(e.target.value)}
                className="w-full bg-card border border-border text-text-primary text-sm rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary px-3 py-2 outline-none font-semibold"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-text-secondary uppercase mb-1">End Date</label>
              <input 
                type="date" required value={endDate} onChange={(e) => setEndDate(e.target.value)}
                className="w-full bg-card border border-border text-text-primary text-sm rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary px-3 py-2 outline-none font-semibold"
              />
            </div>
            
            <div className="md:col-span-2">
              <label className="block text-xs font-bold text-text-secondary uppercase mb-1">Reason</label>
              <textarea 
                required rows={3} value={reason} onChange={(e) => setReason(e.target.value)}
                placeholder="State the reason clearly..."
                className="w-full bg-card border border-border text-text-primary text-sm rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary px-3 py-2 outline-none font-medium custom-scrollbar"
              />
            </div>
          </div>
          
          <div className="flex justify-end">
            <button 
              type="submit" disabled={isSubmitting}
              className="flex items-center gap-2 px-6 py-2.5 bg-primary text-white text-sm font-bold rounded-lg shadow-sm hover:bg-primary-hover transition-colors disabled:opacity-50"
            >
              {isSubmitting ? <><Loader2 size={16} className="animate-spin" /> Submitting...</> : "Submit Application"}
            </button>
          </div>
        </form>
      )}

      {/* History List */}
      <h3 className="text-sm font-bold text-text-secondary uppercase mb-4">Past Applications</h3>
      {leaves.length === 0 ? (
        <div className="text-center py-10 text-text-secondary bg-page border border-border rounded-xl">No leave history found.</div>
      ) : (
        <div className="space-y-3">
          {leaves.map(lv => (
            <div key={lv.id} className="bg-page border border-border rounded-xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-bold bg-primary/10 text-primary px-2 py-0.5 rounded border border-primary/20 uppercase tracking-wider">
                    {lv.leaveType}
                  </span>
                </div>
                <p className="text-sm font-medium text-text-primary mb-2">{lv.reason}</p>
                <div className="text-xs font-semibold text-text-secondary">
                  {lv.startDate} &rarr; {lv.endDate}
                </div>
              </div>
              
              <div className={clsx("flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-bold shrink-0", getStatusColor(lv.status))}>
                {getStatusIcon(lv.status)} {lv.status}
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}
