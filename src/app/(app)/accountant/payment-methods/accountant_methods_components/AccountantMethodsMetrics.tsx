"use client";
import React from "react";
import { Globe, Building2, CheckCircle2, Settings } from "lucide-react";

export default function AccountantMethodsMetrics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="bg-card border border-info/20 p-4 rounded-xl shadow-sm flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-info/10 flex items-center justify-center text-info shrink-0">
          <Globe size={24} />
        </div>
        <div>
          <p className="text-xs font-bold text-text-secondary uppercase tracking-wider">Online Collections</p>
          <h3 className="text-xl font-black text-info mt-0.5">₹ 8,50,000</h3>
        </div>
      </div>

      <div className="bg-card border border-warning/20 p-4 rounded-xl shadow-sm flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-warning/10 flex items-center justify-center text-warning shrink-0">
          <Building2 size={24} />
        </div>
        <div>
          <p className="text-xs font-bold text-text-secondary uppercase tracking-wider">Offline Collections</p>
          <h3 className="text-xl font-black text-warning mt-0.5">₹ 11,95,000</h3>
        </div>
      </div>

      <div className="bg-card border border-success/20 p-4 rounded-xl shadow-sm flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center text-success shrink-0">
          <CheckCircle2 size={24} />
        </div>
        <div>
          <p className="text-xs font-bold text-text-secondary uppercase tracking-wider">Active Methods</p>
          <h3 className="text-xl font-black text-success mt-0.5">5 <span className="text-xs font-semibold text-text-secondary">/ 7</span></h3>
        </div>
      </div>

      <div className="bg-card border border-border p-4 rounded-xl shadow-sm flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
          <Settings size={24} />
        </div>
        <div>
          <p className="text-xs font-bold text-text-secondary uppercase tracking-wider">Under Maint.</p>
          <h3 className="text-xl font-black text-text-primary mt-0.5">1</h3>
        </div>
      </div>
    </div>
  );
}
