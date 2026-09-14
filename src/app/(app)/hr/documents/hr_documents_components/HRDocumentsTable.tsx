"use client";
import React from "react";
import { Download, Eye, FileText, CheckCircle, XCircle } from "lucide-react";
import { useHRDocumentsStore } from "../hr_documents_store/useHRDocumentsStore";
import clsx from "clsx";

export default function HRDocumentsTable() {
  const { documentsData, searchQuery, typeFilter, statusFilter } = useHRDocumentsStore();

  const filteredData = documentsData.filter(doc => {
    const matchesSearch = doc.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          doc.documentName.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesType = typeFilter === "All" || doc.documentType === typeFilter;
    const matchesStatus = statusFilter === "All" || doc.status === statusFilter;
    
    return matchesSearch && matchesType && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'Verified': return 'text-emerald-700 bg-emerald-50 border-emerald-200';
      case 'Rejected': return 'text-rose-700 bg-rose-50 border-rose-200';
      case 'Pending': return 'text-amber-700 bg-amber-50 border-amber-200';
      default: return 'text-slate-700 bg-slate-50 border-slate-200';
    }
  };

  return (
    <div className="bg-card border border-border rounded-2xl shadow-sm overflow-hidden">
      <div className="overflow-x-auto custom-scrollbar">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-bg-input border-b border-border">
              <th className="p-4 text-xs font-black text-text-secondary uppercase tracking-wider">Employee</th>
              <th className="p-4 text-xs font-black text-text-secondary uppercase tracking-wider">Document Details</th>
              <th className="p-4 text-xs font-black text-text-secondary uppercase tracking-wider hidden md:table-cell">Uploaded On</th>
              <th className="p-4 text-xs font-black text-text-secondary uppercase tracking-wider">Status</th>
              <th className="p-4 text-xs font-black text-text-secondary uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {filteredData.map((doc) => (
              <tr key={doc.id} className="hover:bg-bg-page/50 transition-colors group">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center text-rose-700 font-bold shrink-0">
                      {doc.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-text-primary group-hover:text-rose-600 transition-colors">{doc.name}</p>
                      <p className="text-xs font-semibold text-text-secondary">{doc.employeeId}</p>
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <FileText size={16} className="text-rose-500 shrink-0" />
                    <p className="text-sm font-bold text-text-primary truncate max-w-[200px]" title={doc.documentName}>{doc.documentName}</p>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-[10px] font-bold text-text-secondary px-1.5 py-0.5 border border-border rounded bg-bg-page uppercase tracking-wider">{doc.documentType}</span>
                    <span className="text-[11px] font-semibold text-text-secondary">{doc.size}</span>
                  </div>
                </td>
                <td className="p-4 hidden md:table-cell">
                  <p className="text-sm font-semibold text-text-primary">{doc.uploadedDate}</p>
                </td>
                <td className="p-4">
                  <span className={clsx("px-2.5 py-1 rounded-md text-[11px] font-bold border", getStatusColor(doc.status))}>
                    {doc.status}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button 
                      className="p-1.5 text-text-secondary hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                      title="View Document"
                    >
                      <Eye size={18} />
                    </button>
                    <button 
                      className="p-1.5 text-text-secondary hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                      title="Download"
                    >
                      <Download size={18} />
                    </button>
                    {doc.status === 'Pending' && (
                      <div className="flex gap-1 ml-2 border-l border-border pl-2">
                        <button className="p-1 text-text-secondary hover:text-emerald-600 rounded" title="Verify">
                          <CheckCircle size={16} />
                        </button>
                        <button className="p-1 text-text-secondary hover:text-rose-600 rounded" title="Reject">
                          <XCircle size={16} />
                        </button>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
            {filteredData.length === 0 && (
              <tr>
                <td colSpan={5} className="p-8 text-center text-text-secondary font-semibold">
                  No documents found matching your criteria.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
