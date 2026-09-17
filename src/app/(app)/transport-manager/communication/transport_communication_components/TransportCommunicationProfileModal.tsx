"use client";

import React, { useEffect } from 'react';
import { X, Send, Calendar, Users, Smartphone, Mail, Bell, ShieldAlert, FileText, CheckCircle2, AlertTriangle } from 'lucide-react';
import type { TransportCommunication, CommunicationChannel } from '../transport_communication_types/transport_communication.types';
import { COMM_TYPE_CONFIGS, COMM_STATUS_COLORS } from '../transport_communication_constants/transport_communication.constants';

// RESPONSIBILITY: Renders the detailed view modal for a sent/scheduled communication

interface TransportCommunicationProfileModalProps {
  record: TransportCommunication | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function TransportCommunicationProfileModal({ record, isOpen, onClose }: TransportCommunicationProfileModalProps) {
  
  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen || !record) return null;

  const typeConfig = COMM_TYPE_CONFIGS[record.type] || COMM_TYPE_CONFIGS.TRANSPORT_NOTICE;
  const statusConfig = COMM_STATUS_COLORS[record.status] || COMM_STATUS_COLORS.DRAFT;
  
  const isEmergency = record.type === 'EMERGENCY_COMMUNICATION';

  const formatDateTime = (isoString: string | null) => {
    if (!isoString) return 'Not set';
    try {
      const date = new Date(isoString);
      return date.toLocaleString('en-IN', {
        weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
      });
    } catch {
      return isoString;
    }
  };

