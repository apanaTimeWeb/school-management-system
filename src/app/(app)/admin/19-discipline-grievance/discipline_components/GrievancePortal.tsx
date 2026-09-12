"use client";

import React, { useState } from 'react';
import { Mail, GraduationCap, Users, UserCog, CheckCircle } from 'lucide-react';
import clsx from 'clsx';

export default function GrievancePortal() {
  const [activeTab, setActiveTab] = useState('student');
  
  const grievances = [
    { id: 'GR-101', title: 'Food Quality in Canteen', by: 'Students Union', date: 'Today', status: 'New', type: 'student' },
    { id: 'GR-102', title: 'Bus arriving late on Route 4', by: 'Mr. Sharma (Parent)', date: 'Yesterday', status: 'In Progress', type: 'parent' },
    { id: 'GR-103', title: 'Need new projector in Lab 2', by: 'Science Dept', date: '2 Days Ago', status: 'New', type: 'staff' },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-6 h-full min-h-[500px] fade-in relative">
      <div className="w-full md:w-64 bg-card border border-border rounded-xl shadow-sm flex flex-col p-2 h-fit shrink-0">
        <button onClick={() => setActiveTab('student')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition mb-1", activeTab === 'student' ? 'bg-primary/10 text-primary' : 'text-text-secondary hover:bg-bg-page')}>
          <GraduationCap size={18} /> Student Complaints
        </button>
        <button onClick={() => setActiveTab('parent')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition mb-1", activeTab === 'parent' ? 'bg-info/10 text-info' : 'text-text-secondary hover:bg-bg-page')}>
          <Users size={18} /> Parent Complaints
        </button>
        <button onClick={() => setActiveTab('staff')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition", activeTab === 'staff' ? 'bg-warning/10 text-warning' : 'text-text-secondary hover:bg-bg-page')}>
          <UserCog size={18} /> Staff Complaints
        </button>
      </div>

      <div className="flex-1 bg-card border border-border rounded-xl shadow-sm p-6 overflow-y-auto">
        <div className="flex flex-col gap-6 fade-in">
           <h2 className="text-xl font-bold text-text-primary border-b border-border pb-2 capitalize flex items-center gap-2">
             <Mail size={20} className="text-primary"/> {activeTab} Grievances Inbox
           </h2>
           
           <div className="flex flex-col gap-3">
              {grievances.filter(g => g.type === activeTab).length === 0 ? (
                 <div className="text-center py-10 opacity-50 font-bold text-sm">No complaints found.</div>
              ) : (
                 grievances.filter(g => g.type === activeTab).map(g => (
                   <div key={g.id} className="bg-bg-page border border-border p-4 rounded-lg flex justify-between items-start shadow-sm hover:border-primary transition cursor-pointer">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-black text-text-secondary">{g.id}</span>
                          <span className={clsx("text-[9px] font-bold px-2 py-0.5 rounded uppercase", g.status === 'New' ? 'bg-danger-bg text-danger' : 'bg-warning-bg text-warning')}>{g.status}</span>
                        </div>
                        <h4 className="font-bold text-sm text-text-primary">{g.title}</h4>
                        <p className="text-xs text-text-secondary font-semibold mt-1">Submitted by: {g.by} • {g.date}</p>
                      </div>
                      <button className="bg-card border border-border px-3 py-1.5 rounded text-xs font-bold hover:border-primary">View Details</button>
                   </div>
                 ))
              )}
           </div>
        </div>
      </div>
    </div>
  );
}
