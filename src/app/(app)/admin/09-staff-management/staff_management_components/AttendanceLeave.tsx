"use client";

import React, { useState } from 'react';
import { Calendar, CheckSquare, Fingerprint, ExternalLink, CheckCircle } from 'lucide-react';
import clsx from 'clsx';
import Link from 'next/link';

export default function AttendanceLeave() {
  const [activeTab, setActiveTab] = useState('leave');
  const [leaves, setLeaves] = useState([
    { id: 1, name: 'John Doe', type: 'Sick Leave', days: 2, dates: '12 Nov - 13 Nov', status: 'Pending' },
    { id: 2, name: 'Sarah Smith', type: 'Casual Leave', days: 1, dates: '15 Nov', status: 'Pending' }
  ]);

  const updateLeaveStatus = (id: number, newStatus: string) => {
    setLeaves(leaves.map(l => l.id === id ? { ...l, status: newStatus } : l));
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 h-full min-h-[500px] fade-in relative">
      <div className="w-full md:w-64 bg-card border border-border rounded-xl shadow-sm flex flex-col p-2 h-fit shrink-0">
        <button onClick={() => setActiveTab('leave')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition mb-1", activeTab === 'leave' ? 'bg-primary/10 text-primary' : 'text-text-secondary hover:bg-bg-page')}>
          <Calendar size={18} /> Leave Requests
        </button>
        <button onClick={() => setActiveTab('attendance')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition", activeTab === 'attendance' ? 'bg-info/10 text-info' : 'text-text-secondary hover:bg-bg-page')}>
          <Fingerprint size={18} /> Daily Attendance
        </button>
      </div>

      <div className="flex-1 bg-card border border-border rounded-xl shadow-sm p-6 overflow-y-auto">
        
        {activeTab === 'leave' && (
          <div className="flex flex-col gap-6 fade-in">
            <h2 className="text-xl font-bold text-text-primary border-b border-border pb-2">Staff Leave Management</h2>
            
            <div className="flex flex-col gap-3">
              {leaves.map(l => (
                <div key={l.id} className="bg-bg-page border border-border p-4 rounded-lg flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-sm text-text-primary">{l.name}</span>
                    <span className={clsx("text-xs font-bold px-2 py-0.5 rounded", l.status === 'Pending' ? 'bg-warning-bg text-warning' : l.status === 'Approved' ? 'bg-success-bg text-success' : 'bg-danger-bg text-danger')}>{l.status}</span>
                  </div>
                  <p className="text-sm text-text-secondary">Requested <span className="font-bold text-text-primary">{l.type}</span> for {l.days} day(s) on {l.dates}</p>
                  
                  {l.status === 'Pending' && (
                    <div className="flex gap-2 mt-2 pt-2 border-t border-border">
                      <button onClick={() => updateLeaveStatus(l.id, 'Approved')} className="text-xs bg-success text-white px-4 py-1.5 rounded font-bold shadow-sm transition">Approve Leave</button>
                      <button onClick={() => updateLeaveStatus(l.id, 'Rejected')} className="text-xs bg-danger-bg text-danger border border-danger/30 px-4 py-1.5 rounded font-bold transition">Reject</button>
                    </div>
                  )}
                </div>
              ))}
              {leaves.filter(l => l.status === 'Pending').length === 0 && (
                <div className="text-sm text-text-secondary font-bold py-4">No pending leave requests.</div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'attendance' && (
          <div className="flex flex-col gap-6 fade-in h-full justify-center items-center text-center">
            <div className="w-20 h-20 bg-info/10 text-info rounded-full flex items-center justify-center mb-4">
              <CheckSquare size={40} />
            </div>
            <h2 className="text-2xl font-bold text-text-primary">Staff Attendance Module</h2>
            <p className="text-sm text-text-secondary max-w-md">
              Staff attendance and biometric sync logic is managed centrally within the Attendance Management module.
            </p>
            <Link href="/admin/06-attendance-management" className="mt-4 bg-primary text-black px-6 py-2 rounded-lg font-bold shadow-sm hover:bg-primary-hover active:scale-95 transition flex items-center gap-2">
              Go to Attendance Management <ExternalLink size={16}/>
            </Link>
          </div>
        )}

      </div>
    </div>
  );
}
