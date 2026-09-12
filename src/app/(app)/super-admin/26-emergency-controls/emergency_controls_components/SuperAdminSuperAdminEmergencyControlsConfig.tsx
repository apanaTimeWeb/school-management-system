"use client";

import { useState } from "react";
import { AlertTriangle, Power, LogOut, ShieldAlert, CreditCard, Plug, Wrench, Megaphone, Smartphone, UserX } from "lucide-react";

export default function SuperAdminSuperAdminEmergencyControlsConfig() {
  const [activeSubTab, setActiveSubTab] = useState("actions");

  return (
    <div className="bg-card border border-danger/50 rounded-lg shadow-sm flex flex-col mt-4">
      
      {/* Alert exactly matching checklist string */}
      <div className="p-3 bg-danger text-white text-sm font-bold flex items-center gap-2 rounded-t-md">
        <AlertTriangle size={18} /> 🔐 Super Admin Emergency Controls (Sensitive & Powerful)
      </div>

      {/* Sub Tabs */}
      <div className="flex overflow-x-auto hide-scrollbar border-b border-border bg-bg-page">
        <button 
          onClick={() => setActiveSubTab('actions')}
          className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${activeSubTab === 'actions' ? 'border-danger text-danger bg-danger-bg/50' : 'border-transparent text-text-secondary hover:text-danger hover:bg-card'}`}
        >
          <Power size={16} /> Immediate Actions
        </button>
        <button 
          onClick={() => setActiveSubTab('access')}
          className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${activeSubTab === 'access' ? 'border-danger text-danger bg-danger-bg/50' : 'border-transparent text-text-secondary hover:text-danger hover:bg-card'}`}
        >
          <ShieldAlert size={16} /> Access & Block Controls
        </button>
      </div>

      <div className="p-6">
        
        {activeSubTab === 'actions' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="flex flex-col gap-3 p-5 border border-danger/30 rounded-xl bg-danger-bg/10 hover:border-danger transition-colors cursor-pointer group">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-danger text-white rounded-lg group-hover:scale-105 transition-transform"><LogOut size={24} /></div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-danger">Force Logout All</span>
                  <span className="text-[10px] text-text-secondary">Except current session</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 p-5 border border-danger/30 rounded-xl bg-danger-bg/10 hover:border-danger transition-colors cursor-pointer group">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-danger text-white rounded-lg group-hover:scale-105 transition-transform"><Smartphone size={24} /></div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-danger">Revoke All Sessions</span>
                  <span className="text-[10px] text-text-secondary">Invalidates all active JWT tokens</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 p-5 border border-warning/50 rounded-xl bg-warning-bg/30 hover:border-warning transition-colors cursor-pointer group">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-warning text-white rounded-lg group-hover:scale-105 transition-transform"><Wrench size={24} /></div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-warning-strong">Activate Maintenance</span>
                  <span className="text-[10px] text-text-secondary">Blocks normal users from login</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 p-5 border border-warning/50 rounded-xl bg-warning-bg/30 hover:border-warning transition-colors cursor-pointer group">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-warning text-white rounded-lg group-hover:scale-105 transition-transform"><Megaphone size={24} /></div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-warning-strong">Emergency Announcement</span>
                  <span className="text-[10px] text-text-secondary">Force display on all screens</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 p-5 border border-border rounded-xl bg-bg-page hover:border-primary transition-colors cursor-pointer group">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-sidebar text-white rounded-lg group-hover:scale-105 transition-transform"><CreditCard size={24} /></div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-text-primary">Disable Payments</span>
                  <span className="text-[10px] text-text-secondary">Stops new online transactions</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 p-5 border border-border rounded-xl bg-bg-page hover:border-primary transition-colors cursor-pointer group">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-sidebar text-white rounded-lg group-hover:scale-105 transition-transform"><Plug size={24} /></div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-text-primary">Disable External APIs</span>
                  <span className="text-[10px] text-text-secondary">Halts SMS, WhatsApp, Webhooks</span>
                </div>
              </div>
            </div>

          </div>
        )}

        {activeSubTab === 'access' && (
          <div className="flex flex-col gap-6 max-w-3xl">
            
            <div className="flex flex-col gap-4 border border-border p-5 rounded-xl bg-bg-page">
              <h3 className="text-sm font-bold text-text-primary uppercase border-b border-border pb-2 flex items-center gap-1.5"><UserX size={16}/> Target Specific Blocks</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-text-secondary uppercase">Disable Specific User</label>
                  <div className="flex gap-2">
                    <input type="text" placeholder="Enter User ID or Email" className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-danger outline-none flex-1" />
                    <button className="bg-danger text-white px-3 py-2 rounded font-bold text-xs hover:bg-danger/80">Disable</button>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-text-secondary uppercase">Disable Specific Module</label>
                  <div className="flex gap-2">
                    <select className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-danger outline-none flex-1">
                      <option>Select Module...</option>
                      <option>Library</option>
                      <option>Transport</option>
                      <option>Finance</option>
                    </select>
                    <button className="bg-danger text-white px-3 py-2 rounded font-bold text-xs hover:bg-danger/80">Disable</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 border border-border p-5 rounded-xl bg-bg-page">
              <h3 className="text-sm font-bold text-text-primary uppercase border-b border-border pb-2 flex items-center gap-1.5"><ShieldAlert size={16}/> Security Locks</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-text-secondary uppercase">Block Suspicious IP / Device</label>
                  <div className="flex gap-2">
                    <input type="text" placeholder="Enter IP Address (e.g. 192.168.1.5)" className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-danger outline-none flex-1" />
                    <button className="bg-danger text-white px-3 py-2 rounded font-bold text-xs hover:bg-danger/80">Block</button>
                  </div>
                </div>

                <div className="flex flex-col gap-3 justify-center pt-5">
                  <button className="w-full flex justify-center items-center gap-2 bg-danger text-white px-4 py-2.5 rounded-lg font-bold text-sm hover:bg-danger/80 transition-colors shadow-sm">
                    <ShieldAlert size={16}/> Lock System Login (Panic Button)
                  </button>
                  <span className="text-[10px] text-text-secondary text-center">Instantly blocks all new login attempts for everyone except Super Admin.</span>
                </div>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
