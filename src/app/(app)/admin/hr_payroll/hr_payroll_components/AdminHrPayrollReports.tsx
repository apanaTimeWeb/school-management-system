"use client";

import { PieChart, Download } from "lucide-react";

export default function AdminHrPayrollReports() {
  return (
    <div className="motion-safe:animate-in motion-safe:fade-in duration-300">
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-card border border-border rounded-xl p-5 shadow-sm">
          <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Total Payroll Expense (Aug 2024)</p>
          <p className="text-3xl font-bold text-foreground">₹2,45,200</p>
        </div>
        <div className="bg-card border border-border rounded-xl p-5 shadow-sm">
          <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Total Deductions (TDS & PF)</p>
          <p className="text-3xl font-bold text-danger">₹18,400</p>
        </div>
        <div className="bg-card border border-border rounded-xl p-5 shadow-sm">
          <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Processed vs Pending</p>
          <p className="text-3xl font-bold text-success">85% Processed</p>
        </div>
      </div>

      <div className="bg-card border border-border rounded-xl p-6 shadow-sm flex flex-col items-center justify-center min-h-[300px]">
        <div className="w-16 h-16 rounded-full bg-input flex items-center justify-center text-muted-foreground mb-4">
          <PieChart size={24} />
        </div>
        <h3 className="text-lg font-bold text-foreground mb-2">Detailed Reports Generator</h3>
        <p className="text-sm font-medium text-muted-foreground max-w-md text-center mb-6">
          Generate comprehensive payroll summaries, bank transfer sheets, and tax deduction reports for the selected period.
        </p>
        <button className="px-6 py-2 bg-primary text-card font-bold rounded-md hover:bg-yellow-500 transition-all flex items-center gap-2 shadow-sm">
          <Download size={16} /> Export Master Excel
        </button>
      </div>
      
    </div>
  );
}
