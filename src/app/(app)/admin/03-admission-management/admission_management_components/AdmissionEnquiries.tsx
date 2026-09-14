"use client";

import React, { useState } from 'react';
import { Search, Filter, Plus, Phone, Mail, Globe, User } from 'lucide-react';
import clsx from 'clsx';

const mockEnquiries = [
  { id: 'ENQ001', name: 'Rohan Sharma', parent: 'Amit Sharma', phone: '9876543210', class: 'Class I', source: 'Online', status: 'New', date: 'Oct 10, 2026' },
  { id: 'ENQ002', name: 'Sneha Verma', parent: 'Kavita Verma', phone: '9876543211', class: 'Class V', source: 'Offline', status: 'Form Submitted', date: 'Oct 11, 2026' },
];

export default function AdmissionEnquiries() {
  const [activeTab, setActiveTab] = useState('list'); // list or form

  return (
    <div className="bg-card border border-border rounded-xl shadow-sm flex flex-col h-full fade-in min-h-[500px]">
      <div className="p-4 border-b border-border flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex gap-2">
          <button onClick={() => setActiveTab('list')} className={clsx("px-4 py-2 rounded-md text-sm font-semibold transition", activeTab === 'list' ? 'bg-primary text-black' : 'bg-bg-page text-text-secondary hover:text-text-primary')}>Enquiry & Applications List</button>
          <button onClick={() => setActiveTab('form')} className={clsx("px-4 py-2 rounded-md text-sm font-semibold transition", activeTab === 'form' ? 'bg-primary text-black' : 'bg-bg-page text-text-secondary hover:text-text-primary')}>+ New Admission Entry</button>
        </div>
      </div>

      <div className="flex-1 p-4 overflow-y-auto">
        {activeTab === 'list' && (
          <div className="flex flex-col gap-4">
            <div className="flex justify-between gap-4">
              <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" size={16} />
                <input type="text" placeholder="Search enquiries..." className="w-full pl-9 pr-4 py-2 bg-bg-input border border-border rounded-md text-sm outline-none focus:border-primary" />
              </div>
              <button className="px-4 py-2 bg-bg-page border border-border rounded-md text-sm font-semibold flex items-center gap-2"><Filter size={16}/> Filters</button>
            </div>
            
            <table className="w-full text-left border-collapse mt-2">
              <thead>
                <tr className="bg-bg-page border-y border-border">
                  <th className="p-3 text-xs font-bold text-text-secondary uppercase">Applicant</th>
                  <th className="p-3 text-xs font-bold text-text-secondary uppercase">Applied For</th>
                  <th className="p-3 text-xs font-bold text-text-secondary uppercase">Source</th>
                  <th className="p-3 text-xs font-bold text-text-secondary uppercase">Status</th>
                  <th className="p-3 text-xs font-bold text-text-secondary uppercase">Date</th>
                </tr>
              </thead>
              <tbody>
                {mockEnquiries.map(enq => (
                  <tr key={enq.id} className="border-b border-border hover:bg-bg-page/50">
                    <td className="p-3">
                      <div className="font-bold text-sm text-text-primary">{enq.name}</div>
                      <div className="text-xs text-text-secondary">{enq.parent} • {enq.phone}</div>
                    </td>
                    <td className="p-3 text-sm font-medium text-text-primary">{enq.class}</td>
                    <td className="p-3">
                      <span className={clsx("text-xs font-bold px-2 py-1 rounded flex items-center gap-1 w-fit", enq.source === 'Online' ? 'bg-info-bg text-info' : 'bg-warning-bg text-warning')}>
                        {enq.source === 'Online' ? <Globe size={12}/> : <User size={12}/>} {enq.source}
                      </span>
                    </td>
                    <td className="p-3 text-sm font-semibold">{enq.status}</td>
                    <td className="p-3 text-sm text-text-secondary">{enq.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'form' && (
          <div className="max-w-2xl mx-auto flex flex-col gap-6 fade-in">
            <h3 className="text-lg font-bold text-text-primary border-b border-border pb-2">Application Form (Offline/Manual Entry)</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-text-secondary">Admission Type</label>
                <select className="bg-bg-input border border-border rounded-md px-4 py-2 text-sm focus:border-primary outline-none">
                  <option value="offline">Offline / Walk-in Admission</option>
                  <option value="online">Online Proxy Entry</option>
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-text-secondary">Seeking Admission in Class</label>
                <select className="bg-bg-input border border-border rounded-md px-4 py-2 text-sm focus:border-primary outline-none">
                  <option value="">Select Class</option>
                  <option value="1">Class I</option>
                  <option value="5">Class V</option>
                </select>
              </div>
              
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-text-secondary">Applicant Name *</label>
                <input type="text" className="bg-bg-input border border-border rounded-md px-4 py-2 text-sm outline-none focus:border-primary" placeholder="Full Name" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-text-secondary">Date of Birth *</label>
                <input type="date" className="bg-bg-input border border-border rounded-md px-4 py-2 text-sm outline-none focus:border-primary" />
              </div>
              
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-text-secondary">Parent Name *</label>
                <input type="text" className="bg-bg-input border border-border rounded-md px-4 py-2 text-sm outline-none focus:border-primary" placeholder="Father/Mother/Guardian" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-text-secondary">Contact Number *</label>
                <input type="tel" className="bg-bg-input border border-border rounded-md px-4 py-2 text-sm outline-none focus:border-primary" placeholder="Mobile Number" />
              </div>
            </div>
            
            <div className="flex justify-end pt-4 border-t border-border">
              <button className="px-6 py-2 bg-primary text-black rounded-md text-sm font-bold shadow-sm hover:bg-primary-hover">Save Application Form</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
