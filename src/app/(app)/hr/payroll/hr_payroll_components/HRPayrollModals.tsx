"use client";
import React from "react";
import { X, DollarSign, Download, Settings } from "lucide-react";
import { useHRPayrollStore } from "../hr_payroll_store/useHRPayrollStore";
import clsx from "clsx";

export default function HRPayrollModals() {
  const { 
    isActionModalOpen, setActionModalOpen,
    selectedRecord
  } = useHRPayrollStore();

  if (!selectedRecord || !isActionModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm fade-in">
      <div className="bg-card w-full max-w-lg rounded-2xl shadow-xl overflow-hidden flex flex-col scale-in">
        <div className="p-4 border-b border-border flex justify-between items-center bg-bg-input">
          <h3 className="text-lg font-black text-text-primary">Salary Breakdown</h3>
          <button 
            onClick={() => setActionModalOpen(false)}
            className="p-2 text-text-secondary hover:text-danger hover:bg-danger/10 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="p-6 space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-black text-lg shrink-0">
              {selectedRecord.name.charAt(0)}
            </div>
            <div>
              <h4 className="text-lg font-black text-text-primary">{selectedRecord.name}</h4>
              <p className="text-sm font-bold text-text-secondary">{selectedRecord.role} • {selectedRecord.month} {selectedRecord.year}</p>
            </div>
            <div className="ml-auto">
              <span className={clsx(
                "px-2.5 py-1 rounded-md text-[10px] font-bold border", 
                selectedRecord.status === 'Pending' ? 'bg-rose-50 text-rose-700 border-rose-200' :
                selectedRecord.status === 'Processing' ? 'bg-blue-50 text-blue-700 border-blue-200' :
                'bg-emerald-50 text-emerald-700 border-emerald-200'
              )}>
                {selectedRecord.status}
              </span>
            </div>
          </div>

          <div className="bg-bg-page border border-border rounded-xl p-5 space-y-4">
            <div className="flex justify-between items-center pb-3 border-b border-border">
              <span className="text-sm font-bold text-text-secondary">Basic Salary</span>
              <span className="text-sm font-bold text-text-primary">₹{selectedRecord.basicSalary.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-border">
              <span className="text-sm font-bold text-text-secondary">Allowances (HRA, TA, etc.)</span>
              <span className="text-sm font-bold text-text-primary">₹{selectedRecord.allowances.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-border">
              <span className="text-sm font-bold text-rose-600">Deductions (Tax, PF, Leaves)</span>
              <span className="text-sm font-bold text-rose-600">- ₹{selectedRecord.deductions.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center pt-2">
              <span className="text-base font-black text-text-primary uppercase tracking-wider">Net Payable</span>
              <span className="text-xl font-black text-emerald-600">₹{selectedRecord.netSalary.toLocaleString()}</span>
            </div>
          </div>
        </div>

        <div className="p-4 border-t border-border flex justify-between bg-bg-input items-center">
          <button className="text-emerald-600 text-sm font-bold hover:underline flex items-center gap-2">
            <Download size={16} /> Download Payslip
          </button>
          <div className="flex gap-2">
            <button 
              onClick={() => setActionModalOpen(false)}
              className="px-4 py-2 font-bold text-sm text-text-secondary bg-bg-page border border-border rounded-lg hover:bg-border transition-colors"
            >
              Close
            </button>
            {selectedRecord.status !== 'Paid' && (
               <button 
                onClick={() => setActionModalOpen(false)}
                className="px-4 py-2 font-bold text-sm text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 transition-colors shadow-md flex items-center gap-2"
              >
                <DollarSign size={16} /> Process Payment
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
