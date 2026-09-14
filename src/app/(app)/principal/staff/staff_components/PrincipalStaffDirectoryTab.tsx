"use client";
import React, { useEffect, useState } from 'react';
import { PrincipalStaffDirectoryMember } from '../staff_types/PrincipalStaff.types';
import { fetchPrincipalStaffDirectory } from '../staff_api/PrincipalStaffApi';
import { Search, Filter, Eye, UserCircle2 } from 'lucide-react';
import { usePrincipalStaffStore } from '../staff_store/usePrincipalStaffStore';

export default function PrincipalStaffDirectoryTab() {
  const [staffList, setStaffList] = useState<PrincipalStaffDirectoryMember[]>([]);
  const [loading, setLoading] = useState(true);
  const { setSelectedProfileId } = usePrincipalStaffStore();

  useEffect(() => {
    let isMounted = true;
    fetchPrincipalStaffDirectory().then(data => {
      if (isMounted) {
        setStaffList(data);
        setLoading(false);
      }
    });
    return () => { isMounted = false; };
  }, []);

  if (loading) {
    return (
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="space-y-4">
          {[...Array(5)].map((_, i) => <div key={i} className="h-16 bg-skeleton-base animate-pulse rounded" />)}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
      <div className="p-5 border-b border-border flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-[18px] font-bold text-text-primary">Staff Directory</h2>
          <p className="text-[13px] text-text-secondary">View and search for all teaching and non-teaching staff.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="flex items-center gap-2 bg-input border border-border rounded-md px-3 py-1.5 focus-within:border-primary transition-colors">
            <Search size={14} className="text-text-secondary" />
            <input 
              type="text" 
              placeholder="Search staff..." 
              className="bg-transparent border-none outline-none text-[13px] text-text-primary w-full sm:w-48 placeholder:text-text-secondary/50"
            />
          </div>
          <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.dispatchEvent(new CustomEvent('open-coming-soon', { detail: 'Action completed successfully!' })); }} className="flex items-center justify-center gap-2 px-4 py-1.5 bg-page hover:bg-white/5 border border-border rounded-md text-[13px] font-bold text-text-primary transition-colors">
            <Filter size={14} /> Filter
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[900px]">
          <thead>
            <tr className="bg-primary/5 border-b border-border text-[12px] font-semibold text-text-secondary uppercase tracking-wider">
              <th className="p-4 w-64">Staff Name & ID</th>
              <th className="p-4 w-40">Department</th>
              <th className="p-4 w-40">Designation</th>
              <th className="p-4 w-32">Status</th>
              <th className="p-4 w-32">Contact</th>
              <th className="p-4 w-24 text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {staffList.map((staff) => (
              <tr key={staff.id} className="border-b border-border/50 hover:bg-white/5 transition-colors group">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary border border-primary/30">
                      <UserCircle2 size={20} />
                    </div>
                    <div>
                      <p className="text-[14px] font-bold text-text-primary">{staff.name}</p>
                      <p className="text-[12px] text-text-secondary">ID: {staff.employeeId}</p>
                    </div>
                  </div>
                </td>
                <td className="p-4 text-[13px] font-medium text-text-secondary">{staff.department}</td>
                <td className="p-4 text-[13px] font-medium text-text-secondary">{staff.designation}</td>
                <td className="p-4">
                  <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold border ${
                    staff.status === 'Active' ? 'bg-success/20 text-success border-success/30' : 
                    staff.status === 'On Leave' ? 'bg-warning/20 text-warning border-warning/30' :
                    'bg-danger/20 text-danger border-danger/30'
                  }`}>
                    {staff.status}
                  </span>
                </td>
                <td className="p-4 text-[13px] font-medium text-text-secondary">{staff.contact}</td>
                <td className="p-4 text-right">
                  <button 
                    onClick={() => setSelectedProfileId(staff.id)}
                    className="px-3 py-1.5 rounded bg-primary/10 hover:bg-primary border border-primary/30 hover:border-primary text-[12px] font-bold text-primary hover:text-white transition-colors inline-flex items-center gap-1.5"
                  >
                    <Eye size={14} /> Profile
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
