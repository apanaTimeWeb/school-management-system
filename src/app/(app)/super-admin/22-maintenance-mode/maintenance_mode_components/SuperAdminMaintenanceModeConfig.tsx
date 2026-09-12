"use client";

export default function SuperAdminMaintenanceModeConfig() {
  return (
    <div className="bg-card border border-border rounded-lg p-6 shadow-sm flex flex-col gap-8">
      
      <div className="flex flex-col gap-5 max-w-[600px] pl-2">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-text-secondary">Enable maintenance</label>
          <input type="text" className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-text-secondary">Disable maintenance</label>
          <input type="text" className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-text-secondary">Custom maintenance message</label>
          <input type="text" className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-text-secondary">Allowed admin users</label>
          <input type="text" className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-text-secondary">Schedule maintenance</label>
          <input type="text" className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-text-secondary">Maintenance history</label>
          <input type="text" className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" />
        </div>
      </div>

    </div>
  );
}
