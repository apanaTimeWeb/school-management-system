"use client";

import React, { useState } from 'react';
import { 
  Settings, Save, Bell, Shield, 
  KeyRound, Clock, Smartphone, Mail, AlertTriangle, UserCheck
} from 'lucide-react';

export default function SettingsMain() {
  const [activeTab, setActiveTab] = useState<'RULES' | 'NOTIFICATIONS' | 'SECURITY'>('RULES');

  return (
    <div className="flex flex-col w-full h-full space-y-6 max-w-5xl mx-auto">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-[var(--bg-card)] p-4 rounded-xl border border-[var(--border)] shrink-0 shadow-sm">
        <div>
          <h1 className="text-[22px] font-bold text-[var(--text-primary)] flex items-center gap-2">
            <Settings className="text-slate-500" size={24} /> Warden Settings
          </h1>
          <p className="text-[14px] text-[var(--text-secondary)] mt-1">
            Configure gate pass rules, notification preferences, and account security.
          </p>
        </div>
        
        {/* Navigation Tabs */}
        <div className="flex bg-[var(--bg-input)] p-1 rounded-lg border border-[var(--border)] w-full sm:w-auto">
           <button 
              onClick={() => setActiveTab('RULES')}
              className={`flex-1 sm:flex-none px-4 py-2 text-xs font-bold rounded-md transition-colors flex items-center justify-center gap-2 ${activeTab === 'RULES' ? 'bg-[var(--bg-card)] text-slate-800 dark:text-slate-200 shadow-sm' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}`}
           >
              <Clock size={14} /> Rules
           </button>
           <button 
              onClick={() => setActiveTab('NOTIFICATIONS')}
              className={`flex-1 sm:flex-none px-4 py-2 text-xs font-bold rounded-md transition-colors flex items-center justify-center gap-2 ${activeTab === 'NOTIFICATIONS' ? 'bg-[var(--bg-card)] text-slate-800 dark:text-slate-200 shadow-sm' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}`}
           >
              <Bell size={14} /> Alerts
           </button>
           <button 
              onClick={() => setActiveTab('SECURITY')}
              className={`flex-1 sm:flex-none px-4 py-2 text-xs font-bold rounded-md transition-colors flex items-center justify-center gap-2 ${activeTab === 'SECURITY' ? 'bg-[var(--bg-card)] text-slate-800 dark:text-slate-200 shadow-sm' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}`}
           >
              <Shield size={14} /> Security
           </button>
        </div>
      </div>

      <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl shadow-sm p-6">
         
         {activeTab === 'RULES' && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2">
               <div>
                  <h2 className="text-lg font-bold text-[var(--text-primary)] mb-1 flex items-center gap-2">
                     <Clock className="text-blue-500" size={20} /> Gate Pass & Curfew Rules
                  </h2>
                  <p className="text-sm text-[var(--text-secondary)] mb-6">Set standard timings for entry and exit.</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="bg-[var(--bg-input)] p-4 rounded-xl border border-[var(--border)]">
                        <label className="block text-xs font-bold text-[var(--text-secondary)] uppercase tracking-wider mb-2">Hostel Curfew Time</label>
                        <input type="time" defaultValue="22:00" className="w-full bg-[var(--bg-card)] border border-[var(--border)] rounded-lg px-4 py-2 text-sm focus:border-blue-500 outline-none" />
                        <p className="text-[10px] text-[var(--text-secondary)] mt-2 italic">Students returning after this time will be marked as Late Entry.</p>
                     </div>
                     <div className="bg-[var(--bg-input)] p-4 rounded-xl border border-[var(--border)]">
                        <label className="block text-xs font-bold text-[var(--text-secondary)] uppercase tracking-wider mb-2">Morning Gate Opening</label>
                        <input type="time" defaultValue="06:00" className="w-full bg-[var(--bg-card)] border border-[var(--border)] rounded-lg px-4 py-2 text-sm focus:border-blue-500 outline-none" />
                        <p className="text-[10px] text-[var(--text-secondary)] mt-2 italic">Earliest time students are allowed to exit without a special pass.</p>
                     </div>
                     <div className="bg-[var(--bg-input)] p-4 rounded-xl border border-[var(--border)]">
                        <label className="block text-xs font-bold text-[var(--text-secondary)] uppercase tracking-wider mb-2">Max Local Outing Duration (Hours)</label>
                        <input type="number" defaultValue="4" className="w-full bg-[var(--bg-card)] border border-[var(--border)] rounded-lg px-4 py-2 text-sm focus:border-blue-500 outline-none" />
                     </div>
                     <div className="bg-[var(--bg-input)] p-4 rounded-xl border border-[var(--border)]">
                        <label className="block text-xs font-bold text-[var(--text-secondary)] uppercase tracking-wider mb-2">Overnight Pass Guardian Approval</label>
                        <div className="flex items-center gap-3 mt-3">
                           <label className="flex items-center gap-2 cursor-pointer text-sm font-semibold text-[var(--text-primary)]">
                              <input type="radio" name="approval" className="w-4 h-4 text-blue-600" defaultChecked /> Mandatory
                           </label>
                           <label className="flex items-center gap-2 cursor-pointer text-sm font-semibold text-[var(--text-primary)]">
                              <input type="radio" name="approval" className="w-4 h-4 text-blue-600" /> Optional
                           </label>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="flex justify-end pt-6 border-t border-[var(--border)]">
                  <button className="flex items-center justify-center gap-2 px-6 py-2.5 bg-blue-600 text-white text-sm font-bold rounded-lg shadow-sm hover:bg-blue-700 transition-colors">
                     <Save size={16} /> Save Rules
                  </button>
               </div>
            </div>
         )}

         {activeTab === 'NOTIFICATIONS' && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2">
               <div>
                  <h2 className="text-lg font-bold text-[var(--text-primary)] mb-1 flex items-center gap-2">
                     <Bell className="text-amber-500" size={20} /> Notification Preferences
                  </h2>
                  <p className="text-sm text-[var(--text-secondary)] mb-6">Choose how and when you receive alerts.</p>
                  
                  <div className="space-y-4">
                     {[
                        { title: 'New Gate Pass Request', desc: 'When a student applies for a new gate pass.', email: true, sms: false, push: true },
                        { title: 'Late Return Alert', desc: 'When a student fails to return before their pass expires.', email: true, sms: true, push: true },
                        { title: 'Emergency / Disciplinary Issue', desc: 'When a severe incident is logged.', email: true, sms: true, push: true },
                        { title: 'New Maintenance Complaint', desc: 'When a student logs a new maintenance issue.', email: false, sms: false, push: true },
                     ].map((item, idx) => (
                        <div key={idx} className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-4 border border-[var(--border)] rounded-xl hover:bg-[var(--bg-input)] transition-colors">
                           <div>
                              <h3 className="font-bold text-[15px] text-[var(--text-primary)]">{item.title}</h3>
                              <p className="text-xs text-[var(--text-secondary)] mt-0.5">{item.desc}</p>
                           </div>
                           <div className="flex gap-4 shrink-0 bg-[var(--bg-card)] p-2 rounded-lg border border-[var(--border)]">
                              <label className="flex flex-col items-center gap-1.5 cursor-pointer group">
                                 <Mail size={16} className={item.email ? 'text-amber-600' : 'text-gray-400 group-hover:text-amber-400'} />
                                 <input type="checkbox" defaultChecked={item.email} className="w-3.5 h-3.5 rounded text-amber-600" />
                              </label>
                              <label className="flex flex-col items-center gap-1.5 cursor-pointer group border-l border-r border-[var(--border)] px-4">
                                 <Smartphone size={16} className={item.sms ? 'text-amber-600' : 'text-gray-400 group-hover:text-amber-400'} />
                                 <input type="checkbox" defaultChecked={item.sms} className="w-3.5 h-3.5 rounded text-amber-600" />
                              </label>
                              <label className="flex flex-col items-center gap-1.5 cursor-pointer group">
                                 <Bell size={16} className={item.push ? 'text-amber-600' : 'text-gray-400 group-hover:text-amber-400'} />
                                 <input type="checkbox" defaultChecked={item.push} className="w-3.5 h-3.5 rounded text-amber-600" />
                              </label>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>

               <div className="flex justify-end pt-6 border-t border-[var(--border)]">
                  <button className="flex items-center justify-center gap-2 px-6 py-2.5 bg-amber-600 text-white text-sm font-bold rounded-lg shadow-sm hover:bg-amber-700 transition-colors">
                     <Save size={16} /> Update Preferences
                  </button>
               </div>
            </div>
         )}

         {activeTab === 'SECURITY' && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2">
               <div>
                  <h2 className="text-lg font-bold text-[var(--text-primary)] mb-1 flex items-center gap-2">
                     <KeyRound className="text-emerald-500" size={20} /> Security & Password
                  </h2>
                  <p className="text-sm text-[var(--text-secondary)] mb-6">Manage your account password and security settings.</p>
                  
                  <div className="max-w-md space-y-4">
                     <div className="bg-[var(--bg-input)] p-5 rounded-xl border border-[var(--border)]">
                        <div className="space-y-4">
                           <div>
                              <label className="block text-xs font-bold text-[var(--text-secondary)] uppercase tracking-wider mb-2">Current Password</label>
                              <input type="password" placeholder="••••••••" className="w-full bg-[var(--bg-card)] border border-[var(--border)] rounded-lg px-4 py-2 text-sm focus:border-emerald-500 outline-none" />
                           </div>
                           <div>
                              <label className="block text-xs font-bold text-[var(--text-secondary)] uppercase tracking-wider mb-2">New Password</label>
                              <input type="password" placeholder="••••••••" className="w-full bg-[var(--bg-card)] border border-[var(--border)] rounded-lg px-4 py-2 text-sm focus:border-emerald-500 outline-none" />
                           </div>
                           <div>
                              <label className="block text-xs font-bold text-[var(--text-secondary)] uppercase tracking-wider mb-2">Confirm New Password</label>
                              <input type="password" placeholder="••••••••" className="w-full bg-[var(--bg-card)] border border-[var(--border)] rounded-lg px-4 py-2 text-sm focus:border-emerald-500 outline-none" />
                           </div>
                        </div>
                     </div>

                     <div className="bg-emerald-500/5 border border-emerald-500/20 p-4 rounded-xl flex items-start gap-3 text-emerald-700 dark:text-emerald-400">
                        <UserCheck size={20} className="shrink-0 mt-0.5" />
                        <div className="text-sm">
                           <p className="font-bold mb-1">Two-Factor Authentication (2FA)</p>
                           <p className="opacity-90">2FA is currently enabled for your account via SMS. To change this, contact the IT Admin.</p>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="flex justify-start pt-6 border-t border-[var(--border)]">
                  <button className="flex items-center justify-center gap-2 px-6 py-2.5 bg-emerald-600 text-white text-sm font-bold rounded-lg shadow-sm hover:bg-emerald-700 transition-colors">
                     <Save size={16} /> Update Password
                  </button>
               </div>
            </div>
         )}

      </div>
    </div>
  );
}
