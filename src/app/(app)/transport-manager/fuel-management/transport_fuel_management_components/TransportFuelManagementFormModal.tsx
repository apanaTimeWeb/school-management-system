"use client";

import React, { useState, useEffect } from 'react';
import { X, Loader2, Calculator } from 'lucide-react';
import type { TransportFuelLog, TransportFuelLogFormData } from '../transport_fuel_management_types/transport_fuel_management.types';

// RESPONSIBILITY: Renders the form modal for logging fuel entry and calculating costs

interface TransportFuelManagementFormModalProps {
  record: TransportFuelLog | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: TransportFuelLogFormData) => void;
}

export default function TransportFuelManagementFormModal({ record, isOpen, onClose, onSave }: TransportFuelManagementFormModalProps) {
  
  const [formData, setFormData] = useState<TransportFuelLogFormData>({
    vehicleId: '',
    vehicleNumber: '',
    fuelType: 'DIESEL',
    date: new Date().toISOString().split('T')[0],
    fuelStation: '',
    quantityLiters: '',
    ratePerLiter: '',
    odometerReading: '',
    remarks: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (record) {
      setFormData({
        vehicleId: record.vehicleId,
        vehicleNumber: record.vehicleNumber,
        fuelType: record.fuelType,
        date: record.date,
        fuelStation: record.fuelStation,
        quantityLiters: record.quantityLiters,
        ratePerLiter: record.ratePerLiter,
        odometerReading: record.odometerReading,
        remarks: record.remarks || ''
      });
    } else {
      setFormData({
        vehicleId: '',
        vehicleNumber: '',
        fuelType: 'DIESEL',
        date: new Date().toISOString().split('T')[0],
        fuelStation: '',
        quantityLiters: '',
        ratePerLiter: '',
        odometerReading: '',
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
    
    if (name === 'quantityLiters' || name === 'ratePerLiter' || name === 'odometerReading') {
       const numValue = value === '' ? '' : Number(value);
       setFormData(prev => ({ ...prev, [name]: numValue }));
       return;
    }

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const totalCost = (Number(formData.quantityLiters) || 0) * (Number(formData.ratePerLiter) || 0);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm motion-safe:transition-opacity">
      <div 
        className="relative w-full max-w-2xl bg-[var(--bg-overlay)] border border-[var(--border)] rounded-xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-5 border-b border-[var(--border)] bg-[var(--bg-card)]">
          <h2 className="text-lg font-bold text-[var(--text-primary)]">
            {record ? 'Edit Fuel Entry' : 'Log New Fuel Entry'}
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
              <label className="text-sm font-semibold text-[var(--text-secondary)]">Date of Refuel <span className="text-red-500">*</span></label>
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
              <label className="text-sm font-semibold text-[var(--text-secondary)]">Fuel Station Name <span className="text-red-500">*</span></label>
              <input
                required
                name="fuelStation"
                value={formData.fuelStation}
                onChange={handleChange}
                placeholder="e.g. IndianOil, Sector 4"
                className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1.5 md:col-span-2">
              <label className="text-sm font-semibold text-[var(--text-secondary)]">Fuel Type <span className="text-red-500">*</span></label>
              <select
                required
                name="fuelType"
                value={formData.fuelType}
                onChange={handleChange}
                className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
              >
                <option value="DIESEL">Diesel</option>
                <option value="PETROL">Petrol</option>
                <option value="CNG">CNG</option>
                <option value="EV">EV / Electric Charge</option>
              </select>
            </div>

            {/* Billing & Calc */}
            <div className="md:col-span-2 pt-4 border-t border-[var(--border)]">
              <h3 className="text-sm font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <Calculator size={16} className="text-[var(--primary)]" /> Fill Details & Billing
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-[var(--text-secondary)] uppercase">Quantity (Ltrs/Kg) <span className="text-red-500">*</span></label>
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    required
                    name="quantityLiters"
                    value={formData.quantityLiters}
                    onChange={handleChange}
                    placeholder="0.00"
                    className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-[var(--text-secondary)] uppercase">Rate per Ltr (₹) <span className="text-red-500">*</span></label>
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    required
                    name="ratePerLiter"
                    value={formData.ratePerLiter}
                    onChange={handleChange}
                    placeholder="0.00"
                    className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-[var(--text-secondary)] uppercase">Total Cost (₹)</label>
                  <div className="bg-[rgba(250,204,21,0.05)] border border-[var(--border)] rounded-md px-3 py-2 text-lg font-bold text-[var(--primary)] flex items-center h-full">
                    ₹ {totalCost.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </div>
                </div>
              </div>
            </div>

            {/* Odometer Details */}
            <div className="flex flex-col gap-1.5 md:col-span-2 pt-2 border-t border-[var(--border)]">
              <label className="text-sm font-semibold text-[var(--text-secondary)]">Odometer Reading (Current km) <span className="text-red-500">*</span></label>
              <input
                type="number"
                required
                min="0"
                name="odometerReading"
                value={formData.odometerReading}
                onChange={handleChange}
                placeholder="Enter current km from dashboard..."
                className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
              />
              <p className="text-xs text-[var(--text-secondary)] mt-0.5">Used by system to automatically calculate mileage (kmpl) against previous fill.</p>
            </div>

            <div className="flex flex-col gap-1.5 md:col-span-2">
              <label className="text-sm font-semibold text-[var(--text-secondary)]">Remarks / Driver Notes</label>
              <textarea
                name="remarks"
                value={formData.remarks}
                onChange={handleChange}
                placeholder="Optional notes regarding the refuel..."
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
                <><Loader2 size={16} className="animate-spin" /> {record ? 'Saving...' : 'Logging...'}</>
              ) : (
                <>{record ? 'Update Log' : 'Save Fuel Entry'}</>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
