"use client";

import React from 'react';
import { Bus, Book, Package, Download } from 'lucide-react';

export default function OperationsReports() {
  const generateReport = () => {
    alert("Operations Report Exported Successfully!");
  };

  return (
    <div className="flex flex-col gap-6 h-full fade-in">
      <div className="flex-1 bg-card border border-border rounded-xl shadow-sm p-6 overflow-y-auto">
        <h2 className="text-xl font-bold text-text-primary border-b border-border pb-4 mb-6 flex items-center gap-2">
           Operations & Infrastructure Reports
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Library Reports */}
          <div className="bg-bg-page border border-border p-5 rounded-lg flex flex-col gap-4 shadow-sm">
             <h3 className="font-bold text-sm flex items-center gap-2 text-info"><Book size={16}/> Library Reports</h3>
             <p className="text-xs text-text-secondary font-semibold h-10">Export book catalogs, circulation logs, and overdue fine details.</p>
             <select className="bg-bg-input border border-border rounded-md px-3 py-2 text-xs outline-none focus:border-info mt-auto">
               <option>Catalog / Inventory List</option>
               <option>Currently Issued Books</option>
               <option>Fine Collection Ledger</option>
             </select>
             <button onClick={generateReport} className="w-full bg-info text-white py-2 rounded-md text-xs font-bold shadow-sm hover:bg-info/90 transition flex items-center justify-center gap-1">
               <Download size={14}/> Download
             </button>
          </div>

          {/* Transport Reports */}
          <div className="bg-bg-page border border-border p-5 rounded-lg flex flex-col gap-4 shadow-sm">
             <h3 className="font-bold text-sm flex items-center gap-2 text-warning"><Bus size={16}/> Transport Reports</h3>
             <p className="text-xs text-text-secondary font-semibold h-10">Route allocations, vehicle fuel logs, and fee collection for transport.</p>
             <select className="bg-bg-input border border-border rounded-md px-3 py-2 text-xs outline-none focus:border-warning mt-auto">
               <option>Student Route Allocation</option>
               <option>Vehicle Maintenance Logs</option>
               <option>Transport Fee Dues</option>
             </select>
             <button onClick={generateReport} className="w-full bg-warning text-white py-2 rounded-md text-xs font-bold shadow-sm hover:bg-warning/90 transition flex items-center justify-center gap-1">
               <Download size={14}/> Download
             </button>
          </div>

          {/* Inventory Reports */}
          <div className="bg-bg-page border border-border p-5 rounded-lg flex flex-col gap-4 shadow-sm">
             <h3 className="font-bold text-sm flex items-center gap-2 text-danger"><Package size={16}/> Inventory Reports</h3>
             <p className="text-xs text-text-secondary font-semibold h-10">Current stock levels, asset register, and consumption analytics.</p>
             <select className="bg-bg-input border border-border rounded-md px-3 py-2 text-xs outline-none focus:border-danger mt-auto">
               <option>Low Stock Alerts</option>
               <option>Fixed Asset Register</option>
               <option>Stock Issuance Logs</option>
             </select>
             <button onClick={generateReport} className="w-full bg-danger text-white py-2 rounded-md text-xs font-bold shadow-sm hover:bg-danger/90 transition flex items-center justify-center gap-1">
               <Download size={14}/> Download
             </button>
          </div>

        </div>
      </div>
    </div>
  );
}
