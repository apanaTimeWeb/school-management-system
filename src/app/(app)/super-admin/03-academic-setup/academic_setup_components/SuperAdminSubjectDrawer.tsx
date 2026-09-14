"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubjectSchema, type SubjectType } from "../academic_setup_types/super_admin_academic_master.types";
import { Save, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SuperAdminSubjectDrawer({ isOpen, onClose }: DrawerProps) {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<any>({
    resolver: zodResolver(SubjectSchema),
    defaultValues: { isActive: true, subjectCategory: 'Core', maxMarks: 100, passMarks: 33, theoryMarks: 100, practicalMarks: 0, internalAssessment: 0 }
  });

  const onSubmit = async (data: any) => {
    console.log("Submitting subject data:", data);
    await new Promise(resolve => setTimeout(resolve, 1000));
    reset();
    onClose();
  };

  return (
    <>
      {isOpen && <div className="fixed inset-0 bg-overlay/50 z-40" onClick={onClose} />}
      <div className={cn(
        "fixed top-0 right-0 h-screen w-full sm:w-[480px] bg-card shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex items-center justify-between p-6 border-b border-border bg-header">
          <h2 className="text-lg font-bold text-text-primary">Subject Configuration</h2>
          <button onClick={onClose} className="p-1.5 text-text-secondary hover:text-danger hover:bg-danger-bg rounded-md">
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
          <form id="subject-form" onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
            
            {/* Identity */}
            <div className="flex flex-col gap-4">
              <h3 className="text-xs font-bold text-text-primary uppercase tracking-wider border-b border-border pb-2">Basic Info</h3>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-text-primary">Subject Name <span className="text-danger">*</span></label>
                <input {...register("subjectName")} placeholder="e.g. Mathematics" className="bg-input border border-border rounded-md px-3 py-2 text-sm focus:border-primary outline-none text-text-primary" />
                {errors.subjectName && <span className="text-xs text-danger">{String(errors.subjectName.message)}</span>}
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-text-primary">Subject Code <span className="text-danger">*</span></label>
                  <input {...register("subjectCode")} placeholder="e.g. MAT-101" className="bg-input border border-border rounded-md px-3 py-2 text-sm focus:border-primary outline-none text-text-primary" />
                  {errors.subjectCode && <span className="text-xs text-danger">{String(errors.subjectCode.message)}</span>}
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-text-primary">Category <span className="text-danger">*</span></label>
                  <select {...register("subjectCategory")} className="bg-input border border-border rounded-md px-3 py-2 text-sm focus:border-primary outline-none text-text-primary">
                    <option value="Core">Core</option>
                    <option value="Elective">Elective</option>
                    <option value="Optional">Optional</option>
                    <option value="Practical">Practical</option>
                    <option value="Language">Language</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Marks Config */}
            <div className="flex flex-col gap-4">
              <h3 className="text-xs font-bold text-text-primary uppercase tracking-wider border-b border-border pb-2">Scoring & Credits</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-text-primary">Max Marks</label>
                  <input type="number" {...register("maxMarks", { valueAsNumber: true })} className="bg-input border border-border rounded-md px-3 py-2 text-sm focus:border-primary outline-none text-text-primary" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-text-primary">Pass Marks</label>
                  <input type="number" {...register("passMarks", { valueAsNumber: true })} className="bg-input border border-border rounded-md px-3 py-2 text-sm focus:border-primary outline-none text-text-primary" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-text-primary">Credits</label>
                  <input type="number" step="0.5" {...register("credit", { valueAsNumber: true })} className="bg-input border border-border rounded-md px-3 py-2 text-sm focus:border-primary outline-none text-text-primary" />
                </div>
              </div>
            </div>

            {/* Distribution */}
            <div className="flex flex-col gap-4">
              <h3 className="text-xs font-bold text-text-primary uppercase tracking-wider border-b border-border pb-2">Marks Distribution</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-text-primary">Theory</label>
                  <input type="number" {...register("theoryMarks", { valueAsNumber: true })} className="bg-input border border-border rounded-md px-3 py-2 text-sm focus:border-primary outline-none text-text-primary" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-text-primary">Practical</label>
                  <input type="number" {...register("practicalMarks", { valueAsNumber: true })} className="bg-input border border-border rounded-md px-3 py-2 text-sm focus:border-primary outline-none text-text-primary" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-text-primary">Internal</label>
                  <input type="number" {...register("internalAssessment", { valueAsNumber: true })} className="bg-input border border-border rounded-md px-3 py-2 text-sm focus:border-primary outline-none text-text-primary" />
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-2 mt-2">
              <input type="checkbox" id="isActive" {...register("isActive")} className="w-4 h-4 text-primary bg-input border-border rounded focus:ring-primary" />
              <label htmlFor="isActive" className="text-sm font-medium text-text-primary cursor-pointer">Subject is Active in Curriculum</label>
            </div>
          </form>
        </div>

        <div className="p-6 border-t border-border bg-header flex items-center justify-end gap-3">
          <button type="button" onClick={onClose} className="px-4 py-2 border border-border rounded-md text-text-secondary hover:bg-bg-page text-sm font-medium">Cancel</button>
          <button type="submit" form="subject-form" disabled={isSubmitting} className="flex items-center gap-2 px-6 py-2 bg-primary text-black rounded-md hover:bg-primary-hover text-sm font-medium disabled:opacity-70">
            <Save size={16} /> Save Configuration
          </button>
        </div>
      </div>
    </>
  );
}
