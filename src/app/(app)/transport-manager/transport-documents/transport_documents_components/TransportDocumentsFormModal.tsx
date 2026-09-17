"use client";

import React, { useState, useEffect } from 'react';
import { X, Loader2, FileUp, ShieldCheck, Link2 } from 'lucide-react';
import type { TransportDocumentRecord, TransportDocumentFormData, DocumentCategory, DocumentType } from '../transport_documents_types/transport_documents.types';

// RESPONSIBILITY: Renders the modal for uploading/logging a new transport document

interface TransportDocumentsFormModalProps {
  record: TransportDocumentRecord | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: TransportDocumentFormData) => void;
}

export default function TransportDocumentsFormModal({ record, isOpen, onClose, onSave }: TransportDocumentsFormModalProps) {
  
  const [formData, setFormData] = useState<TransportDocumentFormData>({
    category: 'VEHICLE_DOCUMENT',
    documentType: 'INSURANCE',
    title: '',
    referenceId: '',
    associatedEntity: '',
    issueDate: '',
    expiryDate: '',
    hasExpiry: true
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (record) {
      setFormData({
        category: record.category,
        documentType: record.documentType,
        title: record.title,
        referenceId: record.referenceId,
        associatedEntity: record.associatedEntity,
        issueDate: record.issueDate,
        expiryDate: record.expiryDate || '',
        hasExpiry: record.expiryDate !== null
      });
    } else {
      const today = new Date().toISOString().split('T')[0];
      setFormData({
        category: 'VEHICLE_DOCUMENT',
        documentType: 'INSURANCE',
        title: '',
        referenceId: '',
        associatedEntity: '',
        issueDate: today,
        expiryDate: '',
        hasExpiry: true
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
    if (formData.hasExpiry && !formData.expiryDate) {
      alert("Please provide an expiry date.");
      return;
    }
    if (formData.hasExpiry && new Date(formData.expiryDate) < new Date(formData.issueDate)) {
      alert("Expiry date cannot be before issue date.");
      return;
    }
    
    setIsSubmitting(true);
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
       return;
    }

    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm motion-safe:transition-opacity">
      <div 
        className="relative w-full max-w-2xl bg-[var(--bg-overlay)] border border-[var(--border)] rounded-xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-5 border-b border-[var(--border)] bg-[var(--bg-card)]">
          <h2 className="text-lg font-bold text-[var(--text-primary)] flex items-center gap-2">
            <FileUp size={20} className="text-[var(--primary)]" /> 
            {record ? 'Edit Document Details' : 'Upload / Log Document'}
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
            
            {/* Classification */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-[var(--text-secondary)]">Category <span className="text-red-500">*</span></label>
                <select
                  required
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
                >
                  <option value="VEHICLE_DOCUMENT">Vehicle Document</option>
                  <option value="DRIVER_DOCUMENT">Driver/Staff Document</option>
                  <option value="MAINTENANCE_BILL">Maintenance Bill / Invoice</option>
                  <option value="INSPECTION_REPORT">Inspection / Audit Report</option>
                  <option value="ACCIDENT_REPORT">Accident / Incident Report</option>
                  <option value="OTHER">Miscellaneous / Other</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-[var(--text-secondary)]">Document Type <span className="text-red-500">*</span></label>
                <select
                  required
                  name="documentType"
                  value={formData.documentType}
                  onChange={handleChange}
                  className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
                >
                  <option value="INSURANCE">Insurance Policy</option>
                  <option value="PERMIT">RTO Permit</option>
                  <option value="FITNESS_CERTIFICATE">Fitness Certificate</option>
                  <option value="REGISTRATION_RC">Registration (RC)</option>
                  <option value="POLLUTION_PUC">Pollution (PUC)</option>
                  <option value="DRIVING_LICENSE">Driving License</option>
                  <option value="BACKGROUND_CHECK">Background / Police Check</option>
                  <option value="MEDICAL_CERTIFICATE">Medical Certificate</option>
                  <option value="BILL">Bill / Invoice</option>
                  <option value="REPORT">Report / Audit</option>
                  <option value="MISC">Misc</option>
                </select>
              </div>
            </div>

            {/* Main Info */}
            <div className="space-y-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-[var(--text-secondary)]">Document Title <span className="text-red-500">*</span></label>
                <input
                  required
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="e.g. Comprehensive Insurance Policy (Tata AIG)"
                  className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm font-bold text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-[var(--text-secondary)] flex items-center gap-1.5"><ShieldCheck size={14}/> Reference / ID Number <span className="text-red-500">*</span></label>
                  <input
                    required
                    name="referenceId"
                    value={formData.referenceId}
                    onChange={handleChange}
                    placeholder="e.g. Policy No, DL No, Invoice No"
                    className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
                  />
                </div>
                
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-[var(--text-secondary)] flex items-center gap-1.5"><Link2 size={14}/> Associated Entity <span className="text-red-500">*</span></label>
                  <input
                    required
                    name="associatedEntity"
                    value={formData.associatedEntity}
                    onChange={handleChange}
                    placeholder="e.g. VEH-001 or Amit Kumar"
                    className="bg-[var(--bg-input)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Validity */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 p-4 bg-[var(--bg-input)] border border-[var(--border)] rounded-lg">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-[var(--text-secondary)] uppercase">Issue / Start Date <span className="text-red-500">*</span></label>
                <input
                  type="date"
                  required
                  name="issueDate"
                  value={formData.issueDate}
                  onChange={handleChange}
                  className="bg-[var(--bg-card)] border border-[var(--border)] rounded-md px-3 py-2 text-sm font-medium text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors [color-scheme:dark]"
                />
              </div>
              
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-semibold text-[var(--text-secondary)] uppercase">Expiry Date</label>
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input 
                      type="checkbox" 
                      name="hasExpiry" 
                      checked={formData.hasExpiry} 
                      onChange={handleChange}
                      className="w-3 h-3 rounded text-[var(--primary)] focus:ring-[var(--primary)] bg-[var(--bg-card)] border-[var(--border)]"
                    />
                    <span className="text-[10px] font-semibold text-[var(--text-primary)]">Does Expire</span>
                  </label>
                </div>
                <input
                  type="date"
                  required={formData.hasExpiry}
                  disabled={!formData.hasExpiry}
                  name="expiryDate"
                  value={formData.hasExpiry ? formData.expiryDate : ''}
                  onChange={handleChange}
                  min={formData.issueDate} 
                  className="bg-[var(--bg-card)] border border-[var(--border)] rounded-md px-3 py-2 text-sm font-medium text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors [color-scheme:dark] disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>
            </div>
            
            {/* Mock File Upload Box */}
            {!record && (
               <div className="border-2 border-dashed border-[var(--border)] rounded-xl p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:border-[var(--primary)] transition-colors bg-[var(--bg-input)]">
                  <div className="w-12 h-12 bg-[rgba(250,204,21,0.1)] text-[var(--primary)] rounded-full flex items-center justify-center mb-3">
                     <FileUp size={24} />
                  </div>
                  <p className="text-sm font-semibold text-[var(--text-primary)] mb-1">Click to upload or drag & drop</p>
                  <p className="text-xs text-[var(--text-secondary)]">PDF, PNG, JPG up to 10MB</p>
               </div>
            )}

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
                <>{record ? 'Update Details' : 'Log Document'}</>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
