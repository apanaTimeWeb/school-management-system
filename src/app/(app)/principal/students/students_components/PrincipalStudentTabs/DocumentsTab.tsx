import React from 'react';
import { PrincipalStudentDocument } from '../../students_types/PrincipalStudents.types';
import { FileText, Download, CheckCircle, Clock, XCircle } from 'lucide-react';

interface DocumentsTabProps {
  records: PrincipalStudentDocument[];
}

export default function DocumentsTab({ records }: DocumentsTabProps) {
  if (records.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-12 text-text-secondary bg-card border border-border rounded-lg">
        <FileText size={40} className="mb-4 text-border" />
        <p>No documents uploaded for this student.</p>
      </div>
    );
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Verified': return <CheckCircle size={16} className="text-success" />;
      case 'Pending': return <Clock size={16} className="text-warning" />;
      case 'Rejected': return <XCircle size={16} className="text-danger" />;
      default: return null;
    }
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {records.map((doc) => (
          <div key={doc.id} className="bg-card border border-border rounded-lg p-4 flex gap-4 hover:border-primary/50 transition-colors group">
            <div className="w-12 h-12 rounded bg-page border border-border flex items-center justify-center shrink-0">
              <FileText className="text-text-secondary group-hover:text-primary transition-colors" size={24} />
            </div>
            <div className="flex-1">
              <h4 className="text-[14px] font-bold text-text-primary mb-1 line-clamp-1">{doc.documentName}</h4>
              <p className="text-[12px] text-text-secondary mb-2">{doc.documentType} &bull; Uploaded {doc.uploadDate}</p>
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-1.5 text-[12px] font-medium text-text-primary">
                  {getStatusIcon(doc.status)}
                  {doc.status}
                </div>
                <a href={doc.fileUrl} className="p-1.5 bg-page rounded border border-border hover:bg-white/10 text-text-secondary hover:text-white transition-colors" title="Download">
                  <Download size={14} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
