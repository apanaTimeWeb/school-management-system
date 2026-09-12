"use client";

import React from 'react';
import { History, Check, X } from 'lucide-react';
import clsx from 'clsx';

const historyData = [
  { id: 1, date: '2026-09-12 10:00 AM', type: 'SMS', audience: 'Class 10-A', content: 'Tomorrow is a holiday...', status: 'Delivered', count: 45 },
  { id: 2, date: '2026-09-11 02:30 PM', type: 'Email', audience: 'Staff', content: 'Staff meeting at 4 PM...', status: 'Delivered', count: 32 },
  { id: 3, date: '2026-09-10 09:15 AM', type: 'WhatsApp', audience: 'Defaulter Parents', content: 'Please pay fee dues...', status: 'Failed', count: 12 },
];

export default function CommunicationHistory() {
  return (
    <div className="flex flex-col gap-6 h-full fade-in">
      <div className="flex-1 bg-card border border-border rounded-xl shadow-sm p-6 overflow-y-auto">
        <h2 className="text-xl font-bold text-text-primary border-b border-border pb-4 mb-6 flex items-center gap-2">
          <History size={20} className="text-primary"/> Global Communication Logs
        </h2>
        
        <table className="w-full text-left border-collapse border border-border rounded-lg overflow-hidden">
          <thead className="bg-bg-page">
            <tr>
              <th className="p-3 text-xs font-bold text-text-secondary uppercase">Date & Time</th>
              <th className="p-3 text-xs font-bold text-text-secondary uppercase">Channel</th>
              <th className="p-3 text-xs font-bold text-text-secondary uppercase">Audience</th>
              <th className="p-3 text-xs font-bold text-text-secondary uppercase">Recipients</th>
              <th className="p-3 text-xs font-bold text-text-secondary uppercase">Status</th>
            </tr>
          </thead>
          <tbody>
            {historyData.map(h => (
              <tr key={h.id} className="border-t border-border bg-card hover:bg-bg-page transition cursor-pointer">
                <td className="p-3 font-semibold text-sm text-text-primary">{h.date}</td>
                <td className="p-3 font-bold text-xs uppercase text-primary">{h.type}</td>
                <td className="p-3 font-semibold text-sm">{h.audience}</td>
                <td className="p-3 font-bold text-sm text-text-secondary">{h.count}</td>
                <td className="p-3">
                  <span className={clsx("flex items-center gap-1 w-fit text-[10px] font-bold px-2 py-0.5 rounded uppercase", h.status === 'Delivered' ? 'bg-success-bg text-success' : 'bg-danger-bg text-danger')}>
                    {h.status === 'Delivered' ? <Check size={12}/> : <X size={12}/>} {h.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
