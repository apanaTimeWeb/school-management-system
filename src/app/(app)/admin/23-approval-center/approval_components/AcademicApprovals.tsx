"use client";

import React, { useState } from 'react';
import { UserPlus, FileText, ArrowRightLeft, CheckCircle, XCircle } from 'lucide-react';
import clsx from 'clsx';

export default function AcademicApprovals() {
  const [activeTab, setActiveTab] = useState('admission');
  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState('');

  const handleApprove = () => {
    setToastMsg('Request Approved Successfully!');
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleReject = () => {
    setToastMsg('Request Rejected!');
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const RequestCard = ({ id, name, type, date, details }: any) => (
    <div className="bg-bg-page border border-border p-4 rounded-lg flex flex-col md:flex-row justify-between items-start md:items-center gap-4 shadow-sm hover:border-primary transition">
      <div className="flex flex-col">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs font-black text-primary">{id}</span>
          <span className="bg-warning-bg text-warning px-2 py-0.5 rounded text-[10px] font-bold uppercase">Pending</span>
        </div>
        <h4 className="font-bold text-sm text-text-primary">{name} <span className="text-text-secondary font-medium">({type})</span></h4>
        <p className="text-xs text-text-secondary font-semibold mt-1">{details}</p>
        <p className="text-[10px] text-text-secondary mt-1">Requested on: {date}</p>
      </div>
      <div className="flex gap-2 w-full md:w-auto">
        <button onClick={handleApprove} className="flex-1 md:flex-none bg-success text-white px-4 py-2 rounded-lg text-sm font-bold shadow-sm hover:bg-success/90 transition flex items-center justify-center gap-2">
          <CheckCircle size={16}/> Approve
        </button>
        <button onClick={handleReject} className="flex-1 md:flex-none bg-danger text-white px-4 py-2 rounded-lg text-sm font-bold shadow-sm hover:bg-danger/90 transition flex items-center justify-center gap-2">
          <XCircle size={16}/> Reject
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col md:flex-row gap-6 h-full min-h-[500px] fade-in relative">
      {showToast && (
        <div className={clsx("absolute top-4 right-4 text-white px-4 py-2 rounded-lg shadow-lg font-bold text-sm flex items-center gap-2 fade-in z-10", toastMsg.includes('Rejected') ? 'bg-danger' : 'bg-success')}>
          {toastMsg.includes('Rejected') ? <XCircle size={16}/> : <CheckCircle size={16} />} {toastMsg}
        </div>
      )}

      <div className="w-full md:w-64 bg-card border border-border rounded-xl shadow-sm flex flex-col p-2 h-fit shrink-0">
        <button onClick={() => setActiveTab('admission')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition mb-1", activeTab === 'admission' ? 'bg-primary/10 text-primary' : 'text-text-secondary hover:bg-bg-page')}>
          <UserPlus size={18} /> New Admissions
        </button>
        <button onClick={() => setActiveTab('transfer')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition mb-1", activeTab === 'transfer' ? 'bg-info/10 text-info' : 'text-text-secondary hover:bg-bg-page')}>
          <ArrowRightLeft size={18} /> Student Transfers
        </button>
        <button onClick={() => setActiveTab('certificates')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition", activeTab === 'certificates' ? 'bg-warning/10 text-warning' : 'text-text-secondary hover:bg-bg-page')}>
          <FileText size={18} /> TC & Certificates
        </button>
      </div>

      <div className="flex-1 bg-card border border-border rounded-xl shadow-sm p-6 overflow-y-auto">
        
        {activeTab === 'admission' && (
          <div className="flex flex-col gap-6 fade-in">
             <h2 className="text-xl font-bold text-primary border-b border-border pb-2 flex items-center gap-2">
               <UserPlus size={20}/> Pending Admission Approvals
             </h2>
             <div className="flex flex-col gap-3">
               <RequestCard id="ADM-2026-045" name="Rahul Sharma" type="Class 5" date="12-Oct-2025" details="All documents verified. Fee payment pending." />
               <RequestCard id="ADM-2026-046" name="Priya Singh" type="Class 11 (Science)" date="12-Oct-2025" details="Merit list selected. Awaiting Principal's final nod." />
             </div>
          </div>
        )}

        {activeTab === 'transfer' && (
          <div className="flex flex-col gap-6 fade-in">
             <h2 className="text-xl font-bold text-info border-b border-info/30 pb-2 flex items-center gap-2">
               <ArrowRightLeft size={20}/> Pending Section Transfers
             </h2>
             <div className="flex flex-col gap-3">
               <RequestCard id="TRF-001" name="Amit Kumar" type="STU-089" date="10-Oct-2025" details="Request transfer from Class 10-A to 10-B. Reason: Sibling in 10-B." />
             </div>
          </div>
        )}

        {activeTab === 'certificates' && (
          <div className="flex flex-col gap-6 fade-in">
             <h2 className="text-xl font-bold text-warning border-b border-warning/30 pb-2 flex items-center gap-2">
               <FileText size={20}/> TC & Certificate Issuance
             </h2>
             <div className="flex flex-col gap-3">
               <RequestCard id="TC-REQ-05" name="Sneha Gupta" type="STU-022" date="09-Oct-2025" details="Transfer Certificate Request. Library Dues: Cleared. Fee Dues: Cleared." />
               <RequestCard id="CERT-REQ-12" name="Rohan Verma" type="STU-045" date="11-Oct-2025" details="Bonafide Certificate Request for Passport Application." />
             </div>
          </div>
        )}

      </div>
    </div>
  );
}
