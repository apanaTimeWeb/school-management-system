"use client";

import React, { useState } from 'react';
import { Search, Filter, Plus, Users, ShieldAlert } from 'lucide-react';
import TransportDriversTable from './TransportDriversTable';
import TransportDriversProfileModal from './TransportDriversProfileModal';
import TransportDriversFormModal from './TransportDriversFormModal';
import { MOCK_TRANSPORT_DRIVERS } from '../transport_drivers_constants/transport_drivers.constants';
import type { TransportDriver, TransportDriverFormData } from '../transport_drivers_types/transport_drivers.types';

// RESPONSIBILITY: Main orchestrator for Drivers module

export default function TransportDriversMain() {
  const [drivers, setDrivers] = useState<TransportDriver[]>(MOCK_TRANSPORT_DRIVERS);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Modals state
  const [selectedDriver, setSelectedDriver] = useState<TransportDriver | null>(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Handlers
  const handleView = (driver: TransportDriver) => {
    setSelectedDriver(driver);
    setIsProfileOpen(true);
  };

  const handleEdit = (driver: TransportDriver) => {
    setSelectedDriver(driver);
    setIsFormOpen(true);
  };

  const handleAdd = () => {
    setSelectedDriver(null);
    setIsFormOpen(true);
  };

  const handleDelete = (driverId: string) => {
    if (window.confirm('Are you sure you want to delete this driver?')) {
      setDrivers(prev => prev.filter(d => d.id !== driverId));
    }
  };

  const handleSave = (data: TransportDriverFormData) => {
    if (selectedDriver) {
      // Edit
      setDrivers(prev => prev.map(d => d.id === selectedDriver.id ? { 
        ...d, 
        ...data,
        assignedVehicleNumber: data.assignedVehicleId ? 'MH-12-XX-0000' : null, 
        assignedRouteName: data.assignedVehicleId ? 'Assigned Route' : null
      } : d));
    } else {
      // Add
      const newDriver: TransportDriver = {
        ...data,
        id: `DRV-${Math.floor(Math.random() * 1000)}`,
        assignedVehicleNumber: data.assignedVehicleId ? 'MH-12-XX-0000' : null, 
        assignedRouteId: data.assignedVehicleId ? 'RT-XX' : null,
        assignedRouteName: data.assignedVehicleId ? 'Assigned Route' : null,
        documentsComplete: false,
        avatarUrl: null
      };
      setDrivers(prev => [newDriver, ...prev]);
    }
  };

  // Filter
  const filteredDrivers = drivers.filter(d => 
    d.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    d.employeeId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    d.licenseNumber.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const activeCount = drivers.filter(d => d.status === 'ACTIVE').length;
  const leaveCount = drivers.filter(d => d.status === 'ON_LEAVE').length;

  return (
    <div className="flex flex-col w-full h-full space-y-6">
      
      {/* Header & Action Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-[var(--bg-card)] p-4 rounded-xl border border-[var(--border)]">
        <div>
          <h1 className="text-[22px] font-bold text-[var(--text-primary)] flex items-center gap-2">
            <span className="text-2xl">👨‍✈️</span> Driver Management
          </h1>
          <p className="text-[14px] text-[var(--text-secondary)] mt-1">
            Manage transport staff, licenses, and route assignments.
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[rgba(34,197,94,0.05)] border border-[rgba(34,197,94,0.2)]">
            <Users size={16} className="text-emerald-500" />
            <span className="text-sm font-semibold text-emerald-500">{activeCount} Active</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[rgba(59,130,246,0.05)] border border-[rgba(59,130,246,0.2)] hidden sm:flex">
            <ShieldAlert size={16} className="text-blue-500" />
            <span className="text-sm font-semibold text-blue-500">{leaveCount} On Leave</span>
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
              placeholder="Search driver name, ID, license..."
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
          <span className="hidden sm:inline">Add Driver</span>
        </button>
      </div>

      {/* Main Table Card */}
      <div className="bg-[var(--bg-card)] rounded-xl border border-[var(--border)] overflow-hidden">
        <TransportDriversTable 
          drivers={filteredDrivers} 
          onView={handleView}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
        
        {/* Pagination Footer */}
        <div className="p-4 border-t border-[var(--border)] bg-[var(--bg-page)] flex items-center justify-between text-sm text-[var(--text-secondary)]">
          <div>Showing 1 to {filteredDrivers.length} of {drivers.length} entries</div>
          <div className="flex gap-1">
            <button className="px-3 py-1 rounded border border-[var(--border)] hover:bg-[var(--bg-input)] disabled:opacity-50" disabled>Previous</button>
            <button className="px-3 py-1 rounded border border-[var(--primary)] bg-[rgba(250,204,21,0.1)] text-[var(--primary)]">1</button>
            <button className="px-3 py-1 rounded border border-[var(--border)] hover:bg-[var(--bg-input)] disabled:opacity-50" disabled>Next</button>
          </div>
        </div>
      </div>

      {/* Modals */}
      <TransportDriversProfileModal 
        isOpen={isProfileOpen}
        driver={selectedDriver}
        onClose={() => setIsProfileOpen(false)}
      />
      
      <TransportDriversFormModal 
        isOpen={isFormOpen}
        driver={selectedDriver}
        onClose={() => setIsFormOpen(false)}
        onSave={handleSave}
      />
      
    </div>
  );
}
