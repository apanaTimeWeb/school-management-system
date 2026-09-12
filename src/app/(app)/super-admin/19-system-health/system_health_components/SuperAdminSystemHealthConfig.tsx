"use client";

export default function SuperAdminSystemHealthConfig() {
  return (
    <div className="bg-card border border-border rounded-lg p-6 shadow-sm flex flex-col gap-8">
      
      <div className="p-3 bg-info-bg border border-info/30 rounded-md text-info text-sm font-bold w-fit">
        Super Admin को technical overview:
      </div>

      <div className="flex flex-col gap-5 max-w-[600px] pl-2 mt-[-10px]">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-text-secondary">Server status</label>
          <input type="text" className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-text-secondary">Database status</label>
          <input type="text" className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-text-secondary">Storage</label>
          <input type="text" className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-text-secondary">Backup status</label>
          <input type="text" className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-text-secondary">Queue status</label>
          <input type="text" className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-text-secondary">API status</label>
          <input type="text" className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-text-secondary">Notification service</label>
          <input type="text" className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-text-secondary">Payment service</label>
          <input type="text" className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-text-secondary">Error count</label>
          <input type="text" className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-text-secondary">Application version</label>
          <input type="text" className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" />
        </div>
      </div>

    </div>
  );
}
