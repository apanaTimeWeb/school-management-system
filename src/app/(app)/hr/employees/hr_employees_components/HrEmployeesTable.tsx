"use client";

import { useState } from "react";
import { Eye, Edit, Trash2, Lock } from "lucide-react";
import { useRouter } from "next/navigation";
import type { Employee } from "../hr_employees_types/HrEmployeesTypes";
import { HrEmployeesUrlConfig } from "../hr_employees_url_config";
import HrEmployeeEditModal from "./HrEmployeeEditModal";
import HrEmployeeDeleteModal from "./HrEmployeeDeleteModal";

interface HrEmployeesTableProps {
  employees: Employee[];
}

export default function HrEmployeesTable({ employees: initialEmployees }: HrEmployeesTableProps) {
  const router = useRouter();
  
  // Local state to simulate updates
  const [employeesList, setEmployeesList] = useState<Employee[]>(initialEmployees);
  const [editEmployee, setEditEmployee] = useState<Employee | null>(null);
  const [deleteEmployee, setDeleteEmployee] = useState<Employee | null>(null);

  // Sync if props change (optional, depending on architecture)
  // useEffect(() => setEmployeesList(initialEmployees), [initialEmployees]);

  if (employeesList.length === 0) {
    return (
      <div className="w-full p-12 flex flex-col items-center justify-center bg-card border border-border rounded-lg border-dashed">
        <span className="text-muted-foreground text-sm font-medium">No employees found.</span>
      </div>
    );
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Active': return <span className="bg-success/10 text-success border border-success/20 px-2.5 py-0.5 rounded-full text-xs font-semibold">Active</span>;
      case 'On Leave': return <span className="bg-warning/10 text-warning border border-warning/20 px-2.5 py-0.5 rounded-full text-xs font-semibold">On Leave</span>;
      case 'Exited': return <span className="bg-danger/10 text-danger border border-danger/20 px-2.5 py-0.5 rounded-full text-xs font-semibold">Exited</span>;
      default: return <span className="bg-input text-foreground px-2.5 py-0.5 rounded-full text-xs font-semibold">{status}</span>;
    }
  };

  const handleSaveEdit = (updatedEmployee: Employee) => {
    setEmployeesList(prev => prev.map(emp => emp.id === updatedEmployee.id ? updatedEmployee : emp));
    setEditEmployee(null);
  };

  const handleConfirmDelete = (id: string) => {
    setEmployeesList(prev => prev.filter(emp => emp.id !== id));
  };

  return (
    <>
      <div className="w-full overflow-x-auto bg-card border border-border rounded-lg shadow-sm">
        <table className="w-full text-left border-collapse min-w-[800px]">
          <thead>
            <tr className="border-b border-border bg-input/50">
              <th className="p-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Employee</th>
              <th className="p-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Contact</th>
              <th className="p-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Role & Dept</th>
              <th className="p-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Status</th>
              <th className="p-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {employeesList.map((emp) => (
              <tr key={emp.id} className="border-b border-border hover:bg-input/30 transition-colors group">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold border border-primary/20 group-hover:scale-105 transition-transform">
                      {emp.personal.firstName[0]}{emp.personal.lastName[0]}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-foreground">{emp.personal.firstName} {emp.personal.lastName}</span>
                      <span className="text-xs text-muted-foreground">{emp.employeeId}</span>
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex flex-col">
                    <span className="text-sm text-foreground">{emp.contact.phone}</span>
                    <span className="text-xs text-muted-foreground">{emp.contact.email}</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-foreground">{emp.joining.designation}</span>
                    <span className="text-xs text-muted-foreground">{emp.joining.department}</span>
                  </div>
                </td>
                <td className="p-4">
                  {getStatusBadge(emp.status)}
                </td>
                <td className="p-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button 
                      onClick={() => router.push(HrEmployeesUrlConfig.routes.profile(emp.id))}
                      className="p-1.5 text-info bg-info/10 hover:bg-info hover:text-white rounded-md transition-all active:scale-95" title="View Profile"
                    >
                      <Eye size={16} />
                    </button>
                    <button 
                      onClick={() => setEditEmployee(emp)}
                      className="p-1.5 text-primary bg-primary/10 hover:bg-primary hover:text-white rounded-md transition-all active:scale-95" title="Edit Employee"
                    >
                      <Edit size={16} />
                    </button>
                    <button 
                      onClick={() => setDeleteEmployee(emp)}
                      className="p-1.5 text-danger bg-danger/10 hover:bg-danger hover:text-white rounded-md transition-all active:scale-95" title="Delete Employee"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <HrEmployeeEditModal 
        isOpen={!!editEmployee} 
        employee={editEmployee} 
        onClose={() => setEditEmployee(null)} 
        onSave={handleSaveEdit} 
      />

      <HrEmployeeDeleteModal
        isOpen={!!deleteEmployee}
        employee={deleteEmployee}
        onClose={() => setDeleteEmployee(null)}
        onConfirm={handleConfirmDelete}
      />
    </>
  );
}

