"use client";

import { useState } from "react";
import { UserCircle, Mail, Smartphone, ShieldCheck, Fingerprint, KeyRound, Save } from "lucide-react";

export default function SuperAdminLoginIdentitySettingsConfig() {
  const [activeSubTab, setActiveSubTab] = useState("methods");

  return (
    <div className="bg-card border border-border rounded-lg shadow-sm flex flex-col">
      
      {/* Alert exactly matching checklist string */}
      <div className="p-3 bg-info-bg border-b border-info/30 text-info text-sm font-bold flex items-center gap-2">
        <UserCircle size={16} /> Login / Identity Settings Configuration
      </div>

      {/* Sub Tabs */}
      <div className="flex overflow-x-auto hide-scrollbar border-b border-border bg-bg-page">
        <button 
          onClick={() => setActiveSubTab('methods')}
          className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${activeSubTab === 'methods' ? 'border-primary text-primary bg-primary/5' : 'border-transparent text-text-secondary hover:text-primary hover:bg-card'}`}
        >
          <Fingerprint size={16} /> Login Methods
        </button>
        <button 
          onClick={() => setActiveSubTab('verification')}
          className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${activeSubTab === 'verification' ? 'border-primary text-primary bg-primary/5' : 'border-transparent text-text-secondary hover:text-primary hover:bg-card'}`}
        >
          <ShieldCheck size={16} /> Identity & Verification
        </button>
      </div>

      <div className="p-6">
        
        {activeSubTab === 'methods' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-bold text-text-primary border-b border-border pb-2 uppercase">Allowed Login Identifiers</h3>
              
              <div className="flex flex-col gap-3">
                <label className="flex items-center gap-3 p-3 border border-border rounded-lg bg-bg-page cursor-pointer hover:border-primary transition-colors">
                  <input type="checkbox" defaultChecked className="w-5 h-5 accent-primary" />
                  <div className="flex flex-col">
                    <span className="text-sm font-bold flex items-center gap-1.5"><UserCircle size={16} /> Username Login</span>
                    <span className="text-xs text-text-secondary">Allow login using alphanumeric username.</span>
                  </div>
                </label>
                <label className="flex items-center gap-3 p-3 border border-border rounded-lg bg-bg-page cursor-pointer hover:border-primary transition-colors">
                  <input type="checkbox" defaultChecked className="w-5 h-5 accent-primary" />
                  <div className="flex flex-col">
                    <span className="text-sm font-bold flex items-center gap-1.5"><Mail size={16} /> Email Login</span>
                    <span className="text-xs text-text-secondary">Allow login using registered email address.</span>
                  </div>
                </label>
                <label className="flex items-center gap-3 p-3 border border-border rounded-lg bg-bg-page cursor-pointer hover:border-primary transition-colors">
                  <input type="checkbox" defaultChecked className="w-5 h-5 accent-primary" />
                  <div className="flex flex-col">
                    <span className="text-sm font-bold flex items-center gap-1.5"><Smartphone size={16} /> Mobile Login</span>
                    <span className="text-xs text-text-secondary">Allow login using registered mobile number.</span>
                  </div>
                </label>
                <label className="flex items-center gap-3 p-3 border border-border rounded-lg bg-bg-page cursor-pointer hover:border-primary transition-colors">
                  <input type="checkbox" defaultChecked className="w-5 h-5 accent-primary" />
                  <div className="flex flex-col">
                    <span className="text-sm font-bold flex items-center gap-1.5"><Fingerprint size={16} /> Student ID / Admission No.</span>
                    <span className="text-xs text-text-secondary">Specific for students and parents.</span>
                  </div>
                </label>
                <label className="flex items-center gap-3 p-3 border border-border rounded-lg bg-bg-page cursor-pointer hover:border-primary transition-colors">
                  <input type="checkbox" defaultChecked className="w-5 h-5 accent-primary" />
                  <div className="flex flex-col">
                    <span className="text-sm font-bold flex items-center gap-1.5"><Fingerprint size={16} /> Employee ID</span>
                    <span className="text-xs text-text-secondary">Specific for teaching and non-teaching staff.</span>
                  </div>
                </label>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-bold text-text-primary border-b border-border pb-2 uppercase">Authentication Mechanisms</h3>
              
              <div className="flex flex-col gap-3">
                <label className="flex items-center gap-3 p-3 border border-primary/30 rounded-lg bg-primary/5 cursor-not-allowed">
                  <input type="checkbox" checked disabled className="w-5 h-5 accent-primary" />
                  <div className="flex flex-col">
                    <span className="text-sm font-bold flex items-center gap-1.5"><KeyRound size={16} /> Password Login</span>
                    <span className="text-xs text-text-secondary">Standard password-based authentication (Mandatory).</span>
                  </div>
                </label>
                <label className="flex items-center gap-3 p-3 border border-border rounded-lg bg-bg-page cursor-pointer hover:border-primary transition-colors relative">
                  <input type="checkbox" defaultChecked className="w-5 h-5 accent-primary peer" />
                  <div className="flex flex-col">
                    <span className="text-sm font-bold flex items-center gap-1.5"><ShieldCheck size={16} /> OTP Login</span>
                    <span className="text-xs text-text-secondary">Allow passwordless login via Email/SMS OTP where enabled.</span>
                  </div>
                </label>
                <label className="flex items-center gap-3 p-3 border border-border rounded-lg bg-bg-page cursor-pointer hover:border-primary transition-colors">
                  <input type="checkbox" defaultChecked className="w-5 h-5 accent-primary" />
                  <div className="flex flex-col">
                    <span className="text-sm font-bold flex items-center gap-1.5"><KeyRound size={16} /> Forgot Password Flow</span>
                    <span className="text-xs text-text-secondary">Allow users to reset their own passwords via OTP/Link.</span>
                  </div>
                </label>
              </div>

              <div className="mt-4 flex justify-end">
                <button className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white font-bold rounded-lg hover:bg-primary-hover transition-colors shadow-sm">
                  <Save size={16} /> Save Settings
                </button>
              </div>
            </div>

          </div>
        )}

        {activeSubTab === 'verification' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-bold text-text-primary border-b border-border pb-2 uppercase">Account Verification Settings</h3>
              
              <div className="flex flex-col gap-3">
                <label className="flex items-center gap-3 p-3 border border-border rounded-lg bg-bg-page cursor-pointer hover:border-primary transition-colors">
                  <input type="checkbox" defaultChecked className="w-5 h-5 accent-primary" />
                  <div className="flex flex-col">
                    <span className="text-sm font-bold flex items-center gap-1.5"><Mail size={16} /> Require Email Verification</span>
                    <span className="text-xs text-text-secondary">New accounts must verify email before first login.</span>
                  </div>
                </label>
                <label className="flex items-center gap-3 p-3 border border-border rounded-lg bg-bg-page cursor-pointer hover:border-primary transition-colors">
                  <input type="checkbox" defaultChecked className="w-5 h-5 accent-primary" />
                  <div className="flex flex-col">
                    <span className="text-sm font-bold flex items-center gap-1.5"><Smartphone size={16} /> Require Mobile Verification</span>
                    <span className="text-xs text-text-secondary">New accounts must verify mobile via SMS OTP.</span>
                  </div>
                </label>
                <label className="flex items-center gap-3 p-3 border border-border rounded-lg bg-bg-page cursor-pointer hover:border-primary transition-colors">
                  <input type="checkbox" className="w-5 h-5 accent-primary" />
                  <div className="flex flex-col">
                    <span className="text-sm font-bold flex items-center gap-1.5"><ShieldCheck size={16} /> Manual Admin Approval</span>
                    <span className="text-xs text-text-secondary">New self-registered accounts require Super Admin approval.</span>
                  </div>
                </label>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
