"use client";

import React, { useState } from 'react';
import { Edit3, CheckCircle, XCircle } from 'lucide-react';

export default function CorrectionApprovals() {
  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState('');

  const handleApprove = () => {
    setToastMsg('Correction Applied to Database!');
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleReject = () => {
    setToastMsg('Correction Rejected!');
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="flex flex-col gap-6 h-full fade-in relative">
      {showToast && (
        <div className="absolute top-4 right-4 bg-success text-white px-4 py-2 rounded-lg shadow-lg font-bold text-sm flex items-center gap-2 fade-in z-10">
          <CheckCircle size={16} /> {toastMsg}
        </div>
      )}

      <div className="flex-1 bg-card border border-border rounded-xl shadow-sm p-6 overflow-y-auto">
        <h2 className="text-xl font-bold text-text-primary border-b border-border pb-4 mb-6 flex items-center gap-2">
          <Edit3 size={20} className="text-primary"/> Data Correction Requests
        </h2>
        
        <p className="text-sm font-semibold text-text-secondary mb-6">Review requests from teachers to alter locked records like Attendance or Exam Marks.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           
           <div className="bg-bg-page border border-border p-5 rounded-lg flex flex-col gap-3 shadow-sm hover:border-warning transition">
             <div className="flex justify-between items-center mb-2">
               <h4 className="font-bold text-sm">Attendance Correction</h4>
               <span className="bg-warning-bg text-warning px-2 py-0.5 rounded text-[10px] font-bold uppercase">Pending</span>
             </div>
             <p className="text-xs font-semibold">Teacher: Mrs. Anita (Class 5-B)</p>
             <p className="text-xs text-text-secondary font-medium">Request to change attendance of <strong>Rohan (STU-089)</strong> on 10-Oct from Absent (A) to Present (P). Child was in sick room during roll call.</p>
             
             <div className="flex gap-2 mt-3 pt-3 border-t border-border">
                <button onClick={handleApprove} className="flex-1 bg-success text-white py-1.5 rounded-lg text-xs font-bold shadow-sm hover:bg-success/90 transition flex items-center justify-center gap-2">
                  <CheckCircle size={14}/> Approve Change
                </button>
                <button onClick={handleReject} className="flex-1 bg-danger text-white py-1.5 rounded-lg text-xs font-bold shadow-sm hover:bg-danger/90 transition flex items-center justify-center gap-2">
                  <XCircle size={14}/> Reject
                </button>
             </div>
           </div>

           <div className="bg-bg-page border border-border p-5 rounded-lg flex flex-col gap-3 shadow-sm hover:border-warning transition">
             <div className="flex justify-between items-center mb-2">
               <h4 className="font-bold text-sm">Marks Correction</h4>
               <span className="bg-warning-bg text-warning px-2 py-0.5 rounded text-[10px] font-bold uppercase">Pending</span>
             </div>
             <p className="text-xs font-semibold">Teacher: Mr. Ramesh (Science Dept)</p>
             <p className="text-xs text-text-secondary font-medium">Request to change Term 1 Science marks of <strong>Sneha (STU-102)</strong> from 45 to 55. Calculation error on page 3 of answer sheet.</p>
             
             <div className="flex gap-2 mt-3 pt-3 border-t border-border">
                <button onClick={handleApprove} className="flex-1 bg-success text-white py-1.5 rounded-lg text-xs font-bold shadow-sm hover:bg-success/90 transition flex items-center justify-center gap-2">
                  <CheckCircle size={14}/> Approve Change
                </button>
                <button onClick={handleReject} className="flex-1 bg-danger text-white py-1.5 rounded-lg text-xs font-bold shadow-sm hover:bg-danger/90 transition flex items-center justify-center gap-2">
                  <XCircle size={14}/> Reject
                </button>
             </div>
           </div>

        </div>

      </div>
    </div>
  );
}
