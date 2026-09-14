"use client";
import React from "react";
import { Edit, Eye, Phone, Mail } from "lucide-react";
import { useHREmployeesStore } from "../hr_employees_store/useHREmployeesStore";
import clsx from "clsx";

export default function HREmployeesTable() {
  const { employees, searchQuery, departmentFilter, statusFilter, setViewModalOpen, setSelectedEmployee } = useHREmployeesStore();

  const filteredEmployees = employees.filter(emp => {
    const matchesSearch = emp.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          emp.employeeId.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          emp.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDept = departmentFilter === "All" || emp.department === departmentFilter;
    const matchesStatus = statusFilter === "All" || emp.status === statusFilter;
    
    return matchesSearch && matchesDept && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'Active': return 'text-emerald-700 bg-emerald-50 border-emerald-200';
      case 'On Leave': return 'text-amber-700 bg-amber-50 border-amber-200';
      case 'Resigned': return 'text-rose-700 bg-rose-50 border-rose-200';
      default: return 'text-slate-700 bg-slate-50 border-slate-200';
    }
  };

  const handleView = (emp: any) => {
    setSelectedEmployee(emp);
    setViewModalOpen(true);
  };

  return (
    <div className="bg-card border border-border rounded-2xl shadow-sm overflow-hidden">
      <div className="overflow-x-auto custom-scrollbar">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-bg-input border-b border-border">
              <th className="p-4 text-xs font-black text-text-secondary uppercase tracking-wider">Employee</th>
              <th className="p-4 text-xs font-black text-text-secondary uppercase tracking-wider">Department & Role</th>
              <th className="p-4 text-xs font-black text-text-secondary uppercase tracking-wider hidden md:table-cell">Contact</th>
              <th className="p-4 text-xs font-black text-text-secondary uppercase tracking-wider">Status</th>
              <th className="p-4 text-xs font-black text-text-secondary uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {filteredEmployees.map((emp) => (
              <tr key={emp.id} className="hover:bg-bg-page/50 transition-colors group">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold shrink-0">
                      {emp.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-text-primary group-hover:text-indigo-600 transition-colors">{emp.name}</p>
                      <p className="text-xs font-semibold text-text-secondary">{emp.employeeId}</p>
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  <p className="text-sm font-bold text-text-primary">{emp.department}</p>
                  <p className="text-xs font-semibold text-text-secondary">{emp.designation}</p>
                </td>
                <td className="p-4 hidden md:table-cell">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-text-secondary mb-1">
                    <Mail size={12} className="text-indigo-400" /> {emp.email}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-text-secondary">
                    <Phone size={12} className="text-emerald-500" /> {emp.phone}
                  </div>
                </td>
                <td className="p-4">
                  <span className={clsx("px-2.5 py-1 rounded-md text-[11px] font-bold border", getStatusColor(emp.status))}>
                    {emp.status}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button 
                      onClick={() => handleView(emp)}
                      className="p-1.5 text-text-secondary hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                      title="View Details"
                    >
                      <Eye size={18} />
                    </button>
                    <button 
                      className="p-1.5 text-text-secondary hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                      title="Edit Employee"
                    >
                      <Edit size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {filteredEmployees.length === 0 && (
              <tr>
                <td colSpan={5} className="p-8 text-center text-text-secondary font-semibold">
                  No employees found matching your criteria.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
