"use client";

import React, from 'react';
import { BookOpen, Users, Phone, MapPin, FileText, School, HeartPulse, Flag, Users2, Home } from 'lucide-react';

export default function AdminStudentDetailedInfo() {
  const tabs = [
    { title: "Academic Details", icon: BookOpen, color: "text-primary" },
    { title: "Parent/Guardian Details", icon: Users, color: "text-secondary" },
    { title: "Contact Details", icon: Phone, color: "text-success" },
    { title: "Address", icon: MapPin, color: "text-warning" },
    { title: "Documents", icon: FileText, color: "text-info" },
    { title: "Previous School Details", icon: School, color: "text-primary" },
    { title: "Medical Information", icon: HeartPulse, color: "text-danger" },
    { title: "Category/Reservation Details", icon: Flag, color: "text-secondary" },
    { title: "Sibling Information", icon: Users2, color: "text-success" },
    { title: "House", icon: Home, color: "text-warning" }
  ];

  return (
    <section className="bg-card border border-border rounded-xl shadow-sm overflow-hidden mt-8">
      <div className="bg-primary/5 border-b border-border p-4">
        <h2 className="text-lg font-bold text-text-primary">Student Detailed Information (Tabs)</h2>
        <p className="text-xs text-text-secondary mt-1">Manage all facets of a student's personal and academic records.</p>
      </div>
      
      <div className="flex flex-col md:flex-row">
        {/* Vertical Tabs Menu */}
        <div className="w-full md:w-64 border-r border-border bg-bg-page/50 flex flex-col p-2 gap-1 h-[400px] overflow-y-auto">
          {tabs.map((tab, idx) => {
            const Icon = tab.icon;
            return (
              <button key={idx} className={\`flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-semibold transition-colors text-left \${idx === 0 ? 'bg-primary/10 text-primary' : 'text-text-secondary hover:bg-border/50 hover:text-text-primary'}\`}>
                <Icon size={16} className={idx === 0 ? "text-primary" : tab.color} />
                <span>{tab.title}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Area */}
        <div className="flex-1 p-6">
          <div className="flex items-center gap-3 border-b border-border pb-4 mb-6">
            <BookOpen className="text-primary" size={24} />
            <h3 className="text-lg font-bold text-text-primary">Academic Details</h3>
          </div>
          <div className="grid grid-cols-2 gap-6">
             <div className="flex flex-col gap-1.5">
               <label className="text-sm font-semibold text-text-secondary">Current Class</label>
               <input type="text" defaultValue="Grade 5" disabled className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary outline-none opacity-70" />
             </div>
             <div className="flex flex-col gap-1.5">
               <label className="text-sm font-semibold text-text-secondary">Current Section</label>
               <input type="text" defaultValue="A" disabled className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary outline-none opacity-70" />
             </div>
             <div className="flex flex-col gap-1.5">
               <label className="text-sm font-semibold text-text-secondary">Roll Number</label>
               <input type="text" defaultValue="42" className="bg-input border border-border rounded-md px-3 py-2 text-sm focus:border-primary outline-none" />
             </div>
             <div className="flex flex-col gap-1.5">
               <label className="text-sm font-semibold text-text-secondary">Academic Session</label>
               <input type="text" defaultValue="2026-2027" disabled className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary outline-none opacity-70" />
             </div>
          </div>
          <div className="mt-8 flex justify-end">
             <button className="bg-primary text-white px-6 py-2 rounded-md text-sm font-bold hover:bg-primary-hover">Save Academic Details</button>
          </div>
        </div>
      </div>
    </section>
  );
}
