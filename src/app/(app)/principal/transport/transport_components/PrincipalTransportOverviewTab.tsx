"use client";
import React, { useEffect, useState } from 'react';
import { PrincipalTransportRoute } from '../transport_types/PrincipalTransport.types';
import { fetchPrincipalRoutes } from '../transport_api/PrincipalTransportApi';
import { Bus, MapPin, Users, Phone, Settings, Activity, Wrench } from 'lucide-react';
import { usePrincipalTransportStore } from '../transport_store/usePrincipalTransportStore';
import clsx from 'clsx';

export default function PrincipalTransportOverviewTab() {
  const [routes, setRoutes] = useState<PrincipalTransportRoute[]>([]);
  const [loading, setLoading] = useState(true);
  const { setSelectedRoute } = usePrincipalTransportStore();

  useEffect(() => {
    let isMounted = true;
    fetchPrincipalRoutes().then(data => {
      if (isMounted) {
        setRoutes(data);
        setLoading(false);
      }
    });
    return () => { isMounted = false; };
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => <div key={i} className="h-48 bg-skeleton-base animate-pulse rounded-xl" />)}
      </div>
    );
  }

  const activeRoutes = routes.filter(r => r.status === 'Active').length;
  const totalStudents = routes.reduce((acc, curr) => acc + curr.totalStudentsAllocated, 0);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-card border border-border p-5 rounded-xl shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0"><MapPin size={24}/></div>
          <div>
            <p className="text-[12px] text-text-secondary font-bold mb-0.5">Total Routes</p>
            <h3 className="text-[20px] font-bold text-text-primary">{routes.length}</h3>
          </div>
        </div>
        <div className="bg-card border border-border p-5 rounded-xl shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center text-success shrink-0"><Activity size={24}/></div>
          <div>
            <p className="text-[12px] text-text-secondary font-bold mb-0.5">Active Vehicles</p>
            <h3 className="text-[20px] font-bold text-text-primary">{activeRoutes} / {routes.length}</h3>
          </div>
        </div>
        <div className="bg-card border border-border p-5 rounded-xl shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-info/10 flex items-center justify-center text-info shrink-0"><Users size={24}/></div>
          <div>
            <p className="text-[12px] text-text-secondary font-bold mb-0.5">Students Availing Transport</p>
            <h3 className="text-[20px] font-bold text-text-primary">{totalStudents.toLocaleString()}</h3>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {routes.map((route) => (
          <div key={route.id} className="bg-card border border-border rounded-xl p-5 shadow-sm hover:border-primary/50 transition-colors flex flex-col h-full">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-[15px] font-bold text-text-primary leading-tight mb-1">{route.routeName}</h3>
                <p className="text-[12px] font-mono text-text-secondary bg-black/20 inline-block px-1.5 rounded">{route.vehicleNumber}</p>
              </div>
              <span className={clsx("shrink-0 ml-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold border", 
                route.status === 'Active' ? 'bg-success/10 text-success border-success/30' :
                route.status === 'Maintenance' ? 'bg-warning/10 text-warning border-warning/30' :
                'bg-danger/10 text-danger border-danger/30'
              )}>
                {route.status === 'Active' && <Activity size={10}/>}
                {route.status === 'Maintenance' && <Wrench size={10}/>}
                {route.status}
              </span>
            </div>

            <div className="space-y-3 flex-1">
              <div className="flex items-center justify-between text-[13px]">
                <span className="text-text-secondary">Driver:</span>
                <span className="font-bold text-text-primary">{route.driverName}</span>
              </div>
              <div className="flex items-center justify-between text-[13px]">
                <span className="text-text-secondary">Contact:</span>
                <span className="font-bold text-text-primary flex items-center gap-1.5"><Phone size={12}/> {route.driverContact}</span>
              </div>
              
              <div className="pt-3 border-t border-border mt-3">
                <div className="flex justify-between items-center text-[12px] mb-1.5">
                  <span className="text-text-secondary">Capacity Utilization</span>
                  <span className="font-bold text-text-primary">{route.totalStudentsAllocated} / {route.capacity}</span>
                </div>
                <div className="w-full bg-input rounded-full h-1.5 overflow-hidden">
                  <div className={clsx("h-full transition-all", 
                    (route.totalStudentsAllocated / route.capacity) > 0.9 ? 'bg-danger' : 
                    (route.totalStudentsAllocated / route.capacity) > 0.7 ? 'bg-warning' : 'bg-primary'
                  )} style={{ width: `${(route.totalStudentsAllocated / route.capacity) * 100}%` }} />
                </div>
              </div>
            </div>

            <button 
              onClick={() => setSelectedRoute(route)}
              className="w-full mt-4 py-2 rounded-md bg-page hover:bg-white/5 border border-border text-text-primary text-[12px] font-bold transition-colors flex items-center justify-center gap-2"
            >
              <MapPin size={14}/> View Route & Stops
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
