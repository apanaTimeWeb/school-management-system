"use client";
import React from "react";
import HREmployeesFilters from "./HREmployeesFilters";
import HREmployeesTable from "./HREmployeesTable";
import HREmployeesModals from "./HREmployeesModals";
import { useHREmployeesStore } from "../hr_employees_store/useHREmployeesStore";
import { Plus } from "lucide-react";

export default function HREmployeesMain() {
  const { setAddModalOpen } = useHREmployeesStore();

  return (
    <div className="p-4 md:p-6 lg:p-8 max-w-[1600px] mx-auto space-y-6 fade-in pb-24">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-black text-text-primary tracking-tight">
            Non-Teaching Employees
          </h1>
          <p className="text-sm font-semibold text-text-secondary mt-1">
            Manage administration, support staff, and non-academic personnel.
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setAddModalOpen(true)}
            className="px-4 py-2 bg-indigo-600 text-white font-bold text-sm rounded-lg hover:bg-indigo-700 transition-colors shadow-md flex items-center gap-2"
          >
            <Plus size={18} /> New Employee
          </button>
        </div>
      </div>

      <HREmployeesFilters />
      <HREmployeesTable />
      <HREmployeesModals />
    </div>
  );
}
