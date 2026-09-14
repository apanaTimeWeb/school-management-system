"use client";
import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";

const ATTENDANCE_DATA = [
  { name: "Mon", Present: 138, Absent: 4 },
  { name: "Tue", Present: 140, Absent: 2 },
  { name: "Wed", Present: 135, Absent: 7 },
  { name: "Thu", Present: 139, Absent: 3 },
  { name: "Fri", Present: 137, Absent: 5 },
  { name: "Sat", Present: 141, Absent: 1 },
];

export default function HRDashboardCharts() {
  return (
    <div className="bg-card border border-border rounded-2xl shadow-sm p-6 flex flex-col h-[400px]">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-bold text-text-primary">Staff Attendance (This Week)</h3>
        <select className="bg-bg-input border border-border rounded-lg text-xs font-bold text-text-secondary px-3 py-1.5 outline-none focus:border-indigo-500">
          <option>All Staff</option>
          <option>Teaching</option>
          <option>Non-Teaching</option>
        </select>
      </div>

      <div className="flex-1 w-full min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={ATTENDANCE_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }} barGap={2}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(0,0,0,0.05)" />
            <XAxis 
              dataKey="name" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#64748B', fontWeight: 600 }}
              dy={10}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#64748B', fontWeight: 600 }}
            />
            <Tooltip 
              cursor={{ fill: 'rgba(0,0,0,0.02)' }}
              contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)', fontWeight: 'bold' }}
            />
            <Bar dataKey="Present" fill="#4F46E5" radius={[4, 4, 0, 0]} maxBarSize={40} />
            <Bar dataKey="Absent" fill="#F43F5E" radius={[4, 4, 0, 0]} maxBarSize={40} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