  const renderChannelsWithLabels = (channels: CommunicationChannel[]) => {
    return channels.map(ch => {
      if (ch === 'SMS') return <span key={ch} className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 bg-emerald-500/10 px-2 py-1 rounded"><Smartphone size={12}/> SMS</span>;
      if (ch === 'EMAIL') return <span key={ch} className="flex items-center gap-1.5 text-xs font-semibold text-blue-600 bg-blue-500/10 px-2 py-1 rounded"><Mail size={12}/> Email</span>;
      if (ch === 'APP_PUSH') return <span key={ch} className="flex items-center gap-1.5 text-xs font-semibold text-purple-600 bg-purple-500/10 px-2 py-1 rounded"><Bell size={12}/> App Push</span>;
      return null;
    });
  };

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm motion-safe:transition-opacity">
      <div 
        className="relative w-full max-w-3xl bg-[var(--bg-overlay)] border border-[var(--border)] rounded-xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className={`flex items-center justify-between p-5 border-b border-[var(--border)] ${isEmergency ? 'bg-[rgba(239,68,68,0.1)] border-b-red-500/20' : 'bg-[var(--bg-card)]'}`}>
          <div className="flex items-center gap-4">
            <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center flex-shrink-0`} style={{ backgroundColor: typeConfig.bg, borderColor: typeConfig.text + '40', color: typeConfig.text }}>
              {isEmergency ? <ShieldAlert size={24} /> : <Send size={24} />}
            </div>
            <div>
              <h2 className={`text-xl font-bold flex items-center gap-2 ${isEmergency ? 'text-red-500' : 'text-[var(--text-primary)]'}`}>
                {record.title}
              </h2>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs font-bold text-[var(--primary)] tracking-wide">
                  ID: {record.id}
                </span>
                <span className="text-[var(--text-secondary)]">•</span>
                <span 
                  className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded border"
                  style={{ backgroundColor: typeConfig.bg, color: typeConfig.text, borderColor: typeConfig.text + '30' }}
                >
                  {typeConfig.label}
                </span>
              </div>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-input)] rounded-md transition-colors self-start"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6">
          
          {/* Top Banner - Status & Time */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <div className="bg-[var(--bg-input)] border border-[var(--border)] p-4 rounded-lg flex flex-col justify-center">
                <span className="text-[10px] text-[var(--text-secondary)] uppercase font-semibold mb-1 flex items-center gap-1"><Calendar size={12}/> {record.status === 'SCHEDULED' ? 'Scheduled For' : 'Sent On'}</span>
                <span className="font-bold text-[var(--text-primary)]">{formatDateTime(record.sentAt)}</span>
             </div>
             
             <div className="p-4 rounded-lg flex flex-col justify-center border" style={{ backgroundColor: statusConfig.bg, borderColor: statusConfig.text + '30' }}>
                <span className="text-[10px] uppercase font-semibold mb-1" style={{ color: statusConfig.text }}>Delivery Status</span>
                <div className="flex items-center gap-2 font-bold text-lg" style={{ color: statusConfig.text }}>
                  {record.status === 'SENT' && <CheckCircle2 size={20} />}
                  {record.status === 'SCHEDULED' && <Calendar size={20} />}
                  {record.status === 'FAILED' && <AlertTriangle size={20} />}
                  {statusConfig.label}
                </div>
             </div>
          </div>

          {/* Delivery Stats (If Sent) */}
          {record.status === 'SENT' && record.deliveryStats && (
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-[var(--text-primary)] flex items-center gap-2 border-b border-[var(--border)] pb-2">
                <Users size={16} className="text-[var(--primary)]" /> Delivery Performance
              </h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-[var(--bg-card)] border border-[var(--border)] p-3 rounded-lg text-center">
                  <span className="text-2xl font-bold text-[var(--text-primary)] block">{record.deliveryStats.totalTargeted}</span>
                  <span className="text-[10px] text-[var(--text-secondary)] uppercase font-semibold">Total Targeted</span>
                </div>
                <div className="bg-[rgba(16,185,129,0.05)] border border-[rgba(16,185,129,0.2)] p-3 rounded-lg text-center">
                  <span className="text-2xl font-bold text-emerald-500 block">{record.deliveryStats.delivered}</span>
                  <span className="text-[10px] text-[var(--text-secondary)] uppercase font-semibold">Successfully Delivered</span>
                </div>
                <div className={`${record.deliveryStats.failed > 0 ? 'bg-[rgba(239,68,68,0.05)] border-[rgba(239,68,68,0.2)]' : 'bg-[var(--bg-card)] border-[var(--border)]'} border p-3 rounded-lg text-center`}>
                  <span className={`text-2xl font-bold block ${record.deliveryStats.failed > 0 ? 'text-red-500' : 'text-[var(--text-secondary)]'}`}>{record.deliveryStats.failed}</span>
                  <span className="text-[10px] text-[var(--text-secondary)] uppercase font-semibold">Failed Delivery</span>
                </div>
              </div>
            </div>
          )}

          {/* Message Content & Context */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="md:col-span-2 space-y-4">
              <h3 className="text-sm font-semibold text-[var(--text-primary)] flex items-center gap-2 border-b border-[var(--border)] pb-2">
                <FileText size={16} className="text-[var(--primary)]" /> Message Content
              </h3>
              <div className="bg-[var(--bg-input)] border border-[var(--border)] p-4 rounded-lg">
                <p className="font-medium text-[var(--text-primary)] leading-relaxed whitespace-pre-wrap">{record.message}</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-[var(--text-primary)] flex items-center gap-2 border-b border-[var(--border)] pb-2">
                <Send size={16} className="text-[var(--primary)]" /> Communication Details
              </h3>
              
              <div className="flex flex-col gap-4 text-sm">
                <div>
                  <span className="text-[var(--text-secondary)] text-xs mb-1 block">Target Audience</span>
                  <span className="font-bold text-[var(--text-primary)] flex items-center gap-2">
                     <Users size={14} className="text-[var(--primary)]"/> {record.targetAudience}
                  </span>
                </div>
                
                <div>
                  <span className="text-[var(--text-secondary)] text-xs mb-1 block">Sent By</span>
                  <span className="font-semibold text-[var(--text-primary)] bg-[var(--bg-input)] px-2 py-1 rounded border border-[var(--border)]">
                     {record.sentBy}
                  </span>
                </div>

                <div>
                  <span className="text-[var(--text-secondary)] text-xs mb-1.5 block">Channels Used</span>
                  <div className="flex flex-wrap gap-2">
                     {renderChannelsWithLabels(record.channel)}
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-[var(--border)] bg-[var(--bg-page)] flex justify-end">
          <button 
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium rounded-md border border-[var(--border)] text-[var(--text-primary)] hover:bg-[var(--bg-input)] transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
