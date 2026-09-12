"use client";

import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  LineChart, Line, AreaChart, Area
} from 'recharts';

const feeData = [
  { month: 'Apr', collected: 450000, pending: 120000 },
  { month: 'May', collected: 520000, pending: 80000 },
  { month: 'Jun', collected: 300000, pending: 250000 },
  { month: 'Jul', collected: 600000, pending: 50000 },
  { month: 'Aug', collected: 480000, pending: 90000 },
  { month: 'Sep', collected: 420000, pending: 150000 },
];

const attendanceData = [
  { day: 'Mon', students: 95, staff: 98 },
  { day: 'Tue', students: 96, staff: 97 },
  { day: 'Wed', students: 92, staff: 100 },
  { day: 'Thu', students: 97, staff: 95 },
  { day: 'Fri', students: 89, staff: 92 },
  { day: 'Sat', students: 85, staff: 88 },
];

export function FeeCollectionChart() {
  return (
    <div className="bg-card border border-border rounded-xl p-6 shadow-sm h-[400px] flex flex-col">
      <div className="mb-4 flex justify-between items-center">
        <div>
          <h3 className="text-lg font-bold text-text-primary">Fee Collection & Dues</h3>
          <p className="text-sm text-text-secondary">Monthly fee collection vs pending dues</p>
        </div>
      </div>
      <div className="flex-1 min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={feeData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" />
            <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: 'var(--text-secondary)', fontSize: 12 }} dy={10} />
            <YAxis axisLine={false} tickLine={false} tick={{ fill: 'var(--text-secondary)', fontSize: 12 }} 
                   tickFormatter={(value) => `₹${value / 1000}k`} />
            <Tooltip 
              cursor={{ fill: 'var(--bg-page)' }}
              contentStyle={{ backgroundColor: 'var(--bg-popover)', border: '1px solid var(--border)', borderRadius: '8px', color: 'var(--text-primary)' }}
            />
            <Legend wrapperStyle={{ paddingTop: '20px' }} />
            <Bar dataKey="collected" name="Collected" fill="var(--success)" radius={[4, 4, 0, 0]} maxBarSize={40} />
            <Bar dataKey="pending" name="Pending" fill="var(--warning)" radius={[4, 4, 0, 0]} maxBarSize={40} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export function AttendanceAnalyticsChart() {
  return (
    <div className="bg-card border border-border rounded-xl p-6 shadow-sm h-[400px] flex flex-col">
      <div className="mb-4 flex justify-between items-center">
        <div>
          <h3 className="text-lg font-bold text-text-primary">Attendance Analytics</h3>
          <p className="text-sm text-text-secondary">Weekly attendance percentage (%)</p>
        </div>
      </div>
      <div className="flex-1 min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={attendanceData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorStudents" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--info)" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="var(--info)" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorStaff" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--purple)" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="var(--purple)" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" />
            <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: 'var(--text-secondary)', fontSize: 12 }} dy={10} />
            <YAxis axisLine={false} tickLine={false} tick={{ fill: 'var(--text-secondary)', fontSize: 12 }} domain={[50, 100]} />
            <Tooltip 
              contentStyle={{ backgroundColor: 'var(--bg-popover)', border: '1px solid var(--border)', borderRadius: '8px', color: 'var(--text-primary)' }}
            />
            <Legend wrapperStyle={{ paddingTop: '20px' }} />
            <Area type="monotone" dataKey="students" name="Students" stroke="var(--info)" strokeWidth={3} fillOpacity={1} fill="url(#colorStudents)" />
            <Area type="monotone" dataKey="staff" name="Staff" stroke="var(--purple)" strokeWidth={3} fillOpacity={1} fill="url(#colorStaff)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

const performanceData = [
  { term: 'Term 1', 'Class IX': 78, 'Class X': 82, 'Class XI': 75, 'Class XII': 85 },
  { term: 'Term 2', 'Class IX': 81, 'Class X': 85, 'Class XI': 78, 'Class XII': 88 },
  { term: 'Finals', 'Class IX': 85, 'Class X': 89, 'Class XI': 82, 'Class XII': 91 },
];

export function AcademicPerformanceChart() {
  return (
    <div className="bg-card border border-border rounded-xl p-6 shadow-sm h-[400px] flex flex-col">
      <div className="mb-4 flex justify-between items-center">
        <div>
          <h3 className="text-lg font-bold text-text-primary">Academic Performance Summary</h3>
          <p className="text-sm text-text-secondary">Average scores across terms</p>
        </div>
      </div>
      <div className="flex-1 min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={performanceData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" />
            <XAxis dataKey="term" axisLine={false} tickLine={false} tick={{ fill: 'var(--text-secondary)', fontSize: 12 }} dy={10} />
            <YAxis axisLine={false} tickLine={false} tick={{ fill: 'var(--text-secondary)', fontSize: 12 }} domain={[60, 100]} />
            <Tooltip 
              contentStyle={{ backgroundColor: 'var(--bg-popover)', border: '1px solid var(--border)', borderRadius: '8px', color: 'var(--text-primary)' }}
            />
            <Legend wrapperStyle={{ paddingTop: '20px' }} />
            <Line type="monotone" dataKey="Class X" stroke="var(--primary)" strokeWidth={3} />
            <Line type="monotone" dataKey="Class XII" stroke="var(--secondary)" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
