"use client";

import React from 'react';
import { IndianRupee, PieChart, Download } from 'lucide-react';

export default function FinanceReports() {
  const generateReport = () => {
    alert("Financial Ledger Generated! Downloading Excel...");
  };

  return (
    <div className="flex flex-col gap-6 h-full fade-in">
      <div className="flex-1 bg-card border border-border rounded-xl shadow-sm p-6 overflow-y-auto">
        <h2 className="text-xl font-bold text-text-primary border-b border-border pb-4 mb-6 flex items-center gap-2">
          <IndianRupee size={20} className="text-primary"/> Financial Reports (Fees & Expenses)
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <div className="flex flex-col gap-4">
             <div className="bg-success-bg/20 border border-success/30 p-5 rounded-lg flex flex-col gap-4 shadow-sm">
                <h3 className="font-bold text-sm flex items-center gap-2 text-success"><IndianRupee size={16}/> Fee Collection Reports</h3>
                
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-text-secondary uppercase">Report Type</label>
                  <select className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-success">
                    <option>Daily Collection Register</option>
                    <option>Defaulters List (Unpaid Dues)</option>
                    <option>Class-wise Revenue Summary</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-text-secondary uppercase">Date Range (Optional)</label>
                  <div className="flex gap-2">
                    <input type="date" className="flex-1 bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-success" />
                    <input type="date" className="flex-1 bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-success" />
                  </div>
                </div>
                
                <button onClick={generateReport} className="w-full bg-success text-white py-2.5 rounded-lg text-sm font-bold shadow-sm hover:bg-success/90 transition flex items-center justify-center gap-2 mt-2">
                  <Download size={16}/> Download Excel Report
                </button>
             </div>
          </div>

          <div className="flex flex-col gap-4">
             <div className="bg-danger-bg/20 border border-danger/30 p-5 rounded-lg flex flex-col gap-4 shadow-sm h-full">
                <h3 className="font-bold text-sm flex items-center gap-2 text-danger"><PieChart size={16}/> Expense & Purchase Logs</h3>
                
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-text-secondary uppercase">Report Type</label>
                  <select className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-danger">
                    <option>Consolidated Expense Ledger</option>
                    <option>Vendor Payments History</option>
                    <option>Petty Cash Summary</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-text-secondary uppercase">Filter by Month</label>
                  <input type="month" className="w-full bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-danger" />
                </div>
                
                <button onClick={generateReport} className="w-full bg-danger text-white py-2.5 rounded-lg text-sm font-bold shadow-sm hover:bg-danger/90 transition flex items-center justify-center gap-2 mt-auto">
                  <Download size={16}/> Download PDF Report
                </button>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
}
