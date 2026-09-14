"use client";

import { X, CheckCircle, FileText, AlertTriangle } from "lucide-react";
import type { EmployeePayrollRecord, PayrollStatus } from "../hr_payroll_types/AdminHrPayrollTypes";

interface AdminHrPayrollDetailModalProps {
  record: EmployeePayrollRecord | null;
  close: () => void;
  updateStatus: (id: string, s: PayrollStatus) => void;
}

export default function AdminHrPayrollDetailModal({ record, close, updateStatus }: AdminHrPayrollDetailModalProps) {
  if (!record) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm motion-safe:transition-opacity">
      <div className="bg-card border border-border rounded-xl w-full max-w-4xl shadow-2xl overflow-hidden motion-safe:animate-in motion-safe:fade-in motion-safe:zoom-in-95 flex flex-col max-h-[95vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border bg-overlay">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Salary Structure: {record.employeeName}</h2>
            <div className="flex gap-3 mt-1">
              <span className="text-sm font-bold text-primary">{record.designation} ({record.department})</span>
              <span className="text-sm font-medium text-muted-foreground border-l border-border pl-3">Period: {record.payrollPeriod}</span>
            </div>
          </div>
          <button onClick={close} className="p-2 hover:bg-input rounded-full text-muted-foreground transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 bg-card flex flex-col md:flex-row gap-6">
          
          {/* Left: Salary Breakdown */}
          <div className="flex-1 border border-border rounded-xl p-5 bg-input/10">
            <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4 border-b border-border/50 pb-2">Earnings & Allowances</h3>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between items-center text-sm">
                <span className="font-bold text-muted-foreground">Basic Salary</span>
                <span className="font-bold text-foreground">₹{record.basicSalary.toLocaleString()}</span>
              </div>
              {record.components.filter(c => c.type === 'Earning').map(c => (
                <div key={c.id} className="flex justify-between items-center text-sm">
                  <span className="font-bold text-muted-foreground">{c.name}</span>
                  <span className="font-bold text-foreground">+ ₹{c.amount.toLocaleString()}</span>
                </div>
              ))}
            </div>

            <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4 border-b border-border/50 pb-2 text-danger">Deductions</h3>
            <div className="space-y-3 mb-6">
              {record.components.filter(c => c.type === 'Deduction').map(c => (
                <div key={c.id} className="flex justify-between items-center text-sm">
                  <span className="font-bold text-muted-foreground">{c.name}</span>
                  <span className="font-bold text-danger">- ₹{c.amount.toLocaleString()}</span>
                </div>
              ))}
              {record.components.filter(c => c.type === 'Deduction').length === 0 && (
                <span className="text-xs text-muted-foreground italic">No deductions applied.</span>
              )}
            </div>

            <div className="mt-auto p-4 bg-primary/5 border border-primary/20 rounded-lg">
              <div className="flex justify-between items-center text-sm mb-2">
                <span className="font-bold text-foreground uppercase tracking-wider">Gross Salary</span>
                <span className="font-bold text-foreground">₹{record.grossSalary.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center text-lg">
                <span className="font-bold text-foreground uppercase tracking-wider">Net Payout</span>
                <span className="font-bold text-success text-xl">₹{record.netSalary.toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* Right: Actions & Status */}
          <div className="w-full md:w-1/3 flex flex-col gap-6">
            
            {/* Status Control */}
            <div className="border border-border rounded-xl p-5 bg-card shadow-sm">
              <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4 border-b border-border/50 pb-2">Payroll Action</h3>
              
              <div className="mb-6">
                <p className="text-xs font-bold text-muted-foreground mb-1 uppercase tracking-wider">Current Status</p>
                <p className={`text-lg font-bold ${record.status === 'Processed' ? 'text-success' : record.status === 'On Hold' ? 'text-danger' : 'text-warning'}`}>{record.status}</p>
              </div>

              {record.status === 'Processed' ? (
                <div className="w-full py-3 bg-success/10 text-success border border-success/30 font-bold text-sm rounded-md text-center flex items-center justify-center gap-2">
                  <CheckCircle size={18} /> Payroll Processed
                </div>
              ) : (
                <div className="flex flex-col gap-3">
                  <button onClick={() => updateStatus(record.id, 'Processed')} className="w-full py-3 bg-primary text-card font-bold text-sm rounded-md hover:bg-yellow-500 shadow-lg shadow-primary/20 transition-all active:scale-95 flex items-center justify-center gap-2">
                    <CheckCircle size={18} /> Process Payroll
                  </button>
                  <button onClick={() => updateStatus(record.id, 'On Hold')} className="w-full py-2 bg-input text-foreground border border-border font-bold text-xs rounded-md hover:text-danger hover:border-danger transition-colors flex items-center justify-center gap-2">
                    <AlertTriangle size={14} /> Put on Hold
                  </button>
                </div>
              )}
            </div>

            {/* Payslip Gen */}
            <div className="border border-border rounded-xl p-5 bg-card shadow-sm flex-1 flex flex-col">
              <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-2 border-b border-border/50 pb-2">Payslip Generation</h3>
              <p className="text-xs text-muted-foreground font-medium mb-4">Payslips can only be generated and distributed once payroll is marked as processed.</p>
              
              <div className="mt-auto">
                {record.payslipGenerated ? (
                  <button className="w-full py-2 bg-info/10 text-info border border-info/30 font-bold text-sm rounded-md hover:bg-info/20 transition-colors flex items-center justify-center gap-2">
                    <FileText size={16} /> View PDF Payslip
                  </button>
                ) : (
                  <button disabled className="w-full py-2 bg-input text-muted-foreground font-bold text-sm rounded-md cursor-not-allowed flex items-center justify-center gap-2">
                    <FileText size={16} /> Requires Processing
                  </button>
                )}
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
