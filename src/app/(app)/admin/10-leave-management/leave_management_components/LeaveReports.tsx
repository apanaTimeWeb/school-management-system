"use client";

import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { name: 'Sick Leave', value: 45 },
  { name: 'Casual Leave', value: 30 },
  { name: 'Maternity Leave', value: 10 },
  { name: 'LWP', value: 15 },
];

const COLORS = ['#ef4444', '#3b82f6', '#8b5cf6', '#f59e0b'];

export default function LeaveReports() {
  return (
    <div className="flex flex-col gap-6 h-full min-h-[500px] fade-in">
      <div className="flex-1 bg-card border border-border rounded-xl shadow-sm p-6 overflow-y-auto flex flex-col">
        <h2 className="text-xl font-bold text-text-primary border-b border-border pb-2 mb-6">Annual Leave Utilization Analytics</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-bg-page border border-border p-4 rounded-lg flex flex-col items-center justify-center text-center">
            <span className="text-xs font-bold text-text-secondary uppercase">Total Leaves (Staff)</span>
            <span className="text-2xl font-black text-primary mt-1">124</span>
          </div>
          <div className="bg-bg-page border border-border p-4 rounded-lg flex flex-col items-center justify-center text-center">
            <span className="text-xs font-bold text-text-secondary uppercase">Total Leaves (Students)</span>
            <span className="text-2xl font-black text-info mt-1">456</span>
          </div>
          <div className="bg-bg-page border border-border p-4 rounded-lg flex flex-col items-center justify-center text-center">
            <span className="text-xs font-bold text-text-secondary uppercase">Most Used Type</span>
            <span className="text-lg font-black text-danger mt-1">Sick Leave</span>
          </div>
          <div className="bg-bg-page border border-border p-4 rounded-lg flex flex-col items-center justify-center text-center">
            <span className="text-xs font-bold text-text-secondary uppercase">LWP Count</span>
            <span className="text-2xl font-black text-warning mt-1">15</span>
          </div>
        </div>

        <div className="bg-bg-page border border-border p-4 rounded-lg flex-1 min-h-[350px] flex flex-col items-center">
          <h3 className="font-bold text-sm text-text-secondary mb-2">Leave Distribution (By Type)</h3>
          <div className="w-full max-w-md h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                  stroke="none"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: 'var(--bg-popover)', border: '1px solid var(--border)', borderRadius: '8px' }} />
                <Legend verticalAlign="bottom" height={36}/>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </div>
  );
}
