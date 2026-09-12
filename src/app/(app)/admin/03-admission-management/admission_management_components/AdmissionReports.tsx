"use client";

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const dataBar = [
  { name: 'Class I', target: 50, admitted: 42 },
  { name: 'Class II', target: 50, admitted: 38 },
  { name: 'Class III', target: 40, admitted: 40 },
];

const dataPie = [
  { name: 'Online', value: 400 },
  { name: 'Offline', value: 300 },
];
const COLORS = ['var(--info)', 'var(--warning)'];

export default function AdmissionReports() {
  return (
    <div className="flex flex-col gap-6 fade-in h-full">
      <div className="bg-card border border-border rounded-xl p-6 shadow-sm flex flex-col">
        <h2 className="text-xl font-bold text-text-primary border-b border-border pb-2 mb-6">Admission Reports & Analytics</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1 min-h-[300px]">
          <div className="flex flex-col h-full">
            <h3 className="text-sm font-bold text-text-secondary mb-4 text-center">Class-wise Admission Targets</h3>
            <div className="flex-1 min-h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={dataBar} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: 'var(--text-secondary)', fontSize: 12 }} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: 'var(--text-secondary)', fontSize: 12 }} />
                  <RechartsTooltip cursor={{fill: 'var(--bg-page)'}} contentStyle={{ backgroundColor: 'var(--bg-popover)', border: '1px solid var(--border)', borderRadius: '8px' }} />
                  <Bar dataKey="target" fill="var(--bg-page)" stroke="var(--border)" radius={[4,4,0,0]} />
                  <Bar dataKey="admitted" fill="var(--primary)" radius={[4,4,0,0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="flex flex-col h-full">
            <h3 className="text-sm font-bold text-text-secondary mb-4 text-center">Admission Source (Online vs Offline)</h3>
            <div className="flex-1 min-h-[250px] flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={dataPie} innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value" stroke="none">
                    {dataPie.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <RechartsTooltip contentStyle={{ backgroundColor: 'var(--bg-popover)', border: '1px solid var(--border)', borderRadius: '8px' }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center gap-6 mt-2">
              <span className="flex items-center gap-2 text-xs font-bold text-text-secondary"><div className="w-3 h-3 rounded-full bg-info"></div> Online (57%)</span>
              <span className="flex items-center gap-2 text-xs font-bold text-text-secondary"><div className="w-3 h-3 rounded-full bg-warning"></div> Offline (43%)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
