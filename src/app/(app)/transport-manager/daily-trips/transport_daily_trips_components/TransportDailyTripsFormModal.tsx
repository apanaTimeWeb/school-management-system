"use client";

import React, { useState, useEffect } from 'react';
import { X, Loader2 } from 'lucide-react';
import type { DailyTrip, DailyTripFormData } from '../transport_daily_trips_types/transport_daily_trips.types';

// RESPONSIBILITY: Renders the form modal for scheduling or editing a daily trip

interface TransportDailyTripsFormModalProps {
  trip: DailyTrip | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: DailyTripFormData) => void;
}

export default function TransportDailyTripsFormModal({ trip, isOpen, onClose, onSave }: TransportDailyTripsFormModalProps) {
  
  const [formData, setFormData] = useState<DailyTripFormData>({
    tripDate: new Date().toISOString().split('T')[0],
    tripType: 'MORNING_PICKUP',
    routeId: '',
    vehicleId: '',
    driverName: '',
    conductorName: '',
    plannedStartTime: '',
    plannedEndTime: '',
    status: 'SCHEDULED'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (trip) {
      setFormData({
        tripDate: trip.tripDate,
        tripType: trip.tripType,
        routeId: trip.routeId,
        vehicleId: trip.vehicleId,
        driverName: trip.driverName,
        conductorName: trip.conductorName || '',
        plannedStartTime: trip.plannedStartTime,
        plannedEndTime: trip.plannedEndTime,
        status: trip.status
      });
    } else {
      setFormData({
        tripDate: new Date().toISOString().split('T')[0],
        tripType: 'MORNING_PICKUP',
        routeId: '',
        vehicleId: '',
        driverName: '',
        conductorName: '',
        plannedStartTime: '',
        plannedEndTime: '',
        status: 'SCHEDULED'
      });
    }
  }, [trip, isOpen]);

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
    
    // Auto-fill mock driver based on vehicle
    if (name === 'vehicleId') {
      const mockDriver = value === 'VEH-001' ? 'Rajesh Kumar' : (value === 'VEH-002' ? 'Suresh Patil' : 'Amit Singh');
      setFormData(prev => ({ ...prev, [name]: value, driverName: mockDriver }));
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
            {trip ? 'Edit Trip Schedule' : 'Schedule New Trip'}
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
            
            {/* Trip Type & Date */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[var(--text-secondary)]">Trip Type <span className="text-red-500">*</span></label>
              <select
                required
                name="tripType"
                value={formData.tripType}
                onChange={handleChange}
                className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
              >
                <option value="MORNING_PICKUP">Morning Pickup</option>
                <option value="AFTERNOON_DROP">Afternoon Drop</option>
                <option value="SPECIAL_PICKUP">Special Pickup</option>
                <option value="SPECIAL_DROP">Special Drop</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[var(--text-secondary)]">Trip Date <span className="text-red-500">*</span></label>
              <input
                required
                type="date"
                name="tripDate"
                value={formData.tripDate}
                onChange={handleChange}
                className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors [color-scheme:dark]"
              />
            </div>

            {/* Route & Vehicle */}
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
                <option value="RT-003">Route R-03 (South Route)</option>
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
                <option value="VEH-001">MH-12-AB-1234</option>
                <option value="VEH-002">MH-12-CD-5678</option>
                <option value="VEH-003">MH-12-EF-9012</option>
              </select>
            </div>

            {/* Crew */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[var(--text-secondary)]">Driver</label>
              <input
                required
                name="driverName"
                value={formData.driverName}
                onChange={handleChange}
                placeholder="Auto-filled by vehicle"
                className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[var(--text-secondary)]">Conductor / Attendant</label>
              <input
                name="conductorName"
                value={formData.conductorName}
                onChange={handleChange}
                placeholder="Optional"
                className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
              />
            </div>

            {/* Timings */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[var(--text-secondary)]">Planned Start Time <span className="text-red-500">*</span></label>
              <input
                required
                type="time"
                name="plannedStartTime"
                value={formData.plannedStartTime}
                onChange={handleChange}
                className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors [color-scheme:dark]"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[var(--text-secondary)]">Planned End Time <span className="text-red-500">*</span></label>
              <input
                required
                type="time"
                name="plannedEndTime"
                value={formData.plannedEndTime}
                onChange={handleChange}
                className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors [color-scheme:dark]"
              />
            </div>

            {/* Status */}
            <div className="flex flex-col gap-1.5 sm:col-span-2 border-t border-[var(--border)] pt-4 mt-2">
              <label className="text-sm font-semibold text-[var(--text-secondary)]">Trip Status</label>
              <select
                required
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors sm:w-1/2"
              >
                <option value="SCHEDULED">Scheduled</option>
                <option value="STARTED">Started</option>
                <option value="IN_TRANSIT">In Transit</option>
                <option value="COMPLETED">Completed</option>
                <option value="DELAYED">Delayed</option>
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
                <><Loader2 size={16} className="animate-spin" /> {trip ? 'Saving...' : 'Scheduling...'}</>
              ) : (
                <>{trip ? 'Save Changes' : 'Schedule Trip'}</>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
