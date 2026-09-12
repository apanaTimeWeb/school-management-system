"use client";

import React from 'react';
import { CreditCard, Hash, IdCard, BarChart2 } from 'lucide-react';

export default function AdminAdmissionFinanceReports() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      
      {/* 13. Admission Fee */}
      <section className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
        <div className="bg-success/5 border-b border-border p-4 flex items-center gap-2">
          <CreditCard className="text-success" size={20} />
          <h2 className="text-lg font-bold text-text-primary">Admission Fee</h2>
        </div>
        <div className="p-6 flex flex-col gap-4">
          <p className="text-sm text-text-secondary">Manage initial fee collection for approved admissions.</p>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-text-secondary">Select Approved Student</label>
            <select className="bg-input border border-border rounded-md px-3 py-2 text-sm focus:border-success outline-none">
              <option>Ananya Singh - Grade 5</option>
            </select>
          </div>
          <button className="w-full bg-success text-white px-4 py-2 rounded-md text-sm font-bold hover:bg-success-hover">Collect Fee</button>
        </div>
      </section>

      {/* 14. Admission Number Generation */}
      <section className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
        <div className="bg-primary/5 border-b border-border p-4 flex items-center gap-2">
          <Hash className="text-primary" size={20} />
          <h2 className="text-lg font-bold text-text-primary">Admission Number Generation</h2>
        </div>
        <div className="p-6 flex flex-col gap-4">
          <p className="text-sm text-text-secondary">Auto-generate and assign official school admission numbers.</p>
          <div className="p-4 border border-dashed border-border rounded flex items-center justify-between">
            <span className="text-sm font-semibold text-text-primary">Next Series:</span>
            <span className="text-lg font-bold text-text-primary tracking-widest">ADM/2026/0014</span>
          </div>
          <button className="w-full border border-primary text-primary px-4 py-2 rounded-md text-sm font-bold hover:bg-primary hover:text-white transition">Generate Numbers</button>
        </div>
      </section>

      {/* 15. Enrollment */}
      <section className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
        <div className="bg-secondary/5 border-b border-border p-4 flex items-center gap-2">
          <IdCard className="text-secondary" size={20} />
          <h2 className="text-lg font-bold text-text-primary">Enrollment</h2>
        </div>
        <div className="p-6 flex flex-col gap-4">
          <p className="text-sm text-text-secondary">Finalize student enrollment and generate ID cards.</p>
          <div className="flex items-center gap-4 border border-border rounded-lg p-3">
             <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary font-bold">AS</div>
             <div>
               <h3 className="text-sm font-bold text-text-primary">Ananya Singh</h3>
               <p className="text-xs text-text-secondary">Fee Paid • Approved</p>
             </div>
          </div>
          <button className="w-full bg-secondary text-white px-4 py-2 rounded-md text-sm font-bold hover:bg-secondary-hover">Complete Enrollment</button>
        </div>
      </section>

      {/* 16. Admission Reports */}
      <section className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
        <div className="bg-info/5 border-b border-border p-4 flex items-center gap-2">
          <BarChart2 className="text-info" size={20} />
          <h2 className="text-lg font-bold text-text-primary">Admission Reports</h2>
        </div>
        <div className="p-6 flex flex-col gap-4">
          <p className="text-sm text-text-secondary">Generate analytical reports on admission campaigns.</p>
          <div className="grid grid-cols-2 gap-2">
             <button className="p-2 border border-border rounded text-xs font-semibold text-text-secondary hover:border-info hover:text-info">Conversion Rate</button>
             <button className="p-2 border border-border rounded text-xs font-semibold text-text-secondary hover:border-info hover:text-info">Source Analysis</button>
             <button className="p-2 border border-border rounded text-xs font-semibold text-text-secondary hover:border-info hover:text-info">Demographics</button>
             <button className="p-2 border border-border rounded text-xs font-semibold text-text-secondary hover:border-info hover:text-info">Fee Collection</button>
          </div>
          <button className="w-full bg-info text-white mt-2 px-4 py-2 rounded-md text-sm font-bold hover:bg-info-hover">View Full Reports</button>
        </div>
      </section>

    </div>
  );
}
