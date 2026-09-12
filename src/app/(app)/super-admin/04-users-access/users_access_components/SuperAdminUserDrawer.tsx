"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserProfileSchema, type UserProfileType } from "../users_access_types/super_admin_user_management.types";
import { Save, X, Upload } from "lucide-react";
import { cn } from "@/lib/utils";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SuperAdminUserDrawer({ isOpen, onClose }: DrawerProps) {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<Omit<UserProfileType, 'id'>>({
    resolver: zodResolver(UserProfileSchema),
    defaultValues: { status: 'Active', role: 'Student' }
  });

  const onSubmit = async (data: Omit<UserProfileType, 'id'>) => {
    console.log("Submitting user data:", data);
    await new Promise(resolve => setTimeout(resolve, 1000));
    reset();
    onClose();
  };

  const ROLES = ['Admin', 'Principal', 'Teacher', 'Student', 'Parent', 'Accountant', 'Office/HR', 'Librarian', 'Transport', 'Hostel'];

  return (
    <>
      {isOpen && <div className="fixed inset-0 bg-overlay/50 z-40" onClick={onClose} />}
      <div className={cn(
        "fixed top-0 right-0 h-screen w-full sm:w-[500px] bg-card shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex items-center justify-between p-6 border-b border-border bg-header">
          <h2 className="text-lg font-bold text-text-primary">Create User Profile</h2>
          <button onClick={onClose} className="p-1.5 text-text-secondary hover:text-danger hover:bg-danger-bg rounded-md">
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
          <form id="user-form" onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
            
            {/* Photo & Basics */}
            <div className="flex gap-4 items-start border-b border-border pb-6">
              <div className="w-20 h-20 rounded-full border-2 border-dashed border-border flex flex-col items-center justify-center text-text-secondary cursor-pointer hover:bg-bg-page hover:text-primary transition-colors">
                <Upload size={20} className="mb-1" />
                <span className="text-[10px] font-medium text-center leading-tight">Profile<br/>Photo</span>
              </div>
              <div className="flex-1 flex flex-col gap-3">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-text-primary">Full Name <span className="text-danger">*</span></label>
                  <input {...register("name")} placeholder="John Doe" className="bg-input border border-border rounded-md px-3 py-1.5 text-sm focus:border-primary outline-none text-text-primary" />
                  {errors.name && <span className="text-xs text-danger">{errors.name.message}</span>}
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-text-primary">Username <span className="text-danger">*</span></label>
                  <input {...register("username")} placeholder="john.doe" className="bg-input border border-border rounded-md px-3 py-1.5 text-sm focus:border-primary outline-none text-text-primary" />
                  {errors.username && <span className="text-xs text-danger">{errors.username.message}</span>}
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-text-primary">Email <span className="text-danger">*</span></label>
                <input type="email" {...register("email")} placeholder="john@example.com" className="bg-input border border-border rounded-md px-3 py-2 text-sm focus:border-primary outline-none text-text-primary" />
                {errors.email && <span className="text-xs text-danger">{errors.email.message}</span>}
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-text-primary">Mobile <span className="text-danger">*</span></label>
                <input {...register("mobile")} placeholder="9876543210" className="bg-input border border-border rounded-md px-3 py-2 text-sm focus:border-primary outline-none text-text-primary" />
                {errors.mobile && <span className="text-xs text-danger">{errors.mobile.message}</span>}
              </div>
            </div>

            {/* Classification */}
            <div className="flex flex-col gap-4 border-t border-border pt-4">
              <h3 className="text-xs font-bold text-text-primary uppercase tracking-wider">Role & Placement</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-text-primary">User Type / Role <span className="text-danger">*</span></label>
                  <select {...register("role")} className="bg-input border border-border rounded-md px-3 py-2 text-sm focus:border-primary outline-none text-text-primary">
                    {ROLES.map(role => <option key={role} value={role}>{role}</option>)}
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-text-primary">Branch <span className="text-danger">*</span></label>
                  <input {...register("branch")} placeholder="Main Campus" className="bg-input border border-border rounded-md px-3 py-2 text-sm focus:border-primary outline-none text-text-primary" />
                  {errors.branch && <span className="text-xs text-danger">{errors.branch.message}</span>}
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-text-primary">Department</label>
                  <input {...register("department")} placeholder="e.g. IT, Academic" className="bg-input border border-border rounded-md px-3 py-2 text-sm focus:border-primary outline-none text-text-primary" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-text-primary">Initial Status</label>
                  <select {...register("status")} className="bg-input border border-border rounded-md px-3 py-2 text-sm focus:border-primary outline-none text-text-primary">
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>
              </div>
            </div>

          </form>
        </div>

        <div className="p-6 border-t border-border bg-header flex items-center justify-end gap-3">
          <button type="button" onClick={onClose} className="px-4 py-2 border border-border rounded-md text-text-secondary hover:bg-bg-page text-sm font-medium">Cancel</button>
          <button type="submit" form="user-form" disabled={isSubmitting} className="flex items-center gap-2 px-6 py-2 bg-primary text-white rounded-md hover:bg-primary-hover text-sm font-medium disabled:opacity-70">
            <Save size={16} /> Save User
          </button>
        </div>
      </div>
    </>
  );
}
