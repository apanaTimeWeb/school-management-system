"use client";

import React, { useState } from 'react';
import { Search, Filter, MoreVertical, Eye, Play, CheckCircle2, Clock, Route } from 'lucide-react';
import type { TransportTrip } from '../transport_dashboard_types/transport_dashboard.types';

// RESPONSIBILITY: Renders the table of today's trips and their status

interface TransportTripsStatusProps {
  trips: TransportTrip[];
}

export default function TransportTripsStatus({ trips }: TransportTripsStatusProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const getStatusBadge = (status: TransportTrip['status']) => {
    switch (status) {
      case 'COMPLETED':
        return <span className="inline-flex items-center px-2 py-1 rounded-full text-[11px] font-semibold bg-[#064E3B] text-[#22C55E]">✅ Completed</span>;
      case 'IN_PROGRESS':
        return <span className="inline-flex items-center px-2 py-1 rounded-full text-[11px] font-semibold bg-[#451A03] text-[#F59E0B]">⚠️ In Progress</span>;
      case 'PENDING':
        return <span className="inline-flex items-center px-2 py-1 rounded-full text-[11px] font-semibold bg-[#1E3A5F] text-[#3B82F6]">🔵 Pending</span>;
      case 'DELAYED':
        return <span className="inline-flex items-center px-2 py-1 rounded-full text-[11px] font-semibold bg-[#450A0A] text-[#EF4444]">🔴 Delayed</span>;
      case 'CANCELLED':
        return <span className="inline-flex items-center px-2 py-1 rounded-full text-[11px] font-semibold bg-[#1E1E2E] text-[var(--text-secondary)]">Cancelled</span>;
      default:
        return <span className="inline-flex items-center px-2 py-1 rounded-full text-[11px] font-semibold bg-[var(--bg-page)] text-[var(--text-secondary)]">{status}</span>;
    }
  };

  const filteredTrips = trips.filter(trip => 
    trip.routeName.toLowerCase().includes(searchTerm.toLowerCase()) || 
    trip.vehicleNumber.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col bg-[var(--bg-card)] rounded-xl border border-[var(--border)] overflow-hidden h-full">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border-b border-[var(--border)] gap-4">
        <h2 className="text-base font-semibold text-[var(--text-primary)]">Today's Trips</h2>
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <div className="relative w-full sm:w-64">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]" />
            <input
              type="text"
              placeholder="Search route or vehicle..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[var(--bg-input)] border border-[var(--border)] rounded-md py-1.5 pl-9 pr-3 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
            />
          </div>
          <button className="flex items-center justify-center w-8 h-8 rounded-md border border-[var(--border)] bg-[var(--bg-page)] hover:bg-[var(--bg-input)] text-[var(--text-secondary)] transition-colors">
            <Filter size={16} />
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[rgba(250,204,21,0.05)] border-b border-[var(--border)]">
              <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider w-32">Trip ID</th>
              <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider">Route / Vehicle</th>
              <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider">Timing</th>
              <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider">Occupancy</th>
              <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredTrips.length > 0 ? (
              filteredTrips.map((trip) => (
                <tr 
                  key={trip.id} 
                  className="border-b border-[var(--border)] hover:bg-[rgba(250,204,21,0.05)] motion-safe:transition-colors cursor-pointer group"
                >
                  <td className="py-3 px-4 text-sm font-medium text-[var(--text-primary)]">{trip.id}</td>
                  <td className="py-3 px-4">
                    <div className="text-sm font-medium text-[var(--text-primary)] truncate max-w-[200px]">{trip.routeName}</div>
                    <div className="text-xs text-[var(--text-secondary)]">{trip.vehicleNumber} • {trip.driverName}</div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="text-sm text-[var(--text-primary)]">{trip.startTime}</div>
                    <div className="text-xs text-[var(--text-secondary)]">{trip.endTime || '—'}</div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="text-sm text-[var(--text-primary)]">{trip.presentStudents} / {trip.totalStudents}</div>
                    <div className="w-full bg-[var(--bg-page)] rounded-full h-1.5 mt-1">
                      <div 
                        className="bg-[var(--primary)] h-1.5 rounded-full" 
                        style={{ width: `${trip.totalStudents > 0 ? (trip.presentStudents / trip.totalStudents) * 100 : 0}%` }}
                      ></div>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-center">
                    {getStatusBadge(trip.status)}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="py-8 text-center">
                  <div className="flex flex-col items-center justify-center text-[var(--text-secondary)]">
                    <Route size={32} className="mb-2 opacity-50" />
                    <p className="text-sm">No trips found for "{searchTerm}"</p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
