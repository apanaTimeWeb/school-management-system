"use client";

import React from 'react';
import { Activity, ArrowRightLeft, TrendingUp, FileMinus, UserMinus, UserCheck, Archive } from 'lucide-react';

export default function AdminStudentLifecycle() {
  const lifecycleActions = [
    { title: "Student Status", icon: Activity, color: "text-info", bg: "bg-info/10", desc: "Update active/inactive status" },
    { title: "Class/Section Transfer", icon: ArrowRightLeft, color: "text-primary", bg: "bg-primary/10", desc: "Move student across sections" },
    { title: "Student Promotion", icon: TrendingUp, color: "text-success", bg: "bg-success/10", desc: "Promote to next grade" },
    { title: "Student TC", icon: FileMinus, color: "text-warning", bg: "bg-warning/10", desc: "Issue Transfer Certificate" },
    { title: "Student Withdrawal", icon: UserMinus, color: "text-danger", bg: "bg-danger/10", desc: "Process dropout or withdrawal" },
    { title: "Student Re-admission", icon: UserCheck, color: "text-success", bg: "bg-success/10", desc: "Re-admit former students" },
    { title: "Student Archive", icon: Archive, color: "text-secondary", bg: "bg-secondary/10", desc: "Move to historical records" }
  ];

  return (
    <section className="bg-card border border-border rounded-xl shadow-sm p-6 mt-8">
      
      <div className="border-b border-border pb-4 mb-6">
        <h2 className="text-xl font-bold text-text-primary">Student Lifecycle & Actions</h2>
        <p className="text-sm text-text-secondary mt-1">Manage academic progression, transfers, and official documentation.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {lifecycleActions.map((action, idx) => {
          const Icon = action.icon;
          return (
            <div key={idx} className="border border-border rounded-lg p-4 hover:border-primary transition cursor-pointer group bg-bg-page flex flex-col h-full">
              <div className={`p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-3 ${action.bg}`}>
                <Icon size={24} className={`${action.color} group-hover:scale-110 transition-transform`} />
              </div>
              <h3 className="text-sm font-bold text-text-primary group-hover:text-primary transition-colors">{action.title}</h3>
              <p className="text-xs text-text-secondary mt-1 flex-1">{action.desc}</p>
              
              <button className="mt-4 w-full border border-border text-xs font-semibold py-1.5 rounded text-text-secondary group-hover:border-primary group-hover:bg-primary group-hover:text-white transition">
                Initiate Action
              </button>
            </div>
          );
        })}
      </div>

    </section>
  );
}
