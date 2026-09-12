"use client";

import { Activity } from "lucide-react";
import type { SystemActivityLogType } from "@/app/(app)/super-admin/system-activity-logs/super_admin_system_activity_logs_types/super_admin_system_activity_logs.types";

export default function SuperAdminSystemActivityLogsTable() {
  
  // Seeded mock data to explicitly show all 13 activity types to the user in the UI
  const logs: SystemActivityLogType[] = [
    { id: "a1", timestamp: "2023-10-27 10:15:00 AM", user: "Amit Sharma", role: "Super Admin", activityType: "Login", details: "Successful login to the system", ip: "192.168.1.45" },
    { id: "a2", timestamp: "2023-10-27 10:20:12 AM", user: "Unknown", role: "None", activityType: "Failed login", details: "Invalid credentials attempt for admin", ip: "45.22.11.90" },
    { id: "a3", timestamp: "2023-10-27 10:25:30 AM", user: "Rahul Verma", role: "Teacher", activityType: "Password change", details: "User initiated password reset via email", ip: "10.0.0.12" },
    { id: "a4", timestamp: "2023-10-27 10:45:00 AM", user: "Amit Sharma", role: "Super Admin", activityType: "Configuration changes", details: "Modified Password Expiry policy to 90 days", ip: "192.168.1.45" },
    { id: "a5", timestamp: "2023-10-27 11:00:00 AM", user: "Sneha Gupta", role: "HR", activityType: "Record creation", details: "Created new employee profile EMP-992", ip: "172.16.1.5" },
    { id: "a6", timestamp: "2023-10-27 11:15:00 AM", user: "Amit Sharma", role: "Super Admin", activityType: "Permission change", details: "Granted 'Delete' permission to Accountant role", ip: "192.168.1.45" },
    { id: "a7", timestamp: "2023-10-27 11:30:00 AM", user: "Sneha Gupta", role: "HR", activityType: "Record update", details: "Updated salary structure for EMP-901", ip: "172.16.1.5" },
    { id: "a8", timestamp: "2023-10-27 12:00:00 PM", user: "Amit Sharma", role: "Super Admin", activityType: "Backup", details: "Manual full database backup initiated", ip: "192.168.1.45" },
    { id: "a9", timestamp: "2023-10-27 12:30:00 PM", user: "Priya Singh", role: "Accountant", activityType: "Export", details: "Exported Fee Defaulters list as CSV", ip: "10.0.0.50" },
    { id: "a10", timestamp: "2023-10-27 01:00:00 PM", user: "Sneha Gupta", role: "HR", activityType: "Record deletion", details: "Deleted temporary employee profile EMP-TMP1", ip: "172.16.1.5" },
    { id: "a11", timestamp: "2023-10-27 02:00:00 PM", user: "Amit Sharma", role: "Super Admin", activityType: "Restore", details: "Restored library module configuration from backup", ip: "192.168.1.45" },
    { id: "a12", timestamp: "2023-10-27 03:00:00 PM", user: "Priya Singh", role: "Accountant", activityType: "Import", details: "Imported bulk offline fee receipts", ip: "10.0.0.50" },
    { id: "a13", timestamp: "2023-10-27 05:00:00 PM", user: "Priya Singh", role: "Accountant", activityType: "Logout", details: "User explicitly logged out of session", ip: "10.0.0.50" }
  ];

  return (
    <div className="bg-card border border-border rounded-lg overflow-x-auto">
      <table className="w-full text-left text-sm whitespace-nowrap">
        <thead className="bg-primary-subtle text-text-secondary uppercase text-[11px] font-semibold">
          <tr>
            <th className="px-4 py-3 border-b border-border w-[180px]">Timestamp</th>
            <th className="px-4 py-3 border-b border-border w-[150px]">User</th>
            <th className="px-4 py-3 border-b border-border w-[120px]">Role</th>
            <th className="px-4 py-3 border-b border-border w-[200px]">Activity Type</th>
            <th className="px-4 py-3 border-b border-border">Details</th>
            <th className="px-4 py-3 border-b border-border w-[120px]">IP Address</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {logs.map((log) => (
            <tr key={log.id} className="hover:bg-bg-page transition-colors">
              <td className="px-4 py-3 text-xs text-text-secondary">{log.timestamp}</td>
              <td className="px-4 py-3">
                <span className="font-semibold text-text-primary">{log.user}</span>
              </td>
              <td className="px-4 py-3">
                <span className="text-xs text-text-secondary">{log.role}</span>
              </td>
              <td className="px-4 py-3 font-semibold text-text-primary">
                {/* Render exact checklist string */}
                {log.activityType}
              </td>
              <td className="px-4 py-3 text-xs text-text-secondary truncate max-w-[300px]">
                {log.details}
              </td>
              <td className="px-4 py-3 text-[11px] text-text-secondary font-mono">
                {log.ip}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
