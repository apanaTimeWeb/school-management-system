"use client";

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Science', count: 12 },
  { name: 'English', count: 8 },
  { name: 'Maths', count: 10 },
  { name: 'Admin', count: 5 },
  { name: 'Support', count: 15 },
];

export default function StaffReports() {
  return (
    <div className="flex flex-col gap-6 h-full min-h-[500px] fade-in">
      <div className="flex-1 bg-card border border-border rounded-xl shadow-sm p-6 overflow-y-auto flex flex-col">
        <h2 className="text-xl font-bold text-text-primary border-b border-border pb-2 mb-6">Staff Strength Analytics</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-bg-page border border-border p-4 rounded-lg flex flex-col items-center justify-center">
            <span className="text-sm font-bold text-text-secondary uppercase">Total Staff</span>
            <span className="text-3xl font-black text-primary mt-1">50</span>
          </div>
          <div className="bg-bg-page border border-border p-4 rounded-lg flex flex-col items-center justify-center">
            <span className="text-sm font-bold text-text-secondary uppercase">Teaching Staff</span>
            <span className="text-3xl font-black text-info mt-1">30</span>
          </div>
          <div className="bg-bg-page border border-border p-4 rounded-lg flex flex-col items-center justify-center">
            <span className="text-sm font-bold text-text-secondary uppercase">Non-Teaching</span>
            <span className="text-3xl font-black text-warning mt-1">20</span>
          </div>
        </div>

        <div className="bg-bg-page border border-border p-4 rounded-lg flex-1 min-h-[300px] flex flex-col">
          <h3 className="font-bold text-sm text-text-secondary mb-4 text-center">Department-wise Staff Distribution</h3>
          <div className="flex-1">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: 'var(--text-secondary)', fontSize: 12 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: 'var(--text-secondary)', fontSize: 12 }} />
                <Tooltip cursor={{fill: 'var(--card)'}} contentStyle={{ backgroundColor: 'var(--bg-popover)', border: '1px solid var(--border)', borderRadius: '8px' }} />
                <Bar dataKey="count" fill="var(--primary)" radius={[4,4,0,0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </div>
  );
}
