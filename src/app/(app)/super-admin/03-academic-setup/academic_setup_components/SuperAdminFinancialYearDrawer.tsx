"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FinancialYearSchema, type FinancialYear } from "../academic_setup_types/super_admin_financial_years.types";
import { Save, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SuperAdminFinancialYearDrawer({ isOpen, onClose }: DrawerProps) {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<any>({
    resolver: zodResolver(FinancialYearSchema),
    defaultValues: {
      status: "Active"
    }
  });

  const onSubmit = async (data: any) => {
    console.log("Submitting FY data:", data);
    await new Promise(resolve => setTimeout(resolve, 1000));
    reset();
    onClose();
  };

  return (
    <>
      {isOpen && <div className="fixed inset-0 bg-overlay/50 z-40" onClick={onClose} />}
      <div className={cn(
        "fixed top-0 right-0 h-screen w-full sm:w-[400px] bg-card shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex items-center justify-between p-6 border-b border-border bg-header">
          <h2 className="text-lg font-bold text-text-primary">Create Financial Year</h2>
          <button onClick={onClose} className="p-1.5 text-text-secondary hover:text-danger hover:bg-danger-bg rounded-md">
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
          <form id="fy-form" onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-text-primary">Financial Year Name <span className="text-danger">*</span></label>
              <input {...register("fyName")} placeholder="e.g. FY 2026-27" className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" />
              {errors.fyName && <span className="text-xs text-danger">{String(errors.fyName.message)}</span>}
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-text-primary">Start Date <span className="text-danger">*</span></label>
              <input type="date" {...register("startDate")} className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" />
              {errors.startDate && <span className="text-xs text-danger">{String(errors.startDate.message)}</span>}
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-text-primary">End Date <span className="text-danger">*</span></label>
              <input type="date" {...register("endDate")} className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" />
              {errors.endDate && <span className="text-xs text-danger">{String(errors.endDate.message)}</span>}
            </div>
            
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-text-primary">Initial Status</label>
              <select {...register("status")} className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none bg-bg-page opacity-70" disabled>
                <option value="Active">Active (Default for new FY)</option>
              </select>
            </div>
          </form>
        </div>

        <div className="p-6 border-t border-border bg-header flex items-center justify-end gap-3">
          <button type="button" onClick={onClose} className="px-4 py-2 border border-border rounded-md text-text-secondary hover:bg-bg-page text-sm font-medium">Cancel</button>
          <button type="submit" form="fy-form" disabled={isSubmitting} className="flex items-center gap-2 px-6 py-2 bg-primary text-black rounded-md hover:bg-primary-hover text-sm font-medium disabled:opacity-70">
            <Save size={16} />
            {isSubmitting ? 'Saving...' : 'Create FY'}
          </button>
        </div>
      </div>
    </>
  );
}
