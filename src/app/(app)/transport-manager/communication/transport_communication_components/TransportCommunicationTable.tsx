"use client";

import React from 'react';
import { Eye, Smartphone, Mail, Bell, Calendar, Users, ShieldAlert, FileText } from 'lucide-react';
import type { TransportCommunication, CommunicationChannel } from '../transport_communication_types/transport_communication.types';
import { COMM_TYPE_CONFIGS, COMM_STATUS_COLORS } from '../transport_communication_constants/transport_communication.constants';

// RESPONSIBILITY: Renders the history/list of sent communications

interface TransportCommunicationTableProps {
  records: TransportCommunication[];
  onView: (record: TransportCommunication) => void;
}

export default function TransportCommunicationTable({ records, onView }: TransportCommunicationTableProps) {
  
  const formatDateTime = (isoString: string | null) => {
    if (!isoString) return '-';
    try {
      const date = new Date(isoString);
      return date.toLocaleString('en-IN', {
        month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
      });
    } catch {
      return isoString;
    }
  };

  const renderChannels = (channels: CommunicationChannel[]) => {
    return (
      <div className="flex items-center gap-1.5">
        {channels.includes('SMS') && <Smartphone size={14} className="text-emerald-500" title="SMS" />}
        {channels.includes('EMAIL') && <Mail size={14} className="text-blue-500" title="Email" />}
        {channels.includes('APP_PUSH') && <Bell size={14} className="text-purple-500" title="App Push" />}
      </div>
    );
  };

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-[rgba(250,204,21,0.05)] border-b border-[var(--border)]">
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider">Message Subject</th>
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider">Target Audience</th>
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider">Channels</th>
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider">Date / Time</th>
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider text-center">Status</th>
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {records.length > 0 ? (
            records.map((record) => {
              const typeConfig = COMM_TYPE_CONFIGS[record.type] || COMM_TYPE_CONFIGS.TRANSPORT_NOTICE;
              const statusConfig = COMM_STATUS_COLORS[record.status] || COMM_STATUS_COLORS.DRAFT;
              
              const isEmergency = record.type === 'EMERGENCY_COMMUNICATION';

              return (
                <tr 
                  key={record.id} 
                  onClick={() => onView(record)}
                  className={`border-b border-[var(--border)] hover:bg-[rgba(250,204,21,0.05)] motion-safe:transition-colors cursor-pointer group ${isEmergency ? 'bg-[rgba(239,68,68,0.02)]' : ''}`}
                >
                  <td className="py-3 px-4 max-w-[250px]">
                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-center gap-2">
                        {isEmergency && <ShieldAlert size={14} className="text-red-500 flex-shrink-0" />}
                        <span className="text-sm font-bold text-[var(--text-primary)] truncate" title={record.title}>
                          {record.title}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span 
                          className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded border whitespace-nowrap"
                          style={{ backgroundColor: typeConfig.bg, color: typeConfig.text, borderColor: typeConfig.text + '30' }}
                        >
                          {typeConfig.label}
                        </span>
                        <span className="text-[10px] text-[var(--text-secondary)] truncate flex-shrink-0">ID: {record.id}</span>
                      </div>
                    </div>
                  </td>
                  
                  <td className="py-3 px-4">
                    <div className="flex flex-col gap-1">
                       <div className="text-xs font-semibold text-[var(--text-primary)] flex items-center gap-1.5 truncate max-w-[150px]" title={record.targetAudience}>
                        <Users size={12} className="text-[var(--primary)] flex-shrink-0"/> {record.targetAudience}
                      </div>
                    </div>
                  </td>

                  <td className="py-3 px-4">
                    {renderChannels(record.channel)}
                  </td>

                  <td className="py-3 px-4">
                    <div className="flex flex-col gap-1">
                      <div className="text-xs text-[var(--text-primary)] flex items-center gap-1.5 whitespace-nowrap">
                        <Calendar size={12} className="text-[var(--text-secondary)]"/> {formatDateTime(record.sentAt)}
                      </div>
                      <span className="text-[10px] text-[var(--text-secondary)] flex items-center gap-1">
                        By: {record.sentBy}
                      </span>
                    </div>
                  </td>

                  <td className="py-3 px-4 text-center">
                    <div className="flex flex-col items-center gap-1">
                      <span 
                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide whitespace-nowrap"
                        style={{ backgroundColor: statusConfig.bg, color: statusConfig.text, border: `1px solid ${statusConfig.text}40` }}
                      >
                        {statusConfig.label}
                      </span>
                      {record.status === 'SENT' && record.deliveryStats && (
                        <span className="text-[9px] text-[var(--text-secondary)] whitespace-nowrap">
                          {record.deliveryStats.delivered}/{record.deliveryStats.totalTargeted} Del
                        </span>
                      )}
                    </div>
                  </td>

                  <td className="py-3 px-4 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 motion-safe:transition-opacity">
                      <button 
                        onClick={(e) => { e.stopPropagation(); onView(record); }}
                        className="p-1.5 rounded-md hover:bg-[var(--bg-input)] text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors"
                        aria-label="View Details"
                        title="View Details"
                      >
                        <Eye size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={6} className="py-12 text-center">
                <div className="flex flex-col items-center justify-center text-[var(--text-secondary)]">
                  <span className="text-4xl mb-3 opacity-20">📫</span>
                  <p className="text-sm">No communications found.</p>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
