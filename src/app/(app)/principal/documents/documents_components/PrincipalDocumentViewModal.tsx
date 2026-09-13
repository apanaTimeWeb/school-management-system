"use client";
import React, { useState } from 'react';
import { X, ShieldCheck, CheckCircle, XCircle, Search } from 'lucide-react';
import { usePrincipalDocumentsStore } from '../documents_store/usePrincipalDocumentsStore';
import { updateDocumentStatus } from '../documents_api/PrincipalDocumentsApi';

export default function PrincipalDocumentViewModal() {
  const { selectedDocument, setSelectedDocument } = usePrincipalDocumentsStore();
  const [remarks, setRemarks] = useState('');
  const [loading, setLoading] = useState(false);

  if (!selectedDocument) return null;

  const handleAction = async (action: 'Verify' | 'Reject') => {
    setLoading(true);
    await updateDocumentStatus(selectedDocument.id, action, remarks);
    setSelectedDocument(null);
    setLoading(false);
    setRemarks('');
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 md:p-0">
      <div className="w-full max-w-4xl bg-bg-main border border-border rounded-xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col md:flex-row max-h-[90vh] md:h-[600px]">
        
        {/* Left Side: Image/Doc Viewer Placeholder */}
        <div className="w-full md:w-[60%] bg-page/50 border-b md:border-b-0 md:border-r border-border flex flex-col relative h-[300px] md:h-full">
          <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10 bg-black/50 p-2 rounded backdrop-blur">
             <span className="text-white font-mono text-[12px]">{selectedDocument.documentName}</span>
             <Search size={16} className="text-white" />
          </div>
          <div className="flex-1 flex items-center justify-center text-text-secondary/50 flex-col gap-2">
            <ShieldCheck size={64} className="opacity-20" />
            <p className="text-[14px]">Document Preview (Mock)</p>
          </div>
        </div>

        {/* Right Side: Details & Actions */}
        <div className="w-full md:w-[40%] flex flex-col h-full bg-bg-main">
          <div className="px-5 py-4 bg-card border-b border-border flex items-center justify-between shrink-0">
            <h2 className="text-[16px] font-bold text-text-primary flex items-center gap-2">
              <ShieldCheck className="text-primary" size={18} /> 
              Verification
            </h2>
            <button 
              onClick={() => setSelectedDocument(null)}
              className="p-1.5 rounded-full bg-page hover:bg-white/10 text-text-secondary hover:text-white transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          <div className="p-6 overflow-y-auto custom-scrollbar flex-1 space-y-5">
            <div>
              <p className="text-[11px] text-text-secondary mb-1">Student</p>
              <h3 className="text-[18px] font-bold text-text-primary">{selectedDocument.studentName}</h3>
              <p className="text-[13px] text-text-secondary">{selectedDocument.classAndSection} • {selectedDocument.studentId}</p>
            </div>
            
            <div className="bg-card border border-border p-3 rounded-lg">
              <p className="text-[11px] text-text-secondary mb-1">Doc ID & Upload Date</p>
              <p className="text-[13px] font-bold text-text-primary">{selectedDocument.id}</p>
              <p className="text-[12px] text-text-secondary">{selectedDocument.uploadDate}</p>
            </div>

            <div className="space-y-2">
              <label className="text-[13px] font-bold text-text-primary">Verification Remarks</label>
              <textarea 
                value={remarks}
                onChange={(e) => setRemarks(e.target.value)}
                className="w-full h-24 bg-input border border-border rounded-lg p-3 text-[13px] text-text-primary outline-none focus:border-primary transition-colors resize-none"
                placeholder="Enter remarks (if rejected)..."
              />
            </div>
          </div>

          <div className="px-5 py-4 border-t border-border bg-card flex flex-col shrink-0 gap-3">
            <button
              onClick={() => handleAction('Verify')}
              disabled={loading}
              className="w-full py-2.5 rounded-md bg-success hover:bg-success-hover text-black text-[13px] font-bold transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <CheckCircle size={16}/> Verify & Approve Document
            </button>
            <button
              onClick={() => handleAction('Reject')}
              disabled={loading || !remarks.trim()}
              className="w-full py-2.5 rounded-md bg-danger/10 hover:bg-danger border border-danger/30 hover:border-danger text-danger hover:text-white text-[13px] font-bold transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <XCircle size={16}/> Reject Document
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
