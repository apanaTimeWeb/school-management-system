"use client";

import React, { useState, useEffect } from 'react';
import { X, Loader2, ClipboardList } from 'lucide-react';
import type { TransportVehicleInspection, TransportVehicleInspectionFormData, InspectionResultStatus, ChecklistItemStatus } from '../transport_vehicle_inspection_types/transport_vehicle_inspection.types';
import { CHECKLIST_ITEMS } from '../transport_vehicle_inspection_constants/transport_vehicle_inspection.constants';

// RESPONSIBILITY: Renders the form modal for conducting a vehicle inspection

interface TransportVehicleInspectionFormModalProps {
  record: TransportVehicleInspection | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: TransportVehicleInspectionFormData) => void;
}

export default function TransportVehicleInspectionFormModal({ record, isOpen, onClose, onSave }: TransportVehicleInspectionFormModalProps) {
  
  const initialChecklist = CHECKLIST_ITEMS.reduce((acc, item) => {
    acc[item.key] = 'PASS';
    return acc;
  }, {} as Record<string, ChecklistItemStatus>);

  const [formData, setFormData] = useState<TransportVehicleInspectionFormData>({
    vehicleId: '',
    vehicleNumber: '',
    inspectionDate: new Date().toISOString().split('T')[0],
    inspectorName: '',
    overallResult: 'PASSED',
    checklist: initialChecklist as any,
    remarks: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (record) {
      setFormData({
        vehicleId: record.vehicleId,
        vehicleNumber: record.vehicleNumber,
        inspectionDate: record.inspectionDate,
        inspectorName: record.inspectorName,
        overallResult: record.overallResult,
        checklist: { ...record.checklist },
        remarks: record.remarks || ''
      });
    } else {
      setFormData({
        vehicleId: '',
        vehicleNumber: '',
        inspectionDate: new Date().toISOString().split('T')[0],
        inspectorName: '',
        overallResult: 'PASSED',
        checklist: initialChecklist as any,
        remarks: ''
      });
    }
  }, [record, isOpen]);

  // Auto-calculate overall result based on checklist
  useEffect(() => {
    if (isOpen) {
       const hasFails = Object.values(formData.checklist).includes('FAIL');
       // In a real app, critical failures might result in 'FAILED', while minor ones result in 'NEEDS_ATTENTION'
       // For this UI, we'll suggest FAILED if there's any fail, but allow the user to override it.
       if (hasFails && formData.overallResult === 'PASSED') {
          setFormData(prev => ({ ...prev, overallResult: 'NEEDS_ATTENTION' }));
       } else if (!hasFails && formData.overallResult !== 'PASSED') {
          setFormData(prev => ({ ...prev, overallResult: 'PASSED' }));
       }
    }
  }, [formData.checklist, isOpen]);


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
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleChecklistChange = (key: string, value: ChecklistItemStatus) => {
    setFormData(prev => ({
      ...prev,
      checklist: {
        ...prev.checklist,
        [key]: value
      }
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
            {record ? 'Edit Inspection Report' : 'Conduct Vehicle Inspection'}
          </h2>
          <button 
            onClick={onClose}
            className="p-1.5 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-input)] rounded-md transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto">
          <div className="p-6 space-y-6">
            
            {/* Core Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
                <label className="text-sm font-semibold text-[var(--text-secondary)]">Inspection Date <span className="text-red-500">*</span></label>
                <input
                  type="date"
                  required
                  name="inspectionDate"
                  value={formData.inspectionDate}
                  onChange={handleChange}
                  className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors [color-scheme:dark]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-[var(--text-secondary)]">Inspector Name <span className="text-red-500">*</span></label>
                <input
                  required
                  name="inspectorName"
                  value={formData.inspectorName}
                  onChange={handleChange}
                  placeholder="Name of person inspecting"
                  className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
                />
              </div>
            </div>

            {/* Checklist items */}
            <div className="pt-4 border-t border-[var(--border)]">
              <h3 className="text-sm font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <ClipboardList size={16} className="text-[var(--primary)]" /> Comprehensive Checklist
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {CHECKLIST_ITEMS.map((item) => (
                  <div key={item.key} className="bg-[var(--bg-card)] border border-[var(--border)] rounded-lg p-3 flex flex-col gap-2">
                     <span className="text-sm font-semibold text-[var(--text-primary)]">{item.label}</span>
                     
                     <div className="flex bg-[var(--bg-input)] rounded-md overflow-hidden p-0.5 mt-auto">
                        <button
                          type="button"
                          onClick={() => handleChecklistChange(item.key, 'PASS')}
                          className={`flex-1 text-[10px] font-bold uppercase py-1.5 rounded transition-colors ${
                            formData.checklist[item.key as keyof InspectionChecklist] === 'PASS' 
                            ? 'bg-emerald-500 text-white shadow' 
                            : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                          }`}
                        >
                          Pass
                        </button>
                        <button
                          type="button"
                          onClick={() => handleChecklistChange(item.key, 'FAIL')}
                          className={`flex-1 text-[10px] font-bold uppercase py-1.5 rounded transition-colors ${
                            formData.checklist[item.key as keyof InspectionChecklist] === 'FAIL' 
                            ? 'bg-red-500 text-white shadow' 
                            : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                          }`}
                        >
                          Fail
                        </button>
                        <button
                          type="button"
                          onClick={() => handleChecklistChange(item.key, 'N_A')}
                          className={`flex-1 text-[10px] font-bold uppercase py-1.5 rounded transition-colors ${
                            formData.checklist[item.key as keyof InspectionChecklist] === 'N_A' 
                            ? 'bg-[var(--border)] text-[var(--text-primary)] shadow' 
                            : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                          }`}
                        >
                          N/A
                        </button>
                     </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Results & Remarks */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-4 border-t border-[var(--border)]">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-[var(--text-secondary)]">Overall Result <span className="text-red-500">*</span></label>
                <select
                  required
                  name="overallResult"
                  value={formData.overallResult}
                  onChange={handleChange}
                  className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm font-bold text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
                  style={{
                    color: formData.overallResult === 'PASSED' ? '#10B981' : formData.overallResult === 'FAILED' ? '#EF4444' : '#F59E0B'
                  }}
                >
                  <option value="PASSED">Passed</option>
                  <option value="NEEDS_ATTENTION">Needs Attention</option>
                  <option value="FAILED">Failed (Do Not Operate)</option>
                </select>
                <p className="text-[10px] text-[var(--text-secondary)]">Manually override if necessary based on critical failures.</p>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-[var(--text-secondary)]">Remarks / Required Fixes</label>
                <textarea
                  name="remarks"
                  value={formData.remarks}
                  onChange={handleChange}
                  placeholder="Detail any failures or items that need attention..."
                  rows={2}
                  className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors resize-none"
                />
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
              className="min-w-[120px] flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-md bg-[var(--primary)] text-white hover:bg-[var(--primary-hover)] transition-colors disabled:opacity-50 shadow-lg shadow-[var(--primary-subtle)]"
            >
              {isSubmitting ? (
                <><Loader2 size={16} className="animate-spin" /> {record ? 'Saving...' : 'Submitting...'}</>
              ) : (
                <>{record ? 'Update Report' : 'Submit Inspection'}</>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
