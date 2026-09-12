"use client";

export default function SuperAdminSuperAdminExportCenterConfig() {
  return (
    <div className="bg-card border border-border rounded-lg p-6 shadow-sm flex flex-col gap-8">
      
      {/* Alert exactly matching checklist string */}
      <div className="p-3 bg-info-bg border border-info/30 rounded-md text-info text-sm font-bold w-fit">
        एक centralized जगह:
      </div>

      <div className="flex flex-col gap-5 max-w-[600px] pl-2 mt-[-10px]">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-text-secondary">Export history</label>
          <input type="text" className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-text-secondary">Who exported</label>
          <input type="text" className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-text-secondary">What data</label>
          <input type="text" className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-text-secondary">Date/time</label>
          <input type="text" className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-text-secondary">File type</label>
          <input type="text" className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-text-secondary">Download</label>
          <input type="text" className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-text-secondary">Expiry</label>
          <input type="text" className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-text-secondary">Delete exported file </label>
          <input type="text" className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" />
        </div>
      </div>

    </div>
  );
}
