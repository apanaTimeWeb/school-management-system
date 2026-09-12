"use client";

export default function SuperAdminSmsConfig() {
  return (
    <div className="bg-card border border-border rounded-lg p-6 shadow-sm flex flex-col gap-8">
      
      <div className="flex flex-col gap-5">
        
        <div className="flex flex-col gap-4 max-w-[600px] pl-2">
          
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-text-secondary">SMS provider</label>
            <input type="text" className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-text-secondary">API configuration</label>
            <input type="text" className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-text-secondary">Sender ID</label>
            <input type="text" className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-text-secondary">Template ID</label>
            <input type="text" className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-text-secondary">Balance/status</label>
            <input type="text" className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" readOnly />
          </div>

          {/* Action Buttons ordered exactly as list vertically */}
          <div className="flex flex-col gap-3 mt-4">
            <button className="px-5 py-2.5 bg-success text-white rounded-md text-sm font-bold text-left hover:bg-success/90 transition-colors shadow-sm w-fit">Test SMS</button>
            <button className="px-5 py-2.5 bg-bg-page text-text-secondary border border-border rounded-md text-sm font-bold text-left hover:bg-card hover:text-primary transition-colors w-fit">Delivery reports</button>
            <button className="px-5 py-2.5 bg-danger-bg text-danger border border-danger/20 rounded-md text-sm font-bold text-left hover:bg-danger hover:text-white transition-colors w-fit">Failed SMS</button>
            <button className="px-5 py-2.5 bg-warning-bg text-warning border border-warning/20 rounded-md text-sm font-bold text-left hover:bg-warning hover:text-white transition-colors w-fit">Retry</button>
          </div>

        </div>
      </div>

    </div>
  );
}
