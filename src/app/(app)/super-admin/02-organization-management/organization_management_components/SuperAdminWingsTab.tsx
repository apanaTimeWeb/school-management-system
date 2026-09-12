"use client";

import { useState } from "react";

import { Plus, Edit, Trash2, PowerOff, Power } from "lucide-react";
import { cn } from "@/lib/utils";
import type { WingType } from "../organization_management_types/super_admin_school_structure.types";
import SuperAdminWingDrawer from "./SuperAdminWingDrawer";

export default function SuperAdminWingsTab() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const wings: WingType[] = [
    { id: "w1", wingName: "Primary", headOfWing: "Mrs. S. Khanna", isActive: true },
    { id: "w2", wingName: "Middle", headOfWing: "Mr. R. Verma", isActive: true },
    { id: "w3", wingName: "Secondary", headOfWing: "Dr. A. Sharma", isActive: true },
    { id: "w4", wingName: "Senior Secondary", headOfWing: "Dr. M. Patel", isActive: true },
  ];

  return (
    <div className="flex flex-col gap-4 max-w-4xl">
      <div className="flex items-center justify-between">
        <h2 className="text-base font-semibold text-text-primary">School Wings</h2>
        <button onClick={() => setIsDrawerOpen(true)} className="flex items-center gap-1.5 px-3 py-1.5 bg-primary text-white text-xs font-medium rounded hover:bg-primary-hover transition-colors shadow-sm">
          <Plus size={14} /> Add Wing
        </button>
      </div>
      
      <div className="bg-card border border-border rounded-lg overflow-x-auto">
        <table className="w-full text-left text-sm whitespace-nowrap">
          <thead className="bg-primary-subtle text-text-secondary uppercase text-[11px] font-semibold">
            <tr>
              <th className="px-4 py-3 border-b border-border">Wing Name</th>
              <th className="px-4 py-3 border-b border-border">Head of Wing</th>
              <th className="px-4 py-3 border-b border-border text-center">Status</th>
              <th className="px-4 py-3 border-b border-border text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {wings.map((wing) => (
              <tr key={wing.id} className="hover:bg-bg-page transition-colors group cursor-pointer">
                <td className="px-4 py-3 font-semibold text-text-primary">{wing.wingName}</td>
                <td className="px-4 py-3 text-text-secondary">{wing.headOfWing || '-'}</td>
                <td className="px-4 py-3 text-center">
                  <span className={cn("px-2 py-0.5 rounded text-[10px] font-medium", wing.isActive ? "bg-success-bg text-success" : "bg-danger-bg text-danger")}>
                    {wing.isActive ? 'Active' : 'Inactive'}
                  </span>
                </td>
                <td className="px-4 py-3 text-right">
                  <div className="flex items-center justify-end gap-2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity">
                    <button className="p-1 text-text-secondary hover:text-info" title="Edit"><Edit size={14} /></button>
                    <button className="p-1 text-text-secondary hover:text-danger" title="Delete"><Trash2 size={14} /></button>
                    <button className="p-1 text-text-secondary hover:text-warning" title={wing.isActive ? "Deactivate" : "Activate"}>
                      {wing.isActive ? <PowerOff size={14} /> : <Power size={14} />}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <SuperAdminWingDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </div>
  );
}
