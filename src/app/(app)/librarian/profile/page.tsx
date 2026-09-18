"use client";

import React, { useState } from "react";
import {
  UserCircle2,
  Mail,
  Phone,
  Briefcase,
  Hash,
  ShieldCheck,
  KeyRound,
  Smartphone,
  Laptop,
  Monitor,
  LogOut,
  Save,
  CheckCircle2,
  Camera,
  AlertCircle
} from "lucide-react";

type ProfileTab = 'Personal' | 'Security' | 'Sessions';

interface Session {
  id: string;
  device: string;
  browser: string;
  location: string;
  ip: string;
  lastActive: string;
  isCurrent: boolean;
}

const MOCK_SESSIONS: Session[] = [
  { id: "S-1", device: "Desktop (Windows)", browser: "Chrome", location: "New Delhi, India", ip: "192.168.1.45", lastActive: "Active Now", isCurrent: true },
  { id: "S-2", device: "Smartphone (Android)", browser: "Chrome Mobile", location: "New Delhi, India", ip: "10.0.0.12", lastActive: "2 hours ago", isCurrent: false },
  { id: "S-3", device: "Laptop (MacBook)", browser: "Safari", location: "Mumbai, India", ip: "172.16.2.8", lastActive: "Yesterday", isCurrent: false }
];

