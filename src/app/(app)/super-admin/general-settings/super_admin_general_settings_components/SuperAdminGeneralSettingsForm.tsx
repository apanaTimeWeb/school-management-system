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
      <form onSubmit={methods.handleSubmit(onSubmit)} className="flex flex-col gap-6 pb-12">
        
        <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* 1. School name */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-text-secondary uppercase">School name</label>
              <input type="text" {...methods.register("schoolName")} className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" />
            </div>

            {/* 2. Logo */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-text-secondary uppercase">Logo</label>
              <div className="border border-dashed border-border rounded-md p-2 flex items-center justify-center text-center hover:bg-bg-page cursor-pointer h-[38px]">
                <span className="text-xs font-medium text-text-primary flex items-center gap-2"><UploadCloud size={14} /> Upload Logo</span>
              </div>
            </div>

            {/* 3. Favicon */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-text-secondary uppercase">Favicon</label>
              <div className="border border-dashed border-border rounded-md p-2 flex items-center justify-center text-center hover:bg-bg-page cursor-pointer h-[38px]">
                <span className="text-xs font-medium text-text-primary flex items-center gap-2"><UploadCloud size={14} /> Upload Favicon</span>
              </div>
            </div>

            {/* 4. Address */}
            <div className="flex flex-col gap-1.5 md:col-span-2 lg:col-span-3">
              <label className="text-xs font-bold text-text-secondary uppercase">Address</label>
              <input type="text" {...methods.register("address")} className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" />
            </div>

            {/* 5. Phone */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-text-secondary uppercase">Phone</label>
              <input type="text" {...methods.register("phone")} className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" />
            </div>

            {/* 6. Email */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-text-secondary uppercase">Email</label>
              <input type="email" {...methods.register("email")} className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" />
            </div>

            {/* 7. Website */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-text-secondary uppercase">Website</label>
              <input type="url" {...methods.register("website")} className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" />
            </div>

            {/* 8. Timezone */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-text-secondary uppercase">Timezone</label>
              <select {...methods.register("timezone")} className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none">
                <option value="Asia/Kolkata">Asia/Kolkata (IST)</option>
                <option value="UTC">UTC</option>
              </select>
            </div>

            {/* 9. Date format */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-text-secondary uppercase">Date format</label>
              <select {...methods.register("dateFormat")} className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none">
                <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                <option value="YYYY-MM-DD">YYYY-MM-DD</option>
              </select>
            </div>

            {/* 10. Time format */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-text-secondary uppercase">Time format</label>
              <select {...methods.register("timeFormat")} className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none">
                <option value="12-hour">12-hour (AM/PM)</option>
                <option value="24-hour">24-hour</option>
              </select>
            </div>

            {/* 11. Currency */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-text-secondary uppercase">Currency</label>
              <input type="text" {...methods.register("currency")} className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" />
            </div>

            {/* 12. Number format */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-text-secondary uppercase">Number format</label>
              <select {...methods.register("numberFormat")} className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none">
                <option value="1,00,000.00">1,00,000.00 (Indian)</option>
                <option value="100,000.00">100,000.00 (Global)</option>
              </select>
            </div>

            {/* 13. Default language */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-text-secondary uppercase">Default language</label>
              <select {...methods.register("defaultLanguage")} className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none">
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
              </select>
            </div>

            {/* 14. Academic session */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-text-secondary uppercase">Academic session</label>
              <select {...methods.register("academicSession")} className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none">
                <option value="2024-2025">2024-2025</option>
                <option value="2023-2024">2023-2024</option>
              </select>
            </div>

            {/* 15. Financial year */}
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
        <div className="flex justify-end mt-2">
          <button type="submit" className="flex items-center gap-2 px-8 py-3 bg-primary text-white text-sm font-bold rounded-md hover:bg-primary-hover transition-colors shadow-sm">
            <Save size={18} /> Save Settings
          </button>
        </div>

      </form>
    </FormProvider>
  );
}
