"use client";

import React, { useState } from 'react';
import { Edit3, CheckSquare, Bell, AlertTriangle } from 'lucide-react';
import clsx from 'clsx';

export default function AttendanceOperations() {
  const [activeTab, setActiveTab] = useState('correction');
  const [requests, setRequests] = useState([{ id: 1, name: 'Aarav Patel (Class X - A)', date: 'Oct 14', reason: 'Marked absent but was present in school (Medical room)', status: 'pending' }]);
  const [approvals, setApprovals] = useState([{ id: 1, class: 'Class X - A', teacher: 'Mr. John Doe', stats: { p: 45, a: 5 }, status: 'pending' }]);
  const [alerts, setAlerts] = useState([{ id: 1, name: 'Vikram Singh (Class X - A)', attendance: 62, status: 'warning' }]);

  const handleAction = (e: React.MouseEvent<HTMLButtonElement>, actionText: string) => {
    const btn = e.currentTarget;
    const originalText = btn.innerText;
    btn.innerText = actionText;
    btn.disabled = true;
    btn.classList.add("opacity-50");
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 h-full min-h-[500px] fade-in">
      <div className="w-full md:w-64 bg-card border border-border rounded-xl shadow-sm flex flex-col p-2 h-fit shrink-0">
        <button onClick={() => setActiveTab('correction')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition mb-1", activeTab === 'correction' ? 'bg-primary/10 text-primary' : 'text-text-secondary hover:bg-bg-page')}>
          <Edit3 size={18} /> Attendance Correction
        </button>
        <button onClick={() => setActiveTab('approval')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition mb-1", activeTab === 'approval' ? 'bg-info/10 text-info' : 'text-text-secondary hover:bg-bg-page')}>
          <CheckSquare size={18} /> Attendance Approval
        </button>
        <button onClick={() => setActiveTab('notify')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition mb-1", activeTab === 'notify' ? 'bg-success/10 text-success' : 'text-text-secondary hover:bg-bg-page')}>
          <Bell size={18} /> Parent Notifications
        </button>
        <button onClick={() => setActiveTab('alerts')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition", activeTab === 'alerts' ? 'bg-danger/10 text-danger' : 'text-text-secondary hover:bg-bg-page')}>
          <AlertTriangle size={18} /> Low Attend. Alerts
        </button>
      </div>

      <div className="flex-1 bg-card border border-border rounded-xl shadow-sm p-6 overflow-y-auto">
        
        {activeTab === 'correction' && (
          <div className="flex flex-col gap-6 fade-in">
            <h2 className="text-xl font-bold text-text-primary border-b border-border pb-2">Attendance Correction Request</h2>
            <div className="flex flex-col gap-3 mt-2">
              {requests.map(req => (
                <div key={req.id} className="bg-bg-page border border-border p-4 rounded-lg flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-sm text-text-primary">{req.name}</span>
                    <span className="bg-warning-bg text-warning text-xs font-bold px-2 py-0.5 rounded">Pending Review</span>
                  </div>
                  <p className="text-sm text-text-secondary">Requested correction for {req.date}: "{req.reason}"</p>
                  <div className="flex gap-2 mt-2 pt-2 border-t border-border">
                    <button onClick={(e) => { handleAction(e, "Approved"); setRequests(requests.map(r => r.id === req.id ? {...r, status: 'approved'} : r)) }} className="text-xs bg-success text-white px-4 py-1.5 rounded font-bold shadow-sm transition">Approve & Correct</button>
                    <button onClick={(e) => { handleAction(e, "Rejected"); setRequests(requests.map(r => r.id === req.id ? {...r, status: 'rejected'} : r)) }} className="text-xs bg-danger-bg text-danger border border-danger/30 px-4 py-1.5 rounded font-bold transition">Reject</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'approval' && (
          <div className="flex flex-col gap-6 fade-in">
            <h2 className="text-xl font-bold text-text-primary border-b border-border pb-2">Final Attendance Approval</h2>
            <p className="text-sm text-text-secondary mb-2">Class teachers have submitted daily registers. Principal/Admin must approve to lock the records for the day.</p>
            
            <table className="w-full text-left border-collapse border border-border rounded-lg overflow-hidden mt-2">
              <thead className="bg-bg-page">
                <tr>
                  <th className="p-3 text-xs font-bold text-text-secondary uppercase">Class</th>
                  <th className="p-3 text-xs font-bold text-text-secondary uppercase">Submitted By</th>
                  <th className="p-3 text-xs font-bold text-text-secondary uppercase">Stats</th>
                  <th className="p-3 text-xs font-bold text-text-secondary uppercase text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {approvals.map(app => (
                  <tr key={app.id} className="border-t border-border bg-card">
                    <td className="p-3 font-semibold text-sm">{app.class}</td>
                    <td className="p-3 text-sm">{app.teacher}</td>
                    <td className="p-3 text-sm"><span className="text-success font-bold">{app.stats.p} P</span> | <span className="text-danger font-bold">{app.stats.a} A</span></td>
                    <td className="p-3 text-right">
                      <button onClick={(e) => handleAction(e, "Locked")} className="text-xs bg-primary text-black px-4 py-1.5 rounded font-bold shadow-sm transition min-w-[100px]">Approve & Lock</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'notify' && (
          <div className="flex flex-col gap-6 fade-in">
            <h2 className="text-xl font-bold text-text-primary border-b border-border pb-2">Parent Attendance Notification</h2>
            <div className="bg-bg-page border border-border p-5 rounded-lg max-w-xl">
              <p className="text-sm text-text-secondary mb-4">Automatically send SMS/App notifications to parents of absent students once the attendance register is locked.</p>
              
              <div className="flex flex-col gap-4">
                <label className="flex items-center gap-3 bg-card p-3 border border-border rounded shadow-sm cursor-pointer hover:bg-bg-page transition">
                  <input type="checkbox" defaultChecked className="accent-primary w-4 h-4" />
                  <div className="flex flex-col">
                    <span className="font-bold text-sm text-text-primary">Auto-send Absentee SMS Alerts</span>
                    <span className="text-xs text-text-secondary">Triggers immediately after Admin Approval</span>
                  </div>
                </label>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-text-secondary">SMS Template</label>
                  <textarea disabled className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm text-text-disabled min-h-[60px]" defaultValue="Dear Parent, your ward [Student Name] is absent from school today ([Date]). Please contact the class teacher."></textarea>
                </div>
                <button onClick={(e) => handleAction(e, "Saved")} className="bg-primary text-black px-4 py-2 rounded-md text-sm font-bold shadow-sm self-start transition">Update Preferences</button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'alerts' && (
          <div className="flex flex-col gap-6 fade-in">
            <h2 className="text-xl font-bold text-text-primary border-b border-border pb-2">Low Attendance Alerts</h2>
            
            <div className="grid grid-cols-1 gap-3 mt-2">
              {alerts.map(alert => (
                <div key={alert.id} className="bg-danger-bg/20 border border-danger/30 p-4 rounded-lg flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-sm text-danger">{alert.name}</span>
                    <span className="bg-danger text-white text-xs font-bold px-2 py-0.5 rounded">{alert.attendance}% Attendance</span>
                  </div>
                  <p className="text-sm text-text-primary">Warning: Attendance has dropped below the mandatory 75% threshold.</p>
                  <div className="flex gap-2 mt-2 pt-2 border-t border-danger/20">
                    <button onClick={(e) => handleAction(e, "Generated")} className="text-xs bg-danger text-white px-4 py-1.5 rounded font-bold shadow-sm transition">Generate Warning Letter</button>
                    <button className="text-xs bg-bg-page border border-border text-text-primary px-4 py-1.5 rounded font-bold hover:bg-card transition">Call Parent</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
