"use client";

import { useState } from "react";
import { Plus, Edit, Trash2, PowerOff, Power } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ClassType, SectionType } from "../organization_management_types/super_admin_school_structure.types";
import SuperAdminClassDrawer from "./SuperAdminClassDrawer";
import SuperAdminSectionDrawer from "./SuperAdminSectionDrawer";

export default function SuperAdminClassesSectionsTab() {
  const [isClassDrawerOpen, setIsClassDrawerOpen] = useState(false);
  const [isSectionDrawerOpen, setIsSectionDrawerOpen] = useState(false);

  const classes: ClassType[] = [
    { id: "c1", className: "Class 10", classCode: "CLS-10", classOrder: 10, isActive: true },
    { id: "c2", className: "Class 11", classCode: "CLS-11", classOrder: 11, isActive: true },
  ];

  const sections: SectionType[] = [
    { id: "s1", classId: "c1", sectionName: "A", capacity: 40, sectionTeacher: "Mr. Sharma", isActive: true },
    { id: "s2", classId: "c1", sectionName: "B", capacity: 40, sectionTeacher: "Mrs. Gupta", isActive: true },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      
      {/* Classes Table */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-semibold text-text-primary">Classes</h2>
          <button onClick={() => setIsClassDrawerOpen(true)} className="flex items-center gap-1.5 px-3 py-1.5 bg-primary text-white text-xs font-medium rounded hover:bg-primary-hover transition-colors shadow-sm">
            <Plus size={14} /> Add Class
          </button>
        </div>
        
        <div className="bg-card border border-border rounded-lg overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-primary-subtle text-text-secondary uppercase text-[11px] font-semibold">
              <tr>
                <th className="px-4 py-3 border-b border-border w-16">Order</th>
                <th className="px-4 py-3 border-b border-border">Class Name</th>
                <th className="px-4 py-3 border-b border-border">Code</th>
                <th className="px-4 py-3 border-b border-border text-center">Status</th>
                <th className="px-4 py-3 border-b border-border text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {classes.map((cls) => (
                <tr key={cls.id} className="hover:bg-bg-page transition-colors group cursor-pointer">
                  <td className="px-4 py-3 text-text-secondary">{cls.classOrder}</td>
                  <td className="px-4 py-3 font-semibold text-text-primary">{cls.className}</td>
                  <td className="px-4 py-3 text-text-secondary">{cls.classCode}</td>
                  <td className="px-4 py-3 text-center">
                    <span className={cn("px-2 py-0.5 rounded text-[10px] font-medium", cls.isActive ? "bg-success-bg text-success" : "bg-danger-bg text-danger")}>
                      {cls.isActive ? 'Active' : 'Inactive'}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-1 text-info hover:bg-info/10 rounded transition-colors" title="Edit"><Edit size={14} /></button>
                      <button className="p-1 text-danger hover:bg-danger/10 rounded transition-colors" title="Delete"><Trash2 size={14} /></button>
                      <button className={cn("p-1 rounded transition-colors", cls.isActive ? "text-warning hover:bg-warning/10" : "text-success hover:bg-success/10")} title={cls.isActive ? "Deactivate" : "Activate"}>
                        {cls.isActive ? <PowerOff size={14} /> : <Power size={14} />}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Sections Table */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-semibold text-text-primary">Sections</h2>
          <button onClick={() => setIsSectionDrawerOpen(true)} className="flex items-center gap-1.5 px-3 py-1.5 bg-primary text-white text-xs font-medium rounded hover:bg-primary-hover transition-colors shadow-sm">
            <Plus size={14} /> Add Section
          </button>
        </div>
        
        <div className="bg-card border border-border rounded-lg overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-primary-subtle text-text-secondary uppercase text-[11px] font-semibold">
              <tr>
                <th className="px-4 py-3 border-b border-border">Section Name</th>
                <th className="px-4 py-3 border-b border-border">Capacity</th>
                <th className="px-4 py-3 border-b border-border">Class Teacher</th>
                <th className="px-4 py-3 border-b border-border text-center">Status</th>
                <th className="px-4 py-3 border-b border-border text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {sections.map((sec) => (
                <tr key={sec.id} className="hover:bg-bg-page transition-colors group cursor-pointer">
                  <td className="px-4 py-3 font-semibold text-text-primary">{sec.sectionName}</td>
                  <td className="px-4 py-3 text-text-secondary">{sec.capacity}</td>
                  <td className="px-4 py-3 text-text-secondary">{sec.sectionTeacher}</td>
                  <td className="px-4 py-3 text-center">
                    <span className={cn("px-2 py-0.5 rounded text-[10px] font-medium", sec.isActive ? "bg-success-bg text-success" : "bg-danger-bg text-danger")}>
                      {sec.isActive ? 'Active' : 'Inactive'}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-1 text-info hover:bg-info/10 rounded transition-colors" title="Edit"><Edit size={14} /></button>
                      <button className="p-1 text-danger hover:bg-danger/10 rounded transition-colors" title="Delete"><Trash2 size={14} /></button>
                      <button className={cn("p-1 rounded transition-colors", sec.isActive ? "text-warning hover:bg-warning/10" : "text-success hover:bg-success/10")} title={sec.isActive ? "Deactivate" : "Activate"}>
                        {sec.isActive ? <PowerOff size={14} /> : <Power size={14} />}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <SuperAdminClassDrawer isOpen={isClassDrawerOpen} onClose={() => setIsClassDrawerOpen(false)} />
      <SuperAdminSectionDrawer isOpen={isSectionDrawerOpen} onClose={() => setIsSectionDrawerOpen(false)} />
    </div>
  );
}