export default function LibrarianProfile() {
  const [activeTab, setActiveTab] = useState<ProfileTab>('Personal');

  // Personal Info State
  const [personalInfo, setPersonalInfo] = useState({
    name: "Amit Librarian",
    email: "amit.lib@schoolerp.com",
    phone: "+91 9876543210",
    empId: "EMP-LIB-001",
    designation: "Head Librarian"
  });

  // Password State
  const [passwords, setPasswords] = useState({
    current: "",
    new: "",
    confirm: ""
  });

  // Security Settings
  const [twoFactorAuth, setTwoFactorAuth] = useState(true);

  // Sessions
  const [sessions, setSessions] = useState<Session[]>(MOCK_SESSIONS);

  // UI Interactive States
  const [isSaving, setIsSaving] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleSavePersonal = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      setShowSuccessModal(true);
      setTimeout(() => setShowSuccessModal(false), 2000);
    }, 1000);
  };

  const handleUpdatePassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwords.new !== passwords.confirm) {
      alert("New password and confirm password do not match!");
      return;
    }
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      setShowSuccessModal(true);
      setPasswords({ current: "", new: "", confirm: "" });
      setTimeout(() => setShowSuccessModal(false), 2000);
    }, 1000);
  };

  const handleRevokeSession = (id: string) => {
    if (confirm("Are you sure you want to log out from this device?")) {
      setSessions(sessions.filter(s => s.id !== id));
    }
  };

  return (
    <div className="p-4 md:p-6 lg:p-8 min-h-screen bg-gray-50/50 flex flex-col items-center">
      
      <div className="w-full max-w-4xl">
        
        {/* Page Header */}
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center gap-2">
            <UserCircle2 className="w-8 h-8 text-teal-600" />
            My Profile & Settings
          </h1>
          <p className="text-gray-500 mt-1">Manage your personal details, credentials, and active login sessions.</p>
        </div>

        {/* Top Banner / Avatar Card */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 md:p-8 mb-8 flex flex-col md:flex-row items-center gap-6 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-teal-50 to-transparent opacity-60"></div>
          
          <div className="relative group cursor-pointer z-10">
            <div className="w-24 h-24 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center border-4 border-white shadow-md text-3xl font-black">
              AL
            </div>
            <div className="absolute bottom-0 right-0 bg-gray-900 text-white p-2 rounded-full border-2 border-white shadow-sm hover:scale-110 transition-transform">
              <Camera className="w-4 h-4" />
            </div>
          </div>
          
          <div className="text-center md:text-left z-10">
            <h2 className="text-2xl font-black text-gray-900 mb-1">{personalInfo.name}</h2>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
              <span className="bg-teal-50 text-teal-700 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider border border-teal-100 flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5"/> {personalInfo.designation}
              </span>
              <span className="text-xs text-gray-500 font-mono font-medium flex items-center gap-1">
                <Hash className="w-3 h-3"/> {personalInfo.empId}
              </span>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white p-2 rounded-2xl shadow-sm border border-gray-100 mb-6 flex overflow-x-auto">
          <button onClick={() => setActiveTab('Personal')} className={`flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold transition-all whitespace-nowrap ${activeTab === 'Personal' ? 'bg-teal-50 text-teal-700' : 'text-gray-500 hover:bg-gray-50'}`}>
            <UserCircle2 className="w-4 h-4" /> Personal Information
          </button>
          <button onClick={() => setActiveTab('Security')} className={`flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold transition-all whitespace-nowrap ${activeTab === 'Security' ? 'bg-indigo-50 text-indigo-700' : 'text-gray-500 hover:bg-gray-50'}`}>
            <ShieldCheck className="w-4 h-4" /> Security & Password
          </button>
          <button onClick={() => setActiveTab('Sessions')} className={`flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold transition-all whitespace-nowrap ${activeTab === 'Sessions' ? 'bg-rose-50 text-rose-700' : 'text-gray-500 hover:bg-gray-50'}`}>
            <Laptop className="w-4 h-4" /> Active Sessions
          </button>
        </div>

        {/* Tab Contents */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden min-h-[400px]">
          
          {/* 1. PERSONAL INFO TAB */}
          {activeTab === 'Personal' && (
            <div className="animate-in fade-in duration-300">
              <div className="p-6 border-b border-gray-100 bg-teal-50/30">
                <h3 className="font-bold text-gray-800 text-lg">Update Contact Details</h3>
                <p className="text-sm text-gray-500">Ensure your email and phone number are up to date for emergency alerts.</p>
              </div>
              <form onSubmit={handleSavePersonal} className="p-6 md:p-8 space-y-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2"><UserCircle2 className="w-4 h-4 text-teal-500"/> Full Name</label>
                    <input type="text" required value={personalInfo.name} onChange={e => setPersonalInfo({...personalInfo, name: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 font-medium" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2"><Hash className="w-4 h-4 text-gray-400"/> Employee ID</label>
                    <input type="text" disabled value={personalInfo.empId} className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-500 font-mono font-medium cursor-not-allowed" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2"><Mail className="w-4 h-4 text-teal-500"/> Email Address</label>
                    <input type="email" required value={personalInfo.email} onChange={e => setPersonalInfo({...personalInfo, email: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 font-medium" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2"><Phone className="w-4 h-4 text-teal-500"/> Phone Number</label>
                    <input type="text" required value={personalInfo.phone} onChange={e => setPersonalInfo({...personalInfo, phone: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 font-medium" />
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-gray-100 flex justify-end">
                  <button type="submit" disabled={isSaving} className="w-full md:w-auto px-8 py-3.5 bg-teal-600 text-white rounded-xl font-bold shadow-md hover:bg-teal-700 transition-colors disabled:opacity-70 flex items-center justify-center gap-2">
                    {isSaving ? <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span> : <Save className="w-5 h-5"/>}
                    {isSaving ? "Saving Changes..." : "Save Personal Details"}
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* 2. SECURITY & PASSWORD TAB */}
          {activeTab === 'Security' && (
            <div className="animate-in fade-in duration-300">
              <div className="p-6 border-b border-gray-100 bg-indigo-50/30">
                <h3 className="font-bold text-gray-800 text-lg">Account Security</h3>
                <p className="text-sm text-gray-500">Change your password and manage authentication methods.</p>
              </div>
              <div className="p-6 md:p-8 space-y-8">
                
                {/* 2FA Toggle */}
                <div className="bg-indigo-50 border border-indigo-100 p-5 rounded-2xl flex items-center justify-between gap-4">
                  <div>
                    <h4 className="font-bold text-indigo-900 flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-indigo-600"/> Two-Factor Authentication (2FA)</h4>
                    <p className="text-xs text-indigo-700 mt-1">Add an extra layer of security to your library account. We'll send an OTP to your phone on new logins.</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer shrink-0">
                    <input type="checkbox" className="sr-only peer" checked={twoFactorAuth} onChange={() => setTwoFactorAuth(!twoFactorAuth)} />
                    <div className="w-14 h-7 bg-indigo-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-indigo-600 shadow-sm"></div>
                  </label>
                </div>

                <hr className="border-gray-100" />

                <form onSubmit={handleUpdatePassword} className="max-w-md space-y-5">
                  <h4 className="font-bold text-gray-800 flex items-center gap-2 mb-4"><KeyRound className="w-5 h-5 text-gray-400"/> Change Password</h4>
                  
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Current Password</label>
                    <input type="password" required value={passwords.current} onChange={e => setPasswords({...passwords, current: e.target.value})} placeholder="••••••••" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">New Password</label>
                    <input type="password" required value={passwords.new} onChange={e => setPasswords({...passwords, new: e.target.value})} placeholder="••••••••" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Confirm New Password</label>
                    <input type="password" required value={passwords.confirm} onChange={e => setPasswords({...passwords, confirm: e.target.value})} placeholder="••••••••" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                  </div>
                  
                  <div className="pt-4">
                    <button type="submit" disabled={isSaving} className="w-full py-3.5 bg-gray-900 text-white rounded-xl font-bold shadow-md hover:bg-black transition-colors disabled:opacity-70 flex items-center justify-center gap-2">
                      {isSaving ? <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span> : <Lock className="w-5 h-5"/>}
                      {isSaving ? "Updating..." : "Update Password"}
                    </button>
                  </div>
                </form>

              </div>
            </div>
          )}

          {/* 3. ACTIVE SESSIONS TAB */}
          {activeTab === 'Sessions' && (
            <div className="animate-in fade-in duration-300">
              <div className="p-6 border-b border-gray-100 bg-rose-50/30">
                <h3 className="font-bold text-gray-800 text-lg">Active Sessions</h3>
                <p className="text-sm text-gray-500">Devices currently logged into your librarian account.</p>
              </div>
              <div className="p-6">
                <div className="divide-y divide-gray-100">
                  {sessions.map(session => (
                    <div key={session.id} className="py-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${session.isCurrent ? 'bg-emerald-100 text-emerald-600' : 'bg-gray-100 text-gray-500'}`}>
                          {session.device.includes('Desktop') ? <Monitor className="w-6 h-6" /> : 
                           session.device.includes('Smartphone') ? <Smartphone className="w-6 h-6" /> : 
                           <Laptop className="w-6 h-6" />}
                        </div>
                        <div>
                          <p className="font-bold text-gray-900 flex items-center gap-2">
                            {session.device} 
                            {session.isCurrent && <span className="bg-emerald-500 text-white px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">This Device</span>}
                          </p>
                          <p className="text-sm text-gray-500 mt-0.5">{session.browser} • {session.location}</p>
                          <p className="text-xs text-gray-400 font-mono mt-1">IP: {session.ip} • Last Active: {session.lastActive}</p>
                        </div>
                      </div>
                      
                      {!session.isCurrent && (
                        <button 
                          onClick={() => handleRevokeSession(session.id)}
                          className="w-full md:w-auto px-4 py-2 bg-rose-50 text-rose-600 border border-rose-200 rounded-lg text-sm font-bold hover:bg-rose-100 transition-colors flex items-center justify-center gap-2"
                        >
                          <LogOut className="w-4 h-4" /> Revoke Access
                        </button>
                      )}
                    </div>
                  ))}
                  
                  {sessions.length === 1 && (
                    <div className="py-8 text-center text-gray-500">
                      <ShieldCheck className="w-12 h-12 text-emerald-300 mx-auto mb-3" />
                      <p className="font-medium text-sm">No other devices are currently logged into your account.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

        </div>

      </div>

      {/* Generic Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="bg-gray-900 p-8 text-center text-white">
               <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-emerald-500/30">
                 <CheckCircle2 className="w-12 h-12 text-white animate-in zoom-in duration-500" />
               </div>
               <h2 className="text-2xl font-black mb-1">Profile Updated</h2>
               <p className="text-gray-400 text-sm">Your changes have been saved successfully.</p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
