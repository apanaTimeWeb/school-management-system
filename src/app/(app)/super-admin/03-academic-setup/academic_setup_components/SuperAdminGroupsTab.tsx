"use client";

import { useState } from "react";
import { Plus, Edit, Trash2, PowerOff, Power, Layers } from "lucide-react";
import { cn } from "@/lib/utils";
import type { AcademicGroupType } from "../academic_setup_types/super_admin_academic_master.types";
import SuperAdminGroupDrawer from "./SuperAdminGroupDrawer";

export default function SuperAdminGroupsTab() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const groups: AcademicGroupType[] = [
    { id: "g1", groupName: "Science (PCM)", groupType: "Stream", description: "Physics, Chemistry, Maths", isActive: true },
    { id: "g2", groupName: "Commerce", groupType: "Stream", description: "Accounts, Business, Economics", isActive: true },
    { id: "g3", groupName: "CBSE Curriculum", groupType: "Curriculum Type", description: "National Board standard", isActive: true },
    { id: "g4", groupName: "Foundation Course", groupType: "Course Group", description: "Pre-primary layout", isActive: true },
  ];

  return (
    <div className="flex flex-col gap-4 max-w-4xl">
      <div className="flex items-center justify-between">
        <h2 className="text-base font-semibold text-text-primary flex items-center gap-2">
          <Layers size={18} className="text-primary" /> Streams & Groups
        </h2>
        <button onClick={() => setIsDrawerOpen(true)} className="flex items-center gap-1.5 px-3 py-1.5 bg-primary text-white text-xs font-medium rounded hover:bg-primary-hover transition-colors shadow-sm">
          <Plus size={14} /> Add Group
        </button>
      </div>
      
      <div className="bg-card border border-border rounded-lg overflow-x-auto">
        <table className="w-full text-left text-sm whitespace-nowrap">
          <thead className="bg-primary-subtle text-text-secondary uppercase text-[11px] font-semibold">
            <tr>
              <th className="px-4 py-3 border-b border-border">Group / Stream Name</th>
              <th className="px-4 py-3 border-b border-border">Classification</th>
              <th className="px-4 py-3 border-b border-border text-center">Status</th>
              <th className="px-4 py-3 border-b border-border text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {groups.map((group) => (
              <tr key={group.id} className="hover:bg-bg-page transition-colors cursor-pointer group">
                <td className="px-4 py-3">
                  <div className="flex flex-col">
                    <span className="font-semibold text-text-primary">{group.groupName}</span>
                    <span className="text-[11px] text-text-secondary">{group.description}</span>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <span className="bg-bg-page border border-border text-text-primary px-2 py-1 rounded text-xs">
                    {group.groupType}
                  </span>
                </td>
                <td className="px-4 py-3 text-center">
                  <span className={cn("px-2 py-0.5 rounded text-[10px] font-medium", group.isActive ? "bg-success-bg text-success" : "bg-danger-bg text-danger")}>
                    {group.isActive ? 'Active' : 'Inactive'}
                  </span>
                </td>
                <td className="px-4 py-3 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button className="p-1 text-info hover:bg-info/10 rounded transition-colors" title="Edit"><Edit size={14} /></button>
                    <button className="p-1 text-danger hover:bg-danger/10 rounded transition-colors" title="Delete"><Trash2 size={14} /></button>
                    <button className={cn("p-1 rounded transition-colors", group.isActive ? "text-warning hover:bg-warning/10" : "text-success hover:bg-success/10")} title={group.isActive ? "Deactivate" : "Activate"}>
                      {group.isActive ? <PowerOff size={14} /> : <Power size={14} />}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <SuperAdminGroupDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </div>
  );
}
