"use client";

import React, { useState } from 'react';
import { 
  ShieldCheck, KeyRound, Smartphone, Mail, BellRing, 
  History, Monitor, Globe, LogOut, CheckCircle2, AlertCircle, Save
} from 'lucide-react';
import clsx from 'clsx';

// Mock Data
const activeSessions = [
  { id: 1, device: 'Windows PC (Chrome)', ip: '192.168.1.105', location: 'New Delhi, India', time: 'Current Session', isCurrent: true, icon: <Monitor size={20} /> },
  { id: 2, device: 'iPhone 13 (Safari)', ip: '192.168.1.142', location: 'New Delhi, India', time: '2 hours ago', isCurrent: false, icon: <Smartphone size={20} /> }
];

const loginHistory = [
  { id: 1, date: '16 Oct 2023, 10:30 AM', device: 'Windows PC', status: 'Success' },
  { id: 2, date: '15 Oct 2023, 09:15 PM', device: 'iPhone 13', status: 'Success' },
  { id: 3, date: '14 Oct 2023, 11:45 AM', device: 'MacBook Air', status: 'Failed', reason: 'Incorrect Password' },
  { id: 4, date: '12 Oct 2023, 08:20 AM', device: 'Windows PC', status: 'Success' }
];

export default function SecurityPage() {
  // State for toggles
  const [twoFA, setTwoFA] = useState(true);
  const [prefEmail, setPrefEmail] = useState(true);
  const [prefSMS, setPrefSMS] = useState(true);
  const [prefPush, setPrefPush] = useState(false);
  
  // State for password change form
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("New passwords do not match!");
      return;
    }
    alert("Password successfully changed.");
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
  };

  const handleLogoutOthers = () => {
    alert("Logged out of all other devices successfully.");
  };

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-6">
      
      {/* Header */}
      <div className="bg-white p-6 rounded-2xl border border-border shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-text-primary tracking-tight flex items-center gap-3">
            Account & Security <ShieldCheck className="text-indigo-500" size={32} />
          </h1>
          <p className="text-text-secondary text-sm mt-1">Manage your password, 2FA, sessions, and preferences.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column: Password & 2FA */}
        <div className="lg:col-span-1 space-y-6">
          
          {/* Change Password */}
          <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
            <div className="p-5 border-b border-border bg-page/50 flex items-center gap-3">
              <KeyRound size={20} className="text-indigo-600" />
              <h2 className="font-bold text-text-primary">Change Password</h2>
            </div>
            <div className="p-5">
              <form onSubmit={handlePasswordChange} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-text-secondary mb-1">Current Password</label>
                  <input 
                    type="password" 
                    required 
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    className="w-full p-2.5 bg-page border border-border rounded-xl text-sm focus:outline-none focus:border-indigo-500"
                  />
                  <div className="text-right mt-1">
                    <a href="#" className="text-xs text-indigo-600 font-bold hover:underline">Forgot Password?</a>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-text-secondary mb-1">New Password</label>
                  <input 
                    type="password" 
                    required 
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="w-full p-2.5 bg-page border border-border rounded-xl text-sm focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-text-secondary mb-1">Confirm New Password</label>
                  <input 
                    type="password" 
                    required 
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full p-2.5 bg-page border border-border rounded-xl text-sm focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <button type="submit" className="w-full py-2.5 bg-indigo-600 text-white font-bold text-sm rounded-xl hover:bg-indigo-700 transition-colors flex justify-center items-center gap-2">
                  <Save size={16} /> Update Password
                </button>
              </form>
            </div>
          </div>

          {/* 2FA & Security Settings */}
          <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
            <div className="p-5 border-b border-border bg-page/50 flex items-center gap-3">
              <ShieldCheck size={20} className="text-emerald-600" />
              <h2 className="font-bold text-text-primary">Security Settings</h2>
            </div>
            <div className="p-5 space-y-5">
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-text-primary">Two-Factor Authentication</p>
                  <p className="text-xs text-text-tertiary">Add an extra layer of security</p>
                </div>
                <div 
                  className={clsx(
                    "w-11 h-6 rounded-full flex items-center px-1 cursor-pointer transition-colors",
                    twoFA ? "bg-emerald-500" : "bg-border"
                  )}
                  onClick={() => setTwoFA(!twoFA)}
                >
                   <div className={clsx(
                     "w-4 h-4 bg-white rounded-full shadow-sm transition-transform",
                     twoFA ? "translate-x-5" : "translate-x-0"
                   )}></div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Middle Column: Sessions & Login History */}
        <div className="lg:col-span-1 space-y-6">
          
          {/* Active Sessions */}
          <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
            <div className="p-5 border-b border-border bg-page/50 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Globe size={20} className="text-blue-600" />
                <h2 className="font-bold text-text-primary">Active Sessions</h2>
              </div>
            </div>
            <div className="p-0 divide-y divide-border">
              {activeSessions.map(session => (
                <div key={session.id} className="p-4 flex items-center gap-4 hover:bg-page/50 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                    {session.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-text-primary flex items-center gap-2">
                      {session.device} 
                      {session.isCurrent && <span className="bg-emerald-100 text-emerald-700 text-[10px] px-1.5 py-0.5 rounded uppercase font-bold tracking-wider">Current</span>}
                    </p>
                    <p className="text-xs text-text-tertiary font-medium">{session.location} &bull; {session.ip}</p>
                    <p className="text-xs text-text-secondary mt-0.5">{session.time}</p>
                  </div>
                </div>
              ))}
              <div className="p-4">
                <button 
                  onClick={handleLogoutOthers}
                  className="w-full py-2 bg-red-50 text-red-600 font-bold text-sm rounded-xl border border-red-200 hover:bg-red-100 transition-colors flex justify-center items-center gap-2"
                >
                  <LogOut size={16} /> Logout Other Devices
                </button>
              </div>
            </div>
          </div>

          {/* Login History */}
          <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
            <div className="p-5 border-b border-border bg-page/50 flex items-center gap-3">
              <History size={20} className="text-orange-600" />
              <h2 className="font-bold text-text-primary">Login History</h2>
            </div>
            <div className="p-0 divide-y divide-border">
              {loginHistory.map(history => (
                <div key={history.id} className="p-4 flex items-center justify-between hover:bg-page/50 transition-colors">
                  <div>
                    <p className="text-sm font-bold text-text-primary">{history.device}</p>
                    <p className="text-xs text-text-tertiary">{history.date}</p>
                  </div>
                  <div className="text-right flex flex-col items-end">
                    {history.status === 'Success' ? (
                      <span className="flex items-center gap-1 text-emerald-600 text-xs font-bold">
                        <CheckCircle2 size={14} /> Success
                      </span>
                    ) : (
                      <>
                        <span className="flex items-center gap-1 text-red-600 text-xs font-bold">
                          <AlertCircle size={14} /> Failed
                        </span>
                        <span className="text-[10px] text-text-tertiary">{history.reason}</span>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column: Communication Preferences */}
        <div className="lg:col-span-1 space-y-6">
          
          <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden h-full">
            <div className="p-5 border-b border-border bg-page/50 flex items-center gap-3">
              <BellRing size={20} className="text-pink-600" />
              <h2 className="font-bold text-text-primary">Communication Prefs</h2>
            </div>
            <div className="p-5 space-y-6">
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-xl border border-border hover:bg-page transition-colors">
                  <div className="flex items-center gap-3">
                    <Mail size={18} className="text-text-secondary" />
                    <div>
                      <p className="text-sm font-bold text-text-primary">Email Notifications</p>
                      <p className="text-xs text-text-tertiary">Receive updates via email</p>
                    </div>
                  </div>
                  <div 
                    className={clsx("w-10 h-5 rounded-full flex items-center px-1 cursor-pointer transition-colors", prefEmail ? "bg-pink-500" : "bg-border")}
                    onClick={() => setPrefEmail(!prefEmail)}
                  >
                     <div className={clsx("w-3 h-3 bg-white rounded-full shadow-sm transition-transform", prefEmail ? "translate-x-5" : "translate-x-0")}></div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl border border-border hover:bg-page transition-colors">
                  <div className="flex items-center gap-3">
                    <Smartphone size={18} className="text-text-secondary" />
                    <div>
                      <p className="text-sm font-bold text-text-primary">SMS Alerts</p>
                      <p className="text-xs text-text-tertiary">Important alerts on phone</p>
                    </div>
                  </div>
                  <div 
                    className={clsx("w-10 h-5 rounded-full flex items-center px-1 cursor-pointer transition-colors", prefSMS ? "bg-pink-500" : "bg-border")}
                    onClick={() => setPrefSMS(!prefSMS)}
                  >
                     <div className={clsx("w-3 h-3 bg-white rounded-full shadow-sm transition-transform", prefSMS ? "translate-x-5" : "translate-x-0")}></div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl border border-border hover:bg-page transition-colors">
                  <div className="flex items-center gap-3">
                    <BellRing size={18} className="text-text-secondary" />
                    <div>
                      <p className="text-sm font-bold text-text-primary">Push Notifications</p>
                      <p className="text-xs text-text-tertiary">App notifications on device</p>
                    </div>
                  </div>
                  <div 
                    className={clsx("w-10 h-5 rounded-full flex items-center px-1 cursor-pointer transition-colors", prefPush ? "bg-pink-500" : "bg-border")}
                    onClick={() => setPrefPush(!prefPush)}
                  >
                     <div className={clsx("w-3 h-3 bg-white rounded-full shadow-sm transition-transform", prefPush ? "translate-x-5" : "translate-x-0")}></div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <button className="w-full py-2.5 bg-black text-white font-bold text-sm rounded-xl hover:bg-gray-800 transition-colors">
                  Save Preferences
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
