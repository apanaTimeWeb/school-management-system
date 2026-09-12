"use client";

import React from 'react';
import { Users, Search, Link as LinkIcon, Phone } from 'lucide-react';

export default function AdminParentListHub() {
  return (
    <div className="flex flex-col gap-6 mt-8">
      
      {/* Parent List & Contact Details */}
      <section className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
        <div className="bg-primary/5 border-b border-border p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <h2 className="text-lg font-bold text-text-primary flex items-center gap-2">
            <Users className="text-primary" size={20} />
            Parent List
          </h2>
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-2.5 text-text-secondary" size={16} />
            <input type="text" placeholder="Search parent..." className="w-full pl-9 pr-3 py-2 bg-input border border-border rounded-md text-sm focus:border-primary outline-none" />
          </div>
        </div>
        <div className="overflow-x-auto p-4">
          <table className="w-full text-left text-sm">
            <thead className="bg-bg-page border-y border-border text-text-secondary uppercase text-[10px] tracking-wider">
              <tr>
                <th className="py-3 px-4 font-semibold">Parent Name</th>
                <th className="py-3 px-4 font-semibold">Contact Details</th>
                <th className="py-3 px-4 font-semibold">Associated Children</th>
                <th className="py-3 px-4 font-semibold text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr className="hover:bg-bg-page transition-colors">
                <td className="py-3 px-4 font-bold text-primary cursor-pointer hover:underline">Mr. Rajiv Sharma</td>
                <td className="py-3 px-4 text-text-secondary flex items-center gap-2"><Phone size={14} /> +91 9876543210</td>
                <td className="py-3 px-4"><span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-bold">2 Wards</span></td>
                <td className="py-3 px-4 text-right">
                  <button className="text-primary font-semibold text-xs hover:underline">View Parent Profile</button>
                </td>
              </tr>
              <tr className="hover:bg-bg-page transition-colors">
                <td className="py-3 px-4 font-bold text-primary cursor-pointer hover:underline">Mrs. Sunita Verma</td>
                <td className="py-3 px-4 text-text-secondary flex items-center gap-2"><Phone size={14} /> +91 9123456789</td>
                <td className="py-3 px-4"><span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-bold">1 Ward</span></td>
                <td className="py-3 px-4 text-right">
                  <button className="text-primary font-semibold text-xs hover:underline">View Parent Profile</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Multiple Children & Guardian Mapping */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <section className="bg-card border border-border rounded-xl shadow-sm p-6 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-info/10 rounded-lg text-info"><Users size={24} /></div>
            <div>
              <h2 className="text-lg font-bold text-text-primary">Multiple Children</h2>
              <p className="text-xs text-text-secondary">Link siblings to a single parent account</p>
            </div>
          </div>
          <div className="flex flex-col gap-1.5 mt-2">
            <label className="text-sm font-semibold text-text-secondary">Primary Parent ID</label>
            <input type="text" placeholder="e.g. PAR202611" className="bg-input border border-border rounded-md px-3 py-2 text-sm focus:border-info outline-none" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-text-secondary">Sibling Student ID</label>
            <input type="text" placeholder="e.g. STU202688" className="bg-input border border-border rounded-md px-3 py-2 text-sm focus:border-info outline-none" />
          </div>
          <button className="w-full mt-auto bg-info text-white px-4 py-2 rounded-md text-sm font-bold hover:bg-info/90 transition">
            Link Child Profile
          </button>
        </section>

        <section className="bg-card border border-border rounded-xl shadow-sm p-6 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-warning/10 rounded-lg text-warning"><LinkIcon size={24} /></div>
            <div>
              <h2 className="text-lg font-bold text-text-primary">Guardian Mapping</h2>
              <p className="text-xs text-text-secondary">Map alternative guardians to a student</p>
            </div>
          </div>
          <div className="flex flex-col gap-1.5 mt-2">
            <label className="text-sm font-semibold text-text-secondary">Student ID</label>
            <input type="text" placeholder="e.g. STU202688" className="bg-input border border-border rounded-md px-3 py-2 text-sm focus:border-warning outline-none" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-text-secondary">Guardian Relationship</label>
            <select className="bg-input border border-border rounded-md px-3 py-2 text-sm focus:border-warning outline-none">
              <option>Uncle</option><option>Aunt</option><option>Grandparent</option><option>Local Guardian</option>
            </select>
          </div>
          <button className="w-full mt-auto bg-warning text-white px-4 py-2 rounded-md text-sm font-bold hover:bg-warning/90 transition">
            Map Guardian
          </button>
        </section>
      </div>

    </div>
  );
}
