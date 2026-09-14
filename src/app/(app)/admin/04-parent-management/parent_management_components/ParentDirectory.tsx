"use client";

import React, { useState } from 'react';
import { Search, Filter, Eye, Lock, Mail, Phone, Edit, MessageSquare } from 'lucide-react';
import clsx from 'clsx';

const mockParents = [
  { id: 'PAR001', father: 'Rajesh Patel', mother: 'Meena Patel', phone: '9876543210', email: 'rajesh.p@example.com', children: 2, status: 'Active' },
  { id: 'PAR002', father: 'Amit Sharma', mother: 'Priya Sharma', phone: '9876543211', email: 'amit.s@example.com', children: 1, status: 'Active' },
  { id: 'PAR003', father: 'Vikram Singh', mother: 'Sunita Singh', phone: '9876543212', email: 'vikram.s@example.com', children: 3, status: 'Inactive' },
];

export default function ParentDirectory() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="bg-card border border-border rounded-xl shadow-sm flex flex-col h-full fade-in min-h-[500px]">
      {/* Toolbar */}
      <div className="p-4 border-b border-border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-bg-page/30 rounded-t-xl">
        <h2 className="text-lg font-bold text-text-primary">Parent / Guardian Directory</h2>
        <div className="flex gap-2 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" size={16} />
            <input 
              type="text" 
              placeholder="Search by name, phone, or child..." 
              className="w-full pl-9 pr-4 py-2 bg-bg-input border border-border rounded-md text-sm outline-none focus:border-primary"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="px-4 py-2 bg-bg-page border border-border rounded-md text-sm font-semibold flex items-center gap-2 hover:bg-border/50">
            <Filter size={16}/> Filters
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="flex-1 overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-bg-page border-b border-border">
              <th className="p-4 text-xs font-bold text-text-secondary uppercase">Parent / Guardian Names</th>
              <th className="p-4 text-xs font-bold text-text-secondary uppercase">Contact Details</th>
              <th className="p-4 text-xs font-bold text-text-secondary uppercase">Wards / Children</th>
              <th className="p-4 text-xs font-bold text-text-secondary uppercase">App Access</th>
              <th className="p-4 text-xs font-bold text-text-secondary uppercase text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {mockParents.map(parent => (
              <tr key={parent.id} className="border-b border-border/50 hover:bg-bg-page/30 transition">
                <td className="p-4">
                  <div className="flex flex-col">
                    <span className="font-bold text-sm text-text-primary">{parent.father} / {parent.mother}</span>
                    <span className="text-xs text-text-secondary mt-0.5">ID: {parent.id}</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex flex-col gap-1 text-sm text-text-secondary">
                    <span className="flex items-center gap-1.5"><Phone size={14} className="text-success"/> {parent.phone}</span>
                    <span className="flex items-center gap-1.5"><Mail size={14} className="text-info"/> {parent.email}</span>
                  </div>
                </td>
                <td className="p-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary font-bold text-xs rounded-full border border-primary/20">
                    {parent.children} Enrolled
                  </span>
                </td>
                <td className="p-4">
                  <span className={clsx("px-2.5 py-1 rounded text-xs font-bold", parent.status === 'Active' ? 'bg-success-bg text-success' : 'bg-danger-bg text-danger')}>
                    {parent.status}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button className="p-1.5 text-text-secondary hover:text-primary hover:bg-primary/10 rounded transition" title="View Full Profile"><Eye size={18}/></button>
                    <button className="p-1.5 text-text-secondary hover:text-info hover:bg-info/10 rounded transition" title="Send Message/Notification"><MessageSquare size={18}/></button>
                    <button className="p-1.5 text-text-secondary hover:text-warning hover:bg-warning/10 rounded transition" title="Reset Portal Password"><Lock size={18}/></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Pagination */}
      <div className="p-4 border-t border-border flex items-center justify-between text-sm text-text-secondary bg-bg-page/30 rounded-b-xl">
        <span>Showing 1 to 3 of 850 Parents</span>
        <div className="flex gap-1">
          <button className="px-3 py-1 border border-border rounded-md hover:bg-bg-page disabled:opacity-50" disabled>Prev</button>
          <button className="px-3 py-1 border border-primary bg-primary text-black rounded-md">1</button>
          <button className="px-3 py-1 border border-border rounded-md hover:bg-bg-page">2</button>
          <button className="px-3 py-1 border border-border rounded-md hover:bg-bg-page">Next</button>
        </div>
      </div>
    </div>
  );
}
