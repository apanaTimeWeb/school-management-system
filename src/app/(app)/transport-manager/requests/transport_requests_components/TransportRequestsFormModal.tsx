"use client";

import React, { useState, useEffect } from 'react';
import { X, Loader2 } from 'lucide-react';
import type { TransportRequest, TransportRequestFormData } from '../transport_requests_types/transport_requests.types';

// RESPONSIBILITY: Renders the form modal for creating a new request manually (Admin view)

interface TransportRequestsFormModalProps {
  request: TransportRequest | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: TransportRequestFormData) => void;
}

export default function TransportRequestsFormModal({ request, isOpen, onClose, onSave }: TransportRequestsFormModalProps) {
  
  const [formData, setFormData] = useState<TransportRequestFormData>({
    studentId: '',
    studentName: '',
    requestType: 'NEW_TRANSPORT',
    currentDetails: '',
    requestedDetails: '',
    reason: '',
    status: 'PENDING'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (request) {
      setFormData({
        studentId: request.studentId,
        studentName: request.studentName,
        requestType: request.requestType,
        currentDetails: request.currentDetails || '',
        requestedDetails: request.requestedDetails || '',
        reason: request.reason,
        status: request.status
      });
    } else {
      setFormData({
        studentId: '',
        studentName: '',
        requestType: 'NEW_TRANSPORT',
        currentDetails: '',
        requestedDetails: '',
        reason: '',
        status: 'PENDING'
      });
    }
  }, [request, isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      onSave(formData);
      setIsSubmitting(false);
      onClose();
    }, 600);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name === 'studentId') {
      const mockName = value ? `Student ${value.split('-')[1] || value}` : '';
      setFormData(prev => ({ ...prev, [name]: value, studentName: mockName }));
      return;
    }

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm motion-safe:transition-opacity">
      <div 
        className="relative w-full max-w-2xl bg-[var(--bg-overlay)] border border-[var(--border)] rounded-xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-5 border-b border-[var(--border)] bg-[var(--bg-card)]">
          <h2 className="text-lg font-bold text-[var(--text-primary)]">
            {request ? 'Edit Request' : 'File Manual Request'}
          </h2>
          <button 
            onClick={onClose}
            className="p-1.5 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-input)] rounded-md transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto">
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-5">
            
            {/* Student ID */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[var(--text-secondary)]">Student ID <span className="text-red-500">*</span></label>
              <input
                required
                name="studentId"
                value={formData.studentId}
                onChange={handleChange}
                placeholder="e.g. STU-1004"
                className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
              />
            </div>

            {/* Student Name */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[var(--text-secondary)]">Student Name</label>
              <input
                readOnly
                name="studentName"
                value={formData.studentName}
                placeholder="Auto-filled"
                className="bg-[var(--bg-card)] opacity-70 border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none"
              />
            </div>

            {/* Request Type */}
            <div className="flex flex-col gap-1.5 sm:col-span-2">
              <label className="text-sm font-semibold text-[var(--text-secondary)]">Request Type <span className="text-red-500">*</span></label>
              <select
                required
                name="requestType"
                value={formData.requestType}
                onChange={handleChange}
                className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
              >
                <option value="NEW_TRANSPORT">New Transport Request</option>
                <option value="ROUTE_CHANGE">Route Change</option>
                <option value="STOP_CHANGE">Stop Change</option>
                <option value="VEHICLE_CHANGE">Vehicle Change</option>
                <option value="TRANSPORT_START">Start Transport</option>
                <option value="TRANSPORT_STOP">Stop Transport</option>
                <option value="TEMPORARY_TRANSPORT">Temporary Request</option>
              </select>
            </div>

            {/* Current Details */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[var(--text-secondary)]">Current Value (Optional)</label>
              <input
                name="currentDetails"
                value={formData.currentDetails}
                onChange={handleChange}
                placeholder="e.g. Route A"
                className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
              />
            </div>

            {/* Requested Details */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[var(--text-secondary)]">Requested Value <span className="text-red-500">*</span></label>
              <input
                required
                name="requestedDetails"
                value={formData.requestedDetails}
                onChange={handleChange}
                placeholder="e.g. Route B"
                className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
              />
            </div>

            {/* Reason */}
            <div className="flex flex-col gap-1.5 sm:col-span-2">
              <label className="text-sm font-semibold text-[var(--text-secondary)]">Reason for Request <span className="text-red-500">*</span></label>
              <textarea
                required
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                rows={3}
                placeholder="Provide a detailed reason..."
                className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors resize-none"
              />
            </div>

            {/* Status */}
            <div className="flex flex-col gap-1.5 sm:col-span-2 border-t border-[var(--border)] pt-4 mt-2">
              <label className="text-sm font-semibold text-[var(--text-secondary)]">Initial Status</label>
              <select
                required
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors w-1/2"
              >
                <option value="PENDING">Pending</option>
                <option value="UNDER_REVIEW">Under Review</option>
                <option value="APPROVED">Approved</option>
                <option value="REJECTED">Rejected</option>
                <option value="COMPLETED">Completed</option>
                <option value="CANCELLED">Cancelled</option>
              </select>
            </div>
            
          </div>
          
          <div className="p-5 border-t border-[var(--border)] bg-[var(--bg-page)] flex justify-end gap-3 mt-auto">
            <button 
              type="button"
              onClick={onClose}
              disabled={isSubmitting}
              className="px-4 py-2 text-sm font-medium rounded-md border border-[var(--border)] text-[var(--text-primary)] hover:bg-[var(--bg-input)] transition-colors disabled:opacity-50"
            >
              Cancel
            </button>
            <button 
              type="submit"
              disabled={isSubmitting}
              className="min-w-[120px] flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-md bg-[var(--primary)] text-white hover:bg-[var(--primary-hover)] transition-colors disabled:opacity-50 shadow-lg shadow-[var(--primary-subtle)]"
            >
              {isSubmitting ? (
                <><Loader2 size={16} className="animate-spin" /> {request ? 'Saving...' : 'Submitting...'}</>
              ) : (
                <>{request ? 'Save Changes' : 'Submit Request'}</>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
