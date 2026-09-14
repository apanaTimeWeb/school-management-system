"use client";

import React, { useState } from 'react';
import { KeyRound, Smartphone, CheckCircle, Save } from 'lucide-react';

export default function AccountSecurity() {
  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState('');

  const handleSave = (msg: string) => {
    setToastMsg(msg);
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
          <KeyRound size={20} className="text-primary"/> Account Security Settings
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
           
           {/* Password Change */}
           <div className="bg-bg-page border border-border p-6 rounded-lg flex flex-col gap-4 shadow-sm h-fit">
              <h3 className="font-bold text-sm border-b border-border pb-2 text-text-primary">Change Password</h3>
              
              <div className="flex flex-col gap-1.5 mt-2">
                <label className="text-xs font-bold text-text-secondary uppercase">Current Password</label>
                <input type="password" placeholder="••••••••" className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-primary font-mono" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-text-secondary uppercase">New Password</label>
                <input type="password" placeholder="Min 8 characters" className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-primary font-mono" />
              </div>
              <div className="flex flex-col gap-1.5 mb-4">
                <label className="text-xs font-bold text-text-secondary uppercase">Confirm New Password</label>
                <input type="password" placeholder="Min 8 characters" className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-primary font-mono" />
              </div>

              <button onClick={()=>handleSave('Password Changed Successfully!')} className="w-full bg-primary text-black py-2.5 rounded-lg text-sm font-bold shadow-sm hover:bg-primary-hover transition flex items-center justify-center gap-2">
                <Save size={16}/> Update Password
              </button>
           </div>

           {/* 2FA Config */}
           <div className="bg-warning-bg/20 border border-warning/30 p-6 rounded-lg flex flex-col gap-4 shadow-sm h-fit text-center items-center">
              <Smartphone size={48} className="text-warning mb-2"/>
              <h3 className="font-bold text-lg text-warning">Two-Factor Authentication (2FA)</h3>
              <p className="text-sm font-semibold text-text-secondary mb-4">Add an extra layer of security to your account. When enabled, you will need to enter an OTP sent to your registered mobile number upon login.</p>
              
              <div className="bg-card border border-border px-6 py-3 rounded-full flex gap-4 items-center mb-4">
                 <span className="text-sm font-bold">Status:</span>
                 <span className="bg-danger-bg text-danger px-3 py-1 rounded text-xs font-black uppercase">Disabled</span>
              </div>

              <button onClick={()=>handleSave('2FA Setup Instructions Sent!')} className="w-full max-w-xs bg-warning text-white py-3 rounded-lg text-sm font-bold shadow-sm hover:bg-warning/90 transition">
                Enable 2FA via SMS
              </button>
           </div>

        </div>

      </div>
    </div>
  );
}
