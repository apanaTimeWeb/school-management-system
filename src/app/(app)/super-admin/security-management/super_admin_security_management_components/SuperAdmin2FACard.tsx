"use client";

import { useFormContext } from "react-hook-form";
import type { SecurityConfigType } from "@/app/(app)/super-admin/security-management/super_admin_security_management_types/super_admin_security_management.types";
import { cn } from "@/lib/utils";

export default function SuperAdmin2FACard() {
  const { register, watch } = useFormContext<SecurityConfigType>();
  const is2FAEnabled = watch("twoFactorEnabled");

  return (
    <div className={cn(
      "border rounded-lg p-6 shadow-sm flex flex-col gap-6 transition-colors",
      is2FAEnabled ? "bg-card border-primary/30" : "bg-bg-page border-border"
    )}>
      
      <div className="flex items-center justify-between border-b border-border pb-3">
        <div>
          <h2 className="text-base font-bold text-text-primary uppercase tracking-wider">2FA</h2>
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor="twoFactorEnabled" className="text-sm font-bold text-text-primary cursor-pointer">Enable / Disable</label>
          <input type="checkbox" id="twoFactorEnabled" {...register("twoFactorEnabled")} className="w-5 h-5 text-primary cursor-pointer accent-primary" />
        </div>
      </div>

      <div className={cn("grid grid-cols-1 sm:grid-cols-3 gap-4 transition-opacity", is2FAEnabled ? "opacity-100" : "opacity-40 pointer-events-none")}>
        
        <label className="flex items-start gap-3 cursor-pointer p-4 border border-border rounded bg-card hover:border-primary transition-colors">
          <input type="checkbox" {...register("useOtp")} className="w-4 h-4 text-primary bg-input border-border rounded focus:ring-primary mt-1" />
          <div className="flex flex-col">
            <span className="text-sm font-medium text-text-primary">OTP</span>
            <span className="text-[11px] text-text-secondary mt-1">Users receive a one-time passcode on their registered contact.</span>
          </div>
        </label>

        <label className="flex items-start gap-3 cursor-pointer p-4 border border-border rounded bg-card hover:border-primary transition-colors">
          <input type="checkbox" {...register("useAuthenticator")} className="w-4 h-4 text-primary bg-input border-border rounded focus:ring-primary mt-1" />
          <div className="flex flex-col">
            <span className="text-sm font-medium text-text-primary">Authenticator</span>
            <span className="text-[11px] text-text-secondary mt-1">Support for Google Authenticator, Authy, etc. via TOTP.</span>
          </div>
        </label>

        <label className="flex items-start gap-3 cursor-pointer p-4 border border-border rounded bg-card hover:border-primary transition-colors">
          <input type="checkbox" {...register("enableBackupCodes")} className="w-4 h-4 text-primary bg-input border-border rounded focus:ring-primary mt-1" />
          <div className="flex flex-col">
            <span className="text-sm font-medium text-text-primary">Backup codes</span>
            <span className="text-[11px] text-text-secondary mt-1">Generate 10 static recovery codes for offline access.</span>
          </div>
        </label>

      </div>
    </div>
  );
}
