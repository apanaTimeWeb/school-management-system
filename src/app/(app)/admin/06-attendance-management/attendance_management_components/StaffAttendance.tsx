"use client";

import React, { useState } from 'react';
import { Fingerprint, Users, Clock, CheckSquare } from 'lucide-react';
import clsx from 'clsx';

export default function StaffAttendance() {
  const [activeTab, setActiveTab] = useState('biometric');

  return (
    <div className="flex flex-col md:flex-row gap-6 h-full min-h-[500px] fade-in">
      <div className="w-full md:w-64 bg-card border border-border rounded-xl shadow-sm flex flex-col p-2 h-fit shrink-0">
        <button onClick={() => setActiveTab('biometric')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition mb-1", activeTab === 'biometric' ? 'bg-primary/10 text-primary' : 'text-text-secondary hover:bg-bg-page')}>
          <Fingerprint size={18} /> Biometric Sync
        </button>
        <button onClick={() => setActiveTab('manual')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition mb-1", activeTab === 'manual' ? 'bg-info/10 text-info' : 'text-text-secondary hover:bg-bg-page')}>
          <Users size={18} /> Manual Register
        </button>
        <button onClick={() => setActiveTab('late')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition", activeTab === 'late' ? 'bg-warning/10 text-warning' : 'text-text-secondary hover:bg-bg-page')}>
          <Clock size={18} /> Late/Absent Tracking
        </button>
      </div>

      <div className="flex-1 bg-card border border-border rounded-xl shadow-sm p-6 overflow-y-auto">
        
        {activeTab === 'biometric' && (
          <div className="flex flex-col gap-6 fade-in items-center justify-center py-10">
            <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
              <Fingerprint size={40} />
            </div>
            <h2 className="text-2xl font-bold text-text-primary text-center">Biometric Integration</h2>
            <p className="text-sm text-text-secondary text-center max-w-md">
              Staff attendance is automatically synced from the Biometric RFID/Fingerprint devices installed at the gates.
            </p>
            <div className="flex gap-4 mt-6">
              <button className="px-6 py-2 bg-primary text-white rounded-lg font-bold shadow-sm hover:bg-primary-hover">Sync Now</button>
              <button className="px-6 py-2 bg-bg-page border border-border text-text-primary rounded-lg font-bold shadow-sm">View Raw Device Logs</button>
            </div>
            <div className="mt-8 w-full max-w-md bg-bg-page border border-border p-4 rounded-lg flex justify-between items-center">
              <span className="text-sm font-bold text-text-primary">Last Sync Status</span>
              <span className="text-xs font-bold text-success">Today, 08:35 AM - Success</span>
            </div>
          </div>
        )}

        {activeTab === 'manual' && (
          <div className="flex flex-col gap-6 fade-in">
            <h2 className="text-xl font-bold text-text-primary border-b border-border pb-2">Staff Attendance (Manual Override)</h2>
            <p className="text-sm text-text-secondary">Manually mark attendance for staff members who missed the biometric punch.</p>
            
            <div className="flex gap-4 items-end bg-bg-page border border-border p-4 rounded-lg">
              <div className="flex flex-col gap-1.5 flex-1">
                <label className="text-xs font-semibold text-text-secondary">Department</label>
                <select className="bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none focus:border-primary">
                  <option>All Departments</option>
                  <option>Teaching Staff</option>
                  <option>Admin Staff</option>
                </select>
              </div>
              <div className="flex flex-col gap-1.5 flex-1">
                <label className="text-xs font-semibold text-text-secondary">Date</label>
                <input type="date" defaultValue="2026-10-15" className="bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none focus:border-primary" />
              </div>
            </div>

            <table className="w-full text-left border-collapse border border-border rounded-lg overflow-hidden mt-2">
              <thead className="bg-bg-page">
                <tr>
                  <th className="p-3 text-xs font-bold text-text-secondary uppercase">Staff Name</th>
                  <th className="p-3 text-xs font-bold text-text-secondary uppercase">Punch In</th>
                  <th className="p-3 text-xs font-bold text-text-secondary uppercase">Punch Out</th>
                  <th className="p-3 text-xs font-bold text-text-secondary uppercase text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-border bg-card">
                  <td className="p-3 font-semibold text-sm">Mr. John Doe (Teacher)</td>
                  <td className="p-3"><input type="time" defaultValue="07:55" className="bg-bg-input border border-border rounded px-2 py-1 text-sm outline-none w-24" /></td>
                  <td className="p-3"><input type="time" defaultValue="15:00" className="bg-bg-input border border-border rounded px-2 py-1 text-sm outline-none w-24" /></td>
                  <td className="p-3 text-right"><button className="text-xs bg-primary text-white px-3 py-1.5 rounded font-bold">Update</button></td>
                </tr>
                <tr className="border-t border-border bg-card">
                  <td className="p-3 font-semibold text-sm">Mrs. Smith (HOD)</td>
                  <td className="p-3"><input type="time" className="bg-bg-input border border-border rounded px-2 py-1 text-sm outline-none w-24" /></td>
                  <td className="p-3"><input type="time" className="bg-bg-input border border-border rounded px-2 py-1 text-sm outline-none w-24" /></td>
                  <td className="p-3 text-right">
                    <button className="text-xs bg-danger-bg text-danger border border-danger/30 px-3 py-1.5 rounded font-bold mr-2">Mark Absent</button>
                    <button className="text-xs bg-primary text-white px-3 py-1.5 rounded font-bold">Update</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'late' && (
          <div className="flex flex-col gap-6 fade-in">
            <h2 className="text-xl font-bold text-text-primary border-b border-border pb-2">Staff Late / Absent Tracking</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
              <div className="bg-warning-bg/30 border border-warning/20 p-4 rounded-lg flex flex-col gap-3">
                <h3 className="font-bold text-warning text-sm flex items-center gap-2"><Clock size={16}/> Late Comers Today</h3>
                <div className="bg-card border border-border p-3 rounded flex justify-between items-center shadow-sm">
                  <span className="text-sm font-bold text-text-primary">Mr. Vikram (Admin)</span>
                  <span className="text-xs text-text-secondary bg-bg-page px-2 py-1 rounded">Punched in: 08:45 AM</span>
                </div>
                <button className="text-xs font-bold text-warning hover:underline text-left">Send Warning Email</button>
              </div>

              <div className="bg-danger-bg/30 border border-danger/20 p-4 rounded-lg flex flex-col gap-3">
                <h3 className="font-bold text-danger text-sm flex items-center gap-2"><CheckSquare size={16}/> Absent (No Punch & No Leave)</h3>
                <div className="bg-card border border-border p-3 rounded flex justify-between items-center shadow-sm">
                  <span className="text-sm font-bold text-text-primary">Mrs. Smith (HOD)</span>
                  <span className="text-xs text-danger font-bold bg-white/50 px-2 py-1 rounded">Unexplained</span>
                </div>
                <button className="text-xs font-bold text-danger hover:underline text-left">Request Explanation</button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
