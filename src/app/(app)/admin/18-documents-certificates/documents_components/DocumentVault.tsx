"use client";

import React, { useState } from 'react';
import { FolderOpen, Users, FileCheck, CheckCircle, Search, ShieldCheck } from 'lucide-react';
import clsx from 'clsx';

export default function DocumentVault() {
  const [activeTab, setActiveTab] = useState('student');
  const [showToast, setShowToast] = useState(false);

  const handleVerify = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 h-full min-h-[500px] fade-in relative">
      {showToast && (
        <div className="absolute top-4 right-4 bg-success text-white px-4 py-2 rounded-lg shadow-lg font-bold text-sm flex items-center gap-2 fade-in z-10">
          <CheckCircle size={16} /> Document Verified Successfully!
        </div>
      )}

      <div className="w-full md:w-64 bg-card border border-border rounded-xl shadow-sm flex flex-col p-2 h-fit shrink-0">
        <button onClick={() => setActiveTab('student')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition mb-1", activeTab === 'student' ? 'bg-primary/10 text-primary' : 'text-text-secondary hover:bg-bg-page')}>
          <FolderOpen size={18} /> Student Documents
        </button>
        <button onClick={() => setActiveTab('staff')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition mb-1", activeTab === 'staff' ? 'bg-info/10 text-info' : 'text-text-secondary hover:bg-bg-page')}>
          <Users size={18} /> Staff Documents
        </button>
        <button onClick={() => setActiveTab('verify')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition", activeTab === 'verify' ? 'bg-success/10 text-success' : 'text-text-secondary hover:bg-bg-page')}>
          <FileCheck size={18} /> Document Verification
        </button>
      </div>

      <div className="flex-1 bg-card border border-border rounded-xl shadow-sm p-6 overflow-y-auto">
        
        {(activeTab === 'student' || activeTab === 'staff') && (
          <div className="flex flex-col gap-6 fade-in">
             <h2 className="text-xl font-bold text-text-primary border-b border-border pb-2 capitalize flex items-center gap-2">
               {activeTab === 'student' ? <FolderOpen size={20}/> : <Users size={20}/>} {activeTab} Vault
             </h2>
             
             <div className="flex gap-4 items-center mb-2">
               <div className="flex items-center gap-2 bg-bg-page border border-border px-3 py-2 rounded-lg flex-1">
                 <Search size={16} className="text-text-secondary"/>
                 <input type="text" placeholder={`Search ${activeTab} ID or Name...`} className="bg-transparent border-none outline-none text-sm w-full font-semibold"/>
               </div>
               <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold shadow-sm">+ Upload File</button>
             </div>

             <div className="bg-bg-page border border-border rounded-lg p-5">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h3 className="font-bold text-sm">STU-2026-001 (Aarav Sharma)</h3>
                    <p className="text-xs text-text-secondary font-semibold">Class 10-A</p>
                  </div>
                  <span className="bg-success-bg text-success px-2 py-0.5 rounded text-[10px] font-bold uppercase">KYC Complete</span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                   <div className="bg-card border border-border p-3 rounded-lg flex items-center justify-between cursor-pointer hover:border-primary transition">
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-text-primary">Aadhar Card</span>
                        <span className="text-[10px] text-text-secondary">Uploaded: 12-Oct-2025</span>
                      </div>
                      <ShieldCheck size={16} className="text-success"/>
                   </div>
                   <div className="bg-card border border-border p-3 rounded-lg flex items-center justify-between cursor-pointer hover:border-primary transition">
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-text-primary">Birth Certificate</span>
                        <span className="text-[10px] text-text-secondary">Uploaded: 12-Oct-2025</span>
                      </div>
                      <ShieldCheck size={16} className="text-success"/>
                   </div>
                   <div className="bg-card border border-danger/30 p-3 rounded-lg flex items-center justify-between cursor-pointer">
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-danger">Previous Marksheet</span>
                        <span className="text-[10px] text-text-secondary">Pending Upload</span>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        )}

        {activeTab === 'verify' && (
          <div className="flex flex-col gap-6 fade-in max-w-xl mx-auto">
             <h2 className="text-xl font-bold text-success border-b border-success/30 pb-2 text-center flex items-center justify-center gap-2">
               <FileCheck size={20}/> Bulk Document Verification
             </h2>
             <div className="bg-bg-page border border-border p-6 rounded-lg flex flex-col gap-4">
                <p className="text-xs text-text-secondary font-semibold text-center mb-2">Review recently uploaded documents that require admin approval to complete the KYC process.</p>
                
                <div className="bg-card border border-border p-4 rounded-lg flex flex-col gap-3 shadow-sm">
                   <div className="flex justify-between items-start">
                     <div>
                       <h4 className="font-bold text-sm">Sneha Gupta (STU-002)</h4>
                       <p className="text-xs text-text-secondary font-semibold">Document: Domicile Certificate</p>
                     </div>
                     <button className="text-xs font-bold bg-primary/10 text-primary px-2 py-1 rounded">View File</button>
                   </div>
                   <div className="flex gap-2 mt-2 pt-2 border-t border-border">
                     <button onClick={handleVerify} className="flex-1 bg-success text-white py-1.5 rounded font-bold text-xs shadow-sm hover:bg-success/90">Approve</button>
                     <button onClick={handleVerify} className="flex-1 bg-danger text-white py-1.5 rounded font-bold text-xs shadow-sm hover:bg-danger/90">Reject / Re-upload</button>
                   </div>
                </div>
             </div>
          </div>
        )}

      </div>
    </div>
  );
}
