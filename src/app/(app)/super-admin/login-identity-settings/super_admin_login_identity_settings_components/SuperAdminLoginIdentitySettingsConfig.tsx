"use client";

export default function SuperAdminLoginIdentitySettingsConfig() {
  return (
    <div className="bg-card border border-border rounded-lg p-6 shadow-sm flex flex-col gap-8">
      
      <div className="flex flex-col gap-4 max-w-[600px] pl-2">
        <div className="flex items-center gap-3">
          <input type="checkbox" defaultChecked className="w-4 h-4 cursor-pointer" />
          <label className="text-sm font-bold text-text-secondary">Username login</label>
        </div>
        <div className="flex items-center gap-3">
          <input type="checkbox" defaultChecked className="w-4 h-4 cursor-pointer" />
          <label className="text-sm font-bold text-text-secondary">Email login</label>
        </div>
        <div className="flex items-center gap-3">
          <input type="checkbox" defaultChecked className="w-4 h-4 cursor-pointer" />
          <label className="text-sm font-bold text-text-secondary">Mobile login</label>
        </div>
        <div className="flex items-center gap-3">
          <input type="checkbox" defaultChecked className="w-4 h-4 cursor-pointer" />
          <label className="text-sm font-bold text-text-secondary">Student ID login</label>
        </div>
        <div className="flex items-center gap-3">
          <input type="checkbox" defaultChecked className="w-4 h-4 cursor-pointer" />
          <label className="text-sm font-bold text-text-secondary">Employee ID login</label>
        </div>
        <div className="flex items-center gap-3">
          <input type="checkbox" defaultChecked className="w-4 h-4 cursor-pointer" />
          <label className="text-sm font-bold text-text-secondary">OTP login where enabled</label>
        </div>
        <div className="flex items-center gap-3">
          <input type="checkbox" defaultChecked className="w-4 h-4 cursor-pointer" />
          <label className="text-sm font-bold text-text-secondary">Password login</label>
        </div>
        <div className="flex items-center gap-3">
          <input type="checkbox" defaultChecked className="w-4 h-4 cursor-pointer" />
          <label className="text-sm font-bold text-text-secondary">Forgot password</label>
        </div>
        <div className="flex items-center gap-3">
          <input type="checkbox" defaultChecked className="w-4 h-4 cursor-pointer" />
          <label className="text-sm font-bold text-text-secondary">Account verification</label>
        </div>
        <div className="flex items-center gap-3">
          <input type="checkbox" defaultChecked className="w-4 h-4 cursor-pointer" />
          <label className="text-sm font-bold text-text-secondary">Email verification</label>
        </div>
        <div className="flex items-center gap-3">
          <input type="checkbox" defaultChecked className="w-4 h-4 cursor-pointer" />
          <label className="text-sm font-bold text-text-secondary">Mobile verification </label>
        </div>
      </div>

    </div>
  );
}
