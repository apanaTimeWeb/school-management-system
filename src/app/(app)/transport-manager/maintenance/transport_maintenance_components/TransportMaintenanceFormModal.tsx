"use client";

import React, { useState, useEffect } from 'react';
import { X, Loader2, Calculator } from 'lucide-react';
import type { TransportMaintenance, TransportMaintenanceFormData, MaintenanceType, MaintenanceStatus } from '../transport_maintenance_types/transport_maintenance.types';

// RESPONSIBILITY: Renders the form modal for scheduling or editing maintenance records

interface TransportMaintenanceFormModalProps {
  record: TransportMaintenance | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: TransportMaintenanceFormData) => void;
}

export default function TransportMaintenanceFormModal({ record, isOpen, onClose, onSave }: TransportMaintenanceFormModalProps) {
  
  const [formData, setFormData] = useState<TransportMaintenanceFormData>({
    vehicleId: '',
    vehicleNumber: '',
    type: 'SCHEDULED_SERVICE',
    status: 'SCHEDULED',
    serviceDate: new Date().toISOString().split('T')[0],
    nextServiceDate: '',
    workshopName: '',
    mechanicName: '',
    partsCost: '',
    labourCost: '',
    partsReplaced: '',
    remarks: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (record) {
      setFormData({
        vehicleId: record.vehicleId,
        vehicleNumber: record.vehicleNumber,
        type: record.type,
        status: record.status,
        serviceDate: record.serviceDate,
        nextServiceDate: record.nextServiceDate || '',
        workshopName: record.workshopName,
        mechanicName: record.mechanicName || '',
        partsCost: record.partsCost,
        labourCost: record.labourCost,
        partsReplaced: record.partsReplaced || '',
        remarks: record.remarks || ''
      });
    } else {
      setFormData({
        vehicleId: '',
        vehicleNumber: '',
        type: 'SCHEDULED_SERVICE',
        status: 'SCHEDULED',
        serviceDate: new Date().toISOString().split('T')[0],
        nextServiceDate: '',
        workshopName: '',
        mechanicName: '',
        partsCost: '',
        labourCost: '',
        partsReplaced: '',
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
    
    // Auto-fill mock vehicle number based on ID
    if (name === 'vehicleId') {
      const mockNumber = value === 'VEH-001' ? 'MH-12-AB-1234' : (value === 'VEH-002' ? 'MH-12-CD-5678' : 'MH-XX-XX-XXXX');
      setFormData(prev => ({ ...prev, [name]: value, vehicleNumber: mockNumber }));
      return;
    }
    
    if (name === 'partsCost' || name === 'labourCost') {
       const numValue = value === '' ? '' : Number(value);
       setFormData(prev => ({ ...prev, [name]: numValue }));
       return;
    }

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const totalCost = (Number(formData.partsCost) || 0) + (Number(formData.labourCost) || 0);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm motion-safe:transition-opacity">
      <div 
        className="relative w-full max-w-2xl bg-[var(--bg-overlay)] border border-[var(--border)] rounded-xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-5 border-b border-[var(--border)] bg-[var(--bg-card)]">
          <h2 className="text-lg font-bold text-[var(--text-primary)]">
            {record ? 'Edit Maintenance Record' : 'Log Maintenance / Service'}
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
            
            {/* Core Info */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[var(--text-secondary)]">Vehicle ID <span className="text-red-500">*</span></label>
              <input
                required
                name="vehicleId"
                value={formData.vehicleId}
                onChange={handleChange}
                placeholder="e.g. VEH-001"
                className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[var(--text-secondary)]">Vehicle Number</label>
              <input
                readOnly
                value={formData.vehicleNumber}
                placeholder="Auto-filled"
                className="bg-[var(--bg-card)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-secondary)] opacity-70 cursor-not-allowed"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[var(--text-secondary)]">Maintenance Type <span className="text-red-500">*</span></label>
              <select
                required
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
              >
                <option value="SCHEDULED_SERVICE">Scheduled Service</option>
                <option value="INSPECTION">Inspection</option>
                <option value="REPAIR">Repair</option>
                <option value="BREAKDOWN">Breakdown</option>
              </select>
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
                <option value="SCHEDULED">Scheduled</option>
                <option value="IN_PROGRESS">In Progress</option>
                <option value="COMPLETED">Completed</option>
                <option value="OVERDUE">Overdue</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[var(--text-secondary)]">Service Date <span className="text-red-500">*</span></label>
              <input
                type="date"
                required
                name="serviceDate"
                value={formData.serviceDate}
                onChange={handleChange}
                className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors [color-scheme:dark]"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[var(--text-secondary)]">Next Service Date (Predicted)</label>
              <input
                type="date"
                name="nextServiceDate"
                value={formData.nextServiceDate}
                onChange={handleChange}
                className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors [color-scheme:dark]"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[var(--text-secondary)]">Workshop / Garage Name <span className="text-red-500">*</span></label>
              <input
                required
                name="workshopName"
                value={formData.workshopName}
                onChange={handleChange}
                placeholder="e.g. City Motors Auth. Service"
                className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[var(--text-secondary)]">Mechanic / Contact Person</label>
              <input
                name="mechanicName"
                value={formData.mechanicName}
                onChange={handleChange}
                placeholder="Name of mechanic"
                className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
              />
            </div>

            {/* Cost Breakdown */}
            <div className="md:col-span-2 pt-4 border-t border-[var(--border)]">
              <h3 className="text-sm font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <Calculator size={16} className="text-[var(--primary)]" /> Cost Breakdown
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-[var(--text-secondary)] uppercase">Parts Cost (₹)</label>
                  <input
                    type="number"
                    min="0"
                    name="partsCost"
                    value={formData.partsCost}
                    onChange={handleChange}
                    placeholder="0"
                    className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-[var(--text-secondary)] uppercase">Labour Cost (₹)</label>
                  <input
                    type="number"
                    min="0"
                    name="labourCost"
                    value={formData.labourCost}
                    onChange={handleChange}
                    placeholder="0"
                    className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-[var(--text-secondary)] uppercase">Total Cost (₹)</label>
                  <div className="bg-[rgba(250,204,21,0.05)] border border-[var(--border)] rounded-md px-3 py-2 text-lg font-bold text-[var(--primary)] flex items-center h-full">
                    ₹ {totalCost.toLocaleString('en-IN')}
                  </div>
                </div>
              </div>
            </div>

            {/* Details */}
            <div className="flex flex-col gap-1.5 md:col-span-2 pt-2 border-t border-[var(--border)]">
              <label className="text-sm font-semibold text-[var(--text-secondary)]">Parts Replaced</label>
              <input
                name="partsReplaced"
                value={formData.partsReplaced}
                onChange={handleChange}
                placeholder="e.g. Engine Oil, Oil Filter, Brake Pads"
                className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1.5 md:col-span-2">
              <label className="text-sm font-semibold text-[var(--text-secondary)]">Detailed Remarks / Service Notes</label>
              <textarea
                name="remarks"
                value={formData.remarks}
                onChange={handleChange}
                placeholder="Describe the issue, work done, or specific warnings for future..."
                rows={3}
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
                <><Loader2 size={16} className="animate-spin" /> {record ? 'Saving...' : 'Logging...'}</>
              ) : (
                <>{record ? 'Update Record' : 'Save Maintenance'}</>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
