"use client";

import React, { useState } from 'react';
import { Plus, Search, FileUp, Filter, AlertTriangle, ShieldCheck } from 'lucide-react';
import TransportDocumentsTable from './TransportDocumentsTable';
import TransportDocumentsFormModal from './TransportDocumentsFormModal';
import TransportDocumentsPreviewModal from './TransportDocumentsPreviewModal';
import { MOCK_DOCUMENTS } from '../transport_documents_constants/transport_documents.constants';
import type { TransportDocumentRecord, TransportDocumentFormData } from '../transport_documents_types/transport_documents.types';

// RESPONSIBILITY: Main orchestrator for Transport Documents module

export default function TransportDocumentsMain() {
  const [records, setRecords] = useState<TransportDocumentRecord[]>(MOCK_DOCUMENTS);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState<string>('ALL');
  
  // Modals state
  const [selectedRecord, setSelectedRecord] = useState<TransportDocumentRecord | null>(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Handlers
  const handleView = (record: TransportDocumentRecord) => {
    setSelectedRecord(record);
    setIsPreviewOpen(true);
  };

  const handleAdd = () => {
    setSelectedRecord(null);
    setIsFormOpen(true);
  };

  const handleEditRequest = () => {
    setIsPreviewOpen(false);
    setIsFormOpen(true);
  };

  const handleSave = (data: TransportDocumentFormData) => {
    const enrichData: TransportDocumentRecord = {
      id: selectedRecord ? selectedRecord.id : `DOC-${new Date().getFullYear()}-${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}`,
      category: data.category,
      documentType: data.documentType,
      title: data.title,
      referenceId: data.referenceId,
      associatedEntity: data.associatedEntity,
      issueDate: data.issueDate,
      expiryDate: data.hasExpiry ? data.expiryDate : null,
      fileUrl: selectedRecord ? selectedRecord.fileUrl : `/mock/new_upload_${Date.now()}.pdf`,
      uploadedBy: selectedRecord ? selectedRecord.uploadedBy : 'Transport Manager (You)',
      uploadDate: selectedRecord ? selectedRecord.uploadDate : new Date().toISOString()
    };

    if (selectedRecord) {
      setRecords(prev => prev.map(r => r.id === selectedRecord.id ? enrichData : r));
    } else {
      setRecords(prev => [enrichData, ...prev]);
    }
  };

  // Filter
  const filteredRecords = records.filter(r => {
    const matchesSearch = r.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          r.referenceId.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          r.associatedEntity.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'ALL' || r.category === filterCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Calculate Metrics
  const today = new Date();
  today.setHours(0,0,0,0);
  
  let expiredCount = 0;
  let expiringSoonCount = 0; // <= 30 days

  records.forEach(r => {
    if (r.expiryDate) {
      const exp = new Date(r.expiryDate);
      exp.setHours(23,59,59,999);
      const diffTime = exp.getTime() - today.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      
      if (diffDays < 0) expiredCount++;
      else if (diffDays <= 30) expiringSoonCount++;
    }
  });

  return (
    <div className="flex flex-col w-full h-full space-y-6">
      
      {/* Header & Action Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-[var(--bg-card)] p-4 rounded-xl border border-[var(--border)] shrink-0">
        <div>
          <h1 className="text-[22px] font-bold text-[var(--text-primary)] flex items-center gap-2">
            <span className="text-2xl">📁</span> Transport Documents vault
          </h1>
          <p className="text-[14px] text-[var(--text-secondary)] mt-1">
            Securely manage insurance, permits, fitness certs, and driver licenses.
          </p>
        </div>
        
        <div className="flex flex-wrap items-center gap-3">
          {(expiredCount > 0 || expiringSoonCount > 0) ? (
            <>
              {expiredCount > 0 && (
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[rgba(239,68,68,0.05)] border border-[rgba(239,68,68,0.2)] animate-pulse">
                  <AlertTriangle size={16} className="text-red-500" />
                  <div className="flex flex-col">
                     <span className="text-[10px] uppercase font-bold text-[var(--text-secondary)] leading-none mb-0.5">Critical</span>
                     <span className="text-sm font-bold text-red-500 leading-none">{expiredCount} Expired</span>
                  </div>
                </div>
              )}
              {expiringSoonCount > 0 && (
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[rgba(245,158,11,0.05)] border border-[rgba(245,158,11,0.2)]">
                  <AlertTriangle size={16} className="text-amber-500" />
                  <div className="flex flex-col">
                     <span className="text-[10px] uppercase font-bold text-[var(--text-secondary)] leading-none mb-0.5">Warning</span>
                     <span className="text-sm font-bold text-amber-500 leading-none">{expiringSoonCount} Expiring Soon</span>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[rgba(16,185,129,0.05)] border border-[rgba(16,185,129,0.2)]">
              <ShieldCheck size={16} className="text-emerald-500" />
              <div className="flex flex-col">
                 <span className="text-[10px] uppercase font-bold text-[var(--text-secondary)] leading-none mb-0.5">Status</span>
                 <span className="text-sm font-bold text-emerald-500 leading-none">All Documents Valid</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Tools Row */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
          <div className="relative w-full sm:w-64">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]" />
            <input
              type="text"
              placeholder="Search by Title, Ref ID, or Entity..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[var(--bg-card)] border border-[var(--border)] rounded-md py-2 pl-9 pr-3 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
            />
          </div>
          
          <div className="relative">
             <Filter size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-secondary)] pointer-events-none" />
             <select
               value={filterCategory}
               onChange={(e) => setFilterCategory(e.target.value)}
               className="bg-[var(--bg-card)] border border-[var(--border)] rounded-md py-2 pl-8 pr-3 text-sm font-medium text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors cursor-pointer appearance-none max-w-[150px] sm:max-w-none"
             >
               <option value="ALL">All Categories</option>
               <option value="VEHICLE_DOCUMENT">Vehicle Docs</option>
               <option value="DRIVER_DOCUMENT">Driver Docs</option>
               <option value="MAINTENANCE_BILL">Maintenance Bills</option>
               <option value="INSPECTION_REPORT">Inspection Reports</option>
               <option value="ACCIDENT_REPORT">Accident Reports</option>
             </select>
          </div>
        </div>

        <button 
          onClick={handleAdd}
          className="flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-[var(--primary)] text-white text-sm font-medium hover:bg-[var(--primary-hover)] transition-colors shadow-lg shadow-[var(--primary-subtle)] whitespace-nowrap"
        >
          <FileUp size={16} />
          <span className="hidden sm:inline">Upload Document</span>
        </button>
      </div>

      {/* Main Table Card */}
      <div className="bg-[var(--bg-card)] rounded-xl border border-[var(--border)] overflow-hidden">
        <TransportDocumentsTable 
          records={filteredRecords} 
          onView={handleView}
        />
        
        {/* Pagination Footer */}
        <div className="p-4 border-t border-[var(--border)] bg-[var(--bg-page)] flex items-center justify-between text-sm text-[var(--text-secondary)]">
          <div>Showing {filteredRecords.length > 0 ? 1 : 0} to {filteredRecords.length} of {records.length} entries</div>
          <div className="flex gap-1">
            <button className="px-3 py-1 rounded border border-[var(--border)] hover:bg-[var(--bg-input)] disabled:opacity-50" disabled>Previous</button>
            <button className="px-3 py-1 rounded border border-[var(--primary)] bg-[rgba(250,204,21,0.1)] text-[var(--primary)]">1</button>
            <button className="px-3 py-1 rounded border border-[var(--border)] hover:bg-[var(--bg-input)] disabled:opacity-50" disabled>Next</button>
          </div>
        </div>
      </div>

      {/* Modals */}
      <TransportDocumentsPreviewModal 
        isOpen={isPreviewOpen}
        record={selectedRecord}
        onClose={() => setIsPreviewOpen(false)}
        onEditRequest={handleEditRequest}
      />
      
      <TransportDocumentsFormModal 
        isOpen={isFormOpen}
        record={selectedRecord}
        onClose={() => setIsFormOpen(false)}
        onSave={handleSave}
      />
      
    </div>
  );
}
