"use client";

import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ShieldCheck, Save, Loader2 } from "lucide-react";
import { SecurityConfigSchema, type SecurityConfigType } from "@/app/(app)/super-admin/security-management/super_admin_security_management_types/super_admin_security_management.types";

import SuperAdminLoginSecurityCard from "./super_admin_security_management_components/SuperAdminLoginSecurityCard";
import SuperAdmin2FACard from "./super_admin_security_management_components/SuperAdmin2FACard";
import SuperAdminAccessControlCard from "./super_admin_security_management_components/SuperAdminAccessControlCard";

export default function SuperAdminSecurityManagementPage() {
  const [isSaving, setIsSaving] = useState(false);

  const methods = useForm<SecurityConfigType>({
    resolver: zodResolver(SecurityConfigSchema),
    defaultValues: {
      minPasswordLength: 8,
      passwordComplexity: true,
      passwordExpiryDays: 90,
      failedLoginAttempts: 5,
      accountLockDurationMins: 30,
      sessionTimeoutMins: 60,
      concurrentLoginControl: false,
      rememberDevice: true,
      loginNotification: true,
      twoFactorEnabled: false,
      useOtp: false,
      useAuthenticator: false,
      enableBackupCodes: false,
      ipRestrictionEnabled: false,
      deviceRestrictionEnabled: false,
      browserSessionControl: true,
    }
  });

  const onSubmit = async (data: SecurityConfigType) => {
    setIsSaving(true);
    console.log("Saving global security config:", data);
    await new Promise(r => setTimeout(r, 1000)); // Simulate API call
    setIsSaving(false);
  };

  return (
    <div className="flex flex-col gap-6 max-w-5xl mx-auto pb-12">
      
      {/* Header & Sticky Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sticky top-0 bg-bg-page/90 backdrop-blur-sm z-20 py-4 border-b border-border">
        <div>
          <h1 className="text-[22px] font-bold text-text-primary flex items-center gap-2">
            <ShieldCheck size={24} className="text-primary" /> Security Management
          </h1>
          <p className="text-sm text-text-secondary mt-1">Complete system-wide security, 2FA, and access control policies.</p>
        </div>
        
        <div className="flex items-center gap-3">
          <button 
            type="button"
            onClick={methods.handleSubmit(onSubmit)}
            disabled={isSaving}
            className="flex items-center gap-2 px-6 py-2.5 bg-primary text-white text-sm font-bold rounded-md hover:bg-primary-hover transition-all shadow-sm disabled:opacity-70"
          >
            {isSaving ? <Loader2 size={16} className="animate-spin" /> : <Save size={16} />}
            {isSaving ? 'Saving...' : 'Save Policies'}
          </button>
        </div>
      </div>

      {/* Main Form Content */}
      <FormProvider {...methods}>
        <form id="security-form" onSubmit={methods.handleSubmit(onSubmit)} className="flex flex-col gap-8">
          <SuperAdminLoginSecurityCard />
          <SuperAdmin2FACard />
          <SuperAdminAccessControlCard />
        </form>
      </FormProvider>
      
    </div>
  );
}
