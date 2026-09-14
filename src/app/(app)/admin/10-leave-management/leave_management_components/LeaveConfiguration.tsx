"use client";

import React, { useState } from 'react';
import { Settings, Calendar, Plus, Trash2, CheckCircle } from 'lucide-react';
import clsx from 'clsx';

export default function LeaveConfiguration() {
  const [activeTab, setActiveTab] = useState('types');
  const [leaveTypes, setLeaveTypes] = useState([
    { id: 1, code: 'SL', name: 'Sick Leave', maxDays: 12, paid: true },
    { id: 2, code: 'CL', name: 'Casual Leave', maxDays: 10, paid: true },
    { id: 3, code: 'LWP', name: 'Leave Without Pay', maxDays: 30, paid: false },
  ]);
  const [holidays, setHolidays] = useState([
    { id: 1, name: 'Diwali', date: '2026-11-12', type: 'Public Holiday' },
    { id: 2, name: 'Christmas', date: '2026-12-25', type: 'Public Holiday' },
  ]);
  const [showToast, setShowToast] = useState(false);

  const handleSave = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const deleteItem = (id: number, setter: any, state: any) => {
    setter(state.filter((item: any) => item.id !== id));
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 h-full min-h-[500px] fade-in relative">
      {showToast && (
        <div className="absolute top-4 right-4 bg-success text-white px-4 py-2 rounded-lg shadow-lg font-bold text-sm flex items-center gap-2 fade-in z-10">
          <CheckCircle size={16} /> Configuration Saved Successfully
        </div>
      )}

      <div className="w-full md:w-64 bg-card border border-border rounded-xl shadow-sm flex flex-col p-2 h-fit shrink-0">
        <button onClick={() => setActiveTab('types')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition mb-1", activeTab === 'types' ? 'bg-primary/10 text-primary' : 'text-text-secondary hover:bg-bg-page')}>
          <Settings size={18} /> Leave Types
        </button>
        <button onClick={() => setActiveTab('calendar')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition", activeTab === 'calendar' ? 'bg-info/10 text-info' : 'text-text-secondary hover:bg-bg-page')}>
          <Calendar size={18} /> Holiday Calendar
        </button>
      </div>

      <div className="flex-1 bg-card border border-border rounded-xl shadow-sm p-6 overflow-y-auto">
        
        {activeTab === 'types' && (
          <div className="flex flex-col gap-6 fade-in">
            <h2 className="text-xl font-bold text-text-primary border-b border-border pb-2">Master Leave Types</h2>
            
            <div className="bg-bg-page border border-border p-4 rounded-lg flex flex-col md:flex-row gap-4 items-end">
              <div className="flex flex-col gap-1.5 flex-1">
                <label className="text-xs font-semibold text-text-secondary">Leave Name</label>
                <input type="text" placeholder="e.g. Maternity Leave" className="bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none focus:border-primary" />
              </div>
              <div className="flex flex-col gap-1.5 w-24">
                <label className="text-xs font-semibold text-text-secondary">Code</label>
                <input type="text" placeholder="ML" className="bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none focus:border-primary" />
              </div>
              <div className="flex flex-col gap-1.5 w-24">
                <label className="text-xs font-semibold text-text-secondary">Max Days</label>
                <input type="number" placeholder="180" className="bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none focus:border-primary" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-text-secondary">Is Paid?</label>
                <select className="bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none focus:border-primary">
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
              <button onClick={handleSave} className="bg-primary text-black px-4 py-1.5 h-[34px] rounded-md text-sm font-bold shadow-sm hover:bg-primary-hover active:scale-95 transition flex items-center gap-2">
                <Plus size={16}/> Add Type
              </button>
            </div>
            
            <table className="w-full text-left border-collapse border border-border rounded-lg overflow-hidden">
              <thead className="bg-bg-page">
                <tr>
                  <th className="p-3 text-xs font-bold text-text-secondary uppercase">Code</th>
                  <th className="p-3 text-xs font-bold text-text-secondary uppercase">Leave Name</th>
                  <th className="p-3 text-xs font-bold text-text-secondary uppercase">Max Days / Year</th>
                  <th className="p-3 text-xs font-bold text-text-secondary uppercase">Paid Status</th>
                  <th className="p-3 text-xs font-bold text-text-secondary uppercase text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {leaveTypes.map(lt => (
                  <tr key={lt.id} className="border-t border-border bg-card">
                    <td className="p-3 font-bold text-sm text-primary">{lt.code}</td>
                    <td className="p-3 font-semibold text-sm">{lt.name}</td>
                    <td className="p-3 font-semibold text-sm">{lt.maxDays}</td>
                    <td className="p-3">
                      <span className={clsx("text-[10px] font-bold px-2 py-0.5 rounded uppercase", lt.paid ? 'bg-success-bg text-success' : 'bg-danger-bg text-danger')}>
                        {lt.paid ? 'Paid' : 'Unpaid'}
                      </span>
                    </td>
                    <td className="p-3 text-right">
                      <button onClick={() => deleteItem(lt.id, setLeaveTypes, leaveTypes)} className="text-danger p-1.5 rounded hover:bg-danger-bg transition"><Trash2 size={16}/></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'calendar' && (
          <div className="flex flex-col gap-6 fade-in">
            <h2 className="text-xl font-bold text-text-primary border-b border-border pb-2">Academic Holiday Calendar</h2>
            
            <div className="bg-bg-page border border-border p-4 rounded-lg flex flex-col md:flex-row gap-4 items-end">
              <div className="flex flex-col gap-1.5 flex-1">
                <label className="text-xs font-semibold text-text-secondary">Holiday Occasion</label>
                <input type="text" placeholder="e.g. Summer Break" className="bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none focus:border-primary" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-text-secondary">Date</label>
                <input type="date" className="bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none focus:border-primary" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-text-secondary">Type</label>
                <select className="bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none focus:border-primary">
                  <option>Public Holiday</option>
                  <option>Restricted</option>
                  <option>Vacation</option>
                </select>
              </div>
              <button onClick={handleSave} className="bg-info text-white px-4 py-1.5 h-[34px] rounded-md text-sm font-bold shadow-sm hover:bg-info/90 active:scale-95 transition flex items-center gap-2">
                <Plus size={16}/> Add Holiday
              </button>
            </div>
            
            <table className="w-full text-left border-collapse border border-border rounded-lg overflow-hidden">
              <thead className="bg-bg-page">
                <tr>
                  <th className="p-3 text-xs font-bold text-text-secondary uppercase">Date</th>
                  <th className="p-3 text-xs font-bold text-text-secondary uppercase">Occasion Name</th>
                  <th className="p-3 text-xs font-bold text-text-secondary uppercase">Type</th>
                  <th className="p-3 text-xs font-bold text-text-secondary uppercase text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {holidays.map(h => (
                  <tr key={h.id} className="border-t border-border bg-card">
                    <td className="p-3 font-bold text-sm">{new Date(h.date).toLocaleDateString('en-GB')}</td>
                    <td className="p-3 font-semibold text-sm">{h.name}</td>
                    <td className="p-3 text-sm text-text-secondary">{h.type}</td>
                    <td className="p-3 text-right">
                      <button onClick={() => deleteItem(h.id, setHolidays, holidays)} className="text-danger p-1.5 rounded hover:bg-danger-bg transition"><Trash2 size={16}/></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

      </div>
    </div>
  );
}
