"use client";

import React from 'react';
import { Eye, Clock, User, Monitor, Hash } from 'lucide-react';
import type { AuditRecord } from '../audit_history_types/audit_history.types';
import { ENTITY_TYPE_CONFIGS, ACTION_TYPE_CONFIGS } from '../audit_history_constants/audit_history.constants';

// RESPONSIBILITY: Renders the table of audit logs

interface AuditHistoryTableProps {
  records: AuditRecord[];
  onView: (record: AuditRecord) => void;
}

export default function AuditHistoryTable({ records, onView }: AuditHistoryTableProps) {
  
  const formatTime = (isoDate: string) => {
    const d = new Date(isoDate);
    const timeStr = d.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
    const dateStr = d.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
    return { timeStr, dateStr };
  };

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-[rgba(250,204,21,0.05)] border-b border-[var(--border)]">
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider">Timestamp</th>
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider">Entity & Action</th>
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider">Description</th>
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider">Performed By</th>
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider text-right">Details</th>
          </tr>
        </thead>
        <tbody>
          {records.length > 0 ? (
            records.map((record) => {
              const entityConfig = ENTITY_TYPE_CONFIGS[record.entityType] || ENTITY_TYPE_CONFIGS.MANUAL_ADJUSTMENT;
              const actionConfig = ACTION_TYPE_CONFIGS[record.actionType] || ACTION_TYPE_CONFIGS.UPDATE;
              const { timeStr, dateStr } = formatTime(record.timestamp);

              return (
                <tr 
                  key={record.id} 
                  onClick={() => onView(record)}
                  className="border-b border-[var(--border)] hover:bg-[rgba(250,204,21,0.05)] motion-safe:transition-colors cursor-pointer group"
                >
                  <td className="py-3 px-4 whitespace-nowrap">
                    <div className="flex flex-col gap-1">
                      <div className="text-sm font-bold text-[var(--text-primary)] flex items-center gap-1.5">
                        <Clock size={12} className="text-[var(--text-secondary)]" /> {timeStr}
                      </div>
                      <div className="text-[10px] text-[var(--text-secondary)]">{dateStr}</div>
                    </div>
                  </td>
                  
                  <td className="py-3 px-4 max-w-[200px]">
                    <div className="flex flex-col gap-1.5">
                       <div className="flex flex-wrap gap-2 items-center">
                         <span 
                           className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded border whitespace-nowrap"
                           style={{ backgroundColor: actionConfig.bg, color: actionConfig.color, borderColor: actionConfig.color + '40' }}
                         >
                           {actionConfig.label}
                         </span>
                         <span 
                           className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded border whitespace-nowrap"
                           style={{ backgroundColor: entityConfig.bg, color: entityConfig.color, borderColor: entityConfig.color + '40' }}
                         >
                           {entityConfig.label}
                         </span>
                       </div>
                       <div className="text-xs font-semibold text-[var(--text-primary)] truncate" title={record.entityName}>
                         <span className="text-[var(--text-secondary)] font-normal text-[10px]">Target:</span> {record.entityName}
                       </div>
                    </div>
                  </td>

                  <td className="py-3 px-4 max-w-[300px]">
                    <div className="text-xs text-[var(--text-primary)] leading-snug line-clamp-2" title={record.description}>
                      {record.description}
                    </div>
                    {record.oldValues && record.newValues && (
                       <div className="text-[9px] text-[var(--primary)] font-medium mt-1">Data payload modified</div>
                    )}
                  </td>

                  <td className="py-3 px-4">
                    <div className="flex flex-col gap-1">
                      <div className="text-xs font-bold text-[var(--text-primary)] flex items-center gap-1.5">
                         <User size={12} className="text-[var(--text-secondary)]" /> {record.performedByUserName}
                      </div>
                      <div className="text-[9px] text-[var(--text-secondary)] flex flex-wrap gap-2 items-center mt-0.5">
                         <span className="flex items-center gap-1 bg-[var(--bg-input)] px-1.5 py-0.5 rounded border border-[var(--border)]"><Hash size={8} /> {record.performedByUserId}</span>
                         <span className="flex items-center gap-1"><Monitor size={8} /> {record.ipAddress}</span>
                      </div>
                    </div>
                  </td>

                  <td className="py-3 px-4 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 motion-safe:transition-opacity">
                      <button 
                        onClick={(e) => { e.stopPropagation(); onView(record); }}
                        className="flex items-center gap-1 px-2 py-1.5 rounded-md bg-[var(--bg-input)] hover:bg-[var(--primary)] text-[var(--text-secondary)] hover:text-white transition-colors"
                        title="View Diff / Payload"
                      >
                        <Eye size={14} />
                        <span className="text-[10px] font-bold uppercase tracking-wider">Inspect</span>
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={5} className="py-12 text-center">
                <div className="flex flex-col items-center justify-center text-[var(--text-secondary)]">
                  <span className="text-4xl mb-3 opacity-20">🗄️</span>
                  <p className="text-sm">No audit logs found.</p>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
