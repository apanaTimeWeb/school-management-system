"use client";

export default function SuperAdminLibraryMasterConfig() {
  return (
    <div className="bg-card border border-border rounded-lg p-6 shadow-sm flex flex-col gap-8">
      
      <div className="flex flex-col gap-3 max-w-[600px] pl-2">
        <button className="px-5 py-3 bg-bg-page text-text-secondary border border-border rounded-md text-sm font-bold text-left hover:bg-card hover:text-primary transition-colors w-fit">Book categories</button>
        <button className="px-5 py-3 bg-bg-page text-text-secondary border border-border rounded-md text-sm font-bold text-left hover:bg-card hover:text-primary transition-colors w-fit">Member types</button>
        
        <div className="flex flex-col gap-1.5 my-1">
          <label className="text-xs font-bold text-text-secondary">Issue period</label>
          <input type="text" className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" />
        </div>

        <button className="px-5 py-3 bg-bg-page text-text-secondary border border-border rounded-md text-sm font-bold text-left hover:bg-card hover:text-primary transition-colors w-fit">Renewal rules</button>
        <button className="px-5 py-3 bg-bg-page text-text-secondary border border-border rounded-md text-sm font-bold text-left hover:bg-card hover:text-primary transition-colors w-fit">Fine rules</button>
        <button className="px-5 py-3 bg-bg-page text-text-secondary border border-border rounded-md text-sm font-bold text-left hover:bg-card hover:text-primary transition-colors w-fit">Lost book rules</button>
        <button className="px-5 py-3 bg-bg-page text-text-secondary border border-border rounded-md text-sm font-bold text-left hover:bg-card hover:text-primary transition-colors w-fit">Damaged book rules</button>
        <button className="px-5 py-3 bg-bg-page text-text-secondary border border-border rounded-md text-sm font-bold text-left hover:bg-card hover:text-primary transition-colors w-fit">Barcode settings</button>

        <div className="flex flex-col gap-1.5 mt-1">
          <label className="text-xs font-bold text-text-secondary">Library numbering</label>
          <input type="text" className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" />
        </div>
      </div>

    </div>
  );
}
