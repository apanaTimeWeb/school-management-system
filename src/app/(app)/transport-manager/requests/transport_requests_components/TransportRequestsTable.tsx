"use client";

import React from 'react';
import { Calendar, User, Settings, ArrowRight, Paperclip, MessageSquare } from 'lucide-react';
import type { TransportRequest } from '../transport_requests_types/transport_requests.types';
import { REQUEST_STATUS_COLORS, REQUEST_TYPE_LABELS } from '../transport_requests_constants/transport_requests.constants';

// RESPONSIBILITY: Renders the transport requests data table

interface TransportRequestsTableProps {
  requests: TransportRequest[];
  onView: (request: TransportRequest) => void;
}

export default function TransportRequestsTable({ requests, onView }: TransportRequestsTableProps) {
  
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-[rgba(250,204,21,0.05)] border-b border-[var(--border)]">
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider w-40">Date & Req ID</th>
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider w-56">Student Details</th>
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider">Request Type</th>
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider">Details</th>
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider text-center">Status</th>
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider text-right">Action</th>
          </tr>
        </thead>
        <tbody>
          {requests.length > 0 ? (
            requests.map((req) => {
              const statusConfig = REQUEST_STATUS_COLORS[req.status] || REQUEST_STATUS_COLORS.PENDING;

              return (
                <tr 
                  key={req.id} 
                  onClick={() => onView(req)}
                  className="border-b border-[var(--border)] hover:bg-[rgba(250,204,21,0.05)] motion-safe:transition-colors cursor-pointer group"
                >
                  <td className="py-3 px-4">
                    <div className="flex flex-col gap-1">
                      <div className="text-sm font-semibold text-[var(--text-primary)] flex items-center gap-1.5">
                        <Calendar size={12} className="text-[var(--text-secondary)]"/> {req.requestDate}
                      </div>
                      <div className="text-[11px] font-medium text-[var(--primary)]">{req.id}</div>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[rgba(59,130,246,0.1)] border border-[rgba(59,130,246,0.2)] flex items-center justify-center text-blue-500 font-bold text-xs uppercase flex-shrink-0">
                        {req.studentName.substring(0, 2)}
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-semibold text-[var(--text-primary)] truncate">{req.studentName}</div>
                        <div className="text-[11px] text-[var(--text-secondary)] mt-0.5 truncate">{req.classSection} • {req.studentId}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="text-sm font-semibold text-[var(--text-primary)] flex items-center gap-1.5 whitespace-nowrap">
                      <Settings size={14} className="text-[var(--primary)]" />
                      {REQUEST_TYPE_LABELS[req.requestType] || req.requestType}
                    </div>
                    {req.hasAttachment && (
                      <div className="text-[10px] text-[var(--text-secondary)] flex items-center gap-1 mt-1">
                        <Paperclip size={10} /> Attachment provided
                      </div>
                    )}
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex flex-col gap-1.5 text-xs">
                      {req.currentDetails && (
                        <div className="text-[var(--text-secondary)] truncate max-w-[200px]" title={req.currentDetails}>
                          <span className="opacity-70">From:</span> {req.currentDetails}
                        </div>
                      )}
                      {req.requestedDetails && (
                        <div className="text-[var(--text-primary)] font-medium truncate max-w-[200px]" title={req.requestedDetails}>
                          <span className="opacity-70 text-[var(--text-secondary)]">To:</span> {req.requestedDetails}
                        </div>
                      )}
                      {!req.currentDetails && !req.requestedDetails && (
                        <div className="text-[var(--text-secondary)] italic">View request for details</div>
                      )}
                    </div>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <span 
                      className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide whitespace-nowrap"
                      style={{ backgroundColor: statusConfig.bg, color: statusConfig.text }}
                    >
                      {statusConfig.label}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right">
                    <button 
                      onClick={(e) => { e.stopPropagation(); onView(req); }}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium bg-[var(--bg-input)] border border-[var(--border)] text-[var(--text-primary)] hover:bg-[var(--primary)] hover:text-white hover:border-[var(--primary)] transition-colors opacity-100 lg:opacity-0 lg:group-hover:opacity-100"
                    >
                      Review <ArrowRight size={14} />
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={6} className="py-12 text-center">
                <div className="flex flex-col items-center justify-center text-[var(--text-secondary)]">
                  <span className="text-4xl mb-3 opacity-20">📨</span>
                  <p className="text-sm">No transport requests found.</p>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
