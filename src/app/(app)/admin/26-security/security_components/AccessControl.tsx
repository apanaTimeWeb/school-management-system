"use client";

import React, { useState } from 'react';
import { Shield, EyeOff, Lock, CheckCircle, Save } from 'lucide-react';
import clsx from 'clsx';

export default function AccessControl() {
  const [showToast, setShowToast] = useState(false);

  const handleSave = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="flex flex-col gap-6 h-full fade-in relative">
      {showToast && (
        <div className="absolute top-4 right-4 bg-success text-white px-4 py-2 rounded-lg shadow-lg font-bold text-sm flex items-center gap-2 fade-in z-10">
          <CheckCircle size={16} /> Security Policies Saved!
        </div>
      )}

      <div className="flex-1 bg-card border border-border rounded-xl shadow-sm p-6 overflow-y-auto">
        <h2 className="text-xl font-bold text-text-primary border-b border-border pb-4 mb-6 flex items-center gap-2">
          <Shield size={20} className="text-primary"/> Access Control & Data Privacy
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <div className="flex flex-col gap-4">
             <div className="bg-bg-page border border-border p-5 rounded-lg flex flex-col gap-4 shadow-sm h-full">
                <h3 className="font-bold text-sm flex items-center gap-2 border-b border-border pb-2"><Lock size={16}/> Permission-Based Access</h3>
                <p className="text-xs text-text-secondary font-semibold mb-2">Define which roles can access sensitive modules like Finance and Approvals.</p>
                
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between bg-card border border-border p-3 rounded">
                     <span className="text-sm font-bold">Finance Module</span>
                     <select className="bg-bg-input border border-border rounded px-2 py-1 text-xs outline-none focus:border-primary font-bold">
                       <option>Admin & Super Admin Only</option>
                       <option>Accountant, Admin & Super Admin</option>
                     </select>
                  </div>
                  <div className="flex items-center justify-between bg-card border border-border p-3 rounded">
                     <span className="text-sm font-bold">Approval Center</span>
                     <select className="bg-bg-input border border-border rounded px-2 py-1 text-xs outline-none focus:border-primary font-bold">
                       <option>Principal & Super Admin Only</option>
                       <option>Admin, Principal & Super Admin</option>
                     </select>
                  </div>
                  <div className="flex items-center justify-between bg-card border border-border p-3 rounded">
                     <span className="text-sm font-bold">Exam Results (Edit Mode)</span>
                     <select className="bg-bg-input border border-border rounded px-2 py-1 text-xs outline-none focus:border-primary font-bold">
                       <option>Class Teachers Only</option>
                       <option>All Teachers</option>
                     </select>
                  </div>
                </div>
             </div>
          </div>

          <div className="flex flex-col gap-4">
             <div className="bg-bg-page border border-border p-5 rounded-lg flex flex-col gap-4 shadow-sm h-full">
                <h3 className="font-bold text-sm flex items-center gap-2 border-b border-border pb-2 text-danger"><EyeOff size={16}/> Sensitive Data Masking</h3>
                <p className="text-xs text-text-secondary font-semibold mb-2">Automatically mask sensitive PII (Personally Identifiable Information) for lower-tier roles.</p>
                
                <div className="flex items-center justify-between bg-card border border-border p-3 rounded">
                   <div className="flex flex-col">
                     <span className="text-sm font-bold">Mask Phone Numbers</span>
                     <span className="text-[10px] text-text-secondary font-bold">(e.g. +91 987XXXXX10)</span>
                   </div>
                   <input type="checkbox" className="accent-danger w-5 h-5 cursor-pointer" defaultChecked/>
                </div>
                
                <div className="flex items-center justify-between bg-card border border-border p-3 rounded">
                   <div className="flex flex-col">
                     <span className="text-sm font-bold">Mask Aadhar / SSN</span>
                     <span className="text-[10px] text-text-secondary font-bold">(e.g. XXXX-XXXX-1234)</span>
                   </div>
                   <input type="checkbox" className="accent-danger w-5 h-5 cursor-pointer" defaultChecked/>
                </div>
                
                <button onClick={handleSave} className="w-full bg-danger text-white py-3 rounded-lg text-sm font-bold shadow-sm hover:bg-danger/90 transition flex items-center justify-center gap-2 mt-auto">
                  <Save size={16}/> Save Security Policies
                </button>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
}
