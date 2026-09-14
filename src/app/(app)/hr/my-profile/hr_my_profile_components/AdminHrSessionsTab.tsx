"use client";

import { useState } from "react";
import { Monitor, Smartphone, Globe, AlertTriangle, XCircle } from "lucide-react";
import { MOCK_ACTIVE_SESSIONS, MOCK_LOGIN_HISTORY } from "../hr_my_profile_constants/AdminHrMyProfileConstants";

export default function AdminHrSessionsTab() {
  const [sessions, setSessions] = useState(MOCK_ACTIVE_SESSIONS);
  const [revokingId, setRevokingId] = useState<string | null>(null);

  const handleRevoke = (id: string) => {
    setRevokingId(id);
    setTimeout(() => {
      setSessions(prev => prev.filter(s => s.id !== id));
      setRevokingId(null);
    }, 1500);
  };

  return (
    <div className="motion-safe:animate-in motion-safe:fade-in duration-300 flex flex-col gap-6">
      
      {/* Active Sessions */}
      <div className="bg-card border border-border rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-bold text-foreground mb-1">Active Sessions</h3>
        <p className="text-sm text-muted-foreground mb-6">These devices are currently logged into your account. Revoke any sessions you do not recognize.</p>
        
        <div className="space-y-4">
           {sessions.map(session => (
             <div key={session.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 border border-border rounded-lg bg-input/20">
               <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-full ${session.isCurrentSession ? 'bg-primary/10 text-primary' : 'bg-card text-muted-foreground border border-border'}`}>
                    {session.deviceInfo.includes('iPhone') || session.deviceInfo.includes('Mobile') ? <Smartphone size={24}/> : <Monitor size={24}/>}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-foreground">{session.deviceInfo} <span className="text-xs text-muted-foreground font-medium ml-1">• {session.browser}</span></h4>
                    <p className="text-[10px] font-bold text-muted-foreground mt-1 flex items-center gap-2">
                       <Globe size={12}/> {session.ipAddress} • {session.location}
                    </p>
                    <p className="text-[10px] font-bold mt-1 text-primary">
                       {session.isCurrentSession ? 'This Device (Current Session)' : `Last active: ${session.lastActive}`}
                    </p>
                  </div>
               </div>
               
               {!session.isCurrentSession && (
                 <button 
                   onClick={() => handleRevoke(session.id)}
                   disabled={revokingId === session.id}
                   className="px-4 py-1.5 text-xs font-bold text-danger hover:bg-danger/10 border border-danger/20 rounded transition-colors flex items-center gap-1 disabled:opacity-50 disabled:pointer-events-none"
                 >
                   {revokingId === session.id ? <div className="w-3 h-3 border-2 border-danger border-t-transparent rounded-full animate-spin"></div> : <XCircle size={14}/>}
                   {revokingId === session.id ? 'Revoking...' : 'Revoke'}
                 </button>
               )}
             </div>
           ))}
        </div>
      </div>

      {/* Login History */}
      <div className="bg-card border border-border rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-bold text-foreground mb-1">Login History</h3>
        <p className="text-sm text-muted-foreground mb-6">A record of recent authentication attempts.</p>
        
        <div className="w-full overflow-x-auto border border-border rounded-lg">
          <table className="w-full text-left border-collapse min-w-[600px]">
             <thead>
               <tr className="bg-input/50 border-b border-border">
                 <th className="p-3 text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Date & Time</th>
                 <th className="p-3 text-[10px] font-bold text-muted-foreground uppercase tracking-wider">IP Address</th>
                 <th className="p-3 text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Browser</th>
                 <th className="p-3 text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Status</th>
               </tr>
             </thead>
             <tbody>
               {MOCK_LOGIN_HISTORY.map(log => (
                 <tr key={log.id} className="border-b border-border last:border-none">
                   <td className="p-3 text-sm font-semibold text-foreground">{log.timestamp}</td>
                   <td className="p-3 text-sm font-mono text-muted-foreground">{log.ipAddress}</td>
                   <td className="p-3 text-sm font-medium text-muted-foreground">{log.browser}</td>
                   <td className="p-3">
                     <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border ${log.status === 'Success' ? 'bg-success/10 text-success border-success/20' : 'bg-danger/10 text-danger border-danger/20'}`}>
                       {log.status}
                     </span>
                   </td>
                 </tr>
               ))}
             </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
