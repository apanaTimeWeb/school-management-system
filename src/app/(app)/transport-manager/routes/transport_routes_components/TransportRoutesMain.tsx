"use client";

import React, { useState } from 'react';
import { Search, Filter, Plus, Route as RouteIcon, AlertTriangle } from 'lucide-react';
import TransportRoutesTable from './TransportRoutesTable';
import TransportRoutesProfileModal from './TransportRoutesProfileModal';
import TransportRoutesFormModal from './TransportRoutesFormModal';
import { MOCK_TRANSPORT_ROUTES } from '../transport_routes_constants/transport_routes.constants';
import type { TransportRoute, TransportRouteFormData } from '../transport_routes_types/transport_routes.types';

// RESPONSIBILITY: Main orchestrator for Routes module

export default function TransportRoutesMain() {
  const [routes, setRoutes] = useState<TransportRoute[]>(MOCK_TRANSPORT_ROUTES);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Modals state
  const [selectedRoute, setSelectedRoute] = useState<TransportRoute | null>(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Handlers
  const handleView = (route: TransportRoute) => {
    setSelectedRoute(route);
    setIsProfileOpen(true);
  };

  const handleEdit = (route: TransportRoute) => {
    setSelectedRoute(route);
    setIsFormOpen(true);
  };

  const handleAdd = () => {
    setSelectedRoute(null);
    setIsFormOpen(true);
  };

  const handleDelete = (routeId: string) => {
    if (window.confirm('Are you sure you want to delete this route?')) {
      setRoutes(prev => prev.filter(r => r.id !== routeId));
    }
  };

  const handleSave = (data: TransportRouteFormData) => {
    if (selectedRoute) {
      // Edit
      setRoutes(prev => prev.map(r => r.id === selectedRoute.id ? { 
        ...r, 
        ...data,
        assignedVehicleNumber: data.assignedVehicleId ? 'MH-12-XX-0000' : null,
        assignedDriverName: data.assignedDriverId ? 'Assigned Driver' : null,
        assignedConductorName: data.assignedConductorId ? 'Assigned Conductor' : null
      } : r));
    } else {
      // Add
      const newRoute: TransportRoute = {
        ...data,
        id: `RT-${Math.floor(Math.random() * 1000)}`,
        assignedVehicleNumber: data.assignedVehicleId ? 'MH-12-XX-0000' : null,
        assignedDriverName: data.assignedDriverId ? 'Assigned Driver' : null,
        assignedConductorName: data.assignedConductorId ? 'Assigned Conductor' : null,
        totalStops: 0,
        studentsAssigned: 0
      };
      setRoutes(prev => [newRoute, ...prev]);
    }
  };

  // Filter
  const filteredRoutes = routes.filter(r => 
    r.routeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    r.routeCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
    r.startingPoint.toLowerCase().includes(searchTerm.toLowerCase()) ||
    r.endingPoint.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const activeCount = routes.filter(r => r.status === 'ACTIVE').length;
  const issuesCount = routes.filter(r => r.status === 'TEMPORARY_SUSPENDED' || r.status === 'UNDER_MAINTENANCE').length;

  return (
    <div className="flex flex-col w-full h-full space-y-6">
      
      {/* Header & Action Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-[var(--bg-card)] p-4 rounded-xl border border-[var(--border)]">
        <div>
          <h1 className="text-[22px] font-bold text-[var(--text-primary)] flex items-center gap-2">
            <span className="text-2xl">🗺️</span> Route Management
          </h1>
          <p className="text-[14px] text-[var(--text-secondary)] mt-1">
            Manage transport routes, distances, and assignments.
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[rgba(34,197,94,0.05)] border border-[rgba(34,197,94,0.2)]">
            <RouteIcon size={16} className="text-emerald-500" />
            <span className="text-sm font-semibold text-emerald-500">{activeCount} Active</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[rgba(239,68,68,0.05)] border border-[rgba(239,68,68,0.2)] hidden sm:flex">
            <AlertTriangle size={16} className="text-red-500" />
            <span className="text-sm font-semibold text-red-500">{issuesCount} Issues</span>
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
              placeholder="Search route name, code, point..."
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
          <span className="hidden sm:inline">Create Route</span>
        </button>
      </div>

      {/* Main Table Card */}
      <div className="bg-[var(--bg-card)] rounded-xl border border-[var(--border)] overflow-hidden">
        <TransportRoutesTable 
          routes={filteredRoutes} 
          onView={handleView}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
        
        {/* Pagination Footer */}
        <div className="p-4 border-t border-[var(--border)] bg-[var(--bg-page)] flex items-center justify-between text-sm text-[var(--text-secondary)]">
          <div>Showing 1 to {filteredRoutes.length} of {routes.length} entries</div>
          <div className="flex gap-1">
            <button className="px-3 py-1 rounded border border-[var(--border)] hover:bg-[var(--bg-input)] disabled:opacity-50" disabled>Previous</button>
            <button className="px-3 py-1 rounded border border-[var(--primary)] bg-[rgba(250,204,21,0.1)] text-[var(--primary)]">1</button>
            <button className="px-3 py-1 rounded border border-[var(--border)] hover:bg-[var(--bg-input)] disabled:opacity-50" disabled>Next</button>
          </div>
        </div>
      </div>

      {/* Modals */}
      <TransportRoutesProfileModal 
        isOpen={isProfileOpen}
        route={selectedRoute}
        onClose={() => setIsProfileOpen(false)}
      />
      
      <TransportRoutesFormModal 
        isOpen={isFormOpen}
        route={selectedRoute}
        onClose={() => setIsFormOpen(false)}
        onSave={handleSave}
      />
      
    </div>
  );
}
