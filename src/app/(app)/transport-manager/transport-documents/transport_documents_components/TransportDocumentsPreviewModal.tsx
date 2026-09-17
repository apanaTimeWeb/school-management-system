"use client";

import React, { useEffect } from 'react';
import { X, FileText, Download, Printer, ShieldCheck, AlertTriangle, Link2, Calendar } from 'lucide-react';
import type { TransportDocumentRecord } from '../transport_documents_types/transport_documents.types';
import { CATEGORY_CONFIGS } from '../transport_documents_constants/transport_documents.constants';

// RESPONSIBILITY: Renders the modal for previewing a document's details and simulating file viewing

interface TransportDocumentsPreviewModalProps {
  record: TransportDocumentRecord | null;
  isOpen: boolean;
  onClose: () => void;
  onEditRequest: () => void;
}

export default function TransportDocumentsPreviewModal({ record, isOpen, onClose, onEditRequest }: TransportDocumentsPreviewModalProps) {
  
  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen || !record) return null;

  const catConfig = CATEGORY_CONFIGS[record.category] || CATEGORY_CONFIGS.OTHER;

  const formatDate = (isoDate: string | null) => {
    if (!isoDate) return 'N/A';
    return new Date(isoDate).toLocaleDateString('en-IN', {
      day: 'numeric', month: 'short', year: 'numeric'
    });
  };

  const getDynamicStatus = (expiryDate: string | null) => {
    if (!expiryDate) return { status: 'ACTIVE', color: 'text-gray-500 bg-gray-500/10 border-gray-500/20', label: 'No Expiry Applicable' };
    
    const today = new Date();
    today.setHours(0,0,0,0);
    const exp = new Date(expiryDate);
    exp.setHours(23,59,59,999);

    const diffTime = exp.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 0) {
      return { status: 'EXPIRED', color: 'text-red-500 bg-red-500/10 border-red-500/30 font-bold', label: `Expired ${Math.abs(diffDays)} days ago` };
    }
    if (diffDays <= 30) {
      return { status: 'EXPIRING_SOON', color: 'text-amber-500 bg-amber-500/10 border-amber-500/30 font-bold', label: `Expires in ${diffDays} days` };
    }
    return { status: 'ACTIVE', color: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20', label: 'Valid / Active' };
  };

  const dynamicStatus = getDynamicStatus(record.expiryDate);

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm motion-safe:transition-opacity">
      <div 
        className="relative w-full max-w-4xl bg-[var(--bg-overlay)] border border-[var(--border)] rounded-xl shadow-2xl flex flex-col md:flex-row h-[85vh] overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Left Side: Document Meta Info */}
        <div className="w-full md:w-[350px] flex flex-col bg-[var(--bg-card)] border-r border-[var(--border)] shrink-0 overflow-y-auto">
          
          <div className="flex items-center justify-between p-4 border-b border-[var(--border)] bg-[var(--bg-card)] sticky top-0 z-10">
            <h2 className="text-sm font-bold text-[var(--text-primary)] flex items-center gap-2">
              <FileText size={16} className="text-[var(--primary)]" /> Document Details
            </h2>
            <button 
              onClick={onClose}
              className="p-1.5 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-input)] rounded-md transition-colors md:hidden"
            >
              <X size={18} />
            </button>
          </div>

          <div className="p-5 space-y-6">
             
             <div>
                <span 
                  className="inline-block text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border mb-3"
                  style={{ backgroundColor: catConfig.bg, color: catConfig.text, borderColor: catConfig.text + '30' }}
                >
                  {catConfig.label}
                </span>
                <h3 className="text-lg font-bold text-[var(--text-primary)] leading-tight mb-2">{record.title}</h3>
                <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                   <ShieldCheck size={14}/> Ref: <span className="font-mono text-[var(--text-primary)]">{record.referenceId}</span>
                </div>
             </div>

             <div className="bg-[var(--bg-input)] border border-[var(--border)] p-4 rounded-lg space-y-4">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] text-[var(--text-secondary)] uppercase font-semibold">Associated With</span>
                  <span className="font-bold text-[var(--primary)] flex items-center gap-1.5">
                     <Link2 size={14}/> {record.associatedEntity}
                  </span>
                </div>
                
                <div className="h-px bg-[var(--border)] w-full"></div>

                <div className="flex flex-col gap-1">
                  <span className="text-[10px] text-[var(--text-secondary)] uppercase font-semibold">Issue Date</span>
                  <span className="font-medium text-[var(--text-primary)] flex items-center gap-1.5">
                     <Calendar size={14} className="text-[var(--text-secondary)]"/> {formatDate(record.issueDate)}
                  </span>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-[10px] text-[var(--text-secondary)] uppercase font-semibold">Expiry Date & Status</span>
                  <div className="flex flex-col gap-1.5 mt-0.5">
                    <span className="font-bold text-[var(--text-primary)] flex items-center gap-1.5">
                       <Calendar size={14} className="text-[var(--text-secondary)]"/> {formatDate(record.expiryDate)}
                    </span>
                    <span className={`inline-flex items-center gap-1.5 px-2 py-1 rounded text-xs border w-max ${dynamicStatus.color}`}>
                       {dynamicStatus.status === 'EXPIRED' && <AlertTriangle size={12} />}
                       {dynamicStatus.status === 'ACTIVE' && <ShieldCheck size={12} />}
                       {dynamicStatus.label}
                    </span>
                  </div>
                </div>
             </div>

             <div className="text-[10px] text-[var(--text-secondary)] flex flex-col gap-1">
                <span>Uploaded by: {record.uploadedBy}</span>
                <span>Upload date: {new Date(record.uploadDate).toLocaleString()}</span>
             </div>

          </div>

          <div className="p-4 border-t border-[var(--border)] bg-[var(--bg-page)] mt-auto flex flex-col gap-2">
            <button 
              onClick={onEditRequest}
              className="w-full py-2 text-sm font-medium rounded-md border border-[var(--primary)] text-[var(--primary)] hover:bg-[rgba(250,204,21,0.1)] transition-colors"
            >
              Edit Details
            </button>
          </div>
        </div>

        {/* Right Side: Mock File Preview Viewer */}
        <div className="flex-1 flex flex-col bg-[var(--bg-page)]">
           <div className="flex items-center justify-between p-3 border-b border-[var(--border)] bg-[var(--bg-card)] shrink-0">
             <div className="flex items-center gap-2">
               <span className="text-xs text-[var(--text-secondary)] font-mono">{record.fileUrl}</span>
             </div>
             <div className="flex items-center gap-2">
               <button className="p-1.5 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-input)] rounded-md transition-colors" title="Print">
                 <Printer size={16} />
               </button>
               <button className="p-1.5 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-input)] rounded-md transition-colors" title="Download">
                 <Download size={16} />
               </button>
               <div className="w-px h-4 bg-[var(--border)] mx-1 hidden md:block"></div>
               <button 
                 onClick={onClose}
                 className="p-1.5 text-[var(--text-secondary)] hover:text-red-500 hover:bg-[rgba(239,68,68,0.1)] rounded-md transition-colors hidden md:block"
                 title="Close Preview"
               >
                 <X size={18} />
               </button>
             </div>
           </div>
           
           <div className="flex-1 flex items-center justify-center p-6 bg-[rgba(0,0,0,0.2)] overflow-hidden">
             {/* Mock PDF/Image rendering box */}
             <div className="w-full h-full max-w-2xl bg-white rounded shadow-2xl flex flex-col items-center justify-center border border-gray-300 relative overflow-hidden group">
                
                {/* Simulated content based on document type */}
                <div className="opacity-30 flex flex-col items-center">
                   {record.documentType === 'INSURANCE' && <ShieldCheck size={64} className="text-blue-500 mb-4" />}
                   {record.documentType === 'DRIVING_LICENSE' && <FileText size={64} className="text-purple-500 mb-4" />}
                   {record.category === 'MAINTENANCE_BILL' && <FileText size={64} className="text-amber-500 mb-4" />}
                   {(record.documentType !== 'INSURANCE' && record.documentType !== 'DRIVING_LICENSE' && record.category !== 'MAINTENANCE_BILL') && <FileText size={64} className="text-gray-500 mb-4" />}
                   
                   <h1 className="text-2xl font-black text-gray-800 uppercase tracking-widest">{record.documentType.replace('_', ' ')}</h1>
                   <p className="text-sm font-medium text-gray-500 mt-2">Document Preview Simulation</p>
                   <p className="text-xs text-gray-400 mt-1 font-mono">{record.referenceId}</p>
                </div>

                {/* Watermark */}
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-5">
                   <div className="text-[120px] font-black text-gray-900 -rotate-45 select-none">MOCK PREVIEW</div>
                </div>
             </div>
           </div>
        </div>

      </div>
    </div>
  );
}
