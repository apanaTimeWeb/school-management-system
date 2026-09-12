"use client";

import React, { useState } from 'react';
import { Lock, Bell, MessageSquare, AlertTriangle, Send } from 'lucide-react';
import clsx from 'clsx';

export default function ParentOperations() {
  const [activeTab, setActiveTab] = useState('login');

  return (
    <div className="flex flex-col md:flex-row gap-6 h-full min-h-[500px] fade-in">
      {/* Sidebar navigation */}
      <div className="w-full md:w-64 bg-card border border-border rounded-xl shadow-sm flex flex-col p-2 h-fit shrink-0">
        <button onClick={() => setActiveTab('login')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition mb-1", activeTab === 'login' ? 'bg-primary/10 text-primary' : 'text-text-secondary hover:bg-bg-page')}>
          <Lock size={18} /> Login Management
        </button>
        <button onClick={() => setActiveTab('communication')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition mb-1", activeTab === 'communication' ? 'bg-info/10 text-info' : 'text-text-secondary hover:bg-bg-page')}>
          <MessageSquare size={18} /> Communication History
        </button>
        <button onClick={() => setActiveTab('notifications')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition mb-1", activeTab === 'notifications' ? 'bg-success/10 text-success' : 'text-text-secondary hover:bg-bg-page')}>
          <Bell size={18} /> Push Notifications
        </button>
        <button onClick={() => setActiveTab('complaints')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition", activeTab === 'complaints' ? 'bg-danger/10 text-danger' : 'text-text-secondary hover:bg-bg-page')}>
          <AlertTriangle size={18} /> Parent Complaints
        </button>
      </div>

      <div className="flex-1 bg-card border border-border rounded-xl shadow-sm p-6 overflow-y-auto">
        
        {activeTab === 'login' && (
          <div className="flex flex-col gap-6 fade-in">
            <h2 className="text-xl font-bold text-text-primary border-b border-border pb-2">Parent Portal Login Management</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5 md:col-span-2">
                <label className="text-sm font-semibold text-text-secondary">Select Parent Account</label>
                <select className="bg-bg-input border border-border rounded-md px-4 py-2 text-sm outline-none focus:border-primary">
                  <option>PAR001 - Rajesh Patel</option>
                  <option>PAR002 - Amit Sharma</option>
                </select>
              </div>
              <div className="border border-border bg-bg-page p-4 rounded-lg flex flex-col gap-2 shadow-sm">
                <h4 className="font-bold text-text-primary text-sm">Account Status</h4>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-text-secondary">Portal Access</span>
                  <span className="bg-success-bg text-success px-2 py-0.5 rounded text-xs font-bold">Active</span>
                </div>
                <button className="mt-2 px-4 py-1.5 bg-danger-bg text-danger border border-danger/20 rounded text-sm font-bold w-full hover:bg-danger/10">Suspend Access</button>
              </div>
              <div className="border border-border bg-bg-page p-4 rounded-lg flex flex-col gap-2 shadow-sm">
                <h4 className="font-bold text-text-primary text-sm">Password Management</h4>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-text-secondary">Last Login: Oct 12, 10:45 AM</span>
                </div>
                <button className="mt-2 px-4 py-1.5 bg-primary text-white rounded text-sm font-bold w-full hover:bg-primary-hover shadow-sm">Send Password Reset Link</button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'communication' && (
          <div className="flex flex-col gap-4 fade-in">
            <h2 className="text-xl font-bold text-text-primary border-b border-border pb-2">Communication History</h2>
            <div className="flex gap-2">
              <input type="text" placeholder="Search parent by name..." className="flex-1 bg-bg-input border border-border rounded-md px-4 py-2 text-sm outline-none focus:border-primary" />
              <button className="px-4 py-2 bg-primary text-white rounded-md text-sm font-bold">Search</button>
            </div>
            <div className="flex flex-col gap-3 mt-2">
              <div className="bg-bg-page border border-border p-4 rounded-lg flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-sm text-text-primary">Fee Reminder Sent (SMS)</span>
                  <span className="text-xs text-text-secondary">Oct 10, 2026 - 09:00 AM</span>
                </div>
                <p className="text-sm text-text-secondary">"Dear Parent, your ward Aarav's Q2 fee is due on Oct 15."</p>
                <span className="text-xs font-bold text-success">Delivered</span>
              </div>
              <div className="bg-bg-page border border-border p-4 rounded-lg flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-sm text-text-primary">PTM Invitation (Email)</span>
                  <span className="text-xs text-text-secondary">Oct 05, 2026 - 11:30 AM</span>
                </div>
                <p className="text-sm text-text-secondary">"Please join us for the mandatory Parent Teacher Meeting..."</p>
                <span className="text-xs font-bold text-success">Opened</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'notifications' && (
          <div className="flex flex-col gap-4 fade-in">
            <h2 className="text-xl font-bold text-text-primary border-b border-border pb-2">Send Push Notifications / SMS</h2>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-text-secondary">Target Audience</label>
                <select className="bg-bg-input border border-border rounded-md px-4 py-2 text-sm outline-none focus:border-primary">
                  <option>All Parents (School-wide)</option>
                  <option>Class X Parents Only</option>
                  <option>Defaulters Only</option>
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-text-secondary">Message Type</label>
                <div className="flex gap-4 mt-1">
                  <label className="flex items-center gap-2 text-sm"><input type="checkbox" defaultChecked className="accent-primary"/> App Push Notification</label>
                  <label className="flex items-center gap-2 text-sm"><input type="checkbox" defaultChecked className="accent-primary"/> SMS</label>
                  <label className="flex items-center gap-2 text-sm"><input type="checkbox" className="accent-primary"/> Email</label>
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-text-secondary">Message Content *</label>
                <textarea className="bg-bg-input border border-border rounded-md px-4 py-2 text-sm outline-none focus:border-primary min-h-[100px]" placeholder="Type your message here..."></textarea>
              </div>
              <div className="flex justify-end">
                <button className="px-6 py-2 bg-primary text-white rounded-md text-sm font-bold flex items-center gap-2 shadow-sm hover:bg-primary-hover"><Send size={16}/> Send Now</button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'complaints' && (
          <div className="flex flex-col gap-4 fade-in">
            <h2 className="text-xl font-bold text-text-primary border-b border-border pb-2">Parent Complaints & Feedback</h2>
            <div className="flex flex-col gap-3 mt-2">
              <div className="bg-danger-bg/30 border-l-4 border-l-danger border border-border p-4 rounded-r-lg flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-sm text-danger">Bus Route 4 Delay Issue</span>
                  <span className="bg-danger text-white text-xs px-2 py-0.5 rounded font-bold">Unresolved</span>
                </div>
                <p className="text-sm text-text-primary">"The bus has been coming late by 20 minutes for the past 3 days."</p>
                <div className="flex justify-between items-center mt-2 pt-2 border-t border-border/50">
                  <span className="text-xs text-text-secondary font-semibold">Raised by: Rajesh Patel (Aarav, Class X)</span>
                  <button className="text-xs text-primary font-bold hover:underline">Reply & Resolve</button>
                </div>
              </div>

              <div className="bg-bg-page border-l-4 border-l-success border border-border p-4 rounded-r-lg flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-sm text-text-primary">Query regarding Sports Day</span>
                  <span className="bg-success-bg text-success text-xs px-2 py-0.5 rounded font-bold">Resolved</span>
                </div>
                <p className="text-sm text-text-secondary">"Are parents allowed to bring outside food to the venue?"</p>
                <div className="flex justify-between items-center mt-2 pt-2 border-t border-border/50">
                  <span className="text-xs text-text-secondary font-semibold">Raised by: Priya Sharma (Class I)</span>
                  <span className="text-xs text-success font-bold">Resolved on Oct 10</span>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
