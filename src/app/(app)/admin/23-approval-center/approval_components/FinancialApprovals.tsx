"use client";

import React, { useState } from 'react';
import { IndianRupee, ShoppingCart, Receipt, CheckCircle, XCircle } from 'lucide-react';

export default function FinancialApprovals() {
  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState('');

  const handleApprove = () => {
    setToastMsg('Approved & Processed Successfully!');
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleReject = () => {
    setToastMsg('Request Rejected!');
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const FinanceCard = ({ id, title, amount, type, date, requester }: any) => (
    <div className="bg-bg-page border border-border p-4 rounded-lg flex flex-col md:flex-row justify-between items-start md:items-center gap-4 shadow-sm hover:border-primary transition">
      <div className="flex flex-col">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs font-black text-primary">{id}</span>
          <span className="bg-warning-bg text-warning px-2 py-0.5 rounded text-[10px] font-bold uppercase">{type}</span>
        </div>
        <h4 className="font-bold text-sm text-text-primary">{title}</h4>
        <p className="text-sm font-black text-danger mt-1">₹{amount}</p>
        <p className="text-xs text-text-secondary font-semibold mt-1">Requested by: {requester} • {date}</p>
      </div>
      <div className="flex gap-2 w-full md:w-auto mt-2 md:mt-0">
        <button onClick={handleApprove} className="flex-1 md:flex-none bg-success text-white px-4 py-2 rounded-lg text-sm font-bold shadow-sm hover:bg-success/90 transition flex items-center justify-center gap-2">
          <CheckCircle size={16}/> Approve
        </button>
        <button onClick={handleReject} className="flex-1 md:flex-none bg-danger text-white px-4 py-2 rounded-lg text-sm font-bold shadow-sm hover:bg-danger/90 transition flex items-center justify-center gap-2">
          <XCircle size={16}/> Reject
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col gap-6 h-full fade-in relative">
      {showToast && (
        <div className="absolute top-4 right-4 bg-success text-white px-4 py-2 rounded-lg shadow-lg font-bold text-sm flex items-center gap-2 fade-in z-10">
          <CheckCircle size={16} /> {toastMsg}
        </div>
      )}

      <div className="flex-1 bg-card border border-border rounded-xl shadow-sm p-6 overflow-y-auto">
        <h2 className="text-xl font-bold text-text-primary border-b border-border pb-4 mb-6 flex items-center gap-2">
          <IndianRupee size={20} className="text-primary"/> Financial Approvals
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <div className="flex flex-col gap-4">
             <h3 className="font-bold text-sm flex items-center gap-2 text-info"><ShoppingCart size={16}/> Purchases & Expenses</h3>
             <div className="flex flex-col gap-3">
               <FinanceCard 
                 id="PUR-102" 
                 title="Lab Equipment (Chemicals)" 
                 amount="15,000" 
                 type="Purchase Order" 
                 requester="Science Dept" 
                 date="11-Oct-2025" 
               />
               <FinanceCard 
                 id="EXP-088" 
                 title="Annual Function Stage Setup Adv." 
                 amount="50,000" 
                 type="Petty Expense" 
                 requester="Events Committee" 
                 date="12-Oct-2025" 
               />
             </div>
          </div>

          <div className="flex flex-col gap-4">
             <h3 className="font-bold text-sm flex items-center gap-2 text-success"><Receipt size={16}/> Fee Concessions & Refunds</h3>
             <div className="flex flex-col gap-3">
               <FinanceCard 
                 id="CONC-04" 
                 title="Sibling Discount Application" 
                 amount="5,000" 
                 type="Fee Concession" 
                 requester="STU-001 (Aarav Sharma)" 
                 date="09-Oct-2025" 
               />
               <FinanceCard 
                 id="REF-01" 
                 title="Transport Fee Refund (Route Cancelled)" 
                 amount="1,200" 
                 type="Refund" 
                 requester="STU-120 (Neha Gupta)" 
                 date="10-Oct-2025" 
               />
             </div>
          </div>

        </div>
      </div>
    </div>
  );
}
