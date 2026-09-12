"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RolloverSchema, type SessionRollover } from "../academic_setup_types/super_admin_sessions.types";
import { FastForward, X, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SuperAdminRolloverDrawer({ isOpen, onClose }: DrawerProps) {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<SessionRollover>({
    resolver: zodResolver(RolloverSchema),
    defaultValues: {
      copyClasses: true, copySubjects: true, copyTeachers: true,
      copyHouses: true, copySections: true,
      copyTimetable: false, copyFeeStructures: false, copyExamConfig: false
    }
  });

  const onSubmit = async (data: SessionRollover) => {
    console.log("Submitting rollover data:", data);
    await new Promise(resolve => setTimeout(resolve, 2000)); // Simulating heavy operation
    reset();
    onClose();
  };

  const CheckboxItem = ({ name, label, desc }: { name: keyof SessionRollover, label: string, desc: string }) => (
    <div className="flex items-start gap-3 p-3 border border-border rounded-md bg-bg-page hover:border-primary transition-colors">
      <input type="checkbox" id={name} {...register(name)} className="mt-1 w-4 h-4 text-primary bg-input border-border rounded focus:ring-primary" />
      <div className="flex flex-col">
        <label htmlFor={name} className="text-sm font-semibold text-text-primary cursor-pointer">{label}</label>
        <span className="text-xs text-text-secondary">{desc}</span>
      </div>
    </div>
  );

  return (
    <>
      {isOpen && <div className="fixed inset-0 bg-overlay/50 z-40" onClick={onClose} />}
      <div className={cn(
        "fixed top-0 right-0 h-screen w-full sm:w-[500px] bg-card shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex items-center justify-between p-6 border-b border-border bg-header">
          <h2 className="text-lg font-bold text-text-primary flex items-center gap-2">
            <FastForward size={20} className="text-primary" />
            Session Rollover
          </h2>
          <button onClick={onClose} className="p-1.5 text-text-secondary hover:text-danger hover:bg-danger-bg rounded-md">
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
          <div className="bg-warning-bg border border-warning text-warning p-4 rounded-md mb-6 flex gap-3">
            <AlertTriangle size={20} className="shrink-0 mt-0.5" />
            <p className="text-xs font-medium leading-relaxed">
              Rollover will create a new academic session and safely copy the selected master data from the previous session. Student promotions are handled separately in the Academics module.
            </p>
          </div>

          <form id="rollover-form" onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
            
            {/* Session Config */}
            <div className="flex flex-col gap-4 border-b border-border pb-6">
              <h3 className="text-sm font-bold text-text-primary uppercase tracking-wider">Target Session Details</h3>
              
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-text-primary">Copy from Session <span className="text-danger">*</span></label>
                <select {...register("fromSessionId")} className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none">
                  <option value="">Select source session...</option>
                  <option value="ses_1">2026-2027 (Current)</option>
                  <option value="ses_0">2025-2026 (Previous)</option>
                </select>
                {errors.fromSessionId && <span className="text-xs text-danger">{errors.fromSessionId.message}</span>}
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-text-primary">New Session Name <span className="text-danger">*</span></label>
                <input {...register("toSessionName")} placeholder="e.g. 2027-2028" className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" />
                {errors.toSessionName && <span className="text-xs text-danger">{errors.toSessionName.message}</span>}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-text-primary">Start Date <span className="text-danger">*</span></label>
                  <input type="date" {...register("startDate")} className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" />
                  {errors.startDate && <span className="text-xs text-danger">{errors.startDate.message}</span>}
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-text-primary">End Date <span className="text-danger">*</span></label>
                  <input type="date" {...register("endDate")} className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" />
                  {errors.endDate && <span className="text-xs text-danger">{errors.endDate.message}</span>}
                </div>
              </div>
            </div>

            {/* Rollover Data Checkboxes */}
            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-bold text-text-primary uppercase tracking-wider">Select Data to Copy</h3>
              <div className="grid grid-cols-1 gap-3">
                <CheckboxItem name="copyClasses" label="Classes & Categories" desc="Copy all class names, streams, and categories." />
                <CheckboxItem name="copySections" label="Sections" desc="Copy all section configurations per class." />
                <CheckboxItem name="copySubjects" label="Subjects Configuration" desc="Copy core, elective, and optional subjects mapping." />
                <CheckboxItem name="copyTeachers" label="Teacher Assignments" desc="Copy class teacher and subject teacher allocations." />
                <CheckboxItem name="copyHouses" label="House Master" desc="Copy house names and house master allocations." />
                <CheckboxItem name="copyFeeStructures" label="Fee Structures" desc="Copy fee heads and categories (amounts can be edited later)." />
                <CheckboxItem name="copyExamConfig" label="Examination Config" desc="Copy exam terms, max marks, and grading scales." />
                <CheckboxItem name="copyTimetable" label="Timetable Templates" desc="Copy the weekly timetable structure for classes." />
              </div>
            </div>

          </form>
        </div>

        <div className="p-6 border-t border-border bg-header flex items-center justify-end gap-3">
          <button type="button" onClick={onClose} className="px-4 py-2 border border-border rounded-md text-text-secondary hover:bg-bg-page text-sm font-medium">Cancel</button>
          <button type="submit" form="rollover-form" disabled={isSubmitting} className="flex items-center gap-2 px-6 py-2 bg-primary text-white rounded-md hover:bg-primary-hover text-sm font-medium disabled:opacity-70">
            <FastForward size={16} />
            {isSubmitting ? 'Processing Rollover...' : 'Execute Rollover'}
          </button>
        </div>
      </div>
    </>
  );
}
