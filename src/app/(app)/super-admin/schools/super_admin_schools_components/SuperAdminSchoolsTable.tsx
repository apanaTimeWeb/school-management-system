"use client";

import { Edit, Eye, Power, PowerOff } from "lucide-react";
import type { School } from "@/app/(app)/super-admin/schools/super_admin_schools_types/super_admin_schools.types";
import { cn } from "@/lib/utils";

export default function SuperAdminSchoolsTable() {
  // Mock data representing backend state
  const schools: School[] = [
    {
      id: "sch_1",
      schoolCode: "SCH001",
      schoolName: "Smart Gym International School",
      principalName: "Dr. A. Sharma",
      address: "123 Main St, Tech Park",
      contact: "9876543210",
      email: "info@smartgym.edu",
      schoolTimings: "08:00 AM - 03:00 PM",
      workingDays: "Mon - Sat",
      timeZone: "Asia/Kolkata",
      currency: "INR",
      defaultLanguage: "English",
      isActive: true,
    }
  ];

  return (
    <div className="bg-card border border-border rounded-lg overflow-x-auto">
      <table className="w-full text-left text-sm whitespace-nowrap">
        <thead className="bg-primary-subtle text-text-secondary uppercase text-xs font-semibold">
          <tr>
            <th className="px-4 py-3 border-b border-border w-24">Code</th>
            <th className="px-4 py-3 border-b border-border">School Name</th>
            <th className="px-4 py-3 border-b border-border">Principal</th>
            <th className="px-4 py-3 border-b border-border">Contact</th>
            <th className="px-4 py-3 border-b border-border text-center w-28">Status</th>
            <th className="px-4 py-3 border-b border-border text-right w-24">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {schools.length === 0 ? (
            <tr>
              <td colSpan={6} className="px-4 py-8 text-center text-text-secondary">
                No schools found. Add a school to get started.
              </td>
            </tr>
          ) : (
            schools.map((school) => (
              <tr key={school.id} className="hover:bg-primary-subtle/50 transition-colors cursor-pointer group">
                <td className="px-4 py-3 font-medium text-text-primary">{school.schoolCode}</td>
                <td className="px-4 py-3">
                  <div className="flex flex-col">
                    <span className="font-semibold text-text-primary">{school.schoolName}</span>
                    <span className="text-xs text-text-secondary">{school.email}</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-text-primary">{school.principalName}</td>
                <td className="px-4 py-3 text-text-primary">{school.contact}</td>
                <td className="px-4 py-3 text-center">
                  <span className={cn(
                    "px-2.5 py-1 rounded-full text-[11px] font-semibold",
                    school.isActive ? "bg-success-bg text-success" : "bg-danger-bg text-danger"
                  )}>
                    {school.isActive ? "Active" : "Inactive"}
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
                      school.isActive ? "text-text-secondary hover:text-danger" : "text-text-secondary hover:text-success"
                    )} title={school.isActive ? "Deactivate" : "Activate"}>
                      {school.isActive ? <PowerOff size={16} /> : <Power size={16} />}
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
