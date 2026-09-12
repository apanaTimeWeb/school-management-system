"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { WingSchema, type WingType } from "../organization_management_types/super_admin_school_structure.types";
import { Save, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SuperAdminWingDrawer({ isOpen, onClose }: DrawerProps) {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<Omit<WingType, 'id'>>({
    resolver: zodResolver(WingSchema),
    defaultValues: { isActive: true }
  });

  const onSubmit = async (data: Omit<WingType, 'id'>) => {
    console.log("Submitting wing data:", data);
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
          <h2 className="text-lg font-bold text-text-primary">Add Wing</h2>
          <button onClick={onClose} className="p-1.5 text-text-secondary hover:text-danger hover:bg-danger-bg rounded-md">
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
          <form id="wing-form" onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-text-primary">Wing Name <span className="text-danger">*</span></label>
              <input {...register("wingName")} placeholder="e.g. Primary, Secondary" className="bg-input border border-border rounded-md px-3 py-2 text-sm focus:border-primary outline-none text-text-primary" />
              {errors.wingName && <span className="text-xs text-danger">{errors.wingName.message}</span>}
            </div>
            
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-text-primary">Head of Wing</label>
              <input {...register("headOfWing")} placeholder="Name of Head" className="bg-input border border-border rounded-md px-3 py-2 text-sm focus:border-primary outline-none text-text-primary" />
            </div>
            
            <div className="flex items-center gap-2 mt-2">
              <input type="checkbox" id="isWingActive" {...register("isActive")} className="w-4 h-4 text-primary bg-input border-border rounded focus:ring-primary" />
              <label htmlFor="isWingActive" className="text-sm font-medium text-text-primary cursor-pointer">Wing is Active</label>
            </div>
          </form>
        </div>

        <div className="p-6 border-t border-border bg-header flex items-center justify-end gap-3">
          <button type="button" onClick={onClose} className="px-4 py-2 border border-border rounded-md text-text-secondary hover:bg-bg-page text-sm font-medium">Cancel</button>
          <button type="submit" form="wing-form" disabled={isSubmitting} className="flex items-center gap-2 px-6 py-2 bg-primary text-white rounded-md hover:bg-primary-hover text-sm font-medium disabled:opacity-70">
            <Save size={16} /> Save Wing
          </button>
        </div>
      </div>
    </>
  );
}
