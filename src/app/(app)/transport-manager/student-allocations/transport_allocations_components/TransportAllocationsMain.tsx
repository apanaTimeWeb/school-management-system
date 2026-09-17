"use client";

import React, { useState } from 'react';
import { Search, Filter, Plus, Users, Bus } from 'lucide-react';
import TransportAllocationsTable from './TransportAllocationsTable';
import TransportAllocationsProfileModal from './TransportAllocationsProfileModal';
import TransportAllocationsFormModal from './TransportAllocationsFormModal';
import { MOCK_TRANSPORT_ALLOCATIONS } from '../transport_allocations_constants/transport_allocations.constants';
import type { TransportAllocation, TransportAllocationFormData } from '../transport_allocations_types/transport_allocations.types';

// RESPONSIBILITY: Main orchestrator for Student Transport Allocations module

export default function TransportAllocationsMain() {
  const [allocations, setAllocations] = useState<TransportAllocation[]>(MOCK_TRANSPORT_ALLOCATIONS);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('ALL');
  
  // Modals state
  const [selectedAllocation, setSelectedAllocation] = useState<TransportAllocation | null>(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Computed data for validation
  const activeStudentIds = allocations
    .filter(a => a.status === 'ACTIVE')
    .map(a => a.studentId);

  // Handlers
  const handleView = (allocation: TransportAllocation) => {
    setSelectedAllocation(allocation);
    setIsProfileOpen(true);
  };

  const handleEdit = (allocation: TransportAllocation) => {
    setSelectedAllocation(allocation);
    setIsFormOpen(true);
  };

  const handleAdd = () => {
    setSelectedAllocation(null);
    setIsFormOpen(true);
  };

  const handleDelete = (allocationId: string) => {
    if (window.confirm('Are you sure you want to remove this transport assignment?')) {
      setAllocations(prev => prev.filter(a => a.id !== allocationId));
    }
  };

  const handleSave = (data: TransportAllocationFormData) => {
    
    // In a real application, we would fetch these from related collections using the IDs.
    // For this mock, we inject string literals to satisfy the type
    const enrichData = {
      ...data,
      routeName: data.routeId === 'RT-001' ? 'Route R-01 (City Center)' : 'Route R-02 (North Campus)',
      stopName: data.stopId === 'STP-001' ? 'Main Road' : (data.stopId === 'STP-002' ? 'Railway Colony' : 'Science Block'),
      vehicleNumber: data.vehicleId === 'VEH-001' ? 'MH-12-AB-1234' : 'MH-12-CD-5678',
      classSection: 'Class 5 - A', // Mock fallback
      guardianName: 'Guardian Name', // Mock fallback
      guardianContact: '9876543210' // Mock fallback
    };

    if (selectedAllocation) {
      // Edit
      setAllocations(prev => prev.map(a => a.id === selectedAllocation.id ? { 
        ...a, 
        ...enrichData,
        // preserve names if they were already present
        studentName: a.studentId === data.studentId ? a.studentName : data.studentName,
        classSection: a.studentId === data.studentId ? a.classSection : enrichData.classSection,
        guardianName: a.studentId === data.studentId ? a.guardianName : enrichData.guardianName,
        guardianContact: a.studentId === data.studentId ? a.guardianContact : enrichData.guardianContact,
      } : a));
    } else {
      // Add
      const newAllocation: TransportAllocation = {
        ...enrichData,
        id: `ALLOC-${Math.floor(Math.random() * 10000)}`
      };
      setAllocations(prev => [newAllocation, ...prev]);
    }
  };

  // Filter
  const filteredAllocations = allocations.filter(a => {
    const matchesSearch = a.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          a.studentId.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          a.routeName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'ALL' || a.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const activeCount = allocations.filter(a => a.status === 'ACTIVE').length;

  return (
    <div className="flex flex-col w-full h-full space-y-6">
      
      {/* Header & Action Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-[var(--bg-card)] p-4 rounded-xl border border-[var(--border)]">
        <div>
          <h1 className="text-[22px] font-bold text-[var(--text-primary)] flex items-center gap-2">
            <span className="text-2xl">🚌</span> Student Allocations
          </h1>
          <p className="text-[14px] text-[var(--text-secondary)] mt-1">
            Assign students to routes, stops, and specific vehicles.
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[rgba(34,197,94,0.05)] border border-[rgba(34,197,94,0.2)]">
            <Users size={16} className="text-emerald-500" />
            <span className="text-sm font-semibold text-emerald-500">{activeCount} Active Students</span>
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
              placeholder="Search student, ID, route..."
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
            <option value="ALL">All Status</option>
            <option value="ACTIVE">Active</option>
            <option value="INACTIVE">Inactive</option>
            <option value="SUSPENDED">Suspended</option>
          </select>
        </div>

        <button 
          onClick={handleAdd}
          className="flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-[var(--primary)] text-white text-sm font-medium hover:bg-[var(--primary-hover)] transition-colors shadow-lg shadow-[var(--primary-subtle)] whitespace-nowrap"
        >
          <Plus size={16} />
          <span className="hidden sm:inline">Assign Transport</span>
        </button>
      </div>

      {/* Main Table Card */}
      <div className="bg-[var(--bg-card)] rounded-xl border border-[var(--border)] overflow-hidden">
        <TransportAllocationsTable 
          allocations={filteredAllocations} 
          onView={handleView}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
        
        {/* Pagination Footer */}
        <div className="p-4 border-t border-[var(--border)] bg-[var(--bg-page)] flex items-center justify-between text-sm text-[var(--text-secondary)]">
          <div>Showing {filteredAllocations.length > 0 ? 1 : 0} to {filteredAllocations.length} of {allocations.length} entries</div>
          <div className="flex gap-1">
            <button className="px-3 py-1 rounded border border-[var(--border)] hover:bg-[var(--bg-input)] disabled:opacity-50" disabled>Previous</button>
            <button className="px-3 py-1 rounded border border-[var(--primary)] bg-[rgba(250,204,21,0.1)] text-[var(--primary)]">1</button>
            <button className="px-3 py-1 rounded border border-[var(--border)] hover:bg-[var(--bg-input)] disabled:opacity-50" disabled>Next</button>
          </div>
        </div>
      </div>

      {/* Modals */}
      <TransportAllocationsProfileModal 
        isOpen={isProfileOpen}
        allocation={selectedAllocation}
        onClose={() => setIsProfileOpen(false)}
      />
      
      <TransportAllocationsFormModal 
        isOpen={isFormOpen}
        allocation={selectedAllocation}
        onClose={() => setIsFormOpen(false)}
        onSave={handleSave}
        activeStudentIds={activeStudentIds}
      />
      
    </div>
  );
}
