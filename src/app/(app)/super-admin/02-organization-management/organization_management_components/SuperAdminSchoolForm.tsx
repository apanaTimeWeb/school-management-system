"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { SchoolSchema, type School } from "../organization_management_types/super_admin_schools.types";
import { Save, X } from "lucide-react";
import Link from "next/link";

export default function SuperAdminSchoolForm() {
  const router = useRouter();
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Omit<School, 'id'>>({
    resolver: zodResolver(SchoolSchema),
    defaultValues: {
      isActive: true,
      timeZone: "Asia/Kolkata",
      currency: "INR",
      defaultLanguage: "English",
    }
  });

  const onSubmit = async (data: Omit<School, 'id'>) => {
    console.log("Submitting school data:", data);
    // TODO: Connect to backend API when ready
    // Mock API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    router.push("/super-admin/schools");
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
        
        {/* Basic Information */}
        <div>
          <h3 className="text-sm font-semibold text-text-primary mb-4 border-b border-border pb-2">Basic Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            <div className="flex flex-col gap-1.5 md:col-span-2">
              <label className="text-sm font-medium text-text-primary">School Logo</label>
              <input 
                type="file"
                accept="image/*"
                {...register("logo")} 
                className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all w-full max-w-sm"
              />
              <span className="text-xs text-text-secondary">Upload PNG or JPG (max 2MB).</span>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-text-primary">School Name <span className="text-danger">*</span></label>
              <input 
                {...register("schoolName")} 
                className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                placeholder="Enter school name"
              />
              {errors.schoolName && <span className="text-xs text-danger">{errors.schoolName.message}</span>}
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-text-primary">School Code <span className="text-danger">*</span></label>
              <input 
                {...register("schoolCode")} 
                className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                placeholder="e.g. SCH001"
              />
              {errors.schoolCode && <span className="text-xs text-danger">{errors.schoolCode.message}</span>}
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-text-primary">Principal Name <span className="text-danger">*</span></label>
              <input 
                {...register("principalName")} 
                className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                placeholder="Enter principal name"
              />
              {errors.principalName && <span className="text-xs text-danger">{errors.principalName.message}</span>}
            </div>

          </div>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-sm font-semibold text-text-primary mb-4 border-b border-border pb-2">Contact Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            <div className="flex flex-col gap-1.5 md:col-span-2">
              <label className="text-sm font-medium text-text-primary">Complete Address <span className="text-danger">*</span></label>
              <textarea 
                {...register("address")} 
                rows={3}
                className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                placeholder="Enter full address"
              />
              {errors.address && <span className="text-xs text-danger">{errors.address.message}</span>}
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-text-primary">Contact Number <span className="text-danger">*</span></label>
              <input 
                {...register("contact")} 
                className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                placeholder="Enter 10-digit number"
              />
              {errors.contact && <span className="text-xs text-danger">{errors.contact.message}</span>}
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-text-primary">Email Address <span className="text-danger">*</span></label>
              <input 
                type="email"
                {...register("email")} 
                className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                placeholder="school@example.com"
              />
              {errors.email && <span className="text-xs text-danger">{errors.email.message}</span>}
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-text-primary">Website</label>
              <input 
                type="url"
                {...register("website")} 
                className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                placeholder="https://www.example.com"
              />
              {errors.website && <span className="text-xs text-danger">{errors.website.message}</span>}
            </div>

          </div>
        </div>

        {/* Operating Configuration */}
        <div>
          <h3 className="text-sm font-semibold text-text-primary mb-4 border-b border-border pb-2">Operating Configuration</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-text-primary">School Timings <span className="text-danger">*</span></label>
              <input 
                {...register("schoolTimings")} 
                className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                placeholder="e.g. 08:00 AM - 03:00 PM"
              />
              {errors.schoolTimings && <span className="text-xs text-danger">{errors.schoolTimings.message}</span>}
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-text-primary">Working Days <span className="text-danger">*</span></label>
              <input 
                {...register("workingDays")} 
                className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                placeholder="e.g. Monday to Saturday"
              />
              {errors.workingDays && <span className="text-xs text-danger">{errors.workingDays.message}</span>}
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-text-primary">Affiliation Details</label>
              <input 
                {...register("affiliationDetails")} 
                className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                placeholder="e.g. CBSE Affiliation No: 123456"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-text-primary">Registration Details</label>
              <input 
                {...register("registrationDetails")} 
                className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                placeholder="Registration number"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-text-primary">Time Zone</label>
              <select 
                {...register("timeZone")} 
                className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
              >
                <option value="Asia/Kolkata">Asia/Kolkata (IST)</option>
                <option value="UTC">UTC</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-text-primary">Currency</label>
              <select 
                {...register("currency")} 
                className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
              >
                <option value="INR">INR (₹)</option>
                <option value="USD">USD ($)</option>
              </select>
            </div>
            
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-text-primary">Default Language</label>
              <select 
                {...register("defaultLanguage")} 
                className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
              >
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
              </select>
            </div>

            <div className="flex items-center gap-2 mt-6">
              <input 
                type="checkbox" 
                id="isActive" 
                {...register("isActive")} 
                className="w-4 h-4 text-primary bg-input border-border rounded focus:ring-primary"
              />
              <label htmlFor="isActive" className="text-sm font-medium text-text-primary cursor-pointer">
                School is Active
              </label>
            </div>

          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-end gap-4 mt-4 pt-4 border-t border-border">
          <Link 
            href="/super-admin/schools"
            className="flex items-center gap-2 px-4 py-2 border border-border rounded-md text-text-secondary hover:bg-bg-page transition-colors text-sm font-medium"
          >
            <X size={16} />
            Cancel
          </Link>
          <button 
            type="submit"
            disabled={isSubmitting}
            className="flex items-center gap-2 px-6 py-2 bg-primary text-white rounded-md hover:bg-primary-hover transition-colors text-sm font-medium disabled:opacity-70 disabled:cursor-not-allowed"
          >
            <Save size={16} />
            {isSubmitting ? 'Saving...' : 'Save School'}
          </button>
        </div>

      </form>
    </div>
  );
}
