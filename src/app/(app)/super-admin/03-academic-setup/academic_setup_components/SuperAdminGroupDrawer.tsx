"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AcademicGroupSchema, type AcademicGroupType } from "../academic_setup_types/super_admin_academic_master.types";
import { Save, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SuperAdminGroupDrawer({ isOpen, onClose }: DrawerProps) {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<any>({
    resolver: zodResolver(AcademicGroupSchema),
    defaultValues: { isActive: true, groupType: 'Stream' }
  });

  const onSubmit = async (data: any) => {
    console.log("Submitting group data:", data);
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
          <h2 className="text-lg font-bold text-text-primary">Add Stream/Group</h2>
          <button onClick={onClose} className="p-1.5 text-text-secondary hover:text-danger hover:bg-danger-bg rounded-md">
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
          <form id="group-form" onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-text-primary">Name <span className="text-danger">*</span></label>
              <input {...register("groupName")} placeholder="e.g. Science Stream" className="bg-input border border-border rounded-md px-3 py-2 text-sm focus:border-primary outline-none text-text-primary" />
              {errors.groupName && <span className="text-xs text-danger">{String(errors.groupName.message)}</span>}
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-text-primary">Classification <span className="text-danger">*</span></label>
              <select {...register("groupType")} className="bg-input border border-border rounded-md px-3 py-2 text-sm focus:border-primary outline-none text-text-primary">
                <option value="Stream">Stream</option>
                <option value="Course Group">Course Group</option>
                <option value="Curriculum Type">Curriculum Type</option>
              </select>
            </div>
            
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-text-primary">Description</label>
              <textarea {...register("description")} rows={3} placeholder="Brief details..." className="bg-input border border-border rounded-md px-3 py-2 text-sm focus:border-primary outline-none text-text-primary resize-none" />
            </div>
            
            <div className="flex items-center gap-2 mt-2">
              <input type="checkbox" id="isActive" {...register("isActive")} className="w-4 h-4 text-primary bg-input border-border rounded focus:ring-primary" />
              <label htmlFor="isActive" className="text-sm font-medium text-text-primary cursor-pointer">Active</label>
            </div>
          </form>
        </div>

        <div className="p-6 border-t border-border bg-header flex items-center justify-end gap-3">
          <button type="button" onClick={onClose} className="px-4 py-2 border border-border rounded-md text-text-secondary hover:bg-bg-page text-sm font-medium">Cancel</button>
          <button type="submit" form="group-form" disabled={isSubmitting} className="flex items-center gap-2 px-6 py-2 bg-primary text-white rounded-md hover:bg-primary-hover text-sm font-medium disabled:opacity-70">
            <Save size={16} /> Save Group
          </button>
        </div>
      </div>
    </>
  );
}
