"use client";
import React from "react";
import { Download, Eye } from "lucide-react";
import { useHRPayrollStore } from "../hr_payroll_store/useHRPayrollStore";
import clsx from "clsx";

export default function HRPayrollTable() {
  const { payrollData, searchQuery, monthFilter, statusFilter, setActionModalOpen, setSelectedRecord } = useHRPayrollStore();

  const filteredData = payrollData.filter(record => {
    const matchesSearch = record.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          record.employeeId.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesMonth = monthFilter === "All" || record.month === monthFilter;
    const matchesStatus = statusFilter === "All" || record.status === statusFilter;
    
    return matchesSearch && matchesMonth && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'Paid': return 'text-emerald-700 bg-emerald-50 border-emerald-200';
      case 'Pending': return 'text-rose-700 bg-rose-50 border-rose-200';
      case 'Processing': return 'text-blue-700 bg-blue-50 border-blue-200';
      default: return 'text-slate-700 bg-slate-50 border-slate-200';
    }
  };

  const handleAction = (record: any) => {
    setSelectedRecord(record);
    setActionModalOpen(true);
  };

  return (
    <div className="bg-card border border-border rounded-2xl shadow-sm overflow-hidden">
      <div className="overflow-x-auto custom-scrollbar">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-bg-input border-b border-border">
              <th className="p-4 text-xs font-black text-text-secondary uppercase tracking-wider">Employee</th>
              <th className="p-4 text-xs font-black text-text-secondary uppercase tracking-wider">Month & Year</th>
              <th className="p-4 text-xs font-black text-text-secondary uppercase tracking-wider hidden md:table-cell">Gross & Deductions</th>
              <th className="p-4 text-xs font-black text-text-secondary uppercase tracking-wider">Net Salary</th>
              <th className="p-4 text-xs font-black text-text-secondary uppercase tracking-wider">Status</th>
              <th className="p-4 text-xs font-black text-text-secondary uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {filteredData.map((record) => (
              <tr key={record.id} className="hover:bg-bg-page/50 transition-colors group">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold shrink-0">
                      {record.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-text-primary group-hover:text-emerald-600 transition-colors">{record.name}</p>
                      <p className="text-xs font-semibold text-text-secondary">{record.role} ({record.employeeId})</p>
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  <p className="text-sm font-bold text-text-primary">{record.month}</p>
                  <p className="text-xs font-semibold text-text-secondary">{record.year}</p>
                </td>
                <td className="p-4 hidden md:table-cell">
                  <div className="flex flex-col gap-1">
                    <span className="text-[11px] font-bold text-text-primary">Gross: ₹{(record.basicSalary + record.allowances).toLocaleString()}</span>
                    <span className="text-[10px] font-semibold text-rose-600">Ded: ₹{record.deductions.toLocaleString()}</span>
                  </div>
                </td>
                <td className="p-4">
                  <span className="text-sm font-black text-emerald-600">
                    ₹{record.netSalary.toLocaleString()}
                  </span>
                </td>
                <td className="p-4">
                  <span className={clsx("px-2.5 py-1 rounded-md text-[11px] font-bold border", getStatusColor(record.status))}>
                    {record.status}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button 
                      onClick={() => handleAction(record)}
                      className="p-1.5 text-text-secondary hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                      title="View Payslip"
                    >
                      <Eye size={18} />
                    </button>
                    <button 
                      className="p-1.5 text-text-secondary hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                      title="Download Payslip"
                    >
                      <Download size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {filteredData.length === 0 && (
              <tr>
                <td colSpan={6} className="p-8 text-center text-text-secondary font-semibold">
                  No payroll records found matching your criteria.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
