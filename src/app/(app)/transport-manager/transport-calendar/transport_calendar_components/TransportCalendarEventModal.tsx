"use client";

import React, { useState, useEffect } from 'react';
import { X, Loader2, Calendar, Map, Bus, AlignLeft } from 'lucide-react';
import type { TransportCalendarEvent, TransportCalendarEventFormData } from '../transport_calendar_types/transport_calendar.types';
import { CALENDAR_TYPE_CONFIGS } from '../transport_calendar_constants/transport_calendar.constants';

// RESPONSIBILITY: Renders the modal for adding/editing a calendar event

interface TransportCalendarEventModalProps {
  record: TransportCalendarEvent | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: TransportCalendarEventFormData) => void;
}

export default function TransportCalendarEventModal({ record, isOpen, onClose, onSave }: TransportCalendarEventModalProps) {
  
  const [formData, setFormData] = useState<TransportCalendarEventFormData>({
    type: 'HOLIDAY',
    title: '',
    startDate: '',
    endDate: '',
    startTime: '',
    endTime: '',
    description: '',
    affectedRoutes: 'ALL',
    affectedVehicles: 'ALL'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (record) {
      setFormData({
        type: record.type,
        title: record.title,
        startDate: record.startDate,
        endDate: record.endDate,
        startTime: record.startTime || '',
        endTime: record.endTime || '',
        description: record.description,
        affectedRoutes: record.affectedRoutes.join(', '),
        affectedVehicles: record.affectedVehicles.join(', ')
      });
    } else {
      const today = new Date().toISOString().split('T')[0];
      setFormData({
        type: 'HOLIDAY',
        title: '',
        startDate: today,
        endDate: today,
        startTime: '',
        endTime: '',
        description: '',
        affectedRoutes: 'ALL',
        affectedVehicles: 'ALL'
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
    if (new Date(formData.endDate) < new Date(formData.startDate)) {
      alert("End Date cannot be before Start Date.");
      return;
    }
    
    setIsSubmitting(true);
    setTimeout(() => {
      onSave(formData);
      setIsSubmitting(false);
      onClose();
    }, 600);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const isNoTransport = formData.type === 'HOLIDAY' || formData.type === 'NO_TRANSPORT_DAY';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm motion-safe:transition-opacity">
      <div 
        className="relative w-full max-w-2xl bg-[var(--bg-overlay)] border border-[var(--border)] rounded-xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-5 border-b border-[var(--border)] bg-[var(--bg-card)]">
          <h2 className="text-lg font-bold text-[var(--text-primary)] flex items-center gap-2">
            <Calendar size={20} className="text-[var(--primary)]" /> 
            {record ? 'Edit Schedule/Event' : 'Add Calendar Event'}
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
            
            {/* Type & Title */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5 md:col-span-2">
                <label className="text-sm font-semibold text-[var(--text-secondary)]">Event Title <span className="text-red-500">*</span></label>
                <input
                  required
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="e.g. Diwali Break, Annual Sports Day"
                  className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm font-bold text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-[var(--text-secondary)]">Event Type <span className="text-red-500">*</span></label>
                <select
                  required
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
                >
                  <option value="HOLIDAY">Holiday</option>
                  <option value="NO_TRANSPORT_DAY">No-Transport Day (School Open)</option>
                  <option value="SPECIAL_TRIP">Special / Excursion Trip</option>
                  <option value="EXAM_TRANSPORT">Exam Transport Schedule</option>
                  <option value="EVENT_TRANSPORT">Event Transport</option>
                  <option value="ROUTE_CHANGE">Temporary Route Change</option>
                  <option value="VEHICLE_SCHEDULE">Vehicle Rescheduling</option>
                </select>
              </div>
            </div>

            {/* Date & Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 p-4 bg-[var(--bg-input)] border border-[var(--border)] rounded-lg">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-[var(--text-secondary)] uppercase">Start Date <span className="text-red-500">*</span></label>
                <input
                  type="date"
                  required
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  className="bg-[var(--bg-card)] border border-[var(--border)] rounded-md px-3 py-1.5 text-sm font-medium text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors [color-scheme:dark]"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-[var(--text-secondary)] uppercase">End Date <span className="text-red-500">*</span></label>
                <input
                  type="date"
                  required
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleChange}
                  min={formData.startDate} // basic HTML validation
                  className="bg-[var(--bg-card)] border border-[var(--border)] rounded-md px-3 py-1.5 text-sm font-medium text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors [color-scheme:dark]"
                />
              </div>
              
              {!isNoTransport && (
                <>
                  <div className="flex flex-col gap-1.5 animate-in fade-in slide-in-from-top-2">
                    <label className="text-xs font-semibold text-[var(--text-secondary)] uppercase">Specific Start Time (Optional)</label>
                    <input
                      type="time"
                      name="startTime"
                      value={formData.startTime}
                      onChange={handleChange}
                      className="bg-[var(--bg-card)] border border-[var(--border)] rounded-md px-3 py-1.5 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors [color-scheme:dark]"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5 animate-in fade-in slide-in-from-top-2">
                    <label className="text-xs font-semibold text-[var(--text-secondary)] uppercase">Specific End Time (Optional)</label>
                    <input
                      type="time"
                      name="endTime"
                      value={formData.endTime}
                      onChange={handleChange}
                      className="bg-[var(--bg-card)] border border-[var(--border)] rounded-md px-3 py-1.5 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors [color-scheme:dark]"
                    />
                  </div>
                </>
              )}
            </div>

            {/* Impact */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-[var(--text-secondary)] flex items-center gap-1.5"><Map size={14} className="text-emerald-500"/> Affected Routes <span className="text-red-500">*</span></label>
                <input
                  required
                  name="affectedRoutes"
                  value={formData.affectedRoutes}
                  onChange={handleChange}
                  placeholder="e.g. ALL, R-01, R-02"
                  className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-[var(--text-secondary)] flex items-center gap-1.5"><Bus size={14} className="text-blue-500"/> Affected Vehicles <span className="text-red-500">*</span></label>
                <input
                  required
                  name="affectedVehicles"
                  value={formData.affectedVehicles}
                  onChange={handleChange}
                  placeholder="e.g. ALL, VEH-001"
                  className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
                />
              </div>
            </div>

            {/* Description */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[var(--text-secondary)] flex items-center gap-1.5"><AlignLeft size={14}/> Event Details / Reason <span className="text-red-500">*</span></label>
              <textarea
                required
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Provide context for this calendar change..."
                rows={4}
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
                <><Loader2 size={16} className="animate-spin" /> Saving...</>
              ) : (
                <>{record ? 'Update Event' : 'Add Event'}</>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
