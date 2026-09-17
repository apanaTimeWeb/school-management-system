"use client";

import React, { useState } from 'react';
import { Search, Filter, Plus } from 'lucide-react';
import TransportVehiclesTable from './TransportVehiclesTable';
import TransportVehiclesProfileModal from './TransportVehiclesProfileModal';
import TransportVehiclesFormModal from './TransportVehiclesFormModal';
import { MOCK_TRANSPORT_VEHICLES } from '../transport_vehicles_constants/transport_vehicles.constants';
import type { TransportVehicle, TransportVehicleFormData } from '../transport_vehicles_types/transport_vehicles.types';

// RESPONSIBILITY: Main orchestrator for Vehicles module (renders table, handles modals and state)

export default function TransportVehiclesMain() {
  const [vehicles, setVehicles] = useState<TransportVehicle[]>(MOCK_TRANSPORT_VEHICLES);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Modals state
  const [selectedVehicle, setSelectedVehicle] = useState<TransportVehicle | null>(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Handlers
  const handleView = (vehicle: TransportVehicle) => {
    setSelectedVehicle(vehicle);
    setIsProfileOpen(true);
  };

  const handleEdit = (vehicle: TransportVehicle) => {
    setSelectedVehicle(vehicle);
    setIsFormOpen(true);
  };

  const handleAdd = () => {
    setSelectedVehicle(null);
    setIsFormOpen(true);
  };

  const handleDelete = (vehicleId: string) => {
    // In real app, we'd use useConfirm modal here. For now, simple confirm.
    if (window.confirm('Are you sure you want to delete this vehicle?')) {
      setVehicles(prev => prev.filter(v => v.id !== vehicleId));
    }
  };

  const handleSave = (data: TransportVehicleFormData) => {
    if (selectedVehicle) {
      // Edit
      setVehicles(prev => prev.map(v => v.id === selectedVehicle.id ? { ...v, ...data } : v));
    } else {
      // Add
      const newVehicle: TransportVehicle = {
        ...data,
        id: `VEH-${Math.floor(Math.random() * 1000)}`,
        assignedRouteId: null,
        assignedRouteName: null,
        assignedDriverId: null,
        assignedDriverName: null,
        assignedConductorId: null,
        assignedConductorName: null,
        documentsComplete: false
      };
      setVehicles(prev => [newVehicle, ...prev]);
    }
  };

  // Filter
  const filteredVehicles = vehicles.filter(v => 
    v.vehicleNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
    v.registrationNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
    v.model.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col w-full h-full space-y-6">
      
      {/* Header & Action Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-[var(--bg-card)] p-4 rounded-xl border border-[var(--border)]">
        <div>
          <h1 className="text-[22px] font-bold text-[var(--text-primary)] flex items-center gap-2">
            <span className="text-2xl">🚌</span> Vehicles Directory
          </h1>
          <p className="text-[14px] text-[var(--text-secondary)] mt-1">
            Manage all school buses, vans, and their assignments.
          </p>
        </div>
        
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="relative w-full sm:w-64">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]" />
            <input
              type="text"
              placeholder="Search vehicle no, reg..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[var(--bg-input)] border border-[var(--border)] rounded-md py-2 pl-9 pr-3 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
            />
          </div>
          
          <button className="flex items-center justify-center p-2 rounded-md border border-[var(--border)] bg-[var(--bg-page)] hover:bg-[var(--bg-input)] text-[var(--text-secondary)] transition-colors">
            <Filter size={18} />
          </button>
          
          <button 
            onClick={handleAdd}
            className="flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-[var(--primary)] text-white text-sm font-medium hover:bg-[var(--primary-hover)] transition-colors shadow-lg shadow-[var(--primary-subtle)] whitespace-nowrap"
          >
            <Plus size={16} />
            <span className="hidden sm:inline">Add Vehicle</span>
          </button>
        </div>
      </div>

      {/* Main Table Card */}
      <div className="bg-[var(--bg-card)] rounded-xl border border-[var(--border)] overflow-hidden">
        <TransportVehiclesTable 
          vehicles={filteredVehicles} 
          onView={handleView}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
        
        {/* Pagination Footer */}
        <div className="p-4 border-t border-[var(--border)] bg-[var(--bg-page)] flex items-center justify-between text-sm text-[var(--text-secondary)]">
          <div>Showing 1 to {filteredVehicles.length} of {vehicles.length} entries</div>
          <div className="flex gap-1">
            <button className="px-3 py-1 rounded border border-[var(--border)] hover:bg-[var(--bg-input)] disabled:opacity-50" disabled>Previous</button>
            <button className="px-3 py-1 rounded border border-[var(--primary)] bg-[rgba(250,204,21,0.1)] text-[var(--primary)]">1</button>
            <button className="px-3 py-1 rounded border border-[var(--border)] hover:bg-[var(--bg-input)] disabled:opacity-50" disabled>Next</button>
          </div>
        </div>
      </div>

      {/* Modals */}
      <TransportVehiclesProfileModal 
        isOpen={isProfileOpen}
        vehicle={selectedVehicle}
        onClose={() => setIsProfileOpen(false)}
      />
      
      <TransportVehiclesFormModal 
        isOpen={isFormOpen}
        vehicle={selectedVehicle}
        onClose={() => setIsFormOpen(false)}
        onSave={handleSave}
      />
      
    </div>
  );
}
