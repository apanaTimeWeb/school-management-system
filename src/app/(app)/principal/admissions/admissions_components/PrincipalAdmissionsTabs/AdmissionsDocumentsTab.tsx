import React, { useState } from 'react';
import { PrincipalAdmissionDocument } from '../../admissions_types/PrincipalAdmissions.types';
import { FileText, CheckCircle, Clock, XCircle } from 'lucide-react';

interface AdmissionsDocumentsTabProps {
  documents: PrincipalAdmissionDocument[];
}

export default function AdmissionsDocumentsTab({ documents }: AdmissionsDocumentsTabProps) {
  // Local state to simulate approving/rejecting docs
  const [docs, setDocs] = useState(documents);

  const updateDocStatus = (id: string, status: 'Verified' | 'Rejected') => {
    setDocs(prev => prev.map(d => d.id === id ? { ...d, status, remarks: status === 'Rejected' ? 'Rejected by Principal' : '' } : d));
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Verified': return <CheckCircle size={16} className="text-success" />;
      case 'Pending': return <Clock size={16} className="text-warning" />;
      case 'Rejected': return <XCircle size={16} className="text-danger" />;
      default: return null;
    }
  };

  if (docs.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-12 text-text-secondary bg-card border border-border rounded-lg">
        <FileText size={40} className="mb-4 text-border" />
        <p>No documents uploaded for this application.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="bg-info/10 border border-info/20 rounded-lg p-4 mb-4">
        <p className="text-[13px] text-info">Please review all submitted documents. You can mark them as Verified or Rejected to update the Document Verification Status of the application.</p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {docs.map((doc) => (
          <div key={doc.id} className="bg-card border border-border rounded-lg p-4 flex gap-4 items-center">
            <div className="w-12 h-12 rounded bg-page border border-border flex items-center justify-center shrink-0">
              <FileText className="text-text-secondary" size={24} />
            </div>
            
            <div className="flex-1">
              <h4 className="text-[14px] font-bold text-text-primary mb-1">{doc.documentName}</h4>
              <div className="flex items-center gap-2 mt-1">
                <span className={`flex items-center gap-1.5 text-[12px] font-bold ${
                  doc.status === 'Verified' ? 'text-success' : 
                  doc.status === 'Rejected' ? 'text-danger' : 
                  'text-warning'
                }`}>
                  {getStatusIcon(doc.status)}
                  {doc.status}
                </span>
                {doc.remarks && <span className="text-[12px] text-text-secondary italic">- {doc.remarks}</span>}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button 
                onClick={() => updateDocStatus(doc.id, 'Verified')}
                disabled={doc.status === 'Verified'}
                className="px-3 py-1.5 rounded bg-success/10 border border-success/30 text-success text-[12px] font-bold hover:bg-success/20 disabled:opacity-50 transition-colors"
              >
                Verify
              </button>
              <button 
                onClick={() => updateDocStatus(doc.id, 'Rejected')}
                disabled={doc.status === 'Rejected'}
                className="px-3 py-1.5 rounded bg-danger/10 border border-danger/30 text-danger text-[12px] font-bold hover:bg-danger/20 disabled:opacity-50 transition-colors"
              >
                Reject
              </button>
              <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.dispatchEvent(new CustomEvent('open-coming-soon', { detail: 'Action completed successfully!' })); }} className="px-3 py-1.5 rounded bg-page border border-border text-text-primary text-[12px] hover:bg-white/5 transition-colors">
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
