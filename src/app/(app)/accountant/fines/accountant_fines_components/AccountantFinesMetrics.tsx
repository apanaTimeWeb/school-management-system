"use client";
import React from "react";
import { AlertCircle, IndianRupee, ShieldX, Clock } from "lucide-react";

export default function AccountantFinesMetrics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="bg-card border border-danger/20 p-4 rounded-xl shadow-sm flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-danger/10 flex items-center justify-center text-danger shrink-0">
          <AlertCircle size={24} />
        </div>
        <div>
          <p className="text-xs font-bold text-text-secondary uppercase tracking-wider">Unpaid Fines</p>
          <h3 className="text-xl font-black text-danger mt-0.5">₹ 2,300 <span className="text-xs text-text-secondary font-semibold ml-1">(2 stu)</span></h3>
        </div>
      </div>

      <div className="bg-card border border-success/20 p-4 rounded-xl shadow-sm flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center text-success shrink-0">
          <IndianRupee size={24} />
        </div>
        <div>
          <p className="text-xs font-bold text-text-secondary uppercase tracking-wider">Fines Collected</p>
          <h3 className="text-xl font-black text-success mt-0.5">₹ 500 <span className="text-xs text-text-secondary font-semibold ml-1">(1 stu)</span></h3>
        </div>
      </div>

      <div className="bg-card border border-info/20 p-4 rounded-xl shadow-sm flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-info/10 flex items-center justify-center text-info shrink-0">
          <ShieldX size={24} />
        </div>
        <div>
          <p className="text-xs font-bold text-text-secondary uppercase tracking-wider">Fines Waived</p>
          <h3 className="text-xl font-black text-info mt-0.5">₹ 1,000 <span className="text-xs text-text-secondary font-semibold ml-1">(1 stu)</span></h3>
        </div>
      </div>

      <div className="bg-card border border-warning/20 p-4 rounded-xl shadow-sm flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-warning/10 flex items-center justify-center text-warning shrink-0">
          <Clock size={24} />
        </div>
        <div>
          <p className="text-xs font-bold text-text-secondary uppercase tracking-wider">Waivers Pending</p>
          <h3 className="text-xl font-black text-warning mt-0.5">₹ 3,000 <span className="text-xs text-text-secondary font-semibold ml-1">(1 stu)</span></h3>
        </div>
      </div>
    </div>
  );
}
