"use client";

import React, { useState } from 'react';
import { AlertTriangle, TrendingUp, Download, Phone } from 'lucide-react';
import clsx from 'clsx';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const collectionData = [
  { month: 'Apr', amount: 400000 },
  { month: 'May', amount: 150000 },
  { month: 'Jun', amount: 100000 },
  { month: 'Jul', amount: 350000 },
  { month: 'Aug', amount: 120000 },
  { month: 'Sep', amount: 110000 },
  { month: 'Oct', amount: 280000 },
];

const statusData = [
  { name: 'Collected', value: 85, color: 'var(--success)' },
  { name: 'Pending', value: 15, color: 'var(--danger)' },
];

export default function DefaultersReports() {
  const [activeTab, setActiveTab] = useState('defaulters');

  const handleNotify = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget;
    btn.innerText = "Sent!";
    btn.disabled = true;
    btn.classList.add("opacity-50");
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 h-full min-h-[500px] fade-in">
      <div className="w-full md:w-64 bg-card border border-border rounded-xl shadow-sm flex flex-col p-2 h-fit shrink-0">
        <button onClick={() => setActiveTab('defaulters')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition mb-1", activeTab === 'defaulters' ? 'bg-danger/10 text-danger' : 'text-text-secondary hover:bg-bg-page')}>
          <AlertTriangle size={18} /> Fee Defaulters List
        </button>
        <button onClick={() => setActiveTab('reports')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition", activeTab === 'reports' ? 'bg-primary/10 text-primary' : 'text-text-secondary hover:bg-bg-page')}>
          <TrendingUp size={18} /> Collection Analytics
        </button>
      </div>

      <div className="flex-1 bg-card border border-border rounded-xl shadow-sm p-6 overflow-y-auto">
        
        {activeTab === 'defaulters' && (
          <div className="flex flex-col gap-6 fade-in">
            <h2 className="text-xl font-bold text-text-primary border-b border-border pb-2">Outstanding Fees & Defaulters</h2>
            
            <div className="flex justify-between items-end bg-danger-bg/30 border border-danger/30 p-4 rounded-lg mb-2">
              <div className="flex flex-col">
                <span className="text-xs font-bold text-danger uppercase mb-1">Total Outstanding (School Wide)</span>
                <span className="text-2xl font-black text-danger">₹ 1,45,500</span>
              </div>
              <button className="bg-danger text-white px-4 py-2 rounded-md text-sm font-bold shadow-sm hover:bg-danger/90 active:scale-95 transition flex items-center gap-2">
                <AlertTriangle size={16}/> Send Reminders to All
              </button>
            </div>

            <table className="w-full text-left border-collapse border border-border rounded-lg overflow-hidden">
              <thead className="bg-bg-page">
                <tr>
                  <th className="p-3 text-xs font-bold text-text-secondary uppercase">Student</th>
                  <th className="p-3 text-xs font-bold text-text-secondary uppercase">Class</th>
                  <th className="p-3 text-xs font-bold text-text-secondary uppercase">Pending Months</th>
                  <th className="p-3 text-xs font-bold text-text-secondary uppercase text-right">Due Amt (₹)</th>
                  <th className="p-3 text-xs font-bold text-text-secondary uppercase text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-border bg-card">
                  <td className="p-3 font-semibold text-sm">Sneha Verma</td>
                  <td className="p-3 text-sm">Class X - A</td>
                  <td className="p-3 text-sm"><span className="bg-warning-bg text-warning font-bold text-xs px-2 py-0.5 rounded">Sep, Oct</span></td>
                  <td className="p-3 text-sm text-right font-bold text-danger">11,000</td>
                  <td className="p-3 flex items-center justify-end gap-2">
                    <button className="p-1.5 bg-bg-page hover:bg-info/20 text-info rounded transition" title="Call Parent"><Phone size={16}/></button>
                    <button onClick={handleNotify} className="text-xs bg-danger-bg border border-danger/30 text-danger px-3 py-1.5 rounded font-bold transition">Send SMS</button>
                  </td>
                </tr>
                <tr className="border-t border-border bg-card">
                  <td className="p-3 font-semibold text-sm">Vikram Singh</td>
                  <td className="p-3 text-sm">Class X - A</td>
                  <td className="p-3 text-sm"><span className="bg-warning-bg text-warning font-bold text-xs px-2 py-0.5 rounded">Oct</span></td>
                  <td className="p-3 text-sm text-right font-bold text-danger">5,500</td>
                  <td className="p-3 flex items-center justify-end gap-2">
                    <button className="p-1.5 bg-bg-page hover:bg-info/20 text-info rounded transition" title="Call Parent"><Phone size={16}/></button>
                    <button onClick={handleNotify} className="text-xs bg-danger-bg border border-danger/30 text-danger px-3 py-1.5 rounded font-bold transition">Send SMS</button>
                  </td>
                </tr>
              </tbody>
            </table>

          </div>
        )}

        {activeTab === 'reports' && (
          <div className="flex flex-col gap-6 fade-in h-full">
            <div className="flex justify-between items-center border-b border-border pb-2">
              <h2 className="text-xl font-bold text-text-primary">Fee Collection Analytics</h2>
              <button className="bg-bg-page border border-border text-text-primary px-3 py-1.5 rounded-md text-sm font-bold shadow-sm hover:bg-card transition flex items-center gap-2">
                <Download size={14}/> Export CSV
              </button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1 min-h-[300px]">
              <div className="lg:col-span-2 bg-bg-page border border-border p-4 rounded-lg flex flex-col">
                <h3 className="font-bold text-sm text-text-secondary mb-4 text-center">Monthly Collection Trend (₹)</h3>
                <div className="flex-1">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={collectionData} margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
                      <defs>
                        <linearGradient id="colorAmt" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="var(--primary)" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" />
                      <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: 'var(--text-secondary)', fontSize: 12 }} dy={10} />
                      <YAxis axisLine={false} tickLine={false} tick={{ fill: 'var(--text-secondary)', fontSize: 12 }} width={60} tickFormatter={(value) => `${value/1000}k`} />
                      <Tooltip contentStyle={{ backgroundColor: 'var(--bg-popover)', border: '1px solid var(--border)', borderRadius: '8px' }} />
                      <Area type="monotone" dataKey="amount" stroke="var(--primary)" strokeWidth={3} fillOpacity={1} fill="url(#colorAmt)" activeDot={{r: 6}} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="bg-bg-page border border-border p-4 rounded-lg flex flex-col items-center justify-center">
                <h3 className="font-bold text-sm text-text-secondary mb-2">Overall Recovery Status</h3>
                <div className="h-[200px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie data={statusData} innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                        {statusData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip contentStyle={{ backgroundColor: 'var(--bg-popover)', border: '1px solid var(--border)', borderRadius: '8px' }} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex justify-center gap-4 mt-2">
                  <span className="flex items-center gap-1 text-xs font-bold text-text-secondary"><div className="w-3 h-3 rounded-full bg-success"></div> Collected (85%)</span>
                  <span className="flex items-center gap-1 text-xs font-bold text-text-secondary"><div className="w-3 h-3 rounded-full bg-danger"></div> Pending (15%)</span>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
