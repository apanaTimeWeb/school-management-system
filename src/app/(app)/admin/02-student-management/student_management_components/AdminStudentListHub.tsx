"use client";

import React from 'react';
import { Users, Search, Download, Upload, Filter } from 'lucide-react';

export default function AdminStudentListHub() {
  return (
    <section className="bg-card border border-border rounded-xl shadow-sm overflow-hidden mt-8">
      
      {/* Header Area */}
      <div className="bg-primary/5 border-b border-border p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h2 className="text-lg font-bold text-text-primary flex items-center gap-2">
          <Users className="text-primary" size={20} />
          Student List & Search
        </h2>
        <div className="flex items-center gap-2">
          {/* Bulk Import/Export */}
          <button className="flex items-center gap-2 px-3 py-1.5 border border-border bg-bg-page rounded-md text-sm font-semibold hover:border-primary transition">
            <Upload size={16} /> Import
          </button>
          <button className="flex items-center gap-2 px-3 py-1.5 border border-border bg-bg-page rounded-md text-sm font-semibold hover:border-primary transition">
            <Download size={16} /> Export
          </button>
        </div>
      </div>

      {/* Student Search/Filters */}
      <div className="p-4 border-b border-border bg-bg-page flex flex-wrap gap-4 items-end">
        <div className="flex flex-col gap-1.5 flex-1 min-w-[200px]">
          <label className="text-xs font-semibold text-text-secondary">Search by Name/ID</label>
          <div className="relative">
            <Search className="absolute left-3 top-2.5 text-text-secondary" size={16} />
            <input type="text" placeholder="e.g. Rahul or ADM/2026/001" className="w-full pl-9 pr-3 py-2 bg-input border border-border rounded-md text-sm focus:border-primary outline-none" />
          </div>
        </div>
        <div className="flex flex-col gap-1.5 min-w-[150px]">
          <label className="text-xs font-semibold text-text-secondary">Class</label>
          <select className="px-3 py-2 bg-input border border-border rounded-md text-sm focus:border-primary outline-none">
            <option>All Classes</option>
            <option>Grade 1</option>
          </select>
        </div>
        <div className="flex flex-col gap-1.5 min-w-[150px]">
          <label className="text-xs font-semibold text-text-secondary">Section</label>
          <select className="px-3 py-2 bg-input border border-border rounded-md text-sm focus:border-primary outline-none">
            <option>All Sections</option>
            <option>A</option>
          </select>
        </div>
        <button className="px-4 py-2 bg-secondary text-white rounded-md text-sm font-bold flex items-center gap-2 hover:bg-secondary-hover">
          <Filter size={16} /> Apply Filters
        </button>
      </div>

      {/* Student List Table */}
      <div className="overflow-x-auto p-4">
        <table className="w-full text-left text-sm">
          <thead className="bg-bg-page border-y border-border text-text-secondary uppercase text-[10px] tracking-wider">
            <tr>
              <th className="py-3 px-4 font-semibold">Student ID</th>
              <th className="py-3 px-4 font-semibold">Name</th>
              <th className="py-3 px-4 font-semibold">Class-Sec</th>
              <th className="py-3 px-4 font-semibold">Parent Name</th>
              <th className="py-3 px-4 font-semibold">Contact</th>
              <th className="py-3 px-4 font-semibold text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr className="hover:bg-bg-page transition-colors">
              <td className="py-3 px-4 font-medium text-text-primary">STU2026001</td>
              <td className="py-3 px-4 font-bold text-primary cursor-pointer hover:underline">Rahul Sharma</td>
              <td className="py-3 px-4 text-text-secondary">Grade 5 - A</td>
              <td className="py-3 px-4 text-text-secondary">Mr. Rajiv Sharma</td>
              <td className="py-3 px-4 text-text-secondary">+91 9876543210</td>
              <td className="py-3 px-4 text-right">
                <button className="text-primary font-semibold text-xs hover:underline">View Profile</button>
              </td>
            </tr>
            <tr className="hover:bg-bg-page transition-colors">
              <td className="py-3 px-4 font-medium text-text-primary">STU2026002</td>
              <td className="py-3 px-4 font-bold text-primary cursor-pointer hover:underline">Ananya Singh</td>
              <td className="py-3 px-4 text-text-secondary">Grade 5 - B</td>
              <td className="py-3 px-4 text-text-secondary">Mr. Anil Singh</td>
              <td className="py-3 px-4 text-text-secondary">+91 9876543211</td>
              <td className="py-3 px-4 text-right">
                <button className="text-primary font-semibold text-xs hover:underline">View Profile</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </section>
  );
}
