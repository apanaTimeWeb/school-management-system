"use client";

import { useState } from "react";
import { Wrench, ShieldAlert, CheckCircle2, History, AlertTriangle, Users, Clock, Edit } from "lucide-react";

export default function SuperAdminMaintenanceModeConfig() {
  const [activeSubTab, setActiveSubTab] = useState("control");
  const [isMaintenanceOn, setIsMaintenanceOn] = useState(false);

  return (
    <div className="bg-card border border-border rounded-lg shadow-sm flex flex-col">
      
      {/* Alert exactly matching checklist string */}
      <div className={`p-3 border-b text-sm font-bold flex items-center justify-between ${isMaintenanceOn ? 'bg-danger-bg border-danger/30 text-danger' : 'bg-warning-bg border-warning/30 text-warning'}`}>
        <div className="flex items-center gap-2">
          <Wrench size={16} /> 
          {isMaintenanceOn ? 'MAINTENANCE MODE IS ACTIVATED' : 'Maintenance Mode Settings'}
        </div>
        <label className="flex items-center gap-2 cursor-pointer bg-white/50 px-2 py-1 rounded">
          <span className="text-xs uppercase">Toggle Master</span>
          <input 
            type="checkbox" 
            checked={isMaintenanceOn}
            onChange={(e) => setIsMaintenanceOn(e.target.checked)}
            className={`w-4 h-4 ${isMaintenanceOn ? 'accent-danger' : 'accent-warning'}`} 
          />
        </label>
      </div>

      {/* Sub Tabs */}
      <div className="flex overflow-x-auto hide-scrollbar border-b border-border bg-bg-page">
        <button 
          onClick={() => setActiveSubTab('control')}
          className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${activeSubTab === 'control' ? 'border-primary text-primary bg-primary/5' : 'border-transparent text-text-secondary hover:text-primary hover:bg-card'}`}
        >
          <ShieldAlert size={16} /> Controls & Rules
        </button>
        <button 
          onClick={() => setActiveSubTab('schedule')}
          className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${activeSubTab === 'schedule' ? 'border-primary text-primary bg-primary/5' : 'border-transparent text-text-secondary hover:text-primary hover:bg-card'}`}
        >
          <Clock size={16} /> Schedule Maintenance
        </button>
        <button 
          onClick={() => setActiveSubTab('history')}
          className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${activeSubTab === 'history' ? 'border-primary text-primary bg-primary/5' : 'border-transparent text-text-secondary hover:text-primary hover:bg-card'}`}
        >
          <History size={16} /> Maintenance History
        </button>
      </div>

      <div className="p-6">
        
        {activeSubTab === 'control' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Maintenance Message */}
            <div className="flex flex-col gap-4 border border-border rounded-lg p-5 bg-bg-page relative overflow-hidden">
              {isMaintenanceOn && <div className="absolute top-0 left-0 w-full h-1 bg-danger"></div>}
              <div className="flex justify-between items-center">
                <h3 className="text-sm font-bold text-text-primary uppercase flex items-center gap-1.5"><AlertTriangle size={16} className={isMaintenanceOn ? 'text-danger' : 'text-warning'} /> Custom maintenance message</h3>
                <button className="text-xs font-bold text-primary hover:text-primary-hover flex items-center gap-1"><Edit size={14} /> Edit Message</button>
              </div>
              <div className="p-4 border border-dashed border-border rounded bg-card text-center flex flex-col gap-2">
                <Wrench size={32} className="mx-auto text-text-secondary opacity-50" />
                <h2 className="text-lg font-bold text-text-primary">We'll be back soon!</h2>
                <p className="text-sm text-text-secondary">Sorry for the inconvenience but we're performing some maintenance at the moment. If you need to you can always contact us, otherwise we'll be back online shortly!</p>
                <p className="text-xs font-bold mt-2 text-primary">— The Tech Team</p>
              </div>
              <p className="text-[10px] text-text-secondary">This message will be displayed to all normal users attempting to log in or access the ERP when Maintenance Mode is ON.</p>
            </div>

            {/* Allowed Admin Users */}
            <div className="flex flex-col gap-4 border border-border rounded-lg p-5 bg-bg-page">
              <div className="flex justify-between items-center">
                <h3 className="text-sm font-bold text-text-primary uppercase flex items-center gap-1.5"><Users size={16} /> Allowed Admin Users</h3>
                <button className="text-xs font-bold text-primary hover:text-primary-hover flex items-center gap-1">Manage Exceptions</button>
              </div>
              <p className="text-xs text-text-secondary mb-2">When Maintenance Mode is ON, only the following roles/users can bypass the block screen and access the system for testing:</p>
              
              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-3 p-2 border border-primary/30 bg-primary/5 rounded-md cursor-not-allowed">
                  <input type="checkbox" checked disabled className="w-4 h-4 accent-primary" />
                  <span className="text-sm font-bold text-text-primary">Super Admin (Always Allowed)</span>
                </label>
                <label className="flex items-center gap-3 p-2 border border-border bg-card hover:border-primary transition-colors rounded-md cursor-pointer">
                  <input type="checkbox" defaultChecked className="w-4 h-4 accent-primary" />
                  <span className="text-sm font-bold text-text-primary">System Admin</span>
                </label>
                <label className="flex items-center gap-3 p-2 border border-border bg-card hover:border-primary transition-colors rounded-md cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 accent-primary" />
                  <span className="text-sm font-bold text-text-primary">IT Support Staff</span>
                </label>
              </div>
            </div>

          </div>
        )}

        {activeSubTab === 'schedule' && (
          <div className="max-w-2xl flex flex-col gap-4 border border-border rounded-lg p-5 bg-bg-page">
            <h3 className="text-sm font-bold text-text-primary uppercase flex items-center gap-1.5"><Clock size={16} /> Schedule Maintenance</h3>
            <p className="text-xs text-text-secondary">Automatically activate maintenance mode at a specific time (e.g., during night hours or weekends).</p>
            
            <div className="grid grid-cols-2 gap-4 mt-2">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-text-secondary uppercase">Start Time</label>
                <input type="datetime-local" className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-text-secondary uppercase">End Time (Auto-Disable)</label>
                <input type="datetime-local" className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" />
              </div>
            </div>
            
            <label className="flex items-center gap-2 mt-2 cursor-pointer w-fit">
              <input type="checkbox" defaultChecked className="w-4 h-4 accent-primary" />
              <span className="text-sm font-semibold">Send auto-announcement to All Users 24 hours before start</span>
            </label>

            <button className="px-5 py-2.5 mt-2 bg-primary text-white font-bold rounded-lg hover:bg-primary-hover transition-colors shadow-sm w-fit">
              Save Schedule
            </button>
          </div>
        )}

        {activeSubTab === 'history' && (
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-bold text-text-primary uppercase border-b border-border pb-2">Maintenance History Log</h3>
            <table className="w-full text-left text-sm whitespace-nowrap border border-border rounded-lg overflow-hidden mt-2">
              <thead className="bg-primary-subtle text-text-secondary uppercase text-[11px] font-semibold">
                <tr>
                  <th className="px-4 py-3 border-b border-border">Date & Time</th>
                  <th className="px-4 py-3 border-b border-border">Duration</th>
                  <th className="px-4 py-3 border-b border-border">Activated By</th>
                  <th className="px-4 py-3 border-b border-border">Reason / Type</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr className="hover:bg-bg-page">
                  <td className="px-4 py-3 font-medium text-text-primary">15 Aug 2024, 02:00 AM</td>
                  <td className="px-4 py-3 text-text-secondary">3 hours 45 mins</td>
                  <td className="px-4 py-3 text-text-primary font-semibold">Auto-Scheduled</td>
                  <td className="px-4 py-3"><span className="text-[10px] bg-info-bg text-info px-2 py-0.5 rounded font-bold">Version Upgrade v2.1</span></td>
                </tr>
                <tr className="hover:bg-bg-page">
                  <td className="px-4 py-3 font-medium text-text-primary">10 Jul 2024, 11:30 PM</td>
                  <td className="px-4 py-3 text-text-secondary">1 hour 15 mins</td>
                  <td className="px-4 py-3 text-text-primary font-semibold">Super Admin (Manual)</td>
                  <td className="px-4 py-3"><span className="text-[10px] bg-warning-bg text-warning px-2 py-0.5 rounded font-bold">Database Optimization</span></td>
                </tr>
                <tr className="hover:bg-bg-page">
                  <td className="px-4 py-3 font-medium text-text-primary">05 Jun 2024, 08:00 AM</td>
                  <td className="px-4 py-3 text-text-secondary">45 mins</td>
                  <td className="px-4 py-3 text-danger font-semibold flex items-center gap-1"><AlertTriangle size={12}/> Emergency Alert</td>
                  <td className="px-4 py-3"><span className="text-[10px] bg-danger-bg text-danger px-2 py-0.5 rounded font-bold">Security Patching</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

      </div>
    </div>
  );
}
