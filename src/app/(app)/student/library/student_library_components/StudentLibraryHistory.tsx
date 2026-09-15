"use client";

import React from 'react';
import type { LibraryHistoryRecord } from '../student_library_types/student_library_types';
import { History, CalendarCheck, CheckCircle2 } from 'lucide-react';
import clsx from 'clsx';

interface Props {
  history: LibraryHistoryRecord[];
}

export default function StudentLibraryHistory({ history }: Props) {
  
  if (history.length === 0) {
    return (
      <div className="bg-card border border-border rounded-xl p-10 flex flex-col items-center justify-center text-center">
        <History size={48} className="text-text-secondary/30 mb-4" />
        <h3 className="text-lg font-bold text-text-primary">No History Found</h3>
        <p className="text-sm text-text-secondary mt-1">Your past borrowing records will appear here.</p>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-page border-b border-border">
              <th className="p-4 text-xs font-bold text-text-secondary uppercase tracking-wider">Book Title</th>
              <th className="p-4 text-xs font-bold text-text-secondary uppercase tracking-wider">Issued Date</th>
              <th className="p-4 text-xs font-bold text-text-secondary uppercase tracking-wider">Returned Date</th>
              <th className="p-4 text-xs font-bold text-text-secondary uppercase tracking-wider">Fine Paid</th>
              <th className="p-4 text-xs font-bold text-text-secondary uppercase tracking-wider text-right">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {history.map((record) => (
              <tr key={record.id} className="hover:bg-page/50 transition-colors">
                <td className="p-4">
                  <span className="text-sm font-bold text-text-primary">{record.title}</span>
                </td>
                <td className="p-4">
                  <span className="text-sm font-semibold text-text-secondary">{record.issuedDate}</span>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-1.5 text-sm font-semibold text-text-secondary">
                    <CalendarCheck size={14} /> {record.returnedDate}
                  </div>
                </td>
                <td className="p-4">
                  <span className={clsx("text-sm font-bold", record.finePaid > 0 ? "text-danger" : "text-text-secondary")}>
                    {record.finePaid > 0 ? `₹${record.finePaid}` : '₹0'}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-success/10 text-success border border-success/20">
                    <CheckCircle2 size={12} /> {record.status}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
