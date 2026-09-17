"use client";

import React, { useState, useEffect } from 'react';
import { X, Loader2, Send, Users, Smartphone, Mail, Bell, Clock } from 'lucide-react';
import type { TransportCommunicationFormData, CommunicationType, CommunicationChannel } from '../transport_communication_types/transport_communication.types';

// RESPONSIBILITY: Renders the modal for composing a new notice/announcement

interface TransportCommunicationComposerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSend: (data: TransportCommunicationFormData) => void;
}

export default function TransportCommunicationComposerModal({ isOpen, onClose, onSend }: TransportCommunicationComposerModalProps) {
  
  const [formData, setFormData] = useState<TransportCommunicationFormData>({
    type: 'TRANSPORT_NOTICE',
    title: '',
    message: '',
    targetAudience: 'All Parents',
    channel: ['APP_PUSH'],
    scheduleForLater: false,
    scheduledTime: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Reset form when opened
  useEffect(() => {
    if (isOpen) {
      setFormData({
        type: 'TRANSPORT_NOTICE',
        title: '',
        message: '',
        targetAudience: 'All Parents',
        channel: ['APP_PUSH'],
        scheduleForLater: false,
        scheduledTime: ''
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
    if (formData.channel.length === 0) {
      alert("Please select at least one communication channel.");
      return;
    }
    if (formData.scheduleForLater && !formData.scheduledTime) {
      alert("Please select a scheduled time.");
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
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
       const checked = (e.target as HTMLInputElement).checked;
       setFormData(prev => ({ ...prev, [name]: checked }));
       return;
    }

    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const toggleChannel = (channelItem: CommunicationChannel) => {
    setFormData(prev => {
      let newChannel = [...prev.channel];
      if (newChannel.includes(channelItem)) {
        newChannel = newChannel.filter(c => c !== channelItem);
      } else {
        newChannel.push(channelItem);
      }
      return { ...prev, channel: newChannel };
    });
  };

  const isEmergency = formData.type === 'EMERGENCY_COMMUNICATION';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm motion-safe:transition-opacity">
      <div 
        className="relative w-full max-w-2xl bg-[var(--bg-overlay)] border border-[var(--border)] rounded-xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`flex items-center justify-between p-5 border-b border-[var(--border)] ${isEmergency ? 'bg-[rgba(239,68,68,0.1)] border-b-red-500/20' : 'bg-[var(--bg-card)]'}`}>
          <h2 className={`text-lg font-bold flex items-center gap-2 ${isEmergency ? 'text-red-500' : 'text-[var(--text-primary)]'}`}>
            <Send size={20} className={isEmergency ? 'text-red-500' : 'text-[var(--primary)]'} /> 
            Compose Message
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
               <div className="flex flex-col gap-1.5">
                 <label className="text-sm font-semibold text-[var(--text-secondary)]">Message Type <span className="text-red-500">*</span></label>
                 <select
                   required
                   name="type"
                   value={formData.type}
                   onChange={handleChange}
                   className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm font-bold text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
                   style={{ color: isEmergency ? '#EF4444' : 'inherit' }}
                 >
                   <option value="TRANSPORT_NOTICE">General Notice</option>
                   <option value="PARENT_NOTIFICATION">Parent Notification</option>
                   <option value="STAFF_COMMUNICATION">Driver / Staff Comms</option>
                   <option value="ROUTE_ANNOUNCEMENT">Route Announcement</option>
                   <option value="EMERGENCY_COMMUNICATION">Emergency Alert</option>
                 </select>
               </div>

               <div className="flex flex-col gap-1.5">
                 <label className="text-sm font-semibold text-[var(--text-secondary)]">Target Audience <span className="text-red-500">*</span></label>
                 <select
                   required
                   name="targetAudience"
                   value={formData.targetAudience}
                   onChange={handleChange}
                   className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
                 >
                   <option value="All Parents">All Parents</option>
                   <option value="Route R-01 Parents">Route R-01 Parents</option>
                   <option value="All Drivers & Conductors">All Drivers & Conductors</option>
                   <option value="Specific Vehicle Users">Specific Vehicle Users (Dynamic)</option>
                   <option value="Defaulters">Fee Defaulters</option>
                 </select>
               </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[var(--text-secondary)]">Channels <span className="text-red-500">*</span></label>
              <div className="flex flex-wrap gap-3">
                 <label className={`flex items-center gap-2 px-3 py-2 rounded-md border cursor-pointer transition-colors ${formData.channel.includes('APP_PUSH') ? 'bg-[rgba(168,85,247,0.1)] border-purple-500/50' : 'bg-[var(--bg-input)] border-[var(--border)]'}`}>
                   <input type="checkbox" className="hidden" checked={formData.channel.includes('APP_PUSH')} onChange={() => toggleChannel('APP_PUSH')} />
                   <div className={`w-4 h-4 rounded border flex items-center justify-center ${formData.channel.includes('APP_PUSH') ? 'bg-purple-500 border-purple-500' : 'bg-transparent border-[var(--text-secondary)]'}`}>
                      {formData.channel.includes('APP_PUSH') && <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                   </div>
                   <Bell size={14} className={formData.channel.includes('APP_PUSH') ? 'text-purple-500' : 'text-[var(--text-secondary)]'} />
                   <span className={`text-sm font-semibold ${formData.channel.includes('APP_PUSH') ? 'text-purple-600' : 'text-[var(--text-secondary)]'}`}>App Push</span>
                 </label>

                 <label className={`flex items-center gap-2 px-3 py-2 rounded-md border cursor-pointer transition-colors ${formData.channel.includes('SMS') ? 'bg-[rgba(16,185,129,0.1)] border-emerald-500/50' : 'bg-[var(--bg-input)] border-[var(--border)]'}`}>
                   <input type="checkbox" className="hidden" checked={formData.channel.includes('SMS')} onChange={() => toggleChannel('SMS')} />
                   <div className={`w-4 h-4 rounded border flex items-center justify-center ${formData.channel.includes('SMS') ? 'bg-emerald-500 border-emerald-500' : 'bg-transparent border-[var(--text-secondary)]'}`}>
                      {formData.channel.includes('SMS') && <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                   </div>
                   <Smartphone size={14} className={formData.channel.includes('SMS') ? 'text-emerald-500' : 'text-[var(--text-secondary)]'} />
                   <span className={`text-sm font-semibold ${formData.channel.includes('SMS') ? 'text-emerald-600' : 'text-[var(--text-secondary)]'}`}>SMS</span>
                 </label>

                 <label className={`flex items-center gap-2 px-3 py-2 rounded-md border cursor-pointer transition-colors ${formData.channel.includes('EMAIL') ? 'bg-[rgba(59,130,246,0.1)] border-blue-500/50' : 'bg-[var(--bg-input)] border-[var(--border)]'}`}>
                   <input type="checkbox" className="hidden" checked={formData.channel.includes('EMAIL')} onChange={() => toggleChannel('EMAIL')} />
                   <div className={`w-4 h-4 rounded border flex items-center justify-center ${formData.channel.includes('EMAIL') ? 'bg-blue-500 border-blue-500' : 'bg-transparent border-[var(--text-secondary)]'}`}>
                      {formData.channel.includes('EMAIL') && <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                   </div>
                   <Mail size={14} className={formData.channel.includes('EMAIL') ? 'text-blue-500' : 'text-[var(--text-secondary)]'} />
                   <span className={`text-sm font-semibold ${formData.channel.includes('EMAIL') ? 'text-blue-600' : 'text-[var(--text-secondary)]'}`}>Email</span>
                 </label>
              </div>
            </div>

            <div className="flex flex-col gap-1.5 pt-2 border-t border-[var(--border)]">
              <label className="text-sm font-semibold text-[var(--text-secondary)]">Message Title / Subject <span className="text-red-500">*</span></label>
              <input
                required
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Brief subject of the communication"
                className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm font-bold text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[var(--text-secondary)]">Message Body <span className="text-red-500">*</span></label>
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
                {formData.message.length} characters
              </span>
            </div>
            
            {/* Scheduling */}
            <div className="pt-2 border-t border-[var(--border)]">
               <label className="flex items-center gap-3 cursor-pointer p-3 bg-[var(--bg-input)] rounded-lg border border-[var(--border)] hover:border-[var(--primary)] transition-colors w-max">
                 <input 
                   type="checkbox" 
                   name="scheduleForLater" 
                   checked={formData.scheduleForLater} 
                   onChange={handleChange}
                   className="w-4 h-4 rounded text-[var(--primary)] focus:ring-[var(--primary)] bg-[var(--bg-card)] border-[var(--border)]"
                 />
                 <div className="flex items-center gap-2">
                   <Clock size={16} className="text-[var(--text-secondary)]" />
                   <span className="text-sm font-semibold text-[var(--text-primary)]">Schedule for Later</span>
                 </div>
               </label>
               
               {formData.scheduleForLater && (
                 <div className="mt-3 ml-2 flex flex-col gap-1.5 animate-in fade-in slide-in-from-top-2">
                   <label className="text-sm font-semibold text-[var(--text-secondary)]">Send On <span className="text-red-500">*</span></label>
                   <input
                     type="datetime-local"
                     required
                     name="scheduledTime"
                     value={formData.scheduledTime}
                     onChange={handleChange}
                     className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors [color-scheme:dark] max-w-xs"
                   />
                 </div>
               )}
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
              className={`min-w-[140px] flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-md text-white transition-colors disabled:opacity-50 shadow-lg ${
                isEmergency ? 'bg-red-600 hover:bg-red-700 shadow-red-900/50' : 'bg-[var(--primary)] hover:bg-[var(--primary-hover)] shadow-[var(--primary-subtle)]'
              }`}
            >
              {isSubmitting ? (
                <><Loader2 size={16} className="animate-spin" /> {formData.scheduleForLater ? 'Scheduling...' : 'Sending...'}</>
              ) : (
                <><Send size={16} /> {formData.scheduleForLater ? 'Schedule' : 'Send Now'}</>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
