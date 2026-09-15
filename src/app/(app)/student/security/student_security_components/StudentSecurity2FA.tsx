"use client";

import React, { useState } from 'react';
import { toggle2FA } from '../student_security_api/student_security_api';
import { ShieldAlert, ShieldCheck, Loader2 } from 'lucide-react';
import clsx from 'clsx';

interface Props {
  initialState: boolean;
  onToggle: (state: boolean) => void;
}

export default function StudentSecurity2FA({ initialState, onToggle }: Props) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleToggle = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const newState = e.target.checked;
    setIsSubmitting(true);
    const res = await toggle2FA(newState);
    setIsSubmitting(false);
    
    if (res.success) {
      onToggle(newState);
      alert(res.message);
    } else {
      // Revert if failed
      e.target.checked = !newState;
    }
  };

  return (
    <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden flex items-center justify-between p-5">
      
      <div className="flex items-start gap-4">
        <div className={clsx(
          "w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border",
          initialState ? "bg-success/10 text-success border-success/20" : "bg-page text-text-secondary border-border"
        )}>
          {initialState ? <ShieldCheck size={24} /> : <ShieldAlert size={24} />}
        </div>
        <div>
          <h3 className="text-base font-bold text-text-primary">Two-Factor Authentication</h3>
          <p className="text-xs text-text-secondary mt-1 max-w-[200px]">Add an extra layer of security to your account.</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        {isSubmitting && <Loader2 size={16} className="text-primary animate-spin" />}
        <label className="relative flex items-center cursor-pointer">
          <input 
            type="checkbox" className="sr-only" 
            checked={initialState} onChange={handleToggle} disabled={isSubmitting}
          />
          <div className={clsx("w-12 h-7 rounded-full transition-colors", initialState ? "bg-success" : "bg-border")}></div>
          <div className={clsx("absolute top-1 left-1 bg-white w-5 h-5 rounded-full transition-transform shadow-sm", initialState ? "translate-x-5" : "")}></div>
        </label>
      </div>

    </div>
  );
}
