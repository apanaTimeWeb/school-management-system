"use client";

import { useState } from "react";
import { KeyRound, ShieldAlert } from "lucide-react";
import SuperAdminPermissionEditor from "./super_admin_permission_management_components/SuperAdminPermissionEditor";

export default function SuperAdminPermissionManagementPage() {
  const [selectedRole, setSelectedRole] = useState<string>('Teacher');

  const ROLES = [
    'Admin', 'Principal', 'Teacher', 'Student', 'Parent', 
    'Accountant', 'Office/HR', 'Librarian', 'Transport', 'Hostel',
    'Class Teacher', 'HOD', 'Transport Manager'
  ];

  return (
    <div className="flex flex-col gap-6 max-w-[1400px] h-[calc(100vh-120px)]">
      
      {/* Header & Role Selector */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 shrink-0">
        <div>
          <h1 className="text-[22px] font-bold text-text-primary flex items-center gap-2">
            <KeyRound size={24} className="text-primary" /> Permission Management
          </h1>
          <p className="text-sm text-text-secondary mt-1">Configure highly granular access control, actions, and data scopes for each role.</p>
        </div>
        
        <div className="flex items-center gap-3 bg-card border border-border p-2 rounded-lg shadow-sm">
          <label className="text-xs font-bold text-text-secondary uppercase tracking-wider pl-2">Select Role:</label>
          <select 
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
            className="bg-input border border-border rounded-md px-3 py-1.5 text-sm focus:border-primary outline-none text-text-primary font-medium min-w-[200px]"
          >
            {ROLES.map(role => (
              <option key={role} value={role}>{role}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="bg-warning-bg/50 border border-warning/20 rounded-md p-3 flex items-start gap-3 shrink-0">
        <ShieldAlert size={18} className="text-warning mt-0.5" />
        <p className="text-sm text-text-primary">
          <strong className="text-warning">Granular Security Warning:</strong> Modifying permissions will immediately affect all users assigned to the <strong>{selectedRole}</strong> role. Ensure proper Data Scope is assigned to prevent accidental data leaks (e.g. setting 'Own Records' vs 'All Schools').
        </p>
      </div>

      {/* Main Content Area - Matrix */}
      <div className="flex-1 bg-card border border-border rounded-lg overflow-hidden flex flex-col min-h-0">
        <SuperAdminPermissionEditor role={selectedRole} />
      </div>
      
    </div>
  );
}
