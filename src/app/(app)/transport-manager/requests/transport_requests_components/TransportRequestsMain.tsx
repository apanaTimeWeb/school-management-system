"use client";

import React, { useState } from 'react';
import { Search, Filter, Plus, FileText, AlertCircle } from 'lucide-react';
import TransportRequestsTable from './TransportRequestsTable';
import TransportRequestsProfileModal from './TransportRequestsProfileModal';
import TransportRequestsFormModal from './TransportRequestsFormModal';
import { MOCK_TRANSPORT_REQUESTS } from '../transport_requests_constants/transport_requests.constants';
import type { TransportRequest, TransportRequestFormData, TransportRequestStatus } from '../transport_requests_types/transport_requests.types';

// RESPONSIBILITY: Main orchestrator for Transport Requests module

export default function TransportRequestsMain() {
  const [requests, setRequests] = useState<TransportRequest[]>(MOCK_TRANSPORT_REQUESTS);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('ALL');
  
  // Modals state
  const [selectedRequest, setSelectedRequest] = useState<TransportRequest | null>(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Handlers
  const handleView = (request: TransportRequest) => {
    setSelectedRequest(request);
    setIsProfileOpen(true);
  };

  const handleAdd = () => {
    setSelectedRequest(null);
    setIsFormOpen(true);
  };

  const handleUpdateStatus = (id: string, status: TransportRequestStatus, remarks: string) => {
    setRequests(prev => prev.map(r => r.id === id ? { ...r, status, adminRemarks: remarks } : r));
  };

  const handleSaveForm = (data: TransportRequestFormData) => {
    // Adding a manual request from admin portal
    const newRequest: TransportRequest = {
      ...data,
      id: `REQ-${Math.floor(Math.random() * 10000)}`,
      requestDate: new Date().toISOString().split('T')[0],
      classSection: 'Class 10 - A', // Mock
      guardianName: 'Guardian Name', // Mock
      guardianContact: '9876543210', // Mock
      hasAttachment: false,
      attachmentUrl: null,
      adminRemarks: null
    };
    setRequests(prev => [newRequest, ...prev]);
  };

  // Filter
  const filteredRequests = requests.filter(r => {
    const matchesSearch = r.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          r.studentId.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          r.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'ALL' || r.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const pendingCount = requests.filter(r => r.status === 'PENDING').length;
  const reviewCount = requests.filter(r => r.status === 'UNDER_REVIEW').length;

  return (
    <div className="flex flex-col w-full h-full space-y-6">
      
      {/* Header & Action Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-[var(--bg-card)] p-4 rounded-xl border border-[var(--border)]">
        <div>
          <h1 className="text-[22px] font-bold text-[var(--text-primary)] flex items-center gap-2">
            <span className="text-2xl">📨</span> Transport Requests
          </h1>
          <p className="text-[14px] text-[var(--text-secondary)] mt-1">
            Review and approve student route changes, start/stop service requests.
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[rgba(245,158,11,0.05)] border border-[rgba(245,158,11,0.2)]">
            <AlertCircle size={16} className="text-amber-500" />
            <span className="text-sm font-semibold text-amber-500">{pendingCount} Action Required</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[rgba(59,130,246,0.05)] border border-[rgba(59,130,246,0.2)] hidden sm:flex">
            <FileText size={16} className="text-blue-500" />
            <span className="text-sm font-semibold text-blue-500">{reviewCount} Under Review</span>
          </div>
        </div>
      </div>

      {/* Tools Row */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="relative w-full sm:w-64">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]" />
            <input
              type="text"
              placeholder="Search ID, student..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[var(--bg-card)] border border-[var(--border)] rounded-md py-2 pl-9 pr-3 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
            />
          </div>
          
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="bg-[var(--bg-card)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors hidden sm:block"
          >
            <option value="ALL">All Statuses</option>
            <option value="PENDING">Pending Approval</option>
            <option value="UNDER_REVIEW">Under Review</option>
            <option value="APPROVED">Approved</option>
            <option value="REJECTED">Rejected</option>
          </select>
        </div>

        <button 
          onClick={handleAdd}
          className="flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-[var(--primary)] text-white text-sm font-medium hover:bg-[var(--primary-hover)] transition-colors shadow-lg shadow-[var(--primary-subtle)] whitespace-nowrap"
        >
          <Plus size={16} />
          <span className="hidden sm:inline">File Manual Request</span>
        </button>
      </div>

      {/* Main Table Card */}
      <div className="bg-[var(--bg-card)] rounded-xl border border-[var(--border)] overflow-hidden">
        <TransportRequestsTable 
          requests={filteredRequests} 
          onView={handleView}
        />
        
        {/* Pagination Footer */}
        <div className="p-4 border-t border-[var(--border)] bg-[var(--bg-page)] flex items-center justify-between text-sm text-[var(--text-secondary)]">
          <div>Showing {filteredRequests.length > 0 ? 1 : 0} to {filteredRequests.length} of {requests.length} entries</div>
          <div className="flex gap-1">
            <button className="px-3 py-1 rounded border border-[var(--border)] hover:bg-[var(--bg-input)] disabled:opacity-50" disabled>Previous</button>
            <button className="px-3 py-1 rounded border border-[var(--primary)] bg-[rgba(250,204,21,0.1)] text-[var(--primary)]">1</button>
            <button className="px-3 py-1 rounded border border-[var(--border)] hover:bg-[var(--bg-input)] disabled:opacity-50" disabled>Next</button>
          </div>
        </div>
      </div>

      {/* Modals */}
      <TransportRequestsProfileModal 
        isOpen={isProfileOpen}
        request={selectedRequest}
        onClose={() => setIsProfileOpen(false)}
        onUpdateStatus={handleUpdateStatus}
      />
      
      <TransportRequestsFormModal 
        isOpen={isFormOpen}
        request={null}
        onClose={() => setIsFormOpen(false)}
        onSave={handleSaveForm}
      />
      
    </div>
  );
}
