"use client";

import React, { useState } from 'react';
import { UserCheck, UserX, AlertCircle, CheckCircle } from 'lucide-react';
import clsx from 'clsx';

const mockLeaves = [
  { id: 101, student: 'Aarav Sharma', class: '10-A', type: 'Sick Leave', from: '2026-10-01', to: '2026-10-02', days: 2, reason: 'Viral Fever', status: 'Pending' },
  { id: 102, student: 'Neha Gupta', class: '9-B', type: 'Casual Leave', from: '2026-10-15', to: '2026-10-15', days: 1, reason: 'Family Function', status: 'Pending' },
  { id: 103, student: 'Rohan Verma', class: '12-Sci', type: 'Medical Leave', from: '2026-09-10', to: '2026-09-20', days: 11, reason: 'Surgery', status: 'Approved' },
];

export default function StudentLeave() {
  const [leaves, setLeaves] = useState(mockLeaves);
  const [showToast, setShowToast] = useState('');

  const handleAction = (id: number, newStatus: string) => {
    setLeaves(leaves.map(l => l.id === id ? { ...l, status: newStatus } : l));
    setShowToast(newStatus);
    setTimeout(() => setShowToast(''), 3000);
  };

  return (
    <div className="flex flex-col gap-6 h-full min-h-[500px] fade-in relative">
      {showToast && (
        <div className={clsx("absolute top-4 right-4 text-white px-4 py-2 rounded-lg shadow-lg font-bold text-sm flex items-center gap-2 fade-in z-10", showToast === 'Approved' ? 'bg-success' : 'bg-danger')}>
          <CheckCircle size={16} /> Leave {showToast}
        </div>
      )}

      <div className="flex-1 bg-card border border-border rounded-xl shadow-sm p-6 overflow-y-auto">
        <div className="flex justify-between items-center border-b border-border pb-4 mb-6">
          <h2 className="text-xl font-bold text-text-primary">Student Leave Approval Portal</h2>
          <div className="flex gap-2">
            <span className="bg-warning-bg text-warning px-3 py-1 rounded font-bold text-xs">{leaves.filter(l=>l.status==='Pending').length} Pending</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {leaves.map(leave => (
            <div key={leave.id} className={clsx("border rounded-xl p-5 shadow-sm transition-all relative overflow-hidden", leave.status === 'Pending' ? 'bg-card border-warning/50' : 'bg-bg-page border-border opacity-70')}>
              {leave.status !== 'Pending' && (
                <div className={clsx("absolute top-3 right-3 text-[10px] font-bold px-2 py-0.5 rounded uppercase", leave.status === 'Approved' ? 'bg-success-bg text-success' : 'bg-danger-bg text-danger')}>
                  {leave.status}
                </div>
              )}
              
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold text-lg shrink-0">
                  {leave.student.charAt(0)}
                </div>
                <div>
                  <h3 className="font-bold text-text-primary text-sm">{leave.student}</h3>
                  <p className="text-xs text-text-secondary font-semibold">Class {leave.class}</p>
                </div>
              </div>

              <div className="flex flex-col gap-2 text-sm mb-4 bg-bg-input p-3 rounded-md">
                <div className="flex justify-between">
                  <span className="text-text-secondary text-xs font-bold uppercase">Type</span>
                  <span className="font-semibold text-text-primary text-xs">{leave.type}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary text-xs font-bold uppercase">Dates</span>
                  <span className="font-semibold text-primary text-xs">{new Date(leave.from).toLocaleDateString('en-GB')} to {new Date(leave.to).toLocaleDateString('en-GB')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary text-xs font-bold uppercase">Duration</span>
                  <span className="font-bold text-text-primary text-xs">{leave.days} Day(s)</span>
                </div>
              </div>

              <div className="mb-4">
                <span className="text-text-secondary text-[10px] font-bold uppercase flex items-center gap-1 mb-1"><AlertCircle size={12}/> Reason</span>
                <p className="text-xs text-text-primary font-medium line-clamp-2">{leave.reason}</p>
              </div>

              {leave.status === 'Pending' && (
                <div className="flex gap-2 mt-4 pt-4 border-t border-border">
                  <button onClick={() => handleAction(leave.id, 'Approved')} className="flex-1 flex items-center justify-center gap-2 bg-success text-white px-3 py-2 rounded-lg font-bold text-xs shadow-sm hover:bg-success/90 transition">
                    <UserCheck size={14}/> Approve
                  </button>
                  <button onClick={() => handleAction(leave.id, 'Rejected')} className="flex-1 flex items-center justify-center gap-2 bg-danger-bg text-danger border border-danger/30 px-3 py-2 rounded-lg font-bold text-xs hover:bg-danger hover:text-white transition">
                    <UserX size={14}/> Reject
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
