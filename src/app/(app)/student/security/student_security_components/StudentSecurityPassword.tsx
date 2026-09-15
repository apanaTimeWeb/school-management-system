"use client";

import React, { useState } from 'react';
import { changePassword } from '../student_security_api/student_security_api';
import { Lock, Eye, EyeOff, Loader2, Save } from 'lucide-react';

export default function StudentSecurityPassword() {
  const [currentPwd, setCurrentPwd] = useState('');
  const [newPwd, setNewPwd] = useState('');
  const [confirmPwd, setConfirmPwd] = useState('');
  const [showPwd, setShowPwd] = useState(false);
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newPwd !== confirmPwd) {
      alert("New password and confirm password do not match.");
      return;
    }
    setIsSubmitting(true);
    const res = await changePassword();
    setIsSubmitting(false);
    
    if (res.success) {
      alert(res.message);
      setCurrentPwd('');
      setNewPwd('');
      setConfirmPwd('');
    }
  };

  return (
    <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
      <div className="border-b border-border bg-page/50 p-4 flex items-center gap-2">
        <Lock size={18} className="text-primary" />
        <h2 className="text-base font-bold text-text-primary">Change Password</h2>
      </div>
      
      <form onSubmit={handleSubmit} className="p-5 flex flex-col gap-4">
        
        <div className="relative">
          <label className="block text-xs font-bold text-text-secondary uppercase mb-1">Current Password</label>
          <input 
            type={showPwd ? "text" : "password"} required value={currentPwd} onChange={(e) => setCurrentPwd(e.target.value)}
            className="w-full bg-page border border-border text-text-primary text-sm rounded-lg px-3 py-2.5 pr-10 outline-none focus:border-primary"
          />
          <button type="button" onClick={() => setShowPwd(!showPwd)} className="absolute right-3 top-7 text-text-secondary hover:text-text-primary">
            {showPwd ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        </div>

        <div>
          <label className="block text-xs font-bold text-text-secondary uppercase mb-1">New Password</label>
          <input 
            type={showPwd ? "text" : "password"} required value={newPwd} onChange={(e) => setNewPwd(e.target.value)}
            className="w-full bg-page border border-border text-text-primary text-sm rounded-lg px-3 py-2.5 outline-none focus:border-primary"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-text-secondary uppercase mb-1">Confirm New Password</label>
          <input 
            type={showPwd ? "text" : "password"} required value={confirmPwd} onChange={(e) => setConfirmPwd(e.target.value)}
            className="w-full bg-page border border-border text-text-primary text-sm rounded-lg px-3 py-2.5 outline-none focus:border-primary"
          />
        </div>

        <button 
          type="submit" disabled={isSubmitting || !currentPwd || !newPwd || !confirmPwd}
          className="mt-2 flex items-center justify-center gap-2 w-full py-2.5 bg-primary text-white text-sm font-bold rounded-lg shadow-sm hover:bg-primary-hover transition-all disabled:opacity-50"
        >
          {isSubmitting ? <><Loader2 size={16} className="animate-spin" /> Saving...</> : <><Save size={16} /> Update Password</>}
        </button>

      </form>
    </div>
  );
}
