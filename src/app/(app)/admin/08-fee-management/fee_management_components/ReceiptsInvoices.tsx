"use client";

import React, { useState } from 'react';
import { Receipt, History, FileDown, Printer } from 'lucide-react';
import clsx from 'clsx';

export default function ReceiptsInvoices() {
  const [activeTab, setActiveTab] = useState('receipt');
  
  const handlePrint = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget;
    const oldText = btn.innerHTML;
    btn.innerHTML = `<span class="flex items-center gap-2"><Printer size="16"/> Printing...</span>`;
    setTimeout(() => {
      btn.innerHTML = oldText;
    }, 2000);
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 h-full min-h-[500px] fade-in">
      <div className="w-full md:w-64 bg-card border border-border rounded-xl shadow-sm flex flex-col p-2 h-fit shrink-0">
        <button onClick={() => setActiveTab('receipt')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition mb-1", activeTab === 'receipt' ? 'bg-primary/10 text-primary' : 'text-text-secondary hover:bg-bg-page')}>
          <Receipt size={18} /> Receipt & Invoice View
        </button>
        <button onClick={() => setActiveTab('history')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition", activeTab === 'history' ? 'bg-info/10 text-info' : 'text-text-secondary hover:bg-bg-page')}>
          <History size={18} /> Payment History
        </button>
      </div>

      <div className="flex-1 bg-card border border-border rounded-xl shadow-sm p-6 overflow-y-auto">
        
        {activeTab === 'receipt' && (
          <div className="flex flex-col gap-6 fade-in">
            <h2 className="text-xl font-bold text-text-primary border-b border-border pb-2">Digital Fee Receipt / Invoice</h2>
            
            <div className="bg-white border border-border p-8 rounded-lg shadow-sm max-w-2xl mx-auto w-full text-black relative">
              <div className="absolute top-4 right-4 flex gap-2">
                <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded text-gray-700 transition" title="Download PDF"><FileDown size={18}/></button>
                <button onClick={handlePrint} className="p-2 bg-primary hover:bg-primary-hover text-white rounded transition flex items-center gap-2 text-sm font-bold"><Printer size={16}/> Print</button>
              </div>

              <div className="text-center border-b-2 border-gray-300 pb-4 mb-6 pt-4">
                <h1 className="text-2xl font-black uppercase text-gray-900">Excellence High School</h1>
                <h2 className="text-sm font-semibold text-gray-600 mt-1">Fee Receipt (Invoice #INV-2026-1045)</h2>
              </div>
              
              <div className="flex justify-between text-sm font-medium text-gray-800 mb-6">
                <div>
                  <p><span className="text-gray-500">Date:</span> 15 Oct 2026</p>
                  <p><span className="text-gray-500">Student:</span> Aarav Patel</p>
                  <p><span className="text-gray-500">Adm No:</span> 10452</p>
                </div>
                <div className="text-right">
                  <p><span className="text-gray-500">Class:</span> X - A</p>
                  <p><span className="text-gray-500">Payment Mode:</span> Online (UPI)</p>
                  <p><span className="text-gray-500">Status:</span> <span className="text-green-600 font-bold">PAID</span></p>
                </div>
              </div>

              <table className="w-full border-collapse border border-gray-300 mb-6">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 p-2 text-left text-sm text-gray-700">Description</th>
                    <th className="border border-gray-300 p-2 text-right text-sm text-gray-700 w-32">Amount (₹)</th>
                  </tr>
                </thead>
                <tbody className="text-sm text-gray-800">
                  <tr>
                    <td className="border border-gray-300 p-2 text-left">Tuition Fee (October)</td>
                    <td className="border border-gray-300 p-2 text-right">3,000</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2 text-left">Transport Fee</td>
                    <td className="border border-gray-300 p-2 text-right">1,500</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2 text-left">Library Fee</td>
                    <td className="border border-gray-300 p-2 text-right">1,000</td>
                  </tr>
                  <tr className="bg-gray-50 font-bold text-gray-900">
                    <td className="border border-gray-300 p-2 text-right">Total Paid</td>
                    <td className="border border-gray-300 p-2 text-right text-lg">5,500</td>
                  </tr>
                </tbody>
              </table>

              <div className="text-center text-xs text-gray-500 mt-10 italic">
                * This is a computer generated receipt and does not require a physical signature.
              </div>
            </div>
          </div>
        )}

        {activeTab === 'history' && (
          <div className="flex flex-col gap-6 fade-in">
            <h2 className="text-xl font-bold text-text-primary border-b border-border pb-2">Student Payment History</h2>
            
            <div className="flex gap-4 items-end bg-bg-page border border-border p-4 rounded-lg mb-2">
              <div className="flex flex-col gap-1.5 flex-1">
                <label className="text-xs font-semibold text-text-secondary">Search Student</label>
                <input type="text" placeholder="Admission No. or Name..." className="bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none focus:border-primary" />
              </div>
              <button className="bg-primary text-white px-6 py-1.5 h-[34px] rounded-md text-sm font-bold shadow-sm hover:bg-primary-hover active:scale-95 transition">Fetch Ledger</button>
            </div>

            <table className="w-full text-left border-collapse border border-border rounded-lg overflow-hidden">
              <thead className="bg-bg-page">
                <tr>
                  <th className="p-3 text-xs font-bold text-text-secondary uppercase">Date</th>
                  <th className="p-3 text-xs font-bold text-text-secondary uppercase">Invoice Ref</th>
                  <th className="p-3 text-xs font-bold text-text-secondary uppercase">Mode</th>
                  <th className="p-3 text-xs font-bold text-text-secondary uppercase text-right">Amount (₹)</th>
                  <th className="p-3 text-xs font-bold text-text-secondary uppercase text-center">Receipt</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-border bg-card hover:bg-bg-page/50 transition">
                  <td className="p-3 font-semibold text-sm">15 Oct 2026</td>
                  <td className="p-3 text-sm">INV-2026-1045</td>
                  <td className="p-3 text-sm"><span className="bg-info-bg text-info px-2 py-0.5 rounded font-bold text-xs">Online</span></td>
                  <td className="p-3 text-sm text-right font-bold text-success">5,500</td>
                  <td className="p-3 text-center"><button className="text-primary hover:underline text-xs font-bold">View PDF</button></td>
                </tr>
                <tr className="border-t border-border bg-card hover:bg-bg-page/50 transition">
                  <td className="p-3 font-semibold text-sm">12 Sep 2026</td>
                  <td className="p-3 text-sm">INV-2026-0922</td>
                  <td className="p-3 text-sm"><span className="bg-warning-bg text-warning px-2 py-0.5 rounded font-bold text-xs">Cash</span></td>
                  <td className="p-3 text-sm text-right font-bold text-success">5,500</td>
                  <td className="p-3 text-center"><button className="text-primary hover:underline text-xs font-bold">View PDF</button></td>
                </tr>
              </tbody>
            </table>

          </div>
        )}

      </div>
    </div>
  );
}
