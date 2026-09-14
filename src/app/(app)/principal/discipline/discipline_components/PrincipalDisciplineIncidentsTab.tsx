"use client";
import React, { useEffect, useState } from 'react';
import { PrincipalIncidentRecord } from '../discipline_types/PrincipalDiscipline.types';
import { fetchPrincipalIncidents } from '../discipline_api/PrincipalDisciplineApi';
import { Search, Filter, AlertTriangle, ShieldAlert, BadgeInfo } from 'lucide-react';
import { usePrincipalDisciplineStore } from '../discipline_store/usePrincipalDisciplineStore';

export default function PrincipalDisciplineIncidentsTab() {
  const [incidents, setIncidents] = useState<PrincipalIncidentRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const { setSelectedIncident } = usePrincipalDisciplineStore();

  useEffect(() => {
    let isMounted = true;
    fetchPrincipalIncidents().then(data => {
      if (isMounted) {
        setIncidents(data);
        setLoading(false);
      }
    });
    return () => { isMounted = false; };
  }, []);

  if (loading) {
    return (
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="space-y-4">
          {[...Array(4)].map((_, i) => <div key={i} className="h-20 bg-skeleton-base animate-pulse rounded" />)}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
      <div className="p-5 border-b border-border flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-[18px] font-bold text-text-primary">Incident Records & Warnings</h2>
          <p className="text-[13px] text-text-secondary">View and manage reported disciplinary incidents for students and staff.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="flex items-center gap-2 bg-input border border-border rounded-md px-3 py-1.5 focus-within:border-primary transition-colors">
            <Search size={14} className="text-text-secondary" />
            <input 
              type="text" 
              placeholder="Search by name..." 
              className="bg-transparent border-none outline-none text-[13px] text-text-primary w-full sm:w-48 placeholder:text-text-secondary/50"
            />
          </div>
          <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.dispatchEvent(new CustomEvent('open-coming-soon', { detail: 'Action completed successfully!' })); }} className="flex items-center justify-center gap-2 px-4 py-1.5 bg-page hover:bg-white/5 border border-border rounded-md text-[13px] font-bold text-text-primary transition-colors">
            <Filter size={14} /> Filter
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[1100px]">
          <thead>
            <tr className="bg-primary/5 border-b border-border text-[12px] font-semibold text-text-secondary uppercase tracking-wider">
              <th className="p-4 w-64">Offender Info</th>
              <th className="p-4 w-40">Type & Severity</th>
              <th className="p-4">Incident Details</th>
              <th className="p-4 w-32">Status</th>
              <th className="p-4 w-32 text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {incidents.length === 0 ? (
              <tr>
                <td colSpan={5} className="p-8 text-center text-text-secondary text-[14px]">
                  No incidents found.
                </td>
              </tr>
            ) : incidents.map((inc) => (
              <tr key={inc.id} className="border-b border-border/50 hover:bg-white/5 transition-colors group">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary border border-primary/30 shrink-0">
                      {inc.offenderType === 'Staff' ? <ShieldAlert size={20} /> : <AlertTriangle size={20} />}
                    </div>
                    <div>
                      <p className="text-[14px] font-bold text-text-primary">{inc.offenderName}</p>
                      <p className="text-[12px] text-text-secondary">{inc.offenderType} • {inc.departmentOrClass}</p>
                      <p className="text-[11px] text-text-secondary/70">ID: {inc.offenderId}</p>
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex flex-col gap-1.5 items-start">
                    <span className="text-[13px] font-bold text-info">{inc.incidentType}</span>
                    <span className={`px-2 py-0.5 rounded text-[11px] font-bold border ${
                      inc.severity === 'Critical' ? 'bg-danger/20 text-danger border-danger/30' :
                      inc.severity === 'High' ? 'bg-warning/20 text-warning border-warning/30' :
                      'bg-success/20 text-success border-success/30'
                    }`}>
                      {inc.severity} Severity
                    </span>
                  </div>
                </td>
                <td className="p-4">
                  <p className="text-[13px] text-text-secondary line-clamp-2" title={inc.description}>{inc.description}</p>
                  <p className="text-[11px] font-medium text-text-secondary mt-1">Reported By: <span className="text-text-primary">{inc.reportedBy}</span> on {inc.dateReported}</p>
                </td>
                <td className="p-4">
                  <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold border flex w-fit items-center gap-1.5 ${
                    inc.status === 'Open' ? 'bg-danger/10 text-danger border-danger/20' : 
                    inc.status === 'Under Investigation' ? 'bg-warning/10 text-warning border-warning/20' : 
                    'bg-success/10 text-success border-success/20'
                  }`}>
                    {inc.status}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <button 
                    onClick={() => setSelectedIncident(inc)}
                    className="px-4 py-1.5 rounded bg-primary/10 hover:bg-primary border border-primary/30 hover:border-primary text-[12px] font-bold text-primary hover:text-black transition-colors"
                  >
                    View / Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
