"use client";

import { useFormContext } from "react-hook-form";
import type { SecurityConfigType } from "../audit_security_types/super_admin_security_management.types";

export default function SuperAdminLoginSecurityCard() {
  const { register } = useFormContext<SecurityConfigType>();

  return (
    <div className="bg-card border border-border rounded-lg p-6 shadow-sm flex flex-col gap-6">
      <div className="border-b border-border pb-3 flex justify-between items-center">
        <div>
          <h2 className="text-base font-bold text-text-primary uppercase tracking-wider">Login Security</h2>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-sm font-bold text-text-primary border-l-4 border-primary pl-2">Password policy</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-text-primary">Minimum Password Length</label>
          <input type="number" {...register("minPasswordLength", { valueAsNumber: true })} className="bg-input border border-border rounded-md px-3 py-2 text-sm focus:border-primary outline-none" />
        </div>
        
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-text-primary">Password Expiry (Days)</label>
          <input type="number" {...register("passwordExpiryDays", { valueAsNumber: true })} placeholder="0 for never" className="bg-input border border-border rounded-md px-3 py-2 text-sm focus:border-primary outline-none" />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-text-primary">Failed Login Attempts</label>
          <input type="number" {...register("failedLoginAttempts", { valueAsNumber: true })} className="bg-input border border-border rounded-md px-3 py-2 text-sm focus:border-primary outline-none" />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-text-primary">Account Lock Duration (Mins)</label>
          <input type="number" {...register("accountLockDurationMins", { valueAsNumber: true })} className="bg-input border border-border rounded-md px-3 py-2 text-sm focus:border-primary outline-none" />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-text-primary">Session Timeout (Mins)</label>
          <input type="number" {...register("sessionTimeoutMins", { valueAsNumber: true })} className="bg-input border border-border rounded-md px-3 py-2 text-sm focus:border-primary outline-none" />
        </div>
      </div>

      {/* Toggles Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-border pt-4">
        <label className="flex items-center gap-3 cursor-pointer p-3 border border-border rounded hover:bg-bg-page transition-colors">
          <input type="checkbox" {...register("passwordComplexity")} className="w-4 h-4 text-primary bg-input border-border rounded focus:ring-primary" />
          <div className="flex flex-col">
            <span className="text-sm font-medium text-text-primary">Enforce Password Complexity</span>
            <span className="text-[11px] text-text-secondary">Require uppercase, numbers, special chars</span>
          </div>
        </label>

        <label className="flex items-center gap-3 cursor-pointer p-3 border border-border rounded hover:bg-bg-page transition-colors">
          <input type="checkbox" {...register("concurrentLoginControl")} className="w-4 h-4 text-primary bg-input border-border rounded focus:ring-primary" />
          <div className="flex flex-col">
            <span className="text-sm font-medium text-text-primary">Strict Concurrent Login Control</span>
            <span className="text-[11px] text-text-secondary">Prevent users from logging in on multiple devices</span>
          </div>
        </label>

        <label className="flex items-center gap-3 cursor-pointer p-3 border border-border rounded hover:bg-bg-page transition-colors">
          <input type="checkbox" {...register("rememberDevice")} className="w-4 h-4 text-primary bg-input border-border rounded focus:ring-primary" />
          <div className="flex flex-col">
            <span className="text-sm font-medium text-text-primary">Allow Remember Device</span>
            <span className="text-[11px] text-text-secondary">Enable "Keep me signed in" for 30 days</span>
          </div>
        </label>

        <label className="flex items-center gap-3 cursor-pointer p-3 border border-border rounded hover:bg-bg-page transition-colors">
          <input type="checkbox" {...register("loginNotification")} className="w-4 h-4 text-primary bg-input border-border rounded focus:ring-primary" />
          <div className="flex flex-col">
            <span className="text-sm font-medium text-text-primary">Login Notifications</span>
            <span className="text-[11px] text-text-secondary">Send email alert on new device login</span>
          </div>
        </label>
      </div>

    </div>
    </div>
  );
}
