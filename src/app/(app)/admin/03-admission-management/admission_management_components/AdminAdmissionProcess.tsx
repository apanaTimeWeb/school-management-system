"use client";

import React from 'react';
import { CheckCircle, FileCheck, ClipboardList, Mic, ThumbsUp, ThumbsDown, Clock, ShieldCheck } from 'lucide-react';

export default function AdminAdmissionProcess() {
  const processSteps = [
    { title: "Application Verification", icon: CheckCircle, color: "text-primary", bg: "bg-primary/10", count: 42, label: "Pending" },
    { title: "Document Verification", icon: FileCheck, color: "text-warning", bg: "bg-warning/10", count: 18, label: "To Review" },
    { title: "Admission Test", icon: ClipboardList, color: "text-info", bg: "bg-info/10", count: 3, label: "Scheduled" },
    { title: "Interview", icon: Mic, color: "text-secondary", bg: "bg-secondary/10", count: 12, label: "Upcoming" },
    { title: "Selection", icon: ThumbsUp, color: "text-success", bg: "bg-success/10", count: 25, label: "Selected" },
    { title: "Rejection", icon: ThumbsDown, color: "text-danger", bg: "bg-danger/10", count: 8, label: "Rejected" },
    { title: "Waitlist", icon: Clock, color: "text-warning", bg: "bg-warning/10", count: 15, label: "Waiting" },
    { title: "Admission Approval", icon: ShieldCheck, color: "text-primary", bg: "bg-primary/10", count: 5, label: "Requires Sign-off" },
  ];

  return (
    <div className="bg-card border border-border rounded-xl shadow-sm p-6 mt-8">
      
      <div className="border-b border-border pb-4 mb-6">
        <h2 className="text-xl font-bold text-text-primary">Admission Processing Pipeline</h2>
        <p className="text-sm text-text-secondary mt-1">Track and manage student applications through various stages.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {processSteps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div key={idx} className="border border-border rounded-lg p-4 hover:border-primary transition cursor-pointer group bg-bg-page">
              <div className="flex justify-between items-start mb-3">
                <div className={\`p-2 rounded-md \${step.bg}\`}>
                  <Icon size={20} className={\`\${step.color} group-hover:scale-110 transition-transform\`} />
                </div>
                <span className="text-xl font-bold text-text-primary">{step.count}</span>
              </div>
              <h3 className="text-sm font-bold text-text-primary group-hover:text-primary transition-colors">{step.title}</h3>
              <p className="text-xs text-text-secondary mt-1">{step.label}</p>
            </div>
          );
        })}
      </div>

      {/* Embedded Action Area for the selected step */}
      <div className="mt-6 border border-border rounded-lg p-6 bg-primary/5">
        <div className="flex items-center justify-between mb-4">
           <h3 className="text-md font-bold text-text-primary">Application Verification Queue</h3>
           <button className="text-xs font-bold text-primary hover:underline">View All</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-bg-page border-y border-border text-text-secondary uppercase text-[10px] tracking-wider">
              <tr>
                <th className="py-3 px-4 font-semibold">Applicant</th>
                <th className="py-3 px-4 font-semibold">Class</th>
                <th className="py-3 px-4 font-semibold">Date Applied</th>
                <th className="py-3 px-4 font-semibold">Status</th>
                <th className="py-3 px-4 font-semibold text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr className="hover:bg-bg-page transition-colors">
                <td className="py-3 px-4 font-medium text-text-primary">Rahul Sharma</td>
                <td className="py-3 px-4 text-text-secondary">Grade 1</td>
                <td className="py-3 px-4 text-text-secondary">10 Sep 2026</td>
                <td className="py-3 px-4"><span className="px-2 py-1 bg-warning/20 text-warning text-[10px] font-bold rounded">PENDING</span></td>
                <td className="py-3 px-4 text-right">
                  <button className="text-primary font-semibold text-xs hover:underline">Verify</button>
                </td>
              </tr>
              <tr className="hover:bg-bg-page transition-colors">
                <td className="py-3 px-4 font-medium text-text-primary">Ananya Singh</td>
                <td className="py-3 px-4 text-text-secondary">Grade 5</td>
                <td className="py-3 px-4 text-text-secondary">09 Sep 2026</td>
                <td className="py-3 px-4"><span className="px-2 py-1 bg-warning/20 text-warning text-[10px] font-bold rounded">PENDING</span></td>
                <td className="py-3 px-4 text-right">
                  <button className="text-primary font-semibold text-xs hover:underline">Verify</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
