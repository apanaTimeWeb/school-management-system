"use client";

import React, { useState, useEffect } from 'react';
import { X, Loader2 } from 'lucide-react';
import type { TransportRoute, TransportRouteFormData } from '../transport_routes_types/transport_routes.types';

// RESPONSIBILITY: Renders the form modal for adding or editing a route

interface TransportRoutesFormModalProps {
  route: TransportRoute | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: TransportRouteFormData) => void;
}

export default function TransportRoutesFormModal({ route, isOpen, onClose, onSave }: TransportRoutesFormModalProps) {
  
  const [formData, setFormData] = useState<TransportRouteFormData>({
    routeCode: '',
    routeName: '',
    startingPoint: '',
    endingPoint: '',
    routeDistanceKm: 0,
    estimatedDurationMins: 0,
    status: 'ACTIVE',
    assignedVehicleId: '',
    assignedDriverId: '',
    assignedConductorId: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (route) {
      setFormData({
        routeCode: route.routeCode,
        routeName: route.routeName,
        startingPoint: route.startingPoint,
        endingPoint: route.endingPoint,
        routeDistanceKm: route.routeDistanceKm,
        estimatedDurationMins: route.estimatedDurationMins,
        status: route.status,
        assignedVehicleId: route.assignedVehicleId || '',
        assignedDriverId: route.assignedDriverId || '',
        assignedConductorId: route.assignedConductorId || ''
      });
    } else {
      setFormData({
        routeCode: '',
        routeName: '',
        startingPoint: '',
        endingPoint: '',
        routeDistanceKm: 0,
        estimatedDurationMins: 0,
        status: 'ACTIVE',
        assignedVehicleId: '',
        assignedDriverId: '',
        assignedConductorId: ''
      });
    }
  }, [route, isOpen]);

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
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'number' ? Number(value) : value
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
            {route ? 'Edit Route' : 'Create New Route'}
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
            
            {/* Route Code */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[var(--text-secondary)]">Route Code <span className="text-red-500">*</span></label>
              <input
                required
                name="routeCode"
                value={formData.routeCode}
                onChange={handleChange}
                placeholder="e.g. RT-01"
                className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
              />
            </div>

            {/* Route Name */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[var(--text-secondary)]">Route Name <span className="text-red-500">*</span></label>
              <input
                required
                name="routeName"
                value={formData.routeName}
                onChange={handleChange}
                placeholder="e.g. North Campus Express"
                className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
              />
            </div>

            {/* Starting Point */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[var(--text-secondary)]">Starting Point <span className="text-red-500">*</span></label>
              <input
                required
                name="startingPoint"
                value={formData.startingPoint}
                onChange={handleChange}
                placeholder="e.g. Main Depot"
                className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
              />
            </div>

            {/* Ending Point */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[var(--text-secondary)]">Ending Point <span className="text-red-500">*</span></label>
              <input
                required
                name="endingPoint"
                value={formData.endingPoint}
                onChange={handleChange}
                placeholder="e.g. Central Square"
                className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
              />
            </div>

            {/* Distance */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[var(--text-secondary)]">Total Distance (km) <span className="text-red-500">*</span></label>
              <input
                required
                type="number"
                min="0.1"
                step="0.1"
                name="routeDistanceKm"
                value={formData.routeDistanceKm === 0 ? '' : formData.routeDistanceKm}
                onChange={handleChange}
                onKeyDown={(e) => { if (e.key === '-' || e.key === 'e') e.preventDefault(); }}
                placeholder="e.g. 15.5"
                className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
              />
            </div>

            {/* Duration */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[var(--text-secondary)]">Est. Duration (Mins) <span className="text-red-500">*</span></label>
              <input
                required
                type="number"
                min="1"
                name="estimatedDurationMins"
                value={formData.estimatedDurationMins === 0 ? '' : formData.estimatedDurationMins}
                onChange={handleChange}
                onKeyDown={(e) => { if (e.key === '-' || e.key === 'e') e.preventDefault(); }}
                placeholder="e.g. 45"
                className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
              />
            </div>

            {/* Status */}
            <div className="flex flex-col gap-1.5 sm:col-span-2">
              <label className="text-sm font-semibold text-[var(--text-secondary)]">Route Status <span className="text-red-500">*</span></label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
              >
                <option value="ACTIVE">Active</option>
                <option value="INACTIVE">Inactive</option>
                <option value="TEMPORARY_SUSPENDED">Temporarily Suspended</option>
                <option value="UNDER_MAINTENANCE">Under Maintenance</option>
              </select>
            </div>

            <div className="sm:col-span-2 pt-2 border-t border-[var(--border)]">
              <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-3">Resource Assignments</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Assigned Vehicle */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-[var(--text-secondary)]">Vehicle</label>
                  <select
                    name="assignedVehicleId"
                    value={formData.assignedVehicleId}
                    onChange={handleChange}
                    className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
                  >
                    <option value="">-- None --</option>
                    <option value="VEH-001">MH-12-AB-1234</option>
                    <option value="VEH-002">MH-12-CD-5678</option>
                  </select>
                </div>
                {/* Assigned Driver */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-[var(--text-secondary)]">Driver</label>
                  <select
                    name="assignedDriverId"
                    value={formData.assignedDriverId}
                    onChange={handleChange}
                    className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
                  >
                    <option value="">-- None --</option>
                    <option value="DRV-101">Rajesh Kumar</option>
                    <option value="DRV-102">Suresh Patil</option>
                  </select>
                </div>
                {/* Assigned Conductor */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-[var(--text-secondary)]">Conductor</label>
                  <select
                    name="assignedConductorId"
                    value={formData.assignedConductorId}
                    onChange={handleChange}
                    className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
                  >
                    <option value="">-- None --</option>
                    <option value="CND-201">Sanjay Verma</option>
                    <option value="CND-202">Anil Desai</option>
                  </select>
                </div>
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
                <><Loader2 size={16} className="animate-spin" /> {route ? 'Saving...' : 'Creating...'}</>
              ) : (
                <>{route ? 'Save Changes' : 'Create Route'}</>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
