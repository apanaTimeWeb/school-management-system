"use client";

import { useState } from "react";
import { Zap, BellRing, Settings, CalendarClock, History, Plus, Edit, PauseCircle, PlayCircle, Filter } from "lucide-react";

export default function SuperAdminAutomationRulesConfig() {
  const [activeSubTab, setActiveSubTab] = useState("rules");

  const rulesList = [
    { name: "Fee Due Reminder", trigger: "Days before due date", condition: "Fee Status = Unpaid", action: "Send SMS & Email", schedule: "3 Days Before (09:00 AM)", active: true, type: "notification" },
    { name: "Birthday Notification", trigger: "Date matches DOB", condition: "Role = Student/Staff", action: "Send SMS", schedule: "Daily at 08:00 AM", active: true, type: "notification" },
    { name: "Attendance Absence Alert", trigger: "Marked Absent", condition: "Unexcused Absence", action: "Send SMS to Parents", schedule: "Immediate", active: true, type: "notification" },
    { name: "Exam Reminder", trigger: "Days before Exam Date", condition: "Student Enrolled in Exam", action: "Send App Notification", schedule: "1 Day Before", active: false, type: "notification" },
    { name: "Result Published Notification", trigger: "Result Status changed to Published", condition: "None", action: "Send Email & App Notification", schedule: "Immediate", active: true, type: "notification" },
    { name: "Leave Approval/Rejection Alert", trigger: "Leave Status Updated", condition: "Status = Approved/Rejected", action: "Send Email to Staff", schedule: "Immediate", active: true, type: "notification" },
    { name: "Certificate Expiry Reminder", trigger: "Days before Expiry Date", condition: "Document Type = License/Certificate", action: "Email to Admin & Staff", schedule: "30 Days Before", active: true, type: "notification" },
    { name: "Automated Database Backup", trigger: "Time Schedule", condition: "None", action: "Backup DB & Upload to S3", schedule: "Daily at 02:00 AM", active: true, type: "system" },
    { name: "Daily Attendance Report", trigger: "Time Schedule", condition: "None", action: "Email PDF Report to Principal", schedule: "Daily at 06:00 PM", active: true, type: "report" },
    { name: "Monthly Financial Report", trigger: "Last Day of Month", condition: "None", action: "Email PDF to Finance Head", schedule: "Monthly at 11:30 PM", active: true, type: "report" },
  ];

  return (
    <div className="bg-card border border-border rounded-lg shadow-sm flex flex-col">
      
      {/* Alert exactly matching checklist string */}
      <div className="p-3 bg-info-bg border-b border-info/30 text-info text-sm font-bold flex items-center gap-2">
        <Zap size={16} /> ERP में repetitive काम automatically हो सके:
      </div>

      {/* Sub Tabs */}
      <div className="flex overflow-x-auto hide-scrollbar border-b border-border bg-bg-page">
        <button 
          onClick={() => setActiveSubTab('rules')}
          className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${activeSubTab === 'rules' ? 'border-primary text-primary bg-primary/5' : 'border-transparent text-text-secondary hover:text-primary hover:bg-card'}`}
        >
          <Settings size={16} /> Manage Automation Rules
        </button>
        <button 
          onClick={() => setActiveSubTab('logs')}
          className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${activeSubTab === 'logs' ? 'border-primary text-primary bg-primary/5' : 'border-transparent text-text-secondary hover:text-primary hover:bg-card'}`}
        >
          <History size={16} /> Execution Logs
        </button>
      </div>

      <div className="p-6">
        
        {activeSubTab === 'rules' && (
          <div className="flex flex-col gap-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2 text-sm text-text-secondary">
                <Filter size={16} /> <span>Filter by: </span>
                <select className="bg-bg-page border border-border rounded-md px-2 py-1 text-xs outline-none focus:border-primary">
                  <option>All Types</option>
                  <option>Notifications</option>
                  <option>Reports</option>
                  <option>System</option>
                </select>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 bg-primary text-black text-xs font-bold rounded-md hover:bg-primary-hover transition-colors shadow-sm">
                <Plus size={14} /> Create New Rule
              </button>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
              {rulesList.map((rule, i) => (
                <div key={i} className="flex flex-col gap-3 p-4 bg-bg-page border border-border rounded-xl hover:border-primary transition-colors relative">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-2">
                      <Zap size={16} className={rule.active ? 'text-primary' : 'text-text-secondary'} />
                      <h4 className={`text-sm font-bold ${rule.active ? 'text-text-primary' : 'text-text-secondary'}`}>{rule.name}</h4>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" defaultChecked={rule.active} className="sr-only peer" />
                      <div className="w-8 h-4 bg-border peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-success"></div>
                    </label>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 mt-1">
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] uppercase font-bold text-text-secondary">Trigger</span>
                      <span className="text-xs font-semibold text-text-primary bg-card border border-border px-2 py-1 rounded">{rule.trigger}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] uppercase font-bold text-text-secondary">Condition</span>
                      <span className="text-xs font-semibold text-text-primary bg-card border border-border px-2 py-1 rounded truncate" title={rule.condition}>{rule.condition}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] uppercase font-bold text-text-secondary">Action</span>
                      <span className="text-xs font-semibold text-text-primary bg-card border border-border px-2 py-1 rounded truncate" title={rule.action}>{rule.action}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] uppercase font-bold text-text-secondary">Schedule / Timing</span>
                      <span className="text-xs font-semibold text-text-primary bg-card border border-border px-2 py-1 rounded flex items-center gap-1"><CalendarClock size={12}/> {rule.schedule}</span>
                    </div>
                  </div>

                  <div className="flex justify-end pt-3 border-t border-border mt-1">
                    <button className="flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary-hover transition-colors">
                      <Edit size={14} /> Edit Rule Configuration
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSubTab === 'logs' && (
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold text-text-primary uppercase border-b border-border pb-2">Automation Execution Logs</h3>
            <table className="w-full text-left text-sm whitespace-nowrap border border-border rounded-lg overflow-hidden mt-2">
              <thead className="bg-primary-subtle text-text-secondary uppercase text-[11px] font-semibold">
                <tr>
                  <th className="px-4 py-3 border-b border-border">Executed At</th>
                  <th className="px-4 py-3 border-b border-border">Rule Name</th>
                  <th className="px-4 py-3 border-b border-border">Trigger Source</th>
                  <th className="px-4 py-3 border-b border-border">Status</th>
                  <th className="px-4 py-3 border-b border-border text-right">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr className="hover:bg-bg-page">
                  <td className="px-4 py-3 font-medium text-text-primary">Today, 08:00 AM</td>
                  <td className="px-4 py-3 text-text-primary">Birthday Notification</td>
                  <td className="px-4 py-3 text-text-secondary">Scheduler (Cron)</td>
                  <td className="px-4 py-3"><span className="text-[10px] bg-success-bg text-success px-2 py-0.5 rounded font-bold">Success</span></td>
                  <td className="px-4 py-3 text-right text-xs text-text-secondary">14 SMS Sent</td>
                </tr>
                <tr className="hover:bg-bg-page">
                  <td className="px-4 py-3 font-medium text-text-primary">Today, 02:00 AM</td>
                  <td className="px-4 py-3 text-text-primary">Automated Database Backup</td>
                  <td className="px-4 py-3 text-text-secondary">Scheduler (Cron)</td>
                  <td className="px-4 py-3"><span className="text-[10px] bg-success-bg text-success px-2 py-0.5 rounded font-bold">Success</span></td>
                  <td className="px-4 py-3 text-right text-xs text-text-secondary">2.4 GB Uploaded to S3</td>
                </tr>
                <tr className="hover:bg-bg-page">
                  <td className="px-4 py-3 font-medium text-text-primary">Yesterday, 06:00 PM</td>
                  <td className="px-4 py-3 text-text-primary">Daily Attendance Report</td>
                  <td className="px-4 py-3 text-text-secondary">Scheduler (Cron)</td>
                  <td className="px-4 py-3"><span className="text-[10px] bg-danger-bg text-danger px-2 py-0.5 rounded font-bold">Failed</span></td>
                  <td className="px-4 py-3 text-right text-xs text-danger font-bold">SMTP Connection Timeout</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

      </div>
    </div>
  );
}
