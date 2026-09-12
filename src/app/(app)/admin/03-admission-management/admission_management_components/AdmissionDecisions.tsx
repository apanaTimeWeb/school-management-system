"use client";

import React, { useState } from 'react';
import { UserCheck, UserX, Clock, ThumbsUp } from 'lucide-react';
import clsx from 'clsx';

export default function AdmissionDecisions() {
  const [activeTab, setActiveTab] = useState('selection');

  return (
    <div className="flex flex-col md:flex-row gap-6 h-full min-h-[500px] fade-in">
      {/* Sidebar navigation */}
      <div className="w-full md:w-64 bg-card border border-border rounded-xl shadow-sm flex flex-col p-2 h-fit shrink-0">
        <button onClick={() => setActiveTab('selection')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition mb-1", activeTab === 'selection' ? 'bg-success/10 text-success' : 'text-text-secondary hover:bg-bg-page')}>
          <UserCheck size={18} /> Selection List
        </button>
        <button onClick={() => setActiveTab('rejection')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition mb-1", activeTab === 'rejection' ? 'bg-danger/10 text-danger' : 'text-text-secondary hover:bg-bg-page')}>
          <UserX size={18} /> Rejection List
        </button>
        <button onClick={() => setActiveTab('waitlist')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition mb-1", activeTab === 'waitlist' ? 'bg-warning/10 text-warning' : 'text-text-secondary hover:bg-bg-page')}>
          <Clock size={18} /> Waitlist
        </button>
        <button onClick={() => setActiveTab('approval')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition", activeTab === 'approval' ? 'bg-primary/10 text-primary' : 'text-text-secondary hover:bg-bg-page')}>
          <ThumbsUp size={18} /> Admission Approval
        </button>
      </div>

      <div className="flex-1 bg-card border border-border rounded-xl shadow-sm p-6 overflow-y-auto">
        {(activeTab === 'selection' || activeTab === 'rejection' || activeTab === 'waitlist') && (
          <div className="flex flex-col gap-4 fade-in">
            <div className="flex justify-between items-center border-b border-border pb-2 mb-2">
              <h2 className="text-xl font-bold text-text-primary capitalize">{activeTab} Management</h2>
              <button className="text-sm font-semibold text-primary hover:underline">+ Add to {activeTab}</button>
            </div>
            
            <div className="bg-bg-page border border-border rounded-lg p-4 flex justify-between items-center">
              <div>
                <h4 className="font-bold text-text-primary text-sm">ENQ001 - Rohan Sharma (Class I)</h4>
                <p className="text-xs text-text-secondary mt-1">Interview Score: 8/10 | Test Score: 85%</p>
              </div>
              <span className={clsx(
                "px-3 py-1 rounded text-xs font-bold uppercase",
                activeTab === 'selection' ? "bg-success-bg text-success" :
                activeTab === 'rejection' ? "bg-danger-bg text-danger" :
                "bg-warning-bg text-warning"
              )}>{activeTab}</span>
            </div>
          </div>
        )}

        {activeTab === 'approval' && (
          <div className="flex flex-col gap-4 fade-in">
            <h2 className="text-xl font-bold text-text-primary mb-2 border-b border-border pb-2">Final Admission Approval</h2>
            <p className="text-sm text-text-secondary mb-4">Principal/Management final sign-off for selected candidates.</p>
            
            <table className="w-full text-left border-collapse border border-border rounded-lg overflow-hidden">
              <thead className="bg-bg-page">
                <tr>
                  <th className="p-3 text-xs font-bold text-text-secondary uppercase">Applicant</th>
                  <th className="p-3 text-xs font-bold text-text-secondary uppercase">Class</th>
                  <th className="p-3 text-xs font-bold text-text-secondary uppercase text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-border bg-card">
                  <td className="p-3 font-semibold text-sm text-text-primary">Rohan Sharma</td>
                  <td className="p-3 text-sm text-text-secondary">Class I</td>
                  <td className="p-3 text-right flex justify-end gap-2">
                    <button className="px-4 py-1.5 bg-success text-white text-xs font-bold rounded shadow-sm hover:bg-success/90">Approve</button>
                    <button className="px-4 py-1.5 bg-danger-bg text-danger text-xs font-bold rounded hover:bg-danger/20">Hold</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
