"use client";

import { useState } from "react";
import { User, ShieldCheck, History, Edit, Save, Camera, Smartphone, Mail, Lock, UploadCloud } from "lucide-react";

export default function SuperAdminSuperAdminProfileConfig() {
  const [activeSubTab, setActiveSubTab] = useState("profile");

  return (
    <div className="bg-card border border-border rounded-lg shadow-sm flex flex-col">
      
      {/* Alert exactly matching checklist string */}
      <div className="p-3 bg-info-bg border-b border-info/30 text-info text-sm font-bold flex items-center gap-2">
        <User size={16} /> 👑 Super Admin Profile Management
      </div>

      {/* Sub Tabs */}
      <div className="flex overflow-x-auto hide-scrollbar border-b border-border bg-bg-page">
        <button 
          onClick={() => setActiveSubTab('profile')}
          className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${activeSubTab === 'profile' ? 'border-primary text-primary bg-primary/5' : 'border-transparent text-text-secondary hover:text-primary hover:bg-card'}`}
        >
          <User size={16} /> Profile Details
        </button>
        <button 
          onClick={() => setActiveSubTab('security')}
          className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${activeSubTab === 'security' ? 'border-primary text-primary bg-primary/5' : 'border-transparent text-text-secondary hover:text-primary hover:bg-card'}`}
        >
          <ShieldCheck size={16} /> Security & 2FA
        </button>
        <button 
          onClick={() => setActiveSubTab('sessions')}
          className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${activeSubTab === 'sessions' ? 'border-primary text-primary bg-primary/5' : 'border-transparent text-text-secondary hover:text-primary hover:bg-card'}`}
        >
          <History size={16} /> Active Sessions & History
        </button>
      </div>

      <div className="p-6">
        
        {activeSubTab === 'profile' && (
          <div className="flex flex-col md:flex-row gap-8">
            
            {/* Photo Section */}
            <div className="flex flex-col items-center gap-4">
              <div className="relative group cursor-pointer">
                <div className="w-32 h-32 rounded-full border-4 border-bg-page shadow-md overflow-hidden bg-sidebar flex items-center justify-center">
                  <User size={64} className="text-white/50" />
                </div>
                <div className="absolute inset-0 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                  <Camera size={24} className="text-white" />
                </div>
              </div>
              <button className="text-xs font-bold text-primary hover:underline flex items-center gap-1">
                <UploadCloud size={14} /> Change Photo
              </button>
            </div>

            {/* Details Section */}
            <div className="flex-1 flex flex-col gap-5 max-w-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-text-secondary uppercase">Full Name</label>
                  <div className="relative">
                    <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" />
                    <input type="text" defaultValue="System Administrator" className="w-full bg-input border border-border rounded-md pl-10 pr-3 py-2 text-sm text-text-primary focus:border-primary outline-none font-semibold" />
                  </div>
                </div>
                
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-text-secondary uppercase">Role</label>
                  <input type="text" value="Super Admin (Root)" disabled className="w-full bg-card border border-border rounded-md px-3 py-2 text-sm text-text-secondary outline-none cursor-not-allowed opacity-70" />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-text-secondary uppercase">Email Address (Verified)</label>
                  <div className="relative">
                    <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" />
                    <input type="email" defaultValue="superadmin@erp360.com" className="w-full bg-input border border-border rounded-md pl-10 pr-3 py-2 text-sm text-text-primary focus:border-primary outline-none" />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-text-secondary uppercase">Mobile Number</label>
                  <div className="relative">
                    <Smartphone size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" />
                    <input type="tel" defaultValue="+91 9876543210" className="w-full bg-input border border-border rounded-md pl-10 pr-3 py-2 text-sm text-text-primary focus:border-primary outline-none" />
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-border mt-2">
                <button className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white font-bold rounded-lg hover:bg-primary-hover transition-colors shadow-sm">
                  <Save size={16} /> Save Profile Changes
                </button>
              </div>
            </div>

          </div>
        )}

        {activeSubTab === 'security' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            
            <div className="flex flex-col gap-4 border border-border rounded-lg p-5 bg-bg-page">
              <h3 className="text-sm font-bold text-text-primary uppercase border-b border-border pb-2 flex items-center gap-1.5"><Lock size={16}/> Change Password</h3>
              
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-text-secondary uppercase">Current Password</label>
                  <input type="password" placeholder="Enter current password" className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-text-secondary uppercase">New Password</label>
                  <input type="password" placeholder="Minimum 8 characters, 1 Symbol, 1 Number" className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-text-secondary uppercase">Confirm New Password</label>
                  <input type="password" placeholder="Re-enter new password" className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" />
                </div>
                <button className="mt-2 flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white font-bold rounded-lg hover:bg-primary-hover transition-colors shadow-sm w-fit">
                  Update Password
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-4 border border-border rounded-lg p-5 bg-bg-page">
              <h3 className="text-sm font-bold text-text-primary uppercase border-b border-border pb-2 flex items-center gap-1.5"><ShieldCheck size={16}/> Two-Factor Authentication (2FA)</h3>
              
              <div className="flex flex-col gap-2 p-3 bg-card border border-success/30 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-bold text-text-primary">Authenticator App</span>
                  <span className="text-[10px] font-bold bg-success-bg text-success px-2 py-0.5 rounded border border-success/30">Enabled</span>
                </div>
                <span className="text-xs text-text-secondary">Google Authenticator or Authy is configured.</span>
                <button className="text-xs font-bold text-danger hover:underline w-fit mt-1">Disable 2FA</button>
              </div>

              <div className="flex flex-col gap-2 p-3 bg-card border border-border rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-bold text-text-primary">SMS OTP</span>
                  <span className="text-[10px] font-bold bg-sidebar text-text-secondary px-2 py-0.5 rounded border border-border">Disabled</span>
                </div>
                <span className="text-xs text-text-secondary">Receive OTP via SMS on login.</span>
                <button className="text-xs font-bold text-primary hover:underline w-fit mt-1">Set up SMS 2FA</button>
              </div>
            </div>

          </div>
        )}

        {activeSubTab === 'sessions' && (
          <div className="flex flex-col gap-6">
            
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center">
                <h3 className="text-sm font-bold text-text-primary uppercase">Active Sessions</h3>
                <button className="text-xs font-bold text-danger bg-danger-bg hover:bg-danger hover:text-white border border-danger/30 px-3 py-1.5 rounded transition-colors">Revoke All Other Sessions</button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                
                <div className="p-4 border border-primary/50 bg-primary/5 rounded-lg flex flex-col gap-1 relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-primary text-white text-[9px] font-bold px-2 py-0.5 rounded-bl">CURRENT</div>
                  <h4 className="text-sm font-bold text-text-primary">Windows 11 - Chrome</h4>
                  <span className="text-xs text-text-secondary">IP: 192.168.1.100 (Mumbai, IN)</span>
                  <span className="text-[10px] text-text-secondary font-semibold mt-1">Last active: Just now</span>
                </div>

                <div className="p-4 border border-border bg-bg-page rounded-lg flex flex-col gap-1 hover:border-primary transition-colors group">
                  <div className="flex justify-between items-start">
                    <h4 className="text-sm font-bold text-text-primary">iOS 17.1 - Safari</h4>
                    <button className="text-xs text-danger opacity-0 group-hover:opacity-100 font-bold transition-opacity">Revoke</button>
                  </div>
                  <span className="text-xs text-text-secondary">IP: 122.14.55.23 (Delhi, IN)</span>
                  <span className="text-[10px] text-text-secondary font-semibold mt-1">Last active: 2 hours ago</span>
                </div>

              </div>
            </div>

            <div className="flex flex-col gap-3 mt-4">
              <h3 className="text-sm font-bold text-text-primary uppercase border-b border-border pb-2">Recent Login History</h3>
              <table className="w-full text-left text-sm whitespace-nowrap border border-border rounded-lg overflow-hidden">
                <thead className="bg-primary-subtle text-text-secondary uppercase text-[11px] font-semibold">
                  <tr>
                    <th className="px-4 py-3 border-b border-border">Date & Time</th>
                    <th className="px-4 py-3 border-b border-border">Device / Browser</th>
                    <th className="px-4 py-3 border-b border-border">IP Address</th>
                    <th className="px-4 py-3 border-b border-border">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-bg-page">
                    <td className="px-4 py-3 text-text-primary font-medium">13 Sep 2026, 09:30 AM</td>
                    <td className="px-4 py-3 text-text-secondary">Windows 11 - Chrome</td>
                    <td className="px-4 py-3 text-text-secondary font-mono text-xs">192.168.1.100</td>
                    <td className="px-4 py-3"><span className="text-[10px] bg-success-bg text-success px-2 py-0.5 rounded font-bold">Success</span></td>
                  </tr>
                  <tr className="hover:bg-bg-page">
                    <td className="px-4 py-3 text-text-primary font-medium">12 Sep 2026, 08:15 PM</td>
                    <td className="px-4 py-3 text-text-secondary">iOS 17.1 - Safari</td>
                    <td className="px-4 py-3 text-text-secondary font-mono text-xs">122.14.55.23</td>
                    <td className="px-4 py-3"><span className="text-[10px] bg-success-bg text-success px-2 py-0.5 rounded font-bold">Success</span></td>
                  </tr>
                  <tr className="hover:bg-bg-page">
                    <td className="px-4 py-3 text-text-primary font-medium">10 Sep 2026, 11:45 PM</td>
                    <td className="px-4 py-3 text-text-secondary">Unknown OS - Firefox</td>
                    <td className="px-4 py-3 text-text-secondary font-mono text-xs">221.11.4.99</td>
                    <td className="px-4 py-3"><span className="text-[10px] bg-danger-bg text-danger px-2 py-0.5 rounded font-bold">Failed (Bad Password)</span></td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
