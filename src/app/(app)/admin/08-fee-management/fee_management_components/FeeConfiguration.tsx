"use client";

import React, { useState } from 'react';
import { Settings, Users, User, Calendar, CheckCircle, Trash2 } from 'lucide-react';
import clsx from 'clsx';

export default function FeeConfiguration() {
  const [activeTab, setActiveTab] = useState('structure');
  const [feeHeads, setFeeHeads] = useState([
    { id: 1, name: 'Tuition Fee', frequency: 'Monthly', amount: 2500 },
    { id: 2, name: 'Library Fee', frequency: 'Yearly', amount: 1000 },
    { id: 3, name: 'Transport Fee', frequency: 'Monthly', amount: 1500 },
  ]);
  const [showToast, setShowToast] = useState(false);

  const handleSave = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const deleteFeeHead = (id: number) => {
    setFeeHeads(feeHeads.filter(f => f.id !== id));
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 h-full min-h-[500px] fade-in relative">
      {showToast && (
        <div className="absolute top-4 right-4 bg-success text-white px-4 py-2 rounded-lg shadow-lg font-bold text-sm flex items-center gap-2 fade-in z-10">
          <CheckCircle size={16} /> Saved Successfully
        </div>
      )}

      <div className="w-full md:w-64 bg-card border border-border rounded-xl shadow-sm flex flex-col p-2 h-fit shrink-0">
        <button onClick={() => setActiveTab('structure')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition mb-1", activeTab === 'structure' ? 'bg-primary/10 text-primary' : 'text-text-secondary hover:bg-bg-page')}>
          <Settings size={18} /> Fee Structure
        </button>
        <button onClick={() => setActiveTab('class')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition mb-1", activeTab === 'class' ? 'bg-info/10 text-info' : 'text-text-secondary hover:bg-bg-page')}>
          <Users size={18} /> Class-wise Fees
        </button>
        <button onClick={() => setActiveTab('student')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition mb-1", activeTab === 'student' ? 'bg-warning/10 text-warning' : 'text-text-secondary hover:bg-bg-page')}>
          <User size={18} /> Student-wise Fees
        </button>
        <button onClick={() => setActiveTab('duedate')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition", activeTab === 'duedate' ? 'bg-danger/10 text-danger' : 'text-text-secondary hover:bg-bg-page')}>
          <Calendar size={18} /> Due Date Config
        </button>
      </div>

      <div className="flex-1 bg-card border border-border rounded-xl shadow-sm p-6 overflow-y-auto">
        
        {activeTab === 'structure' && (
          <div className="flex flex-col gap-6 fade-in">
            <h2 className="text-xl font-bold text-text-primary border-b border-border pb-2">Master Fee Structure</h2>
            
            <div className="flex flex-col gap-4 bg-bg-page border border-border p-5 rounded-lg max-w-2xl">
              <h3 className="font-bold text-sm text-text-secondary uppercase">Create Fee Head</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-text-secondary">Fee Name</label>
                  <input type="text" placeholder="e.g. Activity Fee" className="bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none focus:border-primary" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-text-secondary">Frequency</label>
                  <select className="bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none focus:border-primary">
                    <option>Monthly</option>
                    <option>Quarterly</option>
                    <option>Half Yearly</option>
                    <option>Yearly</option>
                    <option>One-Time</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-text-secondary">Default Amount (₹)</label>
                  <input type="number" placeholder="0" className="bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none focus:border-primary" />
                </div>
                <div className="flex flex-col gap-1.5 md:col-span-3">
                  <button onClick={handleSave} className="bg-primary text-white px-4 py-2 rounded-md text-sm font-bold shadow-sm hover:bg-primary-hover active:scale-95 transition">Add Fee Head</button>
                </div>
              </div>
            </div>

            <div className="mt-2 max-w-2xl">
              <h3 className="font-bold text-sm text-text-secondary uppercase mb-3">Configured Fee Heads</h3>
              <table className="w-full text-left border-collapse border border-border rounded-lg overflow-hidden">
                <thead className="bg-bg-page">
                  <tr>
                    <th className="p-3 text-xs font-bold text-text-secondary uppercase">Fee Head</th>
                    <th className="p-3 text-xs font-bold text-text-secondary uppercase">Frequency</th>
                    <th className="p-3 text-xs font-bold text-text-secondary uppercase">Base Amount</th>
                    <th className="p-3 text-xs font-bold text-text-secondary uppercase text-right">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {feeHeads.map(f => (
                    <tr key={f.id} className="border-t border-border bg-card">
                      <td className="p-3 font-semibold text-sm">{f.name}</td>
                      <td className="p-3 text-sm">{f.frequency}</td>
                      <td className="p-3 text-sm font-bold text-success">₹ {f.amount}</td>
                      <td className="p-3 text-right">
                        <button onClick={() => deleteFeeHead(f.id)} className="text-danger p-1.5 rounded-full hover:bg-danger-bg transition" title="Delete"><Trash2 size={16}/></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'class' && (
          <div className="flex flex-col gap-6 fade-in">
            <h2 className="text-xl font-bold text-text-primary border-b border-border pb-2">Class-wise Fee Assignment</h2>
            
            <div className="flex gap-4 items-end bg-bg-page border border-border p-4 rounded-lg">
              <div className="flex flex-col gap-1.5 flex-1 min-w-[200px]">
                <label className="text-xs font-semibold text-text-secondary">Select Class</label>
                <select className="bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none focus:border-primary">
                  <option>Class X</option>
                  <option>Class IX</option>
                </select>
              </div>
              <button className="bg-primary text-white px-6 py-1.5 h-[34px] rounded-md text-sm font-bold shadow-sm hover:bg-primary-hover active:scale-95 transition">Load Structure</button>
            </div>

            <div className="bg-card border border-border p-4 rounded-lg shadow-sm">
              <h3 className="font-bold text-sm text-text-primary mb-4">Applicable Fees for Class X</h3>
              <div className="flex flex-col gap-3">
                <label className="flex items-center gap-3 p-2 hover:bg-bg-page rounded transition cursor-pointer">
                  <input type="checkbox" defaultChecked className="accent-primary w-4 h-4" />
                  <span className="flex-1 font-semibold text-sm">Tuition Fee (Monthly)</span>
                  <input type="number" defaultValue="3000" className="bg-bg-input border border-border rounded px-2 py-1 text-sm outline-none w-24" />
                </label>
                <label className="flex items-center gap-3 p-2 hover:bg-bg-page rounded transition cursor-pointer">
                  <input type="checkbox" defaultChecked className="accent-primary w-4 h-4" />
                  <span className="flex-1 font-semibold text-sm">Library Fee (Yearly)</span>
                  <input type="number" defaultValue="1000" className="bg-bg-input border border-border rounded px-2 py-1 text-sm outline-none w-24" />
                </label>
                <label className="flex items-center gap-3 p-2 hover:bg-bg-page rounded transition cursor-pointer">
                  <input type="checkbox" className="accent-primary w-4 h-4" />
                  <span className="flex-1 font-semibold text-sm">Lab Fee (Yearly)</span>
                  <input type="number" defaultValue="1500" disabled className="bg-bg-input border border-border rounded px-2 py-1 text-sm outline-none w-24 opacity-50" />
                </label>
              </div>
              <div className="flex justify-end mt-4 pt-4 border-t border-border">
                <button onClick={handleSave} className="bg-primary text-white px-6 py-2 rounded-md text-sm font-bold shadow-sm hover:bg-primary-hover active:scale-95 transition">Save Class Fees</button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'student' && (
          <div className="flex flex-col gap-6 fade-in">
            <h2 className="text-xl font-bold text-text-primary border-b border-border pb-2">Student-wise Custom Fees</h2>
            <p className="text-sm text-text-secondary">Override class-level fees or add special one-time charges to a specific student.</p>
            
            <div className="flex gap-4 items-end bg-bg-page border border-border p-4 rounded-lg">
              <div className="flex flex-col gap-1.5 flex-1">
                <label className="text-xs font-semibold text-text-secondary">Search Student</label>
                <input type="text" placeholder="Admission No. or Name..." className="bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none focus:border-primary" />
              </div>
              <button className="bg-primary text-white px-6 py-1.5 h-[34px] rounded-md text-sm font-bold shadow-sm hover:bg-primary-hover active:scale-95 transition">Search</button>
            </div>

            <div className="bg-card border border-border p-4 rounded-lg shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <div className="flex flex-col">
                  <span className="font-bold text-sm text-text-primary">Rohan Sharma (10453)</span>
                  <span className="text-xs text-text-secondary">Class X - A</span>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 p-2 bg-warning-bg/30 border border-warning/20 rounded">
                  <span className="flex-1 font-semibold text-sm">Transport Fee (Monthly)</span>
                  <span className="text-xs bg-warning text-white px-2 py-0.5 rounded font-bold">Custom</span>
                  <input type="number" defaultValue="2000" className="bg-white border border-border rounded px-2 py-1 text-sm outline-none w-24" />
                </div>
              </div>
              <div className="flex justify-end mt-4">
                <button onClick={handleSave} className="bg-primary text-white px-6 py-2 rounded-md text-sm font-bold shadow-sm hover:bg-primary-hover active:scale-95 transition">Apply Custom Fee</button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'duedate' && (
          <div className="flex flex-col gap-6 fade-in">
            <h2 className="text-xl font-bold text-text-primary border-b border-border pb-2">Due Date & Late Fee Trigger Configuration</h2>
            
            <div className="bg-bg-page border border-border p-5 rounded-lg max-w-xl flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-text-primary">Monthly Fee Due Date</label>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-text-secondary">Generate invoice on the</span>
                  <input type="number" defaultValue="1" className="bg-bg-input border border-border rounded-md px-2 py-1 text-sm outline-none w-16 text-center" />
                  <span className="text-sm text-text-secondary">of every month.</span>
                </div>
              </div>
              
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-text-primary">Last Date of Payment</label>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-text-secondary">Payment must be cleared by the</span>
                  <input type="number" defaultValue="10" className="bg-bg-input border border-border rounded-md px-2 py-1 text-sm outline-none w-16 text-center" />
                  <span className="text-sm text-text-secondary">of the month.</span>
                </div>
              </div>

              <div className="flex flex-col gap-1.5 mt-2 pt-4 border-t border-border">
                <label className="text-sm font-semibold text-danger flex items-center gap-2">Late Fee Rule</label>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-text-secondary">Charge ₹</span>
                  <input type="number" defaultValue="50" className="bg-bg-input border border-border rounded-md px-2 py-1 text-sm outline-none w-20 text-center" />
                  <span className="text-sm text-text-secondary">per day after the due date.</span>
                </div>
              </div>

              <button onClick={handleSave} className="bg-primary text-white px-4 py-2 rounded-md text-sm font-bold shadow-sm hover:bg-primary-hover active:scale-95 transition self-start mt-2">Save Due Date Rules</button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
