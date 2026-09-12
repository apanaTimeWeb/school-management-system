"use client";

import React, { useState } from 'react';
import { ArrowRightLeft, TrendingUp, FileText, UserMinus, RefreshCcw, Archive } from 'lucide-react';
import clsx from 'clsx';

const operations = [
  { id: 'transfer', title: 'Class/Section Transfer', icon: ArrowRightLeft, desc: 'Move students between sections or classes.' },
  { id: 'promotion', title: 'Student Promotion', icon: TrendingUp, desc: 'Promote students to next academic year.' },
  { id: 'tc', title: 'Issue Transfer Certificate', icon: FileText, desc: 'Generate and issue TC for leaving students.' },
  { id: 'withdrawal', title: 'Student Withdrawal', icon: UserMinus, desc: 'Process student withdrawal / dropouts.' },
  { id: 'readmission', title: 'Re-admission', icon: RefreshCcw, desc: 'Re-admit a previously withdrawn student.' },
  { id: 'archive', title: 'Student Archive', icon: Archive, desc: 'View and manage archived student records.' },
];

export default function StudentOperations() {
  const [activeTab, setActiveTab] = useState('transfer');

  return (
    <div className="flex flex-col md:flex-row gap-6 h-full min-h-[600px] fade-in">
      {/* Sidebar for operations */}
      <div className="w-full md:w-64 bg-card border border-border rounded-xl shadow-sm flex flex-col p-2 h-fit">
        {operations.map((op) => (
          <button
            key={op.id}
            onClick={() => setActiveTab(op.id)}
            className={clsx(
              "flex items-center gap-3 p-3 rounded-lg text-left transition text-sm font-semibold mb-1",
              activeTab === op.id 
                ? "bg-primary/10 text-primary border border-primary/20" 
                : "text-text-secondary hover:bg-bg-page border border-transparent"
            )}
          >
            <op.icon size={18} className={activeTab === op.id ? "text-primary" : "text-text-disabled"} />
            {op.title}
          </button>
        ))}
      </div>

      {/* Main Operations Area */}
      <div className="flex-1 bg-card border border-border rounded-xl shadow-sm p-6 flex flex-col">
        <h2 className="text-xl font-bold text-text-primary mb-2">
          {operations.find(o => o.id === activeTab)?.title}
        </h2>
        <p className="text-sm text-text-secondary mb-8 border-b border-border pb-4">
          {operations.find(o => o.id === activeTab)?.desc}
        </p>
        
        {/* Mock UI for active operation */}
        <div className="flex-1 flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-text-secondary">Select Student *</label>
              <select className="bg-bg-input border border-border rounded-md px-4 py-2.5 text-sm focus:border-primary outline-none">
                <option value="">Search by Name or Admission No...</option>
                <option value="1">Aarav Patel (STU001)</option>
                <option value="2">Priya Sharma (STU002)</option>
              </select>
            </div>
            
            {activeTab === 'transfer' && (
              <>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-text-secondary">Current Class/Section</label>
                  <input type="text" disabled value="Class X - A" className="bg-bg-page border border-border rounded-md px-4 py-2.5 text-sm text-text-disabled" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-text-secondary">New Class *</label>
                  <select className="bg-bg-input border border-border rounded-md px-4 py-2.5 text-sm focus:border-primary outline-none">
                    <option value="">Select Class</option>
                    <option value="10">Class X</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-text-secondary">New Section *</label>
                  <select className="bg-bg-input border border-border rounded-md px-4 py-2.5 text-sm focus:border-primary outline-none">
                    <option value="">Select Section</option>
                    <option value="b">B</option>
                    <option value="c">C</option>
                  </select>
                </div>
              </>
            )}
            
            {(activeTab === 'tc' || activeTab === 'withdrawal') && (
              <div className="flex flex-col gap-1.5 md:col-span-2">
                <label className="text-sm font-semibold text-text-secondary">Reason *</label>
                <textarea className="bg-bg-input border border-border rounded-md px-4 py-2.5 text-sm focus:border-primary outline-none min-h-[100px]" placeholder="Enter reason here..."></textarea>
              </div>
            )}
          </div>
          
          <div className="mt-auto flex justify-end">
            <button className="px-6 py-2 bg-primary text-white rounded-md text-sm font-semibold hover:bg-primary-hover transition">
              Execute {operations.find(o => o.id === activeTab)?.title}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
