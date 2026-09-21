import React from 'react';
import { CheckCircle2, Shield } from 'lucide-react';

export function LandingBenefits() {
  const benefits = [
    "Strict Permission-Based Access Control",
    "Centralized Approval Center for operations",
    "Automated Academic Session Rollovers",
    "Comprehensive Audit Trails & Login History"
  ];

  return (
    <section id="benefits" className="py-24 bg-white px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-primary mb-6">Designed for Scale & Security</h2>
          <p className="text-text-secondary text-lg mb-8 leading-relaxed">
            Unlike traditional school management systems, our ERP separates global configuration from daily operations. 
            With distinct <strong>Super Admin</strong> and <strong>School Admin</strong> roles, your data remains secure, compliant, and perfectly organized.
          </p>
          <ul className="space-y-4">
            {benefits.map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-text-primary font-medium">
                <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center text-success">
                  <CheckCircle2 size={14} />
                </div>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1 bg-primary/5 rounded-3xl p-8 border border-primary/10 relative">
            <div className="bg-bg-card rounded-xl shadow-lg p-6 border border-border">
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-border">
                <div className="flex items-center gap-3">
                  <Shield className="text-primary" />
                  <span className="font-bold text-primary">System Audit Log</span>
                </div>
                <span className="text-xs font-bold text-success bg-success/10 px-2 py-1 rounded">SECURE</span>
              </div>
              <div className="space-y-3">
                <div className="h-4 bg-skeleton-base rounded w-3/4"></div>
                <div className="h-4 bg-skeleton-base rounded w-1/2"></div>
                <div className="h-4 bg-skeleton-base rounded w-5/6"></div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}
