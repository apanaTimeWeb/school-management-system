"use client";

import React from 'react';
import { UserPlus, Hash, IdCard, UserCircle } from 'lucide-react';

export default function AdminStudentRegistrationProfile() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      
      {/* Student Registration */}
      <section className="bg-card border border-border rounded-xl shadow-sm overflow-hidden flex flex-col">
        <div className="bg-info/5 border-b border-border p-4 flex items-center gap-2">
          <UserPlus className="text-info" size={20} />
          <h2 className="text-lg font-bold text-text-primary">Student Registration</h2>
        </div>
        <div className="p-6 flex-1 flex flex-col gap-4">
          <p className="text-sm text-text-secondary">Register a new student directly into the management system.</p>
          <div className="grid grid-cols-2 gap-4">
             <div className="flex flex-col gap-1.5">
               <label className="text-sm font-semibold text-text-secondary">First Name</label>
               <input type="text" className="bg-input border border-border rounded-md px-3 py-2 text-sm focus:border-info outline-none" />
             </div>
             <div className="flex flex-col gap-1.5">
               <label className="text-sm font-semibold text-text-secondary">Last Name</label>
               <input type="text" className="bg-input border border-border rounded-md px-3 py-2 text-sm focus:border-info outline-none" />
             </div>
          </div>
          <button className="w-full mt-auto bg-info text-white px-4 py-2 rounded-md text-sm font-bold hover:bg-info-hover">Start Registration</button>
        </div>
      </section>

      {/* Student Profile Overview */}
      <section className="bg-card border border-border rounded-xl shadow-sm overflow-hidden flex flex-col">
        <div className="bg-primary/5 border-b border-border p-4 flex items-center gap-2">
          <UserCircle className="text-primary" size={20} />
          <h2 className="text-lg font-bold text-text-primary">Student Profile</h2>
        </div>
        <div className="p-6 flex-1 flex flex-col gap-4">
          <div className="flex items-center gap-4 border border-border rounded-lg p-4 bg-bg-page">
             <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary text-xl font-bold">RS</div>
             <div className="flex flex-col gap-1">
               <h3 className="text-base font-bold text-text-primary">Rahul Sharma</h3>
               <span className="text-xs font-semibold text-text-secondary flex items-center gap-2">
                 <Hash size={12} /> Admission Number: <span className="text-text-primary font-bold">ADM/2026/001</span>
               </span>
               <span className="text-xs font-semibold text-text-secondary flex items-center gap-2">
                 <IdCard size={12} /> Student ID: <span className="text-text-primary font-bold">STU2026001</span>
               </span>
             </div>
          </div>
          <button className="w-full mt-auto border border-primary text-primary px-4 py-2 rounded-md text-sm font-bold hover:bg-primary hover:text-white transition">View Full Profile</button>
        </div>
      </section>

    </div>
  );
}
