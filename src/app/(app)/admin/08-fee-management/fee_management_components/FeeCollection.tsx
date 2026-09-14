"use client";

import React, { useState } from 'react';
import { CreditCard, IndianRupee, HandCoins, AlertCircle, CheckCircle } from 'lucide-react';
import clsx from 'clsx';

export default function FeeCollection() {
  const [activeTab, setActiveTab] = useState('collect');
  const [paymentMode, setPaymentMode] = useState('Online');
  const [amountReceived, setAmountReceived] = useState('5500');
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handlePay = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setPaymentSuccess(true);
      setTimeout(() => setPaymentSuccess(false), 4000);
    }, 1500);
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 h-full min-h-[500px] fade-in relative">
      {paymentSuccess && (
        <div className="absolute top-4 right-4 bg-success text-white px-4 py-2 rounded-lg shadow-lg font-bold text-sm flex items-center gap-2 fade-in z-10">
          <CheckCircle size={16} /> Payment Collected Successfully
        </div>
      )}

      <div className="w-full md:w-64 bg-card border border-border rounded-xl shadow-sm flex flex-col p-2 h-fit shrink-0">
        <button onClick={() => setActiveTab('collect')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition mb-1", activeTab === 'collect' ? 'bg-primary/10 text-primary' : 'text-text-secondary hover:bg-bg-page')}>
          <IndianRupee size={18} /> Fee Collection
        </button>
        <button onClick={() => setActiveTab('partial')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition mb-1", activeTab === 'partial' ? 'bg-info/10 text-info' : 'text-text-secondary hover:bg-bg-page')}>
          <HandCoins size={18} /> Partial / Installment
        </button>
        <button onClick={() => setActiveTab('fine')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition", activeTab === 'fine' ? 'bg-danger/10 text-danger' : 'text-text-secondary hover:bg-bg-page')}>
          <AlertCircle size={18} /> Late Fee & Fines
        </button>
      </div>

      <div className="flex-1 bg-card border border-border rounded-xl shadow-sm p-6 overflow-y-auto">
        
        {(activeTab === 'collect' || activeTab === 'partial') && (
          <div className="flex flex-col gap-6 fade-in">
            <h2 className="text-xl font-bold text-text-primary border-b border-border pb-2">Collect Student Fees {activeTab === 'partial' && '(Partial/Installment)'}</h2>
            
            <div className="flex gap-4 items-end bg-bg-page border border-border p-4 rounded-lg">
              <div className="flex flex-col gap-1.5 flex-1">
                <label className="text-xs font-semibold text-text-secondary">Search Student</label>
                <input type="text" placeholder="Admission No. or Name..." className="bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none focus:border-primary" />
              </div>
              <button className="bg-primary text-black px-6 py-1.5 h-[34px] rounded-md text-sm font-bold shadow-sm hover:bg-primary-hover active:scale-95 transition">Load Dues</button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 flex flex-col gap-4">
                <div className="bg-card border border-border p-4 rounded-lg shadow-sm">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex flex-col">
                      <span className="font-bold text-lg text-text-primary">Aarav Patel (10452)</span>
                      <span className="text-sm text-text-secondary">Class X - A | Oct 2026 Dues</span>
                    </div>
                  </div>
                  
                  <table className="w-full text-left border-collapse border border-border rounded-lg overflow-hidden mb-4">
                    <thead className="bg-bg-page">
                      <tr>
                        <th className="p-3 text-xs font-bold text-text-secondary uppercase">Fee Particulars</th>
                        <th className="p-3 text-xs font-bold text-text-secondary uppercase text-right">Amount (₹)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-border">
                        <td className="p-3 text-sm">Tuition Fee (Monthly)</td>
                        <td className="p-3 text-sm text-right font-bold">3,000</td>
                      </tr>
                      <tr className="border-t border-border">
                        <td className="p-3 text-sm">Transport Fee</td>
                        <td className="p-3 text-sm text-right font-bold">1,500</td>
                      </tr>
                      <tr className="border-t border-border">
                        <td className="p-3 text-sm">Library Fee</td>
                        <td className="p-3 text-sm text-right font-bold">1,000</td>
                      </tr>
                      <tr className="border-t border-border bg-bg-page font-bold text-primary">
                        <td className="p-3 text-sm">Total Due Amount</td>
                        <td className="p-3 text-sm text-right">5,500</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="flex flex-col gap-4 bg-bg-page border border-border p-4 rounded-lg h-fit">
                <h3 className="font-bold text-sm text-text-secondary uppercase">Payment Gateway</h3>
                
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-text-secondary">Amount to Pay (₹)</label>
                  <input 
                    type="number" 
                    value={amountReceived} 
                    onChange={(e) => setAmountReceived(e.target.value)}
                    className={clsx("bg-bg-input border rounded-md px-3 py-2 text-lg font-bold outline-none focus:border-primary", Number(amountReceived) < 5500 ? "border-warning text-warning" : "border-border")} 
                  />
                  {Number(amountReceived) < 5500 && <span className="text-[10px] font-bold text-warning">Partial payment detected. Remaining due: ₹{5500 - Number(amountReceived)}</span>}
                </div>

                <div className="flex flex-col gap-1.5 mt-2">
                  <label className="text-xs font-semibold text-text-secondary">Payment Mode</label>
                  <select value={paymentMode} onChange={(e) => setPaymentMode(e.target.value)} className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-primary font-bold">
                    <option>Online (Card/UPI)</option>
                    <option>Cash (Offline)</option>
                    <option>Cheque / DD (Offline)</option>
                  </select>
                </div>

                {paymentMode.includes('Offline') && (
                  <div className="flex flex-col gap-1.5 mt-2">
                    <label className="text-xs font-semibold text-text-secondary">Reference / Cheque No.</label>
                    <input type="text" placeholder="e.g. CHQ-99120" className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-primary" />
                  </div>
                )}

                <button 
                  onClick={handlePay} 
                  disabled={isProcessing}
                  className="mt-4 bg-success text-white px-4 py-3 rounded-md text-sm font-bold shadow-sm hover:bg-success/90 active:scale-95 transition flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  <CreditCard size={18} /> {isProcessing ? "Processing..." : `Process Payment (₹${amountReceived})`}
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'fine' && (
          <div className="flex flex-col gap-6 fade-in">
            <h2 className="text-xl font-bold text-text-primary border-b border-border pb-2">Late Fee & Manual Fines</h2>
            
            <div className="bg-danger-bg/20 border border-danger/30 p-4 rounded-lg flex flex-col gap-2 max-w-xl">
              <div className="flex justify-between items-center">
                <span className="font-bold text-sm text-text-primary">Rohan Sharma (10453) - Sep 2026 Dues</span>
                <span className="bg-danger text-white text-xs font-bold px-2 py-0.5 rounded">15 Days Overdue</span>
              </div>
              <div className="text-sm text-text-primary mt-2">
                <span className="font-bold">Base Pending:</span> ₹3,000 <br/>
                <span className="font-bold text-danger">Auto Late Fee:</span> ₹750 (15 days x ₹50)
              </div>
              <div className="flex gap-2 mt-4 pt-4 border-t border-danger/20">
                <button className="text-xs bg-primary text-black px-4 py-1.5 rounded font-bold shadow-sm hover:bg-primary-hover active:scale-95 transition">Add to Current Invoice</button>
                <button className="text-xs bg-bg-page border border-border text-text-primary px-4 py-1.5 rounded font-bold hover:bg-card active:scale-95 transition">Waive Late Fee</button>
              </div>
            </div>

            <div className="flex flex-col gap-4 bg-bg-page border border-border p-5 rounded-lg max-w-xl mt-4">
              <h3 className="font-bold text-sm text-text-secondary uppercase">Impose Manual Fine (Library/Discipline)</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-1.5 col-span-2">
                  <label className="text-xs font-semibold text-text-secondary">Student Adm No.</label>
                  <input type="text" placeholder="10453" className="bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none focus:border-primary" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-text-secondary">Fine Type</label>
                  <select className="bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none focus:border-primary">
                    <option>Library Book Loss</option>
                    <option>Property Damage</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-text-secondary">Fine Amount (₹)</label>
                  <input type="number" placeholder="500" className="bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none focus:border-primary" />
                </div>
              </div>
              <button className="bg-danger text-white px-4 py-2 rounded-md text-sm font-bold shadow-sm hover:bg-danger/90 active:scale-95 transition mt-2 self-start">Impose Fine</button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
