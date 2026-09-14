"use client";
import React, { useEffect, useState } from 'react';
import { PrincipalStudentDocument } from '../documents_types/PrincipalDocuments.types';
import { fetchPrincipalDocuments } from '../documents_api/PrincipalDocumentsApi';
import { Search, Filter, FileText, CheckCircle, Clock } from 'lucide-react';
import { usePrincipalDocumentsStore } from '../documents_store/usePrincipalDocumentsStore';
import clsx from 'clsx';

export default function PrincipalDocumentVerificationTab() {
  const [documents, setDocuments] = useState<PrincipalStudentDocument[]>([]);
  const [loading, setLoading] = useState(true);
  const { setSelectedDocument } = usePrincipalDocumentsStore();

  useEffect(() => {
    let isMounted = true;
    fetchPrincipalDocuments().then(data => {
      if (isMounted) {
        setDocuments(data.filter(d => d.status === 'Pending Verification'));
        setLoading(false);
      }
    });
    return () => { isMounted = false; };
  }, []);

  if (loading) {
    return (
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => <div key={i} className="h-20 bg-skeleton-base animate-pulse rounded" />)}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
      <div className="p-5 border-b border-border flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-[18px] font-bold text-text-primary">Verify Student Documents</h2>
          <p className="text-[13px] text-text-secondary">Verify uploaded documents like Birth Certificates and Marksheets.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="flex items-center gap-2 bg-input border border-border rounded-md px-3 py-1.5 focus-within:border-primary transition-colors">
            <Search size={14} className="text-text-secondary" />
            <input 
              type="text" 
              placeholder="Search documents..." 
              className="bg-transparent border-none outline-none text-[13px] text-text-primary w-full sm:w-48 placeholder:text-text-secondary/50"
            />
          </div>
          <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.dispatchEvent(new CustomEvent('open-coming-soon', { detail: 'Action completed successfully!' })); }} className="flex items-center justify-center gap-2 px-4 py-1.5 bg-page hover:bg-white/5 border border-border rounded-md text-[13px] font-bold text-text-primary transition-colors">
            <Filter size={14} /> Filter
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[900px]">
          <thead>
            <tr className="bg-primary/5 border-b border-border text-[12px] font-semibold text-text-secondary uppercase tracking-wider">
              <th className="p-4 w-40">Doc ID</th>
              <th className="p-4 w-64">Document Name</th>
              <th className="p-4 w-64">Student Info</th>
              <th className="p-4 w-40 text-center">Status</th>
              <th className="p-4 w-32 text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {documents.map((doc) => (
              <tr key={doc.id} className="border-b border-border/50 hover:bg-white/5 transition-colors group">
                <td className="p-4">
                  <span className="font-mono text-[13px] font-bold text-text-primary bg-black/20 px-2 py-1 rounded">{doc.id}</span>
                </td>
                <td className="p-4">
                  <p className="text-[14px] font-bold text-text-primary mb-1 flex items-center gap-2">
                    <FileText size={14} className="text-primary"/> {doc.documentName}
                  </p>
                  <p className="text-[12px] text-text-secondary">Uploaded: {doc.uploadDate}</p>
                </td>
                <td className="p-4">
                  <p className="text-[13px] font-bold text-text-primary mb-0.5">{doc.studentName}</p>
                  <p className="text-[12px] text-text-secondary">{doc.classAndSection} ({doc.studentId})</p>
                </td>
                <td className="p-4 text-center">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold border bg-warning/10 text-warning border-warning/30">
                    <Clock size={12}/> {doc.status}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <button 
                    onClick={() => setSelectedDocument(doc)}
                    className="px-4 py-1.5 rounded bg-primary/10 hover:bg-primary border border-primary/30 hover:border-primary text-[12px] font-bold text-primary hover:text-white transition-colors"
                  >
                    View & Verify
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
