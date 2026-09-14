"use client";
import React from "react";
import { AlertCircle, Calendar, Clock, AlertTriangle } from "lucide-react";
import clsx from "clsx";
import { useAccountantDefaultersStore } from "../accountant_defaulters_store/useAccountantDefaultersStore";

export default function AccountantDefaultersAging() {
  const { agingFilter, setAgingFilter } = useAccountantDefaultersStore();

  const handleCardClick = (bucket: string) => {
    // Toggle logic
    setAgingFilter(agingFilter === bucket ? "All" : bucket);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div 
        onClick={() => handleCardClick("1-30")}
        className={clsx(
          "bg-card border p-4 rounded-xl shadow-sm flex items-center gap-4 cursor-pointer transition-all",
          agingFilter === "1-30" ? "border-warning bg-warning/5 ring-1 ring-warning" : "border-border hover:border-warning/50"
        )}
      >
        <div className="w-12 h-12 rounded-full bg-warning/10 flex items-center justify-center text-warning shrink-0">
          <Calendar size={24} />
        </div>
        <div>
          <p className="text-xs font-bold text-text-secondary uppercase tracking-wider">1 - 30 Days Overdue</p>
          <h3 className="text-xl font-black text-warning mt-0.5">₹ 42,000 <span className="text-xs text-text-secondary font-semibold ml-1">(12 stu)</span></h3>
        </div>
      </div>

      <div 
        onClick={() => handleCardClick("31-60")}
        className={clsx(
          "bg-card border p-4 rounded-xl shadow-sm flex items-center gap-4 cursor-pointer transition-all",
          agingFilter === "31-60" ? "border-danger/60 bg-danger/5 ring-1 ring-danger/60" : "border-border hover:border-danger/30"
        )}
      >
        <div className="w-12 h-12 rounded-full bg-danger/10 flex items-center justify-center text-danger/80 shrink-0">
          <Clock size={24} />
        </div>
        <div>
          <p className="text-xs font-bold text-text-secondary uppercase tracking-wider">31 - 60 Days Overdue</p>
          <h3 className="text-xl font-black text-danger/80 mt-0.5">₹ 85,000 <span className="text-xs text-text-secondary font-semibold ml-1">(24 stu)</span></h3>
        </div>
      </div>

      <div 
        onClick={() => handleCardClick("61-90")}
        className={clsx(
          "bg-card border p-4 rounded-xl shadow-sm flex items-center gap-4 cursor-pointer transition-all",
          agingFilter === "61-90" ? "border-danger bg-danger/10 ring-1 ring-danger" : "border-border hover:border-danger/50"
        )}
      >
        <div className="w-12 h-12 rounded-full bg-danger/10 flex items-center justify-center text-danger shrink-0">
          <AlertCircle size={24} />
        </div>
        <div>
          <p className="text-xs font-bold text-text-secondary uppercase tracking-wider">61 - 90 Days Overdue</p>
          <h3 className="text-xl font-black text-danger mt-0.5">₹ 1,15,000 <span className="text-xs text-text-secondary font-semibold ml-1">(30 stu)</span></h3>
        </div>
      </div>

      <div 
        onClick={() => handleCardClick("90+")}
        className={clsx(
          "bg-card border p-4 rounded-xl shadow-sm flex items-center gap-4 cursor-pointer transition-all",
          agingFilter === "90+" ? "border-red-600 bg-red-600/10 ring-1 ring-red-600" : "border-border hover:border-red-600/50"
        )}
      >
        <div className="w-12 h-12 rounded-full bg-red-600/10 flex items-center justify-center text-red-600 shrink-0">
          <AlertTriangle size={24} />
        </div>
        <div>
          <p className="text-xs font-bold text-text-secondary uppercase tracking-wider">&gt; 90 Days Overdue</p>
          <h3 className="text-xl font-black text-red-600 mt-0.5">₹ 2,50,000 <span className="text-xs text-text-secondary font-semibold ml-1">(45 stu)</span></h3>
        </div>
      </div>
    </div>
  );
}
