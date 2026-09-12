"use client";

import { useState } from "react";
import { Edit, Trash2, PowerOff, Power, Copy, MoreVertical } from "lucide-react";
import { cn } from "@/lib/utils";
import type { RoleType } from "@/app/(app)/super-admin/role-management/super_admin_role_management_types/super_admin_role_management.types";

interface TableProps {
  onEdit: (role: RoleType) => void;
}

export default function SuperAdminRolesTable({ onEdit }: TableProps) {
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);

  // Pre-seeded with the exact examples requested by the user
  const roles: RoleType[] = [
    { id: "r1", roleName: "Teacher", description: "Standard academic teacher", isActive: true },
    { id: "r2", roleName: "Class Teacher", description: "Has additional class authority", isActive: true },
    { id: "r3", roleName: "HOD", description: "Head of Department", isActive: true },
    { id: "r4", roleName: "Accountant", description: "Financial management access", isActive: true },
    { id: "r5", roleName: "Office Staff", description: "General admin tasks", isActive: true },
    { id: "r6", roleName: "Librarian", description: "Library module access", isActive: true },
    { id: "r7", roleName: "Transport Manager", description: "Transport module access", isActive: true },
  ];

  return (
    <div className="bg-card border border-border rounded-lg overflow-x-auto pb-24">
      <table className="w-full text-left text-sm whitespace-nowrap">
        <thead className="bg-primary-subtle text-text-secondary uppercase text-[11px] font-semibold">
          <tr>
            <th className="px-4 py-3 border-b border-border">Role Name</th>
            <th className="px-4 py-3 border-b border-border">Description</th>
            <th className="px-4 py-3 border-b border-border text-center">Status</th>
            <th className="px-4 py-3 border-b border-border text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {roles.map((role) => (
            <tr key={role.id} className="hover:bg-bg-page transition-colors group cursor-pointer relative">
              <td className="px-4 py-3 font-semibold text-text-primary">
                {role.roleName}
              </td>
              <td className="px-4 py-3 text-text-secondary text-xs">
                {role.description || '-'}
              </td>
              <td className="px-4 py-3 text-center">
                <span className={cn("px-2 py-0.5 rounded text-[10px] font-medium border", role.isActive ? "bg-success-bg text-success border-success/20" : "bg-danger-bg text-danger border-danger/20")}>
                  {role.isActive ? 'Active' : 'Inactive'}
                </span>
              </td>
              <td className="px-4 py-3 text-right">
                <div className="relative inline-block text-left">
                  <button 
                    onClick={() => setOpenDropdownId(openDropdownId === role.id ? null : role.id)}
                    className="p-1.5 text-text-secondary hover:bg-bg-page rounded-md transition-colors"
                  >
                    <MoreVertical size={16} />
                  </button>
                  
                  {openDropdownId === role.id && (
                    <div className="absolute right-0 mt-2 w-48 bg-card border border-border rounded-md shadow-lg z-10 py-1">
                      <div className="px-3 py-1.5 text-xs font-bold text-text-primary border-b border-border bg-bg-page">Role Actions</div>
                      
                      {/* Explicit Text Actions matching the checklist */}
                      <button onClick={() => {onEdit(role); setOpenDropdownId(null);}} className="w-full text-left px-4 py-2 text-xs text-text-secondary hover:bg-bg-page hover:text-info flex items-center gap-2">
                        <Edit size={14}/> Edit
                      </button>
                      <button className="w-full text-left px-4 py-2 text-xs text-text-secondary hover:bg-bg-page hover:text-primary flex items-center gap-2">
                        <Copy size={14}/> Duplicate
                      </button>
                      
                      {role.isActive ? (
                        <button className="w-full text-left px-4 py-2 text-xs text-text-secondary hover:bg-bg-page hover:text-warning flex items-center gap-2">
                          <PowerOff size={14}/> Deactivate
                        </button>
                      ) : (
                        <button className="w-full text-left px-4 py-2 text-xs text-text-secondary hover:bg-bg-page hover:text-success flex items-center gap-2">
                          <Power size={14}/> Activate
                        </button>
                      )}
                      
                      <button className="w-full text-left px-4 py-2 text-xs text-danger hover:bg-danger-bg font-medium flex items-center gap-2 border-t border-border mt-1 pt-2">
                        <Trash2 size={14}/> Delete
                      </button>
                    </div>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
