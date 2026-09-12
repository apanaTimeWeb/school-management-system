"use client";

import { Edit, Power, PowerOff, Archive, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import type { AcademicSession } from "../academic_setup_types/super_admin_sessions.types";

export default function SuperAdminSessionsTable() {
  const sessions: AcademicSession[] = [
    {
      id: "ses_1",
      sessionName: "2026-2027",
      startDate: "2026-04-01",
      endDate: "2027-03-31",
      status: "Current"
    },
    {
      id: "ses_2",
      sessionName: "2027-2028",
      startDate: "2027-04-01",
      endDate: "2028-03-31",
      status: "Upcoming"
    },
    {
      id: "ses_0",
      sessionName: "2025-2026",
      startDate: "2025-04-01",
      endDate: "2026-03-31",
      status: "Previous"
    },
    {
      id: "ses_old",
      sessionName: "2024-2025",
      startDate: "2024-04-01",
      endDate: "2025-03-31",
      status: "Archived"
    }
  ];

  const getStatusColor = (status: AcademicSession['status']) => {
    switch(status) {
      case 'Current': return 'bg-success-bg text-success border-success';
      case 'Upcoming': return 'bg-info-bg text-info border-info';
      case 'Previous': return 'bg-warning-bg text-warning border-warning';
      case 'Archived': return 'bg-bg-page text-text-secondary border-border';
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg overflow-x-auto">
      <table className="w-full text-left text-sm whitespace-nowrap">
        <thead className="bg-primary-subtle text-text-secondary uppercase text-xs font-semibold">
          <tr>
            <th className="px-4 py-3 border-b border-border">Session Name</th>
            <th className="px-4 py-3 border-b border-border">Duration</th>
            <th className="px-4 py-3 border-b border-border text-center">Status</th>
            <th className="px-4 py-3 border-b border-border text-center">Data Isolation</th>
            <th className="px-4 py-3 border-b border-border text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {sessions.map((session) => (
            <tr key={session.id} className="hover:bg-primary-subtle/50 transition-colors group cursor-pointer">
              <td className="px-4 py-3 font-semibold text-text-primary">{session.sessionName}</td>
              <td className="px-4 py-3 text-text-secondary">
                {new Date(session.startDate).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })} 
                <span className="mx-2">-</span> 
                {new Date(session.endDate).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
              </td>
              <td className="px-4 py-3 text-center">
                <span className={cn("px-2.5 py-1 rounded-full text-[11px] font-semibold border", getStatusColor(session.status))}>
                  {session.status}
                </span>
              </td>
              <td className="px-4 py-3 text-center">
                <span className="inline-flex items-center gap-1 text-[10px] uppercase font-bold text-success bg-success-bg px-2 py-0.5 rounded">
                  <CheckCircle size={10} /> Active
                </span>
              </td>
              <td className="px-4 py-3 text-right">
                <div className="flex items-center justify-end gap-2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity">
                  <button className="p-1.5 text-text-secondary hover:text-info transition-colors" title="Edit Session">
                    <Edit size={16} />
                  </button>
                  {session.status !== 'Current' && session.status !== 'Archived' && (
                    <button className="p-1.5 text-text-secondary hover:text-success transition-colors" title="Activate as Current">
                      <Power size={16} />
                    </button>
                  )}
                  {session.status === 'Current' && (
                    <button className="p-1.5 text-text-secondary hover:text-warning transition-colors" title="Close Session">
                      <PowerOff size={16} />
                    </button>
                  )}
                  {session.status === 'Previous' && (
                    <button className="p-1.5 text-text-secondary hover:text-danger transition-colors" title="Archive Session">
                      <Archive size={16} />
                    </button>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
