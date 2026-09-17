"use client";

import React, { useState, useEffect } from 'react';
import { X, Loader2, Bell } from 'lucide-react';
import type { TransportAttendance, TransportAttendanceFormData } from '../transport_attendance_types/transport_attendance.types';

// RESPONSIBILITY: Renders the form modal for manually logging or editing transport attendance

interface TransportAttendanceFormModalProps {
  record: TransportAttendance | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: TransportAttendanceFormData, sendNotification: boolean) => void;
}

export default function TransportAttendanceFormModal({ record, isOpen, onClose, onSave }: TransportAttendanceFormModalProps) {
  
  const [formData, setFormData] = useState<TransportAttendanceFormData>({
    tripId: '',
    studentId: '',
    studentName: '',
    status: 'NOT_BOARDED',
    boardTime: '',
    dropTime: '',
    authorizedPickupBy: '',
    remarks: ''
  });

  const [sendNotification, setSendNotification] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (record) {
      setFormData({
        tripId: record.tripId,
        studentId: record.studentId,
        studentName: record.studentName,
        status: record.status,
        boardTime: record.boardTime || '',
        dropTime: record.dropTime || '',
        authorizedPickupBy: record.authorizedPickupBy || '',
        remarks: record.remarks || ''
      });
      setSendNotification(false); // default to false for edits to prevent spam
    } else {
      setFormData({
        tripId: '',
        studentId: '',
        studentName: '',
        status: 'NOT_BOARDED',
        boardTime: '',
        dropTime: '',
        authorizedPickupBy: '',
        remarks: ''
      });
      setSendNotification(true);
    }
  }, [record, isOpen]);

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
      onSave(formData, sendNotification);
      setIsSubmitting(false);
      onClose();
    }, 600);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Auto-fill mock student based on ID
    if (name === 'studentId') {
      const mockStudent = value === 'STU-2051' ? 'Rohan Sharma' : (value === 'STU-1092' ? 'Neha Gupta' : 'Student Name');
      setFormData(prev => ({ ...prev, [name]: value, studentName: mockStudent }));
      return;
    }

    // Auto-fill current time if marking Present and board/drop time is empty
    if (name === 'status' && value === 'PRESENT') {
      const now = new Date();
      const timeStr = now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
      setFormData(prev => ({ 
        ...prev, 
        status: 'PRESENT',
        // If they don't have a board time yet, let's inject current time as a helper
        boardTime: prev.boardTime ? prev.boardTime : timeStr 
      }));
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
            {record ? 'Edit Attendance Log' : 'Log Manual Attendance'}
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
            
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[var(--text-secondary)]">Trip ID <span className="text-red-500">*</span></label>
              <input
                required
                name="tripId"
                value={formData.tripId}
                onChange={handleChange}
                placeholder="e.g. TRP-1001"
                className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[var(--text-secondary)]">Student ID <span className="text-red-500">*</span></label>
              <input
                required
                name="studentId"
                value={formData.studentId}
                onChange={handleChange}
                placeholder="e.g. STU-2051"
                className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1.5 md:col-span-2">
              <label className="text-sm font-semibold text-[var(--text-secondary)]">Attendance Status <span className="text-red-500">*</span></label>
              <select
                required
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
              >
                <option value="PRESENT">Present (Boarded)</option>
                <option value="ABSENT">Absent</option>
                <option value="MISSED_BUS">Missed Bus</option>
                <option value="NOT_BOARDED">Not Boarded (Pending)</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[var(--text-secondary)]">Pickup / Boarding Time</label>
              <input
                type="time"
                name="boardTime"
                value={formData.boardTime}
                onChange={handleChange}
                disabled={formData.status !== 'PRESENT'}
                className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors disabled:opacity-50 [color-scheme:dark]"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[var(--text-secondary)]">Drop-off Time</label>
              <input
                type="time"
                name="dropTime"
                value={formData.dropTime}
                onChange={handleChange}
                disabled={formData.status !== 'PRESENT'}
                className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors disabled:opacity-50 [color-scheme:dark]"
              />
            </div>

            <div className="flex flex-col gap-1.5 md:col-span-2">
              <label className="text-sm font-semibold text-[var(--text-secondary)]">Authorized Handover To</label>
              <input
                name="authorizedPickupBy"
                value={formData.authorizedPickupBy}
                onChange={handleChange}
                placeholder="e.g. Rahul Patel (Father) or 'School Staff'"
                className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1.5 md:col-span-2">
              <label className="text-sm font-semibold text-[var(--text-secondary)]">Remarks / Notes</label>
              <textarea
                name="remarks"
                value={formData.remarks}
                onChange={handleChange}
                placeholder="Any special remarks regarding boarding or handover..."
                rows={2}
                className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors resize-none"
              />
            </div>
            
            {/* Notification Checkbox */}
            <div className="md:col-span-2 mt-2 pt-4 border-t border-[var(--border)]">
              <label className="flex items-center gap-3 cursor-pointer group">
                <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${sendNotification ? 'bg-[var(--primary)] border-[var(--primary)]' : 'border-[var(--border)] bg-[var(--bg-input)]'}`}>
                  {sendNotification && <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                </div>
                <input 
                  type="checkbox" 
                  className="hidden" 
                  checked={sendNotification}
                  onChange={(e) => setSendNotification(e.target.checked)}
                />
                <span className="text-sm text-[var(--text-primary)] font-medium flex items-center gap-2 group-hover:text-[var(--primary)] transition-colors">
                  <Bell size={16} /> Send App/SMS Notification to Parents
                </span>
              </label>
              <p className="text-xs text-[var(--text-secondary)] ml-8 mt-1">If enabled, parents will receive an instant push notification containing the student's updated boarding status and time.</p>
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
                <><Loader2 size={16} className="animate-spin" /> {record ? 'Saving...' : 'Logging...'}</>
              ) : (
                <>{record ? 'Update Log' : 'Save Attendance'}</>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
