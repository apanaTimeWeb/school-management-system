"use client";

import React, { useState, useEffect } from 'react';
import { X, Loader2 } from 'lucide-react';
import type { TransportStaffAttendance, TransportStaffAttendanceFormData, StaffRole, StaffAttendanceStatus, StaffShift } from '../transport_staff_attendance_types/transport_staff_attendance.types';

// RESPONSIBILITY: Renders the form modal for marking or editing staff attendance

interface TransportStaffAttendanceFormModalProps {
  record: TransportStaffAttendance | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: TransportStaffAttendanceFormData) => void;
}

export default function TransportStaffAttendanceFormModal({ record, isOpen, onClose, onSave }: TransportStaffAttendanceFormModalProps) {
  
  const [formData, setFormData] = useState<TransportStaffAttendanceFormData>({
    date: new Date().toISOString().split('T')[0],
    staffId: '',
    staffName: '',
    role: 'DRIVER',
    status: 'PRESENT',
    shift: 'FULL_DAY',
    checkInTime: '',
    checkOutTime: '',
    leaveReason: '',
    remarks: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (record) {
      setFormData({
        date: record.date,
        staffId: record.staffId,
        staffName: record.staffName,
        role: record.role,
        status: record.status,
        shift: record.shift,
        checkInTime: record.checkInTime || '',
        checkOutTime: record.checkOutTime || '',
        leaveReason: record.leaveReason || '',
        remarks: record.remarks || ''
      });
    } else {
      setFormData({
        date: new Date().toISOString().split('T')[0],
        staffId: '',
        staffName: '',
        role: 'DRIVER',
        status: 'PRESENT',
        shift: 'FULL_DAY',
        checkInTime: '',
        checkOutTime: '',
        leaveReason: '',
        remarks: ''
      });
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
      onSave(formData);
      setIsSubmitting(false);
      onClose();
    }, 600);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Auto-fill mock staff based on ID
    if (name === 'staffId') {
      const mockStaff = value === 'EMP-T-101' ? 'Rajesh Kumar' : (value === 'EMP-T-102' ? 'Sanjay Verma' : 'Staff Name');
      setFormData(prev => ({ ...prev, [name]: value, staffName: mockStaff }));
      return;
    }

    // Auto-fill current time if marking Present and checkin time is empty
    if (name === 'status' && (value === 'PRESENT' || value === 'HALF_DAY')) {
      const now = new Date();
      const timeStr = now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
      setFormData(prev => ({ 
        ...prev, 
        status: value as StaffAttendanceStatus,
        checkInTime: prev.checkInTime ? prev.checkInTime : timeStr 
      }));
      return;
    }
    
    // Clear checkin/out times if marked absent/on leave
    if (name === 'status' && (value === 'ABSENT' || value === 'ON_LEAVE')) {
       setFormData(prev => ({ 
        ...prev, 
        status: value as StaffAttendanceStatus,
        checkInTime: '',
        checkOutTime: ''
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
            {record ? 'Edit Attendance Record' : 'Mark Staff Attendance'}
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
            
            <div className="flex flex-col gap-1.5 md:col-span-2">
              <label className="text-sm font-semibold text-[var(--text-secondary)]">Date <span className="text-red-500">*</span></label>
              <input
                type="date"
                required
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors [color-scheme:dark]"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[var(--text-secondary)]">Staff ID <span className="text-red-500">*</span></label>
              <input
                required
                name="staffId"
                value={formData.staffId}
                onChange={handleChange}
                placeholder="e.g. EMP-T-101"
                className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[var(--text-secondary)]">Role <span className="text-red-500">*</span></label>
              <select
                required
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
              >
                <option value="DRIVER">Driver</option>
                <option value="CONDUCTOR">Conductor</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[var(--text-secondary)]">Attendance Status <span className="text-red-500">*</span></label>
              <select
                required
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
              >
                <option value="PRESENT">Present</option>
                <option value="HALF_DAY">Half Day</option>
                <option value="ON_LEAVE">On Leave</option>
                <option value="ABSENT">Absent (No Show)</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[var(--text-secondary)]">Shift <span className="text-red-500">*</span></label>
              <select
                required
                name="shift"
                value={formData.shift}
                onChange={handleChange}
                className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
              >
                <option value="FULL_DAY">Full Day</option>
                <option value="MORNING_ONLY">Morning Only</option>
                <option value="EVENING_ONLY">Evening Only</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[var(--text-secondary)]">Check-in Time</label>
              <input
                type="time"
                name="checkInTime"
                value={formData.checkInTime}
                onChange={handleChange}
                disabled={formData.status === 'ABSENT' || formData.status === 'ON_LEAVE'}
                className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors disabled:opacity-50 [color-scheme:dark]"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[var(--text-secondary)]">Check-out Time</label>
              <input
                type="time"
                name="checkOutTime"
                value={formData.checkOutTime}
                onChange={handleChange}
                disabled={formData.status === 'ABSENT' || formData.status === 'ON_LEAVE'}
                className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors disabled:opacity-50 [color-scheme:dark]"
              />
            </div>

            {formData.status === 'ON_LEAVE' && (
              <div className="flex flex-col gap-1.5 md:col-span-2">
                <label className="text-sm font-semibold text-[var(--text-secondary)]">Reason for Leave</label>
                <input
                  name="leaveReason"
                  value={formData.leaveReason}
                  onChange={handleChange}
                  placeholder="e.g. Sick Leave, Personal, etc."
                  className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
                />
              </div>
            )}

            <div className="flex flex-col gap-1.5 md:col-span-2">
              <label className="text-sm font-semibold text-[var(--text-secondary)]">Remarks / Admin Notes</label>
              <textarea
                name="remarks"
                value={formData.remarks}
                onChange={handleChange}
                placeholder="Any special remarks regarding substitute assignments or late arrivals..."
                rows={2}
                className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors resize-none"
              />
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
                <><Loader2 size={16} className="animate-spin" /> {record ? 'Saving...' : 'Marking...'}</>
              ) : (
                <>{record ? 'Update Record' : 'Save Attendance'}</>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
