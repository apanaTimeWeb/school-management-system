"use client";

import React from 'react';
import { Calendar, Layers, Split, Book, Home, Zap, Building2, Plus } from 'lucide-react';

export default function AdminAcademicSetup() {
  const setupItems = [
    { title: "Academic Session", icon: Calendar, color: "text-primary", bg: "bg-primary/10", desc: "Manage academic years and terms" },
    { title: "Classes", icon: Layers, color: "text-info", bg: "bg-info/10", desc: "Configure grade levels" },
    { title: "Sections", icon: Split, color: "text-warning", bg: "bg-warning/10", desc: "Manage class divisions (A, B, C...)" },
    { title: "Subjects", icon: Book, color: "text-success", bg: "bg-success/10", desc: "Core and elective subjects" },
    { title: "Houses", icon: Home, color: "text-secondary", bg: "bg-secondary/10", desc: "Student houses for activities" },
    { title: "Streams", icon: Zap, color: "text-primary", bg: "bg-primary/10", desc: "Science, Commerce, Arts etc." },
    { title: "Departments", icon: Building2, color: "text-info", bg: "bg-info/10", desc: "Academic faculty departments" }
  ];

  return (
    <section className="bg-card border border-border rounded-xl shadow-sm overflow-hidden mt-8">
      
      <div className="bg-primary/5 border-b border-border p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-text-primary">Academic Foundation Setup</h2>
          <p className="text-sm text-text-secondary mt-1">Configure the core structural blocks of your institution's academics.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-md text-sm font-bold hover:bg-primary-hover transition">
          <Plus size={16} /> Global Academic Settings
        </button>
      </div>

      <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {setupItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="border border-border rounded-lg p-5 hover:border-primary transition cursor-pointer group bg-bg-page flex flex-col h-full shadow-sm hover:shadow-md">
              <div className="flex items-center gap-3 mb-3 border-b border-border pb-3">
                <div className={`p-2 rounded-lg ${item.bg}`}>
                  <Icon size={24} className={`${item.color} group-hover:scale-110 transition-transform`} />
                </div>
                <h3 className="text-sm font-bold text-text-primary group-hover:text-primary transition-colors">{item.title}</h3>
              </div>
              <p className="text-xs text-text-secondary flex-1">{item.desc}</p>
              
              <button className="mt-4 w-full border border-border text-xs font-bold py-2 rounded text-text-secondary group-hover:border-primary group-hover:bg-primary group-hover:text-white transition">
                Configure
              </button>
            </div>
          );
        })}
      </div>

    </section>
  );
}
