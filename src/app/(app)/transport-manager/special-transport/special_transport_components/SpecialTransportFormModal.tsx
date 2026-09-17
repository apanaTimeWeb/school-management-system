"use client";

import React, { useState, useEffect } from 'react';
import { X, Loader2, MapPin, Users, Calendar, Bus, Phone, FileCheck } from 'lucide-react';
import type { SpecialTransportRecord, SpecialTransportFormData } from '../special_transport_types/special_transport.types';

// RESPONSIBILITY: Renders the modal for creating/editing a special transport trip

interface SpecialTransportFormModalProps {
  record: SpecialTransportRecord | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: SpecialTransportFormData) => void;
}

export default function SpecialTransportFormModal({ record, isOpen, onClose, onSave }: SpecialTransportFormModalProps) {
  
  const [formData, setFormData] = useState<SpecialTransportFormData>({
    tripName: '',
    tripType: 'PICNIC',
    status: 'SCHEDULED',
    destination: '',
    routeDetails: '',
    scheduleDate: '',
    departureTime: '',
    returnTime: '',
    assignedVehicle: '',
    assignedDriver: '',
    assignedConductor: '',
    studentCount: 0,
    accompanyingStaff: '',
    permissionStatus: 'PENDING',
    emergencyContact: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (record) {
      setFormData({
        tripName: record.tripName,
        tripType: record.tripType,
        status: record.status,
        destination: record.destination,
        routeDetails: record.routeDetails,
        scheduleDate: record.scheduleDate,
        departureTime: record.departureTime,
        returnTime: record.returnTime,
        assignedVehicle: record.assignedVehicle,
        assignedDriver: record.assignedDriver,
        assignedConductor: record.assignedConductor,
        studentCount: record.studentCount,
        accompanyingStaff: record.accompanyingStaff,
        permissionStatus: record.permissionStatus,
        emergencyContact: record.emergencyContact
      });
    } else {
      setFormData({
        tripName: '',
        tripType: 'PICNIC',
        status: 'SCHEDULED',
        destination: '',
        routeDetails: '',
        scheduleDate: new Date().toISOString().split('T')[0],
        departureTime: '08:00',
        returnTime: '15:00',
        assignedVehicle: '',
        assignedDriver: '',
        assignedConductor: '',
        studentCount: 0,
        accompanyingStaff: '',
        permissionStatus: 'PENDING',
        emergencyContact: ''
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
    setTimeout(() => {
      onSave(formData);
      setIsSubmitting(false);
      onClose();
    }, 600);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({ 
      ...prev, 
      [name]: type === 'number' ? parseInt(value) || 0 : value 
    }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm motion-safe:transition-opacity">
      <div 
        className="relative w-full max-w-3xl bg-[var(--bg-overlay)] border border-[var(--border)] rounded-xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-5 border-b border-[var(--border)] bg-[var(--bg-card)]">
          <h2 className="text-lg font-bold text-[var(--text-primary)] flex items-center gap-2">
            <Bus size={20} className="text-[var(--primary)]" /> 
            {record ? 'Edit Special Trip' : 'Plan Special Trip'}
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
            
            {/* Basic Details */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-[var(--primary)] uppercase tracking-wider flex items-center gap-2 border-b border-[var(--border)] pb-2">
                1. Trip Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5 md:col-span-2">
                  <label className="text-sm font-semibold text-[var(--text-secondary)]">Trip / Event Name <span className="text-red-500">*</span></label>
                  <input
                    required
                    name="tripName"
                    value={formData.tripName}
                    onChange={handleChange}
                    placeholder="e.g. Science Museum Visit, Inter-School Football Match"
                    className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm font-bold text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-[var(--text-secondary)]">Trip Type <span className="text-red-500">*</span></label>
                  <select
                    required
                    name="tripType"
                    value={formData.tripType}
                    onChange={handleChange}
                    className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
                  >
                    <option value="PICNIC">Picnic</option>
                    <option value="SPORTS_EVENT">Sports Event</option>
                    <option value="COMPETITION">Competition</option>
                    <option value="EXAM_CENTER">Exam Center Drop</option>
                    <option value="EDUCATIONAL_TOUR">Educational Tour</option>
                    <option value="FIELD_TRIP">Field Trip</option>
                    <option value="SPECIAL_PICKUP_DROP">Special Request</option>
                  </select>
                </div>
                
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-[var(--text-secondary)]">Current Status <span className="text-red-500">*</span></label>
                  <select
                    required
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
                  >
                    <option value="SCHEDULED">Scheduled</option>
                    <option value="IN_TRANSIT">In Transit</option>
                    <option value="COMPLETED">Completed</option>
                    <option value="CANCELLED">Cancelled</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Location & Time */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-[var(--primary)] uppercase tracking-wider flex items-center gap-2 border-b border-[var(--border)] pb-2">
                2. Location & Schedule
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-[var(--text-secondary)] flex items-center gap-1.5"><MapPin size={14}/> Destination <span className="text-red-500">*</span></label>
                  <input
                    required
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    placeholder="Where is the event?"
                    className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
                  />
                </div>
                
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-[var(--text-secondary)]">Route Instructions</label>
                  <input
                    name="routeDetails"
                    value={formData.routeDetails}
                    onChange={handleChange}
                    placeholder="e.g. School -> Highway -> Museum"
                    className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-[var(--text-secondary)] flex items-center gap-1.5"><Calendar size={14}/> Date <span className="text-red-500">*</span></label>
                  <input
                    type="date"
                    required
                    name="scheduleDate"
                    value={formData.scheduleDate}
                    onChange={handleChange}
                    className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors [color-scheme:dark]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                   <div className="flex flex-col gap-1.5">
                     <label className="text-sm font-semibold text-[var(--text-secondary)]">Departure</label>
                     <input
                       type="time"
                       required
                       name="departureTime"
                       value={formData.departureTime}
                       onChange={handleChange}
                       className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors [color-scheme:dark]"
                     />
                   </div>
                   <div className="flex flex-col gap-1.5">
                     <label className="text-sm font-semibold text-[var(--text-secondary)]">Return</label>
                     <input
                       type="time"
                       required
                       name="returnTime"
                       value={formData.returnTime}
                       onChange={handleChange}
                       className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors [color-scheme:dark]"
                     />
                   </div>
                </div>
              </div>
            </div>

            {/* Logistics & Safety */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-[var(--primary)] uppercase tracking-wider flex items-center gap-2 border-b border-[var(--border)] pb-2">
                3. Logistics & Safety
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-[var(--text-secondary)] flex items-center gap-1.5"><Bus size={14}/> Vehicle</label>
                  <input
                    required
                    name="assignedVehicle"
                    value={formData.assignedVehicle}
                    onChange={handleChange}
                    placeholder="e.g. VEH-005"
                    className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
                  />
                </div>
                
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-[var(--text-secondary)] flex items-center gap-1.5">Driver</label>
                  <input
                    required
                    name="assignedDriver"
                    value={formData.assignedDriver}
                    onChange={handleChange}
                    placeholder="Driver Name"
                    className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
                  />
                </div>
                
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-[var(--text-secondary)] flex items-center gap-1.5">Conductor</label>
                  <input
                    name="assignedConductor"
                    value={formData.assignedConductor}
                    onChange={handleChange}
                    placeholder="Conductor/Helper"
                    className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-[var(--text-secondary)] flex items-center gap-1.5"><Users size={14}/> Student Count</label>
                  <input
                    type="number"
                    min="1"
                    required
                    name="studentCount"
                    value={formData.studentCount || ''}
                    onChange={handleChange}
                    className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
                  />
                </div>
                
                <div className="flex flex-col gap-1.5 md:col-span-2">
                  <label className="text-sm font-semibold text-[var(--text-secondary)]">Accompanying Staff / Teachers</label>
                  <input
                    required
                    name="accompanyingStaff"
                    value={formData.accompanyingStaff}
                    onChange={handleChange}
                    placeholder="e.g. Mr. Sharma, Mrs. Gupta"
                    className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-[var(--text-secondary)] flex items-center gap-1.5"><FileCheck size={14}/> Permissions</label>
                  <select
                    required
                    name="permissionStatus"
                    value={formData.permissionStatus}
                    onChange={handleChange}
                    className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm font-medium text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
                  >
                    <option value="PENDING">Pending Approval / Slips</option>
                    <option value="PARTIAL">Partial (Some missing)</option>
                    <option value="APPROVED">Fully Approved</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5 md:col-span-2">
                  <label className="text-sm font-semibold text-[var(--text-secondary)] flex items-center gap-1.5"><Phone size={14}/> Emergency Contact Person/No.</label>
                  <input
                    required
                    name="emergencyContact"
                    value={formData.emergencyContact}
                    onChange={handleChange}
                    placeholder="e.g. +91 98765 43210 (Mr. Sharma)"
                    className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
                  />
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
                <><Loader2 size={16} className="animate-spin" /> Saving...</>
              ) : (
                <>{record ? 'Update Trip' : 'Create Trip'}</>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
