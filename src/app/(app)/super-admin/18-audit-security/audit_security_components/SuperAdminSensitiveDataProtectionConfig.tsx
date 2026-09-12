"use client";

export default function SuperAdminSensitiveDataProtectionConfig() {
  return (
    <div className="bg-card border border-border rounded-lg p-6 shadow-sm flex flex-col gap-8">
      
      {/* Alert exactly matching checklist string */}
      <div className="p-3 bg-info-bg border border-info/30 rounded-md text-info text-sm font-bold w-fit">
        विशेष रूप से:
      </div>

      <div className="flex flex-col gap-4 max-w-[600px] pl-2 mt-[-10px]">
        <div className="flex items-center gap-3">
          <input type="checkbox" defaultChecked className="w-4 h-4 cursor-pointer" />
          <label className="text-sm font-bold text-text-secondary">Password</label>
        </div>
        <div className="flex items-center gap-3">
          <input type="checkbox" defaultChecked className="w-4 h-4 cursor-pointer" />
          <label className="text-sm font-bold text-text-secondary">API Secret</label>
        </div>
        <div className="flex items-center gap-3">
          <input type="checkbox" defaultChecked className="w-4 h-4 cursor-pointer" />
          <label className="text-sm font-bold text-text-secondary">Payment Secret</label>
        </div>
        <div className="flex items-center gap-3">
          <input type="checkbox" defaultChecked className="w-4 h-4 cursor-pointer" />
          <label className="text-sm font-bold text-text-secondary">Personal documents</label>
        </div>
        <div className="flex items-center gap-3">
          <input type="checkbox" defaultChecked className="w-4 h-4 cursor-pointer" />
          <label className="text-sm font-bold text-text-secondary">Financial information</label>
        </div>
      </div>

      <div className="p-3 bg-info-bg border border-info/30 rounded-md text-info text-sm font-bold w-fit mt-[-15px]">
        इन पर:
      </div>

      <div className="flex flex-col gap-4 max-w-[600px] pl-2 mt-[-10px]">
        <div className="flex items-center gap-3">
          <input type="checkbox" defaultChecked className="w-4 h-4 cursor-pointer" />
          <label className="text-sm font-bold text-text-secondary">Encryption</label>
        </div>
        <div className="flex items-center gap-3">
          <input type="checkbox" defaultChecked className="w-4 h-4 cursor-pointer" />
          <label className="text-sm font-bold text-text-secondary">Masking</label>
        </div>
        <div className="flex items-center gap-3">
          <input type="checkbox" defaultChecked className="w-4 h-4 cursor-pointer" />
          <label className="text-sm font-bold text-text-secondary">Restricted access</label>
        </div>
        <div className="flex items-center gap-3">
          <input type="checkbox" defaultChecked className="w-4 h-4 cursor-pointer" />
          <label className="text-sm font-bold text-text-secondary">Audit</label>
        </div>
        <div className="flex items-center gap-3">
          <input type="checkbox" defaultChecked className="w-4 h-4 cursor-pointer" />
          <label className="text-sm font-bold text-text-secondary">No plain-text secret display     </label>
        </div>
      </div>

    </div>
  );
}
