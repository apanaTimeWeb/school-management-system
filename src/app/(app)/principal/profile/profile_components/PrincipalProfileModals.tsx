"use client";
import React, { useState } from 'react';
import { X, Key, ShieldAlert, AlertTriangle, CheckCircle } from 'lucide-react';
import { usePrincipalProfileStore } from '../profile_store/usePrincipalProfileStore';
import { updatePassword, toggle2FA, terminateSession } from '../profile_api/PrincipalProfileApi';

export default function PrincipalProfileModals() {
  const { 
    isPasswordModalOpen, setIsPasswordModalOpen,
    is2FAModalOpen, setIs2FAModalOpen,
    sessionToTerminate, setSessionToTerminate
  } = usePrincipalProfileStore();

  const [loading, setLoading] = useState(false);

  // Password State
  const [oldPass, setOldPass] = useState('');
  const [newPass, setNewPass] = useState('');

  const handlePasswordUpdate = async () => {
    setLoading(true);
    await updatePassword(oldPass, newPass);
    setLoading(false);
    setIsPasswordModalOpen(false);
  };

  const handle2FAToggle = async () => {
    setLoading(true);
    await toggle2FA(true); // Toggle logic
    setLoading(false);
    setIs2FAModalOpen(false);
  };

  const handleTerminate = async () => {
    if(!sessionToTerminate) return;
    setLoading(true);
    await terminateSession(sessionToTerminate.id);
    setLoading(false);
    setSessionToTerminate(null);
  };

  return (
    <>
      {/* Password Modal */}
      {isPasswordModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="w-full max-w-sm bg-bg-main border border-border rounded-xl shadow-2xl p-6 animate-in zoom-in-95 duration-200">
             <div className="flex justify-between items-center mb-5">
               <h2 className="text-[16px] font-bold text-text-primary flex items-center gap-2"><Key className="text-info" size={18}/> Change Password</h2>
               <button onClick={() => setIsPasswordModalOpen(false)} className="text-text-secondary hover:text-white"><X size={18}/></button>
             </div>
             <div className="space-y-4">
               <div>
                 <label className="block text-[12px] font-bold text-text-secondary mb-1">Current Password</label>
                 <input type="password" value={oldPass} onChange={e => setOldPass(e.target.value)} className="w-full bg-input border border-border rounded px-3 py-2 text-[13px] outline-none focus:border-primary" />
               </div>
               <div>
                 <label className="block text-[12px] font-bold text-text-secondary mb-1">New Password</label>
                 <input type="password" value={newPass} onChange={e => setNewPass(e.target.value)} className="w-full bg-input border border-border rounded px-3 py-2 text-[13px] outline-none focus:border-primary" />
               </div>
               <button 
                 onClick={handlePasswordUpdate}
                 disabled={loading || !oldPass || !newPass}
                 className="w-full py-2 bg-primary hover:bg-primary-hover text-white font-bold text-[13px] rounded mt-2 transition-colors disabled:opacity-50"
               >
                 {loading ? 'Updating...' : 'Update Password'}
               </button>
             </div>
          </div>
        </div>
      )}

      {/* 2FA Modal */}
      {is2FAModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="w-full max-w-sm bg-bg-main border border-border rounded-xl shadow-2xl p-6 animate-in zoom-in-95 duration-200 text-center">
             <div className="w-16 h-16 rounded-full bg-warning/10 text-warning flex items-center justify-center mx-auto mb-4 border border-warning/30"><ShieldAlert size={32}/></div>
             <h2 className="text-[18px] font-bold text-text-primary mb-2">Configure 2FA</h2>
             <p className="text-[13px] text-text-secondary mb-6">Two-factor authentication adds an extra layer of security to your account. Are you sure you want to toggle this setting?</p>
             <div className="flex gap-3">
               <button onClick={() => setIs2FAModalOpen(false)} className="flex-1 py-2 bg-page hover:bg-white/5 border border-border rounded text-[13px] font-bold text-text-primary">Cancel</button>
               <button onClick={handle2FAToggle} disabled={loading} className="flex-1 py-2 bg-warning hover:bg-warning/80 text-white rounded text-[13px] font-bold disabled:opacity-50">Confirm Action</button>
             </div>
          </div>
        </div>
      )}

      {/* Terminate Session Modal */}
      {sessionToTerminate && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="w-full max-w-sm bg-bg-main border border-border rounded-xl shadow-2xl p-6 animate-in zoom-in-95 duration-200 text-center">
             <div className="w-16 h-16 rounded-full bg-danger/10 text-danger flex items-center justify-center mx-auto mb-4 border border-danger/30"><AlertTriangle size={32}/></div>
             <h2 className="text-[18px] font-bold text-text-primary mb-2">Terminate Session</h2>
             <p className="text-[13px] text-text-secondary mb-6">You are about to log out the session on <strong>{sessionToTerminate.device}</strong> ({sessionToTerminate.location}). They will need to log in again.</p>
             <div className="flex gap-3">
               <button onClick={() => setSessionToTerminate(null)} className="flex-1 py-2 bg-page hover:bg-white/5 border border-border rounded text-[13px] font-bold text-text-primary">Cancel</button>
               <button onClick={handleTerminate} disabled={loading} className="flex-1 py-2 bg-danger hover:bg-danger/80 text-white rounded text-[13px] font-bold disabled:opacity-50">Terminate</button>
             </div>
          </div>
        </div>
      )}
    </>
  );
}
