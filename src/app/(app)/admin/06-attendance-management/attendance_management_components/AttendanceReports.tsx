"use client";

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

const dailyData = [
  { name: 'Class I', present: 95, absent: 5 },
  { name: 'Class II', present: 88, absent: 12 },
  { name: 'Class X', present: 98, absent: 2 },
];

const monthlyData = [
  { name: 'Week 1', attendance: 92 },
  { name: 'Week 2', attendance: 94 },
  { name: 'Week 3', attendance: 91 },
  { name: 'Week 4', attendance: 96 },
];

export default function AttendanceReports() {
  return (
    <div className="flex flex-col gap-6 fade-in h-full">
      <div className="bg-card border border-border rounded-xl p-6 shadow-sm flex flex-col">
        <div className="flex justify-between items-center border-b border-border pb-2 mb-6">
          <h2 className="text-xl font-bold text-text-primary">Attendance Analytics & Reports</h2>
          <div className="flex gap-2">
            <select className="bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none focus:border-primary">
              <option>Students</option>
              <option>Staff</option>
            </select>
            <button className="bg-primary text-black px-4 py-1.5 rounded-md text-sm font-bold shadow-sm">Export PDF</button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1 min-h-[350px]">
          <div className="flex flex-col h-full bg-bg-page border border-border rounded-lg p-4">
            <h3 className="text-sm font-bold text-text-secondary mb-4 text-center">Daily Attendance (Class-wise)</h3>
            <div className="flex-1 min-h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={dailyData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: 'var(--text-secondary)', fontSize: 12 }} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: 'var(--text-secondary)', fontSize: 12 }} />
                  <RechartsTooltip cursor={{fill: 'var(--bg-page)'}} contentStyle={{ backgroundColor: 'var(--bg-popover)', border: '1px solid var(--border)', borderRadius: '8px' }} />
                  <Bar dataKey="present" stackId="a" fill="var(--success)" radius={[0,0,0,0]} />
                  <Bar dataKey="absent" stackId="a" fill="var(--danger)" radius={[4,4,0,0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center gap-4 mt-4">
              <span className="flex items-center gap-1 text-xs font-bold text-text-secondary"><div className="w-3 h-3 rounded-full bg-success"></div> Present</span>
              <span className="flex items-center gap-1 text-xs font-bold text-text-secondary"><div className="w-3 h-3 rounded-full bg-danger"></div> Absent</span>
            </div>
          </div>

          <div className="flex flex-col h-full bg-bg-page border border-border rounded-lg p-4">
            <h3 className="text-sm font-bold text-text-secondary mb-4 text-center">Monthly Attendance Trend (School Average)</h3>
            <div className="flex-1 min-h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: 'var(--text-secondary)', fontSize: 12 }} dy={10} />
                  <YAxis domain={[80, 100]} axisLine={false} tickLine={false} tick={{ fill: 'var(--text-secondary)', fontSize: 12 }} />
                  <RechartsTooltip contentStyle={{ backgroundColor: 'var(--bg-popover)', border: '1px solid var(--border)', borderRadius: '8px' }} />
                  <Line type="monotone" dataKey="attendance" stroke="var(--primary)" strokeWidth={3} dot={{ r: 4, fill: 'var(--primary)', strokeWidth: 2, stroke: '#fff' }} activeDot={{ r: 6 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="text-center mt-4">
              <span className="text-xs font-bold text-text-secondary">Average Monthly Attendance: <span className="text-primary text-sm">93.2%</span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
