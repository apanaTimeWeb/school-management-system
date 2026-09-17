"use client";

import React, { useState } from 'react';
import { KeyRound, ShieldAlert, MonitorSmartphone, Clock, Globe, XCircle, CheckCircle2, History, AlertTriangle } from 'lucide-react';
import type { ActiveSession, LoginHistory } from '../my_profile_types/my_profile.types';

// RESPONSIBILITY: Renders the security settings, sessions, and login history (right column)

interface SecuritySettingsProps {
  sessions: ActiveSession[];
  history: LoginHistory[];
}

export default function SecuritySettings({ sessions, history }: SecuritySettingsProps) {
  
  const [activeTab, setActiveTab] = useState<'SECURITY' | 'SESSIONS' | 'HISTORY'>('SECURITY');

  // Security Form State
  const [passwordForm, setPasswordForm] = useState({ current: '', new: '', confirm: '' });

  const renderSecurityTab = () => (
    <div className="space-y-6 animate-in fade-in">
       
       <div className="bg-[var(--bg-input)] border border-[var(--border)] rounded-lg p-5">
          <div className="flex items-start gap-4">
             <div className="bg-amber-500/10 p-3 rounded-full shrink-0">
                <ShieldAlert size={24} className="text-amber-500" />
             </div>
             <div>
                <h3 className="text-sm font-bold text-[var(--text-primary)]">Password & Authentication</h3>
                <p className="text-xs text-[var(--text-secondary)] mt-1 mb-4 leading-relaxed max-w-md">
                  It's a good idea to use a strong password that you're not using elsewhere. Ensure it is at least 8 characters long.
                </p>
                
                <form className="space-y-4 max-w-sm" onSubmit={(e) => e.preventDefault()}>
                   <div className="flex flex-col gap-1.5">
                     <label className="text-xs font-semibold text-[var(--text-secondary)]">Current Password</label>
                     <input 
                       type="password" 
                       value={passwordForm.current}
                       onChange={e => setPasswordForm({...passwordForm, current: e.target.value})}
                       className="bg-[var(--bg-card)] border border-[var(--border)] rounded px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] transition-colors"
                     />
                   </div>
                   <div className="flex flex-col gap-1.5">
                     <label className="text-xs font-semibold text-[var(--text-secondary)]">New Password</label>
                     <input 
                       type="password" 
                       value={passwordForm.new}
                       onChange={e => setPasswordForm({...passwordForm, new: e.target.value})}
                       className="bg-[var(--bg-card)] border border-[var(--border)] rounded px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] transition-colors"
                     />
                   </div>
                   <div className="flex flex-col gap-1.5">
                     <label className="text-xs font-semibold text-[var(--text-secondary)]">Confirm New Password</label>
                     <input 
                       type="password" 
                       value={passwordForm.confirm}
                       onChange={e => setPasswordForm({...passwordForm, confirm: e.target.value})}
                       className="bg-[var(--bg-card)] border border-[var(--border)] rounded px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] transition-colors"
                     />
                   </div>
                   <button type="submit" className="mt-2 px-4 py-2 text-sm font-bold bg-[var(--primary)] text-white rounded hover:bg-[var(--primary-hover)] transition-colors shadow-sm">
                     Update Password
                   </button>
                </form>
             </div>
          </div>
       </div>

    </div>
  );

  const renderSessionsTab = () => (
    <div className="space-y-4 animate-in fade-in">
       
       <div className="flex items-center justify-between mb-2">
         <p className="text-xs text-[var(--text-secondary)]">
           These are devices that have logged into your account. Revoke any sessions that you do not recognize.
         </p>
         <button className="text-xs font-bold text-red-500 hover:underline">Revoke All Except Current</button>
       </div>

       <div className="space-y-3">
         {sessions.map(session => (
           <div key={session.id} className={`flex items-center justify-between p-4 rounded-lg border ${session.isCurrentSession ? 'bg-[var(--primary-subtle)] border-[var(--primary)]/30' : 'bg-[var(--bg-input)] border-[var(--border)]'}`}>
              <div className="flex items-center gap-4">
                 <div className="w-10 h-10 rounded-full bg-[var(--bg-card)] border border-[var(--border)] flex items-center justify-center shrink-0">
                    <MonitorSmartphone size={20} className={session.isCurrentSession ? 'text-[var(--primary)]' : 'text-[var(--text-secondary)]'} />
                 </div>
                 <div>
                    <h4 className="text-sm font-bold text-[var(--text-primary)] flex items-center gap-2">
                      {session.browser} on {session.os}
                      {session.isCurrentSession && <span className="text-[9px] uppercase bg-[var(--primary)] text-white px-1.5 py-0.5 rounded">Active Now</span>}
                    </h4>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 text-xs text-[var(--text-secondary)]">
                       <span className="flex items-center gap-1"><Globe size={12}/> {session.ipAddress}</span>
                       <span className="flex items-center gap-1"><Clock size={12}/> {new Date(session.lastActive).toLocaleString()}</span>
                    </div>
                 </div>
              </div>
              {!session.isCurrentSession && (
                <button className="p-2 text-[var(--text-secondary)] hover:text-red-500 hover:bg-red-500/10 rounded-md transition-colors" title="Revoke Session">
                   <XCircle size={20} />
                </button>
              )}
           </div>
         ))}
       </div>

    </div>
  );

  const renderHistoryTab = () => (
    <div className="space-y-4 animate-in fade-in">
       <p className="text-xs text-[var(--text-secondary)] mb-2">
         A comprehensive log of all recent authentication attempts on your account.
       </p>
       
       <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-lg overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[rgba(250,204,21,0.05)] border-b border-[var(--border)]">
                <th className="py-3 px-4 text-[10px] font-bold text-[var(--text-secondary)] uppercase tracking-wider">Date & Time</th>
                <th className="py-3 px-4 text-[10px] font-bold text-[var(--text-secondary)] uppercase tracking-wider">Device Info</th>
                <th className="py-3 px-4 text-[10px] font-bold text-[var(--text-secondary)] uppercase tracking-wider">IP / Location</th>
                <th className="py-3 px-4 text-[10px] font-bold text-[var(--text-secondary)] uppercase tracking-wider text-right">Status</th>
              </tr>
            </thead>
            <tbody className="text-xs">
              {history.map(log => (
                <tr key={log.id} className="border-b border-[var(--border)] last:border-b-0 hover:bg-[var(--bg-input)] transition-colors">
                   <td className="py-3 px-4 text-[var(--text-primary)] font-medium">
                     {new Date(log.timestamp).toLocaleString('en-IN', {
                        day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit'
                     })}
                   </td>
                   <td className="py-3 px-4 text-[var(--text-secondary)]">{log.device}</td>
                   <td className="py-3 px-4 text-[var(--text-secondary)]">
                     {log.ipAddress} <span className="opacity-50">({log.location})</span>
                   </td>
                   <td className="py-3 px-4 text-right">
                     {log.status === 'SUCCESS' ? (
                       <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                         <CheckCircle2 size={12}/> Success
                       </span>
                     ) : (
                       <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase text-red-500 bg-red-500/10 px-2 py-0.5 rounded border border-red-500/20">
                         <AlertTriangle size={12}/> Failed
                       </span>
                     )}
                   </td>
                </tr>
              ))}
            </tbody>
          </table>
       </div>
    </div>
  );

  return (
    <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl overflow-hidden flex flex-col h-full shadow-sm">
       
       {/* Tab Navigation */}
       <div className="flex flex-wrap border-b border-[var(--border)] bg-[var(--bg-page)] p-2 gap-2">
          
          <button 
            onClick={() => setActiveTab('SECURITY')}
            className={`flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-colors ${activeTab === 'SECURITY' ? 'bg-[var(--primary)] text-white shadow-sm' : 'text-[var(--text-secondary)] hover:bg-[var(--bg-input)] hover:text-[var(--text-primary)]'}`}
          >
            <KeyRound size={16} /> Password
          </button>
          
          <button 
            onClick={() => setActiveTab('SESSIONS')}
            className={`flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-colors ${activeTab === 'SESSIONS' ? 'bg-[var(--primary)] text-white shadow-sm' : 'text-[var(--text-secondary)] hover:bg-[var(--bg-input)] hover:text-[var(--text-primary)]'}`}
          >
            <MonitorSmartphone size={16} /> Active Sessions
          </button>

          <button 
            onClick={() => setActiveTab('HISTORY')}
            className={`flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-colors ${activeTab === 'HISTORY' ? 'bg-[var(--primary)] text-white shadow-sm' : 'text-[var(--text-secondary)] hover:bg-[var(--bg-input)] hover:text-[var(--text-primary)]'}`}
          >
            <History size={16} /> Login History
          </button>

       </div>

       {/* Content Area */}
       <div className="flex-1 overflow-y-auto p-6">
          {activeTab === 'SECURITY' && renderSecurityTab()}
          {activeTab === 'SESSIONS' && renderSessionsTab()}
          {activeTab === 'HISTORY' && renderHistoryTab()}
       </div>

    </div>
  );
}
