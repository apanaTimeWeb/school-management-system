"use client";
import React, { useEffect, useState } from 'react';
import { PrincipalSecuritySettings } from '../profile_types/PrincipalProfile.types';
import { fetchPrincipalSecurity } from '../profile_api/PrincipalProfileApi';
import { usePrincipalProfileStore } from '../profile_store/usePrincipalProfileStore';
import { ShieldAlert, Key, Smartphone, Monitor, History, LogOut } from 'lucide-react';
import clsx from 'clsx';

export default function PrincipalProfileSecurityTab() {
  const [security, setSecurity] = useState<PrincipalSecuritySettings | null>(null);
  const [loading, setLoading] = useState(true);
  const { setIsPasswordModalOpen, setIs2FAModalOpen, setSessionToTerminate } = usePrincipalProfileStore();

  useEffect(() => {
    let isMounted = true;
    fetchPrincipalSecurity().then(res => {
      if (isMounted) {
        setSecurity(res);
        setLoading(false);
      }
    });
    return () => { isMounted = false; };
  }, []);

  if (loading || !security) {
    return (
      <div className="bg-card border border-border p-6 rounded-xl animate-pulse h-64" />
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      
      <div className="space-y-6">
        
        {/* Password Section */}
        <div className="bg-card border border-border rounded-xl p-5 shadow-sm">
          <div className="flex items-start justify-between">
            <div className="flex gap-3">
               <div className="w-10 h-10 rounded-full bg-info/10 flex items-center justify-center shrink-0 border border-info/30"><Key size={18} className="text-info"/></div>
               <div>
                 <h3 className="text-[16px] font-bold text-text-primary">Password</h3>
                 <p className="text-[12px] text-text-secondary">Last changed: <span className="font-bold text-text-primary">{security.lastPasswordChange}</span></p>
               </div>
            </div>
            <button 
              onClick={() => setIsPasswordModalOpen(true)}
              className="px-4 py-1.5 bg-page hover:bg-white/5 border border-border rounded text-[12px] font-bold text-text-primary transition-colors"
            >
              Change
            </button>
          </div>
        </div>

        {/* 2FA Section */}
        <div className="bg-card border border-border rounded-xl p-5 shadow-sm">
          <div className="flex items-start justify-between">
            <div className="flex gap-3">
               <div className={clsx("w-10 h-10 rounded-full flex items-center justify-center shrink-0 border", security.is2FAEnabled ? "bg-success/10 border-success/30" : "bg-danger/10 border-danger/30")}>
                 <ShieldAlert size={18} className={security.is2FAEnabled ? "text-success" : "text-danger"}/>
               </div>
               <div>
                 <h3 className="text-[16px] font-bold text-text-primary">Two-Factor Authentication (2FA)</h3>
                 <p className="text-[12px] text-text-secondary">Status: <span className={clsx("font-bold", security.is2FAEnabled ? "text-success" : "text-danger")}>{security.is2FAEnabled ? 'Enabled' : 'Disabled'}</span></p>
               </div>
            </div>
            <button 
              onClick={() => setIs2FAModalOpen(true)}
              className="px-4 py-1.5 bg-page hover:bg-white/5 border border-border rounded text-[12px] font-bold text-text-primary transition-colors"
            >
              Configure
            </button>
          </div>
        </div>

        {/* Active Sessions */}
        <div className="bg-card border border-border rounded-xl p-5 shadow-sm">
          <h3 className="text-[16px] font-bold text-text-primary mb-4 flex items-center gap-2"><Monitor size={18} className="text-warning"/> Active Sessions</h3>
          <div className="space-y-4">
            {security.activeSessions.map((session) => (
              <div key={session.id} className="flex items-center justify-between p-3 rounded-lg border border-border bg-page">
                 <div className="flex items-center gap-3">
                   {session.device.includes('iPhone') || session.device.includes('Android') ? <Smartphone size={20} className="text-text-secondary"/> : <Monitor size={20} className="text-text-secondary"/>}
                   <div>
                     <p className="text-[13px] font-bold text-text-primary flex items-center gap-2">
                       {session.device} 
                       {session.isCurrentDevice && <span className="text-[9px] bg-success/20 text-success px-1.5 py-0.5 rounded uppercase tracking-wider">Current</span>}
                     </p>
                     <p className="text-[11px] text-text-secondary">{session.browser} • {session.location} • {session.ipAddress}</p>
                   </div>
                 </div>
                 {!session.isCurrentDevice && (
                   <button 
                     onClick={() => setSessionToTerminate(session)}
                     className="p-2 text-text-secondary hover:text-danger hover:bg-danger/10 rounded-full transition-colors"
                     title="Terminate Session"
                   >
                     <LogOut size={16}/>
                   </button>
                 )}
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Login History */}
      <div className="bg-card border border-border rounded-xl p-5 shadow-sm h-full">
         <h3 className="text-[16px] font-bold text-text-primary mb-4 flex items-center gap-2"><History size={18} className="text-info"/> Recent Login History</h3>
         <div className="space-y-0">
           {security.loginHistory.map((log, idx) => (
             <div key={log.id} className={clsx("py-3 flex justify-between items-center", idx !== security.loginHistory.length - 1 && "border-b border-border/50")}>
               <div>
                 <p className="text-[13px] font-bold text-text-primary">{log.date} at {log.time}</p>
                 <p className="text-[11px] text-text-secondary">{log.device} • {log.ipAddress}</p>
               </div>
               <span className={clsx("text-[11px] font-bold px-2 py-0.5 rounded border", 
                 log.status === 'Success' ? 'bg-success/10 text-success border-success/30' : 'bg-danger/10 text-danger border-danger/30'
               )}>
                 {log.status}
               </span>
             </div>
           ))}
         </div>
      </div>
      
    </div>
  );
}
