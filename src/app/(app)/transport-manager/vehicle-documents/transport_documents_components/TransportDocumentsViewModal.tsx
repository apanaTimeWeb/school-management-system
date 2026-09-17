"use client";

import React, { useEffect } from 'react';
import { X, FileText, Calendar, CheckCircle2, ShieldAlert, AlertTriangle, ExternalLink } from 'lucide-react';
import type { TransportDocument } from '../transport_documents_types/transport_documents.types';
import { ALERT_STATUS_COLORS, VERIFICATION_STATUS_COLORS, DOCUMENT_TYPES } from '../transport_documents_constants/transport_documents.constants';

// RESPONSIBILITY: Renders the read-only view modal for a single document

interface TransportDocumentsViewModalProps {
  document: TransportDocument | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function TransportDocumentsViewModal({ document, isOpen, onClose }: TransportDocumentsViewModalProps) {
  
  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen || !document) return null;

  const alertConfig = ALERT_STATUS_COLORS[document.alertStatus] || ALERT_STATUS_COLORS.OK;
  const verifyConfig = VERIFICATION_STATUS_COLORS[document.verificationStatus] || VERIFICATION_STATUS_COLORS.PENDING;
  
  const getDocTypeLabel = (type: string) => {
    return DOCUMENT_TYPES.find(d => d.value === type)?.label || type;
  };

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm motion-safe:transition-opacity">
      <div 
        className="relative w-full max-w-lg bg-[var(--bg-overlay)] border border-[var(--border)] rounded-xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-[var(--border)] bg-[var(--bg-card)]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[rgba(250,204,21,0.1)] border border-[rgba(250,204,21,0.2)] flex items-center justify-center text-[var(--primary)]">
              <FileText size={20} />
            </div>
            <div>
              <h2 className="text-lg font-bold text-[var(--text-primary)]">{getDocTypeLabel(document.documentType)}</h2>
              <p className="text-xs text-[var(--text-secondary)]">{document.vehicleNumber}</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-input)] rounded-md transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 p-5 space-y-6">
          
          <div className="flex items-center justify-between p-3 rounded-lg bg-[var(--bg-input)] border border-[var(--border)]">
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider mb-1">Status</span>
              <span className="text-sm font-semibold flex items-center gap-1" style={{ color: alertConfig.text }}>
                <ShieldAlert size={16} /> {alertConfig.label}
              </span>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider mb-1">Verification</span>
              <span className="text-sm font-semibold flex items-center gap-1" style={{ color: verifyConfig.text }}>
                <CheckCircle2 size={16} /> {verifyConfig.label}
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex flex-col border-b border-[var(--border)] pb-3">
              <span className="text-[var(--text-secondary)] text-sm mb-1">Document Number</span>
              <span className="font-medium text-[var(--text-primary)] text-base">{document.documentNumber}</span>
            </div>
            
            <div className="grid grid-cols-2 gap-4 border-b border-[var(--border)] pb-3">
              <div className="flex flex-col">
                <span className="text-[var(--text-secondary)] text-sm mb-1">Issue Date</span>
                <span className="font-medium text-[var(--text-primary)] flex items-center gap-1.5">
                  <Calendar size={14} className="text-[var(--text-secondary)]"/> {document.issueDate}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[var(--text-secondary)] text-sm mb-1">Expiry Date</span>
                <span className="font-medium text-[var(--text-primary)] flex items-center gap-1.5">
                  <Calendar size={14} className="text-[var(--text-secondary)]"/> {document.expiryDate}
                </span>
              </div>
            </div>

            <div className="flex flex-col">
              <span className="text-[var(--text-secondary)] text-sm mb-2">Attachment</span>
              {document.attachmentUrl ? (
                <button 
                  onClick={() => window.open(document.attachmentUrl!, '_blank')}
                  className="flex items-center justify-center gap-2 py-2 px-4 rounded-md border border-[var(--border)] bg-[rgba(59,130,246,0.05)] hover:bg-[rgba(59,130,246,0.1)] text-blue-500 font-medium transition-colors w-full"
                >
                  <ExternalLink size={16} /> View Document
                </button>
              ) : (
                <div className="flex items-center justify-center gap-2 py-3 px-4 rounded-md border border-dashed border-[var(--border)] text-[var(--text-secondary)] bg-[var(--bg-input)] text-sm">
                  <AlertTriangle size={16} /> No attachment available
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
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
