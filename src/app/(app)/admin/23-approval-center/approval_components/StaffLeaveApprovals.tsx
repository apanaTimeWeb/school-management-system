"use client";

import React, { useState } from 'react';
import { Calendar, UserCheck, CheckCircle, XCircle } from 'lucide-react';

export default function StaffLeaveApprovals() {
  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState('');

  const handleApprove = () => {
    setToastMsg('Leave Approved!');
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleReject = () => {
    setToastMsg('Leave Rejected!');
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const LeaveCard = ({ id, name, days, dates, type, reason }: any) => (
    <div className="bg-bg-page border border-border p-4 rounded-lg flex flex-col justify-between gap-4 shadow-sm hover:border-primary transition">
      <div className="flex justify-between items-start">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-black text-primary">{id}</span>
            <span className="bg-warning-bg text-warning px-2 py-0.5 rounded text-[10px] font-bold uppercase">{type}</span>
          </div>
          <h4 className="font-bold text-sm text-text-primary">{name}</h4>
          <p className="text-xs font-bold text-danger mt-1">{days} Days ({dates})</p>
          <p className="text-xs text-text-secondary font-semibold mt-2 italic">"{reason}"</p>
        </div>
      </div>
      <div className="flex gap-2 w-full mt-2 pt-2 border-t border-border">
        <button onClick={handleApprove} className="flex-1 bg-success text-white py-2 rounded-lg text-sm font-bold shadow-sm hover:bg-success/90 transition flex items-center justify-center gap-2">
          <CheckCircle size={16}/> Approve
        </button>
        <button onClick={handleReject} className="flex-1 bg-danger text-white py-2 rounded-lg text-sm font-bold shadow-sm hover:bg-danger/90 transition flex items-center justify-center gap-2">
          <XCircle size={16}/> Reject
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col gap-6 h-full fade-in relative">
      {showToast && (
        <div className="absolute top-4 right-4 bg-success text-white px-4 py-2 rounded-lg shadow-lg font-bold text-sm flex items-center gap-2 fade-in z-10">
          <CheckCircle size={16} /> {toastMsg}
        </div>
      )}

      <div className="flex-1 bg-card border border-border rounded-xl shadow-sm p-6 overflow-y-auto">
        <h2 className="text-xl font-bold text-text-primary border-b border-border pb-4 mb-6 flex items-center gap-2">
          <Calendar size={20} className="text-primary"/> Leave Applications
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <div className="flex flex-col gap-4">
             <h3 className="font-bold text-sm flex items-center gap-2 border-b border-border pb-2"><UserCheck size={16}/> Staff Leaves</h3>
             <div className="grid grid-cols-1 gap-4">
               <LeaveCard 
                 id="LV-S-101" 
                 name="Mr. Ramesh (Maths Dept)" 
                 days="2" 
                 dates="15 Oct - 16 Oct" 
                 type="Casual Leave" 
                 reason="Attending a family wedding out of town." 
               />
             </div>
          </div>

          <div className="flex flex-col gap-4">
             <h3 className="font-bold text-sm flex items-center gap-2 border-b border-border pb-2"><UserCheck size={16}/> Student Leaves</h3>
             <div className="grid grid-cols-1 gap-4">
               <LeaveCard 
                 id="LV-ST-055" 
                 name="Aarav Sharma (10-A)" 
                 days="3" 
                 dates="12 Oct - 14 Oct" 
                 type="Sick Leave" 
                 reason="Suffering from high fever. Medical certificate attached." 
               />
             </div>
          </div>

        </div>
      </div>
    </div>
  );
}
