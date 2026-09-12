"use client";

import { useState } from "react";
import { ShieldAlert, KeyRound, EyeOff, FileLock2, CreditCard, Lock, Eye, AlertTriangle } from "lucide-react";

export default function SuperAdminSensitiveDataProtectionConfig() {
  const [activeSubTab, setActiveSubTab] = useState("encryption");

  return (
    <div className="bg-card border border-border rounded-lg shadow-sm flex flex-col">
      
      {/* Alert exactly matching checklist string */}
      <div className="p-3 bg-danger-bg border-b border-danger/30 text-danger text-sm font-bold flex items-center gap-2">
        <ShieldAlert size={16} /> Sensitive Data Protection Configuration
      </div>

      {/* Sub Tabs */}
      <div className="flex overflow-x-auto hide-scrollbar border-b border-border bg-bg-page">
        <button 
          onClick={() => setActiveSubTab('encryption')}
          className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${activeSubTab === 'encryption' ? 'border-primary text-primary bg-primary/5' : 'border-transparent text-text-secondary hover:text-primary hover:bg-card'}`}
        >
          <Lock size={16} /> Data Encryption & Masking
        </button>
        <button 
          onClick={() => setActiveSubTab('secrets')}
          className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${activeSubTab === 'secrets' ? 'border-primary text-primary bg-primary/5' : 'border-transparent text-text-secondary hover:text-primary hover:bg-card'}`}
        >
          <KeyRound size={16} /> API & Payment Secrets
        </button>
        <button 
          onClick={() => setActiveSubTab('documents')}
          className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${activeSubTab === 'documents' ? 'border-primary text-primary bg-primary/5' : 'border-transparent text-text-secondary hover:text-primary hover:bg-card'}`}
        >
          <FileLock2 size={16} /> Personal Docs & Finance
        </button>
      </div>

      <div className="p-6">
        
        {activeSubTab === 'encryption' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-6">
              
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center border-b border-border pb-2">
                  <h3 className="text-sm font-bold text-text-primary uppercase flex items-center gap-1.5"><Lock size={16} /> Database Encryption (At Rest)</h3>
                </div>
                <div className="p-4 border border-border rounded-lg bg-bg-page">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-text-primary">AES-256 Encryption Status</span>
                      <span className="text-xs text-text-secondary">Ensures all Passwords, API Secrets, and Payment Secrets are encrypted in the database.</span>
                    </div>
                    <span className="text-[10px] bg-success-bg text-success px-2 py-0.5 rounded font-bold border border-success/30">Active</span>
                  </div>
                  <label className="flex items-center gap-2 cursor-not-allowed opacity-70">
                    <input type="checkbox" checked disabled className="w-4 h-4 accent-primary" />
                    <span className="text-sm font-semibold">Encrypt Passwords (Irreversible Hash - Bcrypt)</span>
                  </label>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center border-b border-border pb-2">
                  <h3 className="text-sm font-bold text-text-primary uppercase flex items-center gap-1.5"><EyeOff size={16} /> Data Masking (In Transit/UI)</h3>
                </div>
                <div className="p-4 border border-border rounded-lg bg-bg-page flex flex-col gap-3">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" defaultChecked className="w-4 h-4 accent-primary" />
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold">Mask Aadhar / SSN Numbers</span>
                      <span className="text-[10px] text-text-secondary">Shows as: XXXXXXXX1234</span>
                    </div>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" defaultChecked className="w-4 h-4 accent-primary" />
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold">Mask Phone Numbers in Reports</span>
                      <span className="text-[10px] text-text-secondary">Shows as: +91 ******4567</span>
                    </div>
                  </label>
                </div>
              </div>

            </div>
          </div>
        )}

        {activeSubTab === 'secrets' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-6">
              
              <div className="p-4 border border-danger/30 rounded-lg bg-danger-bg/10 flex flex-col gap-4">
                <div className="flex gap-3 items-center text-danger font-bold text-sm">
                  <AlertTriangle size={20} />
                  <span>Strict Policy: No plain-text secret display</span>
                </div>
                <p className="text-xs text-text-secondary">Once an API Key or Payment Secret is saved, it can never be viewed again in plain text. You can only overwrite it.</p>
                
                <div className="flex flex-col gap-2 bg-card p-3 rounded border border-border">
                  <span className="text-xs font-bold text-text-secondary uppercase">Razorpay Live Secret (Mock Example)</span>
                  <div className="flex justify-between items-center bg-input border border-border rounded-md px-3 py-1.5 opacity-60">
                    <span className="text-sm font-mono tracking-widest text-text-primary">••••••••••••••••••••••••</span>
                    <EyeOff size={16} className="text-text-secondary" />
                  </div>
                  <button className="text-xs font-bold text-primary hover:underline self-start mt-1">Generate New Key to Overwrite</button>
                </div>
              </div>

              <div className="p-4 border border-border rounded-lg bg-bg-page flex flex-col gap-3">
                <h3 className="text-sm font-bold text-text-primary border-b border-border pb-2">Audit Access to Secrets</h3>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" defaultChecked className="w-4 h-4 accent-primary" />
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold">Log every modification of Secrets</span>
                    <span className="text-[10px] text-text-secondary">Records IP, Date, Time, and SuperAdmin User ID in Audit Logs.</span>
                  </div>
                </label>
              </div>

            </div>
          </div>
        )}

        {activeSubTab === 'documents' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center border-b border-border pb-2">
                <h3 className="text-sm font-bold text-text-primary uppercase flex items-center gap-1.5"><FileLock2 size={16} /> Personal Documents Access</h3>
              </div>
              <div className="p-4 border border-border rounded-lg bg-bg-page flex flex-col gap-3">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" defaultChecked className="w-4 h-4 accent-primary" />
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold">Restricted Access (RBAC)</span>
                    <span className="text-[10px] text-text-secondary">Only Principals, Admins, and Document Owners can view uploaded ID Proofs.</span>
                  </div>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" defaultChecked className="w-4 h-4 accent-primary" />
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold">Prevent Direct URL Access</span>
                    <span className="text-[10px] text-text-secondary">AWS S3 Signed URLs (expire in 5 mins) are generated for downloading.</span>
                  </div>
                </label>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center border-b border-border pb-2">
                <h3 className="text-sm font-bold text-text-primary uppercase flex items-center gap-1.5"><CreditCard size={16} /> Financial Information Security</h3>
              </div>
              <div className="p-4 border border-border rounded-lg bg-bg-page flex flex-col gap-3">
                <label className="flex items-center gap-2 cursor-not-allowed opacity-70">
                  <input type="checkbox" checked disabled className="w-4 h-4 accent-primary" />
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold">Do not store Credit Card Details</span>
                    <span className="text-[10px] text-text-secondary">PCI-DSS Compliance: Handled fully by Payment Gateway Tokenization.</span>
                  </div>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" defaultChecked className="w-4 h-4 accent-primary" />
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold">Mask Bank Account Numbers</span>
                    <span className="text-[10px] text-text-secondary">Only last 4 digits visible on staff payroll pages.</span>
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
