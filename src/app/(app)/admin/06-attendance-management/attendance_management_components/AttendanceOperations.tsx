"use client";

import React, { useState } from 'react';
import { Edit3, CheckSquare, Bell, AlertTriangle } from 'lucide-react';
import clsx from 'clsx';

export default function AttendanceOperations() {
  const [activeTab, setActiveTab] = useState('correction');

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
              <div className="bg-bg-page border border-border p-4 rounded-lg flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-sm text-text-primary">Aarav Patel (Class X - A)</span>
                  <span className="bg-warning-bg text-warning text-xs font-bold px-2 py-0.5 rounded">Pending Review</span>
                </div>
                <p className="text-sm text-text-secondary">Requested correction for Oct 14: "Marked absent but was present in school (Medical room)"</p>
                <div className="flex gap-2 mt-2 pt-2 border-t border-border">
                  <button className="text-xs bg-success text-white px-4 py-1.5 rounded font-bold shadow-sm">Approve & Correct</button>
                  <button className="text-xs bg-danger-bg text-danger border border-danger/30 px-4 py-1.5 rounded font-bold">Reject</button>
                </div>
              </div>
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
                <tr className="border-t border-border bg-card">
                  <td className="p-3 font-semibold text-sm">Class X - A</td>
                  <td className="p-3 text-sm">Mr. John Doe</td>
                  <td className="p-3 text-sm"><span className="text-success font-bold">45 P</span> | <span className="text-danger font-bold">5 A</span></td>
                  <td className="p-3 text-right">
                    <button className="text-xs bg-primary text-white px-4 py-1.5 rounded font-bold shadow-sm">Approve & Lock</button>
                  </td>
                </tr>
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
                <button className="bg-primary text-white px-4 py-2 rounded-md text-sm font-bold shadow-sm self-start">Update Preferences</button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'alerts' && (
          <div className="flex flex-col gap-6 fade-in">
            <h2 className="text-xl font-bold text-text-primary border-b border-border pb-2">Low Attendance Alerts</h2>
            
            <div className="grid grid-cols-1 gap-3 mt-2">
              <div className="bg-danger-bg/20 border border-danger/30 p-4 rounded-lg flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-sm text-danger">Vikram Singh (Class X - A)</span>
                  <span className="bg-danger text-white text-xs font-bold px-2 py-0.5 rounded">62% Attendance</span>
                </div>
                <p className="text-sm text-text-primary">Warning: Attendance has dropped below the mandatory 75% threshold.</p>
                <div className="flex gap-2 mt-2 pt-2 border-t border-danger/20">
                  <button className="text-xs bg-danger text-white px-4 py-1.5 rounded font-bold shadow-sm">Generate Warning Letter</button>
                  <button className="text-xs bg-bg-page border border-border text-text-primary px-4 py-1.5 rounded font-bold">Call Parent</button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
