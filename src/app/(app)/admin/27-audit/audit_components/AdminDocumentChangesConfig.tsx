"use client";

import React from 'react';
import { Settings, FileText, Search, Download } from 'lucide-react';

export default function AdminDocumentChangesConfig() {
  return (
    <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden mb-6">
      <div className="bg-primary/5 border-b border-border p-4 flex justify-between items-center">
        <h2 className="text-lg font-bold text-text-primary flex items-center gap-2">
          <FileText className="text-primary" size={20} />
          Document Changes Audit Logs
        </h2>
        <div className="flex gap-2">
          <button className="bg-primary text-black px-4 py-2 rounded-md text-sm font-semibold flex items-center gap-2 hover:bg-primary/90 transition">
            <Download size={16} /> Export Logs
          </button>
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-md font-bold text-text-primary">Recent Actions</h3>
          <div className="relative w-64">
             <input type="text" placeholder="Search by user, IP..." className="bg-input border border-border rounded-md pl-9 pr-3 py-2 text-sm focus:border-primary outline-none w-full" />
             <Search className="absolute left-3 top-2.5 text-text-secondary" size={16} />
          </div>
        </div>
        
        <div className="overflow-x-auto border border-border rounded-lg">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-bg-page border-b border-border">
              <tr>
                <th className="p-3 font-semibold text-text-secondary">Who (User)</th>
                <th className="p-3 font-semibold text-text-secondary">What (Action)</th>
                <th className="p-3 font-semibold text-text-secondary">When (Timestamp)</th>
                <th className="p-3 font-semibold text-text-secondary">Old Value</th>
                <th className="p-3 font-semibold text-text-secondary">New Value</th>
                <th className="p-3 font-semibold text-text-secondary">IP / Device</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border hover:bg-bg-page/50 transition">
                <td className="p-3 text-text-primary font-medium">Admin (admin@school.com)</td>
                <td className="p-3 text-text-primary">Updated Status</td>
                <td className="p-3 text-text-secondary">2026-09-12 10:30 AM</td>
                <td className="p-3 text-error">Pending</td>
                <td className="p-3 text-success">Approved</td>
                <td className="p-3 text-text-secondary">192.168.1.1 (Windows)</td>
              </tr>
              <tr className="border-b border-border hover:bg-bg-page/50 transition">
                <td className="p-3 text-text-primary font-medium">Principal (head@school.com)</td>
                <td className="p-3 text-text-primary">Modified Remark</td>
                <td className="p-3 text-text-secondary">2026-09-11 02:15 PM</td>
                <td className="p-3 text-text-secondary">Null</td>
                <td className="p-3 text-text-primary">Verified Documents</td>
                <td className="p-3 text-text-secondary">10.0.0.5 (Mac OS)</td>
              </tr>
              <tr className="hover:bg-bg-page/50 transition">
                <td className="p-3 text-text-primary font-medium">Staff (staff@school.com)</td>
                <td className="p-3 text-text-primary">Deleted Entry</td>
                <td className="p-3 text-text-secondary">2026-09-10 11:45 AM</td>
                <td className="p-3 text-text-primary">Record #1234</td>
                <td className="p-3 text-error">Deleted</td>
                <td className="p-3 text-text-secondary">172.16.0.2 (iOS)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
