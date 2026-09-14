"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { BranchSchema, type Branch } from "../organization_management_types/super_admin_schools.types";
import { Save, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SuperAdminAddBranchDrawer({ isOpen, onClose }: DrawerProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Omit<Branch, 'id'>>({
    resolver: zodResolver(BranchSchema) as any,
    defaultValues: {
      isActive: true,
    }
  });

  const onSubmit = async (data: any) => {
    console.log("Submitting branch data:", data);
    await new Promise(resolve => setTimeout(resolve, 1000));
    reset();
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-overlay/50 z-40 transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div 
        className={cn(
          "fixed top-0 right-0 h-screen w-full sm:w-[480px] bg-card shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between p-6 border-b border-border bg-header">
          <h2 className="text-lg font-bold text-text-primary">Add New Branch</h2>
          <button 
            onClick={onClose}
            className="p-1.5 text-text-secondary hover:text-danger hover:bg-danger-bg rounded-md transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
          <form id="branch-form" onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
            
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-text-primary">Branch Name <span className="text-danger">*</span></label>
              <input 
                {...register("branchName")} 
                className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                placeholder="e.g. North Campus"
              />
              {errors.branchName && <span className="text-xs text-danger">{String(errors.branchName.message)}</span>}
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-text-primary">Branch Code <span className="text-danger">*</span></label>
              <input 
                {...register("branchCode")} 
                className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                placeholder="e.g. BR-NORTH"
              />
              {errors.branchCode && <span className="text-xs text-danger">{String(errors.branchCode.message)}</span>}
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-text-primary">Branch Head (Principal/Director) <span className="text-danger">*</span></label>
              <input 
                {...register("branchHead")} 
                className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                placeholder="Enter branch head name"
              />
              {errors.branchHead && <span className="text-xs text-danger">{String(errors.branchHead.message)}</span>}
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-text-primary">Contact Number <span className="text-danger">*</span></label>
              <input 
                {...register("contact")} 
                className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                placeholder="10-digit number"
              />
              {errors.contact && <span className="text-xs text-danger">{String(errors.contact.message)}</span>}
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-text-primary">Complete Address <span className="text-danger">*</span></label>
              <textarea 
                {...register("address")} 
                rows={3}
                className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                placeholder="Enter branch address"
              />
              {errors.address && <span className="text-xs text-danger">{String(errors.address.message)}</span>}
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-text-primary">Facilities (Comma Separated)</label>
              <input 
                {...register("facilities")} 
                className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                placeholder="e.g. Library, Science Lab, Sports Ground"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-text-primary">Branch Specific Settings</label>
              <input 
                {...register("branchSettings")} 
                className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                placeholder="e.g. Requires Special Transport Logic"
              />
            </div>

            <div className="flex items-center gap-2 mt-2">
              <input 
                type="checkbox" 
                id="isBranchActive" 
                {...register("isActive")} 
                className="w-4 h-4 text-primary bg-input border-border rounded focus:ring-primary"
              />
              <label htmlFor="isBranchActive" className="text-sm font-medium text-text-primary cursor-pointer">
                Branch is Active
              </label>
            </div>

          </form>
        </div>

        <div className="p-6 border-t border-border bg-header flex items-center justify-end gap-3">
          <button 
            onClick={onClose}
            type="button"
            className="px-4 py-2 border border-border rounded-md text-text-secondary hover:bg-bg-page transition-colors text-sm font-medium"
          >
            Cancel
          </button>
          <button 
            type="submit"
            form="branch-form"
            disabled={isSubmitting}
            className="flex items-center gap-2 px-6 py-2 bg-primary text-black rounded-md hover:bg-primary-hover transition-colors text-sm font-medium disabled:opacity-70 disabled:cursor-not-allowed"
          >
            <Save size={16} />
            {isSubmitting ? 'Saving...' : 'Save Branch'}
          </button>
        </div>
      </div>
    </>
  );
}
