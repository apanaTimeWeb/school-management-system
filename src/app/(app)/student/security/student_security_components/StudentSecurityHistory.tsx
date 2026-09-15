"use client";

import React from 'react';
import type { LoginHistoryEntry } from '../student_security_types/student_security_types';
import { History, ShieldAlert, ShieldCheck } from 'lucide-react';
import clsx from 'clsx';

interface Props {
  history: LoginHistoryEntry[];
}

export default function StudentSecurityHistory({ history }: Props) {
  return (
    <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
      <div className="border-b border-border bg-page/50 p-4 flex items-center gap-2">
        <History size={18} className="text-primary" />
        <h2 className="text-base font-bold text-text-primary">Login History</h2>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-page border-b border-border text-text-secondary text-[10px] uppercase tracking-wider">
              <th className="p-4 font-bold">Status</th>
              <th className="p-4 font-bold">Date & Time</th>
              <th className="p-4 font-bold">Device & Browser</th>
              <th className="p-4 font-bold">IP & Location</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {history.map((log) => (
              <tr key={log.id} className="border-b border-border last:border-b-0 hover:bg-page/50 transition-colors">
                
                <td className="p-4">
                  <div className={clsx(
                    "inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider border",
                    log.status === 'Success' ? "bg-success/10 text-success border-success/20" : "bg-danger/10 text-danger border-danger/20"
                  )}>
                    {log.status === 'Success' ? <ShieldCheck size={12} /> : <ShieldAlert size={12} />}
                    {log.status}
                  </div>
                </td>
                
                <td className="p-4 text-text-primary font-semibold whitespace-nowrap">
                  {log.timestamp}
                </td>
                
                <td className="p-4">
                  <span className="text-text-primary font-bold block">{log.device}</span>
                  <span className="text-text-secondary text-xs">{log.browser}</span>
                </td>
                
                <td className="p-4">
                  <span className="text-text-primary font-bold block">{log.ipAddress}</span>
                  <span className="text-text-secondary text-xs">{log.location}</span>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
