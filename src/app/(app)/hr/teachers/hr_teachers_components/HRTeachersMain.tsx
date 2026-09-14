"use client";
import React from "react";
import HRTeachersFilters from "./HRTeachersFilters";
import HRTeachersTable from "./HRTeachersTable";
import HRTeachersModals from "./HRTeachersModals";
import { useHRTeachersStore } from "../hr_teachers_store/useHRTeachersStore";
import { Plus } from "lucide-react";

export default function HRTeachersMain() {
  const { setAddModalOpen } = useHRTeachersStore();

  return (
    <div className="p-4 md:p-6 lg:p-8 max-w-[1600px] mx-auto space-y-6 fade-in pb-24">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-black text-text-primary tracking-tight">
            Teaching Staff
          </h1>
          <p className="text-sm font-semibold text-text-secondary mt-1">
            Manage academic personnel, qualifications, and subject allocations.
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setAddModalOpen(true)}
            className="px-4 py-2 bg-purple-600 text-white font-bold text-sm rounded-lg hover:bg-purple-700 transition-colors shadow-md flex items-center gap-2"
          >
            <Plus size={18} /> New Teacher
          </button>
        </div>
      </div>

      <HRTeachersFilters />
      <HRTeachersTable />
      <HRTeachersModals />
    </div>
  );
}
