"use client";

import React from 'react';
import { BarChart2, TrendingDown, PieChart } from 'lucide-react';

export default function ExpenseReports() {
  return (
    <div className="flex flex-col gap-6 h-full fade-in">
      <div className="flex-1 bg-card border border-border rounded-xl shadow-sm p-6 overflow-y-auto">
        <h2 className="text-xl font-bold text-text-primary border-b border-border pb-4 mb-6 flex items-center gap-2">
          <BarChart2 size={20} className="text-primary"/> Purchase & Expense Analytics
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-bg-page border border-border p-5 rounded-lg flex flex-col justify-center">
            <span className="text-xs font-bold text-text-secondary uppercase mb-1">Total Purchases (This Month)</span>
            <span className="text-3xl font-black text-primary">₹ 3,45,000</span>
          </div>
          <div className="bg-bg-page border border-border p-5 rounded-lg flex flex-col justify-center">
            <span className="text-xs font-bold text-text-secondary uppercase mb-1">Total Expenses (This Month)</span>
            <span className="text-3xl font-black text-warning">₹ 42,500</span>
          </div>
          <div className="bg-bg-page border border-border p-5 rounded-lg flex flex-col justify-center">
            <span className="text-xs font-bold text-text-secondary uppercase mb-1">Pending Payments</span>
            <span className="text-3xl font-black text-danger">₹ 1,10,000</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           <div className="border border-border rounded-lg p-5">
             <h3 className="font-bold text-sm mb-4 flex items-center gap-2"><PieChart size={16}/> Expenses by Category</h3>
             
             <div className="flex flex-col gap-3">
               {/* Simulated Chart Bars */}
               <div>
                 <div className="flex justify-between text-xs font-bold mb-1"><span>Repairs & Maintenance</span> <span>45%</span></div>
                 <div className="w-full bg-bg-page rounded-full h-2"><div className="bg-primary h-2 rounded-full" style={{width: '45%'}}></div></div>
               </div>
               <div>
                 <div className="flex justify-between text-xs font-bold mb-1"><span>Travel / Fuel</span> <span>30%</span></div>
                 <div className="w-full bg-bg-page rounded-full h-2"><div className="bg-info h-2 rounded-full" style={{width: '30%'}}></div></div>
               </div>
               <div>
                 <div className="flex justify-between text-xs font-bold mb-1"><span>Office Refreshments</span> <span>25%</span></div>
                 <div className="w-full bg-bg-page rounded-full h-2"><div className="bg-warning h-2 rounded-full" style={{width: '25%'}}></div></div>
               </div>
             </div>
           </div>

           <div className="border border-border rounded-lg p-5 flex flex-col justify-center items-center text-center bg-bg-page/50">
             <TrendingDown size={48} className="text-text-secondary mb-3 opacity-50"/>
             <h3 className="font-bold text-sm">Download Detailed Ledgers</h3>
             <p className="text-xs text-text-secondary font-medium mt-2 max-w-xs">Generate Excel or PDF reports for all purchases, vendor payments, and daily expenses for accounting purposes.</p>
             <div className="flex gap-2 mt-4">
               <button className="bg-card border border-border text-xs font-bold px-4 py-2 rounded shadow-sm hover:border-primary">Excel (CSV)</button>
               <button className="bg-card border border-border text-xs font-bold px-4 py-2 rounded shadow-sm hover:border-primary">PDF Report</button>
             </div>
           </div>
        </div>

      </div>
    </div>
  );
}
