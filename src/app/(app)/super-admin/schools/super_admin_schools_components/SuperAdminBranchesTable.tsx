"use client";

import { Edit, Eye, Power, PowerOff } from "lucide-react";
import type { Branch } from "../super_admin_schools_types/super_admin_schools.types";
import { cn } from "@/app/(app)/super-admin/super_admin_components/SuperAdminSidebar";

export default function SuperAdminBranchesTable() {
  const branches: Branch[] = [
    {
      id: "br_1",
      schoolId: "sch_1",
      branchCode: "BR-MAIN",
      branchName: "Main Campus",
      address: "123 Main St, Tech Park",
      contact: "9876543210",
      branchHead: "Dr. A. Sharma",
      isActive: true,
    },
    {
      id: "br_2",
      schoolId: "sch_1",
      branchCode: "BR-NORTH",
      branchName: "North Branch",
      address: "45 North Ave",
      contact: "9876543211",
      branchHead: "Mr. R. Verma",
      isActive: true,
    }
  ];

  return (
    <div className="bg-card border border-border rounded-lg overflow-x-auto">
      <table className="w-full text-left text-sm whitespace-nowrap">
        <thead className="bg-primary-subtle text-text-secondary uppercase text-xs font-semibold">
          <tr>
            <th className="px-4 py-3 border-b border-border w-24">Code</th>
            <th className="px-4 py-3 border-b border-border">Branch Name</th>
            <th className="px-4 py-3 border-b border-border">Branch Head</th>
            <th className="px-4 py-3 border-b border-border">Contact</th>
            <th className="px-4 py-3 border-b border-border text-center w-28">Status</th>
            <th className="px-4 py-3 border-b border-border text-right w-24">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {branches.length === 0 ? (
            <tr>
              <td colSpan={6} className="px-4 py-8 text-center text-text-secondary">
                No branches found.
              </td>
            </tr>
          ) : (
            branches.map((branch) => (
              <tr key={branch.id} className="hover:bg-primary-subtle/50 transition-colors cursor-pointer group">
                <td className="px-4 py-3 font-medium text-text-primary">{branch.branchCode}</td>
                <td className="px-4 py-3 font-semibold text-text-primary">{branch.branchName}</td>
                <td className="px-4 py-3 text-text-primary">{branch.branchHead}</td>
                <td className="px-4 py-3 text-text-primary">{branch.contact}</td>
                <td className="px-4 py-3 text-center">
                  <span className={cn(
                    "px-2.5 py-1 rounded-full text-[11px] font-semibold",
                    branch.isActive ? "bg-success-bg text-success" : "bg-danger-bg text-danger"
                  )}>
                    {branch.isActive ? "Active" : "Inactive"}
                  </span>
                </td>
                <td className="px-4 py-3 text-right">
                  <div className="flex items-center justify-end gap-2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity">
                    <button className="p-1.5 text-text-secondary hover:text-primary transition-colors" title="View Details">
                      <Eye size={16} />
                    </button>
                    <button className="p-1.5 text-text-secondary hover:text-info transition-colors" title="Edit">
                      <Edit size={16} />
                    </button>
                    <button className={cn(
                      "p-1.5 transition-colors",
                      branch.isActive ? "text-text-secondary hover:text-danger" : "text-text-secondary hover:text-success"
                    )} title={branch.isActive ? "Deactivate" : "Activate"}>
                      {branch.isActive ? <PowerOff size={16} /> : <Power size={16} />}
                    </button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
