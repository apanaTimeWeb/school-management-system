"use client";

import React from 'react';
import { BookOpen, FileText, CalendarDays, Clock, Timer, Briefcase, Palmtree } from 'lucide-react';

export default function AdminAcademicPlanning() {
  const planningItems = [
    { title: "Curriculum", icon: BookOpen, color: "text-primary", bg: "bg-primary/10", desc: "Design and manage academic curriculums" },
    { title: "Syllabus", icon: FileText, color: "text-info", bg: "bg-info/10", desc: "Detailed breakdown of subject syllabus" },
    { title: "Academic Calendar", icon: CalendarDays, color: "text-success", bg: "bg-success/10", desc: "Yearly institutional events and milestones" },
    { title: "Timetable", icon: Clock, color: "text-warning", bg: "bg-warning/10", desc: "Class-wise and teacher-wise schedules" },
    { title: "Periods", icon: Timer, color: "text-secondary", bg: "bg-secondary/10", desc: "Configure daily period timings" },
    { title: "Working Days", icon: Briefcase, color: "text-primary", bg: "bg-primary/10", desc: "Set operational days of the week" },
    { title: "Holidays", icon: Palmtree, color: "text-danger", bg: "bg-danger/10", desc: "Declare institutional holidays" }
  ];

  return (
    <section className="bg-card border border-border rounded-xl shadow-sm overflow-hidden mt-8">
      
      <div className="bg-info/5 border-b border-border p-4">
        <h2 className="text-lg font-bold text-text-primary">Academic Planning & Scheduling</h2>
        <p className="text-sm text-text-secondary mt-1">Plan schedules, curriculums, and yearly academic calendars.</p>
      </div>

      <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {planningItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="border border-border rounded-lg p-5 hover:border-info transition cursor-pointer group bg-bg-page flex flex-col h-full shadow-sm hover:shadow-md">
              <div className="flex items-center gap-3 mb-3 border-b border-border pb-3">
                <div className={`p-2 rounded-lg ${item.bg}`}>
                  <Icon size={24} className={`${item.color} group-hover:scale-110 transition-transform`} />
                </div>
                <h3 className="text-sm font-bold text-text-primary group-hover:text-info transition-colors">{item.title}</h3>
              </div>
              <p className="text-xs text-text-secondary flex-1">{item.desc}</p>
              
              <button className="mt-4 w-full border border-border text-xs font-bold py-2 rounded text-text-secondary group-hover:border-info group-hover:bg-info group-hover:text-white transition">
                Open Planner
              </button>
            </div>
          );
        })}
      </div>

    </section>
  );
}
