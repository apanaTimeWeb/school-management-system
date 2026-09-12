"use client";

import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UploadCloud, Save } from "lucide-react";
import { GeneralSettingsSchema, type GeneralSettingsType } from "../super_admin_general_settings_types/super_admin_general_settings.types";

export default function SuperAdminGeneralSettingsForm() {
  const methods = useForm<GeneralSettingsType>({
    resolver: zodResolver(GeneralSettingsSchema),
    defaultValues: {
      schoolName: "ApanaTime Web ERP",
      address: "123 Education Lane, Knowledge City",
      phone: "+91 9876543210",
      email: "admin@apanatime.com",
      website: "https://apanatime.com",
      timezone: "Asia/Kolkata",
      dateFormat: "DD/MM/YYYY",
      timeFormat: "12-hour",
      currency: "INR",
      numberFormat: "1,00,000.00",
      defaultLanguage: "English",
      academicSession: "2024-2025",
      financialYear: "FY 2024-25"
    }
  });

  const onSubmit = (data: GeneralSettingsType) => {
    console.log("Saving General Settings:", data);
    alert("Settings saved successfully!");
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="flex flex-col gap-8 pb-12">
        
        {/* Basic Details & Branding Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          <div className="bg-card border border-border rounded-lg p-6 shadow-sm flex flex-col gap-5">
            <h2 className="text-sm font-bold text-text-primary uppercase tracking-wider border-b border-border pb-2">Basic Information</h2>
            
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-text-secondary uppercase">School name</label>
              <input type="text" {...methods.register("schoolName")} className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-text-secondary uppercase">Phone</label>
                <input type="text" {...methods.register("phone")} className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-text-secondary uppercase">Email</label>
                <input type="email" {...methods.register("email")} className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-text-secondary uppercase">Website</label>
              <input type="url" {...methods.register("website")} className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-text-secondary uppercase">Address</label>
              <textarea rows={2} {...methods.register("address")} className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none resize-none" />
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 shadow-sm flex flex-col gap-5">
            <h2 className="text-sm font-bold text-text-primary uppercase tracking-wider border-b border-border pb-2">Branding Assets</h2>
            
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-text-secondary uppercase">Logo</label>
              <div className="border-2 border-dashed border-border rounded-lg p-6 flex flex-col items-center justify-center text-center hover:bg-bg-page transition-colors cursor-pointer">
                <UploadCloud size={24} className="text-primary mb-2" />
                <span className="text-xs font-medium text-text-primary">Upload Primary Logo</span>
                <span className="text-[10px] text-text-secondary mt-1">Recommended: 250x100px PNG transparent</span>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-text-secondary uppercase">Favicon</label>
              <div className="border-2 border-dashed border-border rounded-lg p-6 flex flex-col items-center justify-center text-center hover:bg-bg-page transition-colors cursor-pointer">
                <UploadCloud size={24} className="text-primary mb-2" />
                <span className="text-xs font-medium text-text-primary">Upload Favicon</span>
                <span className="text-[10px] text-text-secondary mt-1">Recommended: 32x32px ICO or PNG</span>
              </div>
            </div>
          </div>

        </div>

        {/* Localization & Master Configurations Row */}
        <div className="bg-card border border-border rounded-lg p-6 shadow-sm flex flex-col gap-6">
          <h2 className="text-sm font-bold text-text-primary uppercase tracking-wider border-b border-border pb-2">Localization & Core Configurations</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-text-secondary uppercase">Timezone</label>
              <select {...methods.register("timezone")} className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none">
                <option value="Asia/Kolkata">Asia/Kolkata (IST)</option>
                <option value="UTC">UTC</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-text-secondary uppercase">Date format</label>
              <select {...methods.register("dateFormat")} className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none">
                <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                <option value="YYYY-MM-DD">YYYY-MM-DD</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-text-secondary uppercase">Time format</label>
              <select {...methods.register("timeFormat")} className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none">
                <option value="12-hour">12-hour (AM/PM)</option>
                <option value="24-hour">24-hour</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-text-secondary uppercase">Currency</label>
              <input type="text" {...methods.register("currency")} className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-text-secondary uppercase">Number format</label>
              <select {...methods.register("numberFormat")} className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none">
                <option value="1,00,000.00">1,00,000.00 (Indian)</option>
                <option value="100,000.00">100,000.00 (Global)</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-text-secondary uppercase">Default language</label>
              <select {...methods.register("defaultLanguage")} className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none">
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-text-secondary uppercase">Academic session</label>
              <select {...methods.register("academicSession")} className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none">
                <option value="2024-2025">2024-2025</option>
                <option value="2023-2024">2023-2024</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-text-secondary uppercase">Financial year</label>
              <select {...methods.register("financialYear")} className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none">
                <option value="FY 2024-25">FY 2024-25 (Apr-Mar)</option>
                <option value="FY 2024">FY 2024 (Jan-Dec)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Global Save Button */}
        <div className="flex justify-end">
          <button type="submit" className="flex items-center gap-2 px-8 py-3 bg-primary text-white text-sm font-bold rounded-md hover:bg-primary-hover transition-colors shadow-sm">
            <Save size={18} /> Save Settings
          </button>
        </div>

      </form>
    </FormProvider>
  );
}
