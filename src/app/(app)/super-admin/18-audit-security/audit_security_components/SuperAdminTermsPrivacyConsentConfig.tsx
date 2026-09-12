"use client";

import { useState } from "react";
import { FileSignature, Shield, CheckSquare, History, FileText, AlertCircle, Edit, Save } from "lucide-react";

export default function SuperAdminTermsPrivacyConsentConfig() {
  const [activeSubTab, setActiveSubTab] = useState("policies");

  return (
    <div className="bg-card border border-border rounded-lg shadow-sm flex flex-col">
      
      {/* Alert exactly matching checklist string */}
      <div className="p-3 bg-info-bg border-b border-info/30 text-info text-sm font-bold flex items-center gap-2">
        <FileSignature size={16} /> Terms / Privacy / Consent Management
      </div>

      {/* Sub Tabs */}
      <div className="flex overflow-x-auto hide-scrollbar border-b border-border bg-bg-page">
        <button 
          onClick={() => setActiveSubTab('policies')}
          className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${activeSubTab === 'policies' ? 'border-primary text-primary bg-primary/5' : 'border-transparent text-text-secondary hover:text-primary hover:bg-card'}`}
        >
          <Shield size={16} /> Privacy & Terms
        </button>
        <button 
          onClick={() => setActiveSubTab('consent')}
          className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${activeSubTab === 'consent' ? 'border-primary text-primary bg-primary/5' : 'border-transparent text-text-secondary hover:text-primary hover:bg-card'}`}
        >
          <CheckSquare size={16} /> User & Parent Consent
        </button>
        <button 
          onClick={() => setActiveSubTab('history')}
          className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${activeSubTab === 'history' ? 'border-primary text-primary bg-primary/5' : 'border-transparent text-text-secondary hover:text-primary hover:bg-card'}`}
        >
          <History size={16} /> Version History
        </button>
      </div>

      <div className="p-6">
        
        {activeSubTab === 'policies' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            <div className="flex flex-col gap-4 border border-border rounded-lg p-5 bg-bg-page relative group">
              <div className="flex justify-between items-center border-b border-border pb-2">
                <h3 className="text-sm font-bold text-text-primary uppercase flex items-center gap-1.5"><FileText size={16} /> Privacy Policy</h3>
                <button className="text-xs font-bold text-primary hover:text-primary-hover flex items-center gap-1"><Edit size={14}/> Edit</button>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">Defines how the school collects, stores, and protects user data. Required for compliance with data protection laws.</p>
              <div className="bg-card border border-border p-3 rounded text-xs font-mono text-text-secondary h-24 overflow-y-auto">
                Last updated: 01-Jan-2024 (v1.2)<br/>
                We collect personal information such as...
              </div>
              <label className="flex items-center gap-2 cursor-pointer mt-2">
                <input type="checkbox" defaultChecked className="w-4 h-4 accent-primary" />
                <span className="text-sm font-semibold">Require users to accept on next login if updated</span>
              </label>
            </div>

            <div className="flex flex-col gap-4 border border-border rounded-lg p-5 bg-bg-page relative group">
              <div className="flex justify-between items-center border-b border-border pb-2">
                <h3 className="text-sm font-bold text-text-primary uppercase flex items-center gap-1.5"><FileText size={16} /> Terms & Conditions</h3>
                <button className="text-xs font-bold text-primary hover:text-primary-hover flex items-center gap-1"><Edit size={14}/> Edit</button>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">The rules and guidelines users must agree to in order to use the school ERP system.</p>
              <div className="bg-card border border-border p-3 rounded text-xs font-mono text-text-secondary h-24 overflow-y-auto">
                Last updated: 15-Aug-2023 (v1.0)<br/>
                By accessing this system, you agree to...
              </div>
              <label className="flex items-center gap-2 cursor-pointer mt-2">
                <input type="checkbox" defaultChecked className="w-4 h-4 accent-primary" />
                <span className="text-sm font-semibold">Display link on the login page footer</span>
              </label>
            </div>

          </div>
        )}

        {activeSubTab === 'consent' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-6">
              
              <div className="flex flex-col gap-4 border border-border rounded-lg p-5 bg-bg-page">
                <h3 className="text-sm font-bold text-text-primary border-b border-border pb-2 uppercase">Consent Requirements</h3>
                
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" defaultChecked className="w-4 h-4 mt-0.5 accent-primary" />
                  <div className="flex flex-col">
                    <span className="text-sm font-bold">User Consent (Data Usage Notice)</span>
                    <span className="text-xs text-text-secondary">Users must explicitly consent to their data being used for internal analytics and notifications.</span>
                  </div>
                </label>
                
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" defaultChecked className="w-4 h-4 mt-0.5 accent-primary" />
                  <div className="flex flex-col">
                    <span className="text-sm font-bold">Parent Consent (Student Data)</span>
                    <span className="text-xs text-text-secondary">Parents must electronically sign/consent for minor students' data processing during admission.</span>
                  </div>
                </label>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" defaultChecked className="w-4 h-4 mt-0.5 accent-primary" />
                  <div className="flex flex-col">
                    <span className="text-sm font-bold">Cookie Settings (GDPR/CCPA Compliance)</span>
                    <span className="text-xs text-text-secondary">Show a cookie consent banner for users accessing the ERP via browser.</span>
                  </div>
                </label>
              </div>

            </div>
          </div>
        )}

        {activeSubTab === 'history' && (
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center border-b border-border pb-2">
              <h3 className="text-sm font-bold text-text-primary uppercase">Policy Version History</h3>
              <div className="flex items-center gap-1.5 text-xs text-warning bg-warning-bg/50 px-3 py-1.5 rounded border border-warning/30 font-bold">
                <AlertCircle size={14} /> Audit Trail is immutable
              </div>
            </div>
            
            <table className="w-full text-left text-sm whitespace-nowrap border border-border rounded-lg overflow-hidden mt-2">
              <thead className="bg-primary-subtle text-text-secondary uppercase text-[11px] font-semibold">
                <tr>
                  <th className="px-4 py-3 border-b border-border">Version</th>
                  <th className="px-4 py-3 border-b border-border">Document Type</th>
                  <th className="px-4 py-3 border-b border-border">Updated By</th>
                  <th className="px-4 py-3 border-b border-border">Date Published</th>
                  <th className="px-4 py-3 border-b border-border">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr className="hover:bg-bg-page">
                  <td className="px-4 py-3 font-medium text-text-primary">v1.2</td>
                  <td className="px-4 py-3 text-text-primary">Privacy Policy</td>
                  <td className="px-4 py-3 text-text-secondary">Super Admin</td>
                  <td className="px-4 py-3 text-text-secondary">01 Jan 2024, 10:00 AM</td>
                  <td className="px-4 py-3"><button className="text-xs font-bold text-primary hover:underline">View Draft</button></td>
                </tr>
                <tr className="hover:bg-bg-page opacity-70">
                  <td className="px-4 py-3 font-medium text-text-primary">v1.1</td>
                  <td className="px-4 py-3 text-text-primary">Privacy Policy</td>
                  <td className="px-4 py-3 text-text-secondary">Super Admin</td>
                  <td className="px-4 py-3 text-text-secondary">15 Aug 2023, 11:30 AM</td>
                  <td className="px-4 py-3"><button className="text-xs font-bold text-primary hover:underline">View Draft</button></td>
                </tr>
                <tr className="hover:bg-bg-page opacity-70">
                  <td className="px-4 py-3 font-medium text-text-primary">v1.0</td>
                  <td className="px-4 py-3 text-text-primary">Terms & Conditions</td>
                  <td className="px-4 py-3 text-text-secondary">System Auto</td>
                  <td className="px-4 py-3 text-text-secondary">01 Apr 2023, 08:00 AM</td>
                  <td className="px-4 py-3"><button className="text-xs font-bold text-primary hover:underline">View Draft</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

      </div>
    </div>
  );
}
