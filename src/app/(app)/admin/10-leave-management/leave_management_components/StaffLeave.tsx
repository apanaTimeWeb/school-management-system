"use client";

import React, { useState } from 'react';
import { ShieldCheck, ShieldAlert, FileText, CheckCircle } from 'lucide-react';
import clsx from 'clsx';

const mockStaffLeaves = [
  { id: 201, empId: 'EMP001', name: 'John Doe', dept: 'Science', type: 'Casual Leave', from: '2026-11-20', to: '2026-11-22', days: 3, reason: 'Attending Wedding', status: 'Pending' },
  { id: 202, empId: 'EMP045', name: 'Sarah Smith', dept: 'English', type: 'Sick Leave', from: '2026-11-05', to: '2026-11-05', days: 1, reason: 'Doctor Appointment', status: 'Approved' },
];

export default function StaffLeave() {
  const [leaves, setLeaves] = useState(mockStaffLeaves);
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
          <div>
             <h2 className="text-xl font-bold text-text-primary">Staff / Employee Leave Approval</h2>
             <p className="text-xs text-text-secondary mt-1">Review and manage HR leave applications</p>
          </div>
          <div className="flex gap-2">
            <span className="bg-warning-bg text-warning px-3 py-1 rounded font-bold text-xs">{leaves.filter(l=>l.status==='Pending').length} Pending</span>
          </div>
        </div>

        <div className="space-y-4">
          {leaves.map(leave => (
            <div key={leave.id} className={clsx("flex flex-col md:flex-row gap-4 border rounded-xl p-4 shadow-sm transition-all items-center", leave.status === 'Pending' ? 'bg-card border-warning/50' : 'bg-bg-page border-border opacity-80')}>
              
              <div className="flex-1 flex gap-4 w-full md:w-auto">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center font-bold text-xl shrink-0">
                  {leave.name.charAt(0)}
                </div>
                <div className="flex flex-col">
                  <h3 className="font-bold text-text-primary text-sm flex items-center gap-2">
                    {leave.name} <span className="text-[10px] bg-bg-input px-1.5 py-0.5 rounded text-text-secondary">{leave.empId}</span>
                  </h3>
                  <p className="text-xs text-text-secondary font-semibold">{leave.dept} Department</p>
                  <p className="text-xs text-text-primary mt-1 font-medium italic">"{leave.reason}"</p>
                </div>
              </div>

              <div className="w-full md:w-1/3 flex flex-col gap-1 text-sm bg-bg-input p-2 rounded-md">
                <div className="flex justify-between">
                  <span className="text-text-secondary text-[10px] font-bold uppercase">Leave Type</span>
                  <span className="font-bold text-text-primary text-xs">{leave.type}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary text-[10px] font-bold uppercase">Requested Dates</span>
                  <span className="font-bold text-primary text-xs">{new Date(leave.from).toLocaleDateString('en-GB')} - {new Date(leave.to).toLocaleDateString('en-GB')}</span>
                </div>
                <div className="flex justify-between border-t border-border mt-1 pt-1">
                  <span className="text-text-secondary text-[10px] font-bold uppercase">Total Duration</span>
                  <span className="font-black text-text-primary text-xs">{leave.days} Day(s)</span>
                </div>
              </div>

              <div className="w-full md:w-48 flex flex-col gap-2 border-t md:border-t-0 md:border-l border-border pt-4 md:pt-0 md:pl-4">
                {leave.status === 'Pending' ? (
                  <>
                    <button onClick={() => handleAction(leave.id, 'Approved')} className="w-full flex items-center justify-center gap-2 bg-success text-white px-3 py-1.5 rounded-md font-bold text-xs shadow-sm hover:bg-success/90 transition">
                      <ShieldCheck size={14}/> Approve
                    </button>
                    <button onClick={() => handleAction(leave.id, 'Rejected')} className="w-full flex items-center justify-center gap-2 bg-danger-bg text-danger border border-danger/30 px-3 py-1.5 rounded-md font-bold text-xs hover:bg-danger hover:text-white transition">
                      <ShieldAlert size={14}/> Reject
                    </button>
                  </>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full gap-1">
                    <span className="text-[10px] text-text-secondary font-bold uppercase">Current Status</span>
                    <span className={clsx("text-sm font-black uppercase", leave.status === 'Approved' ? 'text-success' : 'text-danger')}>
                      {leave.status}
                    </span>
                  </div>
                )}
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
