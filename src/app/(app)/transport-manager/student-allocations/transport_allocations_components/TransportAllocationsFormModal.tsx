"use client";

import React, { useState, useEffect } from 'react';
import { X, Loader2, AlertCircle } from 'lucide-react';
import type { TransportAllocation, TransportAllocationFormData } from '../transport_allocations_types/transport_allocations.types';

// RESPONSIBILITY: Renders the form modal for adding or editing a student allocation

interface TransportAllocationsFormModalProps {
  allocation: TransportAllocation | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: TransportAllocationFormData) => void;
  activeStudentIds: string[]; // for duplicate validation
}

export default function TransportAllocationsFormModal({ allocation, isOpen, onClose, onSave, activeStudentIds }: TransportAllocationsFormModalProps) {
  
  const [formData, setFormData] = useState<TransportAllocationFormData>({
    studentId: '',
    studentName: '',
    routeId: '',
    stopId: '',
    vehicleId: '',
    pickupPoint: '',
    dropPoint: '',
    shiftPreference: 'BOTH',
    startDate: new Date().toISOString().split('T')[0],
    endDate: '',
    status: 'ACTIVE'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setError(null);
    if (allocation) {
      setFormData({
        studentId: allocation.studentId,
        studentName: allocation.studentName,
        routeId: allocation.routeId,
        stopId: allocation.stopId,
        vehicleId: allocation.vehicleId,
        pickupPoint: allocation.pickupPoint,
        dropPoint: allocation.dropPoint,
        shiftPreference: allocation.shiftPreference,
        startDate: allocation.startDate,
        endDate: allocation.endDate,
        status: allocation.status
      });
    } else {
      setFormData({
        studentId: '',
        studentName: '',
        routeId: '',
        stopId: '',
        vehicleId: '',
        pickupPoint: '',
        dropPoint: '',
        shiftPreference: 'BOTH',
        startDate: new Date().toISOString().split('T')[0],
        endDate: '',
        status: 'ACTIVE'
      });
    }
  }, [allocation, isOpen]);

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
    
    // Duplicate active assignment validation
    if (!allocation && formData.status === 'ACTIVE' && activeStudentIds.includes(formData.studentId)) {
      setError(`Student (${formData.studentId}) already has an ACTIVE transport assignment. A student cannot have duplicate active assignments.`);
      return;
    }

    if (allocation && allocation.studentId !== formData.studentId && formData.status === 'ACTIVE' && activeStudentIds.includes(formData.studentId)) {
       setError(`Student (${formData.studentId}) already has an ACTIVE transport assignment.`);
       return;
    }

    setError(null);
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      onSave(formData);
      setIsSubmitting(false);
      onClose();
    }, 600);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setError(null); // clear error on change
    
    // In a real app, selecting a studentId would auto-fill the studentName
    // We'll mock that behavior slightly here
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
        className="relative w-full max-w-3xl bg-[var(--bg-overlay)] border border-[var(--border)] rounded-xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-5 border-b border-[var(--border)] bg-[var(--bg-card)]">
          <h2 className="text-lg font-bold text-[var(--text-primary)]">
            {allocation ? 'Edit Student Transport' : 'New Transport Assignment'}
          </h2>
          <button 
            onClick={onClose}
            className="p-1.5 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-input)] rounded-md transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto">
          {error && (
            <div className="mx-6 mt-6 p-4 rounded-md bg-[rgba(239,68,68,0.1)] border border-red-500 flex items-start gap-3">
              <AlertCircle size={20} className="text-red-500 flex-shrink-0" />
              <p className="text-sm font-medium text-red-500">{error}</p>
            </div>
          )}

          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Student Section */}
            <div className="md:col-span-2 p-4 rounded-lg bg-[var(--bg-input)] border border-[var(--border)] grid grid-cols-1 sm:grid-cols-2 gap-4">
              <h3 className="text-sm font-bold text-[var(--text-primary)] sm:col-span-2 mb-1">Student Details</h3>
              
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-[var(--text-secondary)]">Student ID / Reg No. <span className="text-red-500">*</span></label>
                <input
                  required
                  name="studentId"
                  value={formData.studentId}
                  onChange={handleChange}
                  placeholder="e.g. STU-1004"
                  className="bg-[var(--bg-card)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-[var(--text-secondary)]">Student Name (Auto-filled)</label>
                <input
                  readOnly
                  name="studentName"
                  value={formData.studentName}
                  placeholder="Select ID to auto-fill"
                  className="bg-[var(--bg-card)] opacity-70 border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none"
                />
              </div>
            </div>

            {/* Transport Routing */}
            <div className="md:col-span-2 pt-2 border-t border-[var(--border)] grid grid-cols-1 sm:grid-cols-3 gap-5">
              <h3 className="text-sm font-bold text-[var(--text-primary)] sm:col-span-3">Transport Routing</h3>
              
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-[var(--text-secondary)]">Route <span className="text-red-500">*</span></label>
                <select
                  required
                  name="routeId"
                  value={formData.routeId}
                  onChange={handleChange}
                  className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
                >
                  <option value="" disabled>Select Route...</option>
                  <option value="RT-001">Route R-01 (City Center)</option>
                  <option value="RT-002">Route R-02 (North Campus)</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-[var(--text-secondary)]">Stop <span className="text-red-500">*</span></label>
                <select
                  required
                  name="stopId"
                  value={formData.stopId}
                  onChange={handleChange}
                  className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
                >
                  <option value="" disabled>Select Stop...</option>
                  <option value="STP-001">Main Road (R-01)</option>
                  <option value="STP-002">Railway Colony (R-01)</option>
                  <option value="STP-005">Science Block (R-02)</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-[var(--text-secondary)]">Assigned Vehicle <span className="text-red-500">*</span></label>
                <select
                  required
                  name="vehicleId"
                  value={formData.vehicleId}
                  onChange={handleChange}
                  className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
                >
                  <option value="" disabled>Select Vehicle...</option>
                  <option value="VEH-001">MH-12-AB-1234 (R-01)</option>
                  <option value="VEH-002">MH-12-CD-5678 (R-02)</option>
                </select>
              </div>
            </div>

            {/* Custom Points */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[var(--text-secondary)]">Pickup Point (Specific) <span className="text-red-500">*</span></label>
              <input
                required
                name="pickupPoint"
                value={formData.pickupPoint}
                onChange={handleChange}
                placeholder="e.g. Building A Gate"
                className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[var(--text-secondary)]">Drop Point (Specific) <span className="text-red-500">*</span></label>
              <input
                required
                name="dropPoint"
                value={formData.dropPoint}
                onChange={handleChange}
                placeholder="e.g. Building A Gate"
                className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
              />
            </div>

            {/* Contract / Timeline */}
            <div className="md:col-span-2 pt-2 border-t border-[var(--border)] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <h3 className="text-sm font-bold text-[var(--text-primary)] sm:col-span-2 lg:col-span-4">Assignment Period & Rules</h3>
              
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-[var(--text-secondary)]">Shift Priority <span className="text-red-500">*</span></label>
                <select
                  required
                  name="shiftPreference"
                  value={formData.shiftPreference}
                  onChange={handleChange}
                  className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
                >
                  <option value="BOTH">Both (Morning & Evening)</option>
                  <option value="MORNING_ONLY">Morning Pickup Only</option>
                  <option value="EVENING_ONLY">Evening Drop Only</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-[var(--text-secondary)]">Start Date <span className="text-red-500">*</span></label>
                <input
                  required
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors [color-scheme:dark]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-[var(--text-secondary)]">End Date <span className="text-red-500">*</span></label>
                <input
                  required
                  type="date"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleChange}
                  className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors [color-scheme:dark]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-[var(--text-secondary)]">Status <span className="text-red-500">*</span></label>
                <select
                  required
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
                >
                  <option value="ACTIVE">Active</option>
                  <option value="SUSPENDED">Suspended</option>
                  <option value="INACTIVE">Inactive</option>
                </select>
              </div>
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
              className="min-w-[150px] flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-md bg-[var(--primary)] text-white hover:bg-[var(--primary-hover)] transition-colors disabled:opacity-50 shadow-lg shadow-[var(--primary-subtle)]"
            >
              {isSubmitting ? (
                <><Loader2 size={16} className="animate-spin" /> {allocation ? 'Saving...' : 'Assigning...'}</>
              ) : (
                <>{allocation ? 'Save Changes' : 'Assign Transport'}</>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
