"use client";

import React from 'react';
import { Eye, FileText, Calendar, Link2, AlertTriangle, ShieldCheck } from 'lucide-react';
import type { TransportDocumentRecord, DocumentStatus } from '../transport_documents_types/transport_documents.types';
import { CATEGORY_CONFIGS } from '../transport_documents_constants/transport_documents.constants';

// RESPONSIBILITY: Renders the table of transport documents

interface TransportDocumentsTableProps {
  records: TransportDocumentRecord[];
  onView: (record: TransportDocumentRecord) => void;
}

export default function TransportDocumentsTable({ records, onView }: TransportDocumentsTableProps) {
  
  const formatDate = (isoDate: string | null) => {
    if (!isoDate) return 'N/A';
    return new Date(isoDate).toLocaleDateString('en-IN', {
      day: 'numeric', month: 'short', year: 'numeric'
    });
  };

  const getDynamicStatus = (expiryDate: string | null): { status: DocumentStatus, color: string, label: string } => {
    if (!expiryDate) return { status: 'ACTIVE', color: 'text-gray-500 bg-gray-500/10 border-gray-500/20', label: 'No Expiry' };
    
    const today = new Date();
    today.setHours(0,0,0,0);
    const exp = new Date(expiryDate);
    exp.setHours(23,59,59,999);

    const diffTime = exp.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 0) {
      return { status: 'EXPIRED', color: 'text-red-500 bg-red-500/10 border-red-500/30 font-bold', label: 'Expired' };
    }
    if (diffDays <= 30) {
      return { status: 'EXPIRING_SOON', color: 'text-amber-500 bg-amber-500/10 border-amber-500/30 font-bold', label: `Expires in ${diffDays}d` };
    }
    return { status: 'ACTIVE', color: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20', label: 'Valid' };
  };

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-[rgba(250,204,21,0.05)] border-b border-[var(--border)]">
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider">Document Name & Ref</th>
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider">Associated Entity</th>
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider">Issue / Upload Date</th>
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider">Validity & Status</th>
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {records.length > 0 ? (
            records.map((record) => {
              const catConfig = CATEGORY_CONFIGS[record.category] || CATEGORY_CONFIGS.OTHER;
              const dynamicStatus = getDynamicStatus(record.expiryDate);

              return (
                <tr 
                  key={record.id} 
                  onClick={() => onView(record)}
                  className={`border-b border-[var(--border)] hover:bg-[rgba(250,204,21,0.05)] motion-safe:transition-colors cursor-pointer group ${dynamicStatus.status === 'EXPIRED' ? 'bg-[rgba(239,68,68,0.02)]' : ''}`}
                >
                  <td className="py-3 px-4 max-w-[250px]">
                    <div className="flex flex-col gap-1.5">
                      <div className="text-sm font-bold text-[var(--text-primary)] truncate" title={record.title}>
                        {record.title}
                      </div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span 
                          className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded border whitespace-nowrap"
                          style={{ backgroundColor: catConfig.bg, color: catConfig.text, borderColor: catConfig.text + '30' }}
                        >
                          {catConfig.label}
                        </span>
                        <span className="text-[10px] text-[var(--text-secondary)] font-mono truncate" title={record.referenceId}>Ref: {record.referenceId}</span>
                      </div>
                    </div>
                  </td>
                  
                  <td className="py-3 px-4 max-w-[200px]">
                    <div className="flex flex-col gap-1.5">
                       <div className="text-xs font-semibold text-[var(--text-primary)] flex items-center gap-1.5 truncate" title={record.associatedEntity}>
                        <Link2 size={12} className="text-[var(--primary)] flex-shrink-0"/> {record.associatedEntity}
                      </div>
                    </div>
                  </td>

                  <td className="py-3 px-4">
                    <div className="flex flex-col gap-1">
                      <div className="text-xs text-[var(--text-primary)] flex items-center gap-1.5 whitespace-nowrap">
                        <Calendar size={12} className="text-[var(--text-secondary)]"/> {formatDate(record.issueDate)}
                      </div>
                      <span className="text-[10px] text-[var(--text-secondary)]">
                        Uploaded by: {record.uploadedBy}
                      </span>
                    </div>
                  </td>

                  <td className="py-3 px-4">
                    <div className="flex flex-col items-start gap-1">
                       {record.expiryDate ? (
                         <div className="flex items-center gap-2">
                            <span className={`flex items-center gap-1 px-2 py-0.5 rounded text-[10px] uppercase tracking-wide whitespace-nowrap border ${dynamicStatus.color}`}>
                               {dynamicStatus.status === 'EXPIRED' && <AlertTriangle size={10} />}
                               {dynamicStatus.status === 'ACTIVE' && <ShieldCheck size={10} />}
                               {dynamicStatus.label}
                            </span>
                            <span className="text-[10px] text-[var(--text-secondary)] font-medium">({formatDate(record.expiryDate)})</span>
                         </div>
                       ) : (
                         <span className={`px-2 py-0.5 rounded text-[10px] uppercase tracking-wide whitespace-nowrap border ${dynamicStatus.color}`}>
                           {dynamicStatus.label}
                         </span>
                       )}
                    </div>
                  </td>

                  <td className="py-3 px-4 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 motion-safe:transition-opacity">
                      <button 
                        onClick={(e) => { e.stopPropagation(); onView(record); }}
                        className="flex items-center gap-1 px-2 py-1.5 rounded-md bg-[var(--bg-input)] hover:bg-[var(--primary)] text-[var(--text-secondary)] hover:text-white transition-colors"
                        title="View / Download Document"
                      >
                        <FileText size={14} />
                        <span className="text-[10px] font-bold uppercase tracking-wider">View</span>
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
                  <span className="text-4xl mb-3 opacity-20">📁</span>
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
