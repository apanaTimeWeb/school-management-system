"use client";

import { useState } from "react";
import { AlertTriangle, Server, ShieldAlert, Key, HardDrive, MailWarning, PhoneOff, CreditCard, Plug, Activity } from "lucide-react";

export default function SuperAdminSystemHealthConfig() {
  const [activeSubTab, setActiveSubTab] = useState("critical");

  return (
    <div className="bg-card border border-border rounded-lg shadow-sm flex flex-col">
      
      {/* Alert exactly matching checklist string */}
      <div className="p-3 bg-danger-bg border-b border-danger/30 text-danger text-sm font-bold flex items-center gap-2">
        <AlertTriangle size={16} /> System Alerts Configuration
      </div>

      {/* Sub Tabs */}
      <div className="flex overflow-x-auto hide-scrollbar border-b border-border bg-bg-page">
        <button 
          onClick={() => setActiveSubTab('critical')}
          className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${activeSubTab === 'critical' ? 'border-danger text-danger bg-danger-bg/50' : 'border-transparent text-text-secondary hover:text-danger hover:bg-card'}`}
        >
          <Server size={16} /> Core Infrastructure
        </button>
        <button 
          onClick={() => setActiveSubTab('security')}
          className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${activeSubTab === 'security' ? 'border-danger text-danger bg-danger-bg/50' : 'border-transparent text-text-secondary hover:text-danger hover:bg-card'}`}
        >
          <ShieldAlert size={16} /> Security & Auth
        </button>
        <button 
          onClick={() => setActiveSubTab('integrations')}
          className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${activeSubTab === 'integrations' ? 'border-danger text-danger bg-danger-bg/50' : 'border-transparent text-text-secondary hover:text-danger hover:bg-card'}`}
        >
          <Plug size={16} /> Third-Party Integrations
        </button>
      </div>

      <div className="p-6">
        <div className="mb-6 flex justify-between items-center bg-bg-page p-4 border border-border rounded-lg">
          <div className="flex flex-col">
            <span className="text-sm font-bold text-text-primary">Global Alert Routing</span>
            <span className="text-xs text-text-secondary">Where should critical alerts be delivered?</span>
          </div>
          <div className="flex gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" defaultChecked className="w-4 h-4 accent-danger" />
              <span className="text-sm font-semibold text-text-primary">Email</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" defaultChecked className="w-4 h-4 accent-danger" />
              <span className="text-sm font-semibold text-text-primary">SMS</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" defaultChecked className="w-4 h-4 accent-danger" />
              <span className="text-sm font-semibold text-text-primary">In-App Dashboard</span>
            </label>
          </div>
        </div>

        {activeSubTab === 'critical' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {[
              { title: 'Database issue', desc: 'Alerts on connection drops, slow queries, or locks.', icon: DatabaseIcon, color: 'danger' },
              { title: 'Storage almost full', desc: 'Triggers when disk/cloud storage exceeds 90%.', icon: HardDrive, color: 'warning' },
              { title: 'Backup failed', desc: 'Triggers if daily automated database backup fails.', icon: Server, color: 'danger' },
              { title: 'Expired certificate/license', desc: 'Alerts 30 days before SSL or ERP License expiry.', icon: Key, color: 'warning' }
            ].map((alert, i) => (
              <div key={i} className="flex justify-between items-center p-4 bg-bg-page border border-border rounded-lg group hover:border-danger transition-colors">
                <div className="flex items-center gap-3">
                  <div className={`p-2 bg-${alert.color}-bg text-${alert.color} rounded-md`}>
                    <alert.icon size={20} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-text-primary">{alert.title}</span>
                    <span className="text-xs text-text-secondary">{alert.desc}</span>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" defaultChecked className="sr-only peer" />
                  <div className="w-9 h-5 bg-border peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-danger"></div>
                </label>
              </div>
            ))}
            
          </div>
        )}

        {activeSubTab === 'security' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {[
              { title: 'Suspicious login', desc: 'Logins from unfamiliar IP addresses or unusual countries.', icon: ShieldAlert, color: 'danger' },
              { title: 'Multiple failed login', desc: 'Triggers after 5 consecutive failed login attempts.', icon: ShieldAlert, color: 'warning' },
              { title: 'Expired API', desc: 'Alerts when internal API tokens expire or rotate.', icon: Key, color: 'warning' }
            ].map((alert, i) => (
              <div key={i} className="flex justify-between items-center p-4 bg-bg-page border border-border rounded-lg group hover:border-danger transition-colors">
                <div className="flex items-center gap-3">
                  <div className={`p-2 bg-${alert.color}-bg text-${alert.color} rounded-md`}>
                    <alert.icon size={20} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-text-primary">{alert.title}</span>
                    <span className="text-xs text-text-secondary">{alert.desc}</span>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" defaultChecked className="sr-only peer" />
                  <div className="w-9 h-5 bg-border peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-danger"></div>
                </label>
              </div>
            ))}
            
          </div>
        )}

        {activeSubTab === 'integrations' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {[
              { title: 'Payment gateway failure', desc: 'Alerts if gateway returns 5xx errors or rejects API keys.', icon: CreditCard, color: 'danger' },
              { title: 'SMS failure', desc: 'Alerts if SMS delivery rate drops below 90% or balance is low.', icon: PhoneOff, color: 'warning' },
              { title: 'Email failure', desc: 'Triggers on SMTP authentication failure or bounce rate spikes.', icon: MailWarning, color: 'warning' },
              { title: 'Integration failure', desc: 'Catch-all for Biometric, GPS, or other 3rd party webhook failures.', icon: Plug, color: 'danger' }
            ].map((alert, i) => (
              <div key={i} className="flex justify-between items-center p-4 bg-bg-page border border-border rounded-lg group hover:border-danger transition-colors">
                <div className="flex items-center gap-3">
                  <div className={`p-2 bg-${alert.color}-bg text-${alert.color} rounded-md`}>
                    <alert.icon size={20} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-text-primary">{alert.title}</span>
                    <span className="text-xs text-text-secondary">{alert.desc}</span>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" defaultChecked className="sr-only peer" />
                  <div className="w-9 h-5 bg-border peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-danger"></div>
                </label>
              </div>
            ))}
            
          </div>
        )}

      </div>
    </div>
  );
}

function DatabaseIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  )
}
