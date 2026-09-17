"use client";

import React, { useState, useEffect } from 'react';
import { X, Loader2, AlertOctagon } from 'lucide-react';
import type { TransportIncident, TransportIncidentFormData, IncidentType, IncidentSeverity, IncidentStatus } from '../transport_safety_types/transport_safety.types';

// RESPONSIBILITY: Renders the form modal for reporting or updating safety & emergency incidents

interface TransportSafetyFormModalProps {
  record: TransportIncident | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: TransportIncidentFormData) => void;
}

export default function TransportSafetyFormModal({ record, isOpen, onClose, onSave }: TransportSafetyFormModalProps) {
  
  const [formData, setFormData] = useState<TransportIncidentFormData>({
    incidentType: 'BREAKDOWN',
    severity: 'MEDIUM',
    status: 'REPORTED',
    vehicleId: '',
    vehicleNumber: '',
    routeId: '',
    dateTime: new Date().toISOString().slice(0, 16), // 'YYYY-MM-DDTHH:mm' format for datetime-local
    location: '',
    description: '',
    actionTaken: '',
    followUpRequired: false,
    reportedBy: '',
    emergencyContactNotified: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (record) {
      // Parse ISO string to datetime-local format
      let formattedDateTime = record.dateTime;
      try {
        if (record.dateTime.includes('Z') || record.dateTime.length > 16) {
           const d = new Date(record.dateTime);
           const tzOffset = d.getTimezoneOffset() * 60000;
           formattedDateTime = (new Date(d.getTime() - tzOffset)).toISOString().slice(0, 16);
        }
      } catch (e) {}

      setFormData({
        incidentType: record.incidentType,
        severity: record.severity,
        status: record.status,
        vehicleId: record.vehicleId || '',
        vehicleNumber: record.vehicleNumber || '',
        routeId: record.routeId || '',
        dateTime: formattedDateTime,
        location: record.location,
        description: record.description,
        actionTaken: record.actionTaken || '',
        followUpRequired: record.followUpRequired,
        reportedBy: record.reportedBy,
        emergencyContactNotified: record.emergencyContactNotified
      });
    } else {
      const now = new Date();
      const tzOffset = now.getTimezoneOffset() * 60000;
      const localISOTime = (new Date(now.getTime() - tzOffset)).toISOString().slice(0, 16);

      setFormData({
        incidentType: 'BREAKDOWN',
        severity: 'MEDIUM',
        status: 'REPORTED',
        vehicleId: '',
        vehicleNumber: '',
        routeId: '',
        dateTime: localISOTime,
        location: '',
        description: '',
        actionTaken: '',
        followUpRequired: false,
        reportedBy: '',
        emergencyContactNotified: false
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
    const { name, value, type } = e.target;
    
    // Auto-fill mock vehicle number based on ID
    if (name === 'vehicleId') {
      const mockNumber = value === 'VEH-001' ? 'MH-12-AB-1234' : (value === 'VEH-002' ? 'MH-12-CD-5678' : 'MH-XX-XX-XXXX');
      setFormData(prev => ({ ...prev, [name]: value, vehicleNumber: mockNumber }));
      return;
    }
    
    if (type === 'checkbox') {
       const checked = (e.target as HTMLInputElement).checked;
       setFormData(prev => ({ ...prev, [name]: checked }));
       return;
    }

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const isCritical = formData.severity === 'CRITICAL' || formData.severity === 'HIGH';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm motion-safe:transition-opacity">
      <div 
        className="relative w-full max-w-2xl bg-[var(--bg-overlay)] border border-[var(--border)] rounded-xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`flex items-center justify-between p-5 border-b border-[var(--border)] ${isCritical ? 'bg-[rgba(239,68,68,0.1)] border-b-red-500/20' : 'bg-[var(--bg-card)]'}`}>
          <h2 className={`text-lg font-bold flex items-center gap-2 ${isCritical ? 'text-red-500' : 'text-[var(--text-primary)]'}`}>
            <AlertOctagon size={20} />
            {record ? 'Update Incident Report' : 'Log New Emergency/Incident'}
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
            
            {/* Core Classifications */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[var(--text-secondary)]">Incident Type <span className="text-red-500">*</span></label>
              <select
                required
                name="incidentType"
                value={formData.incidentType}
                onChange={handleChange}
                className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
              >
                <option value="BREAKDOWN">Vehicle Breakdown</option>
                <option value="ACCIDENT">Accident</option>
                <option value="ROUTE_EMERGENCY">Route Emergency / Blockage</option>
                <option value="STUDENT_EMERGENCY">Student Medical Emergency</option>
                <option value="DRIVER_EMERGENCY">Staff / Driver Emergency</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[var(--text-secondary)]">Severity <span className="text-red-500">*</span></label>
              <select
                required
                name="severity"
                value={formData.severity}
                onChange={handleChange}
                className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] font-bold focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
                style={{
                  color: formData.severity === 'CRITICAL' ? '#EF4444' : formData.severity === 'HIGH' ? '#F97316' : formData.severity === 'MEDIUM' ? '#F59E0B' : '#3B82F6'
                }}
              >
                <option value="LOW">Low</option>
                <option value="MEDIUM">Medium</option>
                <option value="HIGH">High</option>
                <option value="CRITICAL">Critical</option>
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
                <option value="REPORTED">Reported / Logged</option>
                <option value="IN_PROGRESS">In Progress / Responding</option>
                <option value="UNDER_INVESTIGATION">Under Investigation</option>
                <option value="RESOLVED">Resolved / Closed</option>
              </select>
            </div>
            
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[var(--text-secondary)]">Reported By <span className="text-red-500">*</span></label>
              <input
                required
                name="reportedBy"
                value={formData.reportedBy}
                onChange={handleChange}
                placeholder="Name of driver/staff"
                className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
              />
            </div>

            {/* Context */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[var(--text-secondary)]">Vehicle ID (Optional)</label>
              <input
                name="vehicleId"
                value={formData.vehicleId}
                onChange={handleChange}
                placeholder="e.g. VEH-001"
                className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[var(--text-secondary)]">Route ID (Optional)</label>
              <input
                name="routeId"
                value={formData.routeId}
                onChange={handleChange}
                placeholder="e.g. R-01"
                className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[var(--text-secondary)]">Date & Time <span className="text-red-500">*</span></label>
              <input
                type="datetime-local"
                required
                name="dateTime"
                value={formData.dateTime}
                onChange={handleChange}
                className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors [color-scheme:dark]"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[var(--text-secondary)]">Location <span className="text-red-500">*</span></label>
              <input
                required
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Specific location or landmark"
                className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
              />
            </div>

            {/* Detailed Description */}
            <div className="flex flex-col gap-1.5 md:col-span-2 pt-2 border-t border-[var(--border)]">
              <label className="text-sm font-semibold text-[var(--text-secondary)]">Incident Description <span className="text-red-500">*</span></label>
              <textarea
                required
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="What exactly happened?"
                rows={3}
                className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors resize-none"
              />
            </div>

            <div className="flex flex-col gap-1.5 md:col-span-2">
              <label className="text-sm font-semibold text-[var(--text-secondary)]">Action Taken</label>
              <textarea
                name="actionTaken"
                value={formData.actionTaken}
                onChange={handleChange}
                placeholder="What immediate actions were performed to mitigate the emergency?"
                rows={2}
                className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors resize-none"
              />
            </div>
            
            {/* Toggles */}
            <div className="md:col-span-2 flex flex-col gap-3 p-4 bg-[var(--bg-input)] rounded-lg border border-[var(--border)]">
              <label className="flex items-center gap-3 cursor-pointer">
                <input 
                  type="checkbox" 
                  name="emergencyContactNotified" 
                  checked={formData.emergencyContactNotified} 
                  onChange={handleChange}
                  className="w-4 h-4 rounded text-[var(--primary)] focus:ring-[var(--primary)] bg-[var(--bg-card)] border-[var(--border)]"
                />
                <div>
                  <span className="text-sm font-semibold text-[var(--text-primary)] block">Emergency Contacts Notified</span>
                  <span className="text-xs text-[var(--text-secondary)]">Check if parents, principal, or authorities have been informed.</span>
                </div>
              </label>

              <label className="flex items-center gap-3 cursor-pointer mt-2">
                <input 
                  type="checkbox" 
                  name="followUpRequired" 
                  checked={formData.followUpRequired} 
                  onChange={handleChange}
                  className="w-4 h-4 rounded text-[var(--primary)] focus:ring-[var(--primary)] bg-[var(--bg-card)] border-[var(--border)]"
                />
                <div>
                  <span className="text-sm font-semibold text-[var(--text-primary)] block">Follow-up Required</span>
                  <span className="text-xs text-[var(--text-secondary)]">Check if this incident requires further investigation or insurance claims.</span>
                </div>
              </label>
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
              className={`min-w-[120px] flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-md text-white transition-colors disabled:opacity-50 shadow-lg ${
                isCritical ? 'bg-red-600 hover:bg-red-700 shadow-red-900/50' : 'bg-[var(--primary)] hover:bg-[var(--primary-hover)] shadow-[var(--primary-subtle)]'
              }`}
            >
              {isSubmitting ? (
                <><Loader2 size={16} className="animate-spin" /> {record ? 'Saving...' : 'Submitting...'}</>
              ) : (
                <>{record ? 'Update Incident' : 'Log Incident'}</>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
