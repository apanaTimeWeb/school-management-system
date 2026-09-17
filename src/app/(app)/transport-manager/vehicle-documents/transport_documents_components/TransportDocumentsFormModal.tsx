"use client";

import React, { useState, useEffect } from 'react';
import { X, Loader2, UploadCloud } from 'lucide-react';
import type { TransportDocument, TransportDocumentFormData, TransportDocumentType } from '../transport_documents_types/transport_documents.types';
import { DOCUMENT_TYPES } from '../transport_documents_constants/transport_documents.constants';

// RESPONSIBILITY: Renders the form modal for adding or editing a vehicle document

interface TransportDocumentsFormModalProps {
  document: TransportDocument | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: TransportDocumentFormData) => void;
}

export default function TransportDocumentsFormModal({ document, isOpen, onClose, onSave }: TransportDocumentsFormModalProps) {
  
  const [formData, setFormData] = useState<TransportDocumentFormData>({
    vehicleId: '',
    documentType: 'REGISTRATION',
    documentNumber: '',
    issueDate: '',
    expiryDate: '',
    attachmentFile: null,
    remindersEnabled: true
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (document) {
      setFormData({
        vehicleId: document.vehicleId,
        documentType: document.documentType,
        documentNumber: document.documentNumber,
        issueDate: document.issueDate,
        expiryDate: document.expiryDate,
        attachmentFile: null, // File inputs can't be pre-filled
        remindersEnabled: document.remindersEnabled
      });
    } else {
      setFormData({
        vehicleId: '',
        documentType: 'REGISTRATION',
        documentNumber: '',
        issueDate: '',
        expiryDate: '',
        attachmentFile: null,
        remindersEnabled: true
      });
    }
  }, [document, isOpen]);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else if (type === 'file') {
      const files = (e.target as HTMLInputElement).files;
      if (files && files.length > 0) {
        setFormData(prev => ({ ...prev, attachmentFile: files[0] }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm motion-safe:transition-opacity">
      <div 
        className="relative w-full max-w-2xl bg-[var(--bg-overlay)] border border-[var(--border)] rounded-xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-5 border-b border-[var(--border)] bg-[var(--bg-card)]">
          <h2 className="text-lg font-bold text-[var(--text-primary)]">
            {document ? 'Edit Document' : 'Upload New Document'}
          </h2>
          <button 
            onClick={onClose}
            className="p-1.5 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-input)] rounded-md transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto">
          <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
            
            {/* Vehicle ID (In real app, this might be a searchable dropdown) */}
            <div className="flex flex-col gap-1.5 sm:col-span-2">
              <label className="text-sm font-semibold text-[var(--text-secondary)]">Select Vehicle <span className="text-red-500">*</span></label>
              <select
                required
                name="vehicleId"
                value={formData.vehicleId}
                onChange={handleChange}
                className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
              >
                <option value="" disabled>Select a vehicle...</option>
                <option value="VEH-001">MH-12-AB-1234 (Bus)</option>
                <option value="VEH-002">MH-12-CD-5678 (Bus)</option>
                <option value="VEH-003">MH-12-EF-9012 (Van)</option>
              </select>
            </div>

            {/* Document Type */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[var(--text-secondary)]">Document Type <span className="text-red-500">*</span></label>
              <select
                required
                name="documentType"
                value={formData.documentType}
                onChange={handleChange}
                className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
              >
                {DOCUMENT_TYPES.map(type => (
                  <option key={type.value} value={type.value}>{type.label}</option>
                ))}
              </select>
            </div>

            {/* Document Number */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[var(--text-secondary)]">Document Number <span className="text-red-500">*</span></label>
              <input
                required
                name="documentNumber"
                value={formData.documentNumber}
                onChange={handleChange}
                placeholder="e.g. INS-2023-9988"
                className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
              />
            </div>

            {/* Issue Date */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[var(--text-secondary)]">Issue Date <span className="text-red-500">*</span></label>
              <input
                required
                type="date"
                name="issueDate"
                value={formData.issueDate}
                onChange={handleChange}
                className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors [color-scheme:dark]"
              />
            </div>

            {/* Expiry Date */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[var(--text-secondary)]">Expiry Date <span className="text-red-500">*</span></label>
              <input
                required
                type="date"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleChange}
                className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors [color-scheme:dark]"
              />
            </div>

            {/* Enable Reminders */}
            <div className="flex flex-col gap-1.5 sm:col-span-2 pt-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="remindersEnabled"
                  checked={formData.remindersEnabled}
                  onChange={handleChange}
                  className="w-4 h-4 rounded bg-[var(--bg-input)] border-[var(--border)] text-[var(--primary)] focus:ring-[var(--primary)] focus:ring-offset-[var(--bg-page)]"
                />
                <span className="text-sm font-semibold text-[var(--text-primary)]">Enable Automatic Expiry Alerts</span>
              </label>
              <p className="text-xs text-[var(--text-secondary)] ml-6">
                System will notify at 90, 60, 30, and 7 days before expiry.
              </p>
            </div>

            {/* Attachment */}
            <div className="flex flex-col gap-1.5 sm:col-span-2 pt-2">
              <label className="text-sm font-semibold text-[var(--text-secondary)]">Upload Document (PDF, JPG, PNG)</label>
              <div className="relative border-2 border-dashed border-[var(--border)] rounded-lg p-6 flex flex-col items-center justify-center bg-[rgba(250,204,21,0.02)] hover:bg-[rgba(250,204,21,0.05)] transition-colors">
                <input
                  type="file"
                  name="attachmentFile"
                  onChange={handleChange}
                  accept=".pdf,.jpg,.jpeg,.png"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <UploadCloud size={32} className="text-[var(--text-secondary)] mb-2" />
                <p className="text-sm font-medium text-[var(--text-primary)]">
                  {formData.attachmentFile ? formData.attachmentFile.name : 'Click or drag file to upload'}
                </p>
                <p className="text-xs text-[var(--text-secondary)] mt-1">Max file size: 5MB</p>
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
                <><Loader2 size={16} className="animate-spin" /> {document ? 'Saving...' : 'Uploading...'}</>
              ) : (
                <>{document ? 'Save Changes' : 'Upload Document'}</>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
