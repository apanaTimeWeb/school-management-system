"use client";

import React, { useState, useEffect } from 'react';
import { X, Loader2 } from 'lucide-react';
import type { TransportConductor, TransportConductorFormData } from '../transport_conductors_types/transport_conductors.types';

// RESPONSIBILITY: Renders the form modal for adding or editing a conductor

interface TransportConductorsFormModalProps {
  conductor: TransportConductor | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: TransportConductorFormData) => void;
}

export default function TransportConductorsFormModal({ conductor, isOpen, onClose, onSave }: TransportConductorsFormModalProps) {
  
  const [formData, setFormData] = useState<TransportConductorFormData>({
    employeeId: '',
    name: '',
    contact: '',
    emergencyContact: '',
    shift: 'MORNING',
    status: 'ACTIVE',
    assignedVehicleId: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (conductor) {
      setFormData({
        employeeId: conductor.employeeId,
        name: conductor.name,
        contact: conductor.contact,
        emergencyContact: conductor.emergencyContact,
        shift: conductor.shift,
        status: conductor.status,
        assignedVehicleId: conductor.assignedVehicleId || ''
      });
    } else {
      setFormData({
        employeeId: '',
        name: '',
        contact: '',
        emergencyContact: '',
        shift: 'MORNING',
        status: 'ACTIVE',
        assignedVehicleId: ''
      });
    }
  }, [conductor, isOpen]);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm motion-safe:transition-opacity">
      <div 
        className="relative w-full max-w-xl bg-[var(--bg-overlay)] border border-[var(--border)] rounded-xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-5 border-b border-[var(--border)] bg-[var(--bg-card)]">
          <h2 className="text-lg font-bold text-[var(--text-primary)]">
            {conductor ? 'Edit Conductor/Staff' : 'Add New Staff'}
          </h2>
          <button 
            onClick={onClose}
            className="p-1.5 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-input)] rounded-md transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto">
          <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
            
            {/* Name */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[var(--text-secondary)]">Name <span className="text-red-500">*</span></label>
              <input
                required
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Sanjay Verma"
                className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
              />
            </div>

            {/* Employee ID */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[var(--text-secondary)]">Employee ID <span className="text-red-500">*</span></label>
              <input
                required
                name="employeeId"
                value={formData.employeeId}
                onChange={handleChange}
                placeholder="e.g. EMP-T-201"
                className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
              />
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[var(--text-secondary)]">Contact Number <span className="text-red-500">*</span></label>
              <input
                required
                name="contact"
                type="tel"
                value={formData.contact}
                onChange={handleChange}
                placeholder="10-digit mobile number"
                className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
              />
            </div>

            {/* Emergency Contact */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[var(--text-secondary)]">Emergency Contact <span className="text-red-500">*</span></label>
              <input
                required
                name="emergencyContact"
                type="tel"
                value={formData.emergencyContact}
                onChange={handleChange}
                placeholder="10-digit mobile number"
                className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
              />
            </div>

            {/* Shift */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[var(--text-secondary)]">Shift <span className="text-red-500">*</span></label>
              <select
                name="shift"
                value={formData.shift}
                onChange={handleChange}
                className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
              >
                <option value="MORNING">Morning Shift</option>
                <option value="EVENING">Evening Shift</option>
                <option value="SPLIT">Split Shift</option>
                <option value="NIGHT">Night Shift</option>
              </select>
            </div>

            {/* Status */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[var(--text-secondary)]">Status <span className="text-red-500">*</span></label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
              >
                <option value="ACTIVE">Active</option>
                <option value="ON_LEAVE">On Leave</option>
                <option value="SUSPENDED">Suspended</option>
                <option value="INACTIVE">Inactive</option>
              </select>
            </div>

            {/* Assigned Vehicle */}
            <div className="flex flex-col gap-1.5 sm:col-span-2">
              <label className="text-sm font-semibold text-[var(--text-secondary)]">Assigned Vehicle</label>
              <select
                name="assignedVehicleId"
                value={formData.assignedVehicleId}
                onChange={handleChange}
                className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
              >
                <option value="">-- Unassigned --</option>
                <option value="VEH-001">MH-12-AB-1234 (Route A)</option>
                <option value="VEH-002">MH-12-CD-5678 (Route B)</option>
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
                <><Loader2 size={16} className="animate-spin" /> {conductor ? 'Saving...' : 'Adding...'}</>
              ) : (
                <>{conductor ? 'Save Changes' : 'Add Staff'}</>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
