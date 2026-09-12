"use client";

import { useState } from "react";
import { MonitorSmartphone, ShieldAlert, Ban, Unlock, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";
import type { DeviceSessionType } from "../users_access_types/super_admin_device_session.types";

export default function SuperAdminDeviceSessionTable() {

  // Mock data representing active and historical sessions
  const sessions: DeviceSessionType[] = [
    {
      id: "s1", userId: "u1", userName: "Amit Sharma",
      deviceType: "Desktop", browser: "Chrome 114.0", os: "Windows 11", ip: "192.168.1.45",
      lastActivity: "2 mins ago", loginTime: "2023-10-27 09:00 AM", logoutTime: null,
      isBlocked: false, isActive: true
    },
    {
      id: "s2", userId: "u2", userName: "Rahul Verma",
      deviceType: "Mobile", browser: "Safari 16.0", os: "iOS 16.5", ip: "10.0.0.14",
      lastActivity: "1 hour ago", loginTime: "2023-10-27 08:30 AM", logoutTime: "2023-10-27 10:15 AM",
      isBlocked: false, isActive: false
    },
    {
      id: "s3", userId: "u3", userName: "Sneha Gupta",
      deviceType: "Tablet", browser: "Chrome Mobile", os: "Android 13", ip: "172.16.0.5",
      lastActivity: "Just now", loginTime: "2023-10-27 10:45 AM", logoutTime: null,
      isBlocked: false, isActive: true
    },
    {
      id: "s4", userId: "u4", userName: "Unknown User",
      deviceType: "Desktop", browser: "Firefox 118", os: "Linux", ip: "45.22.11.90",
      lastActivity: "5 days ago", loginTime: "2023-10-22 01:20 PM", logoutTime: "2023-10-22 01:25 PM",
      isBlocked: true, isActive: false
    }
  ];

  return (
    <div className="bg-card border border-border rounded-lg overflow-x-auto pb-32">
      <table className="w-full text-left text-sm whitespace-nowrap">
        <thead className="bg-primary-subtle text-text-secondary uppercase text-[11px] font-semibold">
          <tr>
            <th className="px-4 py-3 border-b border-border">User</th>
            <th className="px-4 py-3 border-b border-border">Device type</th>
            <th className="px-4 py-3 border-b border-border">Browser</th>
            <th className="px-4 py-3 border-b border-border">OS</th>
            <th className="px-4 py-3 border-b border-border">IP</th>
            <th className="px-4 py-3 border-b border-border">Last activity</th>
            <th className="px-4 py-3 border-b border-border">Login time</th>
            <th className="px-4 py-3 border-b border-border">Logout time</th>
            <th className="px-4 py-3 border-b border-border text-center">Status</th>
            <th className="px-4 py-3 border-b border-border text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {sessions.map((session) => (
            <tr key={session.id} className="hover:bg-bg-page transition-colors group relative">
              
              <td className="px-4 py-3">
                <span className="font-semibold text-text-primary">{session.userName}</span>
              </td>

              <td className="px-4 py-3">
                <span className="text-xs text-text-secondary flex items-center gap-1">
                  <MonitorSmartphone size={12} /> {session.deviceType}
                </span>
              </td>
              
              <td className="px-4 py-3 text-xs text-text-primary">
                {session.browser}
              </td>

              <td className="px-4 py-3 text-[11px] text-text-secondary">
                {session.os}
              </td>
              
              <td className="px-4 py-3 text-xs text-text-primary font-mono">
                {session.ip}
              </td>
              
              <td className="px-4 py-3 text-xs text-text-secondary">
                {session.lastActivity}
              </td>
              
              <td className="px-4 py-3 text-xs text-success">
                {session.loginTime}
              </td>

              <td className="px-4 py-3 text-[11px] text-text-secondary">
                {session.logoutTime || "Active session"}
              </td>
              
              <td className="px-4 py-3 text-center">
                {session.isBlocked ? (
                  <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-danger-bg text-danger border border-danger/20">Blocked</span>
                ) : session.isActive ? (
                  <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-success-bg text-success border border-success/20">Active</span>
                ) : (
                  <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-bg-page text-text-secondary border border-border">Logged Out</span>
                )}
              </td>
              
              <td className="px-4 py-3 text-right">
                <div className="flex items-center justify-end gap-2">
                  {/* Explicit Checklist Actions rendered inline for 100% visibility */}
                  {session.isActive && (
                    <button className="px-2 py-1 bg-warning-bg text-warning text-[10px] font-bold border border-warning/20 rounded hover:bg-warning hover:text-white transition-colors flex items-center gap-1">
                      <LogOut size={12}/> Logout device
                    </button>
                  )}
                  
                  {session.isBlocked ? (
                    <button className="px-2 py-1 bg-success-bg text-success text-[10px] font-bold border border-success/20 rounded hover:bg-success hover:text-white transition-colors flex items-center gap-1">
                      <Unlock size={12}/> Unblock device
                    </button>
                  ) : (
                    <button className="px-2 py-1 bg-danger-bg text-danger text-[10px] font-bold border border-danger/20 rounded hover:bg-danger hover:text-white transition-colors flex items-center gap-1">
                      <Ban size={12}/> Block device
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
