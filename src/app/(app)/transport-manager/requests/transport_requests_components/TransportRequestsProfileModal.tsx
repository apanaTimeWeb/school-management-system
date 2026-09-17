"use client";

import React, { useEffect, useState } from 'react';
import { X, User, Phone, Settings, FileText, CheckCircle, XCircle, Clock, Paperclip, MessageSquare } from 'lucide-react';
import type { TransportRequest, TransportRequestStatus } from '../transport_requests_types/transport_requests.types';
import { REQUEST_STATUS_COLORS, REQUEST_TYPE_LABELS } from '../transport_requests_constants/transport_requests.constants';

// RESPONSIBILITY: Renders the read-only profile view modal and action panel for a request

interface TransportRequestsProfileModalProps {
  request: TransportRequest | null;
  isOpen: boolean;
  onClose: () => void;
  onUpdateStatus: (id: string, status: TransportRequestStatus, remarks: string) => void;
}

export default function TransportRequestsProfileModal({ request, isOpen, onClose, onUpdateStatus }: TransportRequestsProfileModalProps) {
  
  const [adminRemarks, setAdminRemarks] = useState('');

  useEffect(() => {
    if (request) {
      setAdminRemarks(request.adminRemarks || '');
    }
  }, [request]);

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen || !request) return null;

  const statusConfig = REQUEST_STATUS_COLORS[request.status] || REQUEST_STATUS_COLORS.PENDING;

  const handleAction = (status: TransportRequestStatus) => {
    onUpdateStatus(request.id, status, adminRemarks);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm motion-safe:transition-opacity">
      <div 
        className="relative w-full max-w-3xl bg-[var(--bg-overlay)] border border-[var(--border)] rounded-xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200 max-h-[95vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-[var(--border)] bg-[var(--bg-card)]">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[rgba(59,130,246,0.1)] border border-[rgba(59,130,246,0.2)] flex items-center justify-center text-blue-500 font-bold text-lg uppercase flex-shrink-0">
              {request.studentName.substring(0, 2)}
            </div>
            <div>
              <h2 className="text-xl font-bold text-[var(--text-primary)]">Request {request.id}</h2>
              <div className="flex items-center gap-2 mt-1">
                <p className="text-xs font-bold text-[var(--primary)] px-1">
                  {REQUEST_TYPE_LABELS[request.requestType] || request.requestType}
                </p>
                <span className="text-[var(--text-secondary)]">•</span>
                <span className="text-xs font-medium text-[var(--text-secondary)]">
                  {request.requestDate}
                </span>
                <span className="text-[var(--text-secondary)]">•</span>
                <span 
                  className="px-2 py-0.5 text-[10px] font-bold rounded uppercase tracking-wider"
                  style={{ backgroundColor: statusConfig.bg, color: statusConfig.text }}
                >
                  {statusConfig.label}
                </span>
              </div>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-input)] rounded-md transition-colors self-start"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Student & Guardian */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-[var(--text-primary)] flex items-center gap-2 border-b border-[var(--border)] pb-2">
                <User size={16} className="text-[var(--primary)]" /> Requester Info
              </h3>
              
              <div className="flex flex-col gap-3 text-sm">
                <div>
                  <span className="text-[var(--text-secondary)] text-xs mb-0.5 block">Student</span>
                  <span className="font-medium text-[var(--text-primary)]">
                    {request.studentName} <span className="text-xs text-[var(--text-secondary)]">({request.studentId} • {request.classSection})</span>
                  </span>
                </div>
                <div>
                  <span className="text-[var(--text-secondary)] text-xs mb-0.5 block">Guardian</span>
                  <span className="font-medium text-[var(--text-primary)]">{request.guardianName}</span>
                </div>
                <div>
                  <span className="text-[var(--text-secondary)] text-xs mb-0.5 block flex items-center gap-1">
                    <Phone size={12} className="text-amber-500" /> Contact
                  </span>
                  <span className="font-medium text-[var(--text-primary)]">{request.guardianContact}</span>
                </div>
              </div>
            </div>

            {/* Request Details */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-[var(--text-primary)] flex items-center gap-2 border-b border-[var(--border)] pb-2">
                <Settings size={16} className="text-[var(--primary)]" /> Requested Changes
              </h3>
              
              <div className="flex flex-col gap-3 text-sm">
                {request.currentDetails && (
                  <div>
                    <span className="text-[var(--text-secondary)] text-xs mb-0.5 block">Current Assignment</span>
                    <span className="font-medium text-[var(--text-secondary)] line-through">{request.currentDetails}</span>
                  </div>
                )}
                {request.requestedDetails && (
                  <div>
                    <span className="text-[var(--text-secondary)] text-xs mb-0.5 block">Requested Update</span>
                    <span className="font-bold text-[var(--text-primary)]">{request.requestedDetails}</span>
                  </div>
                )}
                {!request.currentDetails && !request.requestedDetails && (
                  <span className="text-[var(--text-secondary)] italic">General Request</span>
                )}
              </div>
            </div>
          </div>

          {/* Reason Block */}
          <div className="bg-[var(--bg-input)] border border-[var(--border)] rounded-lg p-4">
            <h3 className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <FileText size={14} /> Reason for request
            </h3>
            <p className="text-sm text-[var(--text-primary)] leading-relaxed">{request.reason}</p>
            
            {request.hasAttachment && (
              <div className="mt-4 pt-3 border-t border-[var(--border)] flex items-center gap-3">
                <div className="w-10 h-10 rounded-md bg-[rgba(59,130,246,0.1)] flex items-center justify-center text-blue-500">
                  <Paperclip size={18} />
                </div>
                <div>
                  <p className="text-sm font-medium text-[var(--text-primary)]">Proof Document Attached</p>
                  <button className="text-xs font-medium text-[var(--primary)] hover:underline mt-0.5">
                    View Document
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Admin Action Area */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-[var(--text-primary)] flex items-center gap-2">
              <MessageSquare size={16} className="text-[var(--primary)]" /> Admin Remarks
            </h3>
            <textarea
              value={adminRemarks}
              onChange={(e) => setAdminRemarks(e.target.value)}
              placeholder="Add internal notes or reason for rejection..."
              rows={3}
              className="w-full bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors resize-none"
            />
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-[var(--border)] bg-[var(--bg-page)] flex flex-wrap items-center justify-between gap-3">
          
          <div className="flex gap-2">
            <button 
              onClick={() => handleAction('UNDER_REVIEW')}
              className="px-3 py-1.5 text-xs font-medium rounded-md border border-[var(--border)] text-[var(--text-primary)] hover:bg-[var(--bg-input)] transition-colors flex items-center gap-1.5"
            >
              <Clock size={14} /> Mark Under Review
            </button>
          </div>
          
          <div className="flex gap-2">
            <button 
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium rounded-md border border-[var(--border)] text-[var(--text-primary)] hover:bg-[var(--bg-input)] transition-colors"
            >
              Close
            </button>
            <button 
              onClick={() => handleAction('REJECTED')}
              className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-md bg-[rgba(239,68,68,0.1)] text-red-500 hover:bg-red-500 hover:text-white transition-colors"
            >
              <XCircle size={16} /> Reject
            </button>
            <button 
              onClick={() => handleAction('APPROVED')}
              className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-md bg-emerald-600 text-white hover:bg-emerald-500 transition-colors shadow-lg shadow-[rgba(16,185,129,0.2)]"
            >
              <CheckCircle size={16} /> Approve
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
}
