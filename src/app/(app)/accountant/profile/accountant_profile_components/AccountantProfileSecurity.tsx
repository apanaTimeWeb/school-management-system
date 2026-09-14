"use client";
import React from "react";
import { Key, Shield, Smartphone } from "lucide-react";
import { useAccountantProfileStore } from "../accountant_profile_store/useAccountantProfileStore";
import clsx from "clsx";

export default function AccountantProfileSecurity() {
  const { is2FAEnabled, toggle2FA } = useAccountantProfileStore();

  return (
    <div className="space-y-6 fade-in">
      
      {/* Change Password */}
      <div className="bg-card border border-border rounded-xl shadow-sm p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-warning/10 flex items-center justify-center text-warning">
            <Key size={20} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-text-primary">Change Password</h3>
            <p className="text-xs text-text-secondary mt-0.5">Ensure your account is using a long, random password to stay secure.</p>
          </div>
        </div>

        <div className="space-y-4 max-w-md">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-text-secondary uppercase">Current Password</label>
            <input type="password" placeholder="••••••••" className="w-full bg-bg-input border border-border rounded-lg px-4 py-2.5 text-sm text-text-primary focus:border-primary outline-none transition-colors" />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-text-secondary uppercase">New Password</label>
            <input type="password" placeholder="••••••••" className="w-full bg-bg-input border border-border rounded-lg px-4 py-2.5 text-sm text-text-primary focus:border-primary outline-none transition-colors" />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-text-secondary uppercase">Confirm New Password</label>
            <input type="password" placeholder="••••••••" className="w-full bg-bg-input border border-border rounded-lg px-4 py-2.5 text-sm text-text-primary focus:border-primary outline-none transition-colors" />
          </div>
          <button className="px-6 py-2.5 text-sm font-bold bg-bg-page border border-border text-text-primary rounded-lg hover:border-primary hover:text-primary transition-colors">
            Update Password
          </button>
        </div>
      </div>

      {/* Two-Factor Authentication */}
      <div className="bg-card border border-border rounded-xl shadow-sm p-6">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center text-success">
              <Shield size={20} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-text-primary">Two-Factor Authentication (2FA)</h3>
              <p className="text-xs text-text-secondary mt-0.5">Add additional security to your account using an authenticator app.</p>
            </div>
          </div>
          
          <button 
            onClick={toggle2FA}
            className={clsx(
              "relative inline-flex h-6 w-11 items-center rounded-full transition-colors",
              is2FAEnabled ? "bg-primary" : "bg-bg-input border border-border"
            )}
          >
            <span className={clsx("inline-block h-4 w-4 transform rounded-full bg-white transition-transform", is2FAEnabled ? "translate-x-6" : "translate-x-1")} />
          </button>
        </div>

        {is2FAEnabled && (
          <div className="p-4 bg-success/5 border border-success/20 rounded-lg flex items-start gap-4">
            <Smartphone className="text-success mt-1" size={20} />
            <div>
              <p className="text-sm font-bold text-success">2FA is currently enabled.</p>
              <p className="text-xs text-text-secondary mt-1">Your account is secured. Every time you log in, you will be required to enter a code from your authenticator app.</p>
              <button className="mt-3 px-4 py-1.5 text-xs font-bold bg-bg-page border border-border text-text-primary rounded hover:bg-bg-input transition-colors">
                Configure Authenticator App
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
