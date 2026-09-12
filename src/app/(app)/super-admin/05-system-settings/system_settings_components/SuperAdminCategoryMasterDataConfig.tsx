"use client";

export default function SuperAdminCategoryMasterDataConfig() {
  return (
    <div className="bg-card border border-border rounded-lg p-6 shadow-sm flex flex-col gap-8">
      
      {/* Alert exactly matching checklist string */}
      <div className="p-3 bg-info-bg border border-info/30 rounded-md text-info text-sm font-bold w-fit">
        Central master management:
      </div>

      <div className="flex flex-col gap-5 max-w-[600px] pl-2 mt-[-10px]">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-text-secondary">Student categories</label>
          <input type="text" className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-text-secondary">Parent types</label>
          <input type="text" className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-text-secondary">Staff categories</label>
          <input type="text" className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-text-secondary">Blood groups</label>
          <input type="text" className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-text-secondary">Religions if required</label>
          <input type="text" className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-text-secondary">Nationality</label>
          <input type="text" className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-text-secondary">Languages</label>
          <input type="text" className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-text-secondary">Disability categories where appropriate</label>
          <input type="text" className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-text-secondary">Document types</label>
          <input type="text" className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-text-secondary">Complaint categories</label>
          <input type="text" className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-text-secondary">Leave categories</label>
          <input type="text" className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-text-secondary">Event categories</label>
          <input type="text" className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-text-secondary">Expense categories</label>
          <input type="text" className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-text-secondary">Income categories</label>
          <input type="text" className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" />
        </div>
      </div>

    </div>
  );
}
