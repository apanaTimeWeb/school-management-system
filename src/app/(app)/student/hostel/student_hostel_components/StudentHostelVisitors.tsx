"use client";

import React, { useState } from 'react';
import type { VisitorInfo } from '../student_hostel_types/student_hostel_types';
import { Users, Plus, Loader2, Clock, CheckCircle, XCircle, CalendarClock } from 'lucide-react';
import clsx from 'clsx';

interface Props {
  visitors: VisitorInfo[];
  onSubmit: (payload: any) => Promise<{success: boolean, message: string}>;
}

export default function StudentHostelVisitors({ visitors, onSubmit }: Props) {
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [visitorName, setVisitorName] = useState('');
  const [relation, setRelation] = useState('');
  const [visitDate, setVisitDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!visitorName || !relation || !visitDate || !timeSlot) return;
    
    setIsSubmitting(true);
    const res = await onSubmit({ visitorName, relation, visitDate, timeSlot });
    setIsSubmitting(false);
    
    if (res.success) {
      setShowForm(false);
      setVisitorName(''); setRelation(''); setVisitDate(''); setTimeSlot('');
      alert(res.message);
    }
  };

  return (
    <div className="flex flex-col motion-safe:animate-[fadeIn_0.3s_ease-out]">
      
      <div className="flex items-center justify-between border-b border-border pb-4 mb-6">
        <h2 className="text-lg font-bold text-text-primary flex items-center gap-2">
          <Users size={20} className="text-primary" /> Visitor Pre-Registration
        </h2>
        <button 
          onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-white text-sm font-bold rounded-lg shadow-sm hover:bg-primary-hover transition-colors"
        >
          <Plus size={16} /> {showForm ? "Cancel" : "New Pass"}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="bg-page border border-border rounded-xl p-5 mb-6 shadow-sm motion-safe:animate-[slideIn_0.2s_ease-out]">
          <h3 className="text-base font-bold text-text-primary mb-4">Register Visitor Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-xs font-bold text-text-secondary uppercase mb-1">Visitor Name</label>
              <input type="text" required value={visitorName} onChange={(e) => setVisitorName(e.target.value)} className="w-full bg-card border border-border text-text-primary text-sm rounded-lg focus:ring-primary/20 focus:border-primary px-3 py-2 outline-none font-semibold"/>
            </div>
            <div>
              <label className="block text-xs font-bold text-text-secondary uppercase mb-1">Relation (e.g. Father, Uncle)</label>
              <input type="text" required value={relation} onChange={(e) => setRelation(e.target.value)} className="w-full bg-card border border-border text-text-primary text-sm rounded-lg focus:ring-primary/20 focus:border-primary px-3 py-2 outline-none font-semibold"/>
            </div>
            <div>
              <label className="block text-xs font-bold text-text-secondary uppercase mb-1">Expected Visit Date</label>
              <input type="date" required value={visitDate} onChange={(e) => setVisitDate(e.target.value)} className="w-full bg-card border border-border text-text-primary text-sm rounded-lg focus:ring-primary/20 focus:border-primary px-3 py-2 outline-none font-semibold"/>
            </div>
            <div>
              <label className="block text-xs font-bold text-text-secondary uppercase mb-1">Time Slot (e.g. 4 PM - 6 PM)</label>
              <input type="text" required value={timeSlot} onChange={(e) => setTimeSlot(e.target.value)} placeholder="04:00 PM - 06:00 PM" className="w-full bg-card border border-border text-text-primary text-sm rounded-lg focus:ring-primary/20 focus:border-primary px-3 py-2 outline-none font-semibold"/>
            </div>
          </div>
          <div className="flex justify-end">
            <button type="submit" disabled={isSubmitting} className="flex items-center gap-2 px-6 py-2.5 bg-primary text-white text-sm font-bold rounded-lg disabled:opacity-50">
              {isSubmitting ? <><Loader2 size={16} className="animate-spin" /> Submitting...</> : "Generate Pass Request"}
            </button>
          </div>
        </form>
      )}

      {/* List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {visitors.map(vis => (
          <div key={vis.id} className="bg-page border border-border rounded-xl p-4 flex flex-col justify-between hover:border-primary/30 transition-colors">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="text-base font-bold text-text-primary leading-tight">{vis.visitorName}</h4>
                <span className="text-xs font-semibold text-text-secondary">{vis.relation}</span>
              </div>
              <span className={clsx(
                "text-[10px] font-bold px-2 py-0.5 rounded uppercase",
                vis.status === 'Approved' ? "bg-success/10 text-success border border-success/20" :
                vis.status === 'Completed' ? "bg-text-secondary/10 text-text-secondary border border-border" :
                vis.status === 'Rejected' ? "bg-danger/10 text-danger border border-danger/20" :
                "bg-amber-500/10 text-amber-500 border border-amber-500/20"
              )}>
                {vis.status}
              </span>
            </div>
            <div className="flex items-center gap-4 text-xs font-semibold text-text-secondary">
              <span className="flex items-center gap-1"><CalendarClock size={12} className="text-primary"/> {vis.visitDate}</span>
              <span className="flex items-center gap-1"><Clock size={12} className="text-info"/> {vis.timeSlot}</span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
