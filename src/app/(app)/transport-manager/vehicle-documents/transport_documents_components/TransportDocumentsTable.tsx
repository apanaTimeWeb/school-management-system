"use client";

import React from 'react';
import { Edit, Trash2, FileText, Bell, BellOff, ExternalLink } from 'lucide-react';
import type { TransportDocument } from '../transport_documents_types/transport_documents.types';
import { ALERT_STATUS_COLORS, VERIFICATION_STATUS_COLORS, DOCUMENT_TYPES } from '../transport_documents_constants/transport_documents.constants';

// RESPONSIBILITY: Renders the vehicle documents data table

interface TransportDocumentsTableProps {
  documents: TransportDocument[];
  onView: (document: TransportDocument) => void;
  onEdit: (document: TransportDocument) => void;
  onDelete: (documentId: string) => void;
  onToggleReminder: (documentId: string) => void;
}

export default function TransportDocumentsTable({ documents, onView, onEdit, onDelete, onToggleReminder }: TransportDocumentsTableProps) {

  const getDocTypeLabel = (type: string) => {
    return DOCUMENT_TYPES.find(d => d.value === type)?.label || type;
  };

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-[rgba(250,204,21,0.05)] border-b border-[var(--border)]">
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider w-36">Vehicle No.</th>
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider">Document Type</th>
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider">Issue / Expiry Date</th>
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider text-center">Alert Status</th>
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider text-center">Verification</th>
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider text-center">Reminder</th>
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {documents.length > 0 ? (
            documents.map((doc) => {
              const alertConfig = ALERT_STATUS_COLORS[doc.alertStatus] || ALERT_STATUS_COLORS.OK;
              const verifyConfig = VERIFICATION_STATUS_COLORS[doc.verificationStatus] || VERIFICATION_STATUS_COLORS.PENDING;

              return (
                <tr 
                  key={doc.id} 
                  onClick={() => onView(doc)}
                  className="border-b border-[var(--border)] hover:bg-[rgba(250,204,21,0.05)] motion-safe:transition-colors cursor-pointer group"
                >
                  <td className="py-3 px-4">
                    <div className="text-sm font-semibold text-[var(--text-primary)]">{doc.vehicleNumber}</div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="text-sm text-[var(--text-primary)] font-medium">{getDocTypeLabel(doc.documentType)}</div>
                    <div className="text-xs text-[var(--text-secondary)] mt-0.5">{doc.documentNumber}</div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="text-sm text-[var(--text-primary)]">Exp: {doc.expiryDate}</div>
                    <div className="text-xs text-[var(--text-secondary)] mt-0.5">Iss: {doc.issueDate}</div>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <span 
                      className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide"
                      style={{ backgroundColor: alertConfig.bg, color: alertConfig.text }}
                    >
                      {alertConfig.label}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <span 
                      className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide"
                      style={{ backgroundColor: verifyConfig.bg, color: verifyConfig.text }}
                    >
                      {verifyConfig.label}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <button 
                      onClick={(e) => { e.stopPropagation(); onToggleReminder(doc.id); }}
                      className={`p-1.5 rounded-full transition-colors ${doc.remindersEnabled ? 'text-[var(--primary)] bg-[rgba(250,204,21,0.1)]' : 'text-[var(--text-secondary)] bg-[var(--bg-input)] hover:text-white'}`}
                      title={doc.remindersEnabled ? "Reminders On" : "Reminders Off"}
                    >
                      {doc.remindersEnabled ? <Bell size={16} /> : <BellOff size={16} />}
                    </button>
                  </td>
                  <td className="py-3 px-4 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 motion-safe:transition-opacity">
                      {doc.attachmentUrl && (
                        <button 
                          onClick={(e) => { e.stopPropagation(); window.open(doc.attachmentUrl!, '_blank'); }}
                          className="p-1.5 rounded-md hover:bg-[var(--bg-input)] text-[var(--text-secondary)] hover:text-blue-400 transition-colors"
                          aria-label="View Attachment"
                          title="View Attachment"
                        >
                          <ExternalLink size={16} />
                        </button>
                      )}
                      <button 
                        onClick={(e) => { e.stopPropagation(); onEdit(doc); }}
                        className="p-1.5 rounded-md hover:bg-[var(--bg-input)] text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors"
                        aria-label="Edit document"
                        title="Edit"
                      >
                        <Edit size={16} />
                      </button>
                      <button 
                        onClick={(e) => { e.stopPropagation(); onDelete(doc.id); }}
                        className="p-1.5 rounded-md hover:bg-[var(--bg-input)] text-[var(--text-secondary)] hover:text-red-500 transition-colors"
                        aria-label="Delete document"
                        title="Delete"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={7} className="py-12 text-center">
                <div className="flex flex-col items-center justify-center text-[var(--text-secondary)]">
                  <span className="text-4xl mb-3 opacity-20">📄</span>
                  <p className="text-sm">No documents found matching the criteria.</p>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
