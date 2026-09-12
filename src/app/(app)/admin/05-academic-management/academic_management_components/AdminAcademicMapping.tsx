"use client";

import React from 'react';
import { Network, GraduationCap, UserCog, Briefcase } from 'lucide-react';

export default function AdminAcademicMapping() {
  const mappingItems = [
    { title: "Class-Subject Mapping", icon: Network, color: "text-warning", bg: "bg-warning/10", desc: "Assign subjects to specific grades and sections" },
    { title: "Teacher-Subject Mapping", icon: GraduationCap, color: "text-success", bg: "bg-success/10", desc: "Allocate subject faculties to classes" },
    { title: "Class Teacher Assignment", icon: UserCog, color: "text-info", bg: "bg-info/10", desc: "Assign primary teachers to sections" },
    { title: "HOD Assignment", icon: Briefcase, color: "text-primary", bg: "bg-primary/10", desc: "Designate Heads of Departments" }
  ];

  return (
    <section className="bg-card border border-border rounded-xl shadow-sm overflow-hidden mt-8">
      
      <div className="bg-warning/5 border-b border-border p-4">
        <h2 className="text-lg font-bold text-text-primary">Academic Assignments & Mapping</h2>
        <p className="text-sm text-text-secondary mt-1">Manage relationships between classes, subjects, and teaching faculty.</p>
      </div>

      <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {mappingItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="border border-border rounded-lg p-5 hover:border-warning transition cursor-pointer group bg-bg-page flex flex-col h-full shadow-sm hover:shadow-md">
              <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto ${item.bg}`}>
                <Icon size={28} className={`${item.color} group-hover:scale-110 transition-transform`} />
              </div>
              <h3 className="text-center text-sm font-bold text-text-primary group-hover:text-warning transition-colors">{item.title}</h3>
              <p className="text-center text-xs text-text-secondary mt-2 flex-1">{item.desc}</p>
              
              <button className="mt-4 w-full border border-border text-xs font-bold py-2 rounded text-text-secondary group-hover:border-warning group-hover:bg-warning group-hover:text-white transition">
                Manage
              </button>
            </div>
          );
        })}
      </div>

    </section>
  );
}
