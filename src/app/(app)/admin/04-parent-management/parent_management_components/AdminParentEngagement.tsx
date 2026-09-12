"use client";

import React from 'react';
import { KeyRound, FileText, History, BellRing, MessageSquareWarning } from 'lucide-react';

export default function AdminParentEngagement() {
  const engagementFeatures = [
    { title: "Login Management", icon: KeyRound, color: "text-primary", bg: "bg-primary/10", desc: "Manage parent portal access credentials" },
    { title: "Parent Documents", icon: FileText, color: "text-success", bg: "bg-success/10", desc: "View KYC and guardian identification docs" },
    { title: "Communication History", icon: History, color: "text-info", bg: "bg-info/10", desc: "Logs of all SMS, Emails, and Calls" },
    { title: "Parent Notifications", icon: BellRing, color: "text-warning", bg: "bg-warning/10", desc: "Send targeted alerts to parent app" },
    { title: "Parent Complaints", icon: MessageSquareWarning, color: "text-danger", bg: "bg-danger/10", desc: "Track and resolve guardian grievances" }
  ];

  return (
    <section className="bg-card border border-border rounded-xl shadow-sm p-6 mt-8">
      
      <div className="border-b border-border pb-4 mb-6">
        <h2 className="text-xl font-bold text-text-primary">Parent Engagement & Support</h2>
        <p className="text-sm text-text-secondary mt-1">Manage portal access, communication logs, documents, and grievances.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {engagementFeatures.map((feature, idx) => {
          const Icon = feature.icon;
          return (
            <div key={idx} className="border border-border rounded-lg p-4 hover:border-primary transition cursor-pointer group bg-bg-page flex flex-col h-full">
              <div className={`p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-3 ${feature.bg}`}>
                <Icon size={24} className={`${feature.color} group-hover:scale-110 transition-transform`} />
              </div>
              <h3 className="text-sm font-bold text-text-primary group-hover:text-primary transition-colors">{feature.title}</h3>
              <p className="text-xs text-text-secondary mt-1 flex-1">{feature.desc}</p>
              
              <button className="mt-4 w-full border border-border text-xs font-semibold py-1.5 rounded text-text-secondary group-hover:border-primary group-hover:bg-primary group-hover:text-white transition">
                Manage
              </button>
            </div>
          );
        })}
      </div>

    </section>
  );
}
