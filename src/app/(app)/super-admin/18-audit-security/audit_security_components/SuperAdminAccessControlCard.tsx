"use client";

import { useFormContext } from "react-hook-form";
import type { SecurityConfigType } from "../audit_security_types/super_admin_security_management.types";

export default function SuperAdminAccessControlCard() {
  const { register, watch } = useFormContext<SecurityConfigType>();
  const isIpEnabled = watch("ipRestrictionEnabled");

  return (
    <div className="bg-card border border-border rounded-lg p-6 shadow-sm flex flex-col gap-6">
      
      <div className="border-b border-border pb-3">
        <h2 className="text-base font-bold text-text-primary uppercase tracking-wider">Access Control</h2>
      </div>

      <div className="flex flex-col gap-6">
        
        {/* IP & Country Restrictions */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <input type="checkbox" id="ipRestrictionEnabled" {...register("ipRestrictionEnabled")} className="w-4 h-4 text-primary bg-input border-border rounded focus:ring-primary" />
            <label htmlFor="ipRestrictionEnabled" className="text-sm font-medium text-text-primary cursor-pointer">IP restriction</label>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-7 opacity-100 transition-opacity">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-text-secondary uppercase">Allowed IPs (Comma separated)</label>
              <textarea 
                {...register("allowedIps")} 
                disabled={!isIpEnabled}
                placeholder="e.g. 192.168.1.1, 10.0.0.0/24" 
                rows={2}
                className="bg-input border border-border rounded-md px-3 py-2 text-sm focus:border-primary outline-none disabled:opacity-50" 
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-text-secondary uppercase">Allowed Countries (ISO Codes)</label>
              <input 
                {...register("allowedCountries")} 
                placeholder="e.g. IN, US, AE (Leave blank for all)" 
                className="bg-input border border-border rounded-md px-3 py-2 text-sm focus:border-primary outline-none" 
              />
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-border my-2"></div>

        {/* Device Restrictions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <label className="flex items-start gap-3 cursor-pointer">
            <input type="checkbox" {...register("deviceRestrictionEnabled")} className="w-4 h-4 text-primary bg-input border-border rounded focus:ring-primary mt-0.5" />
            <div className="flex flex-col">
              <span className="text-sm font-medium text-text-primary">Device restriction</span>
            </div>
          </label>

          <label className="flex items-start gap-3 cursor-pointer">
            <input type="checkbox" {...register("browserSessionControl")} className="w-4 h-4 text-primary bg-input border-border rounded focus:ring-primary mt-0.5" />
            <div className="flex flex-col">
              <span className="text-sm font-medium text-text-primary">Browser/session control</span>
            </div>
          </label>
        </div>

      </div>
    </div>
  );
}
