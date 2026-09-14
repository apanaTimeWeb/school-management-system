"use client";
import React from "react";
import { MonitorSmartphone, Globe, CheckCircle2, XCircle } from "lucide-react";
import { MOCK_ACTIVE_SESSIONS, MOCK_LOGIN_HISTORY } from "../accountant_profile_utils/AccountantProfileConstants";
import clsx from "clsx";

export default function AccountantProfileHistory() {
  return (
    <div className="space-y-6 fade-in">
      
      {/* Active Sessions */}
      <div className="bg-card border border-border rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-bold text-text-primary mb-1">Active Sessions</h3>
        <p className="text-xs text-text-secondary mb-6">Manage and revoke your active sessions across devices.</p>

        <div className="space-y-4">
          {MOCK_ACTIVE_SESSIONS.map((session) => (
            <div key={session.id} className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 bg-bg-input border border-border rounded-xl gap-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-bg-page border border-border flex items-center justify-center shrink-0">
                  <MonitorSmartphone size={18} className="text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-text-primary flex items-center gap-2">
                    {session.device}
                    {session.isCurrent && (
                      <span className="text-[10px] bg-success/10 text-success px-2 py-0.5 rounded border border-success/20 uppercase">Current Session</span>
                    )}
                  </h4>
                  <div className="flex items-center gap-3 text-xs text-text-secondary mt-1">
                    <span className="flex items-center gap-1"><Globe size={12} /> {session.ip}</span>
                    <span>•</span>
                    <span>{session.browser}</span>
                    <span>•</span>
                    <span>Active: {session.lastActive}</span>
                  </div>
                </div>
              </div>
              
              {!session.isCurrent && (
                <button className="px-4 py-1.5 text-xs font-bold text-danger bg-danger/10 border border-danger/20 rounded-lg hover:bg-danger hover:text-white transition-colors w-full sm:w-auto">
                  Revoke
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Login History */}
      <div className="bg-card border border-border rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-bold text-text-primary mb-1">Login History</h3>
        <p className="text-xs text-text-secondary mb-6">Recent login attempts to your account.</p>

        <div className="overflow-x-auto border border-border rounded-lg">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-bg-input border-b border-border text-[11px] uppercase text-text-secondary font-bold">
                <th className="p-3">Time</th>
                <th className="p-3">IP Address</th>
                <th className="p-3">Location</th>
                <th className="p-3">Device</th>
                <th className="p-3 text-center">Status</th>
              </tr>
            </thead>
            <tbody>
              {MOCK_LOGIN_HISTORY.map((log) => (
                <tr key={log.id} className="border-b border-border/50 hover:bg-bg-page/50 transition-colors">
                  <td className="p-3 text-xs font-semibold text-text-primary">{log.time}</td>
                  <td className="p-3 text-xs text-text-secondary">{log.ip}</td>
                  <td className="p-3 text-xs text-text-secondary">{log.location}</td>
                  <td className="p-3 text-xs text-text-secondary">{log.device}</td>
                  <td className="p-3 text-center">
                    {log.status === 'Success' ? (
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-success bg-success/10 px-2 py-0.5 rounded">
                        <CheckCircle2 size={12} /> Success
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-danger bg-danger/10 px-2 py-0.5 rounded">
                        <XCircle size={12} /> Failed
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
