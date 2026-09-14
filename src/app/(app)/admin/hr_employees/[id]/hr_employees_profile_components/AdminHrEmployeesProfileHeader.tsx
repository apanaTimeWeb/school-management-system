"use client";

import { MapPin, Phone, Mail, Building, Briefcase } from "lucide-react";
import type { Employee } from "../../hr_employees_types/AdminHrEmployeesTypes";

interface AdminHrEmployeesProfileHeaderProps {
  employee: Employee;
  openHistoryModal: (action: 'Transfer' | 'Promotion' | 'Resignation' | 'Exit') => void;
}

export default function AdminHrEmployeesProfileHeader({ employee, openHistoryModal }: AdminHrEmployeesProfileHeaderProps) {
  
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Active': return <span className="bg-success/10 text-success border border-success/20 px-3 py-1 rounded-full text-xs font-bold uppercase">{status}</span>;
      case 'On Leave': return <span className="bg-warning/10 text-warning border border-warning/20 px-3 py-1 rounded-full text-xs font-bold uppercase">{status}</span>;
      case 'Exited': return <span className="bg-danger/10 text-danger border border-danger/20 px-3 py-1 rounded-full text-xs font-bold uppercase">{status}</span>;
      default: return <span className="bg-input text-foreground px-3 py-1 rounded-full text-xs font-bold uppercase">{status}</span>;
    }
  };

  return (
    <div className="bg-card border border-border rounded-xl shadow-sm p-6 mb-6">
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
        <div className="flex items-center gap-6">
          <div className="w-24 h-24 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center text-primary text-3xl font-bold shadow-lg">
            {employee.personal.firstName[0]}{employee.personal.lastName[0]}
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-1">
              <h1 className="text-2xl font-bold text-foreground">{employee.personal.firstName} {employee.personal.lastName}</h1>
              {getStatusBadge(employee.status)}
            </div>
            <p className="text-sm font-semibold text-primary mb-3">{employee.employeeId} • {employee.joining.designation}</p>
            
            <div className="flex flex-wrap gap-4 text-xs font-medium text-muted-foreground">
              <span className="flex items-center gap-1.5"><Building size={14} /> {employee.joining.department}</span>
              <span className="flex items-center gap-1.5"><Phone size={14} /> {employee.contact.phone}</span>
              <span className="flex items-center gap-1.5"><Mail size={14} /> {employee.contact.email}</span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2">
          <button onClick={() => openHistoryModal('Transfer')} className="px-3 py-1.5 bg-input border border-border rounded-md text-xs font-bold text-foreground hover:border-primary transition-colors">Transfer</button>
          <button onClick={() => openHistoryModal('Promotion')} className="px-3 py-1.5 bg-success/10 border border-success/20 rounded-md text-xs font-bold text-success hover:bg-success hover:text-white transition-colors">Promote</button>
          <button onClick={() => openHistoryModal('Resignation')} className="px-3 py-1.5 bg-warning/10 border border-warning/20 rounded-md text-xs font-bold text-warning hover:bg-warning hover:text-white transition-colors">Resign</button>
          <button onClick={() => openHistoryModal('Exit')} className="px-3 py-1.5 bg-danger/10 border border-danger/20 rounded-md text-xs font-bold text-danger hover:bg-danger hover:text-white transition-colors">Terminate</button>
        </div>
      </div>
    </div>
  );
}
