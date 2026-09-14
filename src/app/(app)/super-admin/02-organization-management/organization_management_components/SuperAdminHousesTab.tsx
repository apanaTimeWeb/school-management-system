"use client";

import { useState } from "react";

import { Plus, Edit, Trash2, PowerOff, Power } from "lucide-react";
import { cn } from "@/lib/utils";
import type { HouseType } from "../organization_management_types/super_admin_school_structure.types";
import SuperAdminHouseDrawer from "./SuperAdminHouseDrawer";

export default function SuperAdminHousesTab() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const houses: HouseType[] = [
    { id: "h1", houseName: "Red House", houseColor: "#ef4444", houseCaptain: "Aryan S.", houseTeacher: "Mr. Verma", isActive: true },
    { id: "h2", houseName: "Blue House", houseColor: "#3b82f6", houseCaptain: "Rahul M.", houseTeacher: "Mrs. Gupta", isActive: true },
    { id: "h3", houseName: "Green House", houseColor: "#22c55e", houseCaptain: "Sneha K.", houseTeacher: "Ms. Singh", isActive: true },
    { id: "h4", houseName: "Yellow House", houseColor: "#eab308", houseCaptain: "Priya R.", houseTeacher: "Mr. Sharma", isActive: true },
  ];

  return (
    <div className="flex flex-col gap-4 max-w-5xl">
      <div className="flex items-center justify-between">
        <h2 className="text-base font-semibold text-text-primary">Houses</h2>
        <button onClick={() => setIsDrawerOpen(true)} className="flex items-center gap-1.5 px-3 py-1.5 bg-primary text-white text-xs font-medium rounded hover:bg-primary-hover transition-colors shadow-sm">
          <Plus size={14} /> Add House
        </button>
      </div>
      
      <div className="bg-card border border-border rounded-lg overflow-x-auto">
        <table className="w-full text-left text-sm whitespace-nowrap">
          <thead className="bg-primary-subtle text-text-secondary uppercase text-[11px] font-semibold">
            <tr>
              <th className="px-4 py-3 border-b border-border">House Name</th>
              <th className="px-4 py-3 border-b border-border">House Captain</th>
              <th className="px-4 py-3 border-b border-border">House Master/Teacher</th>
              <th className="px-4 py-3 border-b border-border text-center">Status</th>
              <th className="px-4 py-3 border-b border-border text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {houses.map((house) => (
              <tr key={house.id} className="hover:bg-bg-page transition-colors group cursor-pointer">
                <td className="px-4 py-3 font-semibold text-text-primary flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: house.houseColor }}></div>
                  {house.houseName}
                </td>
                <td className="px-4 py-3 text-text-secondary">{house.houseCaptain || '-'}</td>
                <td className="px-4 py-3 text-text-secondary">{house.houseTeacher || '-'}</td>
                <td className="px-4 py-3 text-center">
                  <span className={cn("px-2 py-0.5 rounded text-[10px] font-medium", house.isActive ? "bg-success-bg text-success" : "bg-danger-bg text-danger")}>
                    {house.isActive ? 'Active' : 'Inactive'}
                  </span>
                </td>
                <td className="px-4 py-3 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button className="p-1 text-info hover:bg-info/10 rounded transition-colors" title="Edit"><Edit size={14} /></button>
                    <button className="p-1 text-danger hover:bg-danger/10 rounded transition-colors" title="Delete"><Trash2 size={14} /></button>
                    <button className={cn("p-1 rounded transition-colors", house.isActive ? "text-warning hover:bg-warning/10" : "text-success hover:bg-success/10")} title={house.isActive ? "Deactivate" : "Activate"}>
                      {house.isActive ? <PowerOff size={14} /> : <Power size={14} />}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <SuperAdminHouseDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </div>
  );
}
