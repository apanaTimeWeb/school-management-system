"use client";
import React, { useEffect, useState } from 'react';
import { PrincipalParentRecord } from '../parents_types/PrincipalParents.types';
import { fetchPrincipalParents } from '../parents_api/PrincipalParentsApi';
import { Search, Filter, Phone, Mail, AlertCircle } from 'lucide-react';
import { usePrincipalParentsStore } from '../parents_store/usePrincipalParentsStore';

export default function PrincipalParentsDirectoryTab() {
  const [parents, setParents] = useState<PrincipalParentRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const { setSelectedParent } = usePrincipalParentsStore();

  useEffect(() => {
    let isMounted = true;
    fetchPrincipalParents().then(data => {
      if (isMounted) {
        setParents(data);
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
          <h2 className="text-[18px] font-bold text-text-primary">Parent Directory</h2>
          <p className="text-[13px] text-text-secondary">View parent details and their linked students.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="flex items-center gap-2 bg-input border border-border rounded-md px-3 py-1.5 focus-within:border-primary transition-colors">
            <Search size={14} className="text-text-secondary" />
            <input 
              type="text" 
              placeholder="Search by name, student..." 
              className="bg-transparent border-none outline-none text-[13px] text-text-primary w-full sm:w-48 placeholder:text-text-secondary/50"
            />
          </div>
          <button className="flex items-center justify-center gap-2 px-4 py-1.5 bg-page hover:bg-white/5 border border-border rounded-md text-[13px] font-bold text-text-primary transition-colors">
            <Filter size={14} /> Filter
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[1100px]">
          <thead>
            <tr className="bg-primary/5 border-b border-border text-[12px] font-semibold text-text-secondary uppercase tracking-wider">
              <th className="p-4 w-64">Parent Details</th>
              <th className="p-4 w-64">Contact Info</th>
              <th className="p-4">Linked Students</th>
              <th className="p-4 w-32 text-center">Status</th>
              <th className="p-4 w-32 text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {parents.map((parent) => (
              <tr key={parent.id} className="border-b border-border/50 hover:bg-white/5 transition-colors group">
                <td className="p-4">
                  <p className="text-[14px] font-bold text-text-primary">{parent.primaryContactName}</p>
                  <p className="text-[12px] text-text-secondary mt-0.5">ID: {parent.id}</p>
                  <p className="text-[11px] text-text-secondary/70 mt-1 truncate max-w-[200px]">{parent.address}</p>
                </td>
                <td className="p-4">
                  <div className="space-y-1">
                    <p className="text-[13px] text-text-primary flex items-center gap-2">
                      <Phone size={14} className="text-info" /> {parent.contactNumber}
                    </p>
                    <p className="text-[13px] text-text-secondary flex items-center gap-2">
                      <Mail size={14} className="text-warning" /> {parent.email}
                    </p>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex flex-wrap gap-2">
                    {parent.children.map((child, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded bg-page border border-border text-[12px] font-medium text-text-primary shadow-sm">
                        {child.studentName} <span className="text-text-secondary ml-1">({child.classAndSection})</span>
                      </span>
                    ))}
                  </div>
                </td>
                <td className="p-4 text-center">
                  {parent.isImportantCase ? (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-danger/10 border border-danger/20 text-danger" title="Has severe complaints or recurring issues">
                      <AlertCircle size={14}/> Important Case
                    </span>
                  ) : (
                    <span className="text-[12px] text-text-secondary italic">Normal</span>
                  )}
                </td>
                <td className="p-4 text-right">
                  <button 
                    onClick={() => setSelectedParent(parent)}
                    className="px-4 py-1.5 rounded bg-primary/10 hover:bg-primary border border-primary/30 hover:border-primary text-[12px] font-bold text-primary hover:text-black transition-colors"
                  >
                    View Profile
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
