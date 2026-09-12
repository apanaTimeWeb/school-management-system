"use client";

import { useState } from "react";
import { BarChart3, Users, LayoutDashboard, Wallet, Activity, ArrowUpRight, Download } from "lucide-react";

export default function SuperAdminReportsAnalyticsConfig() {
  const [activeSubTab, setActiveSubTab] = useState("users");

  return (
    <div className="bg-card border border-border rounded-lg shadow-sm flex flex-col">
      
      {/* Alert exactly matching checklist string */}
      <div className="p-3 bg-info-bg border-b border-info/30 text-info text-sm font-bold flex items-center gap-2">
        <BarChart3 size={16} /> Super Admin के लिए system-wide reports:
      </div>

      {/* Sub Tabs */}
      <div className="flex overflow-x-auto hide-scrollbar border-b border-border bg-bg-page">
        <button 
          onClick={() => setActiveSubTab('users')}
          className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${activeSubTab === 'users' ? 'border-primary text-primary bg-primary/5' : 'border-transparent text-text-secondary hover:text-primary hover:bg-card'}`}
        >
          <Users size={16} /> User & Staff Reports
        </button>
        <button 
          onClick={() => setActiveSubTab('system')}
          className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${activeSubTab === 'system' ? 'border-primary text-primary bg-primary/5' : 'border-transparent text-text-secondary hover:text-primary hover:bg-card'}`}
        >
          <LayoutDashboard size={16} /> System & Module Usage
        </button>
        <button 
          onClick={() => setActiveSubTab('finance')}
          className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${activeSubTab === 'finance' ? 'border-primary text-primary bg-primary/5' : 'border-transparent text-text-secondary hover:text-primary hover:bg-card'}`}
        >
          <Wallet size={16} /> Finance & Admissions
        </button>
        <button 
          onClick={() => setActiveSubTab('health')}
          className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${activeSubTab === 'health' ? 'border-primary text-primary bg-primary/5' : 'border-transparent text-text-secondary hover:text-primary hover:bg-card'}`}
        >
          <Activity size={16} /> Health & Notifications
        </button>
      </div>

      <div className="p-6">
        
        {activeSubTab === 'users' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-bold text-text-primary uppercase border-b border-border pb-2">User Reports</h3>
              <div className="flex flex-col gap-2">
                {[
                  { title: 'User report', desc: 'Detailed list of all registered users across roles.' },
                  { title: 'Login report', desc: 'Active sessions and historical login data.' },
                  { title: 'Activity report', desc: 'Audit trails of user actions.' }
                ].map((rep, i) => (
                  <div key={i} className="flex justify-between items-center p-4 bg-bg-page border border-border rounded-lg hover:border-primary transition-colors cursor-pointer group">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-text-primary group-hover:text-primary transition-colors">{rep.title}</span>
                      <span className="text-xs text-text-secondary">{rep.desc}</span>
                    </div>
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="text-info hover:text-info/80" title="View"><ArrowUpRight size={16} /></button>
                      <button className="text-primary hover:text-primary-hover" title="Download CSV"><Download size={16} /></button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-bold text-text-primary uppercase border-b border-border pb-2">Demographic Reports</h3>
              <div className="flex flex-col gap-2">
                {[
                  { title: 'Student count', desc: 'Branch-wise and class-wise student statistics.' },
                  { title: 'Staff count', desc: 'Department-wise teaching and non-teaching staff.' },
                  { title: 'Attendance summary', desc: 'Monthly aggregate attendance of students and staff.' }
                ].map((rep, i) => (
                  <div key={i} className="flex justify-between items-center p-4 bg-bg-page border border-border rounded-lg hover:border-primary transition-colors cursor-pointer group">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-text-primary group-hover:text-primary transition-colors">{rep.title}</span>
                      <span className="text-xs text-text-secondary">{rep.desc}</span>
                    </div>
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="text-info hover:text-info/80" title="View"><ArrowUpRight size={16} /></button>
                      <button className="text-primary hover:text-primary-hover" title="Download CSV"><Download size={16} /></button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeSubTab === 'system' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-bold text-text-primary uppercase border-b border-border pb-2">System Utilization</h3>
              <div className="flex flex-col gap-2">
                {[
                  { title: 'Branch report', desc: 'Comparative analytics across all school branches.' },
                  { title: 'Module usage', desc: 'Analytics on which ERP modules are used most frequently.' }
                ].map((rep, i) => (
                  <div key={i} className="flex justify-between items-center p-4 bg-bg-page border border-border rounded-lg hover:border-primary transition-colors cursor-pointer group">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-text-primary group-hover:text-primary transition-colors">{rep.title}</span>
                      <span className="text-xs text-text-secondary">{rep.desc}</span>
                    </div>
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="text-info hover:text-info/80" title="View"><ArrowUpRight size={16} /></button>
                      <button className="text-primary hover:text-primary-hover" title="Download CSV"><Download size={16} /></button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeSubTab === 'finance' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-bold text-text-primary uppercase border-b border-border pb-2">Financial Reports</h3>
              <div className="flex flex-col gap-2">
                {[
                  { title: 'Fee summary', desc: 'Collection, dues, and discounted fee totals.' },
                  { title: 'Payment report', desc: 'Gateway transactions, success rates, and refunds.' },
                  { title: 'Admission summary', desc: 'New enrollments and revenue forecasting.' }
                ].map((rep, i) => (
                  <div key={i} className="flex justify-between items-center p-4 bg-bg-page border border-border rounded-lg hover:border-primary transition-colors cursor-pointer group">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-text-primary group-hover:text-primary transition-colors">{rep.title}</span>
                      <span className="text-xs text-text-secondary">{rep.desc}</span>
                    </div>
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="text-info hover:text-info/80" title="View"><ArrowUpRight size={16} /></button>
                      <button className="text-primary hover:text-primary-hover" title="Download CSV"><Download size={16} /></button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeSubTab === 'health' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-bold text-text-primary uppercase border-b border-border pb-2">Health & Notifications</h3>
              <div className="flex flex-col gap-2">
                {[
                  { title: 'System health', desc: 'Server uptime, API latency, and database performance.' },
                  { title: 'Notification report', desc: 'Delivery rates for SMS, Email, and Push notifications.' }
                ].map((rep, i) => (
                  <div key={i} className="flex justify-between items-center p-4 bg-bg-page border border-border rounded-lg hover:border-primary transition-colors cursor-pointer group">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-text-primary group-hover:text-primary transition-colors">{rep.title}</span>
                      <span className="text-xs text-text-secondary">{rep.desc}</span>
                    </div>
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="text-info hover:text-info/80" title="View"><ArrowUpRight size={16} /></button>
                      <button className="text-primary hover:text-primary-hover" title="Download CSV"><Download size={16} /></button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
