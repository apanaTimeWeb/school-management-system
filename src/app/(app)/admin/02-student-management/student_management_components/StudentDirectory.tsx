"use client";

import React, { useState } from 'react';
import { Search, Filter, MoreVertical, Edit, Eye, Trash2, Download } from 'lucide-react';

const mockStudents = [
  { id: 'STU001', name: 'Aarav Patel', class: 'X - A', rollNo: '12', parent: 'Rajesh Patel', phone: '+91 9876543210', status: 'Active' },
  { id: 'STU002', name: 'Priya Sharma', class: 'IX - B', rollNo: '24', parent: 'Sanjay Sharma', phone: '+91 9876543211', status: 'Active' },
  { id: 'STU003', name: 'Rahul Verma', class: 'XI - Sci', rollNo: '05', parent: 'Amit Verma', phone: '+91 9876543212', status: 'Inactive' },
  { id: 'STU004', name: 'Sneha Gupta', class: 'VIII - C', rollNo: '31', parent: 'Vikram Gupta', phone: '+91 9876543213', status: 'Active' },
  { id: 'STU005', name: 'Karan Singh', class: 'XII - Com', rollNo: '18', parent: 'Jaswinder Singh', phone: '+91 9876543214', status: 'Active' },
];

export default function StudentDirectory() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="bg-card border border-border rounded-xl shadow-sm flex flex-col fade-in">
      {/* Toolbar */}
      <div className="p-4 border-b border-border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" size={18} />
          <input 
            type="text" 
            placeholder="Search by name, ID or phone..." 
            className="w-full pl-10 pr-4 py-2 bg-bg-page border border-border rounded-md text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
          <button className="flex items-center gap-2 px-4 py-2 bg-bg-page border border-border rounded-md text-sm font-semibold hover:bg-border/50 transition flex-1 sm:flex-none justify-center">
            <Filter size={16} /> Filters
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-secondary text-white rounded-md text-sm font-semibold hover:bg-secondary-hover transition flex-1 sm:flex-none justify-center">
            <Download size={16} /> Export
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-bg-page/50 border-b border-border">
              <th className="p-4 text-xs font-bold text-text-secondary uppercase tracking-wider">Student Info</th>
              <th className="p-4 text-xs font-bold text-text-secondary uppercase tracking-wider">Class & Roll</th>
              <th className="p-4 text-xs font-bold text-text-secondary uppercase tracking-wider">Parent/Guardian</th>
              <th className="p-4 text-xs font-bold text-text-secondary uppercase tracking-wider">Contact</th>
              <th className="p-4 text-xs font-bold text-text-secondary uppercase tracking-wider">Status</th>
              <th className="p-4 text-xs font-bold text-text-secondary uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {mockStudents.map((student) => (
              <tr key={student.id} className="border-b border-border/50 hover:bg-bg-page/30 transition">
                <td className="p-4">
                  <div className="flex flex-col">
                    <span className="font-bold text-text-primary">{student.name}</span>
                    <span className="text-xs text-text-secondary">{student.id}</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex flex-col">
                    <span className="font-semibold text-text-primary">{student.class}</span>
                    <span className="text-xs text-text-secondary">Roll: {student.rollNo}</span>
                  </div>
                </td>
                <td className="p-4 text-sm font-medium text-text-primary">{student.parent}</td>
                <td className="p-4 text-sm text-text-secondary">{student.phone}</td>
                <td className="p-4">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                    student.status === 'Active' ? 'bg-success-bg text-success' : 'bg-danger-bg text-danger'
                  }`}>
                    {student.status}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button className="p-1.5 text-text-secondary hover:text-primary hover:bg-primary-subtle rounded transition" title="View Profile">
                      <Eye size={18} />
                    </button>
                    <button className="p-1.5 text-text-secondary hover:text-info hover:bg-info-bg rounded transition" title="Edit">
                      <Edit size={18} />
                    </button>
                    <button className="p-1.5 text-text-secondary hover:text-danger hover:bg-danger-bg rounded transition" title="Archive/Delete">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Pagination */}
      <div className="p-4 border-t border-border flex items-center justify-between text-sm text-text-secondary">
        <span>Showing 1 to 5 of 245 entries</span>
        <div className="flex gap-1">
          <button className="px-3 py-1 border border-border rounded-md hover:bg-bg-page disabled:opacity-50" disabled>Prev</button>
          <button className="px-3 py-1 border border-primary bg-primary text-white rounded-md">1</button>
          <button className="px-3 py-1 border border-border rounded-md hover:bg-bg-page">2</button>
          <button className="px-3 py-1 border border-border rounded-md hover:bg-bg-page">3</button>
          <button className="px-3 py-1 border border-border rounded-md hover:bg-bg-page">Next</button>
        </div>
      </div>
    </div>
  );
}
