"use client";

import React, { useState, useEffect } from 'react';
import { X, Loader2 } from 'lucide-react';
import type { TransportVehicle, TransportVehicleFormData, TransportVehicleStatus, TransportVehicleType, TransportFuelType } from '../transport_vehicles_types/transport_vehicles.types';

// RESPONSIBILITY: Renders the form modal for adding or editing a vehicle

interface TransportVehiclesFormModalProps {
  vehicle: TransportVehicle | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: TransportVehicleFormData) => void;
}

export default function TransportVehiclesFormModal({ vehicle, isOpen, onClose, onSave }: TransportVehiclesFormModalProps) {
  
  const [formData, setFormData] = useState<TransportVehicleFormData>({
    vehicleNumber: '',
    registrationNumber: '',
    vehicleType: 'BUS',
    seatingCapacity: 0,
    model: '',
    manufacturer: '',
    purchaseDate: '',
    fuelType: 'DIESEL',
    status: 'ACTIVE',
    gpsDeviceId: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (vehicle) {
      setFormData({
        vehicleNumber: vehicle.vehicleNumber,
        registrationNumber: vehicle.registrationNumber,
        vehicleType: vehicle.vehicleType,
        seatingCapacity: vehicle.seatingCapacity,
        model: vehicle.model,
        manufacturer: vehicle.manufacturer,
        purchaseDate: vehicle.purchaseDate,
        fuelType: vehicle.fuelType,
        status: vehicle.status,
        gpsDeviceId: vehicle.gpsDeviceId || ''
      });
    } else {
      setFormData({
        vehicleNumber: '',
        registrationNumber: '',
        vehicleType: 'BUS',
        seatingCapacity: 0,
        model: '',
        manufacturer: '',
        purchaseDate: '',
        fuelType: 'DIESEL',
        status: 'ACTIVE',
        gpsDeviceId: ''
      });
    }
  }, [vehicle, isOpen]);

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
      [name]: name === 'seatingCapacity' ? Number(value) : value
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
            {vehicle ? 'Edit Vehicle' : 'Add New Vehicle'}
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
            
            {/* Vehicle Number */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[var(--text-secondary)]">Vehicle Number <span className="text-red-500">*</span></label>
              <input
                required
                name="vehicleNumber"
                value={formData.vehicleNumber}
                onChange={handleChange}
                placeholder="e.g. MH-12-AB-1234"
                className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
              />
            </div>

            {/* Registration Number */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[var(--text-secondary)]">Registration Number <span className="text-red-500">*</span></label>
              <input
                required
                name="registrationNumber"
                value={formData.registrationNumber}
                onChange={handleChange}
                placeholder="e.g. REG-987654321"
                className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
              />
            </div>

            {/* Vehicle Type */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[var(--text-secondary)]">Vehicle Type <span className="text-red-500">*</span></label>
              <select
                name="vehicleType"
                value={formData.vehicleType}
                onChange={handleChange}
                className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
              >
                <option value="BUS">Bus</option>
                <option value="VAN">Van</option>
                <option value="OTHER">Other</option>
              </select>
            </div>

            {/* Seating Capacity */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[var(--text-secondary)]">Seating Capacity <span className="text-red-500">*</span></label>
              <input
                required
                type="number"
                min="1"
                name="seatingCapacity"
                value={formData.seatingCapacity || ''}
                onChange={handleChange}
                onKeyDown={(e) => { if (e.key === '-' || e.key === 'e') e.preventDefault(); }}
                placeholder="e.g. 45"
                className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
              />
            </div>

            {/* Manufacturer */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[var(--text-secondary)]">Manufacturer <span className="text-red-500">*</span></label>
              <input
                required
                name="manufacturer"
                value={formData.manufacturer}
                onChange={handleChange}
                placeholder="e.g. Tata Motors"
                className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
              />
            </div>

            {/* Model */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[var(--text-secondary)]">Model <span className="text-red-500">*</span></label>
              <input
                required
                name="model"
                value={formData.model}
                onChange={handleChange}
                placeholder="e.g. Marcopolo"
                className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
              />
            </div>

            {/* Purchase Date */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[var(--text-secondary)]">Purchase Date <span className="text-red-500">*</span></label>
              <input
                required
                type="date"
                name="purchaseDate"
                value={formData.purchaseDate}
                onChange={handleChange}
                className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors [color-scheme:dark]"
              />
            </div>

            {/* Fuel Type */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[var(--text-secondary)]">Fuel Type <span className="text-red-500">*</span></label>
              <select
                name="fuelType"
                value={formData.fuelType}
                onChange={handleChange}
                className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
              >
                <option value="DIESEL">Diesel</option>
                <option value="PETROL">Petrol</option>
                <option value="CNG">CNG</option>
                <option value="ELECTRIC">Electric</option>
              </select>
            </div>

            {/* GPS Device ID */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[var(--text-secondary)]">GPS Device ID</label>
              <input
                name="gpsDeviceId"
                value={formData.gpsDeviceId}
                onChange={handleChange}
                placeholder="e.g. GPS-8899"
                className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
              />
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
                <option value="INACTIVE">Inactive</option>
                <option value="MAINTENANCE">Maintenance</option>
                <option value="RESTRICTED">Restricted</option>
                <option value="RETIRED">Retired</option>
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
                <><Loader2 size={16} className="animate-spin" /> {vehicle ? 'Saving...' : 'Adding...'}</>
              ) : (
                <>{vehicle ? 'Save Changes' : 'Add Vehicle'}</>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
