"use client";

import { useState } from "react";
import { Eye } from "lucide-react";
import type { AuditLogType } from "../audit_security_types/super_admin_audit_logs.types";
import SuperAdminAuditDiffDrawer from "./SuperAdminAuditDiffDrawer";

export default function SuperAdminAuditLogsTable() {
  const [selectedLog, setSelectedLog] = useState<AuditLogType | null>(null);

  // Mock data covering various actions
  const logs: AuditLogType[] = [
    {
      id: "l1", user: "Amit Sharma", role: "Super Admin", action: "UPDATE",
      module: "Security Settings", recordId: "SEC-901",
      date: "2023-10-27", time: "14:30:15", ip: "192.168.1.45", device: "Desktop",
      oldValue: "{\n  \"sessionTimeout\": 30\n}", newValue: "{\n  \"sessionTimeout\": 60\n}"
    },
    {
      id: "l2", user: "Sneha Gupta", role: "HR", action: "DELETE",
      module: "Employee Master", recordId: "EMP-204",
      date: "2023-10-27", time: "10:15:00", ip: "10.0.0.12", device: "Mobile",
      oldValue: "{\n  \"name\": \"Raj Verma\",\n  \"status\": \"Terminated\"\n}", newValue: null
    },
    {
      id: "l3", user: "Rahul Verma", role: "Principal", action: "CREATE",
      module: "Academic Session", recordId: "SESS-2024",
      date: "2023-10-26", time: "09:00:22", ip: "172.16.1.5", device: "Tablet",
      oldValue: null, newValue: "{\n  \"year\": \"2024-2025\",\n  \"status\": \"Upcoming\"\n}"
    }
  ];

  const getActionColor = (action: string) => {
    switch (action) {
      case 'CREATE': return 'text-success';
      case 'UPDATE': return 'text-info';
      case 'DELETE': return 'text-danger';
      default: return 'text-text-secondary';
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Filters and Exports Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-card p-4 rounded-lg border border-border">
        <div className="flex flex-wrap items-center gap-3">
          <input type="text" placeholder="Filter by User..." className="bg-input border border-border rounded-md px-3 py-1.5 text-sm focus:border-primary outline-none" />
          <input type="text" placeholder="Filter by Module..." className="bg-input border border-border rounded-md px-3 py-1.5 text-sm focus:border-primary outline-none" />
          <select className="bg-input border border-border rounded-md px-3 py-1.5 text-sm focus:border-primary outline-none">
            <option value="">All Actions</option>
            <option value="CREATE">CREATE</option>
            <option value="UPDATE">UPDATE</option>
            <option value="DELETE">DELETE</option>
          </select>
          <input type="date" className="bg-input border border-border rounded-md px-3 py-1.5 text-sm focus:border-primary outline-none" />
          <input type="text" placeholder="IP Address..." className="bg-input border border-border rounded-md px-3 py-1.5 text-sm focus:border-primary outline-none w-32" />
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <button className="px-3 py-1.5 bg-bg-page border border-border rounded-md text-xs font-medium text-text-primary hover:border-primary transition-colors">CSV</button>
          <button className="px-3 py-1.5 bg-bg-page border border-border rounded-md text-xs font-medium text-text-primary hover:border-primary transition-colors">Excel</button>
          <button className="px-3 py-1.5 bg-bg-page border border-border rounded-md text-xs font-medium text-text-primary hover:border-primary transition-colors">PDF</button>
        </div>
      </div>
      <div className="bg-card border border-border rounded-lg overflow-x-auto">
        <table className="w-full text-left text-sm whitespace-nowrap">
          <thead className="bg-primary-subtle text-text-secondary uppercase text-[11px] font-semibold">
            <tr>
              {/* Exact Checklist Columns */}
              <th className="px-4 py-3 border-b border-border">User</th>
              <th className="px-4 py-3 border-b border-border">Role</th>
              <th className="px-4 py-3 border-b border-border">Action</th>
              <th className="px-4 py-3 border-b border-border">Module</th>
              <th className="px-4 py-3 border-b border-border">Record ID</th>
              <th className="px-4 py-3 border-b border-border">Date</th>
              <th className="px-4 py-3 border-b border-border">Time</th>
              <th className="px-4 py-3 border-b border-border">IP</th>
              <th className="px-4 py-3 border-b border-border">Device</th>
              <th className="px-4 py-3 border-b border-border text-center">Old value</th>
              <th className="px-4 py-3 border-b border-border text-center">New value</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {logs.map((log) => (
              <tr key={log.id} className="hover:bg-bg-page transition-colors">
                <td className="px-4 py-3 font-medium text-text-primary">{log.user}</td>
                <td className="px-4 py-3 text-xs text-text-secondary">{log.role}</td>
                <td className={`px-4 py-3 text-xs font-bold ${getActionColor(log.action)}`}>{log.action}</td>
                <td className="px-4 py-3 text-xs text-text-primary">{log.module}</td>
                <td className="px-4 py-3 text-[11px] text-text-secondary font-mono">{log.recordId}</td>
                <td className="px-4 py-3 text-xs text-text-primary">{log.date}</td>
                <td className="px-4 py-3 text-xs text-text-secondary">{log.time}</td>
                <td className="px-4 py-3 text-[11px] text-text-primary font-mono">{log.ip}</td>
                <td className="px-4 py-3 text-xs text-text-secondary">{log.device}</td>
                
                <td className="px-4 py-3">
                  <div className="flex items-center justify-between gap-2 max-w-[150px]">
                    <span className="text-[10px] text-text-secondary font-mono truncate">
                      {log.oldValue ? log.oldValue.substring(0, 20) + "..." : "N/A"}
                    </span>
                    <button 
                      onClick={() => setSelectedLog(log)}
                      className="shrink-0 inline-flex items-center gap-1 px-1.5 py-0.5 bg-bg-page border border-border rounded text-[9px] font-medium text-primary hover:bg-primary-subtle transition-colors"
                    >
                      <Eye size={10} /> View
                    </button>
                  </div>
                </td>
                
                <td className="px-4 py-3">
                  <div className="flex items-center justify-between gap-2 max-w-[150px]">
                    <span className="text-[10px] text-text-secondary font-mono truncate">
                      {log.newValue ? log.newValue.substring(0, 20) + "..." : "N/A"}
                    </span>
                    <button 
                      onClick={() => setSelectedLog(log)}
                      className="shrink-0 inline-flex items-center gap-1 px-1.5 py-0.5 bg-bg-page border border-border rounded text-[9px] font-medium text-primary hover:bg-primary-subtle transition-colors"
                    >
                      <Eye size={10} /> View
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <SuperAdminAuditDiffDrawer 
        isOpen={!!selectedLog} 
        onClose={() => setSelectedLog(null)} 
        oldValue={selectedLog?.oldValue || null}
        newValue={selectedLog?.newValue || null}
      />
    </div>
  );
}
