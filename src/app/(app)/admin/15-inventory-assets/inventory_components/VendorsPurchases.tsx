"use client";

import React from 'react';
import { Store, Receipt, BarChart2 } from 'lucide-react';

export default function VendorsPurchases() {
  return (
    <div className="flex flex-col gap-6 h-full fade-in">
      <div className="flex-1 bg-card border border-border rounded-xl shadow-sm p-6 overflow-y-auto">
        <h2 className="text-xl font-bold text-text-primary border-b border-border pb-4 mb-6 flex items-center gap-2">
          <Store size={20} className="text-primary"/> Vendors & Purchase Records
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <div className="flex flex-col gap-4">
             <h3 className="font-bold text-sm text-text-secondary uppercase">Approved Vendors</h3>
             <div className="bg-bg-page border border-border p-4 rounded-lg flex items-center justify-between shadow-sm">
                <div>
                  <h4 className="font-bold text-sm">ABC Stationery Suppliers</h4>
                  <p className="text-xs text-text-secondary font-semibold">Contact: +91 9876543210</p>
                </div>
                <span className="text-[10px] font-bold bg-success-bg text-success px-2 py-0.5 rounded uppercase">Active</span>
             </div>
             <div className="bg-bg-page border border-border p-4 rounded-lg flex items-center justify-between shadow-sm">
                <div>
                  <h4 className="font-bold text-sm">Tech World IT Solutions</h4>
                  <p className="text-xs text-text-secondary font-semibold">Contact: +91 9988776655</p>
                </div>
                <span className="text-[10px] font-bold bg-success-bg text-success px-2 py-0.5 rounded uppercase">Active</span>
             </div>
             <button className="bg-primary/10 text-primary border border-primary/20 py-2 rounded font-bold text-sm mt-2 hover:bg-primary hover:text-white transition">
               + Add New Vendor
             </button>
          </div>

          <div className="flex flex-col gap-4">
             <h3 className="font-bold text-sm text-text-secondary uppercase flex items-center gap-2"><Receipt size={16}/> Recent Purchase Logs</h3>
             <div className="border border-border rounded-lg overflow-hidden">
               <table className="w-full text-left">
                 <thead className="bg-bg-page text-xs text-text-secondary">
                   <tr>
                     <th className="p-3 font-bold border-b border-border">Invoice #</th>
                     <th className="p-3 font-bold border-b border-border">Vendor</th>
                     <th className="p-3 font-bold border-b border-border">Amount</th>
                   </tr>
                 </thead>
                 <tbody className="text-sm font-semibold">
                   <tr>
                     <td className="p-3 border-b border-border text-primary">INV-2026-01</td>
                     <td className="p-3 border-b border-border">ABC Stationery</td>
                     <td className="p-3 border-b border-border">₹12,500</td>
                   </tr>
                   <tr>
                     <td className="p-3 border-b border-border text-primary">INV-2026-02</td>
                     <td className="p-3 border-b border-border">Tech World IT</td>
                     <td className="p-3 border-b border-border">₹55,000</td>
                   </tr>
                 </tbody>
               </table>
             </div>
             
             <div className="mt-4 bg-info-bg/30 border border-info/30 p-4 rounded-lg flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-sm text-info">Generate Stock Reports</h4>
                  <p className="text-[10px] text-text-secondary mt-1">Download monthly consumption and asset valuation reports.</p>
                </div>
                <button className="bg-info text-white px-3 py-1.5 rounded text-xs font-bold shadow-sm hover:bg-info/90 flex items-center gap-1">
                  <BarChart2 size={14}/> Download PDF
                </button>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
}
