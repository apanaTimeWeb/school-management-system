"use client";

import React, { useState } from 'react';
import { Search, Filter, Plus, Users, ShieldAlert, UserCheck } from 'lucide-react';
import TransportConductorsTable from './TransportConductorsTable';
import TransportConductorsProfileModal from './TransportConductorsProfileModal';
import TransportConductorsFormModal from './TransportConductorsFormModal';
import { MOCK_TRANSPORT_CONDUCTORS } from '../transport_conductors_constants/transport_conductors.constants';
import type { TransportConductor, TransportConductorFormData } from '../transport_conductors_types/transport_conductors.types';

// RESPONSIBILITY: Main orchestrator for Conductors module

export default function TransportConductorsMain() {
  const [conductors, setConductors] = useState<TransportConductor[]>(MOCK_TRANSPORT_CONDUCTORS);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Modals state
  const [selectedConductor, setSelectedConductor] = useState<TransportConductor | null>(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Handlers
  const handleView = (conductor: TransportConductor) => {
    setSelectedConductor(conductor);
    setIsProfileOpen(true);
  };

  const handleEdit = (conductor: TransportConductor) => {
    setSelectedConductor(conductor);
    setIsFormOpen(true);
  };

  const handleAdd = () => {
    setSelectedConductor(null);
    setIsFormOpen(true);
  };

  const handleDelete = (conductorId: string) => {
    if (window.confirm('Are you sure you want to delete this staff member?')) {
      setConductors(prev => prev.filter(c => c.id !== conductorId));
    }
  };

  const handleSave = (data: TransportConductorFormData) => {
    if (selectedConductor) {
      // Edit
      setConductors(prev => prev.map(c => c.id === selectedConductor.id ? { 
        ...c, 
        ...data,
        assignedVehicleNumber: data.assignedVehicleId ? 'MH-12-XX-0000' : null, 
        assignedRouteName: data.assignedVehicleId ? 'Assigned Route' : null
      } : c));
    } else {
      // Add
      const newConductor: TransportConductor = {
        ...data,
        id: `CND-${Math.floor(Math.random() * 1000)}`,
        assignedVehicleNumber: data.assignedVehicleId ? 'MH-12-XX-0000' : null, 
        assignedRouteId: data.assignedVehicleId ? 'RT-XX' : null,
        assignedRouteName: data.assignedVehicleId ? 'Assigned Route' : null,
        documentsComplete: false,
        todaysAttendance: null,
        avatarUrl: null
      };
      setConductors(prev => [newConductor, ...prev]);
    }
  };

  // Filter
  const filteredConductors = conductors.filter(c => 
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.employeeId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const activeCount = conductors.filter(c => c.status === 'ACTIVE').length;
  const presentCount = conductors.filter(c => c.todaysAttendance === 'PRESENT').length;

  return (
    <div className="flex flex-col w-full h-full space-y-6">
      
      {/* Header & Action Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-[var(--bg-card)] p-4 rounded-xl border border-[var(--border)]">
        <div>
          <h1 className="text-[22px] font-bold text-[var(--text-primary)] flex items-center gap-2">
            <span className="text-2xl">🎫</span> Transport Staff
          </h1>
          <p className="text-[14px] text-[var(--text-secondary)] mt-1">
            Manage conductors, attendants, and their assignments.
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[rgba(34,197,94,0.05)] border border-[rgba(34,197,94,0.2)]">
            <Users size={16} className="text-emerald-500" />
            <span className="text-sm font-semibold text-emerald-500">{activeCount} Active</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[rgba(59,130,246,0.05)] border border-[rgba(59,130,246,0.2)] hidden sm:flex">
            <UserCheck size={16} className="text-blue-500" />
            <span className="text-sm font-semibold text-blue-500">{presentCount} Present Today</span>
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
              placeholder="Search name, emp ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[var(--bg-card)] border border-[var(--border)] rounded-md py-2 pl-9 pr-3 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
            />
          </div>
          
          <button className="flex items-center justify-center p-2 rounded-md border border-[var(--border)] bg-[var(--bg-card)] hover:bg-[var(--bg-input)] text-[var(--text-secondary)] transition-colors">
            <Filter size={18} />
          </button>
        </div>

        <button 
          onClick={handleAdd}
          className="flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-[var(--primary)] text-white text-sm font-medium hover:bg-[var(--primary-hover)] transition-colors shadow-lg shadow-[var(--primary-subtle)] whitespace-nowrap"
        >
          <Plus size={16} />
          <span className="hidden sm:inline">Add Staff</span>
        </button>
      </div>

      {/* Main Table Card */}
      <div className="bg-[var(--bg-card)] rounded-xl border border-[var(--border)] overflow-hidden">
        <TransportConductorsTable 
          conductors={filteredConductors} 
          onView={handleView}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
        
        {/* Pagination Footer */}
        <div className="p-4 border-t border-[var(--border)] bg-[var(--bg-page)] flex items-center justify-between text-sm text-[var(--text-secondary)]">
          <div>Showing 1 to {filteredConductors.length} of {conductors.length} entries</div>
          <div className="flex gap-1">
            <button className="px-3 py-1 rounded border border-[var(--border)] hover:bg-[var(--bg-input)] disabled:opacity-50" disabled>Previous</button>
            <button className="px-3 py-1 rounded border border-[var(--primary)] bg-[rgba(250,204,21,0.1)] text-[var(--primary)]">1</button>
            <button className="px-3 py-1 rounded border border-[var(--border)] hover:bg-[var(--bg-input)] disabled:opacity-50" disabled>Next</button>
          </div>
        </div>
      </div>

      {/* Modals */}
      <TransportConductorsProfileModal 
        isOpen={isProfileOpen}
        conductor={selectedConductor}
        onClose={() => setIsProfileOpen(false)}
      />
      
      <TransportConductorsFormModal 
        isOpen={isFormOpen}
        conductor={selectedConductor}
        onClose={() => setIsFormOpen(false)}
        onSave={handleSave}
      />
      
    </div>
  );
}
