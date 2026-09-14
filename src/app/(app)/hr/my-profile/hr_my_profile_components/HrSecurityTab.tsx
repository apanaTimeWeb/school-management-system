"use client";

import { useState } from "react";
import { KeyRound, ShieldAlert, SmartphoneNfc } from "lucide-react";
import type { UserProfileData } from "../hr_my_profile_types/HrMyProfileTypes";

interface HrSecurityTabProps {
  profile: UserProfileData;
  handle2FAToggle: () => void;
}

export default function HrSecurityTab({ profile, handle2FAToggle }: HrSecurityTabProps) {
  const [isUpdatingPassword, setIsUpdatingPassword] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleUpdatePassword = () => {
    setIsUpdatingPassword(true);
    setTimeout(() => {
      setIsUpdatingPassword(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    }, 1500);
  };

  return (
    <div className="motion-safe:animate-in motion-safe:fade-in duration-300 flex flex-col gap-6">
      
      {/* Password Change */}
      <div className="bg-card border border-border rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2"><KeyRound size={20} className="text-primary"/> Change Password</h3>
        <p className="text-sm text-muted-foreground mb-6">Ensure your account is using a long, random password to stay secure.</p>
        
        <div className="max-w-md space-y-4">
           <div>
             <label className="block text-[10px] font-bold text-muted-foreground mb-1 uppercase tracking-wider">Current Password</label>
             <input type="password" placeholder="••••••••" className="w-full px-3 py-2 bg-input border border-border rounded-md text-sm font-bold text-foreground outline-none focus:border-primary" />
           </div>
           <div>
             <label className="block text-[10px] font-bold text-muted-foreground mb-1 uppercase tracking-wider">New Password</label>
             <input type="password" placeholder="••••••••" className="w-full px-3 py-2 bg-input border border-border rounded-md text-sm font-bold text-foreground outline-none focus:border-primary" />
           </div>
           <div>
             <label className="block text-[10px] font-bold text-muted-foreground mb-1 uppercase tracking-wider">Confirm New Password</label>
             <input type="password" placeholder="••••••••" className="w-full px-3 py-2 bg-input border border-border rounded-md text-sm font-bold text-foreground outline-none focus:border-primary" />
           </div>
           
           <div className="flex items-center gap-3">
             <button 
               onClick={handleUpdatePassword}
               disabled={isUpdatingPassword}
               className="px-6 py-2 bg-primary text-card text-sm font-bold rounded-md hover:bg-yellow-500 shadow-md transition-all active:scale-95 w-full sm:w-auto disabled:opacity-50 disabled:pointer-events-none flex items-center gap-2 justify-center"
             >
               {isUpdatingPassword ? <div className="w-4 h-4 border-2 border-card border-t-transparent rounded-full animate-spin"></div> : null}
               {isUpdatingPassword ? 'Updating...' : 'Update Password'}
             </button>
             {showSuccess && <span className="text-sm font-bold text-success motion-safe:animate-in motion-safe:fade-in">Password updated!</span>}
           </div>
        </div>
      </div>

      {/* 2FA Setup */}
      <div className="bg-card border border-border rounded-xl shadow-sm p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
           <div>
             <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
               <SmartphoneNfc size={20} className={profile.is2FAEnabled ? "text-success" : "text-warning"}/> 
               Two-Factor Authentication (2FA)
             </h3>
             <p className="text-sm text-muted-foreground mt-1 max-w-xl">
               Add additional security to your account using two-factor authentication. When logging in, you'll need to enter a code from your authenticator app.
             </p>
           </div>
           <div className="flex-shrink-0">
              <button 
                onClick={handle2FAToggle}
                className={`px-6 py-2 text-sm font-bold rounded-md transition-all border ${profile.is2FAEnabled ? 'bg-danger/10 text-danger border-danger/20 hover:bg-danger hover:text-white' : 'bg-success/10 text-success border-success/20 hover:bg-success hover:text-white'}`}
              >
                {profile.is2FAEnabled ? 'Disable 2FA' : 'Enable 2FA'}
              </button>
           </div>
        </div>

        {profile.is2FAEnabled ? (
           <div className="mt-4 p-4 bg-success/5 border border-success/20 rounded-lg flex items-start gap-3">
             <ShieldAlert className="text-success mt-0.5" size={16}/>
             <p className="text-sm font-semibold text-success">Two-factor authentication is currently ON and protecting your account.</p>
           </div>
        ) : (
           <div className="mt-4 p-4 bg-warning/5 border border-warning/20 rounded-lg flex items-start gap-3">
             <ShieldAlert className="text-warning mt-0.5" size={16}/>
             <p className="text-sm font-semibold text-warning">Two-factor authentication is OFF. We highly recommend enabling it for your account.</p>
           </div>
        )}

      </div>

    </div>
  );
}

