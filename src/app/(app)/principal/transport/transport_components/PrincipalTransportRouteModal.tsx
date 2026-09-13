"use client";
import React from 'react';
import { X, Map, MapPin, Bus, User, Phone, Wrench, Activity, Users } from 'lucide-react';
import { usePrincipalTransportStore } from '../transport_store/usePrincipalTransportStore';
import clsx from 'clsx';

export default function PrincipalTransportRouteModal() {
  const { selectedRoute, setSelectedRoute } = usePrincipalTransportStore();

  if (!selectedRoute) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 md:p-0">
      <div className="w-full max-w-2xl bg-bg-main border border-border rounded-xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]">
        
        <div className="px-5 py-4 bg-card border-b border-border flex items-center justify-between shrink-0">
          <h2 className="text-[16px] font-bold text-text-primary flex items-center gap-2">
            <Map className="text-primary" size={18} /> 
            Route Details
          </h2>
          <button 
            onClick={() => setSelectedRoute(null)}
            className="p-1.5 rounded-full bg-page hover:bg-white/10 text-text-secondary hover:text-white transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        <div className="p-6 overflow-y-auto custom-scrollbar flex-1 space-y-6">
          
          <div className="flex items-start justify-between gap-4 border-b border-border pb-4">
            <div>
              <h3 className="text-[20px] font-bold text-text-primary mb-1">{selectedRoute.routeName}</h3>
              <p className="text-[14px] font-mono text-text-secondary bg-black/20 inline-block px-2 py-0.5 rounded flex items-center gap-2">
                <Bus size={14}/> {selectedRoute.vehicleNumber}
              </p>
            </div>
            <span className={clsx("inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-bold border", 
                selectedRoute.status === 'Active' ? 'bg-success/10 text-success border-success/30' :
                selectedRoute.status === 'Maintenance' ? 'bg-warning/10 text-warning border-warning/30' :
                'bg-danger/10 text-danger border-danger/30'
            )}>
              {selectedRoute.status === 'Active' && <Activity size={12}/>}
              {selectedRoute.status === 'Maintenance' && <Wrench size={12}/>}
              {selectedRoute.status}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-card border border-border p-4 rounded-lg flex flex-col gap-1">
              <h4 className="text-[12px] text-text-secondary font-bold mb-1 flex items-center gap-1.5"><User size={14}/> Driver Info</h4>
              <p className="text-[15px] font-bold text-text-primary">{selectedRoute.driverName}</p>
              <p className="text-[13px] text-text-secondary flex items-center gap-1.5"><Phone size={12}/> {selectedRoute.driverContact}</p>
              {selectedRoute.assistantName && (
                <p className="text-[12px] text-text-secondary mt-1 pt-1 border-t border-border">Assistant: {selectedRoute.assistantName}</p>
              )}
            </div>

            <div className="bg-card border border-border p-4 rounded-lg flex flex-col gap-1">
              <h4 className="text-[12px] text-text-secondary font-bold mb-1 flex items-center gap-1.5"><Users size={14}/> Allocation Status</h4>
              <p className="text-[24px] font-bold text-text-primary">{selectedRoute.totalStudentsAllocated} <span className="text-[14px] text-text-secondary font-normal">/ {selectedRoute.capacity} Seats</span></p>
              <div className="w-full bg-input rounded-full h-1.5 mt-2 overflow-hidden">
                <div className={clsx("h-full transition-all", 
                  (selectedRoute.totalStudentsAllocated / selectedRoute.capacity) > 0.9 ? 'bg-danger' : 
                  (selectedRoute.totalStudentsAllocated / selectedRoute.capacity) > 0.7 ? 'bg-warning' : 'bg-primary'
                )} style={{ width: `${(selectedRoute.totalStudentsAllocated / selectedRoute.capacity) * 100}%` }} />
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-5">
            <h4 className="text-[14px] font-bold text-text-primary mb-4 flex items-center gap-2"><MapPin size={16} className="text-warning"/> Route Stops Sequence</h4>
            
            <div className="space-y-4 relative before:absolute before:inset-0 before:ml-[11px] before:translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
              {selectedRoute.stops.map((stop, idx) => (
                <div key={idx} className="relative flex items-center group">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full border-4 border-bg-main bg-primary text-black shrink-0 shadow z-10"></div>
                  <div className="ml-4 p-3 rounded-lg border border-border bg-page shadow-sm flex-1">
                    <p className="text-[14px] font-bold text-text-primary">{stop}</p>
                    <p className="text-[11px] text-text-secondary mt-0.5">Stop {idx + 1}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        <div className="px-5 py-4 border-t border-border bg-card flex justify-end shrink-0 gap-3">
          <button
            onClick={() => setSelectedRoute(null)}
            className="px-6 py-2 rounded-md bg-page hover:bg-white/5 border border-border text-text-primary text-[13px] font-bold transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
