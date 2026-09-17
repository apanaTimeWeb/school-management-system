"use client";

import React from 'react';
import { Edit, Fuel, Calendar, Activity, AlertTriangle, MapPin } from 'lucide-react';
import type { TransportFuelLog } from '../transport_fuel_management_types/transport_fuel_management.types';
import { FUEL_TYPE_COLORS } from '../transport_fuel_management_constants/transport_fuel_management.constants';

// RESPONSIBILITY: Renders the fuel records data table

interface TransportFuelManagementTableProps {
  records: TransportFuelLog[];
  onView: (record: TransportFuelLog) => void;
  onEdit: (record: TransportFuelLog) => void;
}

export default function TransportFuelManagementTable({ records, onView, onEdit }: TransportFuelManagementTableProps) {
  
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 2 }).format(amount);
  };

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-[rgba(250,204,21,0.05)] border-b border-[var(--border)]">
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider">Vehicle & Date</th>
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider">Fuel Details</th>
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider text-right">Cost</th>
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider text-center">Odo & Mileage</th>
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider">Alerts</th>
            <th className="py-3 px-4 text-[12px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {records.length > 0 ? (
            records.map((record) => {
              const typeConfig = FUEL_TYPE_COLORS[record.fuelType] || FUEL_TYPE_COLORS.DIESEL;
              const isSuspicious = record.isSuspicious;

              return (
                <tr 
                  key={record.id} 
                  onClick={() => onView(record)}
                  className={`border-b border-[var(--border)] hover:bg-[rgba(250,204,21,0.05)] motion-safe:transition-colors cursor-pointer group ${isSuspicious ? 'bg-[rgba(239,68,68,0.02)]' : ''}`}
                >
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[rgba(250,204,21,0.1)] border border-[rgba(250,204,21,0.2)] flex items-center justify-center text-[var(--primary)] flex-shrink-0">
                        <Fuel size={14} />
                      </div>
                      <div className="flex flex-col justify-center min-w-0">
                        <div className="text-sm font-bold text-[var(--text-primary)] truncate">{record.vehicleNumber}</div>
                        <div className="text-[10px] text-[var(--text-secondary)] mt-0.5 flex items-center gap-1">
                          <Calendar size={10} /> {record.date}
                        </div>
                      </div>
                    </div>
                  </td>
                  
                  <td className="py-3 px-4">
                    <div className="flex flex-col gap-1">
                       <span 
                        className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border w-max"
                        style={{ backgroundColor: typeConfig.bg, color: typeConfig.text, borderColor: typeConfig.text + '30' }}
                      >
                        {typeConfig.label}
                      </span>
                      <span className="text-xs font-medium text-[var(--text-primary)] mt-0.5">
                        {record.quantityLiters} L <span className="text-[10px] text-[var(--text-secondary)] opacity-70">@ {formatCurrency(record.ratePerLiter)}/L</span>
                      </span>
                    </div>
                  </td>

                  <td className="py-3 px-4 text-right">
                    <span className="text-sm font-bold text-[var(--text-primary)]">{formatCurrency(record.totalCost)}</span>
                  </td>

                  <td className="py-3 px-4">
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-xs font-medium text-[var(--text-primary)] font-mono">{record.odometerReading} km</span>
                      {record.mileageKmpl ? (
                         <span className={`text-[10px] font-bold px-1.5 rounded ${isSuspicious ? 'bg-red-500/10 text-red-500' : 'text-emerald-500 bg-emerald-500/10'}`}>
                           {record.mileageKmpl.toFixed(1)} km/L
                         </span>
                      ) : (
                         <span className="text-[10px] text-[var(--text-secondary)]">--</span>
                      )}
                    </div>
                  </td>

                  <td className="py-3 px-4">
                    {isSuspicious ? (
                      <span className="inline-flex items-center gap-1.5 px-2 py-1 bg-[rgba(239,68,68,0.1)] border border-[rgba(239,68,68,0.3)] text-red-500 text-[10px] font-bold uppercase tracking-wider rounded">
                        <AlertTriangle size={12} /> Suspicious
                      </span>
                    ) : (
                      <span className="text-[10px] text-[var(--text-secondary)] italic">Normal</span>
                    )}
                  </td>

                  <td className="py-3 px-4 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 motion-safe:transition-opacity">
                      <button 
                        onClick={(e) => { e.stopPropagation(); onEdit(record); }}
                        className="p-1.5 rounded-md hover:bg-[var(--bg-input)] text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors"
                        aria-label="Edit record"
                        title="Edit Record"
                      >
                        <Edit size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={6} className="py-12 text-center">
                <div className="flex flex-col items-center justify-center text-[var(--text-secondary)]">
                  <span className="text-4xl mb-3 opacity-20">⛽</span>
                  <p className="text-sm">No fuel records found for this criteria.</p>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
