"use client";

import React, { useState } from 'react';
import { Search, Filter, Plus, ShieldCheck, AlertTriangle } from 'lucide-react';
import TransportDocumentsTable from './TransportDocumentsTable';
import TransportDocumentsViewModal from './TransportDocumentsViewModal';
import TransportDocumentsFormModal from './TransportDocumentsFormModal';
import { MOCK_TRANSPORT_DOCUMENTS, DOCUMENT_TYPES } from '../transport_documents_constants/transport_documents.constants';
import type { TransportDocument, TransportDocumentFormData } from '../transport_documents_types/transport_documents.types';

// RESPONSIBILITY: Main orchestrator for Vehicle Documents module

export default function TransportDocumentsMain() {
  const [documents, setDocuments] = useState<TransportDocument[]>(MOCK_TRANSPORT_DOCUMENTS);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<string>('ALL');
  
  // Modals state
  const [selectedDocument, setSelectedDocument] = useState<TransportDocument | null>(null);
  const [isViewOpen, setIsViewOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Handlers
  const handleView = (doc: TransportDocument) => {
    setSelectedDocument(doc);
    setIsViewOpen(true);
  };

  const handleEdit = (doc: TransportDocument) => {
    setSelectedDocument(doc);
    setIsFormOpen(true);
  };

  const handleAdd = () => {
    setSelectedDocument(null);
    setIsFormOpen(true);
  };

  const handleDelete = (docId: string) => {
    if (window.confirm('Are you sure you want to delete this document?')) {
      setDocuments(prev => prev.filter(d => d.id !== docId));
    }
  };

  const handleToggleReminder = (docId: string) => {
    setDocuments(prev => prev.map(d => 
      d.id === docId ? { ...d, remindersEnabled: !d.remindersEnabled } : d
    ));
  };

  const handleSave = (data: TransportDocumentFormData) => {
    if (selectedDocument) {
      // Edit
      setDocuments(prev => prev.map(d => d.id === selectedDocument.id ? { 
        ...d, 
        ...data,
        vehicleNumber: 'MH-12-XX-0000', // Mock resolution
        attachmentUrl: data.attachmentFile ? URL.createObjectURL(data.attachmentFile) : d.attachmentUrl 
      } : d));
    } else {
      // Add
      const newDoc: TransportDocument = {
        id: `DOC-${Math.floor(Math.random() * 1000)}`,
        vehicleId: data.vehicleId,
        vehicleNumber: 'MH-12-XX-0000', // Mock resolution
        documentType: data.documentType,
        documentNumber: data.documentNumber,
        issueDate: data.issueDate,
        expiryDate: data.expiryDate,
        attachmentUrl: data.attachmentFile ? URL.createObjectURL(data.attachmentFile) : null,
        verificationStatus: 'PENDING',
        alertStatus: 'OK',
        remindersEnabled: data.remindersEnabled
      };
      setDocuments(prev => [newDoc, ...prev]);
    }
  };

  // Filter
  const filteredDocs = documents.filter(d => {
    const matchesSearch = d.vehicleNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          d.documentNumber.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'ALL' || d.documentType === filterType;
    return matchesSearch && matchesType;
  });

  const expiringCount = documents.filter(d => ['30_DAYS', '7_DAYS', 'EXPIRED'].includes(d.alertStatus)).length;
  const verifiedCount = documents.filter(d => d.verificationStatus === 'VERIFIED').length;

  return (
    <div className="flex flex-col w-full h-full space-y-6">
      
      {/* Header & KPI Summary */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-[var(--bg-card)] p-4 rounded-xl border border-[var(--border)]">
        <div>
          <h1 className="text-[22px] font-bold text-[var(--text-primary)] flex items-center gap-2">
            <span className="text-2xl">📄</span> Vehicle Documents
          </h1>
          <p className="text-[14px] text-[var(--text-secondary)] mt-1">
            Track registration, insurance, permits, and set expiry alerts.
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[rgba(239,68,68,0.05)] border border-[rgba(239,68,68,0.2)]">
            <AlertTriangle size={16} className="text-red-500" />
            <span className="text-sm font-semibold text-red-500">{expiringCount} Needs Attention</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[rgba(34,197,94,0.05)] border border-[rgba(34,197,94,0.2)] hidden sm:flex">
            <ShieldCheck size={16} className="text-emerald-500" />
            <span className="text-sm font-semibold text-emerald-500">{verifiedCount} Verified</span>
          </div>
        </div>
      </div>

      {/* Action Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="relative w-full sm:w-64">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]" />
            <input
              type="text"
              placeholder="Search vehicle or doc number..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[var(--bg-card)] border border-[var(--border)] rounded-md py-2 pl-9 pr-3 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
            />
          </div>
          
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="bg-[var(--bg-card)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors hidden sm:block"
          >
            <option value="ALL">All Types</option>
            {DOCUMENT_TYPES.map(type => (
              <option key={type.value} value={type.value}>{type.label}</option>
            ))}
          </select>
        </div>

        <button 
          onClick={handleAdd}
          className="flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-[var(--primary)] text-white text-sm font-medium hover:bg-[var(--primary-hover)] transition-colors shadow-lg shadow-[var(--primary-subtle)] whitespace-nowrap"
        >
          <Plus size={16} />
          Upload Document
        </button>
      </div>

      {/* Main Table Card */}
      <div className="bg-[var(--bg-card)] rounded-xl border border-[var(--border)] overflow-hidden">
        <TransportDocumentsTable 
          documents={filteredDocs} 
          onView={handleView}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onToggleReminder={handleToggleReminder}
        />
        
        {/* Pagination Footer */}
        <div className="p-4 border-t border-[var(--border)] bg-[var(--bg-page)] flex items-center justify-between text-sm text-[var(--text-secondary)]">
          <div>Showing {filteredDocs.length > 0 ? 1 : 0} to {filteredDocs.length} of {documents.length} entries</div>
          <div className="flex gap-1">
            <button className="px-3 py-1 rounded border border-[var(--border)] hover:bg-[var(--bg-input)] disabled:opacity-50" disabled>Previous</button>
            <button className="px-3 py-1 rounded border border-[var(--primary)] bg-[rgba(250,204,21,0.1)] text-[var(--primary)]">1</button>
            <button className="px-3 py-1 rounded border border-[var(--border)] hover:bg-[var(--bg-input)] disabled:opacity-50" disabled>Next</button>
          </div>
        </div>
      </div>

      {/* Modals */}
      <TransportDocumentsViewModal 
        isOpen={isViewOpen}
        document={selectedDocument}
        onClose={() => setIsViewOpen(false)}
      />
      
      <TransportDocumentsFormModal 
        isOpen={isFormOpen}
        document={selectedDocument}
        onClose={() => setIsFormOpen(false)}
        onSave={handleSave}
      />
      
    </div>
  );
}
