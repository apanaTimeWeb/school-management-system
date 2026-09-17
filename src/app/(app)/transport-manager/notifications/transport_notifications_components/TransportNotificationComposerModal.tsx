"use client";

import React, { useState, useEffect } from 'react';
import { X, Loader2, Send, Users, BellRing } from 'lucide-react';
import type { TransportNotificationFormData, NotificationCategory, NotificationAudience } from '../transport_notifications_types/transport_notifications.types';

// RESPONSIBILITY: Renders the modal for composing and broadcasting a new notification

interface TransportNotificationComposerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSend: (data: TransportNotificationFormData) => void;
}

export default function TransportNotificationComposerModal({ isOpen, onClose, onSend }: TransportNotificationComposerModalProps) {
  
  const [formData, setFormData] = useState<TransportNotificationFormData>({
    category: 'CUSTOM',
    title: '',
    message: '',
    audience: []
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Reset form when opened
  useEffect(() => {
    if (isOpen) {
      setFormData({
        category: 'CUSTOM',
        title: '',
        message: '',
        audience: []
      });
    }
  }, [isOpen]);

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
    if (formData.audience.length === 0) {
      alert("Please select at least one audience group.");
      return;
    }
    
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      onSend(formData);
      setIsSubmitting(false);
      onClose();
    }, 600);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const toggleAudience = (audienceItem: NotificationAudience) => {
    setFormData(prev => {
      if (audienceItem === 'ALL') {
         return { ...prev, audience: prev.audience.includes('ALL') ? [] : ['ALL'] };
      }
      
      let newAudience = [...prev.audience];
      if (newAudience.includes('ALL')) newAudience = []; // Remove ALL if specific is selected
      
      if (newAudience.includes(audienceItem)) {
        newAudience = newAudience.filter(a => a !== audienceItem);
      } else {
        newAudience.push(audienceItem);
      }
      return { ...prev, audience: newAudience };
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm motion-safe:transition-opacity">
      <div 
        className="relative w-full max-w-2xl bg-[var(--bg-overlay)] border border-[var(--border)] rounded-xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-5 border-b border-[var(--border)] bg-[var(--bg-card)]">
          <h2 className="text-lg font-bold text-[var(--text-primary)] flex items-center gap-2">
            <BellRing size={20} className="text-[var(--primary)]" /> Compose Broadcast
          </h2>
          <button 
            onClick={onClose}
            className="p-1.5 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-input)] rounded-md transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto">
          <div className="p-6 space-y-5">
            
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[var(--text-secondary)]">Alert Category <span className="text-red-500">*</span></label>
              <select
                required
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
              >
                <option value="CUSTOM">General Announcement</option>
                <option value="BUS_DELAYED">Bus Delayed</option>
                <option value="ROUTE_CHANGED">Route Changed / Diversion</option>
                <option value="VEHICLE_CHANGED">Vehicle Reassignment</option>
                <option value="DRIVER_CHANGED">Driver Reassignment</option>
                <option value="EMERGENCY_ALERT">Emergency Alert</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[var(--text-secondary)]">Audience <span className="text-red-500">*</span></label>
              <div className="flex flex-wrap gap-2">
                 {(['PARENTS', 'DRIVERS', 'STAFF', 'ALL'] as NotificationAudience[]).map(aud => (
                   <button
                     key={aud}
                     type="button"
                     onClick={() => toggleAudience(aud)}
                     className={`px-3 py-1.5 rounded border text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5 ${
                       formData.audience.includes(aud) 
                       ? 'bg-[var(--primary)] border-[var(--primary)] text-white shadow-md' 
                       : 'bg-[var(--bg-input)] border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                     }`}
                   >
                     <Users size={12} /> {aud}
                   </button>
                 ))}
              </div>
            </div>

            <div className="flex flex-col gap-1.5 pt-2 border-t border-[var(--border)]">
              <label className="text-sm font-semibold text-[var(--text-secondary)]">Message Title <span className="text-red-500">*</span></label>
              <input
                required
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Brief subject of the alert"
                className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm font-bold text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[var(--text-secondary)]">Detailed Message <span className="text-red-500">*</span></label>
              <textarea
                required
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message here..."
                rows={5}
                className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors resize-none"
              />
              <span className="text-[10px] text-[var(--text-secondary)] text-right">
                {formData.message.length} characters (Recommended SMS length: &lt;160)
              </span>
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
              className="min-w-[140px] flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-md bg-[var(--primary)] text-white hover:bg-[var(--primary-hover)] transition-colors disabled:opacity-50 shadow-lg shadow-[var(--primary-subtle)]"
            >
              {isSubmitting ? (
                <><Loader2 size={16} className="animate-spin" /> Sending...</>
              ) : (
                <><Send size={16} /> Send Broadcast</>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
