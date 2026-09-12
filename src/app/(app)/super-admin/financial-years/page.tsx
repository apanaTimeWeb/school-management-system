"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import SuperAdminFinancialYearsTable from "./super_admin_financial_years_components/SuperAdminFinancialYearsTable";
import SuperAdminFinancialYearDrawer from "./super_admin_financial_years_components/SuperAdminFinancialYearDrawer";

export default function SuperAdminFinancialYearsPage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="flex flex-col gap-8 max-w-[1000px]">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-[22px] font-bold text-text-primary">Financial Year Management</h1>
          <p className="text-sm text-text-secondary mt-1">Master control for school financial cycles, locking, and reporting.</p>
        </div>
        
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setIsDrawerOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-primary text-white text-sm font-medium rounded-md hover:bg-primary-hover transition-colors shadow-sm"
          >
            <Plus size={16} />
            Create Financial Year
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-text-primary">Financial Year Directory</h2>
        </div>
        <SuperAdminFinancialYearsTable />
      </div>

      {/* Modals / Drawers */}
      <SuperAdminFinancialYearDrawer 
        isOpen={isDrawerOpen} 
        onClose={() => setIsDrawerOpen(false)} 
      />
      
    </div>
  );
}
