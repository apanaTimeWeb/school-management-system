"use client";

import React, { useState } from 'react';
import { CheckSquare, FileSearch, CheckCircle, ClipboardList, PenTool } from 'lucide-react';
import clsx from 'clsx';

export default function AdmissionProcessing() {
  const [activeTab, setActiveTab] = useState('appVerify');

  return (
    <div className="flex flex-col md:flex-row gap-6 h-full min-h-[500px] fade-in">
      {/* Sidebar navigation */}
      <div className="w-full md:w-64 bg-card border border-border rounded-xl shadow-sm flex flex-col p-2 h-fit shrink-0">
        <button onClick={() => setActiveTab('appVerify')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition mb-1", activeTab === 'appVerify' ? 'bg-primary/10 text-primary' : 'text-text-secondary hover:bg-bg-page')}>
          <CheckSquare size={18} /> Application Verification
        </button>
        <button onClick={() => setActiveTab('docVerify')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition mb-1", activeTab === 'docVerify' ? 'bg-primary/10 text-primary' : 'text-text-secondary hover:bg-bg-page')}>
          <FileSearch size={18} /> Document Verification
        </button>
        <button onClick={() => setActiveTab('test')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition mb-1", activeTab === 'test' ? 'bg-primary/10 text-primary' : 'text-text-secondary hover:bg-bg-page')}>
          <PenTool size={18} /> Admission Test
        </button>
        <button onClick={() => setActiveTab('interview')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition", activeTab === 'interview' ? 'bg-primary/10 text-primary' : 'text-text-secondary hover:bg-bg-page')}>
          <ClipboardList size={18} /> Interview
        </button>
      </div>

      <div className="flex-1 bg-card border border-border rounded-xl shadow-sm p-6 overflow-y-auto">
        {activeTab === 'appVerify' && (
          <div className="flex flex-col gap-4 fade-in">
            <h2 className="text-xl font-bold text-text-primary mb-2 border-b border-border pb-2">Application Verification</h2>
            <p className="text-sm text-text-secondary">Verify the details submitted by the applicant for accuracy before proceeding to documents.</p>
            <div className="bg-bg-page border border-border rounded-md p-4 flex items-center justify-between">
              <div>
                <h4 className="font-bold text-text-primary text-sm">ENQ001 - Rohan Sharma (Class I)</h4>
                <p className="text-xs text-text-secondary mt-1">Submitted on: Oct 10, 2026</p>
              </div>
              <div className="flex gap-2">
                <button className="px-3 py-1.5 bg-danger-bg text-danger text-xs font-bold rounded hover:bg-danger/20">Reject App</button>
                <button className="px-3 py-1.5 bg-success text-white text-xs font-bold rounded hover:bg-success/90">Verify Details</button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'docVerify' && (
          <div className="flex flex-col gap-4 fade-in">
            <h2 className="text-xl font-bold text-text-primary mb-2 border-b border-border pb-2">Document Verification</h2>
            <div className="grid grid-cols-1 gap-4">
              <div className="border border-border rounded-lg p-4 bg-bg-page">
                <h4 className="font-bold text-text-primary text-sm mb-3">Rohan Sharma - Pending Documents</h4>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center bg-card p-2 border border-border rounded">
                    <span className="text-sm font-semibold text-text-secondary">Birth Certificate.pdf</span>
                    <button className="text-xs bg-primary text-black px-2 py-1 rounded font-bold">Approve</button>
                  </div>
                  <div className="flex justify-between items-center bg-card p-2 border border-border rounded">
                    <span className="text-sm font-semibold text-text-secondary">Aadhar_Card.jpg</span>
                    <button className="text-xs bg-primary text-black px-2 py-1 rounded font-bold">Approve</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'test' && (
          <div className="flex flex-col gap-4 fade-in">
            <h2 className="text-xl font-bold text-text-primary mb-2 border-b border-border pb-2">Admission Test Management</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-text-secondary">Schedule Test For</label>
                <select className="bg-bg-input border border-border rounded-md px-4 py-2 text-sm outline-none focus:border-primary"><option>Rohan Sharma</option></select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-text-secondary">Test Date & Time</label>
                <input type="datetime-local" className="bg-bg-input border border-border rounded-md px-4 py-2 text-sm outline-none focus:border-primary" />
              </div>
              <div className="flex flex-col gap-1.5 md:col-span-2">
                <label className="text-sm font-semibold text-text-secondary">Update Test Score</label>
                <div className="flex gap-2">
                  <input type="number" placeholder="Marks out of 100" className="flex-1 bg-bg-input border border-border rounded-md px-4 py-2 text-sm outline-none focus:border-primary" />
                  <button className="px-4 py-2 bg-primary text-black rounded-md text-sm font-bold">Save Score</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'interview' && (
          <div className="flex flex-col gap-4 fade-in">
            <h2 className="text-xl font-bold text-text-primary mb-2 border-b border-border pb-2">Interview Scheduling & Remarks</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-text-secondary">Select Applicant</label>
                <select className="bg-bg-input border border-border rounded-md px-4 py-2 text-sm outline-none focus:border-primary"><option>Rohan Sharma</option></select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-text-secondary">Interviewer</label>
                <input type="text" placeholder="Teacher / Principal Name" className="bg-bg-input border border-border rounded-md px-4 py-2 text-sm outline-none focus:border-primary" />
              </div>
              <div className="flex flex-col gap-1.5 md:col-span-2">
                <label className="text-sm font-semibold text-text-secondary">Interview Remarks / Assessment</label>
                <textarea className="bg-bg-input border border-border rounded-md px-4 py-2 text-sm outline-none focus:border-primary min-h-[100px]" placeholder="Enter observations..."></textarea>
              </div>
              <div className="md:col-span-2 flex justify-end">
                 <button className="px-6 py-2 bg-primary text-black rounded-md text-sm font-bold">Save Interview Record</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
